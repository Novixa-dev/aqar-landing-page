# Aqar URL Audit and Positioning Strategy

**Audit date:** 2026-10-12  
**Method:** Public page text and visible link destinations were reviewed through web retrieval. This is not a substitute for full browser, mobile, console, HTTP-header, Lighthouse, or code-level verification. Treat all findings as a research snapshot; repeat tests before launch.

## Executive finding

There are currently at least three distinct public experiences:

1. Consumer-facing property discovery.
2. Demo installations branded as real-estate businesses.
3. A marketing page that must sell a customizable licensed software solution to business buyers.

The main commercial landing page must make the third experience unmistakable within the first screen. The B2C discovery flow can remain available as a live-demo/secondary path.

## Supplied pages and findings

### A. `https://aqar-landing-page.vercel.app/ar/`

**Visible positioning:** “اكتشف العقار المناسب لك في اليمن” — aimed primarily at people searching for a property. Search controls, property types, featured listing copy, benefits, and discovery flow dominate the page.

**Critical observed issue:** Some property links resolve to `app.novixa-aqar.example`, which is a placeholder hostname, not a production target. This must be replaced with working routes or removed.

**Recommendation:** Do not use this URL as the final paid-software landing page. If useful for property discovery, retain only after all links and content are connected to actual routes. Prefer a redirect or canonical consolidation after selecting the true consumer landing-page URL.

### B. `https://aqar-landingpage.vercel.app/ar`

**Visible positioning:** “عقارات اليمن للبيع والإيجار — شقق وفلل وأراضٍ”. It has category/municipality discovery, a search-first hero, buttons to view the demo and add a property, instructions for finding a property, then a B2B section titled “تدير مكتباً عقارياً؟ احصل على منصتك الخاصة باسمك”.

**Strengths:** Clear Arabic-first consumer proposition; prominent demo link; visible pathway for office owners; explains branded deployment, dashboards/management, multilingual use, and data separation in the B2B section; has FAQ and a final search CTA.

**Issues/opportunities:** The B2B pitch appears after the consumer journey and is not the main hero. Some language and claims such as data isolation, listing review, and comprehensive coverage must be validated against the live application and operating process. Link targets include the Dexal demo and an older Novixa company host; the final page should use stable production routes on the chosen canonical domain. The SEO intent of this page is consumer property discovery, which differs from software-buying intent.

**Recommendation:** Good reference for the B2C portal content architecture, not the best unmodified starting point for the B2B licence sales page. Reuse verified brand assets, genuine feature visuals, and useful copy principles, but build a focused B2B page or route.

### C. `https://aqar-demo.dexal.net/`

**Visible positioning:** “دار حضرموت العقارية للعقارات والاستثمار”; consumer property browsing with links for properties, services, calculators, news, company profile, contact, language, login, and registration.

**Recommendation:** Treat as a custom-branded demonstration. Confirm that the domain and brand are deliberately authorized and current before using them as a public proof link. Do not confuse the client's branded demo with the canonical Novixa Aqar product marketing page.

### D. `https://aqar-demo.novixa.dev/`

**Visible positioning:** “نوفيكسا عقار منصة عقارية متكاملة”; public property search plus categories, featured listings, and navigation for calculators, services, news, company, contact, and authentication.

**Recommendation:** Use as the primary generic product demo only after QA verifies workflows, sample-data labeling, permissions, the bilingual switch, and mobile behavior. It is a product demo, not the software sales page.

### E. `https://aqar-demo2.novixa.dev/`

**Visible positioning:** “رسو الاستثمارية / RUSU Real Estate”, a high-end branded deployment example. The visible content includes decorative stock photography, prominent numerical claims such as `350+` clients, `15+` years of experience, and `400+` residential units, as well as property descriptions and a Riyadh location.

**Risk:** These figures and descriptions were not independently verified. If these are demonstration values, presenting them as real operational proof is misleading. Visible sample descriptions should also be reviewed for internal consistency. Do not feature the page publicly as a real customer case study unless the brand/customer has authorized it and all claims are true.

**Recommendation:** Either (1) label the entire demo clearly “عرض توضيحي — بيانات وصور تجريبية”، remove fictional metrics, and use it only to demonstrate branding flexibility; or (2) replace every sample metric/listing with real, authorized material. Never imply that RUSU or another branded customer has purchased or endorsed the product without permission and evidence.

## Why a B2B-focused landing page is the better commercial choice

The supplied sales notes describe Aqar as a licensed and customized software package starting at $500. This has a different audience and conversion from a consumer searching for an apartment. Business buyers need to understand:

- What operational problem the software addresses.
- What property, customer, staff, and workflow capabilities are available.
- How role-specific access works.
- How a branded deployment and domain are configured.
- What is included in the baseline package versus paid custom work.
- How hosting, support, maintenance, updates, and training are handled.
- How to inspect the actual software, ask questions, and request a tailored quote.

The first-screen conversion should therefore be “اطلب عرضًا مخصصًا” / “احجز عرضًا توضيحيًا”, with “استكشف الديمو” as the secondary CTA. Avoid a primary “ابحث عن عقار” CTA on this B2B page; link to it as a separate user journey.

## Recommended URL architecture

Choose one official, stable, canonical B2B marketing URL on a domain controlled by Novixa. Examples to consider, only after checking the actual existing routes and deployment:

- `https://novixa.dev/ar/products/aqar`
- `https://aqar.novixa.dev/ar/`

Do not publish both as equal independent indexable copies. Select one, make the canonical self-referential, point internal links and sitemap to it, and redirect or canonicalize deprecated hosts where appropriate. Do not assume either example route currently exists.

Possible separation:

- `/ar/products/aqar` — B2B product landing page.
- `/en/products/aqar` — English equivalent.
- A chosen demo subdomain — live demo, labeled clearly as demo.
- Existing consumer property search — remains separate if it is a supported product journey.
- A separate campaign page for marketers/referral partners only if the affiliate program has approved rules.

## Immediate blockers before publication

1. Fix placeholder or broken links and verify every CTA against real routes.
2. Select and confirm the single canonical marketing URL.
3. Decide whether B2B software sales or consumer property discovery is the primary conversion goal.
4. Remove unverified metrics, endorsements, logos, testimonials, and sample property claims.
5. Mark demo data as demo data.
6. Verify every feature claim and role-specific permission in the actual application.
7. Set explicit pricing scope: $500 starting package, exclusions, hosting/domain, support, customization, and licence terms.
8. Verify all bilingual routes, canonicals, `hreflang`, sitemap, OG previews, and demo indexing policy.
9. Run Playwright/browser QA, mobile QA, accessibility QA, and performance tests after implementation.

## Known limitations of this audit

- Page text was checked, but visual design was not fully inspected in a real interactive browser at every viewport.
- Demo logins, authorization boundaries, database behaviour, and maintenance/contract workflows were not security-audited.
- HTTP response headers, source HTML, DNS, image licensing, accessibility tree, Lighthouse/CrUX field data, and Google Search Console status have not been verified here.
- A public listing visible in a demo is not proof that it is a genuine available property or production data.

## Competitor pattern worth borrowing (not copying)

Buildium's public property-management page groups capabilities into understandable business outcomes: operations, leasing, accounting/payments, marketing, performance, onboarding, and support. That demonstrates the value of grouping a large feature inventory by user job rather than dumping dozens of unrelated feature cards. Aqar should group only capabilities that have been verified in its own product, and must not copy competitor claims, customer numbers, reviews, or visual identity.
