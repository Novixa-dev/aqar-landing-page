# Novixa Aqar — Landing Page Plan

The reasoning behind this site: what it is for, who it talks to, what it is
allowed to claim, and what still has to happen before it goes live.

Written in English to match the convention in `Novixa-dev/novixa-aqar`
(`content/strategy/LANGUAGE_STRATEGY.md`: internal documentation is English,
audience-facing content is Arabic-first).

---

## 1. What this page is — and what it is not

**It is** the product marketing page for **Novixa Aqar**, sold to real-estate
businesses as a source-code licence they run themselves.

**It is not** the demo. `aqar-demo.dexal.net` already exists and runs under a
fictional agency identity ("دار حضرموت العقارية") to show the product in a
believable business context. This page's single most important job is to send a
qualified visitor *into* that demo.

That split drives the whole design: the page argues, the demo proves.

| | This landing page | The demo |
|---|---|---|
| Audience | Agency owners, brokers, property managers, developers | Their end customers (property seekers) |
| Question answered | "Should my business run on this?" | "What does the product feel like?" |
| Primary CTA | Open the demo | — |
| Branding | Novixa Aqar | Fictional client agency |

---

## 2. Source material

Everything on the page traces to something verifiable. Nothing was invented.

| Source | What it gave us |
|---|---|
| `novixa-dev/novixa-aqar` — code | 101 models, 153 migrations, 9 Filament panels, 101 test files, Laravel 13 / PHP 8.4 / Filament 5 / Livewire 4 / Tailwind 4 / MySQL, MIT licence |
| `content/research/FEATURE_REALITY_CLASSIFICATION.md` | **The binding source of truth for every claim.** See §3 |
| `content/strategy/BRAND_POSITIONING.md` | Positioning, and the explicit anti-"generic AI startup" checklist |
| `content/strategy/LANGUAGE_STRATEGY.md` | AR-primary / EN-secondary decision for web content |
| `content/audience/PERSONAS.md` | Buyer segments; agency + broker + property manager are the ones this page sells to |
| `docs/TEST_USERS.md` | The 9 roles and what each one does |
| `aqar-demo.dexal.net` (live) | Every screenshot on the page |

### Corrections made after the first pass
- **`novixa.dev` still does not resolve**, though it is the `homepage` in both
  `composer.json` and `package.json` and the Novixa site's own canonical
  `og:url`. The site itself is live at `novixa-cyan.vercel.app`, so
  `links.vendorSite` points there; swap both once DNS is pointed.
- **The demo footer's phone number is real.** `+967 776 248 526` is Novixa's
  own number, confirmed by the product owner — the first pass assumed it
  belonged to the fictional demo agency. The email in that footer
  (`info@darhadhramaut.ye`) *is* fictional and is not reused.
- The Novixa site has its own Aqar product page at `/ar/products/aqar`.
  See §10 for a claims mismatch between it and this page.

---

## 3. Honesty constraints (non-negotiable)

`FEATURE_REALITY_CLASSIFICATION.md` classifies every capability as *Available
now / Partially available / Demo-prototype / Planned / Conceptual*, and states
the rule directly: **no landing page ships a claim that isn't on the "Available
now" list.** This page follows that rule literally.

| Classification | How this page treats it |
|---|---|
| **Available now** | Sold, in the features grid |
| **Partially available** | Disclosed by name in the readiness section, with the caveat |
| **Planned** (wired, unconfigured) | Listed under "present in the code but not active" |
| **Conceptual** | Absent |

Concretely, that means the page **does not** claim: live WalkScore data,
portal syndication (Rightmove/Zoopla/OnTheMarket), accounting integrations
(Xero/Sage), CRM sync, DocuSign, tenant screening, social login, or real-time
WebSocket features. Each is named, in Arabic and English, as *not active*.

It also carries **zero** customer counts, testimonials, partner logos, case
studies or adoption figures — none exist yet, and the project's own rules
forbid inventing them. The structured data (`SoftwareApplication`) deliberately
omits `aggregateRating` for the same reason.

> **The readiness section is a sales asset, not a disclaimer.** For a
> source-licence sale to a skeptical market, publishing the limits *before* the
> buyer finds them is the strongest available trust signal — and it is the one
> thing a vaporware competitor cannot copy.

---

## 4. Positioning and argument structure

Per `BRAND_POSITIONING.md`, Aqar's lane is **data-and-insight-led**, not
"biggest listings database". The page is built as one argument:

1. **Hero** — the promise, in one line, plus the real product above the fold.
2. **Problem** — six concrete failure modes of running an agency by hand.
   No statistics, because no honest ones are available for this market.
