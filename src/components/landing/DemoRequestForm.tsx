'use client';

import React, { useState } from 'react';
import {
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  Building2,
  Check,
  CheckCircle2,
  Clock,
  Copy,
  ExternalLink,
  Loader2,
  Lock,
  Mail,
  MapPin,
  MessageSquare,
  Send,
  ShieldCheck,
  User,
  Zap,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { FORM_SECTION_CONTENT } from '@/content/aqar-content';
import {
  BusinessTypeOption,
  ContactMethodOption,
  ScopeTierOption,
  validateLeadSubmission,
} from '@/lib/lead-validation';
import { CONTACT_EMAIL, EXTERNAL_ROUTES, WHATSAPP_URL } from '@/lib/site';
import { trackEvent } from '@/lib/analytics';

type FieldErrorMap = Partial<
  Record<
    | 'name'
    | 'companyName'
    | 'businessType'
    | 'contactMethod'
    | 'contactValue'
    | 'cityCountry'
    | 'scopeTier'
    | 'notes',
    string
  >
>;

export function DemoRequestForm() {
  const { lang, t, pick } = useLanguage();

  const [name, setName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [businessType, setBusinessType] = useState<BusinessTypeOption | ''>('');
  const [contactMethod, setContactMethod] = useState<ContactMethodOption>('whatsapp');
  const [contactValue, setContactValue] = useState('');
  const [cityCountry, setCityCountry] = useState('');
  const [scopeTier, setScopeTier] = useState<ScopeTierOption>('baseline_500');
  const [notes, setNotes] = useState('');
  const [honeypot, setHoneypot] = useState('');

  const [fieldErrors, setFieldErrors] = useState<FieldErrorMap>({});
  const [submitState, setSubmitState] = useState<
    'idle' | 'submitting' | 'success' | 'error'
  >('idle');
  const [serverError, setServerError] = useState<string>('');
  const [referenceId, setReferenceId] = useState<string>('');
  const [copiedRef, setCopiedRef] = useState(false);

  const buildMailtoHref = (refId?: string) => {
    const subject = refId
      ? `[Novixa Aqar ${refId}] ${companyName || 'Demo Request'}`
      : `[Novixa Aqar Request] ${companyName || 'Demo & Scope Inquiry'}`;
    const bodyLines = [
      refId ? `Reference ID: ${refId}` : '',
      `Name: ${name}`,
      `Company / Agency: ${companyName}`,
      `Business Type: ${businessType}`,
      `Preferred Contact (${contactMethod}): ${contactValue}`,
      `City / Country: ${cityCountry}`,
      `Requested Scope: ${scopeTier}`,
      notes ? `Notes: ${notes}` : '',
    ].filter(Boolean);

    return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(bodyLines.join('\n'))}`;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setServerError('');

    const payload = {
      name,
      companyName,
      businessType,
      contactMethod,
      contactValue,
      cityCountry,
      scopeTier,
      notes,
      lang,
      website_url: honeypot,
    };

    const clientCheck = validateLeadSubmission(payload);
    if (!clientCheck.valid) {
      setFieldErrors(clientCheck.fieldErrors ?? {});
      trackEvent('aqar_lead_validation_error', {
        lang,
        error_count: Object.keys(clientCheck.fieldErrors ?? {}).length,
      });
      return;
    }

    setFieldErrors({});
    setSubmitState('submitting');

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok || !data.ok) {
        if (data.fieldErrors) {
          setFieldErrors(data.fieldErrors);
        }
        setServerError(
          lang === 'ar'
            ? data.message || 'تعذر إرسال الطلب حالياً. يرجى مراجعة الحقول أو التواصل مباشرة.'
            : data.messageEn || 'Could not submit your request. Please check the fields or contact us directly.'
        );
        setSubmitState('error');
        return;
      }

      setReferenceId(data.referenceId || 'AQAR-RECEIVED');
      setSubmitState('success');
      trackEvent('aqar_lead_submitted', {
        lang,
        business_type: businessType || 'unspecified',
        contact_method: contactMethod,
        scope_tier: scopeTier,
      });
    } catch {
      setServerError(
        t(
          'حدث خطأ في الاتصال بالشبكة. يمكنك إرسال تفاصيل طلبك مباشرة عبر البريد أدناه.',
          'A network error occurred. You can send your request details directly via email below.'
        )
      );
      setSubmitState('error');
    }
  };

  const handleCopyReference = async () => {
    if (!referenceId) return;
    try {
      await navigator.clipboard.writeText(referenceId);
      setCopiedRef(true);
      setTimeout(() => setCopiedRef(false), 2500);
    } catch {
      // Fallback
    }
  };

  return (
    <section
      id="demo-form"
      aria-labelledby="demo-form-heading"
      className="relative py-20 sm:py-28 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-200 overflow-hidden"
    >
      {/* Subtle Background Glows */}
      <div
        className="absolute top-0 right-1/4 -mt-16 h-96 w-96 rounded-full bg-[#00b399]/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-10 -mb-20 h-96 w-96 rounded-full bg-emerald-500/5 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Pitch, Value Guarantees & Direct Channels */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div>

              {/* Headline */}
              <h2
                id="demo-form-heading"
                className="font-display text-2xl sm:text-4xl lg:text-4xl font-black text-slate-900 leading-tight"
              >
                {pick(FORM_SECTION_CONTENT.headline)}
              </h2>
            </div>

            {/* Premium Guarantee & Value Cards */}
            <div className="space-y-3.5">
              <div className="group rounded-2xl border border-slate-200/90 bg-white/90 p-4 sm:p-5 shadow-xs hover:border-[#00b399]/40 hover:shadow-md transition-all duration-300">
                <div className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#00b399]/15 to-[#008f7a]/10 text-[#008f7a] border border-[#00b399]/20 shadow-2xs">
                    <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      {t(
                        'توضيح كامل للنطاق والسعر قبل البدء',
                        'Clear Scope & Fixed Proposal Before Kickoff'
                      )}
                    </h3>
                    <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                      {t(
                        'نحدد معك بدقة ما يدخل ضمن الإطلاق الأساسي (500$) وأي إضافات مطلوبة، بعقد واضح وبدون أي التزامات مخفية.',
                        'We confirm what fits inside the $500 baseline setup and quote any custom add-ons transparently.'
                      )}
                    </p>
                  </div>
                </div>
              </div>

              <div className="group rounded-2xl border border-slate-200/90 bg-white/90 p-4 sm:p-5 shadow-xs hover:border-[#00b399]/40 hover:shadow-md transition-all duration-300">
                <div className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#00b399]/15 to-[#008f7a]/10 text-[#008f7a] border border-[#00b399]/20 shadow-2xs">
                    <ShieldCheck className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      {t(
                        'مراجعة عملية وتدريب على النسخة الحية',
                        'Guided Walkthrough on the Live System'
                      )}
                    </h3>
                    <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                      {t(
                        'نستعرض معك البوابة العامة ولوحات الأدوار الـ 8 المخصصة لترى كيف سيعمل فريقك وملاكك ومستأجروك يومياً.',
                        'We walk through the public portal and 8 role panels tailored to your agency’s daily workflow.'
                      )}
                    </p>
                  </div>
                </div>
              </div>

              <div className="group rounded-2xl border border-slate-200/90 bg-white/90 p-4 sm:p-5 shadow-xs hover:border-[#00b399]/40 hover:shadow-md transition-all duration-300">
                <div className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#00b399]/15 to-[#008f7a]/10 text-[#008f7a] border border-[#00b399]/20 shadow-2xs">
                    <Zap className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      {t(
                        'تسليم سريع وجاهزية كاملة للتشغيل',
                        'Rapid Turnkey Deployment'
                      )}
                    </h3>
                    <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                      {t(
                        'تجهيز وضبط هويتك البصرية والبيانات خلال 3 إلى 5 أيام عمل، مع دعم تقني مستمر لضمان انطلاقة ناجحة.',
                        'Branding and setup configured within 3-5 business days, backed by dedicated technical support.'
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Channels Hub */}
            <div className="rounded-3xl border border-slate-200/80 bg-white/95 p-5 sm:p-6 shadow-sm">
              <div className="flex items-center justify-between mb-3.5">
                <span className="text-xs font-bold text-slate-800">
                  {pick(FORM_SECTION_CONTENT.directChannelsTitle)}
                </span>
                <span className="flex items-center gap-1.5 text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/60">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  {t('رد سريع', 'Fast Response')}
                </span>
              </div>

              <div className="flex flex-col gap-2.5">
                {/* Live Demo Link */}
                <a
                  href={EXTERNAL_ROUTES.primaryDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackEvent('aqar_demo_click', {
                      source: 'form_sidebar',
                      demo_id: 'primary_generic',
                    })
                  }
                  className="group flex min-h-11 items-center justify-between rounded-2xl border border-[#00b399]/40 bg-gradient-to-r from-[#00b399]/10 via-[#00b399]/5 to-transparent px-4 py-2.5 text-xs sm:text-sm font-bold text-[#008f7a] hover:bg-[#00b399] hover:text-white transition-all shadow-2xs"
                >
                  <span className="flex items-center gap-2">
                    <ExternalLink className="h-4 w-4 shrink-0 transition-transform group-hover:scale-110" aria-hidden="true" />
                    <span>{t('تجربة النسخة التفاعلية الحية الآن', 'Open Live Interactive Demo')}</span>
                  </span>
                  {lang === 'ar' ? (
                    <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" aria-hidden="true" />
                  ) : (
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  )}
                </a>

                {/* Direct WhatsApp */}
                {WHATSAPP_URL && (
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex min-h-11 items-center justify-between rounded-2xl border border-emerald-300/80 bg-emerald-50/70 px-4 py-2.5 text-xs sm:text-sm font-bold text-emerald-800 hover:bg-emerald-100/90 transition-colors shadow-2xs"
                  >
                    <span className="flex items-center gap-2">
                      <MessageSquare className="h-4 w-4 text-emerald-600" aria-hidden="true" />
                      <span>{t('محادثة فورية عبر واتساب', 'Direct Chat on WhatsApp')}</span>
                    </span>
                    <ExternalLink className="h-3.5 w-3.5 text-emerald-600" aria-hidden="true" />
                  </a>
                )}

                {/* Email Direct */}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="flex min-h-11 items-center justify-between rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-2.5 text-xs sm:text-sm font-medium text-slate-700 hover:border-[#00b399] hover:text-[#008f7a] hover:bg-white transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-[#00b399]" aria-hidden="true" />
                    <span>{t('البريد الإلكتروني المباشر', 'Direct Business Email')}</span>
                  </span>
                  <span className="font-latin text-xs font-semibold text-slate-600" dir="ltr">
                    {CONTACT_EMAIL}
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Form Card */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-9 lg:p-10 shadow-xl shadow-slate-200/70 overflow-hidden">
              {/* Top Accent Gradient Line */}
              <div
                className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#008f7a] via-[#00b399] to-emerald-400"
                aria-hidden="true"
              />

              {submitState === 'success' ? (
                /* Success Status Display */
                <div
                  role="status"
                  aria-live="polite"
                  className="py-8 text-center space-y-6"
                >
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-tr from-[#00b399]/20 to-emerald-100 border border-[#00b399]/40 text-[#008f7a] shadow-lg shadow-[#00b399]/20">
                    <CheckCircle2 className="h-10 w-10 text-[#008f7a]" aria-hidden="true" />
                  </div>

                  <div className="space-y-2 max-w-md mx-auto">
                    <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 leading-snug">
                      {t(
                        'تم تسجيل طلبك بنجاح!',
                        'Your Demo & Scope Request Has Been Recorded!'
                      )}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {t(
                        'شكراً لتواصلك مع نوڤيكسا. تم حفظ تفاصيل نشاطك العقاري، وسيتواصل معك مستشارنا المختص لتنسيق العرض التوضيحي وتحديد النطاق الأنسب.',
                        'Thank you for reaching out to Novixa. Your business requirements have been recorded and our team will follow up via your preferred contact channel.'
                      )}
                    </p>
                  </div>

                  {/* Reference Ticket Box */}
                  <div className="mx-auto max-w-md rounded-2xl border-2 border-dashed border-[#00b399]/40 bg-[#00b399]/5 p-5 flex items-center justify-between gap-4">
                    <div className="text-start">
                      <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                        {t('رقم مرجع الطلب الخاص بك', 'Your Request Reference ID')}
                      </div>
                      <div
                        dir="ltr"
                        className="font-latin text-lg sm:text-xl font-extrabold text-[#008f7a] tracking-wider mt-0.5"
                      >
                        {referenceId}
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={handleCopyReference}
                      className="inline-flex min-h-10 items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-bold text-slate-800 shadow-2xs hover:border-[#00b399] hover:text-[#008f7a] transition-all"
                    >
                      {copiedRef ? (
                        <>
                          <Check className="h-4 w-4 text-emerald-600" aria-hidden="true" />
                          <span className="text-emerald-600">{t('تم النسخ', 'Copied!')}</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-4 w-4 text-slate-500" aria-hidden="true" />
                          <span>{t('نسخ المرجع', 'Copy ID')}</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Next Steps Guide */}
                  <div className="mx-auto max-w-md rounded-2xl bg-slate-50 border border-slate-200/80 p-4 text-start text-xs text-slate-600 space-y-2">
                    <div className="font-bold text-slate-800 flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5 text-[#00b399]" />
                      <span>{t('ماذا سيحدث بعد ذلك', 'What happens next')}</span>
                    </div>
                    <ul className="space-y-1.5 list-disc list-inside text-slate-600">
                      <li>{t('مراجعة متطلبات مكتبك ونوع العقارات.', 'Review of your agency requirements and property portfolio.')}</li>
                      <li>{t('إعداد ملف نطاق العمل والتسعير الدقيق.', 'Preparation of your tailored scope and fixed pricing.')}</li>
                      <li>{t('التواصل معك لعقد جلسة استعراض حي مخصصة.', 'Direct follow-up to schedule your personalized live walkthrough.')}</li>
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={buildMailtoHref(referenceId)}
                      className="inline-flex min-h-11 w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-[#00b399]/40 bg-[#00b399]/10 px-5 py-2.5 text-xs sm:text-sm font-bold text-[#008f7a] hover:bg-[#00b399] hover:text-white transition-all shadow-xs"
                    >
                      <Mail className="h-4 w-4" aria-hidden="true" />
                      <span>
                        {t(
                          'إرسال نسخة إضافية عبر تطبيق البريد',
                          'Send Copy via Email Client'
                        )}
                      </span>
                    </a>

                    <button
                      type="button"
                      onClick={() => {
                        setSubmitState('idle');
                        setReferenceId('');
                      }}
                      className="inline-flex min-h-11 w-full sm:w-auto items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-2.5 text-xs sm:text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
                    >
                      {t('إرسال طلب آخر', 'Submit Another Request')}
                    </button>
                  </div>
                </div>
              ) : (
                /* Interactive Request Form */
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {/* Form Header Inside Card */}
                  <div className="border-b border-slate-100 pb-4 mb-2 flex items-center justify-between flex-wrap gap-2">
                    <div>
                      <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900">
                        {t('بيانات الطلب وتخصيص المنصة', 'Platform Specification Details')}
                      </h3>
                      <p className="text-xs text-slate-500 mt-0.5">
                        {t('املأ التفاصيل وسيتواصل معك مستشارنا العقاري والتقني.', 'Fill in your details and our specialist will reach out shortly.')}
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                      <Clock className="h-3.5 w-3.5 text-[#00b399]" />
                      <span>{t('يستغرق دقيقة واحدة', 'Takes 1 min')}</span>
                    </div>
                  </div>

                  {/* Honeypot field (Anti-spam) */}
                  <div className="sr-only" aria-hidden="true">
                    <label htmlFor="website_url">Website URL</label>
                    <input
                      id="website_url"
                      name="website_url"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      value={honeypot}
                      onChange={(e) => setHoneypot(e.target.value)}
                    />
                  </div>

                  {/* Row 1: Name & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    {/* Full Name */}
                    <div>
                      <label
                        htmlFor="lead-name"
                        className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-800 mb-1.5"
                      >
                        <User className="h-3.5 w-3.5 text-[#00b399]" />
                        <span>{t('الاسم الكامل *', 'Full Name *')}</span>
                      </label>
                      <input
                        id="lead-name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        aria-invalid={Boolean(fieldErrors.name)}
                        aria-describedby={fieldErrors.name ? 'lead-name-error' : undefined}
                        placeholder={t('مثال: أحمد القاصدي', 'e.g., Ahmed Al-Kasadi')}
                        className={`w-full min-h-11 rounded-2xl border px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 transition-all ${
                          fieldErrors.name
                            ? 'border-rose-300 bg-rose-50/50 focus:border-rose-500 focus:ring-3 focus:ring-rose-200'
                            : 'border-slate-200 bg-slate-50/70 focus:bg-white focus:border-[#00b399] focus:ring-3 focus:ring-[#00b399]/15'
                        } focus:outline-none`}
                      />
                      {fieldErrors.name && (
                        <p
                          id="lead-name-error"
                          className="mt-1.5 text-xs font-semibold text-rose-600 flex items-center gap-1"
                        >
                          <AlertCircle className="h-3 w-3 shrink-0" />
                          <span>{fieldErrors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Company / Agency Name */}
                    <div>
                      <label
                        htmlFor="lead-company"
                        className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-800 mb-1.5"
                      >
                        <Building2 className="h-3.5 w-3.5 text-[#00b399]" />
                        <span>{t('اسم المكتب أو الشركة العقارية *', 'Company / Agency Name *')}</span>
                      </label>
                      <input
                        id="lead-company"
                        name="companyName"
                        type="text"
                        required
                        autoComplete="organization"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        aria-invalid={Boolean(fieldErrors.companyName)}
                        aria-describedby={
                          fieldErrors.companyName ? 'lead-company-error' : undefined
                        }
                        placeholder={t(
                          'مثال: شركة الأفق العقارية',
                          'e.g., Horizon Real Estate'
                        )}
                        className={`w-full min-h-11 rounded-2xl border px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 transition-all ${
                          fieldErrors.companyName
                            ? 'border-rose-300 bg-rose-50/50 focus:border-rose-500 focus:ring-3 focus:ring-rose-200'
                            : 'border-slate-200 bg-slate-50/70 focus:bg-white focus:border-[#00b399] focus:ring-3 focus:ring-[#00b399]/15'
                        } focus:outline-none`}
                      />
                      {fieldErrors.companyName && (
                        <p
                          id="lead-company-error"
                          className="mt-1.5 text-xs font-semibold text-rose-600 flex items-center gap-1"
                        >
                          <AlertCircle className="h-3 w-3 shrink-0" />
                          <span>{fieldErrors.companyName}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row 2: Business Type & City */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    {/* Business Type */}
                    <div>
                      <label
                        htmlFor="lead-business-type"
                        className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5"
                      >
                        {t('طبيعة النشاط العقاري *', 'Business Type *')}
                      </label>
                      <div className="relative">
                        <select
                          id="lead-business-type"
                          name="businessType"
                          required
                          value={businessType}
                          onChange={(e) =>
                            setBusinessType(e.target.value as BusinessTypeOption)
                          }
                          aria-invalid={Boolean(fieldErrors.businessType)}
                          aria-describedby={
                            fieldErrors.businessType ? 'lead-business-type-error' : undefined
                          }
                          className={`w-full min-h-11 rounded-2xl border px-4 py-2.5 text-sm text-slate-900 transition-all appearance-none cursor-pointer ${
                            fieldErrors.businessType
                              ? 'border-rose-300 bg-rose-50/50 focus:border-rose-500 focus:ring-3 focus:ring-rose-200'
                              : 'border-slate-200 bg-slate-50/70 focus:bg-white focus:border-[#00b399] focus:ring-3 focus:ring-[#00b399]/15'
                          } focus:outline-none`}
                        >
                          <option value="">
                            {t('— اختر نوع النشاط —', '— Select Business Type —')}
                          </option>
                          <option value="brokerage">
                            {t(
                              'مكتب عقاري / وساطة بيع وتأجير',
                              'Real-Estate Brokerage (Sales & Leasing)'
                            )}
                          </option>
                          <option value="property_management">
                            {t(
                              'شركة إدارة أملاك وعقود وصيانة',
                              'Property & Lease Management Firm'
                            )}
                          </option>
                          <option value="mixed_agency">
                            {t(
                              'شركة عقارية شاملة (وساطة + إدارة أملاك)',
                              'Full-Service Agency (Brokerage + Management)'
                            )}
                          </option>
                          <option value="developer_marketing">
                            {t(
                              'تسويق مشاريع / تطوير عقاري',
                              'Real-Estate Developer / Project Marketing'
                            )}
                          </option>
                          <option value="other">
                            {t('نشاط عقاري آخر', 'Other Real-Estate Business')}
                          </option>
                        </select>
                      </div>
                      {fieldErrors.businessType && (
                        <p
                          id="lead-business-type-error"
                          className="mt-1.5 text-xs font-semibold text-rose-600 flex items-center gap-1"
                        >
                          <AlertCircle className="h-3 w-3 shrink-0" />
                          <span>{fieldErrors.businessType}</span>
                        </p>
                      )}
                    </div>

                    {/* City / Country */}
                    <div>
                      <label
                        htmlFor="lead-city"
                        className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-800 mb-1.5"
                      >
                        <MapPin className="h-3.5 w-3.5 text-[#00b399]" />
                        <span>{t('المدينة / الدولة *', 'City / Country *')}</span>
                      </label>
                      <input
                        id="lead-city"
                        name="cityCountry"
                        type="text"
                        required
                        value={cityCountry}
                        onChange={(e) => setCityCountry(e.target.value)}
                        aria-invalid={Boolean(fieldErrors.cityCountry)}
                        aria-describedby={
                          fieldErrors.cityCountry ? 'lead-city-error' : undefined
                        }
                        placeholder={t(
                          'مثال: الرياض / صنعاء / دبي / مسقط',
                          'e.g., Riyadh / Sana’a / Dubai / Muscat'
                        )}
                        className={`w-full min-h-11 rounded-2xl border px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 transition-all ${
                          fieldErrors.cityCountry
                            ? 'border-rose-300 bg-rose-50/50 focus:border-rose-500 focus:ring-3 focus:ring-rose-200'
                            : 'border-slate-200 bg-slate-50/70 focus:bg-white focus:border-[#00b399] focus:ring-3 focus:ring-[#00b399]/15'
                        } focus:outline-none`}
                      />
                      {fieldErrors.cityCountry && (
                        <p
                          id="lead-city-error"
                          className="mt-1.5 text-xs font-semibold text-rose-600 flex items-center gap-1"
                        >
                          <AlertCircle className="h-3 w-3 shrink-0" />
                          <span>{fieldErrors.cityCountry}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row 3: Contact Method & Value */}
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-5">
                    <div className="sm:col-span-5">
                      <label
                        htmlFor="lead-contact-method"
                        className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5"
                      >
                        {t('وسيلة التواصل المفضلة *', 'Preferred Contact *')}
                      </label>
                      <select
                        id="lead-contact-method"
                        name="contactMethod"
                        value={contactMethod}
                        onChange={(e) =>
                          setContactMethod(e.target.value as ContactMethodOption)
                        }
                        className="w-full min-h-11 rounded-2xl border border-slate-200 bg-slate-50/70 px-4 py-2.5 text-sm text-slate-900 focus:bg-white focus:border-[#00b399] focus:ring-3 focus:ring-[#00b399]/15 focus:outline-none transition-all cursor-pointer"
                      >
                        <option value="whatsapp">
                          {t('واتساب (WhatsApp)', 'WhatsApp')}
                        </option>
                        <option value="phone">
                          {t('اتصال هاتفي (Phone)', 'Phone Call')}
                        </option>
                        <option value="email">
                          {t('بريد إلكتروني (Email)', 'Email')}
                        </option>
                      </select>
                    </div>

                    <div className="sm:col-span-7">
                      <label
                        htmlFor="lead-contact-value"
                        className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5"
                      >
                        {contactMethod === 'email'
                          ? t('البريد الإلكتروني الرسمي *', 'Business Email Address *')
                          : t(
                              'رقم الجوال / الواتساب مع رمز الدولة *',
                              'Phone / WhatsApp Number (with country code) *'
                            )}
                      </label>
                      <input
                        id="lead-contact-value"
                        name="contactValue"
                        type={contactMethod === 'email' ? 'email' : 'tel'}
                        inputMode={contactMethod === 'email' ? 'email' : 'tel'}
                        autoComplete={contactMethod === 'email' ? 'email' : 'tel'}
                        dir="ltr"
                        required
                        value={contactValue}
                        onChange={(e) => setContactValue(e.target.value)}
                        aria-invalid={Boolean(fieldErrors.contactValue)}
                        aria-describedby={
                          fieldErrors.contactValue ? 'lead-contact-value-error' : undefined
                        }
                        placeholder={
                          contactMethod === 'email'
                            ? 'name@company.com'
                            : '+966 50 XXX XXXX'
                        }
                        className={`w-full min-h-11 rounded-2xl border px-4 py-2.5 font-latin text-sm text-slate-900 placeholder:text-slate-400 transition-all ${
                          fieldErrors.contactValue
                            ? 'border-rose-300 bg-rose-50/50 focus:border-rose-500 focus:ring-3 focus:ring-rose-200'
                            : 'border-slate-200 bg-slate-50/70 focus:bg-white focus:border-[#00b399] focus:ring-3 focus:ring-[#00b399]/15'
                        } focus:outline-none`}
                      />
                      {fieldErrors.contactValue && (
                        <p
                          id="lead-contact-value-error"
                          className="mt-1.5 text-xs font-semibold text-rose-600 flex items-center gap-1"
                        >
                          <AlertCircle className="h-3 w-3 shrink-0" />
                          <span>{fieldErrors.contactValue}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row 4: Scope Tier Selection */}
                  <div>
                    <label
                      htmlFor="lead-scope-tier"
                      className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5"
                    >
                      {t('النطاق المبدئي المطلوب لنسختك', 'Estimated Setup Scope')}
                    </label>
                    <select
                      id="lead-scope-tier"
                      name="scopeTier"
                      value={scopeTier}
                      onChange={(e) => setScopeTier(e.target.value as ScopeTierOption)}
                      className="w-full min-h-11 rounded-2xl border border-slate-200 bg-slate-50/70 px-4 py-2.5 text-sm text-slate-900 focus:bg-white focus:border-[#00b399] focus:ring-3 focus:ring-[#00b399]/15 focus:outline-none transition-all cursor-pointer"
                    >
                      <option value="baseline_500">
                        {t(
                          'الإطلاق الأساسي المهيأ بالهوية (يبدأ من 500$ — بدون استضافة)',
                          'Baseline Branded Setup (Starts at $500 — excluding hosting)'
                        )}
                      </option>
                      <option value="custom_workflow">
                        {t(
                          'نسخة مخصصة مع تعديلات في سير العمل أو تكاملات إضافية',
                          'Custom Workflow Modifications or Third-Party Integrations'
                        )}
                      </option>
                      <option value="Need_consultation">
                        {t(
                          'أحتاج استشارة لتحديد النطاق الأنسب لشركتي',
                          'Need Consultation to Define the Right Scope'
                        )}
                      </option>
                    </select>

                    <p className="mt-1.5 text-[11px] text-slate-500">
                      {scopeTier === 'baseline_500' &&
                        t(
                          'يشمل تخصيص الشعار والألوان وتهيئة لوحات التحكم الـ 8 وتسليم النظام جاهزاً للتشغيل.',
                          'Includes logo/color branding, configuring all 8 panels, and turnkey deployment.'
                        )}
                      {scopeTier === 'custom_workflow' &&
                        t(
                          'يشمل دراسة التعديلات البرمجية وتكامل بوابات الدفع أو رسائل SMS وعقود الإيجار الخاصة.',
                          'Includes tailoring custom features, payment gateways, SMS gateways, or bespoke leases.'
                        )}
                      {scopeTier === 'Need_consultation' &&
                        t(
                          'سنقوم بدراسة حجم أعمالك وتحديد الميزات الأساسية التي تمنحك أفضل عائد بأقل تكلفة.',
                          'We will analyze your transaction volume and advise the most cost-effective package.'
                        )}
                    </p>
                  </div>

                  {/* Row 5: Notes & Requirements */}
                  <div>
                    <label
                      htmlFor="lead-notes"
                      className="block text-xs sm:text-sm font-bold text-slate-800 mb-1.5"
                    >
                      {t(
                        'ملاحظات حول متطلباتك أو الأدوار التي تهمك (اختياري)',
                        'Notes on Your Workflow or Required Roles (Optional)'
                      )}
                    </label>
                    <textarea
                      id="lead-notes"
                      name="notes"
                      rows={3}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder={t(
                        'مثال: ندير 150 وحدة سكنية وتجارية، ونرغب بالتركيز على عقود الإيجار وطلبات الصيانة والملاك...',
                        'e.g., We manage 150 units and focus on tenant leasing, maintenance requests, and landlord reports...'
                      )}
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#00b399] focus:ring-3 focus:ring-[#00b399]/15 focus:outline-none transition-all"
                    />
                  </div>

                  {/* Server Error Alert */}
                  {submitState === 'error' && serverError && (
                    <div
                      role="alert"
                      className="rounded-2xl border border-rose-200 bg-rose-50/90 p-4 text-xs sm:text-sm text-rose-800 space-y-2"
                    >
                      <div className="flex items-start gap-2 font-semibold">
                        <AlertCircle className="h-4 w-4 shrink-0 mt-0.5 text-rose-500" />
                        <span>{serverError}</span>
                      </div>
                      <div>
                        <a
                          href={buildMailtoHref()}
                          className="inline-flex items-center gap-1.5 font-bold text-[#008f7a] underline underline-offset-4 hover:text-[#00b399]"
                        >
                          <Mail className="h-3.5 w-3.5" aria-hidden="true" />
                          <span>
                            {t(
                              'اضغط هنا لإرسال تفاصيل طلبك مباشرة عبر تطبيق البريد',
                              'Click here to send your details directly via your email client'
                            )}
                          </span>
                        </a>
                      </div>
                    </div>
                  )}

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={submitState === 'submitting'}
                      className="flex min-h-[52px] w-full items-center justify-center gap-2.5 rounded-full btn-brand-teal px-8 py-3.5 text-base font-bold text-white shadow-xl shadow-[#00b399]/25 hover:shadow-2xl hover:shadow-[#00b399]/40 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60 disabled:hover:scale-100 transition-all cursor-pointer"
                    >
                      {submitState === 'submitting' ? (
                        <>
                          <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
                          <span>{t('جاري تسجيل طلبك...', 'Submitting Request...')}</span>
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" aria-hidden="true" />
                          <span>
                            {t(
                              'إرسال طلب العرض التوضيحي وتحديد النطاق',
                              'Submit Demo & Scope Request'
                            )}
                          </span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Trust Microcopy */}
                  <div className="flex items-center justify-center gap-1.5 text-center text-[11px] text-slate-500 pt-1">
                    <Lock className="h-3.5 w-3.5 text-[#00b399] shrink-0" />
                    <span>
                      {t(
                        'بياناتك تُستخدم حصرياً للتواصل معك وفق سياسة الخصوصية.',
                        'Your details are encrypted and private — strictly used to respond under our Privacy Policy.'
                      )}
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
