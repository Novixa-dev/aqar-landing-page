import React from 'react';
import Link from 'next/link';
import {
  Award,
  Building2,
  ExternalLink,
  Globe,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
} from 'lucide-react';
import { getDictionary } from '@/lib/i18n';
import { BRAND_NAME, DEMO_OPTIONS, NAV_LINKS, PARENT_BRAND } from '@/content/aqar-content';
import { CONTACT_EMAIL } from '@/lib/site';
import { Language } from '@/types';

const FAL_LICENSES = [
  {
    title: { ar: 'رخصة فال للوساطة والتسويق', en: 'Fal Brokerage & Marketing' },
    num: '1200014094',
  },
  {
    title: { ar: 'رخصة فال لإدارة الأملاك', en: 'Fal Property Management' },
    num: '2200003259',
  },
  {
    title: { ar: 'رخصة فال للمزادات العقارية', en: 'Fal Real-Estate Auctions' },
    num: '4200000136',
  },
  {
    title: { ar: 'رخصة فال لإدارة المرافق', en: 'Fal Facility Management' },
    num: '3200000617',
  },
];

export function AqarLandingFooter({ lang = 'ar' }: { lang?: Language }) {
  const { t, pick } = getDictionary(lang);
  const otherLang = lang === 'ar' ? 'en' : 'ar';

  return (
    <footer className="bg-slate-50 border-t border-slate-200 text-slate-600 relative">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand & Corporate Column (Menassat Style) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white border border-[#00b399]/30 shadow-sm">
                <Building2 className="h-6 w-6 text-[#00b399]" aria-hidden="true" />
              </div>
              <div>
                <div className="font-display text-xl font-bold text-slate-900">
                  {pick(BRAND_NAME)}
                </div>
                <div className="text-xs text-slate-500">{pick(PARENT_BRAND)}</div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-sm">
              {t(
                'في ظل الثورة الهائلة لتكنولوجيا المعلومات والتحول الرقمي العقاري، تقدم المنصة حلولاً متكاملة بأعلى المعايير، تدمج البوابة العامة و8 لوحات تشغيل حسب الدور بهوية شركتك.',
                'Empowering modern real-estate businesses with verified PropTech solutions: combining a branded public property portal with 8 dedicated role-based operational panels.'
              )}
            </p>

            {/* Quick Contact Points */}
            <div className="space-y-2 pt-2 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 text-[#00b399] shrink-0" aria-hidden="true" />
                <a href="tel:920010094" className="font-bold text-slate-900 hover:text-[#008f7a]" dir="ltr">
                  920010094
                </a>
                <span className="text-slate-300">|</span>
                <a
                  href="https://wa.me/966508404422"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#008f7a]"
                  dir="ltr"
                >
                  +966 50 840 4422
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-[#00b399] shrink-0" aria-hidden="true" />
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="font-latin text-[#008f7a] hover:text-[#00b399] underline underline-offset-4"
                  dir="ltr"
                >
                  {CONTACT_EMAIL}
                </a>
              </div>

              <div className="flex items-center gap-2 text-slate-500">
                <MapPin className="h-3.5 w-3.5 text-[#00b399] shrink-0" aria-hidden="true" />
                <span>{t('طريق عمر بن عبدالعزيز، الربوة، الرياض 12816', 'Omar Bin Abdulaziz Rd, Al-Rabwah, Riyadh')}</span>
              </div>
            </div>
          </div>

          {/* Section Links */}
          <div className="lg:col-span-3">
            <h2 className="font-display text-sm font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#00b399]" />
              <span>{t('أقسام الصفحة والخدمات', 'Sections & Services')}</span>
            </h2>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={`/${lang}${link.href}`}
                    className="text-slate-600 hover:text-[#008f7a] transition-colors"
                  >
                    {pick(link.label)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Live Demo Links */}
          <div className="lg:col-span-3">
            <h2 className="font-display text-sm font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#00b399]" />
              <span>{t('النسخ التجريبية الحية', 'Live Demo Environments')}</span>
            </h2>
            <ul className="space-y-3 text-xs sm:text-sm">
              {DEMO_OPTIONS.map((demo) => (
                <li key={demo.id}>
                  <a
                    href={demo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-slate-600 hover:text-[#008f7a] transition-colors"
                  >
                    <span>{pick(demo.badge)}</span>
                    <ExternalLink className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Locale */}
          <div className="lg:col-span-2">
            <h2 className="font-display text-sm font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#00b399]" />
              <span>{t('روابط قانونية واللغة', 'Legal & Locale')}</span>
            </h2>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link
                  href={`/${lang}/legal/privacy`}
                  className="text-slate-600 hover:text-[#008f7a] transition-colors"
                >
                  {t('سياسة الخصوصية', 'Privacy Policy')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${lang}/legal/terms`}
                  className="text-slate-600 hover:text-[#008f7a] transition-colors"
                >
                  {t('شروط الاستخدام والنطاق', 'Terms & Scope')}
                </Link>
              </li>
              <li className="pt-2">
                <Link
                  href={`/${otherLang}`}
                  className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-[#008f7a] hover:border-[#00b399] shadow-xs"
                >
                  <Globe className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>{lang === 'ar' ? 'English Version' : 'النسخة العربية'}</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Menassat Real Estate Authority (فال - Fal) License Badges Row */}
        <div className="mt-12 pt-8 border-t border-slate-200">
          <div className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-4 flex items-center gap-2">
            <Award className="h-4 w-4 text-[#00b399]" aria-hidden="true" />
            <span>{t('تراخيص الهيئة العامة للعقار (فال) والاعتماد القانوني', 'Real Estate Authority (Fal) Licenses & Accreditation')}</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {FAL_LICENSES.map((lic, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 bg-white p-3.5 flex items-center gap-3 shadow-xs hover:border-[#00b399]/40 transition-colors"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#00b399]/15 text-[#008f7a]">
                  <ShieldCheck className="h-5 w-5" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs font-bold text-slate-900 truncate">
                    {pick(lic.title)}
                  </h4>
                  <span className="text-[11px] font-latin font-bold text-[#008f7a] block" dir="ltr">
                    {lic.num}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-4 text-[11px] text-slate-500">
            <span>{t('صفة المعلن: مفوض', 'Advertiser Status: Authorized')}</span>
            <span>•</span>
            <span>{t('رقم المعلن: 4120227', 'Advertiser No: 4120227')}</span>
            <span>•</span>
            <span>{t('ترخيص وكيل البيع: 44020072', 'Sales Agent License: 44020072')}</span>
            <span>•</span>
            <span>{t('الاسم القانوني: شركة منصات العقارية', 'Legal Entity: Menassat Realty Co.')}</span>
          </div>
        </div>

        {/* Bottom Copyright & Scope Reminder (Preserved Exactly for Tests) */}
        <div className="mt-8 border-t border-slate-200 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Novixa (نوفكسا) & Menassat Realty.{' '}
            {t('جميع الحقوق محفوظة.', 'All rights reserved.')}
          </p>
          <p>
            {t(
              'يبدأ تجهيز البرمجية الأساسية من 500$ (لا يشمل الاستضافة أو الخوادم أو النطاق). البيانات في النسخ التجريبية لأغراض العرض فقط.',
              'Baseline software setup starts at $500 USD (hosting, servers & domain excluded). Live demo data is illustrative only.'
            )}
          </p>
        </div>
      </div>
    </footer>
  );
}
