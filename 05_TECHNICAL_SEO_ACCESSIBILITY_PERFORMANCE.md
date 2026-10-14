# Technical Implementation Playbook — Clean Code, SEO, OG, Accessibility, Performance

This is a stack-aware checklist, not a mandate to migrate the current project. Inspect the repository first; use its existing framework and patterns. The Next.js examples below apply **only if the landing page is already implemented with Next.js App Router**. For Laravel/Blade/Livewire or another stack, implement equivalent output using that stack's conventions.

## 1. Engineering principles

- Understand existing routes, components, translations, build tools, assets, backend endpoints, tests, and deploy configuration before writing code.
- Keep the marketing surface small, server-rendered/static where appropriate, and progressively enhanced.
- Reuse a design system rather than introducing an unrelated UI kit.
- Separate content from presentation and provide typed props/models for repetitive UI.
- No inline event handlers that fake success; no inert buttons or placeholder links.
- Avoid unnecessary dependencies, global CSS hacks, magic values scattered across components, duplicated Arabic/English layout markup, and unreviewed copy/paste components.
- Prefer semantic HTML; use native controls. Use buttons for actions and anchors for navigation.
- Keep actual links, canonical host, demo URL, and company contact details in one typed configuration source where practical.
- Add tests for behavior and metadata that are easy to regress.

## 2. Suggested component boundaries

Adapt to the current repo; avoid over-abstracting a single page.

- `AqarLandingHeader`
- `AqarHero`
- `AqarProductPreview` (real screenshots only)
- `BusinessAudienceSection`
- `WorkflowProblemSection`
- `CapabilityGroups`
- `RoleMatrix`
- `CustomizationSection`
- `PricingScopeSection`
- `DeliveryProcess`
- `FaqSection`
- `DemoRequestForm`
- `AqarFinalCTA`
- `AqarLandingFooter`

For a small page, these can be files/functions in a single existing module structure. Components should have clear responsibilities, not a large collection of cosmetic abstraction layers.

## 3. Suggested content configuration

Prefer typed, translation-aware data:

```ts
// Conceptual example only. Adapt to the existing i18n/content system.
type LandingLink = { label: string; href: string };
type Capability = {
  id: string;
  title: string;
  description: string;
  availability: 'verified' | 'conditional';
};

type AqarLandingContent = {
  locale: 'ar' | 'en';
  title: string;
  description: string;
  heroTitle: string;
  heroDescription: string;
  primaryCta: LandingLink;
  secondaryCta: LandingLink;
  capabilities: Capability[];
};
```

If a capability is conditional/unverified, it should not accidentally render as a confirmed claim. Prefer a build-time content review and explicit feature flags rather than hiding uncertainty in prose.

## 4. Canonical host and route policy

- Choose one public URL for the B2B marketing page and each language.
- Use the selected production host in `canonical`, Open Graph, JSON-LD, sitemap, internal links, and contact-message templates.
- Do not use Vercel preview aliases or the demo domain as canonical unless they have intentionally been selected as the permanent public marketing host.
- Redirect old duplicate URLs when possible; otherwise use canonical and internal link consistency. Do not keep multiple near-identical pages independently indexable.
- Choose and document trailing-slash behavior. Ensure redirects are permanent where old duplicate routes are deprecated.
- Keep consumer property routes and demo routes separate from the B2B marketing route.

## 5. Title and description

Example Arabic:

- Title: `نوفكسا عقار | نظام عقاري قابل للتخصيص للمكاتب والشركات`
- Description: `نوفكسا عقار نظام عقاري للمكاتب والشركات وإدارة الأملاك، يجمع عرض العقارات وإدارة البيانات والعملاء والموظفين والطلبات في تجربة قابلة للتخصيص حسب نطاق العمل.`

Example English:

- Title: `Novixa Aqar | Customizable Real Estate Software for Agencies`
- Description: `Configurable real estate software for agencies and property-management teams, combining property presentation, records, contacts, roles, and supported workflows.`

Rules:

- A descriptive, unique title for each indexable route.
- A concise and accurate description written for humans; Google may generate search snippets from page content instead.
- One visible H1 that describes the product and audience.
- Do not stuff keywords or repeat “real estate software Yemen” unnaturally.
- Use the primary phrase naturally: “نظام عقاري للمكاتب والشركات”, “برنامج إدارة العقارات”, “real estate software for agencies”, and local terms only where genuinely relevant.
- Avoid “الأفضل في اليمن”, “رقم 1”, or “أعلى جودة” without proof.

## 6. Locale and hreflang

