'use client';

import React from 'react';
import { CheckCircle2, Shield, Users } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { ROLE_MATRIX_ITEMS } from '@/content/aqar-content';

export function RoleMatrixSection() {
  const { lang, t, pick } = useLanguage();

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
            className="font-display text-2xl sm:text-4xl font-bold text-slate-900 leading-snug"
          >
            {t(
              '8 لوحات تشغيل مستقلة — كل طرف يرى ويدير ما يخصه فقط',
              '8 Purpose-Built Role Panels — Every Stakeholder Gets the Right Workspace'
            )}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            {t(
              'إلى جانب البوابة العقارية العامة للزوار، يوفّر النظام 8 لوحات Filament مستقلة بصلاحياتها ومساراتها لضمان تنظيم العمل وحماية خصوصية البيانات.',
              'Alongside the public property portal, Novixa Aqar ships with 8 isolated Filament panels so internal teams, property owners, tenants, and contractors each operate in a dedicated environment.'
            )}
          </p>
        </div>

        {/* Role Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {ROLE_MATRIX_ITEMS.map((role) => {
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
            className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-full btn-menassat-teal px-6 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md"
          >
            {t('اختر الأدوار المناسبة لشركتك', 'Select Roles for Your Company')}
          </a>
        </div>
      </div>
    </section>
  );
}
