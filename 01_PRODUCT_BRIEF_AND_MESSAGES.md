# Novixa Aqar — Product Brief, Known Facts, and Ready-to-Use Messages

**Prepared:** 2026-10-12  
**Purpose:** Single working reference for landing-page copy, sales conversations, and implementation.

## 1. Product identity

- **Product name:** Novixa Aqar / نوفكسا عقار
- **Positioning:** Configurable real-estate software for real-estate offices, property companies, brokerage teams, and property-management businesses.
- **Business model described by the owner:** Software licence, setup, and customization. No mandatory monthly subscription is part of the current baseline offer; hosting, domain, support, maintenance, updates, integrations, and ongoing services must be quoted and agreed explicitly.
- **Starting price stated in supplied messages:** USD 500 for a basic version. It is an indicative starting price, not an unconditional fixed quote. Final price depends on scope, number of users, customizations, brand/domain, hosting, deployment, and requested services.
- **Current market focus stated in the supplied message:** Hadramout and Yemen first, then Saudi Arabia, GCC, and broader Arabic-speaking markets.
- **Parent brand:** Novixa | نوڤيكسا. The company tagline in prior company materials is “نبني التقنية التي تجعل أعمالك أقوى” / “Engineered for Growth”. Use current repository branding as the final source of truth.

## 2. What Aqar is — essential distinction

Aqar is not just a property-listing website. The commercial proposition is a configurable application that combines:

1. A public real-estate experience for browsing property listings.
2. Property and unit management.
3. Customer/party management.
4. Role-based workspaces and permissions.
5. Operational workflows such as inquiries, viewings, requests, contracts, and maintenance.
6. Dashboards for relevant business roles.
7. Arabic/English localization, RTL/LTR, and supported currency presentation.
8. Customization of branding and deployment for a client.

Do not imply that every feature exists identically in every deployment. Verify availability against the actual code and current demo before advertising feature-level guarantees.

## 3. Target customers

### Primary

- Independent real-estate offices and brokerages.
- Real-estate companies and property marketers.
- Property-management offices.
- Property developers or businesses managing multiple properties and staff.

### Secondary

- Real-estate agents and sales teams who influence software purchasing.
- Landlords/owners who work through a participating office.
- Potential resellers and marketing/referral partners.

### Main buyer concerns

- Can the software be presented under my company's brand?
- Can we manage listings, staff, contacts, and requests in one place?
- Does it support Arabic and English properly?
- Can the system fit our workflow rather than force a generic workflow?
- What is included in the initial price, and what is extra?
- Who handles setup, hosting, domain, training, updates, and support?
- Can I see and try the real application before deciding?
- What happens to our data, backups, access, and future changes?

The landing page should answer these concerns directly, without promising unverified service levels or security guarantees.

## 4. Feature inventory from owner-provided descriptions

The features below are **reported as provided by the product owner**. The coding agent must confirm each feature in the actual repository or a reliable demo path before marking it as implemented/available.

### Public property experience

- Property browsing and organized listings.
- Search and filtering by location, price, area, type, and other supported attributes.
- Detail pages for individual properties.
- Sales, rental, and investment categories where configured.
- Interactive map for properties, if operational in the current build.
- Contact and viewing-request forms.
- Responsive experience for mobile.
- Arabic/English and RTL/LTR.

### Property administration

- Add, edit, and manage properties/units.
- Categories, types, and location metadata.
- Listing status and publication management.
- Client/party records for owners, buyers, sellers, and tenants.
- Configuration for a client's business model, where supported.

### User roles cited in product information

- Administrator.
- Management staff.
- Real-estate agent.
- Landlord/property owner.
- Tenant.
- Buyer.
- Seller.
- Maintenance contractor.

Role count must not be used as a visual marketing statistic unless it remains accurate. Public copy may state “supports multiple role-based workspaces” and enumerate roles only after role routes and permissions have been reviewed.

### Operational workflows cited

