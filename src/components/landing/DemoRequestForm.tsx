'use client';

import React, { useState } from 'react';
import {
  AlertCircle,
  CheckCircle2,
  Copy,
  ExternalLink,
  Loader2,
  Mail,
  MessageSquare,
  Send,
  ShieldCheck,
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
      // Clipboard API fallback not required
    }
  };

  return (
    <section
      id="demo-form"
      aria-labelledby="demo-form-heading"
      className="py-16 sm:py-24 border-b border-slate-200 bg-[#f8fafc]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left/Start Column: Pitch & Direct Channels */}
          <div className="lg:col-span-5">
            <h2
              id="demo-form-heading"
              className="font-display text-2xl sm:text-4xl font-bold text-slate-900 leading-snug"
            >
              {pick(FORM_SECTION_CONTENT.headline)}
            </h2>
            <p className="mt-4 text-base text-slate-600 leading-relaxed">
              {pick(FORM_SECTION_CONTENT.subheadline)}
            </p>

            {/* Key Assurances */}
            <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 space-y-4 shadow-sm">
              <div className="flex items-start gap-3">
                <CheckCircle2
                  className="h-5 w-5 shrink-0 text-[#00b399] mt-0.5"
                  aria-hidden="true"
                />
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    {t(
                      'توضيح كامل للنطاق والسعر قبل البدء',
                      'Clear Scope & Fixed Proposal Before Kickoff'
                    )}
                  </h3>
                  <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                    {t(
                      'نحدد معك ما يدخل ضمن الإطلاق الأساسي (500$) وأي إضافات مطلوبة، بدون أي التزامات مخفية.',
                      'We confirm what fits inside the $500 baseline setup and quote any custom add-ons transparently.'
                    )}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ShieldCheck
                  className="h-5 w-5 shrink-0 text-[#00b399] mt-0.5"
                  aria-hidden="true"
                />
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    {t(
                      'مراجعة عملية على النسخة الحية',
                      'Guided Walkthrough on the Live System'
                    )}
                  </h3>
                  <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                    {t(
                      'نستعرض معك البوابة العامة ولوحات الأدوار الـ 8 لترى كيف سيعمل فريقك يومياً.',
                      'We walk through the public portal and 8 role panels tailored to your agency’s workflow.'
                    )}
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Channels */}
            <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-xs font-bold text-slate-700 mb-3">
                {pick(FORM_SECTION_CONTENT.directChannelsTitle)}
              </div>
              <div className="flex flex-col gap-2.5">
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
                  className="flex min-h-11 items-center justify-between rounded-full border border-[#00b399]/40 bg-[#00b399]/10 px-4 py-2.5 text-xs sm:text-sm font-bold text-[#008f7a] hover:bg-[#00b399] hover:text-white transition-all"
                >
                  <span>{t('فتح النسخة التجريبية الحية الآن', 'Open Live Interactive Demo')}</span>
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>

                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="flex min-h-11 items-center justify-between rounded-full border border-slate-200 bg-slate-50 px-4 py-2.5 text-xs sm:text-sm font-medium text-slate-700 hover:border-[#00b399] hover:text-[#008f7a] transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-[#00b399]" aria-hidden="true" />
                    <span>{t('مراسلة عبر البريد الرسمي', 'Email Us Directly')}</span>
                  </span>
                  <span className="font-latin text-xs text-slate-600" dir="ltr">
                    {CONTACT_EMAIL}
                  </span>
                </a>

                {WHATSAPP_URL && (
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex min-h-11 items-center justify-between rounded-full border border-emerald-300 bg-emerald-50 px-4 py-2.5 text-xs sm:text-sm font-semibold text-emerald-800 hover:bg-emerald-100 transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <MessageSquare className="h-4 w-4" aria-hidden="true" />
                      <span>{t('تواصل مباشرة عبر واتساب', 'Chat on WhatsApp')}</span>
                    </span>
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Right/End Column: Interactive Form Card */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 lg:p-10 shadow-xl">
              {submitState === 'success' ? (
                <div
                  role="status"
                  aria-live="polite"
                  className="py-6 text-center space-y-5"
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#00b399]/15 border border-[#00b399]/40 text-[#008f7a]">
                    <CheckCircle2 className="h-8 w-8" aria-hidden="true" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-display text-2xl font-bold text-slate-900">
                      {t(
                        'تم تسجيل طلبك بنجاح!',
                        'Your Demo & Scope Request Has Been Recorded!'
                      )}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 max-w-lg mx-auto">
                      {t(
                        'شكراً لتواصلك مع نوفكسا. تم حفظ تفاصيل نشاطك العقاري، وسيتواصل معك فريقنا عبر وسيلة التواصل المفضلة لديك.',
                        'Thank you for reaching out to Novixa. Your business requirements have been recorded and our team will follow up via your preferred contact channel.'
                      )}
                    </p>
                  </div>

                  {/* Reference ID Box */}
                  <div className="mx-auto max-w-md rounded-2xl border border-[#00b399]/40 bg-slate-50 p-4 flex items-center justify-between gap-3">
                    <div className="text-start">
                      <div className="text-xs text-slate-500">
                        {t('رقم مرجع الطلب', 'Request Reference ID')}
                      </div>
                      <div
                        dir="ltr"
                        className="font-latin text-base font-bold text-[#008f7a]"
                      >
                        {referenceId}
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={handleCopyReference}
                      className="inline-flex min-h-10 items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 hover:border-[#00b399] hover:text-[#008f7a]"
                    >
                      <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>
                        {copiedRef
                          ? t('تم النسخ', 'Copied!')
                          : t('نسخ المرجع', 'Copy ID')}
                      </span>
                    </button>
                  </div>

                  <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={buildMailtoHref(referenceId)}
                      className="inline-flex min-h-11 w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-[#00b399]/40 bg-[#00b399]/10 px-5 py-2.5 text-xs sm:text-sm font-semibold text-[#008f7a] hover:bg-[#00b399] hover:text-white transition-all"
                    >
                      <Mail className="h-4 w-4" aria-hidden="true" />
                      <span>
                        {t(
                          'إرسال نسخة إضافية عبر بريدك الآن',
                          'Send Copy via Your Email Client'
                        )}
                      </span>
                    </a>

                    <button
                      type="button"
                      onClick={() => {
                        setSubmitState('idle');
                        setReferenceId('');
                      }}
                      className="inline-flex min-h-11 w-full sm:w-auto items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-2.5 text-xs sm:text-sm font-medium text-slate-700 hover:bg-slate-50"
                    >
                      {t('إرسال طلب آخر', 'Submit Another Request')}
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {/* Honeypot field */}
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

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div>
                      <label
                        htmlFor="lead-name"
                        className="block text-xs sm:text-sm font-semibold text-slate-700 mb-2"
                      >
                        {t('الاسم الكامل *', 'Full Name *')}
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
                        className="w-full min-h-11 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#00b399] focus:outline-none transition-colors"
                      />
                      {fieldErrors.name && (
                        <p
                          id="lead-name-error"
                          className="mt-1.5 text-xs font-medium text-rose-500"
                        >
                          {fieldErrors.name}
                        </p>
                      )}
                    </div>

                    {/* Company / Agency Name */}
                    <div>
                      <label
                        htmlFor="lead-company"
                        className="block text-xs sm:text-sm font-semibold text-slate-700 mb-2"
                      >
                        {t('اسم المكتب أو الشركة العقارية *', 'Company / Agency Name *')}
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
                        className="w-full min-h-11 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#00b399] focus:outline-none transition-colors"
                      />
                      {fieldErrors.companyName && (
                        <p
                          id="lead-company-error"
                          className="mt-1.5 text-xs font-medium text-rose-500"
                        >
                          {fieldErrors.companyName}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Business Type */}
                    <div>
                      <label
                        htmlFor="lead-business-type"
                        className="block text-xs sm:text-sm font-semibold text-slate-700 mb-2"
                      >
                        {t('طبيعة النشاط العقاري *', 'Business Type *')}
                      </label>
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
                        className="w-full min-h-11 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 focus:bg-white focus:border-[#00b399] focus:outline-none transition-colors"
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
                      {fieldErrors.businessType && (
                        <p
                          id="lead-business-type-error"
                          className="mt-1.5 text-xs font-medium text-rose-500"
                        >
                          {fieldErrors.businessType}
                        </p>
                      )}
                    </div>

                    {/* City / Country */}
                    <div>
                      <label
                        htmlFor="lead-city"
                        className="block text-xs sm:text-sm font-semibold text-slate-700 mb-2"
                      >
                        {t('المدينة / الدولة *', 'City / Country *')}
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
                          'مثال: الرياض / صنعاء / عدن / مسقط',
                          'e.g., Riyadh / Sana’a / Aden / Dubai'
                        )}
                        className="w-full min-h-11 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#00b399] focus:outline-none transition-colors"
                      />
                      {fieldErrors.cityCountry && (
                        <p
                          id="lead-city-error"
                          className="mt-1.5 text-xs font-medium text-rose-500"
                        >
                          {fieldErrors.cityCountry}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Contact Method & Contact Value */}
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-5">
                    <div className="sm:col-span-5">
                      <label
                        htmlFor="lead-contact-method"
                        className="block text-xs sm:text-sm font-semibold text-slate-700 mb-2"
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
                        className="w-full min-h-11 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 focus:bg-white focus:border-[#00b399] focus:outline-none transition-colors"
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
                        className="block text-xs sm:text-sm font-semibold text-slate-700 mb-2"
                      >
                        {contactMethod === 'email'
                          ? t('البريد الإلكتروني الرسمي *', 'Business Email Address *')
                          : t(
                              'رقم الهاتف أو الواتساب (مع رمز الدولة) *',
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
                            : '+966 5X XXX XXXX'
                        }
                        className="w-full min-h-11 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 font-latin text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#00b399] focus:outline-none transition-colors"
                      />
                      {fieldErrors.contactValue && (
                        <p
                          id="lead-contact-value-error"
                          className="mt-1.5 text-xs font-medium text-rose-500"
                        >
                          {fieldErrors.contactValue}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Scope Tier Selection */}
                  <div>
                    <label
                      htmlFor="lead-scope-tier"
                      className="block text-xs sm:text-sm font-semibold text-slate-700 mb-2"
                    >
                      {t('النطاق المبدئي المطلوب', 'Estimated Setup Scope')}
                    </label>
                    <select
                      id="lead-scope-tier"
                      name="scopeTier"
                      value={scopeTier}
                      onChange={(e) => setScopeTier(e.target.value as ScopeTierOption)}
                      className="w-full min-h-11 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 focus:bg-white focus:border-[#00b399] focus:outline-none transition-colors"
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
                  </div>

                  {/* Notes */}
                  <div>
                    <label
                      htmlFor="lead-notes"
                      className="block text-xs sm:text-sm font-semibold text-slate-700 mb-2"
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
                        'مثال: نركز على إدارة عقود الإيجار والصيانة لـ 150 وحدة سكنية، ونريد العملة بالريال...',
                        'e.g., We manage 150 rental units and want Landlord, Tenant, and Contractor panels enabled...'
                      )}
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#00b399] focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Server Error Alert */}
                  {submitState === 'error' && serverError && (
                    <div
                      role="alert"
                      className="rounded-2xl border border-rose-200 bg-rose-50 p-4 text-xs sm:text-sm text-rose-800 space-y-2"
                    >
                      <div className="flex items-start gap-2 font-semibold">
                        <AlertCircle className="h-4 w-4 shrink-0 mt-0.5 text-rose-500" />
                        <span>{serverError}</span>
                      </div>
                      <div>
                        <a
                          href={buildMailtoHref()}
                          className="inline-flex items-center gap-1.5 font-semibold text-[#008f7a] underline underline-offset-4 hover:text-[#00b399]"
                        >
                          <Mail className="h-3.5 w-3.5" aria-hidden="true" />
                          <span>
                            {t(
                              'اضغط هنا لإرسال بياناتك مباشرة عبر تطبيق البريد',
                              'Click here to send your details directly via your email client'
                            )}
                          </span>
                        </a>
                      </div>
                    </div>
                  )}

                  {/* Submit Button (Menassat 3D Rounded) */}
                  <button
                    type="submit"
                    disabled={submitState === 'submitting'}
                    className="flex min-h-12 w-full items-center justify-center gap-2.5 rounded-full btn-menassat-teal px-8 py-3.5 text-base font-bold text-white shadow-xl shadow-[#00b399]/30 disabled:opacity-60 transition-transform"
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

                  <p className="text-center text-xs text-slate-500">
                    {t(
                      'بإرسال هذا النموذج، تستخدم بياناتك حصرياً للتواصل معك حول نظام نوفكسا عقار وفق سياسة الخصوصية.',
                      'By submitting this form, your details are used solely to respond regarding Novixa Aqar under our Privacy Policy.'
                    )}
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