3. **Platform** — the structural answer: two front doors, one database.
4. **Features** — only what exists, grouped so a buyer can find their own job.
5. **Roles** — nine panels; permissions enforced server-side, not by hiding buttons.
6. **Investment analytics** — the differentiator, on a dark band, with the real panel.
7. **Arabic-first** — proof, not a bullet; includes the honest note that
   *content* is single-language per row.
8. **Architecture** — for the buyer's developer, who will be asked "is this maintainable?"
9. **Readiness** — the limits, stated first (see §3).
10. **Pricing** — a starting anchor, with what moves it.
11. **Partners** — reseller recruitment, rate discussed privately.
12. **FAQ** — the ten questions a real buyer asks, including
    "was this built from scratch?" answered plainly (it is a substantially
    redeveloped derivative of the MIT-licensed Liberu Real Estate project).
13. **Final CTA** — back to the demo.

### Decisions taken with the product owner
| Question | Decision |
|---|---|
| Contact channels | WhatsApp `+967776248526`, email, and a `tel:` link — live in `site.config.ts` |
| Pricing | Starting price ($500 / ≈2,000 SAR), framed as a floor |
| Demo logins | **Published** — admin + agent accounts, in the closing CTA (*reversed:* was "sales call only") |
| Partner programme | **30% commission stated on the page** (*reversed:* was "rate not published") |

Two of those were reversed by the public launch post, which shares the demo
logins and the commission rate openly. The page follows the launch post — a
landing page that hid what the announcement already published would only add
friction. `site.demoAccess.publishLogins` and
`site.partners.publishCommissionRate` switch both back off without touching a
component, should that change again.

---

## 5. Design direction

The brand rules name what to avoid: meaningless gradients, floating-UI-mockup
clichés, generic stock imagery, hollow "innovative solution" copy, synthetic
stock people, cinematic effects with no purpose.

What this page does instead:

- **Light, editorial base with ink-dark anchors** (hero, analytics, final CTA).
  A fully dark site is the house style of exactly the generic category the
  brand rules warn against; a light, high-contrast page reads as credible
  business software.
- **Real screenshots in browser chrome with a visible URL.** The frame is the
  anti-mockup device: it says *this is a running page you can go and open*.
  Every screenshot links to the page it was taken from.
- **Colour carries meaning, not decoration.** Emerald = verified, amber =
  caveat, slate = not active. The readiness section is the whole palette at once.
- **One decorative element on the page** — a faint CSS grid behind the dark
  bands, ~200 bytes of `repeating-linear-gradient`, no image.
- **Colours are the product's own**, taken from `public/images/logo.svg` in the
  product repo (`#0F172A`, `#3B82F6`, `#10B981`) and its `theme-color` (`#2563EB`).

---

## 6. Technical decisions

| Decision | Why |
|---|---|
| **Astro 5, static output** | Two languages sharing one component tree, zero runtime, deployable to any host. No Node process in production. |
| **Tailwind CSS 4 with logical properties** | `ms-/me-/ps-/pe-/text-start` means one set of classes serves RTL and LTR. No mirrored stylesheet. |
| **Cairo Variable, self-hosted via npm** | One family covers Arabic and Latin. Self-hosted because the primary audience is on modest connections and a font-CDN request is an extra DNS + TLS round trip before first paint. `unicode-range` means a browser pulls only the subset it renders (~32 KB Arabic, ~36 KB Latin). |
| **~10 lines of JavaScript total** | Only the mobile menu. The FAQ uses `<details>`; everything else is HTML and CSS. |
| **Astro `<Image>` → WebP** | The hero screenshot goes 485 KB → 61 KB; four responsive widths per image. |
| **`site.config.ts` as the only source of contacts/URLs/pricing** | One file to edit before launch, and a build guard that enforces it (§8). |
| **Light-only (`color-scheme: light`)** | A deliberate choice: fewer states to get wrong in two writing directions, and marketing sites are conventionally light. |

### Why not the alternatives
- **Next.js** — a React runtime for a page with one interactive element is
  weight the audience pays for and the team maintains.
- **Plain HTML** — two languages would mean maintaining the same page twice,
  and they *will* drift.
- **Laravel** (matching the product) — a server and a database to run a page
  that never changes per request.

---

## 7. Internationalisation and RTL

Arabic is the default at `/`; English lives at `/en`. Both are generated from
one component tree and two dictionaries (`src/i18n/ar.ts`, `src/i18n/en.ts`),
typed so that a key added to one and forgotten in the other fails the build.

