import React from 'react';
import Link from 'next/link';
import { Briefcase, Building2, Globe } from 'lucide-react';
import { getDictionary } from '@/lib/i18n';
import { BRAND_NAME, NAV_LINKS, PARENT_BRAND } from '@/content/aqar-content';
import { TrackedLink } from '@/components/common/TrackedLink';
import { MobileNavDrawer } from './MobileNavDrawer';
import { Language } from '@/types';

export function AqarLandingHeader({ lang = 'ar' }: { lang?: Language }) {
  const { t, pick } = getDictionary(lang);
  const otherLang = lang === 'ar' ? 'en' : 'ar';
  const switchHref = `/${otherLang}`;

  return (
    <div className="sticky top-0 z-50 w-full shadow-xs">
      {/* Main Crisp White Navigation */}
      <header className="w-full bg-white/95 backdrop-blur-md border-b border-slate-200">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:start-3 focus:z-[60] focus:px-4 focus:py-2.5 focus:rounded-full focus:bg-[#00b399] focus:text-white focus:font-semibold"
        >
          {t('تخطي إلى المحتوى الرئيسي', 'Skip to main content')}
        </a>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between gap-4">
            {/* Brand Logo - Clean Style */}
            <div className="flex items-center gap-3">
              <Link
                href={`/${lang}`}
                className="group flex items-center gap-3 rounded-2xl py-1.5 pe-2 focus:outline-none"
                aria-label={t('نوڤيكسا عقار — الصفحة الرئيسية', 'Novixa Aqar — Home')}
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#00b399]/20 to-[#008f7a]/10 border border-[#00b399]/40 shadow-sm group-hover:border-[#00b399] transition-all">
                  <Building2 className="h-6 w-6 text-[#008f7a]" aria-hidden="true" />
                </div>
                <div className="flex flex-col min-w-0">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <span className="font-display text-lg sm:text-xl font-extrabold tracking-tight text-slate-900 whitespace-nowrap">
                      {pick(BRAND_NAME)}
                    </span>
                  </div>
                  <span className="hidden sm:block text-xs text-slate-500 truncate">
                    {pick(PARENT_BRAND)}
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <nav
              aria-label={t('التنقل الرئيسي', 'Primary Navigation')}
              className="hidden xl:flex items-center gap-1"
            >
              {NAV_LINKS.map((item) => (
                <a
                  key={item.href}
                  href={`/${lang}${item.href}`}
                  className="whitespace-nowrap rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 hover:text-[#008f7a] hover:bg-slate-100 transition-all"
                >
                  {pick(item.label)}
                </a>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-3 shrink-0">
              <TrackedLink
                href={switchHref}
                eventName="aqar_language_switch"
                eventParams={{ to: otherLang }}
                className="whitespace-nowrap inline-flex min-h-10 items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1.5 text-xs font-semibold text-slate-700 hover:border-[#00b399] hover:text-[#008f7a] transition-colors"
                aria-label={
                  lang === 'ar'
                    ? 'Switch language to English'
                    : 'تغيير اللغة إلى العربية'
                }
              >
                <Globe className="h-3.5 w-3.5 text-[#00b399] shrink-0" aria-hidden="true" />
                <span>{lang === 'ar' ? 'English' : 'العربية'}</span>
              </TrackedLink>

              <TrackedLink
                href={`/${lang}#demo-form`}
                eventName="aqar_cta_click"
                eventParams={{
                  source: 'header',
                  target: 'demo_form',
                }}
                className="whitespace-nowrap inline-flex min-h-10 items-center gap-2 rounded-full btn-brand-teal px-5 py-2 text-xs sm:text-sm font-bold text-white shadow-md transition-transform"
              >
                <Briefcase className="h-4 w-4 shrink-0 text-white/90" aria-hidden="true" />
                <span>{t('طلب استشارة وعرض حي', 'Request Live Demo')}</span>
              </TrackedLink>
            </div>

            {/* Mobile Navigation Drawer Island */}
            <MobileNavDrawer
              lang={lang}
              navLinks={NAV_LINKS}
              switchHref={switchHref}
              otherLangLabel={lang === 'ar' ? 'EN' : 'عربي'}
              requestDemoText={t('طلب استشارة وعرض حي', 'Request Live Demo')}
              exploreDemoText={t('استعرض النسخة التجريبية الحية', 'Explore Live Demo')}
            />
          </div>
        </div>
      </header>
    </div>
  );
}
