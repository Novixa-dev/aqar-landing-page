import { promises as fs } from 'node:fs';
import path from 'node:path';
import { getServerEnv } from '@/lib/env';
import { escapeHtml } from '@/lib/html';
import { sendTransactionalMail } from '@/lib/mail';
import {
  BusinessTypeOption,
  ContactMethodOption,
  LeadSubmissionInput,
  LeadValidationResult,
  ScopeTierOption,
  ValidatedLeadPayload,
  validateLeadSubmission,
} from '@/lib/lead-validation';

export {
  type BusinessTypeOption,
  type ContactMethodOption,
  type LeadSubmissionInput,
  type LeadValidationResult,
  type ScopeTierOption,
  type ValidatedLeadPayload,
  validateLeadSubmission,
};

interface RateBucket {
  count: number;
  resetAt: number;
}

const rateBuckets = new Map<string, RateBucket>();
const RATE_WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const RATE_MAX_REQUESTS = 5;

export function checkLeadRateLimit(
  ipKey: string,
  now = Date.now()
): {
  allowed: boolean;
  remaining: number;
  retryAfterSeconds: number;
} {
  const key = ipKey.trim() || 'anonymous';
  const current = rateBuckets.get(key);

  if (!current || now >= current.resetAt) {
    rateBuckets.set(key, {
      count: 1,
      resetAt: now + RATE_WINDOW_MS,
    });
    return {
      allowed: true,
      remaining: RATE_MAX_REQUESTS - 1,
      retryAfterSeconds: 0,
    };
  }

  if (current.count >= RATE_MAX_REQUESTS) {
    return {
      allowed: false,
      remaining: 0,
      retryAfterSeconds: Math.max(1, Math.ceil((current.resetAt - now) / 1000)),
    };
  }

  current.count += 1;
  rateBuckets.set(key, current);
  return {
    allowed: true,
    remaining: Math.max(0, RATE_MAX_REQUESTS - current.count),
    retryAfterSeconds: 0,
  };
}

export function resetLeadRateLimitForTests(): void {
  rateBuckets.clear();
}

export interface StoredLeadRecord extends ValidatedLeadPayload {
  referenceId: string;
  createdAt: string;
  deliveryChannels: string[];
}

const memoryLeadsStore: StoredLeadRecord[] = [];

export function getStoredLeadsForTests(): StoredLeadRecord[] {
  return [...memoryLeadsStore];
}

export async function persistAndDispatchLead(
  payload: ValidatedLeadPayload
): Promise<{
  referenceId: string;
  createdAt: string;
  deliveryMode: 'realtime_notified' | 'recorded_locally';
  channels: string[];
}> {
  const now = new Date();
  const createdAt = now.toISOString();
  const shortHash = Math.random().toString(36).substring(2, 7).toUpperCase();
  const datePart = createdAt.slice(0, 10).replace(/-/g, '');
  const referenceId = `AQAR-${datePart}-${shortHash}`;
  const channels: string[] = [];

  const env = getServerEnv();
  const storagePath =
    env.LEADS_STORAGE_PATH?.trim() || path.join('/tmp', 'novixa-aqar-leads.jsonl');

  const record: StoredLeadRecord = {
    ...payload,
    referenceId,
    createdAt,
    deliveryChannels: channels,
  };

  try {
    await fs.mkdir(path.dirname(storagePath), { recursive: true });
    await fs.appendFile(storagePath, `${JSON.stringify(record)}\n`, 'utf8');
    channels.push('local_jsonl');
  } catch {
    // Fallback to in-memory store if filesystem is read-only
  }

  memoryLeadsStore.push(record);
  if (!channels.includes('memory_buffer')) {
    channels.push('memory_buffer');
  }

  if (env.LEAD_WEBHOOK_URL) {
    try {
      const response = await fetch(env.LEAD_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(record),
      });
      if (response.ok) {
        channels.push('webhook');
      }
    } catch {
      // Non-fatal; email or local storage still preserves the lead
    }
  }

  const mailResult = await sendTransactionalMail({
    from: env.CONTACT_FROM_EMAIL || 'Novixa Aqar <onboarding@resend.dev>',
    to: [env.CONTACT_TO_EMAIL || 'hello@novixa.dev'],
    replyTo: payload.contactMethod === 'email' ? payload.contactValue : undefined,
    subject: `[Novixa Aqar Lead ${referenceId}] ${payload.companyName} — ${payload.name}`,
    html: `
      <div style="font-family: sans-serif; max-width: 640px; margin: 0 auto; padding: 24px; background: #0f172a; color: #f8fafc; border-radius: 12px;">
        <h2 style="margin-top: 0; color: #38bdf8;">New Novixa Aqar Lead (${escapeHtml(referenceId)})</h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
          <tr><td style="padding: 8px 0; color: #94a3b8;">Name:</td><td style="padding: 8px 0; font-weight: 600;">${escapeHtml(payload.name)}</td></tr>
          <tr><td style="padding: 8px 0; color: #94a3b8;">Company / Agency:</td><td style="padding: 8px 0; font-weight: 600;">${escapeHtml(payload.companyName)}</td></tr>
          <tr><td style="padding: 8px 0; color: #94a3b8;">Business Type:</td><td style="padding: 8px 0;">${escapeHtml(payload.businessType)}</td></tr>
          <tr><td style="padding: 8px 0; color: #94a3b8;">Preferred Contact:</td><td style="padding: 8px 0;">${escapeHtml(payload.contactMethod)} — <strong>${escapeHtml(payload.contactValue)}</strong></td></tr>
          <tr><td style="padding: 8px 0; color: #94a3b8;">City / Country:</td><td style="padding: 8px 0;">${escapeHtml(payload.cityCountry)}</td></tr>
          <tr><td style="padding: 8px 0; color: #94a3b8;">Requested Scope:</td><td style="padding: 8px 0;">${escapeHtml(payload.scopeTier)}</td></tr>
          <tr><td style="padding: 8px 0; color: #94a3b8;">Locale:</td><td style="padding: 8px 0;">${escapeHtml(payload.lang)}</td></tr>
        </table>
        ${
          payload.notes
            ? `<div style="margin-top: 16px; padding: 12px; background: #1e293b; border-radius: 8px;">
                <div style="color: #94a3b8; font-size: 12px; margin-bottom: 6px;">Requirements / Notes:</div>
                <div style="white-space: pre-wrap;">${escapeHtml(payload.notes)}</div>
              </div>`
            : ''
        }
      </div>
    `,
  });

  if (mailResult.ok) {
    channels.push(`email_${mailResult.provider}`);
  }

  const realtimeNotified =
    channels.includes('webhook') ||
    channels.includes('email_resend') ||
    channels.includes('email_smtp');

  return {
    referenceId,
    createdAt,
    deliveryMode: realtimeNotified ? 'realtime_notified' : 'recorded_locally',
    channels,
  };
}
