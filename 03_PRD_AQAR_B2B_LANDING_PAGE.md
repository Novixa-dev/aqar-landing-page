# PRD — Novixa Aqar B2B Software Landing Page

**Version:** 1.0  
**Date:** 2026-10-12  
**Status:** Implementation-ready requirements, subject to repository and feature verification  
**Product:** Novixa Aqar / نوفكسا عقار  
**Primary audience:** Real-estate offices, brokerages, property managers, and real-estate businesses  
**Primary locale:** Arabic (RTL)  
**Secondary locale:** English (LTR)  
**Conversion goal:** Qualified request for a demo/discovery call  
**Secondary conversion:** Visit an actual interactive demo

## 1. Executive summary

Build a clean, fast, bilingual marketing page that sells **Aqar as a customizable real-estate software product**, not merely as a property directory. The page should help a business owner understand how Aqar brings property display, property records, contacts, team roles, requests, viewings, contracts, and maintenance workflows together, then show a real product preview and provide a clear next step.

The page is part of Novixa's commercial sales system. It should qualify leads, set honest expectations about licensing and custom work, and make the transition to a product demo and sales conversation easy. It must be trustworthy and product-specific, not a generic SaaS template.

## 2. Context and problem statement

Current public marketing variants lead with consumer copy similar to “اكتشف العقار المناسب لك في اليمن”, while the business model described by the owner is a licence/setup/customization offer starting at $500. A business buyer should not have to scroll to infer that a branded standalone installation is available.

**Problem:** the current above-the-fold message primarily attracts property seekers, not the office owners who are the most direct buyers of the licensed software.

**Decision:** create a distinct B2B marketing route. Retain the B2C property experience or demo as a separate destination if it serves users, but do not make the two objectives compete in the same hero.

## 3. Product definition and commercial facts

### 3.1 Product

Novixa Aqar is presented as a customizable real-estate software system for real-estate offices, companies, brokerages, and property-management teams. It combines a public property-facing website with internal workflows and role-based access.

### 3.2 Commercial terms currently described

- Initial basic version price starts at **USD 500** according to supplied sales copy.
- The product is sold as a licence with configuration/customization, not as a mandatory monthly subscription in the current baseline offer.
- Final pricing depends on the agreed scope, user count/roles, customizations, branding, domain, hosting, integrations, and services.
- Novixa provides product explanation, discovery, customization, development, setup, and delivery.
- Marketing partners may earn commission under separate written agreement. The owner’s existing direct-partner message states 30%; it is not the landing page's default customer-facing offer.

The landing page must not imply that domain, hosting, data migration, support, updates, or custom features are included for free unless this is confirmed in the actual quotation. Price language must clearly say “يبدأ من” and that final scope is quoted after requirements are understood.

## 4. Goals and success metrics

### Business goals

1. Increase qualified demo/discovery requests from businesses.
2. Help prospects understand the breadth of the product without overwhelming them.
3. Reduce repeated sales explanations by answering common licensing/customization questions.
4. Give marketers a single trustworthy link to send to qualified prospects.
5. Improve branded and relevant organic search visibility over time.

### Experience goals

1. The intended buyer understands the audience and value proposition within a few seconds.
2. The visitor can distinguish software capabilities from optional/custom development.
3. The page is usable on mobile and works naturally in Arabic RTL and English LTR.
4. All primary CTAs have a meaningful, tested result.
5. Demo screenshots and claims match the actual software.

### Suggested measurement events

- `aqar_landing_view` (page-level view, subject to privacy implementation).
- `aqar_demo_click` with demo identifier.
- `aqar_request_demo_start`.
- `aqar_request_demo_submit`.
- `aqar_whatsapp_click` (if a verified business WhatsApp route exists).
- `aqar_email_click`.
- `aqar_pricing_section_view`.
- `aqar_language_switch`.

Do not collect sensitive information unnecessarily. Analytics must respect applicable privacy requirements and the site’s actual consent policy. Do not present analytics as a live dashboard feature unless it exists.

## 5. Non-goals for the first release

