# Implementation Discovery & Reconnaissance Report — Novixa Aqar B2B Landing Page

**Date:** 2026-10-13  
**Workspace:** `/home/ahmed-al-kasadi/Ahmed 2026/aqar-landing`  
**Sibling Reference Repositories Inspected:**
- `/home/ahmed-al-kasadi/Ahmed 2026/novixa` (Official Novixa Next.js 15 App Router website)
- `/home/ahmed-al-kasadi/Ahmed 2026/novixa-aqar` (Novixa Aqar Laravel 13 / Filament 5 application)

---

## 1. Repository & Stack Assessment

### Current Workspace (`aqar-landing`)
- Contains the 10 specification documents (`01_PRODUCT_BRIEF_AND_MESSAGES.md` through `09_RESEARCH_REFERENCES.md` and `README.md`).
- Confirmed with product owner to build a standalone, production-ready **Next.js 15 App Router + TypeScript + Tailwind CSS v4** application inside `aqar-landing` that shares Novixa's exact design system, self-hosted typography, metadata architecture, and verification suite.

### Sibling Company Repo (`../novixa`) Reusable Architecture
- **Framework:** Next.js 15.5.4 (App Router), React 19.1.1, TypeScript 5.8, Tailwind CSS v4 (`@tailwindcss/postcss`), `lucide-react`.
- **Design Tokens:**
  - Canvas: Deep Slate (`#020617` / `#0f172a`), dark-first architectural aesthetic.
  - Primary Action: Royal Blue (`#2563EB` / `blue-600`).
  - Secondary Accent: Teal (`#14B8A6` / `teal-500/600`).
  - Muted Text Floor: `text-slate-400` (`#94A3B8`) minimum for body/caption text to guarantee WCAG AA contrast (≥ 7.0:1); `text-slate-500` reserved strictly for decorative borders/dividers.
  - Surface Treatment: `.glass-card` (`rgba(15, 23, 42, 0.92)` with hairline border, no `backdrop-filter` on repeated cards to prevent mobile Style & Layout bottlenecks) and `.glass-overlay` (for sticky header/modals).
- **Typography:** Self-hosted WOFF2 fonts via `next/font/local`:
  - `Alexandria` (600, 700, 800) for display headings (`--font-display`).
  - `IBM Plex Sans Arabic` (400, 500, 600, 700) for Arabic body (`--font-arabic`).
  - `Inter` (400, 500, 600, 700) for English body (`--font-english`).
- **Dynamic OG Image Generation:** `/og` route using `next/og` + `IBMPlexSansArabic-SemiBold.ttf` with RTL word-order handling for Satori.

---

## 2. Feature Verification Ledger (Audited Against `../novixa-aqar`)

Every candidate claim in `01_PRODUCT_BRIEF_AND_MESSAGES.md` and `03_PRD_AQAR_B2B_LANDING_PAGE.md` was cross-checked against `../novixa-aqar/routes/web.php`, `config/currencies.php`, `docs/TEST_USERS.md`, and `docs/AQAR_PROGRESS.md`:

