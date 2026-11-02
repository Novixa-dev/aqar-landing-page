import { describe, expect, it } from 'vitest';
import {
  constructMetadata,
  generateAqarSoftwareJsonLd,
  generateFaqJsonLd,
} from '@/lib/metadata';
import { sanitizeAnalyticsProps } from '@/lib/analytics';

describe('SEO Metadata, JSON-LD & Analytics Privacy', () => {
  it('generates reciprocal hreflang and canonical metadata for /ar and /en', () => {
    const arMeta = constructMetadata({
      lang: 'ar',
      title: 'نوڤيكسا عقار',
      description: 'وصف عربي',
      path: '',
    });

    expect(arMeta.alternates?.canonical).toContain('/ar');
    expect(arMeta.alternates?.languages?.ar).toContain('/ar');
    expect(arMeta.alternates?.languages?.en).toContain('/en');
    expect(arMeta.openGraph?.locale).toBe('ar_SA');

    const enMeta = constructMetadata({
      lang: 'en',
      title: 'Novixa Aqar',
      description: 'English description',
      path: '/legal/privacy',
    });

    expect(enMeta.alternates?.canonical).toContain('/en/legal/privacy');
    expect(enMeta.alternates?.languages?.ar).toContain('/ar/legal/privacy');
    expect(enMeta.alternates?.languages?.en).toContain('/en/legal/privacy');
    expect(enMeta.openGraph?.locale).toBe('en_US');
  });

  it('generates valid SoftwareApplication and FAQPage JSON-LD', () => {
    const software = generateAqarSoftwareJsonLd('ar');
    expect(software['@type']).toBe('SoftwareApplication');
    expect(software.offers.price).toBe('500');
    expect(software.offers.priceCurrency).toBe('USD');

    const faq = generateFaqJsonLd([
      { question: 'سؤال 1؟', answer: 'إجابة 1' },
    ]);
    expect(faq['@type']).toBe('FAQPage');
    expect(faq.mainEntity).toHaveLength(1);
  });

  it('strips PII keys and email/phone values from analytics properties', () => {
    const sanitized = sanitizeAnalyticsProps({
      lang: 'ar',
      business_type: 'brokerage',
      email: 'secret@company.com',
      phone: '+966500000000',
      name: 'Ahmed',
      leaked_email_in_value: 'user@domain.com',
      leaked_phone_in_value: '+966 55 123 4567',
    });

    expect(sanitized).toEqual({
      lang: 'ar',
      business_type: 'brokerage',
    });
  });
});