- Rebuilding the actual property-management application.
- Creating a consumer marketplace from scratch.
- Implementing affiliate accounts, sub-affiliate trees, commissions, or payouts on the marketing page; those are a separately scoped future module in `08_FUTURE_AFFILIATE_PROGRAM_SPEC.md`.
- Inventing new Aqar features because they look persuasive.
- Adding fake customer logos, testimonials, ratings, badges, statistics, award logos, “trusted by” bars, or market-share claims.
- Replacing the existing framework or application architecture without a documented technical reason.
- Making the landing page depend on a third-party script for its primary copy or CTA.

## 6. Target personas

### Persona A — Owner of a real-estate office

Needs property presentation, leads, and team workflows. Cares about cost, brand identity, domain, training, ease of use, and whether a demo reflects the offer.

### Persona B — Property-management business

Needs visibility over properties/units, tenants/owners, service requests, maintenance, and access controls. The exact workflows must be verified.

### Persona C — Multi-agent brokerage / real-estate company

Needs staff accounts, agent roles, lead routing, property data, and oversight. Do not promise automated lead assignment or advanced reporting if not implemented.

### Persona D — Developer, marketer, or channel partner

Needs a concise explanation, a robust demo link, and a clear handoff to Novixa. Affiliate signup/commission information belongs on a separate partner page, not in the primary customer hero.

## 7. Message hierarchy

1. **What it is:** a customizable real-estate software platform for offices and companies.
2. **Why it matters:** property display and key internal workflows in one branded system.
3. **How it fits:** configurable identity and agreed workflow, with Arabic/English where verified.
4. **Proof:** real screenshots, live demo, verifiable feature paths, transparent scope/pricing.
5. **Action:** request a tailored demo or send requirements to Novixa.

## 8. Recommended sitemap / information architecture

For a single B2B landing page, the page should use anchored sections with stable IDs. A separate FAQ or detailed pages can be added later only when valuable.

Header navigation:

- نظرة عامة / Overview
- المميزات / Features
- الأدوار / Roles
- التخصيص / Customization
- السعر / Pricing
- الأسئلة الشائعة / FAQ
- Language switcher
- Primary CTA: اطلب عرضًا مخصصًا / Request a tailored demo

Footer:

- Novixa home.
- Product/demos (clearly labeled demo).
- Contact and verified company channels.
- Privacy policy and terms only if real approved documents exist.
- Copyright year generated from runtime or fixed to actual date; no placeholder.

## 9. Landing-page section requirements

### Section 1 — Compact header

- Novixa/Aqar brand lock-up consistent with the current project assets.
- Simple, legible navigation.
- Language switching with actual equivalent paths.
- One primary CTA; a secondary demo link may sit beside it.
- Sticky header only if it preserves useful viewport space and works well on mobile.
- No broken links, placeholder hrefs, dead anchors, or clickable inert elements.

### Section 2 — Hero (the critical first screen)

**Recommended Arabic headline:**

> منصتك العقارية بهويتك — وإدارة أعمالك من مكان واحد

**Recommended support text:**

> Novixa Aqar نظام عقاري قابل للتخصيص للمكاتب والشركات وإدارة الأملاك؛ يجمع عرض العقارات وإدارة بياناتها والعملاء والموظفين والطلبات ضمن تجربة رقمية واحدة.

Primary CTA: `اطلب عرضًا مخصصًا`  
Secondary CTA: `استكشف الديمو`  
Tertiary text (optional): `تبدأ النسخة الأساسية من 500 دولار — والسعر النهائي بحسب نطاق العمل.`

Visual: show an authentic desktop application screenshot and a mobile screenshot, ideally with the public property UI connected visually to a management view. Never fabricate dashboard numbers or display real contact/customer data. Add a small label “من واجهات النظام التجريبي” if sample data is used.

The hero should say explicitly that the buyer is receiving configurable software, not merely buying ad placement on a marketplace.

### Section 3 — Who it serves

A compact row or list of customer types:

- المكاتب العقارية.
- شركات التسويق والوساطة العقارية.
- إدارة الأملاك.
- شركات التطوير العقاري.

Do not claim the product is suitable for every industry.

### Section 4 — Business problems and outcomes

Use practical before/after framing, but don't claim quantified improvements without measured evidence.

Examples:

- Property details scattered across different sources → organized property records and public display.
- Different team roles need different access → role-based workspaces/permissions where verified.
- Requests and maintenance follow-up are hard to track → centralized workflow records where verified.
- Generic website doesn't reflect the business brand → branded setup where supported.

