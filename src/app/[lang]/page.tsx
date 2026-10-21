import React from 'react';
import { Metadata } from 'next';
import {
  constructMetadata,
  generateAqarSoftwareJsonLd,
  generateFaqJsonLd,
  generateOrganizationJsonLd,
  generateWebSiteJsonLd,
} from '@/lib/metadata';
import { FAQ_ITEMS } from '@/content/aqar-content';
import { AqarHero } from '@/components/landing/AqarHero';
import { MenassatServicesGrid } from '@/components/landing/MenassatServicesGrid';
import { MenassatPropertiesShowcase } from '@/components/landing/MenassatPropertiesShowcase';
import { MenassatPromoBanner } from '@/components/landing/MenassatPromoBanner';
import { MenassatDistrictsShowcase } from '@/components/landing/MenassatDistrictsShowcase';
import { MenassatAuctionsShowcase } from '@/components/landing/MenassatAuctionsShowcase';
import { MenassatStatsWhyUs } from '@/components/landing/MenassatStatsWhyUs';
import { BusinessAudienceSection } from '@/components/landing/BusinessAudienceSection';
import { WorkflowProblemSection } from '@/components/landing/WorkflowProblemSection';
import { CapabilityGroupsSection } from '@/components/landing/CapabilityGroupsSection';
import { ProductWalkthroughSection } from '@/components/landing/ProductWalkthroughSection';
import { RoleMatrixSection } from '@/components/landing/RoleMatrixSection';
import { CustomizationSection } from '@/components/landing/CustomizationSection';
import { PricingScopeSection } from '@/components/landing/PricingScopeSection';
import { DeliveryProcessSection } from '@/components/landing/DeliveryProcessSection';
import { FaqSection } from '@/components/landing/FaqSection';
import { DemoRequestForm } from '@/components/landing/DemoRequestForm';
import { MenassatCorporateConcierge } from '@/components/landing/MenassatCorporateConcierge';
import { Language } from '@/types';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang: rawLang } = await params;
  const lang: Language = rawLang === 'en' ? 'en' : 'ar';

  if (lang === 'ar') {
    return constructMetadata({
      lang: 'ar',
      title: 'نوفكسا عقار | منصة عقارية متكاملة بهوية شركتك تبدأ من 500$',
      description:
        'منصة عقارية متكاملة للمكاتب والشركات العقارية وشركات إدارة الأملاك: بوابة عامة + بحث وفلترة + 8 لوحات تشغيل حسب الدور + مسارات الاستقبال والموافقات — يبدأ تجهيزها من 500$.',
      path: '',
    });
  }

  return constructMetadata({
    lang: 'en',
    title: 'Novixa Aqar | White-Label Real-Estate Platform Starting at $500',
      description:
        'Configurable B2B PropTech platform for real-estate agencies and property managers: branded public portal + search and filters + 8 role-based workspaces + intake and approval flows — setup from $500.',
    path: '',
  });
}

export default async function LocalizedLandingPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang: Language = rawLang === 'en' ? 'en' : 'ar';

  const orgJsonLd = generateOrganizationJsonLd(lang);
  const siteJsonLd = generateWebSiteJsonLd(lang);
  const softwareJsonLd = generateAqarSoftwareJsonLd(lang);
  const faqJsonLd = generateFaqJsonLd(
    FAQ_ITEMS.map((item) => ({
      question: lang === 'ar' ? item.question.ar : item.question.en,
      answer: lang === 'ar' ? item.answer.ar : item.answer.en,
    }))
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero Section with Server-rendered H1 & Background Slider */}
      <AqarHero lang={lang} />

      {/* Menassat Feature Boxes: ماذا تجد في منصات العقارية */}
      <div className="defer-offscreen">
        <MenassatServicesGrid lang={lang} />
      </div>

      {/* Menassat Latest Properties Showcase with Riyal Currency */}
      <div className="defer-offscreen">
        <MenassatPropertiesShowcase lang={lang} />
      </div>

      {/* Menassat Dark Teal Promo Banner */}
      <div className="defer-offscreen">
        <MenassatPromoBanner lang={lang} />
      </div>

      {/* Menassat Kingdom Regions Showcase */}
      <div className="defer-offscreen">
        <MenassatDistrictsShowcase lang={lang} />
      </div>

      {/* Menassat Stats & Why Us / About Us Tabs */}
      <div className="defer-offscreen">
        <MenassatStatsWhyUs lang={lang} />
      </div>

      {/* Core Business Audiences Section */}
      <div className="defer-offscreen">
        <BusinessAudienceSection lang={lang} />
      </div>

      {/* Menassat Real Estate Auctions Showcase with Live Countdown */}
      <div className="defer-offscreen">
        <MenassatAuctionsShowcase lang={lang} />
      </div>

      {/* Core Workflow & Problem Outcomes */}
      <div className="defer-offscreen">
        <WorkflowProblemSection lang={lang} />
      </div>

      {/* Core 4 Capability Groups */}
      <div className="defer-offscreen">
        <CapabilityGroupsSection lang={lang} />
      </div>

      {/* Role Matrix: 8 Verified Filament Panels */}
      <div className="defer-offscreen">
        <RoleMatrixSection lang={lang} />
      </div>

      {/* Product Walkthrough 4 Steps */}
      <div className="defer-offscreen">
        <ProductWalkthroughSection lang={lang} />
      </div>

      {/* Customization Pillars & 3 Live Branded Demos */}
      <div className="defer-offscreen">
        <CustomizationSection lang={lang} />
      </div>

      {/* Pricing & Scope: Starting at $500 with Clear Exclusions */}
      <div className="defer-offscreen">
        <PricingScopeSection lang={lang} />
      </div>

      {/* 5-Step Delivery Process */}
      <div className="defer-offscreen">
        <DeliveryProcessSection lang={lang} />
      </div>

      {/* FAQ Section */}
      <div className="defer-offscreen">
        <FaqSection lang={lang} />
      </div>

      {/* Demo Request & Custom Setup Form */}
      <div className="defer-offscreen">
        <DemoRequestForm />
      </div>

      {/* Floating Corporate Consultation & Back To Top Desk */}
      <MenassatCorporateConcierge />
    </>
  );
}
