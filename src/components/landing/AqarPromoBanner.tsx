import React from 'react';
import { ArrowLeft, ArrowRight, Briefcase } from 'lucide-react';
import { getDictionary } from '@/lib/i18n';
import { TrackedLink } from '@/components/common/TrackedLink';
import { Language } from '@/types';

export function AqarPromoBanner({ lang = 'ar' }: { lang?: Language }) {
  const { t, isRtl } = getDictionary(lang);
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 my-10">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#00b399] via-[#008f7a] to-[#15283f] p-8 sm:p-10 shadow-2xl shadow-[#00b399]/20 text-white">
        {/* Subtle Background Pattern */}
        <div className="absolute -end-10 -bottom-10 h-64 w-64 rounded-full bg-white/10 blur-3xl pointer-events-none" />
        <div className="absolute start-1/3 -top-10 h-40 w-40 rounded-full bg-[#00b399]/30 blur-2xl pointer-events-none" />

        <div className="relative flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h3 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight leading-snug">
            {t(
              'منصتك العقارية بهويتك، جاهزة خلال أيام.',
              'Your branded real-estate platform, ready in days.'
            )}
            </h3>
            <p className="mt-2 text-sm sm:text-base text-white/80 leading-relaxed">
              {t(
                'امتلك منصتك العقارية بهوية شركتك، ووحد مسار العروض والطلبات والملاك والمستأجرين في مكان واحد يبدأ من 500$.',
                'Launch your own branded real-estate platform, unifying listings, buyer requests, landlords, and tenants starting from $500.'
              )}
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row gap-3">
            <TrackedLink
              href="#demo-form"
              eventName="aqar_cta_click"
              eventParams={{
                source: 'promo_banner',
                target: 'demo_form',
              }}
              className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full bg-slate-950 px-8 py-3.5 text-sm sm:text-base font-bold text-white shadow-xl hover:bg-slate-900 hover:scale-105 transition-all"
            >
              <Briefcase className="h-4 w-4 text-[#00b399]" aria-hidden="true" />
              <span>{t('طلب استشارة وعرض توضيحي للمنظومة', 'Request Live Presentation')}</span>
              <ArrowIcon className="h-4 w-4" aria-hidden="true" />
            </TrackedLink>
          </div>
        </div>
      </div>
    </div>
  );
}
