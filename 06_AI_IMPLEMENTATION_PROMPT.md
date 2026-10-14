# Master AI Implementation Prompt — Novixa Aqar Landing Page

Copy everything between **BEGIN PROMPT** and **END PROMPT** into Claude Code, Codex, Antigravity, or another coding agent after opening the actual Aqar/marketing-page repository. Keep the companion PRD and technical guidance in context.

--- BEGIN PROMPT ---

You are acting as a coordinated senior product team: Product Manager, UX Researcher, Senior Product Designer, Senior Frontend Engineer, SEO Engineer, Accessibility Engineer, Performance Engineer, QA Lead, and release owner.

Your task is to inspect, redesign, implement, test, and prepare a production-quality B2B marketing landing page for **Novixa Aqar | نوفكسا عقار**, the configurable real-estate software product from Novixa.

## Required source documents

Read these project documents before coding:

- `03_PRD_AQAR_B2B_LANDING_PAGE.md`
- `04_READY_TO_USE_COPY_AR_EN.md`
- `05_TECHNICAL_SEO_ACCESSIBILITY_PERFORMANCE.md`
- `07_QA_RELEASE_CHECKLIST.md`
- `09_RESEARCH_REFERENCES.md`
- Also review `01_PRODUCT_BRIEF_AND_MESSAGES.md` and `02_LIVE_SITE_AUDIT_AND_STRATEGY.md` for supplied product facts and existing-site defects.

If any of these files is missing, inspect the available pack and report the gap. Do not pretend to have read unavailable materials.

## Mission and positioning

Build a dedicated B2B product landing page for businesses that may license/configure Aqar. It must explain that Aqar is more than a consumer property listing: it combines a public property experience with supported property records, team roles, customer/party records, and operational workflows according to the verified version.

**Primary audience:** real-estate offices, brokerages, property-management businesses, and real-estate companies.

**Primary CTA:** request a tailored demo/discovery call/quote, using the real contact or lead endpoint that exists.

**Secondary CTA:** explore a real, verified interactive demo.

The existing consumer-facing property discovery page may remain as a separate experience. Do not remove functioning product routes or force the B2B landing page to replace the B2C home unless the repository context makes this necessary and you document why.

## Hard rules

1. **Inspect before changing.** Map the repo, framework, routes, locales, translation architecture, CSS/design tokens, assets, current forms and endpoints, demo integrations, metadata, sitemap/robots, tests, build/deployment configuration, and dependencies.
2. **Do not migrate frameworks just to build a landing page.** Reuse the architecture already in the target repository. If it is a Laravel/Blade/Livewire/Tailwind/Vite project, preserve that unless evidence justifies another path. If it is Next.js, use the current App Router conventions where present. Never guess the stack from the web domain.
3. **Verify all features.** Inspect code and test real flows. The product notes mention property listings, search/filtering, roles, customers, requests, viewings, contracts, maintenance, calculators, content/news, chat/contact, bilingual UI, multi-currency display, and custom branding. These are candidate claims, not automatic proof. Maintain a claim ledger with `Verified`, `Partially verified`, `Not verified`, and `Not available`; only publish clear factual claims that pass verification.
4. **No fake proof.** Do not create customer counts, years in business, testimonials, review stars, customer logos, awards, case-study claims, conversion percentage, ROI metrics, or fictional customer stories. If a demo uses sample records, label the demo as such and remove fabricated stats.
5. **Do not expose credentials.** Never put demo passwords, private emails, API keys, environment variables, or real customer data into public copy, source comments, screenshots, metadata, or commits.
6. **Fix link integrity.** The old landing variant includes `app.novixa-aqar.example` placeholder targets. Find all occurrences of `.example`, `localhost`, old previews, and stale staging URLs. Replace with verified real routes or remove the control. Do not invent routes.
7. **No false form success.** Connect the form to a real, tested backend endpoint or use a verified contact fallback. Do not show success unless the server actually acknowledges a successful submission.
8. **No visual template spam.** Avoid repetitive card grids, random gradients, gratuitous glassmorphism, excessive glows, fake floating dashboards, decorative 3D shapes, over-animation, and UI controls that don't work. Use screenshots from the real app and design a distinct product-focused page.
9. **No weakening tests.** Preserve current tests. Don't delete tests, hide errors, relax lint settings, or mark failing checks as passing to achieve a green status.
10. **No unsupported release claims.** You must report what you actually ran and what remains untested. Do not claim production-ready if a required route, form, locale, metadata, or mobile layout is broken.

