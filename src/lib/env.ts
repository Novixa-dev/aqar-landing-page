export { getSiteUrl, absoluteUrl } from './site';

export function getServerEnv() {
  if (typeof window !== 'undefined') {
    throw new Error('SECURITY VIOLATION: getServerEnv() called in the browser.');
  }

  return {
    novixaContactEmail: process.env.NOVIXA_CONTACT_EMAIL || 'hello@novixa.dev',
    leadWebhookUrl: process.env.LEAD_WEBHOOK_URL || '',
    LEAD_WEBHOOK_URL: process.env.LEAD_WEBHOOK_URL || '',
    LEADS_STORAGE_PATH: process.env.LEADS_STORAGE_PATH || '',
    RESEND_API_KEY: process.env.RESEND_API_KEY || '',
    SMTP_HOST: process.env.SMTP_HOST || '',
    SMTP_PORT: process.env.SMTP_PORT || '',
    SMTP_SECURE: process.env.SMTP_SECURE || '',
    SMTP_USER: process.env.SMTP_USER || '',
    SMTP_PASS: process.env.SMTP_PASS || '',
    CONTACT_FROM_EMAIL:
      process.env.CONTACT_FROM_EMAIL || 'Novixa Aqar <onboarding@resend.dev>',
    CONTACT_TO_EMAIL:
      process.env.CONTACT_TO_EMAIL ||
      process.env.NOVIXA_CONTACT_EMAIL ||
      'hello@novixa.dev',
  };
}