- Requests.
- Viewings/appointments.
- Contracts.
- Maintenance requests and follow-up.
- Staff roles and permissions.
- Dashboards for managers, staff, and agents.

### Additional capabilities cited

- Real-estate/financing calculators.
- Chat/contact experience.
- News/content.
- Dark mode.
- Arabic/English support.
- YER, SAR, and USD presentation was specified in the marketer message; verify implementation, arithmetic, formatting, and locale handling before claiming full multi-currency support.

### Custom branded deployment

The provided sales message says the system can be prepared under a customer's identity, including brand, settings, and data, and can be independently deployed. Before making strong public claims like “isolated data”, “no Novixa branding”, “your own domain”, “independent instance”, “ownership”, or “full control”, verify what the deployment scripts and architecture actually guarantee.

## 5. Current URLs supplied by the owner

### Marketing-page variants

- `https://aqar-landing-page.vercel.app/ar/`
- `https://aqar-landingpage.vercel.app/ar`

### Product/demo variants

- `https://aqar-demo.dexal.net/`
- `https://aqar-demo.novixa.dev/`
- `https://aqar-demo2.novixa.dev/`

### Recommended future link policy

- Decide one canonical marketing URL under a domain controlled by Novixa. A path under the official company domain or a dedicated product subdomain can work; choose based on the real deployment and routing architecture.
- Use one primary demo link in the main CTA. Keep alternative demos in a “see branding examples” section only after their data and visuals have been reviewed.
- Redirect or canonically consolidate duplicate marketing-page hosts once the chosen primary URL is live.
- Never leave `.example`, `localhost`, obsolete staging hostnames, temporary preview URLs, or dead links in production navigation, metadata, schema, sitemap, email templates, or social previews.

## 6. Sales and pricing facts

The supplied messages state:

- The product is offered as a licensed software package with setup/customization, not a mandatory monthly subscription.
- Basic version starts at **USD 500**.
- Final pricing depends on the scope of the company, users, customizations, brand, domain, hosting, and services.
- Novixa handles technical discovery, detailed product explanation, customization, development, setup, and delivery.
- A marketing/referral partner primarily identifies good-fit prospects, contacts decision makers, shares the demo when relevant, and hands qualified interest over to Novixa.

The quote/contract should separately identify at least:

- Licence scope and permitted use.
- Included baseline features and user/role limits, if any.
- Customization scope and acceptance process.
- Domain ownership/registration and yearly renewal responsibility.
- Hosting and infrastructure fees and renewal responsibility.
- Support, maintenance, backups, updates, and response expectations.
- Third-party service costs and integrations.
- Data migration, staff training, and go-live assistance.
- Source-code access/ownership, if offered, versus a licence to use the software.
- Taxes, payment schedule, change requests, warranty/bug-fix period, and termination/handover provisions.

Do not claim a perpetual licence, source-code ownership, free lifetime updates, guaranteed support, or included hosting unless the offer contract actually provides it.

## 7. Existing referral/agent commission offer

The provided partner message offers **30% of the sale value for a sale attributed to a partner** and gives these examples:

| Sale value | 30% commission |
|---:|---:|
| $500 | $150 |
| $1,000 | $300 |
| $2,000 | $600 |

Before publishing the offer or automating payouts, clarify whether “sale value” means the contracted value, amount invoiced, or net revenue actually collected; define cancellations/refunds, split deals, repeat purchases/customization, attribution disputes, and payment timing in a written agreement. Existing 30% agreements should not silently be overwritten by a future public tiered program.

## 8. Polished Arabic sales message — potential customer

