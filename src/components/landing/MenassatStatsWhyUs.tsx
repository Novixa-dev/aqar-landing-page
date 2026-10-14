'use client';

import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export function MenassatStatsWhyUs() {
  const { t, pick } = useLanguage();
  const [activeTab, setActiveTab] = useState<'why' | 'about'>('why');

  return (
    <section className="py-16 sm:py-24 border-b border-slate-200 bg-[#f8fafc] relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-xl">
          {/* Tab Selector Buttons */}
          <div className="flex border-b border-slate-200 mb-8">
            <button
              type="button"
              onClick={() => setActiveTab('why')}
              className={`pb-4 px-6 text-base sm:text-lg font-bold border-b-2 transition-all ${
                activeTab === 'why'
                  ? 'border-[#00b399] text-[#008f7a]'
                  : 'border-transparent text-slate-500 hover:text-slate-900'
              }`}
            >
              {t('لماذا تختار منصتنا؟', 'Why Choose Our Platform?')}
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('about')}
              className={`pb-4 px-6 text-base sm:text-lg font-bold border-b-2 transition-all ${
                activeTab === 'about'
                  ? 'border-[#00b399] text-[#008f7a]'
                  : 'border-transparent text-slate-500 hover:text-slate-900'
              }`}
            >
              {t('من نحن ورؤيتنا', 'About Us & Vision')}
            </button>
          </div>

          {activeTab === 'why' ? (
            <div>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-4xl">
                {t(
                  'لأننا نقدم حلاً عقارياً متكاملاً بخبرة واحترافية تقنية تجمع البوابة العامة و8 لوحات تشغيل حسب الدور، ونلتزم بتوفير أفضل البنى البرمجية التي تمنح مكتبك أو شركتك السيطرة الكاملة على عروض الملاك، طلبات الباحثين، وعقود الإيجار والصيانة تحت علامتك التجارية دون قيود.',
                  'Because we provide a comprehensive real-estate software solution combining a public discovery portal with 8 dedicated role workspaces. We empower your agency or property management firm with full control over inventory, leads, leases, and maintenance under your own brand.'
                )}
              </p>

              {/* 4 Large Stats Counters */}
              <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-2xs">
                  <span className="font-display text-3xl sm:text-5xl font-black text-[#008f7a] font-latin">
                    99,000+
                  </span>
                  <h4 className="mt-2 text-sm sm:text-base font-bold text-slate-900">
                    {t('تقييمات واستفسارات', 'Valuations & Inquiries')}
                  </h4>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-2xs">
                  <span className="font-display text-3xl sm:text-5xl font-black text-slate-900 font-latin">
                    9,514+
                  </span>
                  <h4 className="mt-2 text-sm sm:text-base font-bold text-slate-900">
                    {t('عقار ووحدة مدارة', 'Properties Managed')}
                  </h4>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-2xs">
                  <span className="font-display text-3xl sm:text-5xl font-black text-[#008f7a] font-latin">
                    2,200+
                  </span>
                  <h4 className="mt-2 text-sm sm:text-base font-bold text-slate-900">
                    {t('عملاء وملاك موثوقون', 'Satisfied Clients')}
                  </h4>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-2xs">
                  <span className="font-display text-3xl sm:text-5xl font-black text-slate-900 font-latin">
                    384+
                  </span>
                  <h4 className="mt-2 text-sm sm:text-base font-bold text-slate-900">
                    {t('مدينة وحي مخدوم', 'Cities & Districts')}
                  </h4>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-4xl">
                {t(
                  'منظومة تقنية عقارية رائدة ترسم للمكاتب والشركات العقارية مستقبلاً تشغيلياً حديثاً وتبني حلولكم على أسس تقنية متينة. نقدم حلولاً مخصصة لاحتياجات نموذج عملك، ونرشدك خلال كل مرحلة من الإطلاق، مع توفير الدعم الفني والمعرفة المتخصصة لضمان نجاح أعمالك.',
                  'A leading PropTech ecosystem shaping a modern operational future for real-estate brokerages and portfolio managers. We build custom solutions tailored to your workflow, guiding you through launch with expert support.'
                )}
              </p>

              {/* Checklist Grid */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { ar: 'ضمان كامل 100% على جودة الأداء', en: '100% Performance Guarantee' },
                  { ar: 'جديرون بالثقة والتزام تعاقدي كامل', en: 'Trusted with verified contractual scope' },
                  { ar: 'بوابة متقدمة وسريعة متوافقة مع محركات البحث', en: 'Fast SEO-optimized public portal' },
                  { ar: 'تخصيص الهوية والاسم التجاري بالكامل', en: 'Full white-label branding configuration' },
                  { ar: '8 لوحات تحكم مستقلة تعزل الصلاحيات', en: '8 isolated role workspaces' },
                  { ar: 'دعم فني وتواصل مستمر عبر القنوات الرسمية', en: 'Continuous technical support' },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 rounded-xl border border-slate-200 bg-slate-50 p-3.5 text-sm font-semibold text-slate-800"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[#00b399]" aria-hidden="true" />
                    <span>{pick(item)}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