## Phase 1 — Repository reconnaissance (no UI coding yet)

- Inspect top-level file tree and package/framework manifests.
- Identify the current landing page route and whether there are multiple copies.
- Map locale routes and language switch behavior.
- Identify official logo, product logo, colors, fonts, icon library, current component system, image pipeline, and breakpoints.
- Inspect the current public product/demo route and actual feature code for claims proposed in the PRD.
- Inspect contact/lead form endpoints and data handling. Verify actual API behavior; never assume.
- Inspect title/description/canonical/hreflang/OG metadata, robots, sitemap, structured data, and deployment domain settings.
- Run the existing build/tests before modifications to establish a baseline.
- Inspect available skills. If installed/available, prioritize `ui-ux-pro-max`, design review, accessibility, SEO/performance, and Playwright/browser tooling. Use them as review aids, not as automatic proof.
- Write a short reconnaissance report to `docs/aqar-landing/IMPLEMENTATION_DISCOVERY.md` covering stack, current entry points, existing reusable components, defects, verified feature claims, and recommended implementation plan.

Only after this report, continue to design.

## Phase 2 — Choose and document the route strategy

- Inspect actual DNS and route architecture before choosing the final URL.
- Use one official, stable canonical route for the B2B product marketing page and one equivalent route per language.
- The possible `novixa.dev` paths in the docs are examples only; don't create links to routes that don't exist.
- Keep the consumer marketplace route/demos separate if they are still useful.
- Centralize the primary demo URL and official company contact URL/email in a typed config/content source where appropriate.
- Fix or remove every stale/placeholder destination, and document intentional external links.

## Phase 3 — Content and design

Use the PRD and bilingual copy file as the baseline, but adjust any unsupported sentence to match the actual verified feature inventory. Keep Arabic as the primary experience; do not mechanically translate an English layout.

Implement this story, in this order unless repo evidence supports a better flow:

1. Compact brand header + navigation + clear language switch.
2. B2B hero with a clear software proposition, real application screenshots, request-demo primary CTA, and demo secondary CTA.
3. Who the product serves.
4. Practical business problems/outcomes without invented quantified ROI.
5. Verified capability groups.
6. Real product walkthrough using safe, genuine app screenshots or the actual demo.
7. Verified role-based workspace matrix.
8. Branded deployment/customization scope.
9. Transparent starting price and clear inclusions/exclusions.
10. Simple delivery process.
11. Specific FAQ that resolves licensing, domain, hosting, support, roles, languages, and price questions.
12. Lead/contact form using real success/error handling.
13. Footer with valid navigation and legal/contact routes only where they exist.

Visual direction:

- Calm, modern, premium but practical real-estate software.
- Use current repository tokens first. Existing Novixa materials mention blue `#2563EB`, deep navy `#0F172A`, and teal `#14B8A6` as a starting reference, not a license to override the actual product brand.
- Use screenshots that prove specific claims, with sanitized sample data and labels when appropriate.
- Treat whitespace, typography, hierarchy, real content, and micro-interactions as quality tools. Avoid empty spectacle.
- Design mobile and tablet intentionally.

## Phase 4 — Clean implementation

- Use small and coherent components, typed content/configuration, the existing translation mechanism, and consistent tokens.
- Prefer server/static rendering for page content; add client-side interactivity only when required.
- Use semantic HTML and framework-native patterns.
- Keep data fetching bounded and avoid unnecessary database queries.
- Optimize all important images; preserve dimensions/aspect ratio. Prioritize only the true LCP visual.
- Support reduced motion, visible focus, meaningful labels, error states, and keyboard navigation.
- Never use `href="#"`, dead social icons, fake search controls, or forms that do nothing.
- Do not leave raw translation keys, placeholder paragraphs, dev labels, dummy links, or untranslated text in production routes.

