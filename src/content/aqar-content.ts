import {
  AudienceItem,
  CapabilityGroup,
  CustomizationPillar,
  DeliveryStep,
  DemoOption,
  FaqItem,
  LandingLink,
  LocalizedText,
  ProblemOutcomeItem,
  RoleMatrixItem,
  WalkthroughStep,
} from '@/types';
import { EXTERNAL_ROUTES } from '@/lib/site';

export const BRAND_NAME: LocalizedText = {
  ar: 'نوڤيكسا عقار',
  en: 'Novixa Aqar',
};

export const PARENT_BRAND: LocalizedText = {
  ar: 'من تطوير نوڤيكسا (Novixa)',
  en: 'Engineered by Novixa',
};

export const NAV_LINKS: LandingLink[] = [
  {
    label: { ar: 'لماذا عقار', en: 'Why Aqar' },
    href: '#problem-outcomes',
  },
  {
    label: { ar: 'القدرات', en: 'Capabilities' },
    href: '#capabilities',
  },
  {
    label: { ar: 'الأدوار', en: 'Roles' },
    href: '#roles',
  },
  {
    label: { ar: 'مسار العمل', en: 'Walkthrough' },
    href: '#walkthrough',
  },
  {
    label: { ar: 'النسخ الحية', en: 'Live Demos' },
    href: '#customization',
  },
  {
    label: { ar: 'التسعير', en: 'Pricing' },
    href: '#pricing',
  },
  {
    label: { ar: 'الأسئلة الشائعة', en: 'FAQ' },
    href: '#faq',
  },
];

export const HERO_CONTENT = {
  badge: {
    ar: 'نظام عقاري متكامل للشركات والمكاتب العقارية | B2B PropTech',
    en: 'Configurable B2B Real-Estate Platform for Agencies & Property Managers',
  },
  headline: {
    ar: 'نظام عقاري متكامل يشكل على مقاس شركتك',
    en: 'A Complete Real-Estate Platform Shaped Around Your Company',
  },
  subheadline: {
    ar: 'منصة عقارية تجمع الواجهة التسويقية العامة، واستقبال العقارات وطلبات العملاء، وحجز المعاينات، ولوحات التشغيل متعددة الأدوار للمبيعات والتأجير وإدارة الأملاك والصيانة — مع تهيئة كاملة باسم شركتك ويبدأ الإطلاق الأساسي من 500$.',
    en: 'Unify your public property portal, owner & buyer intake, viewing schedules, and 8 role-based workspaces across sales, leasing, property management, and maintenance — configured under your brand starting from $500.',
  },
  primaryCta: {
    ar: 'اطلب عرضاً وتخصيصاً لشركتك',
    en: 'Request Custom Demo & Scope',
  },
  secondaryCta: {
    ar: 'استعرض النسخة التجريبية الحية',
    en: 'Explore Live Interactive Demo',
  },
  trustPills: [
    {
      ar: 'يبدأ من 500$ للإطلاق الأساسي (بدون استضافة أو خوادم)',
      en: 'Starts at $500 baseline setup (hosting/servers excluded)',
    },
    {
      ar: 'بوابة عامة + 8 لوحات تشغيل مستقلة حسب الدور',
      en: 'Public portal + 8 dedicated role-based workspaces',
    },
    {
      ar: 'عربي وإنجليزي أصيل (RTL / LTR) + الوضع الداكن',
      en: 'Native Arabic & English (RTL / LTR) + Dark Mode',
    },
    {
      ar: 'تخصيص الهوية وسير العمل وعرض العملات حسب سوقك',
      en: 'Configurable branding, workflows & currency display',
    },
  ],
};

export const PRODUCT_PREVIEW_FACTS = [
  {
    id: 'portal',
    label: { ar: 'البوابة العقارية العامة', en: 'Public Property Portal' },
    value: { ar: 'بحث، فلترة، مقارنة، ومفضلة', en: 'Search, filter, compare & wishlist' },
    detail: {
      ar: 'واجهة سريعة للعملاء لاستعراض العقارات وحجز المعاينات وإرسال الطلبات مباشرة.',
      en: 'Customer-facing portal for browsing listings, booking viewings, and submitting requests.',
    },
  },
  {
    id: 'roles',
    label: { ar: 'لوحات التشغيل حسب الدور', en: 'Role-Based Workspaces' },
    value: { ar: '8 أدوار تشغيلية + البوابة العامة', en: '8 Business Roles + Public Portal' },
    detail: {
      ar: 'مساحات عمل مخصصة للإدارة، الموظفين، الوكلاء، الملاك، المستأجرين، المشترين، البائعين، والمقاولين.',
      en: 'Dedicated Filament workspaces for Admin, Staff, Agent, Landlord, Tenant, Buyer, Seller & Contractor.',
    },
  },
  {
    id: 'intake',
    label: { ar: 'مسارات استقبال الطلبات', en: 'Structured Lead & Supply Intake' },
    value: { ar: 'إيداع عقار + طلب عقار + حجز معاينة', en: 'Submit Property + Request + Booking' },
    detail: {
      ar: 'استقبال منظم لعروض الملاك وطلبات الباحثين وحجوزات المعاينة مع تصدير تقويم ICS.',
      en: 'Structured intake for owner listings, buyer inquiries, and viewing bookings with ICS export.',
    },
  },
  {
    id: 'localization',
    label: { ar: 'التوطين وتعدد العملات', en: 'Localization & Currency Display' },
    value: { ar: 'عربي/إنجليزي + YER / SAR / USD', en: 'AR/EN RTL-LTR + YER / SAR / USD' },
    detail: {
      ar: 'دعم ثنائي اللغة بالكامل مع تهيئة رمز العملة لكل عقار أو عقد حسب السوق المستهدف.',
      en: 'Full bilingual support with per-record currency symbol formatting configured for your market.',
    },
  },
];