| Candidate Capability | Status | Evidence in `../novixa-aqar` | Public Copy Policy |
|---|---|---|---|
| Public property listings, search & filtering | **Verified** | `PropertyList`, `PropertyController::search`, `PropertyDetail`, `PropertyComparison`, `WishlistManager` in `routes/web.php` | Present as core public portal capability |
| Owner property submission & buyer requests | **Verified** | `/submit-property` (`PropertySubmissionForm`) and `/property-request` (`PropertyRequestForm`), verified live in `AQAR_PROGRESS.md` (P0-4) | Present as verified intake workflows |
| Viewing bookings & appointments + ICS export | **Verified** | `PropertyBooking`, `BookingController`, `BookingCalendar`, `/bookings/{booking}/calendar.ics` | Present as verified booking/viewing workflow |
| 8 Role-based workspaces + Public portal (9 panels) | **Verified** | Filament 5 panels verified in `AQAR_PROGRESS.md` (P0-1, P0-3) & `docs/TEST_USERS.md`: Admin (`super_admin`), Staff (`staff`), Agent (`agent`), Landlord (`landlord`), Tenant (`tenant`), Buyer (`buyer`), Seller (`seller`), Contractor (`contractor`), plus App panel | Present in Role Matrix with accurate role descriptions; no "unlimited users" claims |
| Tenant, lease & maintenance workflows | **Verified** | `RentalApplicationForm`, `TenancyAgreementController`, `MaintenanceRequest` scoped by tenant/contractor (P0-2) | Present as supported operational tracking |
| Automated legal e-signature binding | **Partially verified** | `AQAR_PROGRESS.md` (P1-2) notes `Document` and `LeaseAgreement` signing flow is partially wired | Do **not** claim automated legal e-signature; describe contract/lease record organization |
| Real-estate calculators, news & content | **Verified** | `/calculators` (`CalculatorsComponent`), `/news` (`NewsList`, `NewsDetail`) | Present as optional/included modules |
| Bilingual UI (AR RTL / EN LTR) | **Verified** | `/lang/{locale}` route, `SetLocaleMiddleware`, `lang/ar.json` & `lang/en.json` (P1-14) | Present UI localization as verified; note content localization follows agreed deployment scope |
| Multi-currency display (`YER`, `SAR`, `USD`) | **Verified** | `config/currencies.php` defines `YER` (default), `SAR`, and `USD` per-record formatting without live exchange-rate conversion | Explicitly state per-listing currency display (`YER`, `SAR`, `USD`) without automatic exchange-rate conversion |
| Branded deployment & custom domain | **Verified** | `GeneralSettings`, `SiteSettingsSeeder`, demonstrated across `aqar-demo.novixa.dev` and branded demos | Present as configured per agreed scope; hosting/domain fees quoted transparently |

---

## 3. Defects in Existing Live Variants to Resolve

1. **B2C vs. B2B Hero Confusion:** Existing Vercel pages (`aqar-landing-page.vercel.app/ar/` and `aqar-landingpage.vercel.app/ar`) lead with consumer property search ("اكتشف العقار المناسب لك في اليمن") instead of selling the B2B licensed software platform.
2. **Broken Placeholder Links:** `app.novixa-aqar.example` appears in the older landing page variant. All `.example` links must be eliminated and tested.
3. **Unlabeled Sample Metrics on `aqar-demo2`:** `aqar-demo2.novixa.dev` displays sample RUSU branding and illustrative numbers (`350+`, `15+`, `400+`). On our landing page, `https://aqar-demo.novixa.dev/` is the primary generic demo, while `https://aqar-demo2.novixa.dev/` and `https://aqar-demo.dexal.net/` are presented strictly in the customization showcase with explicit labels that their branding and figures are illustrative demo data (`بيانات وهوية تجريبية لأغراض العرض فقط`).

---

## 4. Route, Content & Lead Form Strategy

- **Locale Routes:**
  - `/ar` — Primary Arabic RTL B2B landing page (`/` redirects permanently to `/ar`).
  - `/en` — Secondary English LTR B2B landing page.
  - `/ar/legal/privacy`, `/en/legal/privacy`, `/ar/legal/terms`, `/en/legal/terms` — Real legal/privacy pages matching Novixa's system behavior.
- **Lead Form & Backend (`/api/leads`):**
  - Client-side and server-side validation (Full name, Business/office name, Business type, Country/city, Phone/WhatsApp or Email required, Needs multiselect, User/property scale, Optional message, Consent checkbox, Honeypot, Rate limiting).
  - Server-side persistence (local JSONL/memory store + PostgreSQL/Resend/SMTP support when configured) so leads are recorded with a receipt ID (`AQAR-...`) and honest delivery status (`delivered` vs `stored`), plus immediate verified fallback actions (prefilled WhatsApp / `mailto:hello@novixa.dev` / copy summary) so no inquiry is ever lost or faked.
