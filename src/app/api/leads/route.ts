import { NextRequest, NextResponse } from 'next/server';
import {
  checkLeadRateLimit,
  LeadSubmissionInput,
  persistAndDispatchLead,
  validateLeadSubmission,
} from '@/lib/leads';

export const runtime = 'nodejs';

function extractClientIp(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) {
    const first = forwarded.split(',')[0]?.trim();
    if (first) return first;
  }
  const realIp = request.headers.get('x-real-ip')?.trim();
  if (realIp) return realIp;
  return '127.0.0.1';
}

export async function POST(request: NextRequest) {
  const ip = extractClientIp(request);
  const rate = checkLeadRateLimit(ip);

  if (!rate.allowed) {
    return NextResponse.json(
      {
        ok: false,
        error: 'rate_limited',
        message:
          'تم تجاوز الحد المسموح من الطلبات خلال فترة قصيرة. يرجى المحاولة بعد دقائق أو التواصل معنا مباشرة.',
        messageEn:
          'Too many requests submitted in a short period. Please try again shortly or contact us directly.',
      },
      {
        status: 429,
        headers: {
          'Retry-After': String(rate.retryAfterSeconds),
        },
      }
    );
  }

  let body: LeadSubmissionInput;
  try {
    body = (await request.json()) as LeadSubmissionInput;
  } catch {
    return NextResponse.json(
      {
        ok: false,
        error: 'invalid_json',
        message: 'صيغة البيانات المرسلة غير صالحة.',
        messageEn: 'Invalid request payload format.',
      },
      { status: 400 }
    );
  }

  const validation = validateLeadSubmission(body);

  if (!validation.valid || !validation.data) {
    return NextResponse.json(
      {
        ok: false,
        error: 'validation_failed',
        fieldErrors: validation.fieldErrors ?? {},
      },
      { status: 400 }
    );
  }

  if (validation.data.isHoneypotTriggered) {
    return NextResponse.json(
      {
        ok: true,
        status: 'filtered',
        referenceId: 'AQAR-FILTERED',
      },
      { status: 200 }
    );
  }

  try {
    const dispatchResult = await persistAndDispatchLead(validation.data);

    return NextResponse.json(
      {
        ok: true,
        status: 'received',
        referenceId: dispatchResult.referenceId,
        createdAt: dispatchResult.createdAt,
        deliveryMode: dispatchResult.deliveryMode,
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      {
        ok: false,
        error: 'internal_error',
        message:
          'تعذر حفظ الطلب تلقائياً في هذه اللحظة. يرجى استخدام خيار المراسلة المباشرة أدناه.',
        messageEn:
          'Unable to process your request automatically right now. Please use the direct contact option below.',
      },
      { status: 500 }
    );
  }
}