export const AUDIENCE_ITEMS: AudienceItem[] = [
  {
    id: 'brokerages',
    tag: { ar: 'الوساطة والتسويق', en: 'Brokerages & Agencies' },
    title: { ar: 'مكاتب العقارات وشركات الوساطة العقارية', en: 'Real-Estate Agencies & Brokerages' },
    description: {
      ar: 'للشركات التي تحتاج إلى تحويل عروض العقارات وطلبات المشترين والمستأجرين وحجوزات المعاينة من رسائل متفرقة إلى مسار بيع وتأجير منظم تحت علامتها التجارية.',
      en: 'For brokerages that want to move listings, buyer requests, and viewing schedules out of scattered chats into a branded sales and leasing pipeline.',
    },
  },
  {
    id: 'property_managers',
    tag: { ar: 'إدارة الأملاك والتأجير', en: 'Property & Lease Management' },
    title: { ar: 'شركات إدارة الأملاك والمحافظ الإيجارية', en: 'Property & Portfolio Management Firms' },
    description: {
      ar: 'للفرق التي تدير عقارات الملاك، وطلبات الاستئجار، وعقود الإيجار، وسجلات الدفعات، وبلاغات الصيانة مع لوحات مخصصة للمالك والمستأجر والمقاول.',
      en: 'For teams managing landlord portfolios, rental applications, active leases, payment schedules, and maintenance work orders across landlords, tenants, and contractors.',
    },
  },
  {
    id: 'developers_marketers',
    tag: { ar: 'التسويق العقاري للمشاريع', en: 'Project & Portfolio Marketers' },
    title: { ar: 'شركات التسويق العقاري والمحافظ المتنامية', en: 'Real-Estate Marketing Teams & Growing Portfolios' },
    description: {
      ar: 'للجهات التي تعرض وحدات سكنية أو تجارية متعددة وتحتاج إلى بوابة عرض احترافية مع فرز الطلبات وتوزيع المهام على الوكلاء والموظفين.',
      en: 'For firms showcasing residential or commercial inventory that require a polished public catalog paired with structured lead routing for agents and staff.',
    },
  },
  {
    id: 'modernizing_offices',
    tag: { ar: 'التحول الرقمي العقاري', en: 'Operational Modernization' },
    title: { ar: 'المكاتب المنتقلة من الجداول والعمل اليدوي', en: 'Offices Transitioning from Spreadsheets & Manual Work' },
    description: {
      ar: 'للمكاتب التي تعتمد على واتساب وملفات الإكسل وترغب في امتلاك نظام مركزي واضح الصلاحيات دون تكلفة وتعقيد بناء برنامج من الصفر.',
      en: 'For offices running on WhatsApp and spreadsheets that need a centralized, role-governed system without the cost and delay of building from scratch.',
    },
  },
];

export const PROBLEM_OUTCOME_ITEMS: ProblemOutcomeItem[] = [
  {
    id: 'scattered_listings',
    beforeTitle: {
      ar: 'عروض عقارية مبعثرة بين الواتساب والجداول',
      en: 'Property inventory scattered across chats and spreadsheets',
    },
    beforeDescription: {
      ar: 'صعوبة معرفة الوحدات المتاحة أو المؤجرة أو المباعة، وتكرار إرسال الصور والتفاصيل يدوياً لكل عميل.',
      en: 'Hard to track which units are available, leased, or sold, with staff manually re-sending photos and specs to every prospect.',
    },
    afterTitle: {
      ar: 'بوابة عقارية مركزية قابلة للبحث والفلترة والمقارنة',
      en: 'Centralized portal with structured search, filters, and comparison',
    },
    afterDescription: {
      ar: 'كل عقار منشور بصفحة تفصيلية وصور ومواصفات واضحة وحالة محدثة، مع أدوات مقارنة ومفضلة للعميل.',
      en: 'Every listing has a structured detail page, gallery, amenities, status badge, comparison view, and customer wishlist.',
    },
  },
  {
    id: 'lost_leads',
    beforeTitle: {
      ar: 'ضياع طلبات العملاء وعروض الملاك بدون متابعة',
      en: 'Lost buyer inquiries and untracked owner submissions',
    },
    beforeDescription: {
      ar: 'الرسائل الواردة من الملاك أو الباحثين عن عقار تضيع في المحادثات الشخصية دون سجل مركزي أو إسناد واضح.',
      en: 'Owner property submissions and buyer requests get buried in personal messages with no audit trail or assignment.',
    },
    afterTitle: {
      ar: 'قنوات استقبال منظمة لإيداع العقارات وطلبات الشراء/الإيجار',
      en: 'Dedicated intake workflows for owner listings and buyer requests',
    },
    afterDescription: {
      ar: 'نماذج مخصصة لاستقبال عروض الملاك (`/submit-property`) وطلبات العملاء (`/property-request`) وتوجيهها مباشرة لفريقك.',
      en: 'Dedicated intake routes (`/submit-property` and `/property-request`) feed directly into staff and agent queues.',
    },
  },
  {
    id: 'chaotic_viewings',
    beforeTitle: {
      ar: 'تضارب مواعيد المعاينات الميدانية وضعف التنسيق',
      en: 'Unstructured field viewings and scheduling conflicts',
    },
    beforeDescription: {
      ar: 'مواعيد معاينة شفهية غير موثقة تؤدي لتأخر الوكلاء أو نسيان المواعيد وعدم معرفة نتيجة الزيارة.',
      en: 'Informal viewing appointments lead to missed slots, agent scheduling conflicts, and zero post-visit tracking.',
    },
    afterTitle: {
      ar: 'جدولة معاينات إلكترونية مع تصدير ملفات تقويم ICS',
      en: 'Structured viewing bookings with ICS calendar export',
    },
    afterDescription: {
      ar: 'يحجز العميل موعد المعاينة من صفحة العقار، ويتابعها الوكيل والموظف مع إمكانية تنزيل الموعد للتقويم.',
      en: 'Clients book viewing slots directly from listings while agents and clients track status and export ICS calendar events.',
    },
  },
  {
    id: 'disconnected_post_lease',
    beforeTitle: {
      ar: 'انقطاع المتابعة بعد التأجير وتشتت طلبات الصيانة',
      en: 'Disconnected post-lease tracking and maintenance chaos',
    },
    beforeDescription: {
      ar: 'متابعة العقود والدفعات وطلبات الإصلاح تتم بشكل عشوائي بين المستأجر والمالك والمقاول.',
      en: 'Lease renewals, payment records, and repair tickets are handled ad-hoc between tenants, landlords, and contractors.',
    },
    afterTitle: {
      ar: 'تتبع متصل لطلبات الإيجار والعقود والدفعات والصيانة',
      en: 'Connected rental applications, leases, payments, and maintenance',
    },
    afterDescription: {
      ar: 'كل دور يرى ما يخصه: المالك يتابع عقاراته وعقوده، المستأجر يتابع عقده ويرفع طلب الصيانة، والمقاول ينفذ المهام المسندة.',
      en: 'Each stakeholder gets a tailored panel: landlords monitor portfolios, tenants view leases & submit repairs, and contractors update assigned jobs.',
    },
  },
];