> السلام عليكم ورحمة الله وبركاته،
>
> معك فريق **Novixa | نوڤيكسا**. نعمل على تطوير حلول تقنية تساعد المكاتب والشركات العقارية على تنظيم أعمالها وتقديم تجربة رقمية أفضل لعملائها.
>
> نود أن نعرّفك على **Novixa Aqar — عقار**، وهو نظام عقاري متكامل يمكن تجهيزه وتخصيصه ليتناسب مع هوية مكتبكم وطريقة عملكم. يجمع النظام بين عرض العقارات وإدارة بياناتها، وتنظيم العملاء والموظفين والصلاحيات، ومتابعة الطلبات والمعاينات والصيانة، ضمن تجربة تدعم العربية والإنجليزية بحسب إعدادات النسخة.
>
> **يمكنك الاطلاع على العرض التجريبي:**
> - الديمو الأساسي: https://aqar-demo.novixa.dev/
> - نموذج تصميم بديل: https://aqar-demo2.novixa.dev/
>
> **صفحة التعريف الحالية:** https://aqar-landingpage.vercel.app/ar
>
> المنتج متاح بترخيص وتجهيز وتخصيص، ويبدأ السعر المبدئي للنسخة الأساسية من **500 دولار**، بينما يتحدد السعر النهائي بعد فهم احتياجات المكتب ونطاق التنفيذ.
>
> يسعدنا ترتيب عرض مختصر نستمع فيه إلى احتياجاتكم، ونوضح لكم ما يمكن تنفيذه وما يشمله السعر قبل اتخاذ أي قرار.
>
> مع خالص التحية،
> **فريق Novixa | نوڤيكسا**

Use the above only after replacing the current marketing-page link with the final canonical landing page and verifying all demo links. Keep the demo credentials out of public marketing messages; share controlled access separately if required.

## 9. Polished Arabic referral-partner message

> السلام عليكم ورحمة الله وبركاته،
>
> أشاركك تفاصيل التعاون لتسويق **Novixa Aqar — عقار**.
>
> هو نظام عقاري قابل للتخصيص للمكاتب والشركات العقارية وإدارة الأملاك. يجمع بين واجهة عرض العقارات وأدوات إدارة العقارات والعملاء والموظفين والصلاحيات والطلبات والمعاينات والصيانة، بحسب الخصائص المتاحة في النسخة التي سيتم تجهيزها للعميل.
>
> **طريقة التعاون:** دورك هو الوصول إلى المكاتب والشركات المناسبة، والتواصل مع أصحاب القرار، والتعريف بالحل، ومشاركة الديمو عند وجود اهتمام، ثم تحويل الفرص الجادة إلى فريق Novixa. نحن نتولى شرح الجانب التقني، ودراسة الاحتياجات، والتسعير، والتخصيص، والتجهيز، والتسليم.
>
> **العمولة المتفق عليها في هذا العرض هي 30% من قيمة عملية البيع المنسوبة إليك**، وفق آلية الإسناد وشروط الاستحقاق والدفع التي نتفق عليها كتابةً. أمثلة: بيع بقيمة 500 دولار = 150 دولارًا عمولة؛ وبيع بقيمة 1,000 دولار = 300 دولار.
>
> **للتعرف على النظام:**
> - https://aqar-demo.novixa.dev/
> - https://aqar-demo2.novixa.dev/
> - صفحة التعريف الحالية: https://aqar-landingpage.vercel.app/ar
>
> ننصحك بتجربة النظام أولًا، وفهم ما يقدمه، ثم استهداف العملاء الذين يمكن أن يستفيدوا منه فعليًا. لا نبحث عن إرسال روابط عشوائية؛ بل عن فرص مناسبة وعلاقات جادة.
>
> هدفنا أن تركز على الوصول إلى العملاء وبناء العلاقات، بينما يركز فريق Novixa على الجوانب الفنية والتنفيذ.
>
> تحياتنا، **فريق Novixa | نوڤيكسا**

## 10. Demo-account handling

The supplied source message contains test roles and demo credentials. This document intentionally does **not** repeat the shared password. Keep test credentials in a private internal operator note, not on the marketing page, repository README, public GitHub issue, public screenshots, SEO text, or social posts. Before broad public access, verify that test accounts cannot access real customer data or production capabilities; rotate shared credentials when exposed; provide role-based, resettable demo accounts or a controlled read-only demo where appropriate.
