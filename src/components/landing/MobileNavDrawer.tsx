'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Briefcase, ExternalLink, Globe, Menu, X } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';
import { EXTERNAL_ROUTES } from '@/lib/site';
import { Language, LocalizedText } from '@/types';

interface NavLinkItem {
  href: string;
  label: LocalizedText;
}

interface MobileNavDrawerProps {
  lang: Language;
  navLinks: NavLinkItem[];
  switchHref: string;
  otherLangLabel: string;
  requestDemoText: string;
  exploreDemoText: string;
}

export function MobileNavDrawer({
  lang,
  navLinks,
  switchHref,
  otherLangLabel,
  requestDemoText,
  exploreDemoText,
}: MobileNavDrawerProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const otherLang = lang === 'ar' ? 'en' : 'ar';

  return (
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
        <span>{otherLangLabel}</span>
      </Link>

      <button
        type="button"
        onClick={() => setMobileMenuOpen((prev) => !prev)}
        aria-expanded={mobileMenuOpen}
        aria-controls="mobile-navigation-drawer"
        aria-label={
          mobileMenuOpen
            ? (lang === 'ar' ? 'إغلاق القائمة' : 'Close navigation menu')
            : (lang === 'ar' ? 'فتح القائمة' : 'Open navigation menu')
        }
        className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-100 text-slate-700 hover:text-[#008f7a]"
      >
        {mobileMenuOpen ? (
          <X className="h-5 w-5" aria-hidden="true" />
        ) : (
          <Menu className="h-5 w-5" aria-hidden="true" />
        )}
      </button>

      {/* Drawer Dropdown */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="absolute top-full start-0 end-0 border-t border-slate-200 bg-white px-4 pt-3 pb-6 shadow-xl"
        >
          <nav
            aria-label={lang === 'ar' ? 'قائمة الجوال' : 'Mobile Navigation'}
            className="flex flex-col gap-1"
          >
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={`/${lang}${item.href}`}
                onClick={() => setMobileMenuOpen(false)}
                className="flex min-h-11 items-center rounded-xl px-3.5 py-2.5 text-sm font-semibold text-slate-800 hover:bg-slate-100 hover:text-[#008f7a]"
              >
                {lang === 'ar' ? item.label.ar : item.label.en}
              </a>
            ))}
          </nav>

          <div className="mt-4 flex flex-col gap-2.5 border-t border-slate-200 pt-4">
            <a
              href={`/${lang}#demo-form`}
              onClick={() => {
                setMobileMenuOpen(false);
                trackEvent('aqar_cta_click', {
                  source: 'mobile_drawer',
                  target: 'demo_form',
                });
              }}
              className="flex min-h-11 w-full items-center justify-center gap-2 rounded-full btn-brand-teal px-4 py-3 text-sm font-bold text-white shadow-md"
            >
              <Briefcase className="h-4 w-4" aria-hidden="true" />
              <span>{requestDemoText}</span>
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
              <span>{exploreDemoText}</span>
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
