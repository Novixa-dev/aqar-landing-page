import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';
import { getSiteUrl } from '@/lib/site';

export const runtime = 'nodejs';

const SIZE = { width: 1200, height: 630 };

let fontPromise: Promise<Buffer> | null = null;
function loadFont(): Promise<Buffer> {
  if (!fontPromise) {
    fontPromise = readFile(path.join(process.cwd(), 'src/app/og/IBMPlexSansArabic-SemiBold.ttf'));
  }
  return fontPromise;
}

function clamp(value: string, max: number): string {
  const trimmed = value.trim();
  return trimmed.length > max ? `${trimmed.slice(0, max - 1)}…` : trimmed;
}

function rtlRun(value: string, rtl: boolean): string {
  return rtl ? value.split(' ').reverse().join(' ') : value;
}

function wrapLines(value: string, maxCharsPerLine: number, rtl: boolean): string[] {
  const words = value.split(/\s+/).filter(Boolean);
  const lines: string[] = [];
  let current = '';

  for (const word of words) {
    const candidate = current ? `${current} ${word}` : word;
    if (candidate.length > maxCharsPerLine && current) {
      lines.push(current);
      current = word;
    } else {
      current = candidate;
    }
  }
  if (current) lines.push(current);
  return rtl ? lines.map((line) => line.split(' ').reverse().join(' ')) : lines;
}

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const langParam = searchParams.get('lang') || searchParams.get('l');
  const lang = langParam === 'en' ? 'en' : 'ar';
  const isAr = lang === 'ar';

  const title = clamp(
    searchParams.get('title') ||
      searchParams.get('t') ||
      (isAr
        ? 'نوفكسا عقار — نظام عقاري متكامل يُشكَّل على مقاس شركتك'
        : 'Novixa Aqar — Configurable Real-Estate Platform for Your Business'),
    110
  );
  const description = clamp(
    searchParams.get('subtitle') ||
      searchParams.get('d') ||
      (isAr
        ? 'بوابة عقارية عامة + 8 لوحات تشغيل متعددة الأدوار للمبيعات والتأجير وإدارة الأملاك — يبدأ من 500$.'
        : 'Public property portal + 8 role-based workspaces for sales, leasing & property management — starting at $500.'),
    170
  );
  const eyebrow = clamp(
    searchParams.get('tag') ||
      searchParams.get('k') ||
      (isAr ? 'نوفكسا عقار | يبدأ من 500$' : 'NOVIXA AQAR | STARTS AT $500'),
    44
  );

  const fontData = await loadFont();

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px 76px',
          background: '#020617',
          backgroundImage:
            'radial-gradient(circle at 82% 18%, rgba(37,99,235,0.42) 0%, rgba(2,6,23,0) 58%), radial-gradient(circle at 14% 88%, rgba(20,184,166,0.22) 0%, rgba(2,6,23,0) 55%)',
          direction: isAr ? 'rtl' : 'ltr',
          fontFamily: 'Plex',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            flexDirection: isAr ? 'row-reverse' : 'row',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 18, flexDirection: isAr ? 'row-reverse' : 'row' }}>
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: 16,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(135deg, #2563EB 0%, #0F172A 100%)',
                border: '1px solid rgba(56,189,248,0.35)',
              }}
            >
              <svg width="38" height="38" viewBox="0 0 48 48" fill="none">
                <path d="M24 4L42 14.5V33.5L24 44L6 33.5V14.5L24 4Z" stroke="#38BDF8" strokeWidth="2" strokeOpacity="0.6" />
                <path d="M14 34V14L34 34V14" stroke="#FFFFFF" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="14" cy="14" r="3" fill="#38BDF8" />
                <circle cx="34" cy="34" r="3" fill="#2563EB" />
              </svg>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: isAr ? 'flex-end' : 'flex-start' }}>
              <span style={{ fontSize: 30, color: '#FFFFFF', letterSpacing: isAr ? 0 : '0.02em' }}>NOVIXA AQAR</span>
              <span style={{ fontSize: 15, color: '#94A3B8' }}>
                {isAr
                  ? rtlRun('نظام عقاري قابل للتخصيص للشركات والمكاتب العقارية', true)
                  : 'Configurable B2B Real-Estate Platform'}
              </span>
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '8px 18px',
              borderRadius: 9999,
              background: 'rgba(15,23,42,0.85)',
              border: '1px solid rgba(56,189,248,0.35)',
              color: '#38BDF8',
              fontSize: 16,
            }}
          >
            <span>{rtlRun(eyebrow, isAr)}</span>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 20, maxWidth: 1040, width: '100%' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: isAr ? 'flex-end' : 'flex-start' }}>
            {wrapLines(title, isAr ? 38 : 42, isAr).slice(0, 3).map((line, i) => (
              <div key={i} style={{ display: 'flex', fontSize: 48, color: '#FFFFFF', lineHeight: 1.34 }}>
                {line}
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: isAr ? 'flex-end' : 'flex-start' }}>
            {wrapLines(description, isAr ? 76 : 86, isAr).slice(0, 3).map((line, i) => (
              <div key={i} style={{ display: 'flex', fontSize: 22, color: '#CBD5E1', lineHeight: 1.55 }}>
                {line}
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            paddingTop: 22,
            flexDirection: isAr ? 'row-reverse' : 'row',
            borderTop: '1px solid rgba(255,255,255,0.1)',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: isAr ? 'row-reverse' : 'row',
              gap: 20,
              color: '#94A3B8',
              fontSize: 16,
            }}
          >
            <span>{isAr ? '8 لوحات تشغيل' : '8 Role Panels'}</span>
            <span>·</span>
            <span>{isAr ? 'بوابة عامة + إدارة أملاك' : 'Public Portal + Property Management'}</span>
            <span>·</span>
            <span>{isAr ? 'عربي / English' : 'Arabic / English'}</span>
          </div>
          <div style={{ color: '#38BDF8', fontSize: 18 }}>{new URL(getSiteUrl()).host}</div>
        </div>
      </div>
    ),
    {
      ...SIZE,
      fonts: [{ name: 'Plex', data: fontData, style: 'normal', weight: 600 }],
      headers: {
        'Cache-Control': 'public, immutable, no-transform, max-age=31536000',
      },
    }
  );
}
