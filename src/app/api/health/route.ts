import { NextResponse } from 'next/server';
import { isMailConfigured } from '@/lib/mail';

export async function GET() {
  return NextResponse.json({
    ok: true,
    service: 'novixa-aqar-landing',
    mailConfigured: isMailConfigured(),
    timestamp: new Date().toISOString(),
  });
}
