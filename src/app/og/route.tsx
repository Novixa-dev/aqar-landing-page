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

function bidiWords(value: string, isAr: boolean): string {
  if (!isAr) return value;
  return value.split(/\s+/).filter(Boolean).reverse().join(' ');
}

function wrapLines(value: string, maxCharsPerLine: number, isAr: boolean): string[] {
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

  return isAr ? lines.map((line) => line.split(/\s+/).reverse().join(' ')) : lines;
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
        ? 'نوڤيكسا عقار — نظام عقاري متكامل يشكل على مقاس شركتك'
        : 'Novixa Aqar — Configurable Real-Estate Platform for Your Business'),
    110
  );

  const description = clamp(
    searchParams.get('subtitle') ||
      searchParams.get('d') ||
      (isAr
        ? 'بوابة عقارية عامة + 8 لوحات تشغيل متعددة الأدوار للمبيعات والتأجير وإدارة الأملاك — يبدأ من 500$.'
        : 'Public property portal + 8 role-based workspaces for sales, leasing, & property management — starting at $500.'),
    170
  );

  const eyebrow = clamp(
    searchParams.get('tag') ||
      searchParams.get('k') ||
      (isAr ? 'نوڤيكسا عقار | يبدأ من 500$' : 'NOVIXA AQAR | STARTS AT $500'),
    44
  );

  const fontData = await loadFont();

  const titleLines = wrapLines(title, isAr ? 36 : 42, isAr).slice(0, 3);
  const descLines = wrapLines(description, isAr ? 72 : 82, isAr).slice(0, 3);

  // Bottom pills texts
  const pill1 = isAr ? bidiWords('8 لوحات تشغيل مستقلة', true) : '8 Role Workspaces';
  const pill2 = isAr ? bidiWords('بوابة عامة + إدارة أملاك', true) : 'Public Portal + PM';
  const pill3 = isAr ? bidiWords('عربي / English', true) : 'Arabic / English';
  const brandSub = isAr
    ? bidiWords('منصة عقارية متكاملة للشركات وإدارة الأملاك', true)
    : 'Configurable PropTech Platform';

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '56px 68px',
          background: '#070e17',
          backgroundImage:
            'radial-gradient(circle at 86% 16%, rgba(0,179,153,0.36) 0%, rgba(7,14,23,0) 60%), radial-gradient(circle at 14% 88%, rgba(0,143,122,0.22) 0%, rgba(7,14,23,0) 55%)',
          direction: isAr ? 'rtl' : 'ltr',
          fontFamily: 'Plex',
        }}
      >
        {/* Top Header Row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            flexDirection: isAr ? 'row-reverse' : 'row',
          }}
        >
          {/* Brand Logo & Name */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              flexDirection: isAr ? 'row-reverse' : 'row',
            }}
          >
            <div
              style={{
                width: 60,
                height: 60,
                borderRadius: 18,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(135deg, #00b399 0%, #008f7a 100%)',
                boxShadow: '0 8px 24px rgba(0,179,153,0.3)',
                border: '1px solid rgba(0,203,176,0.4)',
              }}
            >
              {/* Architectural Building Icon */}
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
                <path
                  d="M3 21h18M5 21V7l8-4v18M13 21V3l6 3v15M9 9v.01M9 13v.01M9 17v.01M17 9v.01M17 13v.01M17 17v.01"
                  stroke="#FFFFFF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                alignItems: isAr ? 'flex-end' : 'flex-start',
              }}
            >
              <span
                style={{
                  fontSize: 28,
                  fontWeight: 700,
                  color: '#FFFFFF',
                  letterSpacing: isAr ? 0 : '0.02em',
                }}
              >
                NOVIXA AQAR
              </span>
              <span style={{ fontSize: 14, color: '#94A3B8' }}>{brandSub}</span>
            </div>
          </div>

          {/* Eyebrow Price Tag Pill */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              padding: '8px 20px',
              borderRadius: 9999,
              background: 'rgba(0,179,153,0.12)',
              border: '1px solid rgba(0,179,153,0.45)',
              color: '#00cbb0',
              fontSize: 16,
              fontWeight: 700,
              flexDirection: isAr ? 'row-reverse' : 'row',
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: 9999,
                background: '#00cbb0',
              }}
            />
            <span>{bidiWords(eyebrow, isAr)}</span>
          </div>
        </div>

        {/* Center Content Block: Title & Description */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
            maxWidth: 1060,
            width: '100%',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: isAr ? 'flex-end' : 'flex-start',
            }}
          >
            {titleLines.map((line, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  fontSize: 46,
                  fontWeight: 700,
                  color: '#FFFFFF',
                  lineHeight: 1.3,
                  textShadow: '0 2px 10px rgba(0,0,0,0.5)',
                }}
              >
                {line}
              </div>
            ))}
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: isAr ? 'flex-end' : 'flex-start',
            }}
          >
            {descLines.map((line, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  fontSize: 22,
                  color: '#CBD5E1',
                  lineHeight: 1.5,
                }}
              >
                {line}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Metadata & Badges Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            paddingTop: 20,
            flexDirection: isAr ? 'row-reverse' : 'row',
            borderTop: '1px solid rgba(255,255,255,0.12)',
          }}
        >
          {/* Trust Highlights */}
          <div
            style={{
              display: 'flex',
              flexDirection: isAr ? 'row-reverse' : 'row',
              gap: 16,
              color: '#94A3B8',
              fontSize: 15,
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                padding: '6px 14px',
                borderRadius: 10,
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: '#E2E8F0',
              }}
            >
              <span>{pill1}</span>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                padding: '6px 14px',
                borderRadius: 10,
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: '#E2E8F0',
              }}
            >
              <span>{pill2}</span>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                padding: '6px 14px',
                borderRadius: 10,
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: '#E2E8F0',
              }}
            >
              <span>{pill3}</span>
            </div>
          </div>

          {/* Domain with status indicator */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              color: '#00cbb0',
              fontSize: 17,
              fontWeight: 600,
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: 9999,
                background: '#00cbb0',
              }}
            />
            <span>{new URL(getSiteUrl()).host}</span>
          </div>
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
