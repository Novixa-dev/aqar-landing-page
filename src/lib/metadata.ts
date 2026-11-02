import { Metadata } from 'next';
import { Language } from '@/types';
import { getSiteUrl } from '@/lib/site';

interface MetadataProps {
  title: string;
  description: string;
  lang: Language;
  path?: string;
  image?: string;
  type?: 'website' | 'article';
  noIndex?: boolean;
}

export function buildOgImageUrl(params: {
  title: string;
  subtitle?: string;
  lang: Language;
  tag?: string;
}): string {
  const baseUrl = getSiteUrl();
  const search = new URLSearchParams({
    title: params.title,
    lang: params.lang,
  });
  if (params.subtitle) search.set('subtitle', params.subtitle);
  if (params.tag) search.set('tag', params.tag);
  return `${baseUrl}/og?${search.toString()}`;
}

export function constructMetadata({
  title,
  description,
  lang,
  path = '',
  image,
  type = 'website',
  noIndex = false,
}: MetadataProps): Metadata {
  const isAr = lang === 'ar';
  const siteName = isAr ? 'نوڤيكسا عقار | Novixa Aqar' : 'Novixa Aqar | نوڤيكسا عقار';
  const fullTitle = title.includes('نوڤيكسا') || title.includes('Novixa') || title.includes('نوڤيكسا') ? title : `${title} | ${siteName}`;
  const baseUrl = getSiteUrl();
  const cleanPath = path.startsWith('/') ? path : path ? `/${path}` : '';
  const url = `${baseUrl}/${lang}${cleanPath}`;
  const ogImage =
    image ??
    buildOgImageUrl({
      title,
      subtitle: description,
      lang,
      tag: isAr ? 'نظام عقاري قابل للتخصيص' : 'Configurable Real-Estate Platform',
    });

  const keywords = isAr
    ? [
        'نوڤيكسا عقار',
        'منصة عقارية متكاملة',
        'نظام عقاري',
        'برنامج إدارة أملاك',
        'وساطة عقارية',
        'تسويق عقاري',
        'فلترة وبحث عقاري',
        'نظام وساطة وإيجار',
        'السعودية',
        'الرياض',
      ]
    : [
        'Novixa Aqar',
        'Real Estate Platform',
        'PropTech Software',
        'Property Management System',
        'Brokerage CRM',
        'Saudi Arabia Real Estate',
        'Rental and Leasing Management',
      ];

  return {
    // `absolute` because fullTitle already carries the brand; letting the root
    // layout template append "| Novixa Aqar" again doubled it in every tab.
    title: { absolute: fullTitle },
    description,
    keywords,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: url,
      languages: {
        ar: `${baseUrl}/ar${cleanPath}`,
        en: `${baseUrl}/en${cleanPath}`,
        'x-default': `${baseUrl}/ar${cleanPath}`,
      },
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          type: 'image/png',
          alt: title,
        },
        {
          url: `${baseUrl}/images/aqar-portal-screenshot.png`,
          width: 1280,
          height: 800,
          type: 'image/png',
          alt: isAr
            ? 'لقطة شاشة حقيقية لبوابة نوڤيكسا عقار'
            : 'Authentic screenshot of Novixa Aqar portal',
        },
      ],
      locale: isAr ? 'ar_SA' : 'en_US',
      alternateLocale: isAr ? ['en_US'] : ['ar_SA'],
      type,
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage],
      creator: '@novixa',
      site: '@novixa',
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export function generateOrganizationJsonLd(lang: Language) {
  const baseUrl = getSiteUrl();
  const isAr = lang === 'ar';

  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${baseUrl}/#organization`,
    name: isAr ? 'نوڤيكسا (Novixa)' : 'Novixa',
    alternateName: isAr ? 'Novixa' : 'نوڤيكسا',
    url: baseUrl,
    logo: {
      '@type': 'ImageObject',
      url: `${baseUrl}/icon.svg`,
    },
    description: isAr
      ? 'فريق هندسة برمجيات يبني أنظمة ومنصات رقمية قابلة للتخصيص للشركات العقارية والتجارية.'
      : 'Software engineering studio building configurable digital platforms and operational systems for real-estate and commercial businesses.',
    knowsLanguage: ['ar', 'en'],
  };
}

