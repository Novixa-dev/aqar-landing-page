'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Briefcase, Building2, ExternalLink, Globe, Menu, X } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { BRAND_NAME, NAV_LINKS, PARENT_BRAND } from '@/content/aqar-content';
import { EXTERNAL_ROUTES } from '@/lib/site';
import { trackEvent } from '@/lib/analytics';

export function AqarLandingHeader() {
  const { lang, t, pick } = useLanguage();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const otherLang = lang === 'ar' ? 'en' : 'ar';
  const switchHref = pathname
    ? pathname.replace(/^\/(ar|en)(?=\/|$)/, `/${otherLang}`)
    : `/${otherLang}`;

  const isHomePage = pathname === `/${lang}` || pathname === `/${lang}/`;
  const resolveAnchor = (hash: string) => (isHomePage ? hash : `/${lang}${hash}`);

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
            {/* Brand Logo - Menassat Clean Style */}
            <div className="flex items-center gap-3">
              <Link
                href={`/${lang}`}
                className="group flex items-center gap-3 rounded-2xl py-1.5 pe-2 focus:outline-none"
                aria-label={t('نوفكسا عقار — الصفحة الرئيسية', 'Novixa Aqar — Home')}
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
                  href={resolveAnchor(item.href)}
                  className="whitespace-nowrap rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 hover:text-[#008f7a] hover:bg-slate-100 transition-all"
                >
                  {pick(item.label)}
                </a>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-3 shrink-0">
              <Link
                href={switchHref}
                onClick={() => trackEvent('aqar_language_switch', { to: otherLang })}
                className="whitespace-nowrap inline-flex min-h-10 items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1.5 text-xs font-semibold text-slate-700 hover:border-[#00b399] hover:text-[#008f7a] transition-colors"
                aria-label={
                  lang === 'ar'
                    ? 'Switch language to English'
                    : 'تغيير اللغة إلى العربية'
                }
              >
                <Globe className="h-3.5 w-3.5 text-[#00b399] shrink-0" aria-hidden="true" />
                <span>{lang === 'ar' ? 'English' : 'العربية'}</span>
              </Link>

              <a
                href={resolveAnchor('#demo-form')}
                onClick={() =>
                  trackEvent('aqar_cta_click', {
                    source: 'header',
                    target: 'demo_form',
                  })
                }
                className="whitespace-nowrap inline-flex min-h-10 items-center gap-2 rounded-full btn-menassat-teal px-5 py-2 text-xs sm:text-sm font-bold text-white shadow-md transition-transform"
              >
                <Briefcase className="h-4 w-4 shrink-0 text-white/90" aria-hidden="true" />
                <span>{t('طلب استشارة وعرض حي', 'Request Live Demo')}</span>
              </a>
            </div>

            {/* Mobile Controls */}
            <div className="flex items-center gap-2 md:hidden">
              <Link
                href={switchHref}
                onClick={() => trackEvent('aqar_language_switch', { to: otherLang })}
                className="inline-flex min-h-10 items-center gap-1.5 rounded-full border border-slate-200 bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-700"
                aria-label={
                  lang === 'ar'
                    ? 'Switch language to English'
                    : 'تغيير اللغة إلى العربية'
                }
              >
                <Globe className="h-3.5 w-3.5 text-[#00b399]" aria-hidden="true" />
                <span>{lang === 'ar' ? 'EN' : 'عربي'}</span>
              </Link>

              <button
                type="button"
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-navigation-drawer"
                aria-label={
                  mobileMenuOpen
                    ? t('إغلاق القائمة', 'Close navigation menu')
                    : t('فتح القائمة', 'Open navigation menu')
                }
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-100 text-slate-700 hover:text-[#008f7a]"
              >
                {mobileMenuOpen ? (
                  <X className="h-5 w-5" aria-hidden="true" />
                ) : (
                  <Menu className="h-5 w-5" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div
            id="mobile-navigation-drawer"
            className="border-t border-slate-200 bg-white px-4 pt-3 pb-6 md:hidden shadow-xl"
          >
            <nav
              aria-label={t('قائمة الجوال', 'Mobile Navigation')}
              className="flex flex-col gap-1"
            >
              {NAV_LINKS.map((item) => (
                <a
                  key={item.href}
                  href={resolveAnchor(item.href)}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex min-h-11 items-center rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-800 hover:bg-slate-100 hover:text-[#008f7a]"
                >
                  {pick(item.label)}
                </a>
              ))}
            </nav>

            <div className="mt-4 flex flex-col gap-2.5 border-t border-slate-200 pt-4">
              <a
                href={resolveAnchor('#demo-form')}
                onClick={() => {
                  setMobileMenuOpen(false);
                  trackEvent('aqar_cta_click', {
                    source: 'mobile_drawer',
                    target: 'demo_form',
                  });
                }}
                className="flex min-h-11 w-full items-center justify-center gap-2 rounded-full btn-menassat-teal px-4 py-3 text-sm font-bold text-white shadow-md"
              >
                <Briefcase className="h-4 w-4" aria-hidden="true" />
                <span>{t('طلب استشارة وعرض حي', 'Request Live Demo')}</span>
              </a>

              <a
                href={EXTERNAL_ROUTES.primaryDemo}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  setMobileMenuOpen(false);
                  trackEvent('aqar_demo_click', {
                    source: 'mobile_drawer',
                    demo_id: 'primary_generic',
                  });
                }}
                className="flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-[#00b399]/40 bg-[#00b399]/10 px-4 py-3 text-sm font-bold text-[#008f7a]"
              >
                <span>{t('استعرض النسخة التجريبية الحية', 'Explore Live Demo')}</span>
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