- Serve Arabic content with `<html lang="ar" dir="rtl">` and English with `<html lang="en" dir="ltr">` (or the correct framework-supported locale code).
- Each translated route should be self-canonical.
- Provide reciprocal alternate links for Arabic and English, e.g. `ar` and `en`/`en-US` only when that locale targeting is actually intended. Don't set a hreflang to an unrelated homepage or a language-switch link that always resets to the homepage.
- Keep translated content genuinely translated, not a duplicated page with labels replaced only.
- Test language switching from every route and preserve the equivalent page where possible.
- Include language alternates in the sitemap when supported by the chosen framework.

## 7. Open Graph and X/Twitter cards

At minimum, implement and validate:

- `og:title`
- `og:type` (`website` is appropriate for the marketing page)
- `og:url` (absolute canonical URL)
- `og:image` (absolute production URL)
- `og:description`
- `og:site_name`
- `og:locale` and alternate locale metadata as applicable
- `og:image:alt`
- X/Twitter card type such as `summary_large_image`, with title, description, and image as supported.

Asset recommendations:

- Create a branded 1200×630 social image, then validate its actual dimensions, MIME type, accessibility text, and public reachability.
- Provide Arabic and English variants if the pages are localized and the platform can expose the correct image.
- Keep key text/logo away from the edges. Use clear contrast at small preview sizes.
- Use the genuine Aqar/Novixa brand and a real product screenshot or simple brand composition; don't use a fabricated property listing as an endorsement.
- Ensure each page's `og:url` matches its canonical URL.
- Avoid relative image URLs, temporary asset hosts, auth-protected images, and huge image files.
- Test real rendered metadata and platform debuggers after deploy; don't rely on a correct object in the source code alone.

## 8. JSON-LD / structured data

Use only schema that describes the actual page. JSON-LD must be valid and agree with visible page content.

Reasonable types to consider:

- `Organization` for Novixa if identity and links/contact properties are correct.
- `WebSite` for the official website identity.
- `SoftwareApplication` for Aqar if the page genuinely presents the software and the required/relevant properties are supported.
- `BreadcrumbList` only on pages with meaningful breadcrumb navigation.

Example conceptual `SoftwareApplication` JSON-LD (must be adapted; omit unverified properties):

```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Novixa Aqar",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "description": "Configurable real estate software for real-estate businesses.",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "USD",
    "price": "500",
    "description": "Starting price for the basic version; final scope and price require a quote."
  }
}
```

Important: include the `offers` value only if the published $500 starting price is still approved and accurately describes a real purchasable offer; do not let structured data imply a fixed all-inclusive price when the page explains a scoped quote. Do not add fake `aggregateRating`, reviews, awards, number of customers, support availability, or guarantees. Structured data does not guarantee enhanced search appearance.

For `Organization`, use only verified legal/business name, canonical URL, logo, authorized official social profiles, and contact data. Do not invent an office address, telephone, or business registration.

Do not rely on FAQ schema for rich results. Build a useful FAQ for visitors; add schema only where appropriate and valid.

## 9. Robots, sitemap, indexing policy

- `robots.txt` should allow crawling of the intended public marketing pages and refer to the production sitemap.
- `sitemap.xml` should contain only canonical indexable production URLs. Remove preview, internal app, test, and redirect-only URLs.
- Keep login/account/dashboard routes out of the sitemap and apply appropriate `noindex`/access rules where needed. Robots blocking alone is not a security control.
- Decide if demo deployments should be `noindex`. If a demo is sample-heavy or duplicate content, that is often a good choice; do not index it as a real inventory portal unless that is a deliberate and accurate objective.
- Do not use `robots.txt` as the canonicalization tool. Use canonical directives/redirects consistently.
- Don't accidentally deploy `noindex` to the actual marketing page from staging.
- After launch: verify in Google Search Console, submit sitemap, inspect canonical and rendered HTML, and monitor indexing.

### Next.js App Router, if present

- Use `metadata`/`generateMetadata` in Server Components and/or the framework's special metadata files.
- Use `app/robots.ts`, `app/sitemap.ts`, `opengraph-image.*`, `twitter-image.*`, icons, and manifest conventions where appropriate.
- Keep the public site URL in environment/config that is validated at build/deploy. Fail visibly if production metadata is about to emit localhost or a preview host.

### Laravel/Blade/Livewire or another framework

Use the framework's established layout/view conventions and build output. Produce the same semantic tags and files without bolting on a new frontend just to create SEO metadata.

## 10. Clean code and component quality

- Use semantic landmarks: `header`, `nav`, `main`, section headings, `footer`.
- Use one H1; orderly H2/H3 structure.
- Each interactive component has explicit states: idle, loading, success, error, disabled, and empty where applicable.
- Every link has a real destination. Run an internal-link checker and review external routes manually.
- No `href="#"`, “coming soon” controls that look active, empty `onClick`, dead social links, placeholder email, or `example.com`.
- Validate environment variables with a schema at the appropriate boundary; never expose secret values through public config.
- Use type-safe content dictionaries and reusable form components only where they reduce duplication.
- Avoid deep dependency trees and UI packages for a few simple controls.
- Use a formatter, linter, type checker, and existing project tests. Do not turn off strict lint rules just to pass.
- Document why a dependency is needed and remove packages that the implementation no longer uses.
- Add unit/integration tests for locale switch, form validation, event tracking rules, key metadata, and CTA URLs where applicable.

