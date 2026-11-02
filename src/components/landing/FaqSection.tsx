import React from 'react';
import { getDictionary } from '@/lib/i18n';
import { FAQ_ITEMS } from '@/content/aqar-content';
import { FaqAccordion } from './FaqAccordion';
import { Language } from '@/types';

export function FaqSection({ lang = 'ar' }: { lang?: Language }) {
  const { t, pick } = getDictionary(lang);

  const formattedItems = FAQ_ITEMS.map((faq) => ({
    id: faq.id,
    question: pick(faq.question),
    answer: pick(faq.answer),
  }));

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
            className="font-display text-2xl sm:text-4xl lg:text-4xl font-black text-slate-900 leading-tight"
          >
            {t(
              'الأسئلة الشائعة حول نوڤيكسا',
              'Frequently Asked Questions About Novixa'
            )}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            {t(
              'كل ما تحتاج معرفته قبل طلب نسختك المخصصة من النظام.',
              'Everything you need to know before requesting your company’s tailored instance.'
            )}
          </p>
        </div>

        <FaqAccordion items={formattedItems} />
      </div>
    </section>
  );
}
