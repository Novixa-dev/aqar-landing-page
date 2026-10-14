'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export interface FaqRenderItem {
  id: string;
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqRenderItem[];
}

export function FaqAccordion({ items }: FaqAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  return (
    <div className="mt-10 space-y-4">
      {items.map((faq) => {
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
                <span className="leading-snug">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-[#00b399] transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                  aria-hidden="true"
                />
              </button>
            </h3>

            {/* Answer is rendered in DOM for 100% SEO indexability */}
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`border-t border-slate-200 bg-white px-6 py-5 text-sm sm:text-base text-slate-700 leading-relaxed ${
                isOpen ? 'block' : 'hidden'
              }`}
            >
              {faq.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}
