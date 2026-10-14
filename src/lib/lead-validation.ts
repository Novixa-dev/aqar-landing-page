import { Language } from '@/types';

export type BusinessTypeOption =
  | 'brokerage'
  | 'property_management'
  | 'mixed_agency'
  | 'developer_marketing'
  | 'other';

export type ContactMethodOption = 'whatsapp' | 'phone' | 'email';

export type ScopeTierOption =
  | 'baseline_500'
  | 'custom_workflow'
  | 'Need_consultation';

export interface LeadSubmissionInput {
  name?: unknown;
  companyName?: unknown;
  businessType?: unknown;
  contactMethod?: unknown;
  contactValue?: unknown;
  cityCountry?: unknown;
  scopeTier?: unknown;
  notes?: unknown;
  lang?: unknown;
  website_url?: unknown; // Honeypot field
}

export interface ValidatedLeadPayload {
  name: string;
  companyName: string;
  businessType: BusinessTypeOption;
  contactMethod: ContactMethodOption;
  contactValue: string;
  cityCountry: string;
  scopeTier: ScopeTierOption;
  notes: string;
  lang: Language;
  isHoneypotTriggered: boolean;
}

export interface LeadValidationResult {
  valid: boolean;
  data?: ValidatedLeadPayload;
  fieldErrors?: Partial<
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
}

const VALID_BUSINESS_TYPES: BusinessTypeOption[] = [
  'brokerage',
  'property_management',
  'mixed_agency',
  'developer_marketing',
  'other',
];

const VALID_CONTACT_METHODS: ContactMethodOption[] = ['whatsapp', 'phone', 'email'];

const VALID_SCOPE_TIERS: ScopeTierOption[] = [
  'baseline_500',
  'custom_workflow',
  'Need_consultation',
];

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
const PHONE_REGEX = /^[+\d][\d\s().-]{6,22}$/;

function cleanString(value: unknown, maxLength = 300): string {
  if (typeof value !== 'string') return '';
  return value.trim().slice(0, maxLength);
}

export function validateLeadSubmission(input: LeadSubmissionInput): LeadValidationResult {
  const lang: Language = input.lang === 'en' ? 'en' : 'ar';
  const isAr = lang === 'ar';

  const honeypot = cleanString(input.website_url, 200);
  const name = cleanString(input.name, 120);
  const companyName = cleanString(input.companyName, 160);
  const businessTypeRaw = cleanString(input.businessType, 60) as BusinessTypeOption;
  const contactMethodRaw = cleanString(input.contactMethod, 30) as ContactMethodOption;
  const contactValue = cleanString(input.contactValue, 160);
  const cityCountry = cleanString(input.cityCountry, 140);
  const scopeTierRaw = (cleanString(input.scopeTier, 60) || 'baseline_500') as ScopeTierOption;
  const notes = cleanString(input.notes, 2000);

  if (honeypot.length > 0) {
    return {
      valid: true,
      data: {
        name: name || 'Spam Bot',
        companyName: companyName || 'Spam Corp',
        businessType: 'other',
        contactMethod: 'email',
        contactValue: 'bot@invalid.local',
        cityCountry: cityCountry || 'N/A',
        scopeTier: 'baseline_500',
        notes,
        lang,
        isHoneypotTriggered: true,
      },
    };
  }

  const fieldErrors: NonNullable<LeadValidationResult['fieldErrors']> = {};

  if (name.length < 2) {
    fieldErrors.name = isAr
      ? 'يرجى إدخال الاسم الكامل (حرفين على الأقل).'
      : 'Please enter your full name (at least 2 characters).';
  }

  if (companyName.length < 2) {
    fieldErrors.companyName = isAr
      ? 'يرجى إدخال اسم المكتب أو الشركة العقارية.'
      : 'Please enter your agency or company name.';
  }

  if (!VALID_BUSINESS_TYPES.includes(businessTypeRaw)) {
    fieldErrors.businessType = isAr
      ? 'يرجى اختيار نوع النشاط العقاري.'
      : 'Please select your real-estate business type.';
  }

  if (!VALID_CONTACT_METHODS.includes(contactMethodRaw)) {
    fieldErrors.contactMethod = isAr
      ? 'يرجى اختيار وسيلة التواصل المفضلة.'
      : 'Please select a preferred contact method.';
  }

  if (!contactValue) {
    fieldErrors.contactValue = isAr
      ? 'يرجى إدخال رقم التواصل أو البريد الإلكتروني.'
      : 'Please enter your phone/WhatsApp number or email address.';
  } else if (contactMethodRaw === 'email') {
    if (!EMAIL_REGEX.test(contactValue)) {
      fieldErrors.contactValue = isAr
        ? 'يرجى إدخال بريد إلكتروني صحيح (مثال: name@company.com).'
        : 'Please enter a valid email address (e.g., name@company.com).';
    }
  } else if (contactMethodRaw === 'whatsapp' || contactMethodRaw === 'phone') {
    if (!PHONE_REGEX.test(contactValue)) {
      fieldErrors.contactValue = isAr
        ? 'يرجى إدخال رقم هاتف أو واتساب صحيح مع رمز الدولة (7 أرقام على الأقل).'
        : 'Please enter a valid phone or WhatsApp number (at least 7 digits).';
    }
  }

  if (cityCountry.length < 2) {
    fieldErrors.cityCountry = isAr
      ? 'يرجى تحديد المدينة أو الدولة.'
      : 'Please enter your city or country.';
  }

  const scopeTier: ScopeTierOption = VALID_SCOPE_TIERS.includes(scopeTierRaw)
    ? scopeTierRaw
    : 'baseline_500';

  if (Object.keys(fieldErrors).length > 0) {
    return {
      valid: false,
      fieldErrors,
    };
  }

  return {
    valid: true,
    data: {
      name,
      companyName,
      businessType: businessTypeRaw,
      contactMethod: contactMethodRaw,
      contactValue,
      cityCountry,
      scopeTier,
      notes,
      lang,
      isHoneypotTriggered: false,
    },
  };
}
