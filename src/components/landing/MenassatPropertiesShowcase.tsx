'use client';

import React from 'react';
import Image from 'next/image';
import {
  CheckCircle2,
  ExternalLink,
  Layers,
  MapPin,
  ShieldCheck,
  TrendingUp,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { EXTERNAL_ROUTES } from '@/lib/site';
import { trackEvent } from '@/lib/analytics';

interface ReferenceProject {
  id: string;
  title: { ar: string; en: string };
  category: { ar: string; en: string };
  location: { ar: string; en: string };
  managementScope: { ar: string; en: string };
  metrics: {
    unitsCount: string;
    area: string;
    occupancyOrValuation: string;
  };
  operationalHighlights: { ar: string; en: string }[];
  complianceBadge: { ar: string; en: string };
  imageUrl: string;
}

const REFERENCE_PROJECTS: ReferenceProject[] = [
  {
    id: 'ref-project-1',
    title: {
      ar: 'مجمع الصواري السكني الفاخر',
      en: 'Al-Sawari Luxury Residential Community',
    },
    category: { ar: 'إدارة أملاك سكنية', en: 'Residential Property Management' },
    location: {
      ar: 'المنطقة الشرقية، الخبر',
      en: 'Eastern Province, Khobar',
    },
    managementScope: {
      ar: 'إدارة عقود كاملة، تحصيل إيجارات، وصيانة دورية شاملة',
      en: 'Full lease management, automated rent collection, & facility upkeep',
    },
    metrics: {
      unitsCount: '24 وحدة',
      area: '4,800 م²',
      occupancyOrValuation: 'نسبة إشغال 96%',
    },
    operationalHighlights: [
      { ar: 'ربط مباشر مع شبكة إيجار', en: 'Direct Ejar network integration' },
      { ar: 'لوحة تحكم خاصة لمالك العقار', en: 'Dedicated landlord visibility panel' },
    ],
    complianceBadge: { ar: 'موثق فال • معتمد نظامياً', en: 'Fal Verified • Compliant' },
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'ref-project-2',
    title: {
      ar: 'أبراج النخبة للأعمال والمكاتب',
      en: 'Elite Corporate Towers Plaza',
    },
    category: { ar: 'إدارة أصول تجارية', en: 'Commercial Asset Management' },
    location: {
      ar: 'الرياض، طريق الملك فهد',
      en: 'Riyadh, King Fahd Rd',
    },
    managementScope: {
      ar: 'حوكمة مقرات الشركات، إدارة المرافق الذكية ومواقف السيارات',
      en: 'Corporate tenancy governance, smart facilities, & parking operations',
    },
    metrics: {
      unitsCount: '36 مكتباً',
      area: '12,500 م²',
      occupancyOrValuation: 'محفظة 48 مليون ر.س',
    },
    operationalHighlights: [
      { ar: 'إدارة ومتابعة عقود الشركات الكبرى', en: 'Enterprise tenant lease workflows' },
      { ar: 'جدولة الصيانة عبر لوحة المقاولين', en: 'Contractor dispatch maintenance' },
    ],
    complianceBadge: { ar: 'كود البناء السعودي • معتمد', en: 'Saudi Building Code Standard' },
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'ref-project-3',
    title: {
      ar: 'فلل سرايا الملقا المودرن',
      en: 'Saraya Al-Malqa Modern Estates',
    },
    category: { ar: 'وساطة وتسويق معتمد', en: 'Certified Brokerage & Marketing' },
    location: {
      ar: 'شمال الرياض، حي الملقا',
      en: 'North Riyadh, Al-Malqa',
    },
    managementScope: {
      ar: 'تسويق حصري برخص فال، فحص الجودة المعمارية، وإفراغ فوري',
      en: 'Fal exclusive mandate, architectural audit, and deed execution',
    },
    metrics: {
      unitsCount: '8 فلل VIP',
      area: '3,600 م²',
      occupancyOrValuation: 'تم البيع والإفراغ 100%',
    },
    operationalHighlights: [
      { ar: 'عقود وساطة حصرية موثقة إلكترونياً', en: 'Regulated electronic agency mandates' },
      { ar: 'توجيه طلبات المشترين لوكلاء محددين', en: 'Direct lead routing to vetted agents' },
    ],
    complianceBadge: { ar: 'رخصة فال للوساطة 1200021345', en: 'Fal Brokerage Lic 1200021345' },
    imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'ref-project-4',
    title: {
      ar: 'كمباوند النرجس السكني المغلق',
      en: 'Al-Narjis Gated Residential Community',
    },
    category: { ar: 'تشغيل مجمعات وصيانة', en: 'Compound & Community Operations' },
    location: {
      ar: 'شمال الرياض، حي النرجس',
      en: 'North Riyadh, Al-Narjis',
    },
    managementScope: {
      ar: 'تشغيل الحراسات والخدمات المشتركة، تحصيل الرسوم، وبوابة المستأجرين',
      en: 'Common facility services, dues collection, & tenant self-service portal',
    },
    metrics: {
      unitsCount: '64 تاون هاوس',
      area: '22,000 م²',
      occupancyOrValuation: 'عقود موحدة 100%',
    },
    operationalHighlights: [
      { ar: 'تذاكر صيانة آلية للمستأجرين والمقاولين', en: 'Automated tenant ticketing & dispatch' },
      { ar: 'تقارير مالية دورية للملاك', en: 'Comprehensive financial reporting' },
    ],
    complianceBadge: { ar: 'حوكمة مجتمعات سكنية معتمدة', en: 'Certified Community Governance' },
    imageUrl: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'ref-project-5',
    title: {
      ar: 'مخطط درة الشرق الاستثماري',
      en: 'Durra Al-Sharq Masterplan Plots',
    },
    category: { ar: 'مزادات ومخططات عمرانية', en: 'Auctions & Masterplan Plots' },
    location: {
      ar: 'المنطقة الشرقية، الخبر والدمام',
      en: 'Eastern Province, Khobar & Dammam',
    },
    managementScope: {
      ar: 'إدارة المزادات المعتمدة، تسجيل المزايدين، وتوثيق الإفراغ العدلي',
      en: 'Regulated auction engine, bidder verification, & deed documentation',
    },
    metrics: {
      unitsCount: '42 قطعة أرض',
      area: '85,000 م²',
      occupancyOrValuation: 'قيمة مزاد 62 مليون ر.س',
    },
    operationalHighlights: [
      { ar: 'حسابات ضمان ومزايدة إلكترونية موثقة', en: 'Escrow verification & live bids' },
      { ar: 'مطابقة للأنظمة القضائية والتجارية', en: 'Judicial & commercial auction rules' },
    ],
    complianceBadge: { ar: 'منظومة مزادات معتمدة نظامياً', en: 'Certified Auction Governance' },
    imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'ref-project-6',
    title: {
      ar: 'قصور حطين واليمامة التراثية',
      en: 'Hittin & Yamama Heritage Mansions',
    },
    category: { ar: 'إدارة الأصول الخاصة VIP', en: 'Private VIP Asset Management' },
    location: {
      ar: 'شمال الرياض، حي حطين',
      en: 'North Riyadh, Hittin',
    },
    managementScope: {
      ar: 'إشراف على الصيانة الوقائية، العقود الحصرية، وسرية التعامل المالي',
      en: 'Preventive maintenance, confidential mandates, & financial governance',
    },
    metrics: {
      unitsCount: '6 قصور خاصة',
      area: '14,200 م²',
      occupancyOrValuation: 'أصول خاصة مدارة',
    },
    operationalHighlights: [
      { ar: 'عزل بيانات الصلاحيات والخصوصية التامة', en: 'Strict multi-tier data privacy' },
      { ar: 'إشراف مباشر من إدارة المنظومة', en: 'Direct executive oversight' },
    ],
    complianceBadge: { ar: 'أعلى معايير حوكمة الخصوصية', en: 'High-Standard Data Security' },
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
  },
];

export function MenassatPropertiesShowcase() {
  const { t, pick } = useLanguage();

  return (
    <section
      id="reference-portfolio"
      className="py-16 sm:py-24 border-b border-slate-200 bg-white relative"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header: Corporate Reference Portfolio */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-slate-200">
          <div className="max-w-3xl">
            <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 leading-tight">
              {t(
                'أصول عقارية ومشاريع تُدار عبر منظومتنا',
                'Landmark Real-Estate Assets Governed by Our System'
              )}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              {t(
                'نماذج حقيقية لمجمعات سكنية، أبراج مكتبية، ومخططات استثمارية تعمل فيها لوحات التحكم المستقلة لحوكمة الإيجارات، الصيانة، المزادات، والوساطة المعتمدة برخص فال.',
                'Reference architectural developments where our 8 role panels orchestrate leasing, facility maintenance, regulated auctions, and Fal-licensed brokerage workflows.'
              )}
            </p>
          </div>

          <a
            href={EXTERNAL_ROUTES.primaryDemo}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              trackEvent('aqar_demo_click', {
                source: 'reference_portfolio_header',
                demo_id: 'primary_generic',
              })
            }
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-slate-50 px-5 py-2.5 text-xs sm:text-sm font-bold text-slate-800 hover:border-[#00b399] hover:text-[#008f7a] transition-all shrink-0 shadow-xs"
          >
            <span>{t('استعراض لوحة التحكم المرجعية الحية', 'Explore Live Reference Workspace')}</span>
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        {/* 6 Structured Corporate Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {REFERENCE_PROJECTS.map((project) => (
            <article
              key={project.id}
              className="group rounded-3xl border border-slate-200 bg-white shadow-sm overflow-hidden hover:border-[#00b399] hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Architectural Photo Header */}
                <div className="relative h-64 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={project.imageUrl}
                    alt={pick(project.title)}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />

                  {/* Top Category Badge */}
                  <div className="absolute top-4 start-4">
                    <span className="rounded-full bg-slate-900/90 backdrop-blur-md border border-white/20 px-3.5 py-1 text-xs font-bold text-teal-300 shadow-md">
                      {pick(project.category)}
                    </span>
                  </div>

                  {/* Compliance / Fal License Tag */}
                  <div className="absolute bottom-4 start-4 end-4 flex items-center justify-between text-white">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-950/80 backdrop-blur-md px-3 py-1 text-[11px] font-bold text-slate-200 border border-white/15">
                      <ShieldCheck className="h-3.5 w-3.5 text-[#00b399]" />
                      <span>{pick(project.complianceBadge)}</span>
                    </span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6">
                  {/* Location Pin */}
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-2">
                    <MapPin className="h-3.5 w-3.5 text-[#00b399] shrink-0" aria-hidden="true" />
                    <span>{pick(project.location)}</span>
                  </div>

                  {/* Project Title */}
                  <h3 className="font-display text-xl font-bold text-slate-900 group-hover:text-[#008f7a] transition-colors leading-snug">
                    {pick(project.title)}
                  </h3>

                  {/* Scope of Governance */}
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    <span className="font-bold text-slate-800">{t('نطاق الإدارة: ', 'Scope: ')}</span>
                    {pick(project.managementScope)}
                  </p>

                  <div className="my-4 border-t border-slate-100" />

                  {/* Key Operational Metrics */}
                  <div className="grid grid-cols-3 gap-2 text-center rounded-2xl bg-slate-50 p-3 border border-slate-200">
                    <div>
                      <span className="text-[10px] text-slate-400 block">{t('الوحدات', 'Units')}</span>
                      <span className="text-xs font-bold text-slate-900 font-latin block mt-0.5">
                        {project.metrics.unitsCount}
                      </span>
                    </div>
                    <div className="border-x border-slate-200">
                      <span className="text-[10px] text-slate-400 block">{t('المساحة', 'Area')}</span>
                      <span className="text-xs font-bold text-[#008f7a] font-latin block mt-0.5">
                        {project.metrics.area}
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 block">{t('الحالة', 'Status')}</span>
                      <span className="text-[11px] font-bold text-slate-800 block mt-0.5 truncate">
                        {project.metrics.occupancyOrValuation}
                      </span>
                    </div>
                  </div>

                  {/* Operational Highlights */}
                  <ul className="mt-4 space-y-1.5 text-xs text-slate-700">
                    {project.operationalHighlights.map((hl, hIdx) => (
                      <li key={hIdx} className="flex items-center gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#00b399] shrink-0" />
                        <span>{pick(hl)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Link: View Operational Architecture in Demo */}
              <div className="p-6 pt-0">
                <a
                  href={EXTERNAL_ROUTES.primaryDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackEvent('aqar_demo_click', {
                      source: 'reference_project_card',
                      project_id: project.id,
                    })
                  }
                  className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 py-3 text-xs font-bold text-slate-800 hover:border-[#00b399] hover:bg-[#00b399] hover:text-white transition-all shadow-xs"
                >
                  <Layers className="h-4 w-4" aria-hidden="true" />
                  <span>{t('استعراض نموذج التشغيل والأدوار الحية', 'Inspect Operating Architecture Live')}</span>
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