Avoid unproven claims such as “increases revenue by 40%”, “saves 10 hours per week”, or “doubles enquiries”.

### Section 5 — Core capability groups

Group features by actual user job, not a grid of many repetitive cards.

1. **واجهة عرض العقارات:** listing cards, detail pages, categories, search/filtering, contact/viewing inquiry, only where each is live.
2. **إدارة العقارات والوحدات:** create/edit, status, categorization, locations, and publishing controls, verified against the application.
3. **إدارة العملاء والأطراف:** owners, buyers, sellers, tenants, and other supported records.
4. **إدارة الفريق والصلاحيات:** administration, staff, agents, and other validated roles.
5. **متابعة العمليات:** requests, viewing appointments, contracts, maintenance/work orders, according to the installed modules.
6. **تجربة عربية/إنجليزية:** translation quality, real RTL/LTR, number/currency formatting, and fully translated form/error states.
7. **أدوات إضافية:** calculator, news/content, chat, and dark theme only if current and functional.

No listed feature may be advertised as fully working until it has an observed test path.

### Section 6 — Real product walkthrough

Show an ordered, short workflow using real screenshots or a live guided demo:

1. Add or update a property.
2. Publish/view the public listing.
3. Receive or review an enquiry/viewing request.
4. Follow the relevant operational process (e.g., maintenance request) through the correct role, if implemented.

A video is optional. Prefer a few annotated screenshots if hosting video would slow the page or become maintenance work. Provide alt text and don't use large images as decorative backgrounds.

### Section 7 — Roles and workspaces

Describe roles in a role matrix, not a list of vague “unlimited users”.

| Role (only if live) | Value to explain |
|---|---|
| Administrator | Company-level configuration and oversight. |
| Staff/management | Office workflows and day-to-day coordination. |
| Agent | Agent-specific property and customer workflows. |
| Property owner/landlord | Owner-related data/workflows if the portal exists. |
| Tenant | Tenant-facing requests if implemented. |
| Buyer | Buyer-facing actions if implemented. |
| Seller | Seller-facing workflow if implemented. |
| Maintenance contractor | Assigned maintenance work if implemented. |

Don't imply all roles receive identical rights. Do not describe permission boundaries as secure/isolated without testing them.

### Section 8 — Configurable, branded deployment

Explain the specific customizations actually offered:

- Brand/name/logo/colors.
- Domain/subdomain setup, subject to domain/hosting fees and configuration.
- Logo/brand presentation without unrelated demo brand, if deliverable configuration supports it.
- Business-specific workflows and modules, based on an agreed scope.
- Arabic and English, if both can be configured for the target deployment.
- Deployment, migration, training, backups, support, and updates shown as separate items unless explicitly included.

Phrase the idea as “يُجهّز وفق نطاق متفق عليه” not “كل شيء قابل للتخصيص بلا حدود”.

### Section 9 — Pricing and scope

Display a truthful price anchor:

> **تبدأ النسخة الأساسية من 500 دولار**
>
> يتحدد العرض النهائي بعد مراجعة عدد المستخدمين، والهوية المطلوبة، والتخصيصات، والاستضافة والدومين، وأي تكاملات أو خدمات إضافية.

Show “What is discussed in the quote”:

- Baseline licence/features.
- Deployment and initial configuration.
- Branding/customization.
- Hosting/domain and recurring third-party costs.
- Data import or migration, if needed.
- Training, maintenance/support, and update policy.

Do not publish a comparative price table until the team has defined real packages and inclusions. Don't hide important exclusions behind a tiny disclaimer.

### Section 10 — Demo choices

Use one primary CTA to the best-maintained generic Aqar demo. The alternative branded demo may be presented as a customization example only when all content is authorized and false statistics are removed.

Labels must distinguish:

- “الديمو العام” (generic product experience).
- “مثال على تخصيص الهوية” (branded showcase using sample/demo data).

Do not expose shared credentials in the public hero. If demo access needs credentials, provide a controlled demo access page with clear roles, a reset strategy, least privilege, data isolation, and rate limits.

### Section 11 — Delivery process

A concise 4-step delivery process:

