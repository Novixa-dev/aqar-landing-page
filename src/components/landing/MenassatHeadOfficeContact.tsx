'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Clock,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  ShieldCheck,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { trackEvent } from '@/lib/analytics';
import { CONTACT_EMAIL } from '@/lib/site';

export function MenassatHeadOfficeContact() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    trackEvent('aqar_lead_submitted', { source: 'headoffice_section' });
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 4000);
  };

  return (
    <section className="py-16 sm:py-24 border-b border-slate-200 bg-white relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left/Col 1: Map & Head Office Card */}
          <div className="lg:col-span-7 rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8 flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#00b399]/15 text-[#008f7a]">
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                </span>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900">
                  {t('المقر الرئيسي وساعات العمل', 'Head Office & Working Hours')}
                </h3>
              </div>

              {/* Styled Address Box */}
              <div className="rounded-2xl bg-white p-5 border border-slate-200 space-y-4 text-sm text-slate-700 shadow-2xs">
                <div>
                  <strong className="block text-slate-900 font-bold mb-1">
                    {t('المملكة العربية السعودية — الرياض:', 'Kingdom of Saudi Arabia — Riyadh:')}
                  </strong>
                  <p className="text-slate-600 leading-relaxed">
                    {t(
                      'طريق عمر بن عبدالعزيز، شارع المؤرخ بن بشر، حي الربوة، الرياض 12816، المملكة العربية السعودية.',
                      'Omar Bin Abdulaziz Rd, Al-Rabwah District, Riyadh 12816, Saudi Arabia.'
                    )}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-slate-100">
                  <div className="flex items-center gap-2.5">
                    <Phone className="h-4 w-4 text-[#008f7a] shrink-0" aria-hidden="true" />
                    <div>
                      <span className="block text-[11px] text-slate-400">{t('الرقم الموحد:', 'Toll-Free:')}</span>
                      <a href="tel:920010094" className="font-bold text-slate-900 hover:text-[#008f7a]" dir="ltr">
                        920010094
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <MessageSquare className="h-4 w-4 text-[#008f7a] shrink-0" aria-hidden="true" />
                    <div>
                      <span className="block text-[11px] text-slate-400">{t('واتساب الإدارة:', 'WhatsApp:')}</span>
                      <a href="https://wa.me/966508404422" target="_blank" rel="noopener noreferrer" className="font-bold text-slate-900 hover:text-[#008f7a]" dir="ltr">
                        +966 50 840 4422
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 pt-2">
                  <Mail className="h-4 w-4 text-[#008f7a] shrink-0" aria-hidden="true" />
                  <a href={`mailto:${CONTACT_EMAIL}`} className="text-slate-700 hover:text-[#008f7a] font-medium" dir="ltr">
                    {CONTACT_EMAIL}
                  </a>
                </div>
              </div>

              {/* Working Hours */}
              <div className="mt-5 rounded-2xl bg-white p-5 border border-slate-200 text-sm shadow-2xs">
                <div className="flex items-center gap-2 text-slate-900 font-bold mb-2">
                  <Clock className="h-4 w-4 text-[#008f7a]" aria-hidden="true" />
                  <span>{t('ساعات العمل الرسمية:', 'Official Working Hours:')}</span>
                </div>
                <div className="text-slate-600 space-y-1 text-xs sm:text-sm font-medium">
                  <div className="flex justify-between">
                    <span>{t('الأحد — الخميس:', 'Sunday — Thursday:')}</span>
                    <span className="font-bold text-[#008f7a]">08:30 ص — 04:30 م</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>{t('الجمعة — السبت:', 'Friday — Saturday:')}</span>
                    <span>{t('مغلق', 'Closed')}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Live Headquarters Architectural Visual */}
            <div className="mt-6 rounded-2xl overflow-hidden h-48 border border-slate-200 relative bg-slate-900 flex items-center justify-center text-center p-4 group shadow-sm">
              <Image
                src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=1000&q=80"
                alt={t('المقر الرئيسي لمنصة عقار — الرياض', 'Real Estate Platform Head Office — Riyadh')}
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
              <div className="relative z-10 flex flex-col items-center gap-1.5">
                <div className="h-10 w-10 rounded-full bg-[#00b399] text-white flex items-center justify-center shadow-xl shadow-[#00b399]/50 animate-bounce ring-4 ring-[#00b399]/30">
                  <MapPin className="h-5 w-5" />
                </div>
                <span className="text-sm font-extrabold text-white drop-shadow-md">
                  {t('مقر المنصة العقارية — الرياض', 'Platform Head Office — Riyadh')}
                </span>
                <span className="text-xs text-[#00b399] font-bold bg-slate-950/80 px-2.5 py-0.5 rounded-full border border-white/10 font-latin" dir="ltr">
                  24.6866° N, 46.7460° E
                </span>
              </div>
            </div>
          </div>

          {/* Right/Col 2: Quick Contact Form */}
          <div className="lg:col-span-5 rounded-3xl border-2 border-[#00b399]/40 bg-white p-6 sm:p-8 flex flex-col justify-between shadow-xl shadow-[#00b399]/5">
            <div>
              <h3 className="font-display text-2xl font-bold text-slate-900">
                {t('ابق على تواصل دائم معنا', 'Stay in Touch With Us')}
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm text-slate-600">
                {t(
                  'أرسل استفسارك وسيقوم مستشارنا العقاري والتقني بالرد عليك خلال ساعات العمل.',
                  'Send your request and our real-estate consultant will respond shortly.'
                )}
              </p>

              {submitted ? (
                <div className="mt-6 rounded-2xl bg-teal-50 border border-teal-300 p-5 text-center text-[#008f7a]">
                  <ShieldCheck className="h-8 w-8 mx-auto text-[#00b399] mb-2" />
                  <p className="font-bold text-sm">
                    {t('تم استلام رسالتك بنجاح!', 'Your message has been received!')}
                  </p>
                  <p className="text-xs text-[#008f7a] mt-1">
                    {t('سيتواصل معك فريقنا في أقرب وقت.', 'Our team will contact you shortly.')}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-3.5">
                  <div>
                    <label htmlFor="ho-name" className="sr-only">
                      {t('الاسم', 'Name')}
                    </label>
                    <input
                      id="ho-name"
                      type="text"
                      required
                      placeholder={t('الاسم الكامل *', 'Full Name *')}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-2.5 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#00b399] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="ho-email" className="sr-only">
                      {t('البريد الإلكتروني', 'Email')}
                    </label>
                    <input
                      id="ho-email"
                      type="email"
                      required
                      placeholder={t('البريد الإلكتروني *', 'Email Address *')}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-2.5 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#00b399] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="ho-phone" className="sr-only">
                      {t('رقم الجوال', 'Mobile Number')}
                    </label>
                    <input
                      id="ho-phone"
                      type="tel"
                      required
                      placeholder={t('رقم الجوال (+966) *', 'Phone Number (+966) *')}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-2.5 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#00b399] focus:outline-none font-latin"
                      dir="ltr"
                    />
                  </div>

                  <div>
                    <label htmlFor="ho-msg" className="sr-only">
                      {t('الرسالة', 'Message')}
                    </label>
                    <textarea
                      id="ho-msg"
                      rows={4}
                      required
                      placeholder={t('ما الذي تبحث عنه؟ (مثال: طلب منصة عقارية، فيلا للبيع...)', 'What are you looking for? (e.g. platform setup, villa for sale...)')}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-2.5 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#00b399] focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full min-h-11 flex items-center justify-center gap-2 rounded-full btn-menassat-teal text-xs sm:text-sm font-bold text-white shadow-lg shadow-[#00b399]/25 hover:scale-[1.01] transition-transform"
                  >
                    <Send className="h-4 w-4" aria-hidden="true" />
                    <span>{t('إرسال الاستفسار', 'Submit Inquiry')}</span>
                  </button>
                </form>
              )}
            </div>

            <div className="mt-4 pt-4 border-t border-slate-100 text-[11px] text-slate-500 text-center">
              {t('بياناتك مشفرة ومحمية وفق سياسة الخصوصية.', 'Your information is encrypted & protected.')}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
