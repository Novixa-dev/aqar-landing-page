'use client';

import React from 'react';
import { Building, Briefcase, Compass, Layers } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { AUDIENCE_ITEMS } from '@/content/aqar-content';

const AUDIENCE_ICONS = [Building, Briefcase, Layers, Compass];

export function BusinessAudienceSection() {
  const { t, pick } = useLanguage();

  return (
    <section
      id="audience"
      aria-labelledby="audience-heading"
      className="py-16 sm:py-24 border-b border-slate-200 bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="audience-heading"
            className="font-display text-2xl sm:text-4xl font-extrabold text-slate-900 leading-snug"
          >
            {t(
              'مصمم ليتكيف مع نموذج عملك العقاري — من الوساطة إلى إدارة الأملاك',
              'Tailored to Your Real-Estate Business Model — Brokerage to Property Management'
            )}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            {t(
              'لا تفرض عليك المنصة قالب عمل جامد؛ بل تتشكل لتخدم المكاتب العقارية وشركات الوساطة وإدارة الأملاك حسب حجم الفريق والمسارات المطلوبة.',
              'Instead of forcing a rigid template, Novixa Aqar adapts to agencies, brokerages, and property managers based on your team structure and active workflows.'
            )}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {AUDIENCE_ITEMS.map((item, idx) => {
            const Icon = AUDIENCE_ICONS[idx % AUDIENCE_ICONS.length];
            return (
              <article
                key={item.id}
                className="group rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:border-[#00b399] hover:shadow-xl hover:bg-white transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="inline-flex items-center rounded-lg bg-slate-200/70 px-2.5 py-1 text-xs font-bold text-slate-700">
                      {pick(item.tag)}
                    </span>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#00b399]/15 border border-[#00b399]/30 text-[#008f7a] group-hover:scale-105 group-hover:bg-[#00b399] group-hover:text-white transition-all">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                  </div>
                  <h3 className="font-display text-xl font-bold text-slate-900 group-hover:text-[#008f7a] transition-colors leading-snug">
                    {pick(item.title)}
                  </h3>
                  <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                    {pick(item.description)}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
