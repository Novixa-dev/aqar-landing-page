import type { Dict } from './ar';

/**
 * English copy — the secondary language.
 *
 * Deliberately an *adaptation*, not a subtitle-style crib of the Arabic
 * (per `content/strategy/LANGUAGE_STRATEGY.md` in the product repo). Same
 * sourcing rule applies: nothing here is claimed that isn't "Available now"
 * in `content/research/FEATURE_REALITY_CLASSIFICATION.md`.
 */
export const en: Dict = {
  meta: {
    lang: 'en',
    dir: 'ltr',
    locale: 'en_US',
    title: 'Novixa Aqar | Bilingual Real Estate Management Platform',
    description:
      'A complete real-estate platform that puts your public listings site and your back office on one database: properties, owners, tenants, leases, maintenance and appointments — Arabic-first with full RTL support.',
    ogAlt: 'Screenshot of the Novixa Aqar platform interface',
  },

  nav: {
    items: [
      { label: 'Platform', href: '#platform' },
      { label: 'Features', href: '#features' },
      { label: 'Roles', href: '#roles' },
      { label: 'Readiness', href: '#status' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'FAQ', href: '#faq' },
    ],
    cta: 'Open the live demo',
    switchTo: 'العربية',
    switchHref: '/',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    skipToContent: 'Skip to content',
  },

  hero: {
    eyebrow: 'A ready-to-run real estate platform — by Novixa',
    title: 'Run your whole agency',
    titleAccent: 'from one system',
    lede: 'Properties, owners, tenants, agents, leases, maintenance and viewings — in one platform instead of WhatsApp threads, spreadsheets and paper. Arabic-first, a dashboard per role, and source code you own.',
    ctaPrimary: 'Open the live demo',
    ctaSecondary: 'Request a walkthrough',
    note: 'Browse it without signing up — or use the ready demo accounts to get inside the panels.',
    stats: [
      { value: '9', label: 'Role-specific dashboards' },
      { value: 'AR / EN', label: 'Bilingual with real RTL' },
      { value: 'MIT', label: 'Open licence — the code is yours' },
      { value: 'Docker', label: 'One command to run it on your server' },
    ],
  },

  problem: {
    eyebrow: 'The problem',
    title: 'Your agency’s information lives in ten places',
    lede: 'Most real-estate offices don’t have a shortage of work — they have a scattering of it. These are the recurring patterns of running an agency by hand, and each one maps to a specific part of the platform.',
    items: [
      { title: 'Listings live in WhatsApp threads', body: 'Photos, prices and specs spread across staff phones. Nobody is sure what’s still available and what already sold.' },
      { title: 'Clients live in notebooks and spreadsheets', body: 'Follow-up depends on who remembers. A lead not called back within two days walks into another office.' },
      { title: 'Contracts and documents are on paper', body: 'Leases, owner details and tenant records sit in folders and drawers, and finding one takes real time.' },
      { title: 'Maintenance has no trail', body: 'A tenant calls, the request is relayed verbally to a contractor, and nothing is written down.' },
      { title: 'Management has no full picture', body: 'How many units are available? How many active leads? Who is handling what? Answering means walking the office.' },
      { title: 'The public site is detached from operations', body: 'Listings posted to outside platforms never feed one system, so enquiries get lost between channels.' },
    ],
  },

  platform: {
    eyebrow: 'What Aqar is',
    title: 'Two front doors, one database',
    lede: 'A public site your clients visit, and an internal system your team works in — both reading and writing the same records, so nothing is duplicated or re-keyed.',
    publicSide: {
      title: 'The public site',
      subtitle: 'What your clients see',
      items: [
        'Search and filter by type, purpose, price, bedrooms and location',
        'Detail pages with photo galleries, pricing and neighbourhood context',
        'An interactive property map',
        'Book a viewing or request a valuation from the listing itself',
        '“Submit your property” and “Request a property” forms',
        'Market news, ownership guides, finance and fee calculators',
      ],
    },
    backOffice: {
      title: 'The back office',
      subtitle: 'What your team works in',
      items: [
        'Properties, units, status and availability',
        'Owners, landlords, buyers, sellers and tenants',
        'Lease agreements and their full lifecycle',
        'Maintenance requests, work orders and contractors',
        'Appointments, bookings and rental applications',
        'Per-role dashboards and reports, with fine-grained permissions',
      ],
    },
  },

  features: {
    eyebrow: 'Features',
    title: 'What you actually get today',
    lede: 'Every feature listed here has been exercised and verified in the current build — no roadmap items. What isn’t active is named explicitly in the readiness section below.',
    groups: [
      {
        title: 'Listings & presentation',
        items: [
          { title: 'Search and filters that work', body: 'Type, purpose (sale/rent), price range, bedrooms, bathrooms, location — and the results genuinely narrow.' },
          { title: 'Full detail pages', body: 'Photo gallery, multi-currency pricing (YER / SAR / USD), area and specs, amenities and services.' },
          { title: 'Interactive map', body: 'Listings plotted geographically on a Leaflet map with live detail.' },
          { title: 'Virtual tours and a 3D viewer', body: 'On properties configured for them, right inside the listing page.' },
          { title: 'Floor-plan editor', body: 'Upload a floor plan image and annotate rooms and points of interest on it.' },
          { title: 'Image and document upload', body: 'Chunked upload with real progress and instant preview — verified with an actual upload.' },
        ],
      },
      {
        title: 'Clients & operations',
        items: [
          { title: 'Viewings and appointments', body: 'A client books from the listing page and a real appointment record is created in the system.' },
          { title: 'Enquiry and contact forms', body: 'Contact, “submit your property” and “request a property” forms land straight in the system.' },
          { title: 'Leases and tenants', body: 'Tenants, landlords, lease agreements and rental applications tracked in one place.' },
          { title: 'Maintenance and work orders', body: 'A tenant’s request becomes a tracked record that reaches the landlord and the contractor.' },
          { title: 'Self-registration', body: 'A visitor creates an account and reaches their own dashboard with no manual step.' },
          { title: 'Wishlist and comparison', body: 'Save properties and compare them side by side.' },
        ],
      },
      {
        title: 'Analysis & content',
        items: [
          { title: 'Investment analytics', body: 'Predicted ROI, a risk score, cash-flow projection and market position — on the listing page itself.' },
          { title: 'Finance and fee calculators', body: 'A mortgage calculator and a registration/transfer fee estimator, in local figures.' },
          { title: 'Neighbourhood statistics', body: 'Population, average household income, nearby schools and amenities per listing.' },
          { title: 'Market news and reports', body: 'An Arabic content section for market reports and ownership guides.' },
          { title: 'Dashboards per role', body: 'Revenue, transactions, bookings, leases and maintenance requests — scoped to the user’s role.' },
          { title: 'Exportable reports', body: 'Custom reports with PDF and Excel export.' },
        ],
      },
    ],
  },

  roles: {
    eyebrow: 'Roles & permissions',
    title: 'Nine panels — each one sees only its own work',
    lede: 'Permissions are enforced by a real server-side role system (Spatie Permission + Filament Shield), not by hiding buttons in the UI. Cross-role access boundaries have been tested.',
    items: [
      { name: 'Administrator', desc: 'Full oversight across properties, users, branches and settings.' },
      { name: 'Staff', desc: 'Day-to-day management of properties, bookings and clients, without delete rights.' },
      { name: 'Agent', desc: 'Their own properties, appointments, bookings, leads and performance stats.' },
      { name: 'Buyer', desc: 'Browse properties, bookings, favourites and reviews.' },
      { name: 'Seller', desc: 'Manage their own listings and documents.' },
      { name: 'Landlord', desc: 'Properties, lease agreements, tenants and rental applications.' },
      { name: 'Tenant', desc: 'Their lease, maintenance requests and payments.' },
      { name: 'Contractor', desc: 'Maintenance requests assigned to them and the related documents.' },
      { name: 'General user panel', desc: 'The entry point for any new user who registers themselves.' },
    ],
  },

  analytics: {
    eyebrow: 'What sets it apart',
    title: 'It answers “is this actually a good buy?”',
    lede: 'Most property platforms show a list, some photos and a price. Aqar adds an analysis layer to the listing page itself — the same lane regional platforms have used successfully to differentiate.',
    points: [
      { title: 'Predicted return', body: 'An estimated return over a five-year horizon.' },
      { title: 'Risk score', body: 'A score out of 10 summarising the investment risk on that property.' },
      { title: 'Cash-flow projection', body: 'Estimated annual rent, expenses, net cash flow and cash-on-cash return.' },
      { title: 'Market position', body: 'How the price compares to the market average, with an explanation of the gap.' },
    ],
    caption: 'An actual screenshot from a listing page in the live demo — with demo data.',
  },

  bilingual: {
    eyebrow: 'Arabic-first',
    title: 'Not a translation bolted on afterwards',
    lede: 'Arabic is the platform’s default language and right-to-left is the native behaviour, not an exception. English is available with an instant switch.',
    points: [
      'A complete Arabic interface across the public site and all nine panels',
      'Instant AR/EN switching that remembers the visitor’s choice',
      'Native RTL layout: menus, forms, tables and charts',
      'Locale-appropriate numbers, currencies and dates',
      'Arabic typefaces chosen to stay readable on small screens',
    ],
    note: 'Technical note: property and news *content* is stored in whatever language it was authored in and is not machine-translated when the locale switches — the system interface itself is fully translated.',
  },

  tech: {
    eyebrow: 'Architecture',
    title: 'Built on a stack your developers already know',
    lede: 'No proprietary framework, no black box. Any Laravel developer can read the code, change it and run it.',
    stack: [
      { name: 'Laravel 13', note: 'Backend framework' },
      { name: 'PHP 8.4+', note: 'Runtime' },
      { name: 'Filament 5', note: 'Admin panels' },
      { name: 'Livewire 4', note: 'Interactive UI' },
      { name: 'Tailwind CSS 4', note: 'Public site styling' },
      { name: 'MySQL 8', note: 'Database' },
      { name: 'Spatie + Shield', note: 'Roles and permissions' },
      { name: 'Docker Compose', note: 'Run and deploy' },
    ],
    points: [
      { title: 'REST API', body: 'A documented API for integrating your other systems, or a mobile app later.' },
      { title: 'Module architecture', body: 'A plugin-style module system so capabilities can be added without touching the core.' },
      { title: 'Test coverage', body: 'An automated test suite that runs on every change, plus manual browser verification per role.' },
      { title: 'MIT licence', body: 'Commercial use, modification and redistribution — as long as the copyright notice stays.' },
    ],
  },

  status: {
    eyebrow: 'Transparency',
    title: 'What’s ready, and what isn’t',
    lede: 'We would rather you learn the limits before buying than after. This classification comes from a document inside the project repository that is kept in sync with each release.',
    ready: {
      title: 'Ready and verified',
      body: 'Features that have been run and checked in a real browser across every role — the ones listed in the features section above.',
    },
    partial: {
      title: 'Available, with a caveat',
      items: [
        'Walkability and transit scores: the feature works, but the numbers are generated internally, not sourced from an external data provider.',
        'Outbound email: works once a real mail provider is configured in your environment.',
        'Neighbourhood data: illustrative reference data for demonstration, not fact-checked against official sources.',
      ],
    },
    notActive: {
      title: 'Present in the code but not active',
      items: [
        'Syndication to international portals (Rightmove, Zoopla, OnTheMarket)',
        'Accounting integrations (Xero, Sage) and CRM sync',
        'E-signature (DocuSign) and tenant screening',
        'Social login via third-party accounts',
        'Real-time WebSocket broadcasting',
      ],
      note: 'These are wired in code with no keys or configuration. Activating any of them is possible within a customization scope; we do not count them as features of the current build.',
    },
    production: {
      title: 'Production readiness',
      body: 'The platform is ready to demo and evaluate today. Going live on a real domain requires a production-environment setup pass — security and HTTPS settings, a mail provider, queue and cache drivers, backups and monitoring. It ships as a documented checklist you can run yourself, or we run it as part of a deployment package.',
    },
  },

  pricing: {
    eyebrow: 'Getting the platform',
    title: 'A source-code licence — not a monthly subscription',
    lede: 'You get the full platform to run on your own server, under your company’s name and identity, with your data staying with you.',
    fromLabel: 'Starting from',
    perLabel: 'full licence',
    variesTitle: 'The final figure depends on:',
    variesBy: [
      'Market and country',
      'Company size and number of users',
      'Scope of customization required',
      'Whether you deploy it or we set it up for you',
      'Support and update package',
    ],
    includesTitle: 'The base licence includes:',
    includes: [
      'The complete platform source code',
      'Rebranding to your company name and logo',
      'A ready Arabic and English interface',
      'Nine roles and their dashboards',
      'Deployment guide and production checklist',
      'Docker setup for running it',
    ],
    addonsTitle: 'Optional add-ons:',
    addons: ['Workflow customization for your business', 'Deployment and setup on your server', 'Third-party integrations', 'Team training', 'Ongoing support and updates'],
    cta: 'Request a quote',
    ctaSecondary: 'Try it before you ask',
    note: 'The figure shown is a starting point for a base licence, not a fixed price for every case.',
  },

  demoAccess: {
    title: 'Demo accounts, ready to use',
    lede: 'Start on the public site, then sign in and see what the work looks like from inside the system.',
    passwordLabel: 'Password',
    openPanel: 'Open the panel',
    note: 'Demonstration accounts only, running on entirely fictional data.',
  },

  partners: {
    eyebrow: 'Marketing partners',
    title: 'Know agencies that need this system?',
    lede: 'We’re looking for marketing partners who introduce real-estate offices to the platform and stay with the client through the sale — while we handle the entire technical side.',
    steps: [
      { title: 'Introduce the platform', body: 'Send the demo link and explain what it solves.' },
      { title: 'Hand the client to us', body: 'We take the technical walkthrough, the questions, the customization and the pricing.' },
      { title: 'Earn your commission', body: 'Paid when the client you referred completes their purchase.' },
    ],
    commissionLabel: 'Referral commission',
    commissionNote: 'of the value of every client you refer who completes a purchase',
    audience: 'A fit for anyone with relationships among business owners, companies and real-estate offices who wants a second income from introducing technical solutions.',
    cta: 'Talk to us about partnering',
  },

  faq: {
    eyebrow: 'FAQ',
    title: 'The questions we actually get',
    items: [
      {
        q: 'Do I get the source code?',
        a: 'Yes. The model is a source-code licence, not a subscription. You receive the complete project to run on your own server, and the foundation is MIT-licensed, which permits commercial use and modification.',
      },
      {
        q: 'Where is it hosted and who owns the data?',
        a: 'On whatever server you choose — a VPS or cloud host. The database is yours and so is the data in it. Setup is via Docker Compose or a conventional install.',
      },
      {
        q: 'Can it run under my company’s name and branding?',
        a: 'Yes. Name, logo, colours and contact details are all replaceable. The demo you can browse runs under a fictional agency identity purely for demonstration.',
      },
      {
        q: 'Is it production-ready?',
        a: 'It is ready to demo and evaluate today, after real verification across every role. Running it on a live domain needs a documented production setup pass (security and HTTPS, mail, queues and cache, backups and monitoring). We do that as part of a deployment package, or your team does.',
      },
      {
        q: 'Which languages are supported?',
        a: 'Arabic (default, RTL) and English (LTR) across the public site and all panels. Property and news content is stored in the language it was written in and is not machine-translated.',
      },
      {
        q: 'Does it support multiple currencies?',
        a: 'Yes — Yemeni Rial, Saudi Riyal and US Dollar are configured and in use in the data. To be precise: these are configured display and pricing currencies, not a live foreign-exchange conversion engine.',
      },
      {
        q: 'How long does delivery take?',
        a: 'A base build under your branding is quick. The timeline depends on how much customization you need and how it’s deployed — you get a clear schedule after a requirements session.',
      },
      {
        q: 'Was this built from scratch?',
        a: 'No, and we say so plainly. Aqar is built on the open-source Liberu Real Estate project (MIT licence) and substantially redeveloped: full Arabic localization and RTL support, rebuilt roles and panels, removal of unrealistic features that were in the original, fixes and security review, plus data and workflows suited to the local market. The original copyright notice is kept in the licence file, as required.',
      },
      {
        q: 'What about support and updates?',
        a: 'An optional package, separate from the licence. The licence alone gives you a working build that you own; support and updates are a separate agreement based on what you need.',
      },
      {
        q: 'Can I try it before buying?',
        a: 'Yes — the demo is open to browse with no sign-up. To see the internal dashboards we give you access during a live walkthrough session.',
      },
    ],
  },

  finalCta: {
    title: 'See it before you ask the price',
    lede: 'The demo is running right now with a full dataset. Spend ten minutes in it — then talk to us about your build.',
    primary: 'Open the live demo',
    secondary: 'Message us on WhatsApp',
    tertiary: 'Email us',
    call: 'Call us',
    repo: 'Browse the repository on GitHub',
    whatsappMessage: 'Hello, I would like to know more about the Novixa Aqar platform and running it for our real-estate office.',
    partnerWhatsappMessage: 'Hello, I would like to ask about the Novixa Aqar marketing partner programme.',
    emailSubject: 'Enquiry about the Novixa Aqar platform',
    partnerEmailSubject: 'Enquiry about the marketing partner programme — Novixa Aqar',
    pending: 'This contact channel is still being set up — use the demo or repository link for now.',
  },

  footer: {
    tagline: 'A bilingual real-estate management platform, built for the Arab market.',
    productTitle: 'Product',
    companyTitle: 'Project',
    demoTitle: 'Try it',
    rights: 'All rights reserved.',
    license: 'The platform is MIT-licensed and built on the open-source Liberu Real Estate project.',
    vendorLink: 'Novixa website',
    demoDisclaimer:
      'The demo runs under a fictional agency identity with entirely fictional data — it does not represent real clients or real transactions.',
  },
};
