import type { Metadata, Viewport } from 'next';
import { inter, ibmPlexSansArabic, alexandria } from './fonts';
import { getSiteUrl } from '@/lib/site';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: 'نوفكسا عقار | Novixa Aqar — نظام عقاري متكامل يُشكَّل على مقاس شركتك',
    template: '%s | Novixa Aqar',
  },
  applicationName: 'Novixa Aqar',
  description:
    'نظام عقاري متكامل للشركات والمكاتب العقارية وإدارة الأملاك يجمع البوابة العامة و8 لوحات تشغيل متعددة الأدوار بهوية شركتك — يبدأ من 500$.',
  authors: [{ name: 'Novixa', url: getSiteUrl() }],
  creator: 'Novixa',
  publisher: 'Novixa',
  category: 'business',
  formatDetection: { email: false, address: false, telephone: false },
  appleWebApp: {
    capable: true,
    title: 'Novixa Aqar',
    statusBarStyle: 'black-translucent',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icons/icon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [{ url: '/icons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  manifest: '/manifest.webmanifest',
};

export const viewport: Viewport = {
  themeColor: '#ffffff',
};

const SET_LANG_DIR_SCRIPT = `
(function () {
  var lang = location.pathname.split('/')[1] === 'en' ? 'en' : 'ar';
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="ar"
      dir="rtl"
      suppressHydrationWarning
      className={`${inter.variable} ${ibmPlexSansArabic.variable} ${alexandria.variable} scroll-smooth`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: SET_LANG_DIR_SCRIPT }} />
      </head>
      <body className="bg-[#f8fafc] text-slate-800 min-h-screen flex flex-col antialiased selection:bg-[#00b399] selection:text-white">
        {children}
      </body>
    </html>
  );
}
