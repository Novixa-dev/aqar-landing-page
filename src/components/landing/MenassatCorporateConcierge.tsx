'use client';

import React, { useEffect, useState } from 'react';
import {
  ArrowUp,
  Building2,
  Calendar,
  CheckCircle2,
  Clock,
  Headphones,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  PhoneCall,
  ShieldCheck,
  UserCheck,
  X,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { EXTERNAL_ROUTES } from '@/lib/site';

export function MenassatCorporateConcierge() {
  const { lang, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [showGoTop, setShowGoTop] = useState(false);

  // Show subtle greeting hint after delay, hide after 12 seconds
  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }
    const hintTimer = setTimeout(() => setShowHint(true), 5000);
    const hideTimer = setTimeout(() => setShowHint(false), 17000);
    return () => {
      clearTimeout(hintTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  // Monitor scroll for Go To Top button
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 400) {
        setShowGoTop(true);
      } else {
        setShowGoTop(false);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Scroll to Top Circular Button */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label={t('العودة لأعلى الصفحة', 'Back to top')}
        className={`fixed start-6 bottom-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-white text-slate-800 shadow-xl border border-slate-200 transition-all duration-300 hover:bg-slate-50 hover:text-[#008f7a] hover:border-[#00b399] ${
          showGoTop
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <ArrowUp className="h-5 w-5" aria-hidden="true" />
      </button>

      {/* Floating Corporate Consultation Dialog */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="concierge-dialog-title"
          className="fixed end-6 bottom-24 z-50 w-[92vw] sm:w-[400px] rounded-3xl border border-slate-200 bg-white shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-300"
        >
          {/* Header - Human Corporate Desk */}
          <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-5 text-white flex items-center justify-between border-b border-slate-700">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#00b399]/20 border border-[#00b399]/40 text-[#00b399]">
                <Headphones className="h-6 w-6" aria-hidden="true" />
              </div>
              <div>
                <h3
                  id="concierge-dialog-title"
                  className="font-display font-extrabold text-base text-white flex items-center gap-2"
                >
                  <span>{t('مكتب الاستشارات العقارية', 'Corporate Advisory Desk')}</span>
                  <span className="flex h-2 w-2 rounded-full bg-[#00b399] animate-pulse" />
                </h3>
                <p className="text-xs text-slate-300 mt-0.5">
                  {t(
                    'فريق خدمة العملاء والحلول المؤسسية المعتمد',
                    'Certified Advisory & Client Relations Team'
                  )}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label={t('إغلاق نافذة التواصل', 'Close contact modal')}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white/80 hover:bg-white/20 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Corporate Representative Card */}
          <div className="p-5 border-b border-slate-100 bg-slate-50">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal-100 text-[#008f7a] font-bold text-sm">
                <UserCheck className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">
                  {t('فريق نوفكسا للحلول العقارية', 'Novixa PropTech Team')}
                </div>
                <div className="text-[11px] text-slate-500 flex items-center gap-1.5 mt-0.5">
                  <ShieldCheck className="h-3.5 w-3.5 text-[#00b399]" />
                  <span>{t('مزوّد تقني — لسنا وسيطاً عقارياً', 'Technology provider — not a brokerage')}</span>
                </div>
              </div>
            </div>

            <p className="mt-3 text-xs text-slate-600 leading-relaxed">
              {t(
                'يسعدنا الرد على استفساراتكم حول إطلاق المنظومة العقارية لشركتكم، مصفوفة الأدوار، أو جدولة عرض توضيحي حي.',
                'We are pleased to answer inquiries about platform deployment, role permissions, or scheduling a live executive demonstration.'
              )}
            </p>
          </div>

          {/* Direct Communication Channels */}
          <div className="p-5 space-y-2.5">
            {/* WhatsApp Direct */}
            <a
              href="#demo-form"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between p-3.5 rounded-2xl border border-emerald-200 bg-emerald-50/70 hover:bg-emerald-100/70 text-emerald-950 transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-white">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-emerald-950">
                    {t('محادثة واتساب مباشرة', 'Direct WhatsApp')}
                  </div>
                  <div className="text-[11px] text-emerald-700">
                  {t('تواصل مع فريق نوفكسا', 'Talk to the Novixa team')}
                </div>
                </div>
              </div>
              <span className="text-xs font-bold text-emerald-700 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform">
                →
              </span>
            </a>

            {/* Direct Phone Call */}
            <a
              href="mailto:info@novixa.dev"
              className="flex items-center justify-between p-3.5 rounded-2xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#00b399] text-white">
                  <PhoneCall className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">
                    {t('البريد الإلكتروني', 'Email')}
                  </div>
                  <div className="text-[11px] text-slate-500 font-latin" dir="ltr">
                    info@novixa.dev
                  </div>
                </div>
              </div>
              <span className="text-xs font-bold text-[#008f7a] group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform">
                →
              </span>
            </a>

            {/* Schedule Live Presentation */}
            <a
              href="#demo-form"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between p-3.5 rounded-2xl border border-teal-200 bg-teal-50/50 hover:bg-teal-100/60 text-slate-800 transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-white">
                  <Calendar className="h-5 w-5 text-teal-400" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">
                    {t('حجز جلسة استشارية وعرض حي', 'Book Live Consultation')}
                  </div>
                  <div className="text-[11px] text-slate-500">
                    {t('استعراض لوحات التحكم مع فريقنا', 'Walk through workspaces with our team')}
                  </div>
                </div>
              </div>
              <span className="text-xs font-bold text-[#008f7a] group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform">
                →
              </span>
            </a>
          </div>

          {/* Footer - Working Hours & Location */}
          <div className="p-4 bg-slate-100 border-t border-slate-200 text-[11px] text-slate-600 flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-slate-500" />
              <span>{t('أوقات العمل: 8:00 ص - 10:00 م', 'Hours: 8:00 AM - 10:00 PM')}</span>
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5 text-[#00b399]" />
              <span>{t('الرياض، المملكة', 'Riyadh, KSA')}</span>
            </span>
          </div>
        </div>
      )}

      {/* Floating Welcome Speech Bubble Hint */}
      {showHint && !isOpen && (
        <div className="fixed end-24 bottom-6 z-40 hidden sm:flex items-center gap-3 rounded-2xl bg-slate-900 text-white px-4 py-2.5 shadow-xl border border-slate-700 animate-in fade-in slide-in-from-end-4 duration-300">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#00b399]/20 text-[#00b399]">
            <Headphones className="h-4 w-4" />
          </div>
          <div className="text-xs">
            <span className="font-bold block text-white">
              {t('مكتب الاستشارات العقارية', 'Corporate Advisory')}
            </span>
            <span className="text-slate-300 text-[11px]">
              {t('تفضل بالتواصل معنا مباشرة لأي استفسار', 'Connect directly with our advisory desk')}
            </span>
          </div>
          <button
            type="button"
            onClick={() => setShowHint(false)}
            aria-label={t('إغلاق التنبيه', 'Dismiss hint')}
            className="ms-1 text-slate-400 hover:text-white"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
      )}

      {/* Main Floating Corporate Contact Button */}
      <div className="fixed end-6 bottom-6 z-40">
        <button
          type="button"
          onClick={() => {
            setIsOpen(!isOpen);
            setShowHint(false);
          }}
          aria-label={t('فتح مكتب الاستشارات العقارية', 'Open Corporate Advisory')}
          className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#00b399] text-white shadow-2xl hover:bg-[#008f7a] hover:scale-105 transition-all duration-300 ring-4 ring-white/80"
        >
          {isOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Headphones className="h-6 w-6" aria-hidden="true" />
          )}

          {/* Pulse notification dot */}
          <span className="absolute top-0 end-0 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-300 opacity-75" />
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-white border-2 border-[#00b399]" />
          </span>
        </button>
      </div>
    </>
  );
}
