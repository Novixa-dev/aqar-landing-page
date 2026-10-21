import React from 'react';
import Link from 'next/link';
import {
  Building2,
  ExternalLink,
  Globe,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react';
import { getDictionary } from '@/lib/i18n';
import { BRAND_NAME, DEMO_OPTIONS, NAV_LINKS, PARENT_BRAND } from '@/content/aqar-content';
import { CONTACT_EMAIL } from '@/lib/site';
import { Language } from '@/types';

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
                'نوفكسا عقار نظام برمجي متكامل قابل للتخصيص، يربط البوابة العامة ولوحات التشغيل متعددة الأدوار لتمكين المكاتب العقارية وشركات إدارة الأملاك من تنظيم عملها تحت هويتها الخاصة.',
                'Novixa Aqar is a configurable B2B PropTech platform combining a branded public property portal with 8 role-based workspaces to help agencies and property managers streamline their operations.'
              )}
            </p>

            {/* Quick Contact Points */}
            <div className="space-y-2 pt-2 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 text-[#00b399] shrink-0" aria-hidden="true" />
                <a href={`/${lang}#demo-form`} className="font-bold text-slate-900 hover:text-[#008f7a]">
                  {t('تواصل مع فريق نوفكسا', 'Contact the Novixa team')}
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
                <span>{t('اليمن • المملكة العربية السعودية • الخليج العربي', 'Yemen • Saudi Arabia • Gulf region')}</span>
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

        {/* Bottom Copyright & Scope Reminder (Preserved Exactly for Tests) */}
        <div className="mt-8 border-t border-slate-200 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Novixa (نوفكسا).{' '}
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
