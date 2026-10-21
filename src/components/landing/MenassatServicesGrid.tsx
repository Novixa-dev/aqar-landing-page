import React from 'react';
import Image from 'next/image';
import {
  Gavel,
  BarChart3,
  Building,
  Megaphone,
  Calculator,
  View,
  ArrowLeft,
  ArrowRight,
} from 'lucide-react';
import { getDictionary } from '@/lib/i18n';
import { EXTERNAL_ROUTES } from '@/lib/site';
import { Language } from '@/types';

const SERVICES = [
  {
    id: 'auctions',
    title: { ar: 'مزادات عقارية', en: 'Real-Estate Auctions' },
    desc: {
      ar: 'إدارة المزادات العقارية الإلكترونية والحضورية مع توثيق المزايدات والمواعيد.',
      en: 'Electronic and in-person real estate auction management with live bidding schedules.',
    },
    icon: Gavel,
    badge: { ar: 'مزادات حية', en: 'Live Auctions' },
    imageUrl: 'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'studies',
    title: { ar: 'دراسات وبحوث عقارية', en: 'Market Studies & Analytics' },
    desc: {
      ar: 'تحليل دقيق لأسعار السوق، معدلات العائد، ونسب الإشغال في مختلف المناطق.',
      en: 'Precise analysis of market pricing, cap rates, and occupancy across regions.',
    },
    icon: BarChart3,
    badge: { ar: 'بيانات ودراسات', en: 'Market Insights' },
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'management',
    title: { ar: 'إدارة الأملاك والمرافق', en: 'Property & Facility Management' },
    desc: {
      ar: 'متابعة عقود الإيجار، تحصيل الدفعات، وأوامر عمل الصيانة الدورية والطارئة.',
      en: 'Lease tracking, rent collection records, and scheduled & emergency maintenance.',
    },
    icon: Building,
    badge: { ar: 'تشغيل وصيانة', en: 'Operations' },
    imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'marketing',
    title: { ar: 'التسويق العقاري الرقمي', en: 'Digital Real-Estate Marketing' },
    desc: {
      ar: 'بوابة إلكترونية متطورة تعرض العقارات للباحثين والمشترين بحملات مركزة.',
      en: 'Advanced digital portal showcasing properties to qualified buyers and tenants.',
    },
    icon: Megaphone,
    badge: { ar: 'تسويق احترافي', en: 'Marketing' },
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'evaluation',
    title: { ar: 'التقييم العقاري المعتمد', en: 'Real-Estate Valuation' },
    desc: {
      ar: 'نماذج تقييم وحاسبات عقارية متوافقة مع معايير الهيئات المعتمدة والمقاييس.',
      en: 'Valuation models and financial calculators aligned with real estate standards.',
    },
    icon: Calculator,
    badge: { ar: 'تقييم وحسابات', en: 'Valuation' },
    imageUrl: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'virtual_tours',
    title: { ar: 'تصوير بتقنية (3D - VR)', en: '3D & Virtual Reality Tours' },
    desc: {
      ar: 'استعراض الوحدات العقارية بجولات افتراضية ثلاثية الأبعاد تنقل العميل للواقع.',
      en: 'Immersive 3D virtual walkthroughs putting prospects inside units remotely.',
    },
    icon: View,
    badge: { ar: 'جولات ثلاثية الأبعاد', en: '3D Tours' },
    imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
  },
];

export function MenassatServicesGrid({ lang = 'ar' }: { lang?: Language }) {
  const { t, pick, isRtl } = getDictionary(lang);
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section className="py-16 sm:py-24 border-b border-slate-200 bg-[#f8fafc] relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Centered Heading Matching Menassat "ماذا تجد في منصات العقارية" */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-2xl sm:text-4xl lg:text-4xl font-black text-slate-900 leading-tight">
            {t('ماذا تجد في المنصة العقارية المتكاملة', 'What You Get in the Platform')}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            {t(
              'حلول عقارية متكاملة ومتكئة على معايير مهنية لتمكين مكاتبكم وشركاتكم من العمل بكفاءة تحت هويتكم الخاصة.',
              'Pragmatic real-estate operations software designed to help agencies and property managers work more efficiently under their own brand.'
            )}
          </p>
        </div>

        {/* 6 Feature Boxes Grid with Real Architectural Photography */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <a
                key={service.id}
                href={EXTERNAL_ROUTES.primaryDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 flex flex-col justify-between overflow-hidden shadow-xs hover:border-[#00b399] hover:shadow-xl transition-all duration-300"
              >
                <div>
                  {/* Photo Header with Badge and Icon */}
                  <div className="relative h-44 w-full rounded-2xl overflow-hidden mb-5 border border-slate-200">
                    <Image
                      src={service.imageUrl}
                      alt={pick(service.title)}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                      className="object-cover group-hover:scale-108 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                    
                    <div className="absolute top-3 start-3 flex h-11 w-11 items-center justify-center rounded-xl bg-white/90 backdrop-blur-md border border-slate-200 text-[#008f7a] group-hover:bg-[#00b399] group-hover:text-white transition-all shadow-md">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>

                    <span className="absolute top-3 end-3 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 px-3 py-1 text-[11px] font-bold text-slate-800 shadow-sm">
                      {pick(service.badge)}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-slate-900 group-hover:text-[#008f7a] transition-colors">
                    {pick(service.title)}
                  </h3>
                  <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                    {pick(service.desc)}
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-1.5 text-xs font-bold text-[#008f7a] group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform pt-4 border-t border-slate-100">
                  <span>{t('استعرض في النسخة الحية', 'Explore in Live Demo')}</span>
                  <ArrowIcon className="h-4 w-4" aria-hidden="true" />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