The English copy is an **adaptation**, not a translation of the Arabic — per
`LANGUAGE_STRATEGY.md`, which is explicit that literal translation
underperforms in both directions.

**RTL bugs found and fixed during the build.** An Arabic connecting *waw* glued
directly to a Latin word (`وZoopla`, `وSage`, `وHTTPS`) splits the bidi run and
the browser reorders the fragments — `(Xero وSage)` rendered as `(Sageg Xero)`.
Fixed by restructuring the copy so Latin names sit in one trailing LTR run
(`التكامل المحاسبي: Xero, Sage`). Anyone editing `ar.ts` should re-check:

```bash
grep -nE "و[A-Za-z]" src/i18n/ar.ts   # must return nothing
```

Digits follow the product: Western numerals (the demo renders `38,140,643 ر.ي`),
not Arabic-Indic.

---

## 8. Before launch

The build warns about the first group on every run and **fails** once
`requireRealContacts: true` is set in `site.config.ts`.

**Done.** `requireRealContacts: true` is set, so the build now *fails* if any
of these is reverted to a placeholder:

- [x] `contact.whatsapp` → `967776248526`
- [x] `contact.email` → `ak01redwan@gmail.com`
- [x] `contact.phone` → `+967776248526`
- [x] `links.vendorSite` → the live Novixa deployment

**Still open:**

- [ ] `url` — currently `https://aqar.novixa.dev`. Canonical tags, `og:url` and
      the sitemap all derive from it, so point the domain (or change the value)
      before launch, or search engines index the wrong origin.
- [ ] Swap `links.vendorSite` / `links.vendorProduct` to `novixa.dev` once it resolves.
- [ ] Consider a business-domain sales address. `ak01redwan@gmail.com` works and
      is what the launch post uses, but a `@novixa.dev` address reads stronger on
      a B2B page and keeps a personal inbox away from scrapers.

The placeholder machinery stays in place regardless: if a contact value is ever
cleared, its CTA hides itself rather than rendering a dead link, and the page
falls back to the demo CTA.

Also worth doing:
- [ ] Re-run `npm run capture` against the demo if its UI has changed
- [ ] Decide on analytics (nothing is installed; no cookie banner is needed as shipped)

---

## 9. Deferred, deliberately

Not oversights — scoped out of v1 with a reason.

| Item | Why it waits |
|---|---|
| Lead-capture form | Needs a backend and a real inbox. WhatsApp is the region's actual conversion channel (`content/strategy/PLATFORM_STRATEGY.md`), so it is the better first CTA anyway. |
| Case studies / testimonials | No real customers yet. Inventing them is forbidden by the project's own rules. |
| Blog / market-content section | Belongs to the wider content system (`content/PLAN.md`, Phase 4) — not a landing-page concern. |
| Pricing tiers | Needs real numbers per tier from the business. The starting anchor ships instead. |
| Dashboard screenshots | The panels need an authenticated session. `npm run capture` takes them once credentials are supplied; this environment's network policy blocked the demo host. The published demo logins now let a visitor reach the panels themselves in the meantime. |
| Dark mode | See §6. |

---

## 10. Found while researching — not this repo's problem

On the live demo's listing page (`/properties/1`), the **Community Events**
section renders English lorem-ipsum seed data: *"Similique quas suscipit
molestiae officiis…"*, "Food Truck Rally", "Neighborhood Cleanup Day", and US
street addresses, inside an otherwise fully Arabic page.

Every prospect sent to the demo from this landing page will scroll past it. It
belongs in `novixa-dev/novixa-aqar` (the seeder), not here, but it undercuts
the credibility this page is built to establish. Worth fixing before any push
on the demo link.

### The Novixa site claims Aqar features this page cannot verify

`novixa-cyan.vercel.app` describes Novixa Aqar as including:

- **بوابة مخصصة للوسطاء العقاريين مع نظام إدارة العمولات** — a broker portal with commission management
- **تنبيهات مواعيد تجديد العقود** — automatic lease-renewal alerts
- **أتمتة دورة التحصيل** — collection-cycle automation

None of these appear under *Available now* in
`FEATURE_REALITY_CLASSIFICATION.md`, and I did not find them while reading the
codebase. They are **deliberately absent from this landing page**, per §3.

Two pages describing the same product differently is a real risk once a
prospect reads both. Either verify them against the code and add them to the
classification file — then they can be sold here too — or bring the corporate
site's Aqar copy in line with it. The mismatch is the problem, not the
direction of the fix.