export const CAPABILITY_GROUPS: CapabilityGroup[] = [
  {
    id: 'public_portal',
    title: {
      ar: '1. البوابة العقارية العامة وتجربة العميل',
      en: '1. Public Property Portal & Discovery Experience',
    },
    description: {
      ar: 'واجهة تسويقية حديثة باسم شركتك تُمكّن الباحثين عن عقار من استكشاف العروض والمقارنة والتواصل بسهولة.',
      en: 'A branded customer-facing portal where prospects browse, filter, compare, and save properties.',
    },
    availability: 'verified',
    availabilityBadge: {
      ar: 'مفعّل في النظام الأساسي',
      en: 'Included in Core Baseline',
    },
    routeEvidence: '/, /properties, /properties/{id}, /compare, /wishlist',
    bullets: {
      ar: [
        'بحث متقدم وفلترة حسب الغرض (بيع / إيجار)، نوع العقار، المدينة/الحي، السعر، المساحة، وعدد الغرف',
        'صفحة تفصيلية لكل عقار تعرض الصور، المواصفات، المرافق، الموقع، والوكيل المسؤول',
        'مقارنة العقارات جنباً إلى جنب (`/compare`) وحفظ العقارات في قائمة المفضلة (`/wishlist`)',
        'قسم للأخبار والمقالات العقارية (`/news`) وحاسبات عقارية تفاعلية (`/calculators`)',
      ],
      en: [
        'Filtered search by purpose (sale/rent), property type, location, price range, area, and bedrooms',
        'Rich listing detail pages with photo galleries, specifications, amenities, and assigned agent info',
        'Side-by-side property comparison (`/compare`) and saved wishlist (`/wishlist`)',
        'Built-in real-estate news/blog module (`/news`) and interactive financial calculators (`/calculators`)',
      ],
    },
  },
  {
    id: 'intake_and_bookings',
    title: {
      ar: '2. استقبال عروض الملاك وطلبات العملاء وحجز المعاينات',
      en: '2. Owner Supply Intake, Buyer Requests & Viewing Bookings',
    },
    description: {
      ar: 'مسارات رقمية جاهزة لتحويل زوار الموقع إلى عروض عقارية جديدة أو طلبات شراء/استئجار أو مواعيد معاينة.',
      en: 'Structured intake funnels converting portal visitors into property inventory, qualified requests, and scheduled viewings.',
    },
    availability: 'verified',
    availabilityBadge: {
      ar: 'مفعّل في النظام الأساسي',
      en: 'Included in Core Baseline',
    },
    routeEvidence: '/submit-property, /property-request, /properties/{id}/book, /bookings',
    bullets: {
      ar: [
        'نموذج إيداع عقار من المالك (`/submit-property`) لتغذية مخزون المكتب بعروض جديدة للمراجعة والاعتماد',
        'نموذج طلب عقار بمواصفات محددة (`/property-request`) للعملاء الباحثين عن وحدة غير معروضة حالياً',
        'حجز موعد معاينة مباشرة من صفحة العقار (`/properties/{id}/book`) مع تحديد التاريخ والوقت والملاحظات',
        'إدارة الحجوزات وتصدير ملف التقويم القياسي (`.ics`) لإضافته إلى تقويم الهاتف أو البريد',
      ],
      en: [
        'Owner property submission workflow (`/submit-property`) feeding new inventory into staff review queues',
        'Buyer/tenant property request form (`/property-request`) capturing custom search criteria and budgets',
        'Direct property viewing booking (`/properties/{id}/book`) with preferred date, time, and notes',
        'Booking status management with standard `.ics` calendar file export for clients and agents',
      ],
    },
  },
  {
    id: 'leasing_and_operations',
    title: {
      ar: '3. إدارة التأجير والعقود والدفعات وطلبات الصيانة',
      en: '3. Leasing, Contracts, Payments & Maintenance Operations',
    },
    description: {
      ar: 'أدوات تشغيلية لإدارة دورة حياة العقار بعد التسويق، من تقديم طلب الاستئجار حتى متابعة العقود والصيانة.',
      en: 'Operational modules covering the post-marketing lifecycle from rental applications to lease and maintenance tracking.',
    },
    availability: 'verified',
    availabilityBadge: {
      ar: 'مفعّل في النظام الأساسي',
      en: 'Included in Core Baseline',
    },
    routeEvidence: '/properties/{id}/apply, /rental-applications, /my-documents, Filament Resources',
    bullets: {
      ar: [
        'تقديم طلبات الاستئجار إلكترونياً (`/properties/{id}/apply`) ومراجعتها واعتمادها من الإدارة أو المالك',
        'إدارة عقود الإيجار وتوثيق فترات العقد وقيم الإيجار وحالات السداد والدفعات المسجلة',
        'إدارة المستندات والملفات المرتبطة بالعقود والعملاء (`/my-documents`)',
        'نظام بلاغات وطلبات الصيانة يربط المستأجر والإدارة والمقاول لتتبع حالة الإصلاح وتكلفته',
      ],
      en: [
        'Online rental application submission (`/properties/{id}/apply`) and review workflow for staff and landlords',
        'Lease agreement management tracking contract terms, rental amounts, and recorded payment schedules',
        'Document management workspace (`/my-documents`) for lease attachments and client records',
        'Maintenance request ticketing connecting tenants, property managers, and assigned contractors',
      ],
    },
  },
  {
    id: 'governance_and_config',
    title: {
      ar: '4. تعدد الأدوار، اللغتين، والتهيئة حسب السوق',
      en: '4. Multi-Role Governance, Bilingual UI & Market Configuration',
    },
    description: {
      ar: 'بنية تقنية مرنة مبنية على Laravel وFilament تمنح كل مستخدم صلاحياته الدقيقة وتدعم بيئة العمل العربية والإنجليزية.',
      en: 'Built on Laravel & Filament with strict role isolation, native Arabic/English interfaces, and configurable market settings.',
    },
    availability: 'conditional',
    availabilityBadge: {
      ar: 'يهيأ حسب نطاق شركتك',
      en: 'Configured to Your Scope',
    },
    routeEvidence: '8 Filament Panels + config/currencies.php (YER, SAR, USD)',
    bullets: {
      ar: [
        '8 لوحات تحكم مستقلة حسب الدور التشغيلي لضمان عدم تداخل الصلاحيات والبيانات',
        'واجهة عربية (RTL) وإنجليزية (LTR) كاملة مع دعم الوضع الداكن (Dark Mode) في البوابة واللوحات',
        'تهيئة عرض العملات لكل سجل (يدعم افتراضياً الريال اليمني YER، الريال السعودي SAR، والدولار USD مع قابلية إضافة عملة سوقك)',
        'إمكانية ربط تكاملات إضافية (مثل بوابات الدفع، الرسائل القصيرة SMS، أو واتساب API) كمرحلة تطوير مخصصة عند الطلب',
      ],
      en: [
        '8 isolated role-based dashboards ensuring clean permissions and data separation',
        'Full Arabic (RTL) and English (LTR) support with Dark Mode across public and internal panels',
        'Per-record currency display formatting (ships with YER, SAR, USD and configurable to local currencies; no automatic live FX conversion)',
        'Optional custom integrations (payment gateways, SMS, WhatsApp APIs, ERP sync) available as scoped add-ons',
      ],
    },
  },
];