1. فهم احتياجات المكتب.
2. تحديد النطاق والعرض والتكلفة.
3. تجهيز النسخة وتخصيصها ومراجعتها.
4. التسليم وفق المتفق عليه والتدريب/الدعم إذا كان ضمن العرض.

Do not set delivery-day promises until operations confirms a realistic SLA.

### Section 12 — FAQ

Must answer, at minimum:

1. Is Aqar only a listing website?
2. Who is it designed for?
3. Can the platform use our company name and brand?
4. Can it run on our own domain?
5. What does the $500 starting price include?
6. Are there mandatory monthly subscription fees?
7. Are hosting, domain renewal, support, maintenance, and updates included?
8. Which languages and currencies does the current build support?
9. Which roles and workflows are available?
10. Can you customize the system or add features?
11. Can we test a demo before buying?
12. How are data, backups, permissions, and access handled?
13. Is source code included, or is this a usage licence? (Answer only once legal/product policy is settled.)
14. What is the next step to obtain a quote?

Every answer must reflect an approved policy. Use “depends on the agreed scope” when necessary, not invented guarantees.

### Section 13 — Final CTA and lead form

Heading: `هل تريد منصة تناسب طريقة عمل مكتبك؟`  
Support: `أخبرنا بنوع نشاطك وما تحتاج إلى إدارته، وسنراجع احتياجاتك ونقترح نطاقًا مناسبًا.`

Suggested fields:

- Full name (required).
- Business/office name (required).
- Business type (required selection).
- Country/city (required only if useful for follow-up).
- Phone/WhatsApp or email (at least one required).
- Approximate number of users/properties (optional; select values must be clear and non-binding).
- Needs (multiselect: listings, staff/roles, maintenance, contracts/requests, branding/domain, other).
- Message (optional).
- Privacy/contact consent text linked to a real policy where required.

UX requirements:

- Client and server-side validation where a backend is used.
- Correct error messages and preserved form values.
- Loading/disabled state while submitting.
- Confirmation state only after a real successful response.
- Error state with a retry path.
- Anti-spam/rate limiting for server-backed endpoints.
- No secret API keys in the browser.
- If no secure backend endpoint exists, use a verified mailto/WhatsApp/contact route rather than a fake submit button. Do not claim successful form submission when no message has been delivered.
- Make the form usable with screen readers and keyboard.

### Section 14 — Footer

Include product navigation, Novixa identity, verified contact, language links, demo links clearly marked as demos, privacy and terms only if real, and a working copyright notice. Don't include placeholder links or dead social icons.

## 10. Visual design system

### Brand

Use existing assets and tokens in the target repository first. Prior Novixa materials specify:

- Blue: `#2563EB`.
- Deep navy: `#0F172A` (or deeper navy where current brand already uses it).
- Teal accent: `#14B8A6`.

Treat these as a starting reference only; repository tokens and current approved brand assets win.

### Visual character

- Product-led, calm, confident, clear.
- Modern real-estate imagery only where accurate and licensed.
- Real product UI is the hero asset; don't rely on generic luxury villa stock photos to sell enterprise software.
- Strong Arabic typography; avoid mixing unrelated fonts.
- Restrained, consistent spacing and border radii.
- Clear text hierarchy and generous but efficient whitespace.
- Avoid repeated identical cards, random floating tiles, gratuitous gradients, excessive glass panels, huge shadow stacks, neon glow, meaningless 3D shapes, and auto-generated startup aesthetics.
- Use purposeful motion only. Honor reduced-motion settings.
- No emoji icons in the interface; use the current icon library or simple SVGs consistently.

### Responsive layouts

Test at 320/360/390/430 CSS px phones, 768/820/1024 tablet-like widths, 1280 and 1440 desktop, and at least one wide desktop. Use fluid containers and no horizontal overflow. Important content, CTAs, forms, and screenshots must reflow intentionally; don't merely shrink a desktop grid.

### RTL/LTR

Use semantic direction per locale (`dir="rtl"` for Arabic and `dir="ltr"` for English). Prefer logical CSS properties such as `margin-inline`, `padding-inline`, `inset-inline`, `text-align: start`, and `border-inline-start`. Mirror only icons whose semantics are directional; do not mirror logos or every icon mechanically. Verify drawers, breadcrumbs, form labels, phone/email, currency, numerical values, tabs, and error messages in both languages.

