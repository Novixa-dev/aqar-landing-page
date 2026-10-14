import { beforeEach, describe, expect, it } from 'vitest';
import {
  checkLeadRateLimit,
  resetLeadRateLimitForTests,
  validateLeadSubmission,
} from '@/lib/leads';

describe('Lead Validation & Rate Limiting', () => {
  beforeEach(() => {
    resetLeadRateLimitForTests();
  });

  it('validates a complete Arabic WhatsApp lead submission', () => {
    const result = validateLeadSubmission({
      name: 'محمد العتيبي',
      companyName: 'مكتب الرؤية العقارية',
      businessType: 'brokerage',
      contactMethod: 'whatsapp',
      contactValue: '+966 55 123 4567',
      cityCountry: 'الرياض، السعودية',
      scopeTier: 'baseline_500',
      notes: 'نحتاج البوابة العامة ولوحة الوكلاء',
      lang: 'ar',
      website_url: '',
    });

    expect(result.valid).toBe(true);
    expect(result.data?.isHoneypotTriggered).toBe(false);
    expect(result.data?.name).toBe('محمد العتيبي');
    expect(result.data?.businessType).toBe('brokerage');
  });

  it('validates a complete English Email lead submission', () => {
    const result = validateLeadSubmission({
      name: 'Sarah Jenkins',
      companyName: 'Apex Property Management',
      businessType: 'property_management',
      contactMethod: 'email',
      contactValue: 'sarah@apexprop.com',
      cityCountry: 'Dubai, UAE',
      scopeTier: 'custom_workflow',
      notes: 'Managing 200 units',
      lang: 'en',
    });

    expect(result.valid).toBe(true);
    expect(result.data?.lang).toBe('en');
    expect(result.data?.contactMethod).toBe('email');
  });

  it('rejects missing required fields and invalid email/phone formats', () => {
    const invalidResult = validateLeadSubmission({
      name: 'A',
      companyName: '',
      businessType: 'invalid_type',
      contactMethod: 'email',
      contactValue: 'not-an-email',
      cityCountry: '',
      lang: 'en',
    });

    expect(invalidResult.valid).toBe(false);
    expect(invalidResult.fieldErrors?.name).toBeDefined();
    expect(invalidResult.fieldErrors?.companyName).toBeDefined();
    expect(invalidResult.fieldErrors?.businessType).toBeDefined();
    expect(invalidResult.fieldErrors?.contactValue).toBeDefined();
    expect(invalidResult.fieldErrors?.cityCountry).toBeDefined();
  });

  it('detects honeypot bot submissions cleanly without throwing', () => {
    const botResult = validateLeadSubmission({
      name: 'Spammer',
      companyName: 'Spam Co',
      businessType: 'brokerage',
      contactMethod: 'email',
      contactValue: 'spam@example.com',
      cityCountry: 'Nowhere',
      website_url: 'https://spam-link.biz',
    });

    expect(botResult.valid).toBe(true);
    expect(botResult.data?.isHoneypotTriggered).toBe(true);
  });

  it('enforces per-IP rate limiting after 5 requests within window', () => {
    const ip = '203.0.113.42';
    const start = 1_700_000_000_000;

    for (let i = 0; i < 5; i++) {
      const check = checkLeadRateLimit(ip, start + i * 1000);
      expect(check.allowed).toBe(true);
    }

    const sixth = checkLeadRateLimit(ip, start + 6000);
    expect(sixth.allowed).toBe(false);
    expect(sixth.retryAfterSeconds).toBeGreaterThan(0);
  });
});
