/**
 * Single source of truth for the site's public origin and external verified routes.
 */

const FALLBACK_DEV_ORIGIN = 'http://localhost:3000';

function normalize(value: string): string {
  const trimmed = value.trim().replace(/\/$/, '');
  if (!trimmed) return '';
  return /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
}

export function getSiteUrl(): string {
  const candidates = [
    process.env.NEXT_PUBLIC_SITE_URL,
    process.env.SITE_URL,
    process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL,
    process.env.VERCEL_PROJECT_PRODUCTION_URL,
    process.env.RAILWAY_PUBLIC_DOMAIN,
    process.env.NEXT_PUBLIC_VERCEL_URL,
    process.env.VERCEL_URL,
  ];

  for (const candidate of candidates) {
    if (!candidate) continue;
    const normalized = normalize(candidate);
    if (normalized) return normalized;
  }

  return FALLBACK_DEV_ORIGIN;
}

export function absoluteUrl(path = ''): string {
  if (/^https?:\/\//i.test(path)) return path;
  const base = getSiteUrl();
  if (!path) return base;
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}

export const EXTERNAL_ROUTES = {
  primaryDemo: process.env.NEXT_PUBLIC_AQAR_PRIMARY_DEMO_URL || 'https://aqar-demo.novixa.dev/',
  brandedDemoDexal: process.env.NEXT_PUBLIC_AQAR_BRANDED_DEMO_DEXAL_URL || 'https://aqar-demo.dexal.net/',
  brandedDemoRusu: process.env.NEXT_PUBLIC_AQAR_BRANDED_DEMO_RUSU_URL || 'https://aqar-demo2.novixa.dev/',
  novixaHome: process.env.NEXT_PUBLIC_NOVIXA_HOME_URL || 'https://novixa.dev',
} as const;

export const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'hello@novixa.dev';

const rawWhatsApp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/[^\d]/g, '') ?? '';
export const WHATSAPP_NUMBER: string | undefined = rawWhatsApp || undefined;
export const WHATSAPP_URL: string | undefined = WHATSAPP_NUMBER
  ? `https://wa.me/${WHATSAPP_NUMBER}`
  : undefined;
