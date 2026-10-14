import { expect, test } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import fs from 'node:fs';
import path from 'node:path';

const SCREENSHOT_DIR = path.join(process.cwd(), 'docs/aqar-landing/screenshots');
fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });

test.describe('Novixa Aqar B2B Landing Page — Full E2E, Responsive & Accessibility Suite', () => {
  test('redirects / to /ar with RTL direction and Arabic metadata', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveURL(/\/ar$/);

    const htmlLang = await page.locator('html').getAttribute('lang');
    const htmlDir = await page.locator('html').getAttribute('dir');
    expect(htmlLang).toBe('ar');
    expect(htmlDir).toBe('rtl');

    await expect(page.locator('h1')).toContainText('نظام عقاري متكامل');
  });

  test('renders /en with LTR direction and switches language cleanly', async ({ page }) => {
    await page.goto('/en');
    const htmlLang = await page.locator('html').getAttribute('lang');
    const htmlDir = await page.locator('html').getAttribute('dir');
    expect(htmlLang).toBe('en');
    expect(htmlDir).toBe('ltr');

    await expect(page.locator('h1')).toContainText('A Complete Real-Estate Platform');

    // Click visible language switcher in header to go to Arabic
    await page.locator('header a[href="/ar"]:visible').first().click();
    await expect(page).toHaveURL(/\/ar$/);
    await expect(page.locator('html')).toHaveAttribute('dir', 'rtl');
  });

  test('verifies interactive tabs, 8-role matrix filter, and FAQ accordion', async ({
    page,
  }) => {
    await page.goto('/ar');

    // Product Preview interactive tabs
    const previewTabs = page.locator('[role="tablist"] [role="tab"]');
    await expect(previewTabs).toHaveCount(4);
    await previewTabs.nth(1).click();
    await expect(previewTabs.nth(1)).toHaveAttribute('aria-selected', 'true');

    // Role Matrix filter buttons
    const roleSection = page.locator('#roles');
    await expect(roleSection.locator('article')).toHaveCount(8);

    const landlordBtn = roleSection.getByRole('button', { name: /Landlord/i });
    await landlordBtn.click();
    await expect(roleSection.locator('article')).toHaveCount(1);
    await expect(roleSection.locator('article').first()).toContainText('/landlord');

    // Reset to all 8 roles
    await roleSection.getByRole('button', { name: /8/ }).first().click();
    await expect(roleSection.locator('article')).toHaveCount(8);

    // FAQ Accordion
    const faqSection = page.locator('#faq');
    const faqButtons = faqSection.locator('button[aria-expanded]');
    await expect(faqButtons).toHaveCount(7);
    await faqButtons.nth(2).click();
    await expect(faqButtons.nth(2)).toHaveAttribute('aria-expanded', 'true');
  });

  test('validates and submits the Demo Request Form end-to-end via /api/leads', async ({
    page,
  }) => {
    await page.goto('/ar');

    const form = page.locator('#demo-form form');
    await form.locator('button[type="submit"]').click();

    // Expect accessible validation errors
    await expect(form.locator('#lead-name')).toHaveAttribute('aria-invalid', 'true');
    await expect(form.locator('#lead-name-error')).toBeVisible();

    // Fill valid B2B lead data
    await form.locator('#lead-name').fill('خالد المنصور');
    await form.locator('#lead-company').fill('شركة المدار العقارية');
    await form.locator('#lead-business-type').selectOption('property_management');
    await form.locator('#lead-city').fill('الرياض، السعودية');
    await form.locator('#lead-contact-method').selectOption('whatsapp');
    await form.locator('#lead-contact-value').fill('+966 50 987 6543');
    await form.locator('#lead-scope-tier').selectOption('baseline_500');
    await form.locator('#lead-notes').fill('ندير 80 وحدة إيجارية ونرغب بتفعيل لوحة المالك والمستأجر.');

    await form.locator('button[type="submit"]').click();

    // Verify honest success state with generated AQAR reference ID
    const statusBox = page.locator('#demo-form [role="status"]');
    await expect(statusBox).toBeVisible();
    await expect(statusBox).toContainText('AQAR-');
  });

  test('audits all links, demo URLs, legal routes, and OG social cards', async ({
    page,
    request,
  }) => {
    for (const locale of ['ar', 'en']) {
      await page.goto(`/${locale}`);
      const hrefs = await page
        .locator('a[href]')
        .evaluateAll((els) => els.map((el) => el.getAttribute('href') || ''));

      expect(hrefs.length).toBeGreaterThan(10);
      for (const href of hrefs) {
        expect(href).not.toContain('.example');
        expect(href.trim()).not.toBe('');
        expect(href.trim()).not.toBe('#');
      }

      // Check external links have rel="noopener noreferrer"
      const externalRels = await page
        .locator('a[target="_blank"]')
        .evaluateAll((els) => els.map((el) => el.getAttribute('rel') || ''));
      for (const rel of externalRels) {
        expect(rel).toContain('noopener');
      }
    }

    // Legal routes
    for (const legalPath of [
      '/ar/legal/privacy',
      '/ar/legal/terms',
      '/en/legal/privacy',
      '/en/legal/terms',
    ]) {
      const res = await request.get(legalPath);
      expect(res.status()).toBe(200);
    }

    // OG Image generator route
    for (const ogLang of ['ar', 'en']) {
      const ogRes = await request.get(`/og?lang=${ogLang}`);
      expect(ogRes.status()).toBe(200);
      expect(ogRes.headers()['content-type']).toContain('image/png');
    }
  });

  test('verifies zero horizontal overflow across 5 viewports and captures screenshots', async ({
    page,
  }) => {
    const viewports = [
      { name: 'mobile-320', width: 320, height: 700 },
      { name: 'mobile-375', width: 375, height: 812 },
      { name: 'tablet-768', width: 768, height: 1024 },
      { name: 'laptop-1024', width: 1024, height: 768 },
      { name: 'desktop-1440', width: 1440, height: 900 },
    ];

    for (const locale of ['ar', 'en']) {
      for (const vp of viewports) {
        await page.setViewportSize({ width: vp.width, height: vp.height });
        await page.goto(`/${locale}`, { waitUntil: 'networkidle' });

        const overflow = await page.evaluate(() => {
          return (
            document.documentElement.scrollWidth >
            document.documentElement.clientWidth
          );
        });
        expect(
          overflow,
          `Horizontal overflow detected on /${locale} at ${vp.width}px`
        ).toBe(false);

        if (vp.width === 375 || vp.width === 1440) {
          await page.screenshot({
            path: path.join(SCREENSHOT_DIR, `aqar-${locale}-${vp.name}.png`),
            fullPage: false,
          });
        }
      }
    }
  });

  test('passes WCAG AA accessibility checks via @axe-core/playwright on /ar and /en', async ({
    page,
  }) => {
    for (const locale of ['ar', 'en']) {
      await page.goto(`/${locale}`, { waitUntil: 'networkidle' });
      const results = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
        .analyze();

      expect(results.violations).toEqual([]);
    }
  });
});
