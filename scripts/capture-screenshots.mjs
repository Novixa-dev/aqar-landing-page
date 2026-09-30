#!/usr/bin/env node
/**
 * Regenerates the product screenshots used on this landing page.
 *
 * The site's brand rules (see PLAN.md → "Honesty constraints") require real
 * product UI rather than mockups, so these images must come from a running
 * Aqar instance. Re-run this whenever the product's UI changes.
 *
 *   npm run capture                      # public pages only
 *   AQAR_ADMIN_EMAIL=... AQAR_ADMIN_PASSWORD=... npm run capture
 *                                        # …plus the authenticated panels
 *
 * Options (env vars):
 *   AQAR_BASE_URL         default https://aqar-demo.dexal.net
 *   AQAR_ADMIN_EMAIL      seeded admin account, enables the panel shots
 *   AQAR_ADMIN_PASSWORD   its password
 *   AQAR_OUT              default src/assets/screenshots
 *
 * Requires Playwright:  npm i -D playwright  &&  npx playwright install chromium
 * (PLAYWRIGHT_EXECUTABLE can point at an existing Chromium instead.)
 */
import { mkdir } from 'node:fs/promises';
import path from 'node:path';

const BASE = process.env.AQAR_BASE_URL ?? 'https://aqar-demo.dexal.net';
const OUT = process.env.AQAR_OUT ?? 'src/assets/screenshots';
const EMAIL = process.env.AQAR_ADMIN_EMAIL;
const PASSWORD = process.env.AQAR_ADMIN_PASSWORD;

const VIEWPORT = { width: 1440, height: 900 };

/** name → path. These map 1:1 onto the imports in src/components/*.astro. */
const PUBLIC_PAGES = [
  ['home', '/'],
  ['properties', '/properties'],
  ['property-detail', '/properties/1'],
  ['calculators', '/calculators'],
];

/**
 * The investment-analytics panel is a crop out of the full listing page —
 * it is the product's clearest differentiator and deserves its own tile.
 * Re-measure `top` if the listing layout changes; the assertion below
 * catches a crop that has drifted off the panel.
 */
const ANALYTICS_CROP = { left: 90, top: 1765, width: 620, height: 372 };

async function main() {
  let chromium;
  try {
    ({ chromium } = await import('playwright'));
  } catch {
    console.error('Playwright is not installed.  npm i -D playwright && npx playwright install chromium');
    process.exit(1);
  }

  await mkdir(OUT, { recursive: true });
  const browser = await chromium.launch({
    ...(process.env.PLAYWRIGHT_EXECUTABLE && { executablePath: process.env.PLAYWRIGHT_EXECUTABLE }),
  });

  // Arabic is the product's default locale and the one the page shows, so
  // capture it rather than switching to English.
  const ctx = await browser.newContext({ viewport: VIEWPORT, deviceScaleFactor: 2, locale: 'ar' });

  for (const [name, route] of PUBLIC_PAGES) {
    const page = await ctx.newPage();
    await page.goto(BASE + route, { waitUntil: 'networkidle', timeout: 60_000 });
    await page.waitForTimeout(2_000);
    await page.screenshot({ path: path.join(OUT, `${name}.png`) });
    console.log(`✓ ${name}.png  ←  ${route}`);
    await page.close();
  }

  // Full listing page, then crop the analytics panel out of it.
  const detail = await ctx.newPage();
  await detail.goto(`${BASE}/properties/1`, { waitUntil: 'networkidle', timeout: 60_000 });
  await detail.waitForTimeout(2_000);
  const fullPath = path.join(OUT, '.property-full.png');
  await detail.screenshot({ path: fullPath, fullPage: true });
  await detail.close();

  const sharp = (await import('sharp')).default;
  const { height } = await sharp(fullPath).metadata();
  if (height && ANALYTICS_CROP.top + ANALYTICS_CROP.height > height) {
    console.warn('⚠ analytics crop is past the end of the page — re-measure ANALYTICS_CROP');
  } else {
    await sharp(fullPath).extract(ANALYTICS_CROP).toFile(path.join(OUT, 'investment-analytics.png'));
    console.log('✓ investment-analytics.png  ←  crop of /properties/1');
    console.log('  → open it and confirm it still frames the analytics panel');
  }

  if (EMAIL && PASSWORD) {
    const auth = await browser.newContext({ viewport: VIEWPORT, deviceScaleFactor: 2, locale: 'ar' });
    const page = await auth.newPage();
    try {
      await page.goto(`${BASE}/admin/login`, { waitUntil: 'networkidle', timeout: 60_000 });
      await page.fill('input[type="email"], input[name="email"]', EMAIL);
      await page.fill('input[type="password"], input[name="password"]', PASSWORD);
      await page.click('button[type="submit"]');
      await page.waitForLoadState('networkidle', { timeout: 60_000 });
      await page.waitForTimeout(2_500);
      for (const [name, route] of [
        ['admin-dashboard', '/admin'],
        ['staff-dashboard', '/staff'],
        ['agent-dashboard', '/agent'],
      ]) {
        await page.goto(BASE + route, { waitUntil: 'networkidle', timeout: 60_000 });
        await page.waitForTimeout(1_500);
        await page.screenshot({ path: path.join(OUT, `${name}.png`) });
        console.log(`✓ ${name}.png  ←  ${route}`);
      }
    } catch (err) {
      console.warn(`⚠ authenticated capture failed: ${err.message.split('\n')[0]}`);
    }
    await auth.close();
  } else {
    console.log('ℹ set AQAR_ADMIN_EMAIL / AQAR_ADMIN_PASSWORD to also capture the role panels');
  }

  await browser.close();
  console.log(`\nDone. Screenshots written to ${OUT}/`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
