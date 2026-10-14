'use client';

import React from 'react';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { WALKTHROUGH_STEPS } from '@/content/aqar-content';

const STEP_IMAGES: Record<string, string> = {
  'step-1': 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
  'step-2': 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=800&q=80',
  'step-3': 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
  'step-4': 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80',
};

export function ProductWalkthroughSection() {
  const { lang, t, pick } = useLanguage();

  return (
    <section
      id="walkthrough"
      aria-labelledby="walkthrough-heading"
      className="py-16 sm:py-24 border-b border-slate-200 bg-[#f8fafc] architectural-grid"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="walkthrough-heading"
            className="font-display text-2xl sm:text-4xl lg:text-4xl font-black text-slate-900 leading-tight"
          >
            {t(
              'كيف تعمل دورة العقار داخل نوفكسا عقار من الإدراج حتى ما بعد التعاقد',
              'How a Property Moves Through Novixa Aqar from Listing to Post-Lease'
            )}
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {WALKTHROUGH_STEPS.map((step) => {
            const highlights = lang === 'ar' ? step.highlights.ar : step.highlights.en;
            const stepImageUrl = STEP_IMAGES[step.id] || STEP_IMAGES['step-1'];

            return (
              <div
                key={step.id}
                className="group rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 flex flex-col justify-between shadow-xs hover:border-[#00b399] hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div>
                  {/* Step Image Visual Header */}
                  <div className="relative h-32 w-full rounded-2xl overflow-hidden mb-5 border border-slate-200">
                    <Image
                      src={stepImageUrl}
                      alt={pick(step.title)}
                      fill
                      sizes="(max-width: 768px) 100vw, 500px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
                    
                    <div className="absolute top-3 start-3 flex items-center gap-2">
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#00b399] to-[#008f7a] font-latin text-sm font-black text-white shadow-md shadow-[#00b399]/40">
                        {step.stepNumber}
                      </span>
                      <span className="rounded-full border border-white/20 bg-slate-900/80 backdrop-blur-md px-3 py-1 text-xs font-bold text-teal-300">
                        {pick(step.roleBadge)}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-display text-xl font-bold text-slate-900 group-hover:text-[#008f7a] transition-colors leading-snug">
                    {pick(step.title)}
                  </h3>
                  <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                    {pick(step.description)}
                  </p>
                </div>

                <ul className="mt-5 space-y-2.5 border-t border-slate-100 pt-4">
                  {highlights.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700"
                    >
                      <CheckCircle2
                        className="h-4 w-4 shrink-0 text-[#00b399] mt-0.5"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