export const WALKTHROUGH_STEPS: WalkthroughStep[] = [
  {
    stepNumber: '01',
    id: 'publish_and_brand',
    title: {
      ar: 'تهيئة الهوية ونشر المخزون العقاري',
      en: 'Configure Brand Identity & Publish Inventory',
    },
    description: {
      ar: 'يتم ضبط شعار شركتك، ألوانها، بيانات التواصل، وتصنيفات العقارات والمدن، ثم إضافة الوحدات العقارية بالصور والمواصفات والعملة المناسبة.',
      en: 'Set up your agency branding, contact channels, cities, and property categories, then publish listings with photos, specs, and currency.',
    },
    roleBadge: { ar: 'الإدارة / الموظفون / الملاك', en: 'Admin / Staff / Landlords' },
    routePath: '/admin • /staff • /submit-property',
    highlights: {
      ar: [
        'إدخال مباشر من فريقك أو استقبال عروض الملاك عبر نموذج إيداع العقار',
        'مراجعة واعتماد العقارات قبل نشرها في البوابة العامة',
      ],
      en: [
        'Direct entry by staff or structured intake via owner property submissions',
        'Review and approval workflow before listings go live on the public portal',
      ],
    },
  },
  {
    stepNumber: '02',
    id: 'discover_and_engage',
    title: {
      ar: 'بحث العملاء والمقارنة وحجز المعاينات',
      en: 'Client Discovery, Comparison & Viewing Booking',
    },
    description: {
      ar: 'يتصفح العميل البوابة باللغة العربية أو الإنجليزية، يقارن بين الوحدات، ويحجز موعد معاينة أو يرسل طلب عقار بمواصفاته الخاصة.',
      en: 'Prospects search in Arabic or English, compare properties side-by-side, book a viewing slot, or submit a custom property request.',
    },
    roleBadge: { ar: 'الزوار / المشترون / المستأجرون', en: 'Visitors / Buyers / Tenants' },
    routePath: '/properties • /compare • /properties/{id}/book',
    highlights: {
      ar: [
        'حجز معاينة مرتبط مباشرة بالعقار والوكيل مع ملف تقويم ICS',
        'استقبال طلبات البحث الخاصة عندما لا يجد العميل طلبه في المعروض الحالي',
      ],
      en: [
        'Property-linked viewing bookings with downloadable ICS calendar invites',
        'Custom property request capture when a buyer needs specific off-catalog criteria',
      ],
    },
  },
  {
    stepNumber: '03',
    id: 'assign_and_convert',
    title: {
      ar: 'متابعة الوكلاء وطلبات الإيجار والتعاقد',
      en: 'Agent Follow-Up, Rental Applications & Lease Creation',
    },
    description: {
      ar: 'يتابع الوكلاء والموظفون الحجوزات والطلبات من لوحاتهم، ويتم تحويل طلب الاستئجار المعتمد إلى عقد إيجار موثق مرتبط بالوحدة والمستأجر والمالك.',
      en: 'Agents and staff manage bookings and inquiries from their panels, converting approved rental applications into structured lease agreements.',
    },
    roleBadge: { ar: 'الوكلاء / الموظفون / الإدارة', en: 'Agents / Staff / Admin' },
    routePath: '/agent • /properties/{id}/apply • /rental-applications',
    highlights: {
      ar: [
        'مسار واضح من المعاينة إلى طلب الإيجار ثم توثيق العقد',
        'حفظ المستندات والملفات المرتبطة بالعقد في حساب العميل والإدارة',
      ],
      en: [
        'Clear progression from viewing appointment to rental application and active lease',
        'Centralized document access for lease attachments and client records',
      ],
    },
  },
  {
    stepNumber: '04',
    id: 'manage_and_maintain',
    title: {
      ar: 'متابعة الدفعات وإدارة الصيانة والتقارير',
      en: 'Ongoing Payments, Maintenance Tickets & Portfolio Oversight',
    },
    description: {
      ar: 'يتابع المالك أداء عقاراته وعقوده، ويطّلع المستأجر على التزاماته ويرفع طلبات الصيانة، بينما يستلم المقاول أوامر العمل المسندة لتنفيذها.',
      en: 'Landlords monitor portfolio performance, tenants view lease status and raise maintenance tickets, and contractors execute assigned work orders.',
    },
    roleBadge: { ar: 'المالك / المستأجر / المقاول', en: 'Landlord / Tenant / Contractor' },
    routePath: '/landlord • /tenant • /contractor',
    highlights: {
      ar: [
        'رؤية مخصصة لكل طرف حسب دوره دون كشف بيانات الأطراف الأخرى',
        'توثيق كامل لسجل الصيانة والدفعات وحالة إشغال الوحدات',
      ],
      en: [
        'Strict role-based visibility so each party only sees their authorized records',
        'Complete history of maintenance tickets, lease payments, and unit occupancy',
      ],
    },
  },
];