## Phase 5 — SEO/social metadata

For each indexable locale route, implement/test:

- Unique, concise title and accurate description.
- Self-canonical production URL.
- Reciprocal `hreflang` references for the real Arabic and English routes.
- Open Graph metadata: title, description, website type, absolute canonical URL, absolute OG image, site name, and alt text.
- Appropriate X/Twitter image card metadata.
- Favicon and touch icon from approved assets.
- Public `robots.txt` and `sitemap.xml` with only canonical indexable URLs.
- Valid JSON-LD `Organization`/`WebSite`, and `SoftwareApplication` where appropriate and accurate.
- No fake `aggregateRating`, fake review, invented organization data, fake address, or misleading offer schema.
- A deliberate indexing decision for demo sites/private app routes; do not accidentally index a duplicate sample-data demo.
- No preview hostname, `localhost`, `.example`, undefined URL, or stale staging host in metadata.

If using Next App Router, follow its native Metadata APIs and `robots.ts`, `sitemap.ts`, `opengraph-image.*` conventions. If the repo uses another stack, follow equivalent existing conventions.

## Phase 6 — Lead form and analytics

- Verify backend route before wiring form UI.
- Validate both client-side and server-side.
- Add rate limiting / anti-spam if server-side functionality exists and it is appropriate for the stack.
- Ensure user receives true success/error/working state.
- Use a genuine fallback contact option.
- Implement minimal events for demo click, CTA click, form start, form success, and language switch if analytics is already supported and lawful. Do not ship a new heavy analytics dependency without reason.
- Never pass name, email, phone, free-text message, or secret values to analytics event properties.

## Phase 7 — Real browser and QA review

Use Playwright or the repository's established browser automation where available. Check:

- Every CTA and footer link.
- Form validation, loading, success and error path.
- Arabic route, English route, and locale switching.
- 320/360/390/430/768/820/1024/1280/1440px viewport families (or representative adjacent sizes if the tool has a limit).
- RTL and LTR screenshots, reading order, currency/number rendering, mobile menu, drawers, accordions, and focus states.
- Console errors, failed requests, 404s, broken images, horizontal overflow, layout shifts, and font loading.
- Keyboard-only flow and accessibility tree; use axe/Lighthouse when installed.
- All external/demo links manually.
- Social metadata, canonical, robots, sitemap, JSON-LD and actual rendered HTML.
- Build, lint, type check and current test suite after final changes.

Targets: strive for LCP ≤ 2.5 s, INP ≤ 200 ms, CLS ≤ 0.1 at the 75th percentile when field data is available. Use Lighthouse/PageSpeed as diagnostics; don't claim field compliance from a single lab test.

After testing, do a skeptical visual critique. Ask: “Could this page be an interchangeable AI-generated real-estate template?” If yes, remove repetitive decoration and strengthen its product-specific hierarchy.

## Phase 8 — Final report

Write `docs/aqar-landing/FINAL_QA_REPORT.md` with:

1. Executive result.
2. Actual production/candidate URLs tested.
3. Features verified and features not verified/deferred.
4. Files/components/routes changed.
5. Screenshot list for each locale and representative breakpoints.
6. Build, lint, type-check, test, and browser-automation outputs as actually observed.
7. Link-integrity results.
8. SEO/metadata/robots/sitemap/JSON-LD results.
9. OG/X card checks.
10. Accessibility findings and known limitations.
11. Performance measurements and test conditions.
12. Form endpoint and data-handling evidence.
13. Deployment instructions and required environment variables without secret values.
14. Remaining risks and follow-up actions.
15. Verdict: `READY FOR DEMO`, `READY WITH KNOWN FIXES`, or `NOT READY`.

Do not stop at recommendations or create documentation only: implement and test the actual landing page in the repository. If blocked by missing credentials, unavailable backend, or failed third-party services, implement the safe parts, document the blocker, and do not fake a successful integration.

--- END PROMPT ---
