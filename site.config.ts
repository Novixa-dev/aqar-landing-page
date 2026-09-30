/**
 * Single source of truth for every externally-facing detail on this site.
 *
 * Nothing else in the codebase hard-codes a phone number, an email address,
 * a URL or a price — change them here and they change everywhere.
 *
 * `requireRealContacts` is on, so the build fails if any contact value is
 * reverted to a `TODO:` placeholder.
 */

export type ContactPlaceholder = `TODO:${string}`;

export const site = {
  /** Canonical origin of this landing page. Used for sitemap + og:url. */
  url: 'https://aqar.novixa.dev', // TODO: confirm once the domain is pointed.

  /** Build fails if any `contact` value below is still a TODO placeholder. */
  requireRealContacts: true,

  brand: {
    name: { ar: 'نوفيكسا عقار', en: 'Novixa Aqar' },
    vendor: { ar: 'نوفيكسا', en: 'Novixa' },
    tagline: { ar: 'نبني التقنية التي تجعل أعمالك أقوى.', en: 'Engineered for Growth.' },
    /** The colours come straight from the product's own logo.svg. */
    colors: { ink: '#0F172A', blue: '#3B82F6', emerald: '#10B981', accent: '#2563eb' },
  },

  links: {
    demo: 'https://aqar-demo.dexal.net',
    demoProperties: 'https://aqar-demo.dexal.net/properties',
    demoProperty: 'https://aqar-demo.dexal.net/properties/1',
    demoCalculators: 'https://aqar-demo.dexal.net/calculators',
    demoAdmin: 'https://aqar-demo.dexal.net/admin',
    demoLogin: 'https://aqar-demo.dexal.net/login',
    repo: 'https://github.com/Novixa-dev/novixa-aqar',
    /**
     * The Novixa site's own canonical URL is https://novixa.dev/ar, but that
     * domain does not resolve yet — link the live Vercel deployment until it
     * does, then swap both of these over.
     */
    vendorSite: 'https://novixa-cyan.vercel.app/ar' as string | null,
    vendorProduct: 'https://novixa-cyan.vercel.app/ar/products/aqar' as string | null,
  },

  /** Digits only for `whatsapp` (international format, no `+`). */
  contact: {
    whatsapp: '967776248526' as string | ContactPlaceholder,
    email: 'ak01redwan@gmail.com' as string | ContactPlaceholder,
    phone: '+967776248526' as string | ContactPlaceholder,
    /** Optional Calendly/Cal.com link for "book a walkthrough". */
    booking: null as string | null,
  },

  /**
   * Pricing. Shown as a *starting* price. `amountUsd` is the anchor;
   * `amountSar` is the regional equivalent quoted in the commercial brief,
   * not a live FX conversion.
   */
  pricing: { show: true, amountUsd: 500, amountSar: 2000 },

  /** Partner programme. The commission rate is published, per the launch post. */
  partners: { show: true, publishCommissionRate: true, commissionPercent: 30 },

  /**
   * Demo access. The seeded accounts are published deliberately — the launch
   * post shares them openly so a prospect can self-serve into the panels.
   * They are demo-only accounts on throwaway data.
   */
  demoAccess: {
    publishLogins: true,
    password: 'password',
    accounts: [
      {
        email: 'admin@darhadhramaut.ye',
        role: { ar: 'حساب الإدارة', en: 'Administrator' },
        note: { ar: 'إشراف كامل على النظام', en: 'Full oversight of the system' },
        panel: 'https://aqar-demo.dexal.net/admin',
      },
      {
        email: 'agent@darhadhramaut.ye',
        role: { ar: 'الوكيل العقاري', en: 'Real-estate agent' },
        note: { ar: 'العقارات والمواعيد والعملاء', en: 'Properties, appointments and clients' },
        panel: 'https://aqar-demo.dexal.net/login',
      },
    ],
  },
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

/** Builds a tel: link, or null when the number has not been set yet. */
export function telLink(): string | null {
  const p = site.contact.phone;
  return isPlaceholder(p) ? null : `tel:${p}`;
}