export const ROLE_MATRIX_ITEMS: RoleMatrixItem[] = [
  {
    id: 'super_admin',
    roleKey: 'super_admin',
    name: { ar: 'الإدارة العليا (Super Admin)', en: 'Super Admin' },
    panelPath: '/admin',
    responsibility: {
      ar: 'التحكم الكامل بالنظام، المستخدمين، الصلاحيات، العقارات، العقود، الإعدادات، والمحتوى.',
      en: 'Full system governance across users, roles, properties, leases, financials, settings, and CMS.',
    },
    verifiedWorkflows: {
      ar: [
        'إدارة جميع الموارد العقارية والعقود والدفعات وطلبات الصيانة',
        'إدارة حسابات المستخدمين وتعيين الأدوار والصلاحيات وإعدادات المنصة',
      ],
      en: [
        'Full CRUD over properties, leases, payments, bookings, and maintenance records',
        'User role administration, system configuration, and content management',
      ],
    },
  },
  {
    id: 'staff',
    roleKey: 'staff',
    name: { ar: 'موظفو التشغيل (Staff)', en: 'Operations Staff' },
    panelPath: '/staff',
    responsibility: {
      ar: 'التشغيل اليومي للمكتب، مراجعة الطلبات الواردة، تنسيق العقود، ومتابعة العملاء.',
      en: 'Day-to-day back-office operations, intake review, lease coordination, and customer support.',
    },
    verifiedWorkflows: {
      ar: [
        'مراجعة عروض العقارات المرسلة من الملاك وطلبات الباحثين عن عقار',
        'متابعة طلبات الاستئجار وتنسيق العقود وبلاغات الصيانة',
      ],
      en: [
        'Reviewing owner property submissions and incoming buyer/tenant requests',
        'Coordinating rental applications, lease records, and maintenance queues',
      ],
    },
  },
  {
    id: 'agent',
    roleKey: 'agent',
    name: { ar: 'الوكيل / المسوّق العقاري (Agent)', en: 'Real-Estate Agent' },
    panelPath: '/agent',
    responsibility: {
      ar: 'إدارة العروض المسندة، متابعة حجوزات المعاينة، والتواصل مع المشترين والمستأجرين.',
      en: 'Managing assigned listings, conducting property viewings, and progressing client inquiries.',
    },
    verifiedWorkflows: {
      ar: [
        'متابعة العقارات المسندة للوكيل وتحديث حالاتها',
        'إدارة مواعيد المعاينات وحالات التواصل مع العملاء المحتملين',
      ],
      en: [
        'Managing assigned property listings and availability status',
        'Handling scheduled viewing appointments and prospect follow-ups',
      ],
    },
  },
  {
    id: 'landlord',
    roleKey: 'landlord',
    name: { ar: 'مالك العقار (Landlord)', en: 'Property Owner / Landlord' },
    panelPath: '/landlord',
    responsibility: {
      ar: 'متابعة محفظة العقارات المملوكة، عقود الإيجار النشطة، الدفعات، وحالة الصيانة.',
      en: 'Monitoring owned property portfolios, active leases, rental income records, and maintenance.',
    },
    verifiedWorkflows: {
      ar: [
        'الاطلاع على الوحدات المملوكة وحالة إشغالها وعقود الإيجار المرتبطة بها',
        'متابعة طلبات الاستئجار وسجلات الدفعات وطلبات الصيانة الخاصة بعقاراته',
      ],
      en: [
        'Viewing owned units, occupancy status, and linked lease agreements',
        'Reviewing rental applications, payment records, and property maintenance logs',
      ],
    },
  },
  {
    id: 'tenant',
    roleKey: 'tenant',
    name: { ar: 'المستأجر (Tenant)', en: 'Tenant' },
    panelPath: '/tenant',
    responsibility: {
      ar: 'متابعة عقد الإيجار الحالي، الدفعات، المستندات، ورفع بلاغات الصيانة للوحدة المؤجرة.',
      en: 'Accessing active lease details, payment history, documents, and submitting maintenance requests.',
    },
    verifiedWorkflows: {
      ar: [
        'استعراض تفاصيل عقد الإيجار وسجل الدفعات والمستندات الخاصة به',
        'رفع طلبات الصيانة ومتابعة حالة إنجازها مع الإدارة والمقاول',
      ],
      en: [
        'Viewing active lease terms, payment schedules, and shared documents',
        'Submitting maintenance tickets and tracking repair resolution status',
      ],
    },
  },
  {
    id: 'buyer',
    roleKey: 'buyer',
    name: { ar: 'المشتري / الباحث عن عقار (Buyer)', en: 'Buyer / Prospect' },
    panelPath: '/buyer',
    responsibility: {
      ar: 'تتبع حجوزات المعاينة، طلبات العقارات الخاصة، والعقارات المفضلة.',
      en: 'Tracking scheduled property viewings, submitted property requests, and saved listings.',
    },
    verifiedWorkflows: {
      ar: [
        'إدارة مواعيد المعاينات المحجوزة وتنزيل ملفات التقويم ICS',
        'متابعة حالة طلبات البحث العقاري وقائمة المفضلة',
      ],
      en: [
        'Managing booked viewing appointments and downloading ICS calendar files',
        'Tracking submitted property requests and saved wishlist items',
      ],
    },
  },
  {
    id: 'seller',
    roleKey: 'seller',
    name: { ar: 'البائع / عارض العقار (Seller)', en: 'Seller' },
    panelPath: '/seller',
    responsibility: {
      ar: 'إيداع العقارات المعروضة للبيع ومتابعة حالة مراجعتها ونشرها والمعاينات عليها.',
      en: 'Submitting properties for sale and monitoring listing review status and viewing activity.',
    },
    verifiedWorkflows: {
      ar: [
        'تقديم عقارات جديدة للمكتب ومتابعة حالة الاعتماد والنشر',
        'الاطلاع على تفاعل السوق وحجوزات المعاينة المرتبطة بعقاراته',
      ],
      en: [
        'Submitting sale properties for agency review and publication',
        'Monitoring listing status and scheduled viewings on submitted properties',
      ],
    },
  },
  {
    id: 'contractor',
    roleKey: 'contractor',
    name: { ar: 'مقاول / فني الصيانة (Contractor)', en: 'Maintenance Contractor' },
    panelPath: '/contractor',
    responsibility: {
      ar: 'استلام أوامر عمل الصيانة المسندة، تحديث حالة التنفيذ، وتوثيق الإنجاز.',
      en: 'Receiving assigned maintenance work orders, updating repair progress, and logging completion.',
    },
    verifiedWorkflows: {
      ar: [
        'استعراض مهام الصيانة المسندة مع تفاصيل الوحدة والمشكلة',
        'تحديث حالة الطلب من قيد التنفيذ إلى مكتمل مع الملاحظات الفنية',
      ],
      en: [
        'Viewing assigned maintenance tickets with unit details and issue descriptions',
        'Updating work-order statuses through completion with technical notes',
      ],
    },
  },
];

export const CUSTOMIZATION_PILLARS: CustomizationPillar[] = [
  {
    id: 'brand_identity',
    title: { ar: 'الهوية البصرية والاسم التجاري', en: 'Brand Identity & White-Label Styling' },
    description: {
      ar: 'تخصيص اسم المنصة، الشعار، الألوان، الخطوط، صفحات الهبوط، وبيانات التواصل لتظهر المنصة كمنتج خاص بشركتك 100%.',
      en: 'Configure platform name, logo, color palette, typography, hero messaging, and contact details so the portal is 100% yours.',
    },
    scopeType: 'baseline',
    scopeBadge: { ar: 'ضمن الإطلاق الأساسي', en: 'Included in Baseline' },
  },
  {
    id: 'market_localization',
    title: { ar: 'إعدادات السوق والمدن والعملات', en: 'Market Cities, Categories & Currency Display' },
    description: {
      ar: 'ضبط المدن والأحياء، أنواع العقارات، المرافق، وعرض رمز العملة (مثل SAR أو YER أو USD أو عملة بلدك) واللغة الافتراضية.',
      en: 'Tailor cities, districts, property types, amenities, default language (AR/EN), and currency display symbols for your local market.',
    },
    scopeType: 'baseline',
    scopeBadge: { ar: 'ضمن الإطلاق الأساسي', en: 'Included in Baseline' },
  },
  {
    id: 'roles_and_modules',
    title: { ar: 'تفعيل الأدوار والمسارات حسب نشاطك', en: 'Role & Workflow Activation by Business Model' },
    description: {
      ar: 'سواء كنت مكتب وساطة للبيع فقط، أو شركة إدارة أملاك وتأجير وصيانة، نضبط القوائم والأدوار المفعّلة لتناسب فريقك.',
      en: 'Whether you focus on brokerage sales, leasing & property management, or both, we enable the exact roles and workflows your team uses.',
    },
    scopeType: 'baseline',
    scopeBadge: { ar: 'ضمن الإطلاق الأساسي', en: 'Included in Baseline' },
  },
  {
    id: 'custom_integrations',
    title: { ar: 'تكاملات وتعديلات برمجية مخصصة', en: 'Custom Integrations & Bespoke Workflows' },
    description: {
      ar: 'تعديلات عميقة على دورة العمل، تقارير خاصة، أو ربط مع بوابات دفع إلكتروني، مزودي رسائل SMS/WhatsApp، أو أنظمة محاسبية.',
      en: 'Deep workflow modifications, custom reporting, or third-party integrations (payment gateways, SMS/WhatsApp providers, ERP/accounting).',
    },
    scopeType: 'scoped',
    scopeBadge: { ar: 'تسعير حسب النطاق', en: 'Scoped Separately' },
  },
];

