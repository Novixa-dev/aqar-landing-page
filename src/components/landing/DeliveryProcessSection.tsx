import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { getDictionary } from '@/lib/i18n';
import { DELIVERY_STEPS } from '@/content/aqar-content';
import { Language } from '@/types';

export function DeliveryProcessSection({ lang = 'ar' }: { lang?: Language }) {
  const { t, pick } = getDictionary(lang);

  return (
    <section
      id="delivery"
      aria-labelledby="delivery-heading"
      className="py-16 sm:py-24 border-b border-slate-200 bg-[#f8fafc]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="delivery-heading"
            className="font-display text-2xl sm:text-4xl lg:text-4xl font-black text-slate-900 leading-tight"
          >
            {t(
              'نظامك العقاري جاهزاً للعمل',
              'Your Real-Estate Platform Ready to Operate'
            )}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            {t(
              'منهجية واضحة من تحديد النطاق وحتى تدريب فريقك وإطلاق المنصة بهويتك.',
              'A structured onboarding flow from scope confirmation to branded deployment and team handover.'
            )}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {DELIVERY_STEPS.map((item) => (
            <div
              key={item.step}
              className="group rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 flex flex-col justify-between shadow-sm hover:border-[#00b399]/40 hover:shadow-xl transition-all"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#00b399]/15 border border-[#00b399]/40 font-latin text-base font-black text-[#008f7a]">
                    {item.step}
                  </span>
                  <span className="rounded-full bg-slate-100 border border-slate-200 px-2.5 py-0.5 text-[10px] font-semibold text-slate-600">
                    {t('مرحلة تنفيذ', 'Delivery Stage')}
                  </span>
                </div>
                <h3 className="font-display text-lg font-bold text-slate-900 group-hover:text-[#00b399] transition-colors leading-snug">
                  {pick(item.title)}
                </h3>
                <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                  {pick(item.description)}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-200 flex items-start gap-2 text-xs font-semibold text-[#008f7a]">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-[#00b399] mt-0.5" aria-hidden="true" />
                <span>{pick(item.deliverable)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
