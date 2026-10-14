'use client';

import React from 'react';
import {
  AlertTriangle,
  ArrowUpLeft,
  ArrowUpRight,
  CheckCircle2,
  SlidersHorizontal,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { PRICING_SCOPE_CONTENT } from '@/content/aqar-content';
import { trackEvent } from '@/lib/analytics';

export function PricingScopeSection() {
  const { lang, t, pick, isRtl } = useLanguage();
  const ArrowIcon = isRtl ? ArrowUpLeft : ArrowUpRight;

  const includedItems =
    lang === 'ar'
      ? PRICING_SCOPE_CONTENT.includedInBaseline.items.ar
      : PRICING_SCOPE_CONTENT.includedInBaseline.items.en;

  const scopedItems =
    lang === 'ar'
      ? PRICING_SCOPE_CONTENT.scopedAddons.items.ar
      : PRICING_SCOPE_CONTENT.scopedAddons.items.en;

  const excludedItems =
    lang === 'ar'
      ? PRICING_SCOPE_CONTENT.explicitExclusions.items.ar
      : PRICING_SCOPE_CONTENT.explicitExclusions.items.en;

  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      className="py-16 sm:py-24 border-b border-slate-200 bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="pricing-heading"
            className="font-display text-2xl sm:text-4xl lg:text-4xl font-black text-slate-900 leading-tight"
          >
            {pick(PRICING_SCOPE_CONTENT.headline)}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            {pick(PRICING_SCOPE_CONTENT.subheadline)}
          </p>
        </div>

        {/* Hero Price Anchor Card */}
        <div className="mt-10 rounded-3xl border-2 border-[#00b399] bg-white p-6 sm:p-10 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 flex flex-col items-start">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#008f7a]">
                {pick(PRICING_SCOPE_CONTENT.startingPriceCard.priceLabel)}
              </span>
              <div className="mt-2 flex items-baseline gap-3">
                <span className="font-display font-latin text-5xl sm:text-6xl font-black text-slate-900">
                  {PRICING_SCOPE_CONTENT.startingPriceCard.priceValue}
                </span>
                <span className="font-latin text-lg font-bold text-[#008f7a]">
                  {PRICING_SCOPE_CONTENT.startingPriceCard.priceCurrency}
                </span>
              </div>
              <p className="mt-2 text-sm sm:text-base font-bold text-[#008f7a]">
                {pick(PRICING_SCOPE_CONTENT.startingPriceCard.priceSuffix)}
              </p>
              <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                {pick(PRICING_SCOPE_CONTENT.startingPriceCard.summary)}
              </p>
              <div className="mt-6 w-full sm:w-auto">
                <a
                  href="#demo-form"
                  onClick={() =>
                    trackEvent('aqar_cta_click', {
                      source: 'pricing_card',
                      target: 'demo_form',
                    })
                  }
                  className="inline-flex min-h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-full btn-menassat-teal px-8 py-3.5 text-sm sm:text-base font-bold text-white shadow-lg shadow-[#00b399]/25 transition-transform"
                >
                  <span>
                    {t(
                      'اطلب تسعيراً دقيقاً لنطاق شركتك',
                      'Get an Exact Quote for Your Scope'
                    )}
                  </span>
                  <ArrowIcon className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Baseline Included Checklist */}
            <div className="lg:col-span-7 rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-7">
              <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900 leading-snug mb-4">
                {pick(PRICING_SCOPE_CONTENT.includedInBaseline.title)}
              </h3>
              <ul className="space-y-3">
                {includedItems.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed"
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
          </div>
        </div>

        {/* Two-Column Scope Boundaries: Scoped Add-ons vs Explicit Exclusions */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Scoped Add-ons */}
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8 shadow-sm">
            <div className="inline-flex items-center gap-2 rounded-lg bg-[#00b399]/15 border border-[#00b399]/30 px-3 py-1 text-xs font-bold text-[#008f7a] mb-4">
              <SlidersHorizontal className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              <span>{t('إضافات وتخصيصات حسب الطلب', 'Optional Scoped Add-Ons')}</span>
            </div>
            <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900 leading-snug">
              {pick(PRICING_SCOPE_CONTENT.scopedAddons.title)}
            </h3>
            <ul className="mt-5 space-y-3">
              {scopedItems.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed"
                >
                  <span
                    className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#00b399]"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Explicit Exclusions */}
          <div className="rounded-3xl border border-amber-300 bg-amber-50/50 p-6 sm:p-8 shadow-sm">
            <div className="inline-flex items-center gap-2 rounded-lg bg-amber-100 border border-amber-300 px-3 py-1 text-xs font-bold text-amber-900 mb-4">
              <AlertTriangle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              <span>
                {t(
                  'خارج سعر البرمجية الأساسي (500$)',
                  'Not Included in the $500 Software Setup'
                )}
              </span>
            </div>
            <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900 leading-snug">
              {pick(PRICING_SCOPE_CONTENT.explicitExclusions.title)}
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              {pick(PRICING_SCOPE_CONTENT.explicitExclusions.notice)}
            </p>
            <ul className="mt-4 space-y-3">
              {excludedItems.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed"
                >
                  <span
                    className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-amber-500"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
