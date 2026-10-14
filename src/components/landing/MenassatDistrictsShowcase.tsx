'use client';

import React from 'react';
import Image from 'next/image';
import { Building2, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { EXTERNAL_ROUTES } from '@/lib/site';

const REGIONS = [
  {
    id: 'riyadh',
    name: { ar: 'منطقة الرياض', en: 'Riyadh Province' },
    count: { ar: '184 عقاراً معروضاً', en: '184 Active Listings' },
    colSpan: 'lg:col-span-7',
    imageUrl: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'eastern',
    name: { ar: 'المنطقة الشرقية', en: 'Eastern Province' },
    count: { ar: '30 عقاراً معروضاً', en: '30 Active Listings' },
    colSpan: 'lg:col-span-5',
    imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'makkah',
    name: { ar: 'منطقة مكة المكرمة وجدة', en: 'Makkah & Jeddah Province' },
    count: { ar: '43 عقاراً معروضاً', en: '43 Active Listings' },
    colSpan: 'lg:col-span-4',
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'qassim',
    name: { ar: 'منطقة القصيم', en: 'Qassim Province' },
    count: { ar: '18 عقاراً معروضاً', en: '18 Active Listings' },
    colSpan: 'lg:col-span-4',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'tabuk',
    name: { ar: 'منطقة تبوك والشمال', en: 'Tabuk & Northern Province' },
    count: { ar: '12 عقاراً معروضاً', en: '12 Active Listings' },
    colSpan: 'lg:col-span-4',
    imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80',
  },
];

export function MenassatDistrictsShowcase() {
  const { t, pick } = useLanguage();

  return (
    <section className="py-16 sm:py-24 border-b border-slate-200 bg-[#f8fafc] relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-4 border-b border-slate-200">
          <div>
            <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-slate-900">
              {t('استكشف العقارات حسب مناطق المملكة', 'Explore Listings by Kingdom Regions')}
            </h2>
          </div>

          <a
            href={EXTERNAL_ROUTES.primaryDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-2.5 text-xs sm:text-sm font-bold text-slate-800 hover:border-[#00b399] hover:text-[#008f7a] transition-all self-start sm:self-auto shadow-xs"
          >
            <span>{t('استعراض الخريطة التفاعلية', 'View Interactive Map')}</span>
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        {/* Regions Grid with Menassat styling */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5">
          {REGIONS.map((region) => (
            <a
              key={region.id}
              href={EXTERNAL_ROUTES.primaryDemo}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative overflow-hidden rounded-3xl h-60 sm:h-72 border border-slate-200 shadow-sm hover:shadow-xl transition-all ${region.colSpan} block`}
            >
              <Image
                src={region.imageUrl}
                alt={pick(region.name)}
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                className="object-cover object-center group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent group-hover:from-slate-950/95 transition-colors" />

              <div className="absolute inset-0 flex flex-col justify-end p-6 text-center sm:text-start">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-300 mb-1">
                  <Building2 className="h-4 w-4" aria-hidden="true" />
                  <span>{pick(region.count)}</span>
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white group-hover:text-[#00cbb0] transition-colors">
                  {pick(region.name)}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
