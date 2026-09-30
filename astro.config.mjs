// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { site, isPlaceholder } from './site.config.ts';

/**
 * Fails the build when `site.requireRealContacts` is on but a contact channel
 * is still a `TODO:` placeholder. Without this, a site could ship to a real
 * domain with its primary call-to-action silently missing — the CTA components
 * degrade gracefully rather than rendering a broken link, which is safe but
 * easy not to notice.
 */
function contactGuard() {
  return {
    name: 'aqar:contact-guard',
    hooks: {
      'astro:build:start': () => {
        if (!site.requireRealContacts) {
          const pending = Object.entries(site.contact)
            .filter(([, v]) => isPlaceholder(v))
            .map(([k]) => k);
          if (pending.length) {
            console.warn(
              `\n  ⚠ Contact placeholders still unset: ${pending.join(', ')}.` +
                `\n    Their calls-to-action are hidden until you fill them in` +
                `\n    (site.config.ts), then set requireRealContacts: true.\n`,
            );
          }
          return;
        }
        const missing = Object.entries(site.contact)
          .filter(([, v]) => isPlaceholder(v))
          .map(([k]) => k);
        if (missing.length) {
          throw new Error(
            `site.config.ts: requireRealContacts is true but these are still placeholders: ${missing.join(', ')}`,
          );
        }
        if (site.url.includes('TODO')) {
          throw new Error('site.config.ts: `url` is still a placeholder.');
        }
      },
    },
  };
}

// Static output: the whole site builds to plain HTML/CSS/JS in `dist/` and can
// be served by any host (Nginx, Apache, Netlify, Vercel, GitHub Pages, S3 +
// CDN). No Node runtime is required in production.
export default defineConfig({
  site: site.url,
  output: 'static',
  trailingSlash: 'ignore',
  build: { inlineStylesheets: 'auto' },
  integrations: [
    contactGuard(),
    sitemap({
      i18n: { defaultLocale: 'ar', locales: { ar: 'ar', en: 'en' } },
    }),
  ],
  vite: { plugins: [tailwindcss()] },
});