export const DEMO_OPTIONS: DemoOption[] = [
  {
    id: 'primary_generic',
    title: {
      ar: 'النسخة المرجعية الكاملة — نوڤيكسا عقار',
      en: 'Primary Reference Demo — Novixa Aqar',
    },
    subtitle: {
      ar: 'البوابة العقارية العامة والواجهات القياسية للنظام قبل تخصيص الهوية لشركة محددة.',
      en: 'The standard reference property portal and baseline interface before client-specific rebranding.',
    },
    badge: { ar: 'النسخة الأساسية الموصى بها', en: 'Primary Reference Demo' },
    url: EXTERNAL_ROUTES.primaryDemo,
    isPrimary: true,
    disclaimer: {
      ar: 'تحتوي هذه النسخة على عقارات وأرقام تجريبية لأغراض استعراض المزايا فقط.',
      en: 'Contains illustrative sample listings and figures for product demonstration purposes only.',
    },
    highlights: {
      ar: [
        'استعراض البحث والفلترة والمقارنة وتفاصيل العقارات',
        'تجربة نماذج إيداع العقار، طلب العقار، وحجز المعاينة، والحاسبات العقارية',
      ],
      en: [
        'Explore search, filtering, comparison, and property detail pages',
        'Test owner submission, buyer request, viewing booking, and calculators',
      ],
    },
  },
  {
    id: 'branded_rusu',
    title: {
      ar: 'مثال تخصيص هوية (1) — واجهة شركة عقارية مخصصة',
      en: 'Brand Customization Showcase (1) — Tailored Agency Theme',
    },
    subtitle: {
      ar: 'نموذج حي يوضح كيف يتغير مظهر النظام وهويته البصرية ومحتواه عند تهيئته لشركة عقارية.',
      en: 'Live example illustrating how the platform adapts its visual theme and content for a specific real-estate brand.',
    },
    badge: { ar: 'مثال تخصيص هوية', en: 'Customization Showcase' },
    url: EXTERNAL_ROUTES.brandedDemoRusu,
    isPrimary: false,
    disclaimer: {
      ar: 'تنبيه: الأسماء التجارية والأرقام والعقارات المعروضة داخل هذا المثال هي بيانات تجريبية افتراضية لتوضيح قابلية التخصيص فقط.',
      en: 'Note: Brand names, metrics, and listings inside this showcase are illustrative sample data demonstrating visual customization.',
    },
    highlights: {
      ar: [
        'تخصيص الألوان والخطوط والرسائل التسويقية في الصفحة الرئيسية',
        'نفس المحرك البرمجي القوي مع طابع بصري مختلف بالكامل',
      ],
      en: [
        'Customized color palette, typography, and hero messaging',
        'Powered by the same core engine with a distinct brand identity',
      ],
    },
  },
];

export const PRICING_SCOPE_CONTENT = {
  badge: {
    ar: 'تسعير واضح وشفاف بدون رسوم مخفية',
    en: 'Transparent Pricing & Clear Scope Boundaries',
  },
  headline: {
    ar: 'يبدأ تجهيز وإطلاق نسختك المخصصة من 500$',
    en: 'Your Branded & Configured Platform Starts at $500',
  },
  subheadline: {
    ar: 'نؤمن بالوضوح التام قبل التعاقد: تعرف بالضبط على ما يشمله الإطلاق الأساسي، وما يُسعّر كإضافات مخصصة، وما لا يدخل ضمن سعر البرمجية.',
    en: 'We believe in total clarity upfront: see exactly what is included in the $500 baseline setup, what is scoped as custom add-ons, and what infrastructure items are excluded.',
  },
  startingPriceCard: {
    priceLabel: { ar: 'يبدأ من', en: 'Starting from' },
    priceValue: '$500',
    priceCurrency: 'USD',
    priceSuffix: {
      ar: 'للنسخة الأساسية المهيأة بهوية شركتك',
      en: 'for baseline branded setup & configuration',
    },
    summary: {
      ar: 'يتحدد السعر النهائي بناءً على حجم التعديلات المطلوبة، عدد الأدوار المفعّلة، والتكاملات الإضافية بعد جلسة تحديد النطاق.',
      en: 'Final pricing depends on your required customizations, active operational roles, and any third-party integrations confirmed during scoping.',
    },
  },
  includedInBaseline: {
    title: {
      ar: 'ماذا يشمل الإطلاق الأساسي (ابتداءً من 500$)',
      en: 'What Is Included in the $500 Baseline Setup',
    },
    items: {
      ar: [
        'تخصيص الهوية البصرية (اسم شركتك، الشعار، الألوان، بيانات التواصل، والروابط)',
        'إعداد البوابة العقارية العامة باللغتين العربية والإنجليزية مع الوضع الداكن',
        'تفعيل لوحات التشغيل للأدوار المطلوبة (إدارة، موظفون، وكلاء، ملاك، مستأجرون، مشترون، بائعون، مقاولون)',
        'تهيئة المدن والأحياء وتصنيفات العقارات ورمز العملة الافتراضي لسوقك',
        'تفعيل مسارات استقبال العقارات وطلبات العملاء وحجز المعاينات وطلبات الإيجار والصيانة',
        'تسليم النظام جاهزاً للعمل مع جلسة تدريب أولية لفريق الإدارة والتشغيل',
      ],
      en: [
        'Brand customization (company name, logo, colors, contact details, and social links)',
        'Public property portal configured in Arabic & English (RTL/LTR) with Dark Mode',
        'Activation of required role workspaces (Admin, Staff, Agent, Landlord, Tenant, Buyer, Seller, Contractor)',
        'Configuration of local cities, districts, property types, and default currency display symbol',
        'Owner property submission, buyer requests, viewing bookings, rental applications & maintenance workflows',
        'Production-ready handover with an onboarding walkthrough session for your admin team',
      ],
    },
  },
  scopedAddons: {
    title: {
      ar: 'ما الذي يُسعّر بشكل مستقل حسب نطاق شركتك',
      en: 'What Is Scoped & Quoted Separately',
    },
    items: {
      ar: [
        'تعديلات خاصة على منطق العمل أو إضافة حقول ومراحل اعتماد غير قياسية',
        'بناء تقارير مالية أو تشغيلية مخصصة أو قوالب طباعة عقود خاصة بشركتك',
        'الربط البرمجي مع بوابات الدفع الإلكتروني أو مزودي رسائل SMS / WhatsApp أو الأنظمة المحاسبية',
        'استيراد وترحيل البيانات التاريخية الضخمة من أنظمة قديمة أو ملفات إكسل معقدة',
      ],
      en: [
        'Custom business logic modifications or non-standard multi-stage approval workflows',
        'Bespoke financial/operational reports or custom printable contract templates',
        'Third-party API integrations (payment gateways, SMS/WhatsApp providers, accounting/ERP systems)',
        'Bulk historical data migration and cleansing from legacy databases or complex spreadsheets',
      ],
    },
  },
  explicitExclusions: {
    title: {
      ar: 'ما الذي لا يشمله سعر الـ 500$ الأساسي (شفافية كاملة)',
      en: 'What Is Explicitly Excluded from the $500 Baseline Price',
    },
    notice: {
      ar: 'لتجنب أي التباس، التكاليف التشغيلية للبنية التحتية والاشتراكات الخارجية تكون باسم العميل أو تُرتب كخدمة مستقلة:',
      en: 'To ensure complete transparency, ongoing infrastructure and third-party provider fees are not included in the software setup price:',
    },
    items: {
      ar: [
        'تكاليف الاستضافة السحابية أو الخوادم (Servers / Cloud Hosting / VPS)',
        'حجز أو تجديد اسم النطاق (Domain Name) وشهادات النطاقات الخاصة المدفوعة',
        'اشتراكات خدمات البريد الإلكتروني التجاري، أو رسائل SMS، أو WhatsApp Business API، أو الخرائط المدفوعة',
        'عقود الصيانة الدورية طويلة الأمد أو إدارة الخوادم المستمرة (يمكن إضافتها باتفاق مستقل حسب رغبتك)',
      ],
      en: [
        'Cloud hosting, VPS, or dedicated server infrastructure costs',
        'Domain name registration or renewal fees',
        'Paid third-party subscriptions (transactional email, SMS gateways, WhatsApp APIs, paid map quotas)',
        'Ongoing managed server administration or long-term SLA retainers (available via separate agreement if needed)',
      ],
    },
  },
};

