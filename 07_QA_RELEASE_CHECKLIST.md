# QA and Release Checklist — Novixa Aqar Landing Page

Use this as a test record. Mark each item `PASS`, `FAIL`, `BLOCKED`, or `NOT APPLICABLE` and include evidence (route, screenshot, command output, or test case). Don't mark a test PASS simply because source code appears to implement it.

## 1. Product, content, and conversion

- [ ] First-screen headline says Aqar is configurable real-estate software for businesses.
- [ ] B2B buyer is identifiable within five seconds.
- [ ] Main CTA is request demo / tailored consultation / quote, and the destination works.
- [ ] Secondary CTA opens the intended real demo.
- [ ] Price from $500 is current and approved before showing publicly.
- [ ] Baseline package vs customization / hosting / domain / support / updates are clearly distinguished.
- [ ] Every feature claim has a code/demo verification note.
- [ ] No claims about guaranteed ROI, market leader status, security certification, customer counts, or years in business without proof.
- [ ] Sample/demo content is labelled where visitors might mistake it for real customers/listings.
- [ ] License/source-code ownership statements match the real written offer.
- [ ] FAQ answers agree with the product, proposal, and sales messages.

## 2. Routes and navigation

Test all known current endpoints:

- [ ] `https://aqar-landing-page.vercel.app/ar/`
- [ ] `https://aqar-landingpage.vercel.app/ar`
- [ ] `https://aqar-demo.dexal.net/`
- [ ] `https://aqar-demo.novixa.dev/`
- [ ] `https://aqar-demo2.novixa.dev/`
- [ ] Final chosen canonical marketing URL (fill actual URL here): `____________________`
- [ ] Arabic route and English equivalent.
- [ ] Header navigation anchors.
- [ ] Main CTA and secondary CTA.
- [ ] Footer navigation and legal/contact links.
- [ ] Browser back/forward and direct deep link work.
- [ ] All `.example`, `localhost`, preview, stale, and broken URLs removed from the production output.
- [ ] Trailing-slash redirects are consistent.
- [ ] External routes open correctly and safely.

## 3. Demo integrity

- [ ] One primary generic demo identified.
- [ ] Primary demo works without unexplained failures.
- [ ] Role-specific test paths have been validated.
- [ ] Shared test credentials are not present in public page copy or source.
- [ ] No customer PII/real private property-owner details in screenshots.
- [ ] Fictional/demo data is labelled as such.
- [ ] `aqar-demo2` numeric claims have been verified or removed.
- [ ] Brand name and permissions for any client-branded showcase have been confirmed.
- [ ] Demo domains have an intentional indexing policy.

## 4. Form / contact flow

- [ ] Required fields are clear.
- [ ] At least one usable contact method is required.
- [ ] Invalid email/phone and missing required fields are handled accessibly.
- [ ] Errors are tied to the corresponding inputs.
- [ ] Valid form submission reaches the actual backend/contact destination.
- [ ] A success message appears only after confirmed success.
- [ ] Backend errors show a retry/alternative-contact path.
- [ ] Button/loading state prevents duplicate submissions where appropriate.
- [ ] Rate limit/anti-spam behaviour is tested if the endpoint exists.
- [ ] API keys and secrets are not exposed client-side.
- [ ] Submitted data is stored/transmitted only as intended and retention is documented.
- [ ] PII is not sent in analytics event properties.
- [ ] Consent/privacy messaging matches the real policy and regions.
- [ ] No accidental auto-send through messaging links; external messaging requires user confirmation.

## 5. Responsive device matrix

Capture screenshots of the full page and the critical hero/form/menu at minimum:

| Viewport width | Checks |
|---:|---|
| 320 px | No overflow; copy wraps; CTA remains usable. |
| 360 px | Standard small mobile layout. |
| 390 px | Modern phone. |
| 430 px | Wide phone. |
| 768 px | Tablet portrait / breakpoint transition. |
| 820 px | Tablet layout. |
| 1024 px | Tablet landscape / compact laptop. |
| 1280 px | Desktop. |
| 1440 px | Wide desktop. |

For each width:

- [ ] No horizontal scroll.
- [ ] No overlapping text or controls.
- [ ] Hero CTA and product image are clearly ordered.
- [ ] Image crops preserve the important UI content.
- [ ] Nav/menu remains usable.
- [ ] Cards/feature groups reflow intentionally.
- [ ] Form controls and error messages fit.
- [ ] Sticky header/mobile CTA does not cover content or focus.
- [ ] Footer columns collapse logically.

## 6. Arabic / English review

