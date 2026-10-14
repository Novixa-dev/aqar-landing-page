import nodemailer from 'nodemailer';
import { Resend } from 'resend';
import { getServerEnv } from '@/lib/env';

type MailPayload = {
  from: string;
  to: string[];
  replyTo?: string;
  subject: string;
  html: string;
};

export type MailSendResult =
  | { ok: true; provider: 'resend' | 'smtp'; id?: string }
  | { ok: false; reason: 'not_configured' | 'send_failed'; error?: string };

export function isMailConfigured(): boolean {
  const env = getServerEnv();
  if (env.RESEND_API_KEY) return true;
  if (env.SMTP_HOST && env.SMTP_PORT && env.SMTP_USER && env.SMTP_PASS) return true;
  return false;
}

export async function sendTransactionalMail(payload: MailPayload): Promise<MailSendResult> {
  const env = getServerEnv();

  if (env.RESEND_API_KEY) {
    try {
      const resend = new Resend(env.RESEND_API_KEY);
      const { data, error } = await resend.emails.send({
        from: payload.from,
        to: payload.to,
        replyTo: payload.replyTo,
        subject: payload.subject,
        html: payload.html,
      });

      if (error) {
        return { ok: false, reason: 'send_failed', error: error.message };
      }

      return { ok: true, provider: 'resend', id: data?.id };
    } catch (err) {
      return {
        ok: false,
        reason: 'send_failed',
        error: err instanceof Error ? err.message : 'Unknown Resend error',
      };
    }
  }

  if (env.SMTP_HOST && env.SMTP_PORT && env.SMTP_USER && env.SMTP_PASS) {
    try {
      const port = Number(env.SMTP_PORT);
      const secure = env.SMTP_SECURE ? env.SMTP_SECURE === 'true' : port === 465;

      const transporter = nodemailer.createTransport({
        host: env.SMTP_HOST,
        port,
        secure,
        auth: {
          user: env.SMTP_USER,
          pass: env.SMTP_PASS,
        },
      });

      const info = await transporter.sendMail({
        from: payload.from,
        to: payload.to.join(', '),
        replyTo: payload.replyTo,
        subject: payload.subject,
        html: payload.html,
      });

      return { ok: true, provider: 'smtp', id: info.messageId };
    } catch (err) {
      return {
        ok: false,
        reason: 'send_failed',
        error: err instanceof Error ? err.message : 'Unknown SMTP error',
      };
    }
  }

  return { ok: false, reason: 'not_configured' };
}
