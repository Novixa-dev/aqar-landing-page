import { describe, expect, it } from 'vitest';
import {
  AUDIENCE_ITEMS,
  CAPABILITY_GROUPS,
  CUSTOMIZATION_PILLARS,
  DELIVERY_STEPS,
  DEMO_OPTIONS,
  FAQ_ITEMS,
  HERO_CONTENT,
  PRICING_SCOPE_CONTENT,
  PROBLEM_OUTCOME_ITEMS,
  ROLE_MATRIX_ITEMS,
  WALKTHROUGH_STEPS,
} from '@/content/aqar-content';
import { EXTERNAL_ROUTES } from '@/lib/site';

describe('Novixa Aqar Content & Verified Claims Integrity', () => {
  it('defines all 8 verified business roles matching ../novixa-aqar Filament panels', () => {
    expect(ROLE_MATRIX_ITEMS).toHaveLength(8);
    const roleKeys = ROLE_MATRIX_ITEMS.map((r) => r.roleKey);
    expect(roleKeys).toEqual([
      'super_admin',
      'staff',
      'agent',
      'landlord',
      'tenant',
      'buyer',
      'seller',
      'contractor',
    ]);
  });

  it('configures the 2 live demo options with primary generic demo and explicit disclaimers', () => {
    expect(DEMO_OPTIONS).toHaveLength(2);
    const primary = DEMO_OPTIONS.find((d) => d.isPrimary);
    expect(primary).toBeDefined();
    expect(primary?.url).toBe('https://aqar-demo.novixa.dev/');

    for (const demo of DEMO_OPTIONS) {
      expect(demo.disclaimer.ar.length).toBeGreaterThan(20);
      expect(demo.disclaimer.en.length).toBeGreaterThan(20);
      expect(demo.url).toMatch(/^https:\/\//);
    }
  });

  it('states the $500 starting price and explicitly excludes hosting, servers, and domain', () => {
    expect(PRICING_SCOPE_CONTENT.startingPriceCard.priceValue).toBe('$500');
    expect(PRICING_SCOPE_CONTENT.startingPriceCard.priceCurrency).toBe('USD');

    const exclusionsAr = PRICING_SCOPE_CONTENT.explicitExclusions.items.ar.join(' ');
    const exclusionsEn = PRICING_SCOPE_CONTENT.explicitExclusions.items.en.join(' ');

    expect(exclusionsAr).toContain('الاستضافة');
    expect(exclusionsAr).toContain('النطاق');
    expect(exclusionsEn.toLowerCase()).toContain('hosting');
    expect(exclusionsEn.toLowerCase()).toContain('domain');
  });

  it('contains zero .example placeholder URLs or leaked demo credentials', () => {
    const serialized = JSON.stringify({
      HERO_CONTENT,
      AUDIENCE_ITEMS,
      PROBLEM_OUTCOME_ITEMS,
      CAPABILITY_GROUPS,
      WALKTHROUGH_STEPS,
      ROLE_MATRIX_ITEMS,
      CUSTOMIZATION_PILLARS,
      DEMO_OPTIONS,
      PRICING_SCOPE_CONTENT,
      DELIVERY_STEPS,
      FAQ_ITEMS,
      EXTERNAL_ROUTES,
    });

    expect(serialized).not.toContain('.example');
    expect(serialized).not.toContain('password123');
    expect(serialized).not.toContain('admin@aqar');
  });
});
