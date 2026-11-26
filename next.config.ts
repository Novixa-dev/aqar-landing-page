import type { NextConfig } from 'next';

// Everything is self-hosted (next/font, next/image, same-origin API), plus
// Cloudflare's analytics beacon. Next's streamed RSC payload is inline
// <script>, so scripts need 'unsafe-inline' without a nonce middleware; the
// policy still pins every origin and blocks plugins, framing, <base> and
// cross-origin form posts. Dev mode (React refresh) needs 'unsafe-eval', so
// the policy is only sent from production builds.
const contentSecurityPolicy = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://static.cloudflareinsights.com",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  "connect-src 'self' https://cloudflareinsights.com",
  "frame-ancestors 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
  'upgrade-insecure-requests',
].join('; ');

const nextConfig: NextConfig = {
  distDir: 'dist',
  output: process.env.NEXT_OUTPUT === 'standalone' ? 'standalone' : undefined,
  reactStrictMode: true,
  poweredByHeader: false,
  outputFileTracingIncludes: {
    '/og': ['./src/app/og/*.ttf'],
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          ...(process.env.NODE_ENV === 'production'
            ? [{ key: 'Content-Security-Policy', value: contentSecurityPolicy }]
            : []),
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/ar',
        permanent: true,
      },
      {
        source: '/privacy',
        destination: '/ar/legal/privacy',
        permanent: true,
      },
      {
        source: '/terms',
        destination: '/ar/legal/terms',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