## 11. Technical implementation principles

1. Inspect the existing repo, framework, routing, styles, design tokens, assets, forms, current app data, and tests before choosing an implementation.
2. Reuse the same framework and styling conventions unless a real reason justifies change.
3. Use semantic and reusable components; avoid a giant monolithic page component.
4. Separate copy/content data from layout components and support translations via the existing i18n system.
5. Keep server-side data access bounded and cached where appropriate. Do not fetch entire property inventories for a small landing preview.
6. Use real product screenshot assets or captured, sanitized images; optimize formats, size, `srcset`/framework images, dimensions, and alt text.
7. Keep client-side JavaScript small. Use client components only for genuine interactivity; the marketing copy and section structure should render in crawlable HTML.
8. No fake counters, countdowns, auto-playing hero video, inert search, empty anchors, or placeholder form handlers.
9. Use the established lint/type-check/build/test commands. Do not delete or weaken existing tests.
10. Document added/changed files and any deferred feature.

## 12. SEO and sharing requirements

- One production canonical URL for each locale.
- Unique, descriptive title and meta description per indexable route.
- English and Arabic routes have consistent alternate-language references (`hreflang`) including reciprocal links and correct locale codes.
- Real canonical URLs use the production domain, never a preview host.
- Open Graph and X/Twitter metadata with a specific social card image, accessible image alt, product title/description, and absolute URL.
- Proper favicon and touch icon; `site.webmanifest` only if supported and meaningful.
- `robots.txt` that allows the marketing page and names the production sitemap.
- `sitemap.xml` with only canonical, indexable production URLs.
- `Organization` and `WebSite` JSON-LD where truthful. `SoftwareApplication` may be used if its fields describe the actual software and offer. Do not fabricate reviews, ratings, aggregate ratings, support hours, prices, address, or customer data.
- Use FAQ JSON-LD only if appropriate and valid, but do not design the project around expecting FAQ rich results. Structured data never guarantees a rich result.
- Real semantic headings, links and text in HTML; not a screenshot of text.
- Human-readable URL structure and consistent internal linking.
- No indexation of internal dashboards/private account routes. Decide whether demos should be `noindex` to avoid duplicate sample content and accidental indexing.
- Add production site to Google Search Console and submit sitemap after deployment.

## 13. Accessibility and usability requirements

Target **WCAG 2.2 AA as a project goal**; validate the applicable criteria rather than declaring compliance without evidence.

- Semantic landmarks and heading order.
- Keyboard access to all navigation, menus, accordions, controls, and modal/drawer content.
- Persistent visible focus.
- Adequate text/UI contrast.
- Inputs with visible labels and programmatically connected errors.
- Sufficient touch targets and spacing, especially mobile.
- Focus must not be obscured by sticky elements.
- Descriptive links; no “click here” as the only context.
- Meaningful alt text on content images; empty alt for truly decorative images.
- No color-only status communication.
- Reduced motion support and no essential information conveyed only through animation.
- Test Arabic screen-reader reading order and mixed-direction phone/email segments.

## 14. Privacy, security, and integrity

- Don't leak demo credentials, private contacts, real customer records, production API keys, or environment values.
- Public forms require input validation, server-side validation, spam resistance, and protected storage/transport.
- Do not insert arbitrary submitted HTML into pages; escape content and sanitize where appropriate.
- Avoid third-party analytics or chat tools until their impact and privacy terms are understood.
- If using testimonials, logos, customer names, photos, or project screenshots, secure permission and verify every claim.
- Clearly distinguish demonstration records from live listings. Avoid falsely implying actual property availability.
- Privacy policy, terms, contact information, and licence terms should be real approved documents, not invented legal boilerplate.
- Any claims about data isolation, backups, encryption, uptime, access control, hosting region, or compliance require technical evidence.

## 15. Performance goals

Target good Core Web Vitals at the 75th percentile when field data becomes available:

- LCP: 2.5 seconds or less.
- INP: 200 milliseconds or less.
- CLS: 0.1 or less.

Measure with PageSpeed Insights/Lighthouse and field tools where applicable; a lab score is not the same as field performance.

Implementation priorities:

