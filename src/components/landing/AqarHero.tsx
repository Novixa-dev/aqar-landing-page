import React from 'react';
import {
  ArrowUpLeft,
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  ExternalLink,
  Globe,
  Layers,
  ShieldCheck,
  Sliders,
} from 'lucide-react';
import { getDictionary } from '@/lib/i18n';
import { HERO_CONTENT } from '@/content/aqar-content';
import { EXTERNAL_ROUTES } from '@/lib/site';
import { TrackedLink } from '@/components/common/TrackedLink';
import { HeroBackgroundSlider, HeroBackgroundSlide } from './HeroBackgroundSlider';
import { AqarProductPreview } from './AqarProductPreview';
import { Language } from '@/types';

const HERO_BACKGROUND_SLIDES: HeroBackgroundSlide[] = [
  {
    id: 'hittin-villa',
    name: { ar: 'فلل حطين المودرن الفاخرة', en: 'Modern Hittin Luxury Villas' },
    location: { ar: 'شمال الرياض • حي حطين', en: 'North Riyadh • Hittin' },
    badge: { ar: 'إدارة أملاك سكنية • موثق فال', en: 'Residential Asset Management • Fal Verified' },
    scopeTag: { ar: 'إدارة محافظ سكنية فاخرة', en: 'Luxury Portfolio Governance' },
    imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2400&q=90',
  },
  {
    id: 'king-fahd-towers',
    name: { ar: 'أبراج طريق الملك فهد والعليا المالية', en: 'King Fahd Rd & Olaya Financial Towers' },
    location: { ar: 'الرياض • طريق الملك فهد', en: 'Riyadh • King Fahd Rd' },
    badge: { ar: 'أبراج ومراكز أعمال • أصول تجارية', en: 'Commercial Business Towers • Prime Asset' },
    scopeTag: { ar: 'إدارة مرافق وأبراج تجارية', en: 'Commercial Tower Operations' },
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2400&q=90',
  },
  {
    id: 'narjis-compound',
    name: { ar: 'مجمعات النرجس والسليمانية السكنية', en: 'Al-Narjis & Sulaymaniyah Communities' },
    location: { ar: 'شمال الرياض • حي النرجس', en: 'North Riyadh • Al-Narjis' },
    badge: { ar: 'كمباوند مغلق • كود البناء السعودي', en: 'Gated Compound • SBC Standard' },
    scopeTag: { ar: 'حوكمة مجتمعات سكنية متكاملة', en: 'Gated Community Governance' },
    imageUrl: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=2400&q=90',
  },
  {
    id: 'malqa-penthouse',
    name: { ar: 'بنتهاوس وشقق الملقا ديلوكس', en: 'Al-Malqa Deluxe Penthouse & Suites' },
    location: { ar: 'شمال الرياض • حي الملقا', en: 'North Riyadh • Al-Malqa' },
    badge: { ar: 'عقود موحدة • إفراغ فوري معتمد', en: 'Standard Leases • Immediate Deed' },
    scopeTag: { ar: 'وساطة وتسويق حصري برخص فال', en: 'Exclusive Regulated Mandate' },
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=90',
  },
  {
    id: 'east-durra',
    name: { ar: 'قصور ومخططات درة الشرقية وسرايا القصيم', en: 'Eastern Durra & Qassim Palaces & Land' },
    location: { ar: 'المنطقة الشرقية • الخبر والقصيم', en: 'Eastern Province & Qassim' },
    badge: { ar: 'مزادات علنية وتطوير عمراني', en: 'Regulated Auctions & Masterplans' },
    scopeTag: { ar: 'تنظيم مزادات عقارية كبرى', en: 'Major Real Estate Auctions' },
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2400&q=90',
  },
];

const GUARANTEE_ICONS = [ShieldCheck, Layers, Globe, Sliders];

const GUARANTEE_BADGES = [
  { ar: 'شفافية التكاليف 100%', en: '100% Cost Transparency' },
  { ar: '8 لوحات مستقلة', en: '8 Independent Panels' },
  { ar: 'ثنائي اللغة (RTL/LTR)', en: 'Bilingual Native (RTL/LTR)' },
  { ar: 'تخصيص ومرونة', en: 'Fully Configurable' },
];

