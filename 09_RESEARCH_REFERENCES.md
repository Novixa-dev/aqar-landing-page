# Research References — Official Technical Guidance and Product Comparisons

**Research snapshot:** 2026-10-12. Links may evolve; re-check official docs at implementation time. The recommendations in this pack distinguish official technical requirements from design inspiration.

## A. Aqar pages supplied by Novixa

1. **Current/older Arabic marketing page:** https://aqar-landing-page.vercel.app/ar/  
   Visible content emphasizes property discovery/search in Yemen; some links currently resolve to the placeholder host `app.novixa-aqar.example` in the inspected public text. Verify/fix before use.
2. **Alternative Arabic landing page:** https://aqar-landingpage.vercel.app/ar  
   Consumer property search is the hero purpose; a separate section for real-estate offices explains a custom-branded independent system.
3. **Branded demo:** https://aqar-demo.dexal.net/  
   Uses “دار حضرموت العقارية” branding.
4. **Generic Aqar demo:** https://aqar-demo.novixa.dev/  
   Public property browsing and application navigation.
5. **Alternative branded demo:** https://aqar-demo2.novixa.dev/  
   Uses RUSU branding and visible sample-like numerical claims that must be verified or removed/labeled.

## B. Official SEO and Google Search Central

1. [SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide) — guidance for useful content, titles, snippets, crawling, links, and search presentation.
2. [How to specify a canonical URL](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls) — self-canonicals, consistent internal links, redirect/canonical consistency, and relation to hreflang.
3. [Build and submit a sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap) — absolute canonical URLs, crawlable indexable routes, and sitemap constraints.
4. [Create a robots.txt file](https://developers.google.com/crawling/docs/robots-txt/create-robots-txt) — crawler rules and sitemap directive; `robots.txt` is not a security mechanism or canonicalization solution.
5. [Localized versions of pages](https://developers.google.com/search/docs/specialty/international/localized-versions) — correctly connected alternate language URLs.
6. [Organization structured data](https://developers.google.com/search/docs/appearance/structured-data/organization) — use real organization identity, logo, site and contact details.
7. [SoftwareApplication structured data](https://developers.google.com/search/docs/appearance/structured-data/software-app) — app markup requirements and guidance. Only provide details that agree with the actual offer; search appearance is not guaranteed.
8. [Site names in Google Search](https://developers.google.com/search/docs/appearance/site-names) — `WebSite` identity and canonical homepage guidance.
9. [Rich Results Test](https://search.google.com/test/rich-results) — validation tool; a pass does not guarantee a rich result.
10. [Google Search Console](https://search.google.com/search-console/about) — monitor indexing, verify the site, inspect URLs, and submit sitemap.

## C. Framework documentation — use the docs that match the current stack

### Next.js App Router (only if the repository already uses it)

1. [Metadata and OG images](https://nextjs.org/docs/app/getting-started/metadata-and-og-images) — metadata APIs, file conventions, icons, Open Graph images.
2. [generateMetadata](https://nextjs.org/docs/app/api-reference/functions/generate-metadata) — route-aware metadata and absolute OG image URLs.
3. [robots.txt convention](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots) — static or generated robots rules.
4. [sitemap.xml convention](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap) — generated sitemap, absolute URLs, and multilingual alternates.
5. [Metadata files API](https://nextjs.org/docs/app/api-reference/file-conventions/metadata) — file-based metadata assets and route conventions.

**Rule:** these are implementation references, not a suggestion to convert Laravel or another existing app to Next.js.

## D. Open Graph / social sharing

1. [The Open Graph protocol](https://ogp.me/) — core fields include `og:title`, `og:type`, `og:image`, and `og:url`; the protocol also supports description, site name, locale, and image metadata.
2. [Next.js metadata and OG images](https://nextjs.org/docs/app/getting-started/metadata-and-og-images) — examples for static/dynamic OG images within Next.js.
3. [X developer documentation — Cards](https://developer.x.com/en/docs/x-for-websites/cards/overview/abouts-cards) — card metadata behavior for X, subject to current platform support.

Recommended asset to prepare: a branded 1200×630 image with the correct product identity, legible title, and real/sanitized product imagery. Verify exact format/accessibility and previews after deploying rather than trusting assumed platform behavior.

## E. Performance and Core Web Vitals

1. [Web Vitals overview](https://web.dev/articles/vitals) — metric definitions and field assessment.
2. [Core Web Vitals thresholds](https://web.dev/articles/defining-core-web-vitals-thresholds/) — context for good thresholds.
3. [Optimize INP](https://web.dev/articles/optimize-inp) — reduce long main-thread tasks and interaction delays.
4. [Optimize CLS](https://web.dev/articles/optimize-cls) — prevent unexpected layout shifts.
5. [PageSpeed Insights](https://pagespeed.web.dev/) — lab and field diagnostics where available.
6. [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview) — lab auditing for performance, accessibility, and other page-quality signals.

Targets used by this pack for a good field experience at p75: LCP ≤ 2.5 seconds; INP ≤ 200 milliseconds; CLS ≤ 0.1. Measure after real deployment. Lab tests help diagnosis but should not be represented as field data.

## F. Accessibility

1. [W3C WCAG 2.2](https://www.w3.org/TR/WCAG22/) — normative standard.
2. [WCAG 2.2 quick reference](https://www.w3.org/WAI/WCAG22/quickref/) — checkable criteria and techniques.
3. [What's new in WCAG 2.2](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/) — relevant additions such as focus appearance and target size.
4. [axe DevTools](https://www.deque.com/axe/devtools/) — automated accessibility checks; manual testing is still needed.

Target WCAG 2.2 AA as an implementation goal, and report verified results rather than claiming complete compliance from a scan alone.

## G. Real-estate software competitor pattern (information architecture, not facts to copy)

1. [Buildium features](https://www.buildium.com/features/) — groups capabilities by business tasks such as operations, leasing, accounting/payments, marketing, performance, and support. Useful lesson: organize Aqar features by workflow and business outcome rather than listing a long feature dump. Do not copy Buildium's claims, logos, testimonials, visual style, or feature promises.

## H. Visual inspiration (study hierarchy, not copy layout or brand)

These are design showcases, not product specifications or evidence that Novixa has the same features:

1. [DoorLoop SaaS homepage concept (Dribbble)](https://dribbble.com/shots/20118999-Doorloop-SaaS-Homepage) — product screenshot and demo CTA in a property-management SaaS context.
2. [Real-estate management SaaS landing concept (Dribbble)](https://dribbble.com/shots/25580750-Real-estat-management-SaaS-website-design) — strong headline paired with dashboard preview.
3. [Propel Edge landing concept (Dribbble)](https://dribbble.com/shots/24205066-Landing-Page-for-Property-Management-Software-Propel-Edge) — clear CTA and workflow/product panels.
4. [RealEstate Pro SaaS UI concept (Dribbble)](https://dribbble.com/shots/27114233-RealEstate-Pro-Property-Management-SaaS-Website-UI-UX) — dashboard imagery and restrained feature emphasis.

**Use these as broad reference for visual hierarchy only.** Do not replicate a design pixel-for-pixel or imply these products endorse Aqar. Build from Aqar's actual identity and verified product UI.

## I. Key principles distilled from the research

- Optimize for the intended audience and job-to-be-done; don't mix property seekers with software buyers in one unclear hero.
- Make the actual software tangible with real, sanitized screenshots and a working demo.
- Group features by business workflow and explain outcomes in plain language.
- Give a visitor one dominant next action and a credible alternative.
- Make price, scope, ongoing costs, setup, and customization expectations clear.
- Search engine visibility depends on accurate content, clean URLs, crawlability, internal links, unique metadata, and performance; no single trick guarantees rankings.
- Structured data must match visible, truthful content. Don't fabricate review/rating data or business metrics.
- Share metadata should preview the correct language and production URL.
- Arabic-first RTL is a full layout and interaction requirement, not a text alignment change.
- Performance, accessibility, mobile UX, and honest product claims are release criteria, not cosmetic polish.
