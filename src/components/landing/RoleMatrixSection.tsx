'use client';

import React, { useState } from 'react';
import { CheckCircle2, Shield, Users } from 'lucide-react';
import { getDictionary } from '@/lib/i18n';
import { ROLE_MATRIX_ITEMS } from '@/content/aqar-content';
import { Language } from '@/types';

export function RoleMatrixSection({ lang = 'ar' }: { lang?: Language }) {
  const { t, pick } = getDictionary(lang);
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const filteredRoles = activeFilter
    ? ROLE_MATRIX_ITEMS.filter((role) => role.roleKey === activeFilter)
    : ROLE_MATRIX_ITEMS;

  return (
    <section
      id="roles"
      aria-labelledby="roles-heading"
      className="py-16 sm:py-24 border-b border-slate-200 bg-white"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="roles-heading"
            className="font-display text-2xl sm:text-4xl lg:text-4xl font-black text-slate-900 leading-tight"
          >
            {t(
              '8 لوحات تشغيل مستقلة — كل طرف يرى ويدير ما يخصه فقط',
              '8 Purpose-Built Role Panels — Every Stakeholder Gets the Right Workspace'
            )}
          </h2>
        </div>

        {/* Role Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8 mb-10">
          <button
            type="button"
            onClick={() => setActiveFilter(null)}
            className={`rounded-full px-4 py-1.5 text-xs font-bold transition-all ${
              activeFilter === null
                ? 'bg-[#008f7a] text-white'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {t('8', '8')} {t('أدوار', 'Roles')}
          </button>
          {ROLE_MATRIX_ITEMS.map((role) => (
            <button
              key={role.roleKey}
              type="button"
              onClick={() => setActiveFilter(role.roleKey)}
              className={`rounded-full px-4 py-1.5 text-xs font-bold transition-all ${
                activeFilter === role.roleKey
                  ? 'bg-[#008f7a] text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {pick(role.name)}
            </button>
          ))}
        </div>

        {/* Role Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredRoles.map((role) => {
            const workflows =
              lang === 'ar' ? role.verifiedWorkflows.ar : role.verifiedWorkflows.en;

            return (
              <article
                key={role.id}
                className="group rounded-3xl border border-slate-200 bg-slate-50 hover:bg-white p-5 sm:p-6 flex flex-col justify-between shadow-sm hover:border-[#00b399]/40 hover:shadow-xl transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 rounded-lg bg-[#00b399]/15 border border-[#00b399]/30 px-2.5 py-1 text-xs font-bold text-[#008f7a]">
                      <Shield className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                      <span className="font-latin">{role.roleKey}</span>
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-slate-900 group-hover:text-[#00b399] transition-colors leading-snug">
                    {pick(role.name)}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {pick(role.responsibility)}
                  </p>
                </div>

                <ul className="mt-4 space-y-2 border-t border-slate-200 pt-3.5">
                  {workflows.map((wf, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-xs text-slate-700 leading-relaxed"
                    >
                      <CheckCircle2
                        className="h-3.5 w-3.5 shrink-0 text-[#00b399] mt-0.5"
                        aria-hidden="true"
                      />
                      <span>{wf}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        {/* Public Portal Callout Banner */}
        <div className="mt-8 rounded-3xl border border-[#00b399]/30 bg-slate-50 p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
          <div className="flex items-start gap-3.5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#00b399]/15 border border-[#00b399]/30 text-[#008f7a]">
              <Users className="h-6 w-6" aria-hidden="true" />
            </div>
            <div>
              <h3 className="font-display text-base sm:text-lg font-bold text-slate-900">
                {t(
                  '+ الواجهة التاسعة: البوابة العقارية العامة للجمهور والعملاء',
                  '+ 9th Interface: The Public Property Portal for Visitors & Clients'
                )}
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-slate-600">
                {t(
                  'تعمل جنباً إلى جنب مع لوحات الأدوار الـ 8 لاستقبال الزوار، البحث، المقارنة، حجز المعاينات، وتقديم الطلبات دون الحاجة لتسجيل دخول مسبق.',
                  'Works seamlessly alongside the 8 authenticated role panels so visitors can search, compare, book viewings, and submit requests.'
                )}
              </p>
            </div>
          </div>
          <a
            href="#demo-form"
            className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-full btn-brand-teal px-6 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md"
          >
            {t('اختر الأدوار المناسبة لشركتك', 'Select Roles for Your Company')}
          </a>
        </div>
      </div>
    </section>
  );
}
