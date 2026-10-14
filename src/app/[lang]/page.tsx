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
import { MenassatHeadOfficeContact } from '@/components/landing/MenassatHeadOfficeContact';
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
      title: 'نوفكسا عقار | منصة عقارية متكاملة على طراز منصات العقارية تبدأ من 500$',
      description:
        'منصة عقارية متكاملة للمكاتب والشركات العقارية وإدارة الأملاك والمزادات: بوابة عامة + محرك بحث وفلترة + 8 لوحات تشغيل حسب الدور — يبدأ من 500$.',
      path: '',
    });
  }

  return constructMetadata({
    lang: 'en',
    title: 'Novixa Aqar | Menassat-Style Configurable Real-Estate Platform Starting at $500',
    description:
      'Comprehensive PropTech platform for real-estate agencies, auctions, and property managers: public portal + 8 role workspaces + search engine — starting at $500.',
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

      {/* Hero Section with Integrated Menassat Real Estate Search Bar & Product Preview */}
      <AqarHero />

      {/* Menassat Feature Boxes: ماذا تجد في منصات العقارية؟ */}
      <div className="defer-offscreen">
        <MenassatServicesGrid />
      </div>

      {/* Menassat Latest Properties Showcase with Riyal Currency */}
      <div className="defer-offscreen">
        <MenassatPropertiesShowcase />
      </div>

      {/* Menassat Dark Teal Promo Banner */}
      <div className="defer-offscreen">
        <MenassatPromoBanner />
      </div>

      {/* Menassat Kingdom Regions Showcase */}
      <div className="defer-offscreen">
        <MenassatDistrictsShowcase />
      </div>

      {/* Menassat Stats & Why Us / About Us Tabs */}
      <div className="defer-offscreen">
        <MenassatStatsWhyUs />
      </div>

      {/* Core Business Audiences Section (Preserved 100%) */}
      <div className="defer-offscreen">
        <BusinessAudienceSection />
      </div>

      {/* Menassat Real Estate Auctions Showcase with Live Countdown */}
      <div className="defer-offscreen">
        <MenassatAuctionsShowcase />
      </div>

      {/* Core Workflow & Problem Outcomes (Preserved 100%) */}
      <div className="defer-offscreen">
        <WorkflowProblemSection />
      </div>

      {/* Core 4 Capability Groups (Preserved 100%) */}
      <div className="defer-offscreen">
        <CapabilityGroupsSection />
      </div>

      {/* Role Matrix: 8 Verified Filament Panels (Preserved 100%) */}
      <div className="defer-offscreen">
        <RoleMatrixSection />
      </div>

      {/* Product Walkthrough 4 Steps (Preserved 100%) */}
      <div className="defer-offscreen">
        <ProductWalkthroughSection />
      </div>

      {/* Customization Pillars & 3 Live Branded Demos (Preserved 100%) */}
      <div className="defer-offscreen">
        <CustomizationSection />
      </div>

      {/* Pricing & Scope: Starting at $500 with Clear Exclusions (Preserved 100%) */}
      <div className="defer-offscreen">
        <PricingScopeSection />
      </div>

      {/* 5-Step Delivery Process (Preserved 100%) */}
      <div className="defer-offscreen">
        <DeliveryProcessSection />
      </div>

      {/* FAQ Section (Preserved 100%) */}
      <div className="defer-offscreen">
        <FaqSection />
      </div>

      {/* Menassat Head Office, Location & Working Hours Section */}
      <div className="defer-offscreen">
        <MenassatHeadOfficeContact />
      </div>

      {/* Demo Request & Custom Setup Form (Preserved 100%) */}
      <div className="defer-offscreen">
        <DemoRequestForm />
      </div>

      {/* Floating Corporate Consultation & Back To Top Desk */}
      <MenassatCorporateConcierge />
    </>
  );
}
