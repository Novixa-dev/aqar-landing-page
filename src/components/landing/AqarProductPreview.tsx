'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  CheckCircle2,
  ExternalLink,
  Globe2,
  Layers,
  LayoutGrid,
  ShieldCheck,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { PRODUCT_PREVIEW_FACTS } from '@/content/aqar-content';
import { EXTERNAL_ROUTES } from '@/lib/site';
import { trackEvent } from '@/lib/analytics';

const TAB_ICONS = [LayoutGrid, ShieldCheck, Layers, Globe2];

export function AqarProductPreview() {
  const { t, pick } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const activeFact = PRODUCT_PREVIEW_FACTS[activeIndex] ?? PRODUCT_PREVIEW_FACTS[0];

  return (
    <div className="relative mx-auto max-w-6xl">
      {/* System Frame */}
      <div className="rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-300/40 overflow-hidden">
        {/* Browser Top Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 bg-slate-100/90 px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-rose-500/80" aria-hidden="true" />
            <span className="h-3 w-3 rounded-full bg-amber-400/80" aria-hidden="true" />
            <span className="h-3 w-3 rounded-full bg-emerald-400/80" aria-hidden="true" />
            <span className="ms-2 text-xs font-bold text-slate-700">
              {t('معاينة حية لنظام نوڤيكسا عقار', 'Novixa Aqar Live System Preview')}
            </span>
          </div>

          <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-1 text-xs text-slate-700 font-latin" dir="ltr">
            <span className="h-2 w-2 rounded-full bg-[#00b399]" aria-hidden="true" />
            <span>aqar-demo2.novixa.dev</span>
          </div>

          <a
            href={EXTERNAL_ROUTES.primaryDemo}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              trackEvent('aqar_demo_click', {
                source: 'product_preview_frame',
                demo_id: 'primary_generic',
              })
            }
            className="inline-flex items-center gap-1.5 rounded-lg bg-[#00b399]/10 border border-[#00b399]/30 px-3 py-1.5 text-xs font-bold text-[#008f7a] hover:bg-[#00b399] hover:text-white transition-colors"
          >
            <span>{t('فتح النسخة التفاعلية', 'Open Interactive Demo')}</span>
            <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>

        {/* Authentic Product Screenshot + Overlay Architecture Callouts */}
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="relative lg:col-span-8 bg-slate-50 p-3 sm:p-5 border-b lg:border-b-0 lg:border-e border-slate-200">
            <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
              <Image
                src="/images/aqar-portal-screenshot.png"
                alt={t(
                  'لقطة شاشة حقيقية لبوابة نوڤيكسا عقار تعرض الواجهة العقارية والبحث والعروض',
                  'Authentic screenshot of the Novixa Aqar property portal interface showing search and property listings'
                )}
                width={1280}
                height={800}
                priority
                fetchPriority="high"
                sizes="(max-width: 1024px) 100vw, 800px"
                className="w-full h-auto object-cover object-top"
              />
              <div className="flex flex-wrap items-center justify-between gap-2 border-t border-slate-200 bg-slate-50 px-3.5 py-2.5 text-xs text-slate-700">
                <span className="inline-flex items-center gap-1.5 text-[#008f7a] font-bold">
                  <CheckCircle2 className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  {t(
                    'لقطة حقيقية من النظام الفعلي (بيانات العقارات المعروضة تجريبية للعرض فقط)',
                    'Authentic system screenshot (displayed property listings are sample demo data)'
                  )}
                </span>
                <span className="font-latin text-slate-500 font-semibold" dir="ltr">
                  Laravel 13 + Filament 5
                </span>
              </div>
            </div>
          </div>

          {/* Right/End Column: Interactive System Architecture Inspector */}
          <div className="lg:col-span-4 flex flex-col justify-between p-4 sm:p-6 bg-white">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#008f7a] mb-2">
                {t('مكونات المنصة المتكاملة', 'Verified Platform Architecture')}
              </div>
              <h2 className="font-display text-lg font-bold text-slate-900 leading-snug mb-4">
                {t(
                  'نظام واحد يربط العميل، المسوّق، المالك، والمستأجر',
                  'One System Connecting Clients, Agents, Landlords & Tenants'
                )}
              </h2>

              <div
                role="tablist"
                aria-label={t('جوانب النظام', 'System Highlights')}
                className="flex flex-col gap-2"
              >
                {PRODUCT_PREVIEW_FACTS.map((fact, idx) => {
                  const Icon = TAB_ICONS[idx % TAB_ICONS.length];
                  const isSelected = idx === activeIndex;
                  return (
                    <button
                      key={fact.id}
                      type="button"
                      role="tab"
                      id={`preview-tab-${fact.id}`}
                      aria-selected={isSelected}
                      aria-controls={`preview-panel-${fact.id}`}
                      onClick={() => setActiveIndex(idx)}
                      className={`w-full text-start rounded-xl p-3 transition-colors border ${
                        isSelected
                          ? 'bg-[#00b399]/10 border-[#00b399] text-slate-900 shadow-xs'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-[#00b399] hover:bg-slate-100'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-semibold text-slate-500">
                          {pick(fact.label)}
                        </span>
                        <Icon
                          className={`h-4 w-4 shrink-0 ${
                            isSelected ? 'text-[#008f7a]' : 'text-slate-400'
                          }`}
                          aria-hidden="true"
                        />
                      </div>
                      <div className="mt-1 text-sm font-bold text-slate-900">
                        {pick(fact.value)}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div
              id={`preview-panel-${activeFact.id}`}
              role="tabpanel"
              aria-labelledby={`preview-tab-${activeFact.id}`}
              className="mt-4 rounded-xl border border-[#00b399]/30 bg-teal-50/40 p-3.5"
            >
              <p className="text-xs leading-relaxed text-slate-700">
                {pick(activeFact.detail)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