## 11. Accessibility (target: WCAG 2.2 AA)

- Use correct language and direction attributes on the document and locale-specific content.
- Full keyboard operation; logical focus order; visible focus indicators.
- No keyboard trap in drawer/dialog; Escape/back behavior where expected.
- Form inputs have labels, instructions, error summaries or linked field errors, and programmatic validity state.
- Don't use placeholders as the only label.
- Check contrast of text and interactive controls; do not encode status using color alone.
- Avoid text embedded in images.
- Correct image alt strategy; decorative artwork has empty alt / is hidden from assistive technology.
- Ensure focus isn't hidden under a sticky header/footer/CTA.
- Support reduced-motion preference; avoid excessive scroll animation.
- Check touch target size/spacing especially for mobile and localized text that wraps.
- Test Arabic reading order, numeric values, emails, phone numbers, and mixed Arabic/Latin labels.
- Automated axe/Lighthouse reports supplement but do not replace manual keyboard and screen-reader testing.

## 12. Performance and Web Vitals

Targets for good field experience at the 75th percentile:

- **LCP ≤ 2.5 s**
- **INP ≤ 200 ms**
- **CLS ≤ 0.1**

Use PageSpeed Insights and Lighthouse for lab diagnostics; use field data when traffic is available.

Engineering actions:

- Make the hero/LCP asset appropriately small, responsive, and prioritized.
- Use modern formats (AVIF/WebP where supported) and sensible widths; don't ship a 3–6 MB asset to a phone.
- Set image dimensions or aspect ratio to prevent layout jumps.
- Lazy-load below-the-fold visuals; don't lazy-load the main visible hero image by default.
- Avoid auto-playing hero video and heavy animation libraries for purely decorative effects.
- Optimize fonts and avoid loading many weights. Test Arabic glyph subsets carefully so characters don't disappear.
- Keep the main thread responsive; split or defer unnecessary code and third-party scripts.
- Reserve space for form feedback, embeds, images, and any sticky CTA.
- Keep analytics lightweight and privacy-aware.
- Do not preload every image/font; prioritize only critical resources.

## 13. Demo assets and image rights

- Capture screenshots from the currently running software; sanitize usernames, emails, phone numbers, customer/property identities, tokens, and internal admin data.
- Make screenshots show the feature described in nearby copy.
- Use illustrative/sample data only if labeled.
- Verify that property imagery is licensed for use or supplied with permission; don't treat stock imagery as a real customer asset.
- Use a consistent aspect ratio for preview images, with responsive crops and alt text.
- Store assets locally or on an approved asset host with stable URLs.
- Avoid screenshots so small that UI text is unreadable. Provide a larger click-through or live demo for detailed inspection.

## 14. Lead form implementation

Minimum handling:

- Validate on client for UX and server-side for security/correctness.
- Normalize/validate phone/email carefully for target regions; do not assume all Yemeni or Saudi phone entries use one exact display format.
- Require at least one approved contact method.
- Sanitize/escape output and protect against script injection.
- Apply rate limit and spam detection appropriate to the backend.
- Protect storage and log only what's necessary.
- Provide a true success state after backend acknowledgement.
- Provide failure handling and alternative contact path.
- Avoid sending PII to analytics as event properties.
- Add consent text and privacy handling that match the actual policy and target jurisdictions.
- If opening WhatsApp with a prefilled message, encode it correctly and never auto-send; the user must knowingly submit it.

## 15. Analytics and conversion

Record a minimal funnel:

1. Landing view.
2. CTA clicked (demo or request form).
3. Form started.
4. Form submitted successfully (only after server confirmation).
5. Qualified lead state once sales processes it (prefer server/CRM source).
6. Demo completed/sales outcome if tracked in CRM.

Use UTM parameters consistently for social posts and partners. If the affiliate feature is developed, affiliate IDs must be immutable, auditable, and separate from user-submitted fields; see the future affiliate spec. Use privacy notice/consent where required.

## 16. Launch validation tools

Official tools/references are collected in `09_RESEARCH_REFERENCES.md`. Use at least:

- Google Search Console URL Inspection.
- Sitemap and robots verification.
- Rich Results Test for structured-data validation.
- PageSpeed Insights and Lighthouse.
- Open Graph/platform sharing inspection.
- Playwright or equivalent for CTA/link/locale/responsive journeys.
- Keyboard-only testing plus axe or similar accessibility checks.

Do not claim “100% SEO” or “fully WCAG compliant” from a single automated report.
