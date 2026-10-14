import React from 'react';
import Image from 'next/image';
import {
  Building2,
  Calendar,
  Clock,
  ExternalLink,
} from 'lucide-react';
import { getDictionary } from '@/lib/i18n';
import { EXTERNAL_ROUTES } from '@/lib/site';
import { AuctionCountdownTimer } from './AuctionCountdownTimer';
import { Language } from '@/types';

const AUCTIONS = [
  {
    id: 'auction-1',
    title: { ar: 'مزاد جوهرة ضرماء العقاري', en: 'Jawharat Dhurma Real-Estate Auction' },
    status: { ar: 'مكتمل بنجاح (تم البيع)', en: 'Successfully Closed (Sold)' },
    statusBadge: 'bg-emerald-600',
    date: '2026/11/15 04:00 م',
    propertiesCount: '12 عقاراً',
    daysCount: '3 أيام',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    targetDays: 14,
  },
  {
    id: 'auction-2',
    title: { ar: 'مزاد دار البدرية - الرياض', en: 'Dar Al-Badriya Auction - Riyadh' },
    status: { ar: 'مفتوح للمزايدة الآن', en: 'Live Bidding Active' },
    statusBadge: 'bg-[#00b399]',
    date: '2026/10/28 04:00 م',
    propertiesCount: '218 عقاراً',
    daysCount: '4 أيام',
    imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
    targetDays: 4,
  },
  {
    id: 'auction-3',
    title: { ar: 'مزاد سرايا الشمال والقصيم', en: 'Saraya Al-Shamal & Qassim Auction' },
    status: { ar: 'قريباً — إعلان المزاد', en: 'Upcoming Auction Notice' },
    statusBadge: 'bg-amber-600',
    date: '2026/12/01 02:00 م',
    propertiesCount: '38 عقاراً',
    daysCount: '5 أيام',
    imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
    targetDays: 22,
  },
];

export function MenassatAuctionsShowcase({ lang = 'ar' }: { lang?: Language }) {
  const { t, pick } = getDictionary(lang);

  return (
    <section className="py-16 sm:py-24 border-b border-slate-200 bg-white relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 pb-4 border-b border-slate-200">
          <div>
            <h2 className="font-display text-xl sm:text-4xl lg:text-3xl font-black text-slate-900 leading-tight">
              {t('إدارة وتنظيم المزادات العقارية المعتمدة', 'Organized Real-Estate Auctions System')}
            </h2>
          </div>

          <a
            href={EXTERNAL_ROUTES.primaryDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-slate-50 px-5 py-2.5 text-xs sm:text-sm font-bold text-slate-800 hover:border-[#00b399] hover:text-[#008f7a] transition-all self-start sm:self-auto shadow-xs shrink-0"
          >
            <span>{t('استعراض وحدة المزادات في النظام', 'Explore Auctions System Module')}</span>
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        {/* Auction Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {AUCTIONS.map((auc, idx) => {
            return (
              <article
                key={auc.id}
                className="group rounded-3xl border border-slate-200 bg-white shadow-sm overflow-hidden hover:border-[#00b399] hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Photo Header */}
                  <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={auc.imageUrl}
                      alt={pick(auc.title)}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                      className="object-cover object-center group-hover:scale-108 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                    {/* Status Badge */}
                    <div className="absolute top-4 start-4">
                      <span className={`rounded-full ${auc.statusBadge} px-3.5 py-1 text-xs font-bold text-white shadow-md`}>
                        {pick(auc.status)}
                      </span>
                    </div>

                    <div className="absolute bottom-3 start-4 end-4 text-white">
                      <span className="text-[11px] font-semibold text-teal-300 block mb-0.5">
                        {t('مدة المزاد: ', 'Duration: ')}{auc.daysCount}
                      </span>
                      <h3 className="font-display text-lg font-bold text-white leading-snug">
                        {pick(auc.title)}
                      </h3>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    {/* Live Countdown Island */}
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3.5 mb-4">
                      <div className="flex items-center justify-between text-xs font-bold text-slate-700 mb-2">
                        <span className="flex items-center gap-1.5 text-[#008f7a]">
                          <Clock className="h-4 w-4 animate-spin-slow" aria-hidden="true" />
                          <span>{t('الوقت المتبقي لانتهاء المزاد', 'Time Remaining Until Close')}</span>
                        </span>
                      </div>

                      <AuctionCountdownTimer offsetDays={idx * 3} lang={lang} />
                    </div>

                    {/* Auction Specs */}
                    <div className="mt-5 space-y-2.5 text-xs text-slate-600 border-t border-slate-100 pt-4">
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-1.5 text-slate-500">
                          <Calendar className="h-3.5 w-3.5 text-[#008f7a]" aria-hidden="true" />
                          <span>{t('تاريخ المزاد:', 'Auction Date:')}</span>
                        </span>
                        <span className="font-bold text-slate-800">{auc.date}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-1.5 text-slate-500">
                          <Building2 className="h-3.5 w-3.5 text-[#008f7a]" aria-hidden="true" />
                          <span>{t('العقارات المطروحة:', 'Properties Listed:')}</span>
                        </span>
                        <span className="font-bold text-[#008f7a]">{auc.propertiesCount}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <a
                    href={EXTERNAL_ROUTES.primaryDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 py-2.5 text-xs font-bold text-slate-800 hover:border-[#00b399] hover:bg-[#00b399] hover:text-white transition-all shadow-xs"
                  >
                    <span>{t('تفاصيل المزاد وكراسة الشروط', 'Auction Details & Terms')}</span>
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