export function generateWebSiteJsonLd(lang: Language) {
  const baseUrl = getSiteUrl();
  const isAr = lang === 'ar';

  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${baseUrl}/${lang}#website`,
    url: `${baseUrl}/${lang}`,
    name: isAr ? 'نوڤيكسا عقار | Novixa Aqar' : 'Novixa Aqar | Configurable Real-Estate Software',
    inLanguage: isAr ? 'ar' : 'en',
    publisher: {
      '@id': `${baseUrl}/#organization`,
    },
  };
}

export function generateAqarSoftwareJsonLd(lang: Language) {
  const baseUrl = getSiteUrl();
  const isAr = lang === 'ar';

  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    '@id': `${baseUrl}/${lang}#software`,
    name: isAr ? 'نوڤيكسا عقار (Novixa Aqar)' : 'Novixa Aqar',
    applicationCategory: 'BusinessApplication',
    applicationSubCategory: 'Real Estate Management & Portal Software',
    operatingSystem: 'Web, Cloud, Self-Hosted Linux',
    inLanguage: ['ar', 'en'],
    url: `${baseUrl}/${lang}`,
    image: `${baseUrl}/images/aqar-portal-screenshot.png`,
    description: isAr
      ? 'منصة عقارية متكاملة تجمع البوابة العامة ولوحات التشغيل متعددة الأدوار للمكاتب العقارية وشركات الوساطة وإدارة الأملاك مع تخصيص الهوية وسير العمل.'
      : 'End-to-end B2B real-estate software combining a public property portal with multi-role operational workspaces for agencies, brokerages, and property managers.',
    featureList: isAr
      ? [
          'بوابة عقارية عامة للبحث والفلترة والمقارنة والمفضلة',
          'إيداع العقارات من الملاك واستقبال طلبات الباحثين عن عقار',
          'حجز المعاينات مع تصدير ملفات التقويم ICS',
          '8 لوحات تشغيل مستقلة حسب الدور (الإدارة، الموظفون، الوكلاء، الملاك، المستأجرون، المشترون، البائعون، المقاولون)',
          'إدارة طلبات الإيجار وعقود الإيجار والمدفوعات وطلبات الصيانة',
          'واجهة عربية وإنجليزية كاملة (RTL/LTR) مع الوضع الداكن',
        ]
      : [
          'Public real-estate portal with search, filtering, comparison, and wishlist',
          'Owner property submission and buyer property request intake',
          'Property viewing booking workflow with ICS calendar export',
          '8 role-based operational workspaces (Admin, Staff, Agent, Landlord, Tenant, Buyer, Seller, Contractor)',
          'Rental applications, lease tracking, payment records, and maintenance workflows',
          'Full Arabic/English (RTL/LTR) support and dark mode',
        ],
    offers: {
      '@type': 'Offer',
      price: '500',
      priceCurrency: 'USD',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '500',
        priceCurrency: 'USD',
        description: isAr
          ? 'يبدأ سعر الإطلاق الأساسي من 500 دولار أمريكي حسب نطاق التخصيص؛ ولا يشمل الاستضافة أو الخوادم أو النطاق أو الاشتراكات الخارجية المدفوعة.'
          : 'Baseline setup starts at $500 USD depending on scope; excludes hosting, servers, domain registration, and paid third-party subscriptions.',
      },
      url: `${baseUrl}/${lang}#demo-form`,
    },
    provider: {
      '@id': `${baseUrl}/#organization`,
    },
  };
}

export function generateFaqJsonLd(
  faqs: Array<{ question: string; answer: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function generateBreadcrumbJsonLd(items: { name: string; url: string }[]) {
  const baseUrl = getSiteUrl();
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${baseUrl}${item.url}`,
    })),
  };
}