- [ ] Arabic document language and `dir="rtl"` correct.
- [ ] English language and `dir="ltr"` correct.
- [ ] Arabic copy is fluent and not merely mirrored machine translation.
- [ ] English copy is idiomatic and business-oriented.
- [ ] Language switch preserves the equivalent route where possible.
- [ ] All visible strings translated, including error/success/loading/empty states.
- [ ] Directional arrows/iconography are correct in both directions.
- [ ] Logo/brand mark is not accidentally mirrored.
- [ ] Phone numbers, emails, currency, punctuation, dates, and numbers render coherently.
- [ ] Forms, accordions, drawers, breadcrumbs, and focus order are correct in both locales.
- [ ] Arabic screenshots inspected with long headings, buttons, and FAQ answers.

## 7. Accessibility

- [ ] Semantic header/nav/main/footer landmarks.
- [ ] One clear H1 and logical heading hierarchy.
- [ ] Skip link visible on focus and works.
- [ ] All interactive controls can be operated from keyboard.
- [ ] Focus is visible and not obscured.
- [ ] Menu/dialog/accordion focus behaviours are sound.
- [ ] Input labels are visible and programmatic.
- [ ] Validation errors are associated with relevant fields and announced where appropriate.
- [ ] Sufficient contrast across text, UI, hover, disabled, and focus states.
- [ ] Status is not conveyed by colour alone.
- [ ] Images have correct alt behaviour.
- [ ] Reduced motion setting is honoured.
- [ ] Target sizes and spacing suit touch input.
- [ ] Screen-reader reading order makes sense in Arabic and English.
- [ ] Axe/Lighthouse checks run, with findings triaged.
- [ ] Manual keyboard review completed; record browser/OS.

## 8. SEO / metadata / structured data

- [ ] Title and description are accurate, distinct, and production-ready.
- [ ] Canonical points to the one selected official marketing URL per locale.
- [ ] Arabic/English alternate language tags are reciprocal and valid.
- [ ] Visible text appears in server-rendered or otherwise crawlable HTML.
- [ ] Heading structure is semantic and content is not hidden for SEO.
- [ ] Internal links use canonical routes.
- [ ] Robots file is available and does not accidentally block the page.
- [ ] Sitemap includes canonical indexable pages only.
- [ ] No demo/private route leaks into the public sitemap unintentionally.
- [ ] No staging/preview URL in OG, JSON-LD, canonical, sitemap, or footer.
- [ ] JSON-LD parses and matches visible factual content.
- [ ] No fake rating/reviews/customer-count schema.
- [ ] Google Search Console ownership and sitemap plan recorded.
- [ ] Search Console URL inspection / canonical check done after deploy.

## 9. Open Graph / social sharing

- [ ] OG title matches page language.
- [ ] OG description matches page language and B2B position.
- [ ] OG URL equals canonical URL.
- [ ] OG image is publicly accessible over HTTPS with correct MIME/dimensions.
- [ ] Image is readable when preview is small.
- [ ] `og:image:alt` is accurate.
- [ ] X/Twitter card metadata exists where required.
- [ ] Arabic and English routes use appropriate social preview assets where configured.
- [ ] Social preview tests use the actual production URL.

## 10. Performance

- [ ] Run production build, not just development server.
- [ ] Lighthouse/PageSpeed run on mobile and desktop; record scores and test location/device.
- [ ] LCP image optimized and prioritized appropriately.
- [ ] Below-the-fold content images are lazy-loaded where appropriate.
- [ ] All images reserve space to avoid layout shift.
- [ ] Images have reasonable encoded transfer size and responsive variants.
- [ ] Fonts are optimized and Arabic glyphs render correctly.
- [ ] Unnecessary JS and third-party scripts removed.
- [ ] No background video or heavy animation that harms the page.
- [ ] Core Web Vitals target checked: LCP ≤2.5 s, INP ≤200 ms, CLS ≤0.1 for field data at p75 when available.
- [ ] Lab results are not described as field data.

## 11. Build, tests, logs, network

- [ ] Baseline and final build command results recorded.
- [ ] Existing test suite passes or failures are explicitly documented.
- [ ] Linter and type checker pass or failures are explicitly documented.
- [ ] Browser console contains no new page-caused errors.
- [ ] Network panel has no unexplained 404/500 or failed asset requests.
- [ ] No hydration/render mismatch if framework uses hydration.
- [ ] No stale source-map secrets or client bundles exposing configuration.
- [ ] Bundle/dependency changes reviewed for necessity.
- [ ] No production data was mutated by demo testing.

## 12. Release decision

Choose exactly one:

- `READY FOR DEMO` — core page/CTA works; known production caveats are clearly disclosed.
- `READY WITH KNOWN FIXES` — usable, but known non-blocking issues remain, all listed.
- `NOT READY` — core CTA, route, localization, form, legal/commercial content, or serious mobile/accessibility/SEO issue blocks release.

Required final report:

- Candidate/production URL.
- Date and browser/device matrix.
- Screenshots/artifacts.
- Link audit results.
- Verified/unverified features.
- Build/lint/typecheck/tests.
- SEO/OG validation.
- Accessibility/performance results.
- Remaining risks, owners, and next actions.