- optimize/prioritize the actual hero/LCP image; don't lazy-load the primary above-the-fold image;
- lazy-load below-the-fold images;
- set dimensions/aspect ratio to prevent layout shifts;
- use modern formats and responsive image sizes;
- avoid large autoplay video and overly complex visual effects;
- subset/self-host or properly optimize fonts where licensing permits;
- minimize JavaScript and blocking third parties;
- prevent layout shifts from fonts, images, embeds, and dynamic sections;
- keep forms responsive and avoid long tasks on interactions.

## 16. Analytics and sales handoff

The user should have a clear path from landing to a sales conversation. Preferred first release:

- a secure lead form connected to a real backend endpoint, or
- a verified business contact/WhatsApp route with prefilled summary, if backend integration is not ready.

Lead record should include source/UTM values only where lawful and useful; avoid storing unnecessary personal data. Lead submissions need visible consent language where applicable, server-side validation, spam controls, and a clear success response.

If the company later operates an affiliate portal, its referral attribution system should connect to a CRM/lead pipeline through stable referral identifiers, not rely on manually editable query strings as proof of commission. See the separate future specification.

## 17. Key risks and dependencies

| Risk | Mitigation |
|---|---|
| B2C and B2B purpose remain mixed | Keep the software sales page separate with a B2B hero and request-demo CTA. |
| Feature claims exceed actual implementation | Perform route-by-route capability verification and label deferred functions. |
| Demo contains fabricated-looking stats/sample records | Remove or label demo data and avoid presenting it as a customer case. |
| Hosting, domain, and support scope is unclear | Define quote/contract inclusions before public pricing copy. |
| Broken preview links survive release | Automated link checks plus manual CTA/browser tests. |
| Metadata points at Vercel preview/staging URLs | Centralize production site URL and validate all generated metadata after deployment. |
| Poor Arabic RTL quality | Manual RTL review at phone, tablet, and desktop breakpoints. |
| Landing looks like a generic AI site | Use the actual product UI, real product-specific content, restrained layouts, and a skeptical design review. |
| Leads fail silently | Verify server integration end-to-end and test success/error/rate limiting. |

## 18. Acceptance criteria / Definition of Done

The work is ready only when all applicable items below pass:

### Product and conversion

- [ ] Above-the-fold copy clearly says Aqar is software for real-estate businesses.
- [ ] The core audience and value proposition are clear within five seconds.
- [ ] Primary CTA requests a demo/discovery/quote and works.
- [ ] Secondary demo CTA opens a verified demo.
- [ ] Demo is labelled as a demonstration; sample records are not implied to be real.
- [ ] Price statement and exclusions accurately reflect the approved offer.
- [ ] Every published capability was verified in the current code/demo.
- [ ] No fake social proof, statistics, reviews, or customer claims.

### Design and usability

- [ ] Intentional layouts for phone/tablet/desktop.
- [ ] No horizontal overflow or text collision.
- [ ] Arabic RTL feels designed for Arabic, not mechanically mirrored.
- [ ] English LTR has native-looking copy and no missing labels.
- [ ] All navigation, accordions, language controls, demo actions, and form actions work.
- [ ] Focus, labels, errors, alt text, contrast, reduced motion reviewed.

### Technical quality

- [ ] Existing lint, type-check, build, and test commands pass.
- [ ] Browser console has no page-caused errors.
- [ ] No broken local/static assets or placeholder domains.
- [ ] No leaked credentials/secrets.
- [ ] No serious failing network requests caused by the page.
- [ ] The production build includes crawlable page text.

### SEO/social

- [ ] Unique title/description.
- [ ] Correct canonical and locale alternates.
- [ ] Production `robots.txt` and `sitemap.xml` validated.
- [ ] OG/X cards show correct Arabic and English copy/images.
- [ ] JSON-LD parses and includes only accurate properties.
- [ ] Search Console and sitemap submission plan documented.

### Release report

The implementer must provide an honest final report with: implemented changes, deferred requirements, URLs tested, responsive/RTL results, accessibility results, SEO/social results, performance measurements, build/test outputs, changed files, deployment steps, unresolved risks, and one verdict: `READY FOR DEMO`, `READY WITH KNOWN FIXES`, or `NOT READY`.
