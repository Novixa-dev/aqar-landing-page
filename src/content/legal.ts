import { LocalizedText } from '@/types';

export interface LegalPageContent {
  slug: 'privacy' | 'terms';
  title: LocalizedText;
  subtitle: LocalizedText;
  lastUpdated: string;
  sections: Array<{
    heading: LocalizedText;
    paragraphs: {
      ar: string[];
      en: string[];
    };
  }>;
}

export const LEGAL_PAGES: Record<'privacy' | 'terms', LegalPageContent> = {
  privacy: {
    slug: 'privacy',
    title: {
      ar: 'سياسة الخصوصية وحماية البيانات — نوفكسا عقار',
      en: 'Privacy Policy & Data Protection — Novixa Aqar',
    },
    subtitle: {
      ar: 'كيف نتعامل مع البيانات التي تشاركها معنا عند طلب عرض تجريبي أو عرض سعر لنظام نوفكسا عقار.',
      en: 'How we handle information submitted when requesting a demo or scope proposal for Novixa Aqar.',
    },
    lastUpdated: '2026-04-01',
    sections: [
      {
        heading: {
          ar: '1. البيانات التي نجمعها',
          en: '1. Information We Collect',
        },
        paragraphs: {
          ar: [
            'عند تعبئة نموذج طلب العرض التوضيحي أو تحديد النطاق في صفحة نوفكسا عقار، نجمع البيانات التجارية الأساسية التي تزودنا بها طوعاً: الاسم، اسم المكتب أو الشركة العقارية، نوع النشاط، وسيلة التواصل المفضلة (البريد الإلكتروني أو الهاتف/واتساب)، المدينة/الدولة، والملاحظات المتعلقة بنطاق مشروعك.',
            'نجمع أيضاً بيانات تقنية غير شخصية لأغراض الأمان ومنع الرسائل المزعجة (مثل حماية معدل الإرسال Rate Limiting) دون بيع أو مشاركة بياناتك الشخصية مع أي أطراف إعلانية.',
          ],
          en: [
            'When you submit the demo and scope request form on the Novixa Aqar landing page, we collect the business contact information you voluntarily provide: your name, company/agency name, business type, preferred contact channel (email or phone/WhatsApp), city/country, and project scope notes.',
            'We also process basic non-personal technical metadata strictly for security and spam prevention (such as rate limiting). We never sell or rent your contact details to third-party advertisers.',
          ],
        },
      },
      {
        heading: {
          ar: '2. كيف نستخدم بياناتك',
          en: '2. How We Use Your Information',
        },
        paragraphs: {
          ar: [
            'تُستخدم بيانات طلبك حصرياً للتواصل معك بشأن نظام نوفكسا عقار، ترتيب جولة تعريفية على النسخة التجريبية، وإعداد عرض فني ومالي يناسب احتياجات شركتك العقارية.',
            'لا نرسل رسائل تسويقية عشوائية، ويمكنك في أي وقت طلب حذف بيانات التواصل الخاصة بك عبر مراسلتنا على البريد الرسمي.',
          ],
          en: [
            'Your submitted information is used exclusively to respond to your inquiry about Novixa Aqar, schedule a product walkthrough, and prepare a tailored technical and commercial scope proposal for your real-estate business.',
            'We do not send unsolicited bulk spam, and you may request deletion of your inquiry record at any time by contacting our official email.',
          ],
        },
      },
      {
        heading: {
          ar: '3. خصوصية بيانات النسخ التجريبية (Live Demos)',
          en: '3. Live Demo Environment Notice',
        },
        paragraphs: {
          ar: [
            'روابط النسخ التجريبية الحية المعروضة في هذه الصفحة هي بيئات استعراض عامة. يرجى عدم إدخال أي بيانات شخصية حساسة أو وثائق عقود حقيقية داخل نماذج النسخة التجريبية العامة.',
            'عند إطلاق نسختك المستقلة الخاصة بشركتك، تكون قاعدة البيانات والملفات معزولة بالكامل ومملوكة لشركتك.',
          ],
          en: [
            'The interactive live demo links featured on this site are public sandbox environments. Please do not enter sensitive personal data or confidential real-world contracts into public demo forms.',
            'When your company deploys its own dedicated instance of Novixa Aqar, your database and documents are completely isolated under your organization’s control.',
          ],
        },
      },
    ],
  },
  terms: {
    slug: 'terms',
    title: {
      ar: 'شروط الاستخدام وتوضيح النطاق التجاري — نوفكسا عقار',
      en: 'Terms of Use & Commercial Scope Disclosure — Novixa Aqar',
    },
    subtitle: {
      ar: 'الأحكام المنظمة لاستخدام هذه الصفحة والنسخ التجريبية وحدود التسعير الأساسي لنظام نوفكسا عقار.',
      en: 'Terms governing the use of this marketing site, live demo environments, and baseline software scope.',
    },
    lastUpdated: '2026-04-01',
    sections: [
      {
        heading: {
          ar: '1. طبيعة الخدمة والمنتج',
          en: '1. Nature of the Software Product',
        },
        paragraphs: {
          ar: [
            'نوفكسا عقار (Novixa Aqar) هو نظام برمجي لإدارة وتسويق العقارات موجه للشركات والمكاتب العقارية (B2B)، من تطوير فريق نوفكسا (Novixa).',
            'تهدف هذه الصفحة إلى التعريف بقدرات النظام الأساسية وإتاحة طلب نسخة مخصصة للشركات، ولا تُعد هذه الصفحة بوابة وساطة عقارية مباشرة لبيع أو تأجير عقارات فعلية.',
          ],
          en: [
            'Novixa Aqar is a configurable B2B real-estate management and property portal software platform developed by Novixa.',
            'This landing page presents the capabilities of the software for prospective business buyers and does not itself act as a real-estate brokerage selling or leasing physical property.',
          ],
        },
      },
      {
        heading: {
          ar: '2. التسعير الأساسي وحدود النطاق (ابتداءً من 500$)',
          en: '2. Baseline Pricing & Scope Exclusions (Starting at $500)',
        },
        paragraphs: {
          ar: [
            'السعر المعلن (ابتداءً من 500 دولار أمريكي) يمثل تكلفة تجهيز النسخة الأساسية من البرمجية وتخصيص الهوية البصرية وإعدادات السوق القياسية كما هو موضح في قسم التسعير.',
            'لا يشمل السعر الأساسي تكاليف الاستضافة السحابية، الخوادم (Servers/VPS)، حجز النطاق (Domain)، أو اشتراكات الخدمات الخارجية المدفوعة (مثل بوابات الرسائل القصيرة SMS، أو WhatsApp API، أو بوابات الدفع). كما أن التعديلات البرمجية المخصصة خارج النطاق الأساسي تُسعّر باتفاق مستقل ومكتوب قبل البدء بالتنفيذ.',
          ],
          en: [
            'The advertised starting price ($500 USD) covers baseline software setup, brand customization, and standard market configuration as detailed in the Pricing & Scope section.',
            'This baseline software price explicitly excludes cloud hosting, servers/VPS, domain registration, and paid third-party service subscriptions (such as SMS gateways, WhatsApp APIs, or payment processor fees). Custom engineering workflows outside the baseline are scoped and quoted in a separate written agreement prior to execution.',
          ],
        },
      },
      {
        heading: {
          ar: '3. إخلاء مسؤولية بيانات النسخ التجريبية',
          en: '3. Demo Data & Showcase Disclaimer',
        },
        paragraphs: {
          ar: [
            'جميع الأسماء التجارية، الشعارات، العقارات، الأسعار، والأرقام المعروضة داخل روابط النسخ التجريبية (`aqar-demo.novixa.dev` و`aqar-demo2.novixa.dev` و`aqar-demo.dexal.net`) هي بيانات تجريبية افتراضية لأغراض العرض التوضيحي واستعراض قابلية التخصيص فقط.',
          ],
          en: [
            'All brand names, logos, property listings, prices, and statistics displayed inside the live demo environments (`aqar-demo.novixa.dev`, `aqar-demo2.novixa.dev`, and `aqar-demo.dexal.net`) are illustrative sample presets created strictly to demonstrate software capabilities and theme customization.',
          ],
        },
      },
    ],
  },
};