export const DELIVERY_STEPS: DeliveryStep[] = [
  {
    step: '01',
    title: {
      ar: 'جلسة فهم النشاط وتحديد النطاق',
      en: 'Discovery & Scope Alignment',
    },
    description: {
      ar: 'نستعرض طبيعة عمل مكتبك (بيع، تأجير، إدارة أملاك)، الأدوار المطلوبة، وتفاصيل السوق المحلي لتحديد ما إذا كنت تحتاج النسخة الأساسية (500$) أو تخصيصات إضافية.',
      en: 'We review your business model (sales, leasing, property management), required roles, and local market settings to confirm whether the $500 baseline or a custom scope fits best.',
    },
    deliverable: {
      ar: 'وثيقة نطاق واضحة وعرض سعر تفصيلي ثابت',
      en: 'Clear scope checklist & fixed-price proposal',
    },
  },
  {
    step: '02',
    title: {
      ar: 'تخصيص الهوية وتهيئة إعدادات السوق',
      en: 'Brand Customization & Market Setup',
    },
    description: {
      ar: 'نطبق شعارك وألوانك وبيانات شركتك، ونضبط المدن والأحياء وتصنيفات العقارات والعملة واللغتين العربية والإنجليزية.',
      en: 'We apply your logo, color palette, and company details, and configure cities, districts, property types, currency symbol, and bilingual AR/EN content.',
    },
    deliverable: {
      ar: 'نسخة مهيأة بهويتك جاهزة للمراجعة',
      en: 'Branded staging instance ready for review',
    },
  },
  {
    step: '03',
    title: {
      ar: 'مراجعة المسارات وتجربة لوحات التشغيل',
      en: 'Workflow Verification & Role Testing',
    },
    description: {
      ar: 'تختبر مع فريقنا البوابة العامة ولوحات الأدوار (الإدارة، الوكلاء، الملاك، المستأجرين...) للتأكد من ملاءمة كل خطوة لطريقة عملك.',
      en: 'Walk through the public portal and role workspaces (Admin, Agent, Landlord, Tenant, etc.) with our team to verify every workflow.',
    },
    deliverable: {
      ar: 'اعتماد الجاهزية التشغيلية',
      en: 'Operational sign-off & configuration lock',
    },
  },
  {
    step: '04',
    title: {
      ar: 'النشر على بيئة الاستضافة وتدريب الفريق',
      en: 'Deployment & Team Onboarding',
    },
    description: {
      ar: 'ننشر النظام على الاستضافة والنطاق الخاصين بشركتك (أو نساعدك في اختيار وتجهيز الاستضافة المناسبة)، ونقدم إرشاداً عملياً لفريقك لبدء العمل فوراً.',
      en: 'We deploy the platform to your chosen hosting environment and domain (or guide you in provisioning one) and onboard your team.',
    },
    deliverable: {
      ar: 'إطلاق فعلي + تسليم بيانات الدخول والإرشادات',
      en: 'Live production launch + admin handover',
    },
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'what_is_aqar',
    category: 'product',
    question: {
      ar: 'هل نوڤيكسا عقار موقع إعلانات عقارية مفتوح للجمهور أم نظام خاص بشركتي',
      en: 'Is Novixa Aqar a public classifieds marketplace or a dedicated system for my company',
    },
    answer: {
      ar: 'نوڤيكسا عقار هو نظام برمجي متكامل (B2B) يُجهّز ويُسلّم خصيصاً لشركتك العقارية بهويتك واسمك ونطاقك الخاص. تحصل فيه على بوابة عقارية عامة لعملائك، بالإضافة إلى لوحات تشغيل داخلية لإدارة فريقك وعقاراتك وعقودك.',
      en: 'Novixa Aqar is a dedicated B2B software platform configured and deployed for your company under your own brand and domain. You get both a public-facing property portal for your clients and private multi-role back-office workspaces for your team.',
    },
  },
  {
    id: 'what_500_includes',
    category: 'pricing',
    question: {
      ar: 'ماذا يشمل سعر الـ 500$ الأساسي تحديداً',
      en: 'What exactly does the $500 starting price include',
    },
    answer: {
      ar: 'يشمل تجهيز النسخة الأساسية من النظام بهوية شركتك (الشعار، الألوان، بيانات التواصل)، وتفعيل البوابة العامة باللغتين العربية والإنجليزية، وتفعيل لوحات الأدوار الـ 8، وضبط المدن وتصنيفات العقارات والعملة، وتسليم النظام جاهزاً للتشغيل.',
      en: 'The $500 baseline covers configuring the core platform with your brand identity (logo, colors, contact info), enabling the bilingual AR/EN public portal and 8 role-based workspaces, setting up your local cities, property types, and currency symbol, and handing over a production-ready system.',
    },
  },
  {
    id: 'what_500_excludes',
    category: 'pricing',
    question: {
      ar: 'هل يشمل سعر الـ 500$ الاستضافة (Hosting) أو الخادم (Server) أو النطاق (Domain)',
      en: 'Does the $500 price include cloud hosting, servers, or domain registration',
    },
    answer: {
      ar: 'لا. سعر الـ 500$ يخص تجهيز وتخصيص البرمجية الأساسية فقط، ولا يشمل تكاليف الاستضافة أو الخوادم أو اسم النطاق أو أي اشتراكات خارجية مدفوعة (مثل رسائل SMS أو WhatsApp API). يمكننا إرشادك لأفضل خيارات الاستضافة المناسبة لميزانيتك أو ترتيبها لك بشكل منفصل.',
      en: 'No. The $500 starting price is for the baseline software setup and brand configuration only. Hosting, servers, domain registration, and paid third-party subscriptions (such as SMS or WhatsApp gateways) are excluded. We can advise you on cost-effective hosting or arrange deployment support separately.',
    },
  },
  {
    id: 'roles_customization',
    category: 'customization',
    question: {
      ar: 'نحن نعمل في الوساطة العقارية فقط ولا ندير صيانة، هل يمكن تبسيط النظام',
      en: 'We only operate as a sales/leasing brokerage and do not manage maintenance. Can the system be simplified',
    },
    answer: {
      ar: 'نعم بالتأكيد. النظام معياري؛ إذا كان نشاطك يقتصر على التسويق والوساطة وحجز المعاينات، نركز تهيئة النظام على البوابة العامة ولوحات الإدارة والوكلاء والعملاء دون إرباك فريقك بأدوات الصيانة أو المقاولين، مع بقاء الإمكانية متاحة لتفعيلها مستقبلاً.',
      en: 'Yes. Because the platform is modular, we can focus your setup on the public portal, listings, viewing bookings, and agent/admin panels without cluttering your workflow with maintenance or contractor modules — while keeping them available if you expand later.',
    },
  },
  {
    id: 'currencies_and_languages',
    category: 'technical',
    question: {
      ar: 'كيف يعمل دعم اللغات والعملات داخل النظام',
      en: 'How do languages and currencies work inside the platform',
    },
    answer: {
      ar: 'يدعم النظام اللغتين العربية (RTL) والإنجليزية (LTR) بشكل أصيل في كل من البوابة العامة ولوحات التحكم. أما العملات فيمكن تحديد رمز العملة لكل عقار أو عقد (يأتي مهيأً افتراضياً بالريال اليمني YER والريال السعودي SAR والدولار USD، ويمكن ضبط عملة بلدك عند التجهيز). علماً أن النظام يعرض العملة المحددة لكل سجل ولا يقوم بتحويل آلي فوري لأسعار الصرف.',
      en: 'The platform natively supports Arabic (RTL) and English (LTR) across both the public portal and internal dashboards. Currencies are stored and formatted per listing or lease record (shipping with YER, SAR, and USD, and configurable to your local currency during setup). Note that it formats per-record currencies rather than performing live automated FX rate conversion.',
    },
  },
  {
    id: 'demo_data_disclaimer',
    category: 'product',
    question: {
      ar: 'هل الأرقام والعقارات الموجودة في النسخ التجريبية الحية حقيقية',
      en: 'Are the properties and statistics shown in the live demo links real',
    },
    answer: {
      ar: 'لا. جميع العقارات والأسماء التجارية والأرقام المعروضة داخل روابط النسخ التجريبية (`aqar-demo.novixa.dev`, `aqar-demo2.novixa.dev` والنسخ المستعرضة للهوية) هي بيانات افتراضية لأغراض التجربة وتوضيح قابلية التخصيص فقط.',
      en: 'No. All listings, company names, and figures inside the live demo environments (`aqar-demo.novixa.dev`, `aqar-demo2.novixa.dev` and the branded showcase presets) are illustrative sample data created strictly to demonstrate product workflows and visual customization.',
    },
  },
  {
    id: 'tech_stack_and_ownership',
    category: 'technical',
    question: {
      ar: 'ما هي التقنيات المبني عليها النظام وأين يتم استضافته',
      en: 'What technology stack powers Novixa Aqar, and where can it be hosted',
    },
    answer: {
      ar: 'بُني النظام باستخدام إطار العمل الحديث Laravel 13 مع لوحات تشغيل Filament 5 وواجهة Tailwind CSS، مما يضمن سرعة عالية وأماناً وقابلية ممتازة للتوسع والصيانة. يمكن استضافته على أي خادم سحابي قياسي يدعم PHP وقاعدة بيانات MySQL/PostgreSQL تحت تحكم شركتك.',
      en: 'Novixa Aqar is built on modern Laravel 13 and Filament 5 with Tailwind CSS, ensuring strong security, maintainability, and fast server-rendered performance. It can be deployed on any standard Linux cloud server or VPS running PHP and MySQL/PostgreSQL under your control.',
    },
  },
];

export const FORM_SECTION_CONTENT = {
  badge: {
    ar: 'ابدأ خطوة التحول الرقمي لمكتبك العقاري',
    en: 'Start Your Real-Estate Platform Setup',
  },
  headline: {
    ar: 'اطلب عرضاً مخصصاً وتحديد نطاق لنسختك من نوڤيكسا عقار',
    en: 'Request a Tailored Demo & Scope Proposal for Your Company',
  },
  subheadline: {
    ar: 'شاركنا نبذة عن نشاطك العقاري، وسيتواصل معك فريق نوڤيكسا لاستعراض النظام وتحديد التجهيز الأنسب لشركتك وميزانيتك.',
    en: 'Tell us briefly about your real-estate business. Our team will walk you through the platform and outline the exact setup and pricing for your workflow.',
  },
  directChannelsTitle: {
    ar: 'أو تواصل معنا مباشرة واستكشف النسخة الحية الآن',
    en: 'Or explore the live demo and reach us directly',
  },
};
