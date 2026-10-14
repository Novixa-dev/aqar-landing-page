'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { FAQ_ITEMS } from '@/content/aqar-content';

export function FaqSection() {
  const { t, pick } = useLanguage();
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0]?.id ?? null);

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="py-16 sm:py-24 border-b border-slate-200 bg-white"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2
            id="faq-heading"
            className="font-display text-2xl sm:text-4xl font-bold text-slate-900 leading-snug"
          >
            {t(
              'الأسئلة الشائعة حول نوفكسا عقار، التخصيص، والتسعير',
              'Common Questions About Novixa Aqar, Scope & Pricing'
            )}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            {t(
              'كل ما تحتاج معرفته قبل طلب نسختك المخصصة من النظام.',
              'Everything you need to know before requesting your company’s tailored instance.'
            )}
          </p>
        </div>

        <div className="mt-10 space-y-4">
          {FAQ_ITEMS.map((faq) => {
            const isOpen = openId === faq.id;
            const buttonId = `faq-btn-${faq.id}`;
            const panelId = `faq-panel-${faq.id}`;

            return (
              <div
                key={faq.id}
                className={`rounded-3xl border overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? 'border-[#00b399] bg-white shadow-md'
                    : 'border-slate-200 bg-slate-50 hover:border-slate-300'
                }`}
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                    className="flex w-full min-h-14 items-center justify-between gap-4 px-6 py-5 text-start font-display text-base sm:text-lg font-bold text-slate-900 transition-colors"
                  >
                    <span className="leading-snug">{pick(faq.question)}</span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-[#00b399] transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                {isOpen && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="border-t border-slate-200 bg-white px-6 py-5 text-sm sm:text-base text-slate-700 leading-relaxed"
                  >
                    {pick(faq.answer)}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
