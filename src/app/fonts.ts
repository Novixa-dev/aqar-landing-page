import localFont from 'next/font/local';

export const ibmPlexSansArabic = localFont({
  src: [
    { path: '../../public/fonts/IBMPlexSansArabic-arabic-400.woff2', weight: '400', style: 'normal' },
    { path: '../../public/fonts/IBMPlexSansArabic-latin-400.woff2', weight: '400', style: 'normal' },
    { path: '../../public/fonts/IBMPlexSansArabic-arabic-500.woff2', weight: '500', style: 'normal' },
    { path: '../../public/fonts/IBMPlexSansArabic-latin-500.woff2', weight: '500', style: 'normal' },
    { path: '../../public/fonts/IBMPlexSansArabic-arabic-600.woff2', weight: '600', style: 'normal' },
    { path: '../../public/fonts/IBMPlexSansArabic-latin-600.woff2', weight: '600', style: 'normal' },
    { path: '../../public/fonts/IBMPlexSansArabic-arabic-700.woff2', weight: '700', style: 'normal' },
    { path: '../../public/fonts/IBMPlexSansArabic-latin-700.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-arabic',
  display: 'optional',
  preload: true,
  fallback: ['system-ui', 'Segoe UI', 'Tahoma', 'Arial', 'sans-serif'],
  adjustFontFallback: 'Arial',
});

export const alexandria = localFont({
  src: [
    { path: '../../public/fonts/Alexandria-arabic-600.woff2', weight: '600', style: 'normal' },
    { path: '../../public/fonts/Alexandria-latin-600.woff2', weight: '600', style: 'normal' },
    { path: '../../public/fonts/Alexandria-arabic-700.woff2', weight: '700', style: 'normal' },
    { path: '../../public/fonts/Alexandria-latin-700.woff2', weight: '700', style: 'normal' },
    { path: '../../public/fonts/Alexandria-arabic-800.woff2', weight: '800', style: 'normal' },
    { path: '../../public/fonts/Alexandria-latin-800.woff2', weight: '800', style: 'normal' },
  ],
  variable: '--font-display',
  display: 'optional',
  preload: true,
  fallback: ['system-ui', 'Segoe UI', 'Tahoma', 'Arial', 'sans-serif'],
  adjustFontFallback: 'Arial',
});

export const inter = localFont({
  src: [
    { path: '../../public/fonts/Inter-latin-400.woff2', weight: '400', style: 'normal' },
    { path: '../../public/fonts/Inter-latin-500.woff2', weight: '500', style: 'normal' },
    { path: '../../public/fonts/Inter-latin-600.woff2', weight: '600', style: 'normal' },
    { path: '../../public/fonts/Inter-latin-700.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-english',
  display: 'swap',
  preload: false,
  fallback: ['system-ui', 'Segoe UI', 'Arial', 'sans-serif'],
  adjustFontFallback: 'Arial',
});
