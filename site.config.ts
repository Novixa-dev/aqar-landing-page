/**
 * Single source of truth for every externally-facing detail on this site.
 *
 * ────────────────────────────────────────────────────────────────────────────
 *  BEFORE LAUNCH: every value marked `TODO` below must be replaced with a real
 *  one. Nothing else in the codebase hard-codes a phone number, an email
 *  address or a URL — change them here and they change everywhere.
 *
 *  Run `npm run build` after editing: the build fails loudly if a required
 *  contact channel is still a placeholder AND `requireRealContacts` is true.
 * ────────────────────────────────────────────────────────────────────────────
 */

export type ContactPlaceholder = `TODO:${string}`;

export const site = {
  /** Canonical origin of this landing page. Used for sitemap + og:url. */
  url: 'https://aqar.novixa.dev', // TODO: confirm the real domain before launch.

  /** Set to true once every TODO below is filled in; the build then verifies it. */
  requireRealContacts: false,

  brand: {
    name: { ar: 'نوفيكسا عقار', en: 'Novixa Aqar' },
    vendor: { ar: 'نوفيكسا', en: 'Novixa' },
    /** The colours come straight from the product's own logo.svg. */
    colors: { ink: '#0F172A', blue: '#3B82F6', emerald: '#10B981', accent: '#2563eb' },
  },

  /** Live, verified links — these are real and safe to publish. */
  links: {
    demo: 'https://aqar-demo.dexal.net',
    demoProperties: 'https://aqar-demo.dexal.net/properties',
    demoProperty: 'https://aqar-demo.dexal.net/properties/1',
    demoCalculators: 'https://aqar-demo.dexal.net/calculators',
    repo: 'https://github.com/Novixa-dev/novixa-aqar',
    /** `novixa.dev` did not resolve at build time — left null on purpose. */
    vendorSite: null as string | null, // TODO: set once the Novixa site is live.
  },

  /**
   * Contact channels. Digits only for `whatsapp` (international format, no +).
   * These are PLACEHOLDERS — the numbers in the public demo belong to the
   * fictional demo agency "دار حضرموت العقارية", not to Novixa, and are
   * deliberately NOT reused here.
   */
  contact: {
    whatsapp: 'TODO:WHATSAPP_NUMBER' as string | ContactPlaceholder,
    email: 'TODO:SALES_EMAIL' as string | ContactPlaceholder,
    phone: 'TODO:PHONE_NUMBER' as string | ContactPlaceholder,
    /** Optional Calendly/Cal.com link for "book a walkthrough". */
    booking: null as string | null,
  },

  /**
   * Pricing. Shown as a *starting* price, per the product owner's decision.
   * `amountUsd` is the anchor; `amountSar` is the regional equivalent quoted
   * in the original commercial brief, not a live FX conversion.
   */
  pricing: {
    show: true,
    amountUsd: 500,
    amountSar: 2000,
    /** Displayed beneath the figure so the anchor can't be read as a fixed price. */
    variesBy: ['market', 'companySize', 'customization', 'deployment', 'support'] as const,
  },

  /** Partner programme: recruit resellers, but the rate stays off the page. */
  partners: { show: true, publishCommissionRate: false },

  /**
   * Demo access. The 8 seeded role logins are NOT published here by decision —
   * they are shared one-to-one during a sales conversation so demo data stays
   * intact for the next prospect.
   */
  demoAccess: { publishLogins: false },
} as const;

/** True when a contact value is still an unfilled placeholder. */
export const isPlaceholder = (value: string | null): boolean =>
  typeof value === 'string' && value.startsWith('TODO:');

/** Builds a wa.me link, or null when the number has not been set yet. */
export function whatsappLink(message: string): string | null {
  const n = site.contact.whatsapp;
  if (isPlaceholder(n)) return null;
  return `https://wa.me/${n}?text=${encodeURIComponent(message)}`;
}

/** Builds a mailto: link, or null when the address has not been set yet. */
export function mailtoLink(subject: string): string | null {
  const e = site.contact.email;
  if (isPlaceholder(e)) return null;
  return `mailto:${e}?subject=${encodeURIComponent(subject)}`;
}
