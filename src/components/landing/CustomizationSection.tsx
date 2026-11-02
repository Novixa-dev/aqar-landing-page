import React from 'react';
import {
  CheckCircle2,
  ExternalLink,
  Info,
  Palette,
  Sliders,
} from 'lucide-react';
import { getDictionary } from '@/lib/i18n';
import { CUSTOMIZATION_PILLARS, DEMO_OPTIONS } from '@/content/aqar-content';
import { TrackedLink } from '@/components/common/TrackedLink';
import { Language } from '@/types';

export function CustomizationSection({ lang = 'ar' }: { lang?: Language }) {
  const { t, pick } = getDictionary(lang);

  return (
    <section
      id="customization"
      aria-labelledby="customization-heading"
      className="py-16 sm:py-24 border-b border-slate-200 bg-[#f8fafc]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Part 1: What Gets Customized */}
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="customization-heading"
            className="font-display text-2xl sm:text-4xl lg:text-4xl font-black text-slate-900 leading-tight"
          >
            {t(
              'نفس المحرك العقاري القوي — بهوية شركتك وإعدادات سوقك المحلي',
              'One Proven Real-Estate Engine — Styled and Configured for Your Brand'
            )}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            {t(
              'صممنا نوڤيكسا عقار ليكون قابلاً للتشكيل بسرعة حسب هوية مكتبك وطريقة عملك، دون أن تدفع تكلفة بناء نظام من الصفر.',
              'Novixa Aqar is engineered to be rapidly branded and configured around your agency’s identity and market rules without custom-from-scratch delays.'
            )}
          </p>
        </div>

        {/* 4 Customization Pillars */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {CUSTOMIZATION_PILLARS.map((pillar) => {
            const isBaseline = pillar.scopeType === 'baseline';
            return (
              <div
                key={pillar.id}
                className="group rounded-3xl border border-slate-200 bg-white p-6 flex flex-col justify-between shadow-sm hover:border-[#00b399]/40 hover:shadow-xl transition-all"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span
                      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-bold border ${
                        isBaseline
                          ? 'bg-[#00b399]/15 border-[#00b399]/40 text-[#008f7a]'
                          : 'bg-amber-50 border-amber-300 text-amber-800'
                      }`}
                    >
                      {pick(pillar.scopeBadge)}
                    </span>
                    {isBaseline ? (
                      <Palette className="h-4 w-4 text-[#00b399]" aria-hidden="true" />
                    ) : (
                      <Sliders className="h-4 w-4 text-amber-600" aria-hidden="true" />
                    )}
                  </div>
                  <h3 className="font-display text-lg font-bold text-slate-900 group-hover:text-[#00b399] transition-colors leading-snug">
                    {pick(pillar.title)}
                  </h3>
                  <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                    {pick(pillar.description)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Part 2: Live Demo & Brand Showcase Hub */}
        <div className="mt-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 leading-snug">
                {t(
                  'جرّب النظام بنفسك: النسخة المرجعية وأمثلة تخصيص الهوية',
                  'Try It Live: Primary Reference Demo & Brand Customization Showcases'
                )}
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {DEMO_OPTIONS.map((demo) => {
              const highlights =
                lang === 'ar' ? demo.highlights.ar : demo.highlights.en;

              return (
                <article
                  key={demo.id}
                  className={`rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all ${
                    demo.isPrimary
                      ? 'bg-white border-2 border-[#00b399] shadow-xl'
                      : 'rounded-3xl border border-slate-200 bg-white shadow-sm hover:border-[#00b399]/40 hover:shadow-lg'
                  }`}
                >
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                      <span
                        className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-bold border ${
                          demo.isPrimary
                            ? 'bg-[#00b399] text-white border-transparent'
                            : 'bg-slate-100 border-slate-200 text-slate-700'
                        }`}
                      >
                        {pick(demo.badge)}
                      </span>
                    </div>

                    <h4 className="font-display text-xl font-bold text-slate-900 leading-snug">
                      {pick(demo.title)}
                    </h4>
                    <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                      {pick(demo.subtitle)}
                    </p>

                    <ul className="mt-4 space-y-2 border-t border-slate-200 pt-4">
                      {highlights.map((hl, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-xs sm:text-sm text-slate-700"
                        >
                          <CheckCircle2
                            className="h-4 w-4 shrink-0 text-[#00b399] mt-0.5"
                            aria-hidden="true"
                          />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-200">
                    {/* Explicit Honesty Disclaimer */}
                    <div className="mb-4 flex items-start gap-2 rounded-2xl bg-slate-50 border border-slate-200 p-3 text-xs text-slate-600">
                      <Info
                        className="h-4 w-4 shrink-0 text-[#00b399] mt-0.5"
                        aria-hidden="true"
                      />
                      <span>{pick(demo.disclaimer)}</span>
                    </div>

                    <TrackedLink
                      href={demo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      eventName="aqar_demo_click"
                      eventParams={{
                        source: 'customization_hub',
                        demo_id: demo.id,
                      }}
                      className={`inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-bold transition-all ${
                        demo.isPrimary
                          ? 'btn-brand-teal text-white shadow-lg shadow-[#00b399]/20'
                          : 'border border-slate-300 bg-white text-slate-800 hover:border-[#00b399] hover:text-[#008f7a]'
                      }`}
                    >
                      <span>
                        {demo.isPrimary
                          ? t('تصفح النسخة المرجعية الحية', 'Open Primary Live Demo')
                          : t('استعراض مثال تخصيص الهوية', 'Open Brand Showcase')}
                      </span>
                      <ExternalLink className="h-4 w-4" aria-hidden="true" />
                    </TrackedLink>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