const GUARANTEE_TITLES = [
  { ar: 'إطلاق أساسي يبدأ من 500$', en: 'Baseline Setup from $500' },
  { ar: 'بوابة عامة وحوكمة متعددة الأدوار', en: 'Public Portal & Multi-Role Governance' },
  { ar: 'عربي وإنجليزي أصيل + الوضع الداكن', en: 'Native Arabic & English + Dark Mode' },
  { ar: 'تخصيص الهوية والعملات وسير العمل', en: 'Brand, Currencies & Workflow Setup' },
];

export function AqarHero({ lang = 'ar' }: { lang?: Language }) {
  const { t, pick, isRtl } = getDictionary(lang);
  const ArrowIcon = isRtl ? ArrowUpLeft : ArrowUpRight;

  return (
    <>
      {/* ============================================================== */}
      {/* 1. HERO PHOTO SECTION: PHOTO BACKGROUND COVERS THIS BLOCK ONLY */}
      {/* ============================================================== */}
      <section
        id="overview"
        aria-labelledby="hero-heading"
        className="relative overflow-hidden min-h-[calc(100vh-5rem)] min-h-[calc(100dvh-5rem)] flex flex-col justify-between pt-8 pb-4 sm:pt-14 sm:pb-6 border-b border-slate-200"
      >
        {/* Full-Bleed Real-Estate Background Photo Slideshow Island */}
        <HeroBackgroundSlider slides={HERO_BACKGROUND_SLIDES} lang={lang} />

        {/* Top Spacer for vertical balance */}
        <div className="hidden sm:block h-2" aria-hidden="true" />

        {/* Foreground Content: Focused on Headline, Subheadline & Primary CTAs */}
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10 my-auto w-full">
          <div className="mx-auto max-w-4xl text-center">
            {/* Main Headline */}
            <h1
              id="hero-heading"
              className="font-display text-3xl sm:text-5xl lg:text-5xl font-black tracking-tight text-white leading-[1.3] sm:leading-[1.25] drop-shadow-lg"
            >
              {pick(HERO_CONTENT.headline)}
            </h1>

            {/* Subheadline */}
            <p className="mx-auto mt-5 max-w-3xl text-base sm:text-lg lg:text-xl text-slate-100 leading-relaxed font-normal drop-shadow">
              {pick(HERO_CONTENT.subheadline)}
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <TrackedLink
                href="#demo-form"
                eventName="aqar_cta_click"
                eventParams={{
                  source: 'hero_primary',
                  target: 'demo_form',
                }}
                className="inline-flex min-h-12 w-full sm:w-auto items-center justify-center gap-2.5 rounded-full btn-menassat-teal px-8 py-3.5 text-base font-bold text-white shadow-2xl shadow-[#00b399]/50 hover:scale-105 transition-all"
              >
                <span>{pick(HERO_CONTENT.primaryCta)}</span>
                <ArrowIcon className="h-5 w-5" aria-hidden="true" />
              </TrackedLink>

              <TrackedLink
                href={EXTERNAL_ROUTES.primaryDemo}
                target="_blank"
                rel="noopener noreferrer"
                eventName="aqar_demo_click"
                eventParams={{
                  source: 'hero_secondary',
                  demo_id: 'primary_generic',
                }}
                className="inline-flex min-h-12 w-full sm:w-auto items-center justify-center gap-2.5 rounded-full border border-white/30 bg-black/40 backdrop-blur-md px-8 py-3.5 text-base font-bold text-white hover:bg-black/60 hover:border-[#00b399] hover:scale-105 transition-all shadow-lg"
              >
                <span>{pick(HERO_CONTENT.secondaryCta)}</span>
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </TrackedLink>
            </div>

            {/* Quick Jump to Showcase Examples */}
            <div className="mt-6 text-xs sm:text-sm text-slate-200 drop-shadow">
              <span>
                {t(
                  'تريد رؤية كيف يتغير الشكل حسب هوية كل شركة: ',
                  'Want to see how the interface adapts to different company brands: '
                )}
              </span>
              <a
                href="#customization"
                className="font-bold text-teal-300 underline underline-offset-4 hover:text-[#00b399]"
              >
                {t('شاهد أمثلة تخصيص الهوية الحية ↓', 'View live branded showcase examples ↓')}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Scroll Indicator - Anchoring the Full Viewport */}
        <div className="relative z-10 pt-4 pb-2 text-center">
          <a
            href="#platform-guarantees"
            aria-label={t('انتقل إلى تفاصيل المنظومة والضمانات', 'Scroll down to platform stack')}
            className="inline-flex flex-col items-center gap-1.5 text-white/80 hover:text-white transition-colors group cursor-pointer"
          >
            <span className="text-[11px] sm:text-xs font-semibold tracking-wider text-slate-200/90 group-hover:text-white drop-shadow">
              {t('استكشف تفاصيل المنظومة والضمانات', 'Explore Platform Stack & Guarantees')}
            </span>
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black/30 backdrop-blur-md border border-white/20 group-hover:border-[#00b399] group-hover:bg-[#00b399]/30 transition-all">
              <ChevronDown className="h-4 w-4 text-[#00b399] animate-bounce" />
            </div>
          </a>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. DEDICATED GUARANTEES & TRUST SECTION DIRECTLY UNDER HERO */}
      {/* ============================================================== */}
      <section
        id="platform-guarantees"
        aria-labelledby="guarantees-heading"
        className="py-14 sm:py-20 bg-white border-b border-slate-200 relative z-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Heading */}
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2
              id="guarantees-heading"
              className="font-display text-2xl sm:text-4xl lg:text-4xl font-black text-slate-900 leading-tight"
            >
              {t('بنية عقارية متكاملة تُسلّم جاهزة بهوية شركتك', 'Complete PropTech Stack Delivered Ready Under Your Brand')}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              {t(
                'أربعة معايير تشغيلية أساسية تضمن لشركتك انطلاقة سريعة، استقلالية كاملة للبيانات، ولوحات تحكم معزولة الصلاحيات لكل أطراف المنظومة.',
                'Four verified operational pillars ensuring rapid deployment, complete data privacy, and dedicated workspaces for all platform stakeholders.'
              )}
            </p>
          </div>

          {/* 4 Beautifully Organized Guarantee Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {HERO_CONTENT.trustPills.map((pill, idx) => {
              const IconComp = GUARANTEE_ICONS[idx] || CheckCircle2;
              const badge = GUARANTEE_BADGES[idx];
              const title = GUARANTEE_TITLES[idx];

              return (
                <div
                  key={idx}
                  className="rounded-3xl border border-slate-200 bg-[#f8fafc] p-6 flex flex-col justify-between hover:border-[#00b399] hover:bg-white hover:shadow-xl transition-all duration-300 group shadow-xs"
                >
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-5">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white border border-slate-200 text-[#008f7a] shadow-xs group-hover:border-[#00b399] group-hover:bg-[#00b399]/10 transition-colors">
                        <IconComp className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <span className="rounded-full bg-slate-200/60 px-3 py-1 text-[11px] font-bold text-slate-700">
                        {pick(badge)}
                      </span>
                    </div>

                    <h3 className="font-display text-base font-bold text-slate-900 group-hover:text-[#008f7a] transition-colors leading-snug">
                      {pick(title)}
                    </h3>

                    <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                      {pick(pill)}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-slate-200/70 flex items-center gap-2 text-xs font-bold text-[#008f7a]">
                    <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                    <span>{t('ضمان معتمد في النسخة', 'Verified Core Guarantee')}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 3. PRODUCT PREVIEW FRAME: ON CLEAN LIGHT BACKGROUND */}
      {/* ============================================================== */}
      <section className="py-12 sm:py-16 bg-[#f8fafc] border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AqarProductPreview />
        </div>
      </section>
    </>
  );
}
