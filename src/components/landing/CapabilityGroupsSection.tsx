'use client';

import React from 'react';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { CAPABILITY_GROUPS } from '@/content/aqar-content';

const CAPABILITY_VISUALS: Record<
  string,
  {
    imageUrl: string;
    captionBadge: { ar: string; en: string };
    detailBadge: { ar: string; en: string };
  }
> = {
  public_portal: {
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    captionBadge: { ar: 'واجهة تسويقية متكاملة', en: 'Customer Portal UI' },
    detailBadge: { ar: 'بحث ومقارنة متقدمة', en: 'Advanced Search' },
  },
  intake_and_bookings: {
    imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80',
    captionBadge: { ar: 'مسارات استقبال وحجز مؤتمتة', en: 'Automated Booking & Intake' },
    detailBadge: { ar: 'تقويم وحجوزات .ics', en: 'Calendar .ics' },
  },
  leasing_and_operations: {
    imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
    captionBadge: { ar: 'تشغيل وصيانة موحدة', en: 'Property Operations & Leases' },
    detailBadge: { ar: 'حوكمة العقود والصيانة', en: 'Lease & Repairs' },
  },
  governance_and_config: {
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
    captionBadge: { ar: '8 لوحات تحكم مستقلة', en: '8 Isolated Workspaces' },
    detailBadge: { ar: 'SAR / YER / USD + لغتين', en: 'Multi-Currency & RTL' },
  },
};

export function CapabilityGroupsSection() {
  const { lang, t, pick } = useLanguage();

  return (
    <section
      id="capabilities"
      aria-labelledby="capabilities-heading"
      className="py-16 sm:py-24 border-b border-slate-200 bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-14 sm:mb-20">
          <h2
            id="capabilities-heading"
            className="font-display text-2xl sm:text-4xl lg:text-4xl font-black text-slate-900 leading-tight"
          >
            {t(
              'أربع ركائز تغطي رحلة العقار من العرض والتسويق حتى التعاقد والصيانة',
              'Four Core Pillars Covering Discovery, Intake, Leasing & Governance'
            )}
          </h2>
        </div>

        {/* Alternating Zigzag Layout: Image on one side, text on the other, alternating each row */}
        <div className="space-y-12 sm:space-y-16">
          {CAPABILITY_GROUPS.map((group, idx) => {
            const bullets = lang === 'ar' ? group.bullets.ar : group.bullets.en;
            const visual =
              CAPABILITY_VISUALS[group.id] ??
              CAPABILITY_VISUALS.public_portal;
            const isEven = idx % 2 === 0;

            return (
              <article
                key={group.id}
                className="rounded-3xl border border-slate-200 bg-slate-50/80 p-6 sm:p-8 lg:p-10 shadow-xs hover:border-[#00b399]/40 hover:bg-white hover:shadow-xl transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  {/* Photo Column with Zigzag order */}
                  <div
                    className={`lg:col-span-6 ${
                      isEven ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <div className="relative h-64 sm:h-80 lg:h-96 w-full rounded-2xl overflow-hidden border border-slate-200 shadow-md group">
                      <Image
                        src={visual.imageUrl}
                        alt={pick(group.title)}
                        fill
                        sizes="(max-width: 1024px) 100vw, 600px"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                      {/* Floating Caption Tag */}
                      <div className="absolute top-4 start-4 flex items-center gap-2 rounded-xl bg-slate-950/85 backdrop-blur-md border border-white/20 px-3.5 py-1.5 text-xs font-bold text-white shadow-md">
                        <span className="h-2 w-2 rounded-full bg-[#00b399]" />
                        <span>{pick(visual.captionBadge)}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content & Bullets Column with Zigzag order */}
                  <div
                    className={`lg:col-span-6 ${
                      isEven ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 leading-snug">
                      {pick(group.title)}
                    </h3>

                    <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                      {pick(group.description)}
                    </p>

                    <ul className="mt-6 space-y-3 border-t border-slate-200/80 pt-5">
                      {bullets.map((bullet, bIdx) => (
                        <li
                          key={bIdx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed"
                        >
                          <CheckCircle2
                            className="h-4 w-4 shrink-0 text-[#00b399] mt-0.5"
                            aria-hidden="true"
                          />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
