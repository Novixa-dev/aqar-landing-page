/**
 * Privacy-safe conversion & interaction telemetry.
 *
 * Strictly enforces PRD §4 & §14: never accepts or transmits PII (name, email,
 * phone, company, free-text message, or secrets) in event properties.
 */

export type AqarAnalyticsEvent =
  | 'aqar_landing_view'
  | 'aqar_demo_click'
  | 'aqar_cta_click'
  | 'aqar_request_demo_start'
  | 'aqar_request_demo_submit'
  | 'aqar_lead_submitted'
  | 'aqar_lead_validation_error'
  | 'aqar_whatsapp_click'
  | 'aqar_email_click'
  | 'aqar_pricing_section_view'
  | 'aqar_language_switch';

const FORBIDDEN_PII_KEYS = new Set([
  'name',
  'fullname',
  'email',
  'phone',
  'whatsapp',
  'company',
  'companyname',
  'officename',
  'contactvalue',
  'message',
  'notes',
  'details',
  'location',
  'citycountry',
  'address',
  'ip',
]);

const EMAIL_VALUE_PATTERN = /[^\s@]+@[^\s@]+\.[^\s@]+/;
const PHONE_VALUE_PATTERN = /(?:^|\s)[+\d][\d\s().-]{6,}/;

export function sanitizeAnalyticsProps(
  props?: Record<string, string | number | boolean | undefined>
): Record<string, string | number | boolean> {
  if (!props) return {};
  const clean: Record<string, string | number | boolean> = {};
  for (const [key, value] of Object.entries(props)) {
    if (value === undefined) continue;
    const normalizedKey = key.toLowerCase().replace(/[^a-z0-9]/g, '');
    if (FORBIDDEN_PII_KEYS.has(normalizedKey)) {
      continue;
    }
    if (typeof value === 'string') {
      if (EMAIL_VALUE_PATTERN.test(value) || PHONE_VALUE_PATTERN.test(value)) {
        continue;
      }
      clean[key] = value.slice(0, 80);
    } else {
      clean[key] = value;
    }
  }
  return clean;
}

export function trackAqarEvent(
  event: AqarAnalyticsEvent,
  props?: Record<string, string | number | boolean | undefined>
): void {
  const safeProps = sanitizeAnalyticsProps(props);

  if (typeof window === 'undefined') return;

  try {
    const win = window as Window & {
      dataLayer?: Array<Record<string, unknown>>;
      __aqarEvents?: Array<{
        event: AqarAnalyticsEvent;
        props: Record<string, unknown>;
        ts: number;
      }>;
    };

    if (!win.__aqarEvents) {
      win.__aqarEvents = [];
    }
    win.__aqarEvents.push({ event, props: safeProps, ts: Date.now() });

    if (Array.isArray(win.dataLayer)) {
      win.dataLayer.push({ event, ...safeProps });
    }
  } catch {
    // Analytics must never interrupt user interaction.
  }
}

export const trackEvent = trackAqarEvent;
