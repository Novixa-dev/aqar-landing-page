# Novixa Aqar — Landing Page

Bilingual (Arabic-first) marketing site for **Novixa Aqar**, the real-estate
management platform by Novixa.

- **Live demo of the product:** https://aqar-demo.dexal.net
- **Product source:** https://github.com/Novixa-dev/novixa-aqar
- **Why the page is built this way:** [`PLAN.md`](PLAN.md)

Astro 5 + Tailwind CSS 4, static output. Arabic at `/`, English at `/en`.
Roughly ten lines of JavaScript ship to the browser, all of it the mobile menu.

---

## Quick start

```bash
npm install
npm run dev        # http://localhost:4321
```

| Script | What it does |
|---|---|
| `npm run dev` | Dev server with HMR |
| `npm run build` | Type-check, then build to `dist/` |
| `npm run build:fast` | Build without the type-check |
| `npm run check` | Type-check only |
| `npm run preview` | Serve the built `dist/` locally |
| `npm run capture` | Re-shoot the product screenshots from a running Aqar instance |

Node 20+ (CI uses 22).

---

## Before you deploy

Open **`site.config.ts`**. It is the only file holding contact details, URLs
and pricing — nothing else in the codebase hard-codes them.

```ts
contact: {
  whatsapp: 'TODO:WHATSAPP_NUMBER',  // digits only, international, no '+'
  email:    'TODO:SALES_EMAIL',
  phone:    'TODO:PHONE_NUMBER',
},
url: 'https://aqar.novixa.dev',      // the real domain
requireRealContacts: false,          // → true once the above are filled in
```

While a value is still `TODO:`, the CTA that needs it **hides itself** instead
of rendering a dead link, and the page falls back to pointing at the demo. Every
build prints a warning listing what is unset. Flipping `requireRealContacts` to
`true` turns that warning into a build failure, so a half-configured site can't
reach production.

> The phone number and email in the demo's footer belong to the **fictional**
> demo agency ("دار حضرموت العقارية"), not to Novixa. Don't reuse them.

---

## Deploying

`npm run build` writes a fully static `dist/`. There is no server component.

- **Static host / CDN** (Netlify, Vercel, Cloudflare Pages, S3): build command
  `npm run build`, publish directory `dist`.
- **Your own Nginx / Apache**: copy `dist/` to the web root.
- **GitHub Pages**: publish `dist/`; set `site.url` to the Pages URL first, or
  the sitemap and canonical tags will point at the wrong origin.

---

## Editing content

All copy lives in two dictionaries:

```
src/i18n/ar.ts   ← Arabic, the primary language
src/i18n/en.ts   ← English, typed against the Arabic as `Dict`
```

Add a key to one and forget the other and `npm run build` fails with a type
error — the two can't silently drift.

### Two rules when editing `ar.ts`

**1. Only claim what the product actually does.** Every capability named on the
page appears under *Available now* in
[`content/research/FEATURE_REALITY_CLASSIFICATION.md`](https://github.com/Novixa-dev/novixa-aqar/blob/main/content/research/FEATURE_REALITY_CLASSIFICATION.md)
in the product repo. That file is the source of truth and is kept in sync with
each release; anything classified *Partially available* or *Planned* belongs in
the readiness section (`status`), not the features grid. No customer counts,
testimonials or case studies — none are real yet.

**2. Never put a Latin word directly after an Arabic connecting waw.** `وSage`
splits the bidi run and the browser reorders the fragments — `(Xero وSage)`
renders as `(Sageg Xero)`. Put Latin names in one trailing run instead:
`التكامل المحاسبي: Xero, Sage`. CI enforces this:

```bash
grep -nE "و[A-Za-z]" src/i18n/ar.ts   # must return nothing
```

---

## Screenshots

The brand rules require real product UI, not mockups, so every image is a
screenshot of the running demo. `src/assets/screenshots/` holds the PNG
originals; Astro converts them to responsive WebP at build time.

```bash
npm i -D playwright && npx playwright install chromium
npm run capture                                            # public pages
AQAR_ADMIN_EMAIL=… AQAR_ADMIN_PASSWORD=… npm run capture    # + role panels
```

`AQAR_BASE_URL` points it at a different instance. The investment-analytics
image is a crop out of the listing page — the script warns if the crop drifts,
but open the result and check it before committing.

---

## Layout

```
site.config.ts              Contacts, URLs, pricing, feature switches
astro.config.mjs            Static output, sitemap, contact-placeholder guard
src/
  i18n/{ar,en}.ts           All copy
  layouts/Base.astro        <head>, structured data, hreflang, nav + footer
  components/
    Landing.astro           Section order for both locales
    Hero, Problem, Platform, Features, Roles, Analytics,
    Bilingual, TechStack, Status, Pricing, Partners, Faq, FinalCta
    Section, BrowserFrame, Icon, Logo, Nav, Footer
  pages/
    index.astro             Arabic  → /
    en/index.astro          English → /en
    robots.txt.ts           Generated so the sitemap URL follows site.url
  assets/screenshots/       Product screenshots (PNG originals)
  styles/global.css         Tailwind theme tokens, RTL/LTR typography
scripts/capture-screenshots.mjs
```

RTL and LTR share one set of classes — the styles use Tailwind's logical
properties (`ms-`, `me-`, `ps-`, `pe-`, `text-start`), so there is no mirrored
stylesheet to keep in sync.

---

## Licence

The landing page follows the product: MIT. Novixa Aqar itself is a
substantially redeveloped derivative of the open-source
[Liberu Real Estate](https://github.com/liberu-real-estate/real-estate-laravel)
project, also MIT.
