import React from 'react';
import { AlertCircle, CheckCircle2 } from 'lucide-react';
import { getDictionary } from '@/lib/i18n';
import { PROBLEM_OUTCOME_ITEMS } from '@/content/aqar-content';
import { Language } from '@/types';

export function WorkflowProblemSection({ lang = 'ar' }: { lang?: Language }) {
  const { t, pick } = getDictionary(lang);

  return (
    <section
      id="problem-outcomes"
      aria-labelledby="problem-outcomes-heading"
      className="py-16 sm:py-24 border-b border-slate-200 bg-[#f8fafc] architectural-grid"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="problem-outcomes-heading"
            className="font-display text-2xl sm:text-4xl lg:text-4xl font-black text-slate-900 leading-tight"
          >
            {t(
              'ودّع تشتت العروض والطلبات بين المحادثات والجداول',
              'Replace Scattered Chats and Spreadsheets with One Connected System'
            )}
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {PROBLEM_OUTCOME_ITEMS.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl border border-slate-200 bg-white shadow-sm overflow-hidden flex flex-col justify-between hover:border-[#00b399] hover:shadow-xl transition-all duration-300"
            >
              {/* Before: Problem */}
              <div className="p-6 sm:p-7 bg-rose-50/40 border-b border-rose-100">
                <div className="inline-flex items-center gap-2 rounded-lg bg-rose-100 border border-rose-200 px-3 py-1 text-xs font-bold text-rose-700 mb-3">
                  <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  <span>{t('الوضع التقليدي المشتت', 'Before: Manual & Fragmented')}</span>
                </div>
                <h3 className="font-display text-lg font-bold text-slate-900 leading-snug">
                  {pick(item.beforeTitle)}
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {pick(item.beforeDescription)}
                </p>
              </div>

              {/* After: Outcome */}
              <div className="p-6 sm:p-7 bg-teal-50/30 flex-1">
                <div className="inline-flex items-center gap-2 rounded-lg bg-[#00b399]/15 border border-[#00b399]/40 px-3 py-1 text-xs font-bold text-[#008f7a] mb-3">
                  <CheckCircle2 className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  <span>{t('مع منظومة عقار المتكاملة', 'With Our Real-Estate Platform')}</span>
                </div>
                <h4 className="font-display text-lg font-bold text-slate-900 leading-snug">
                  {pick(item.afterTitle)}
                </h4>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {pick(item.afterDescription)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
