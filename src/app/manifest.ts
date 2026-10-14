import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'نوفكسا عقار | Novixa Aqar — Configurable Real-Estate Platform',
    short_name: 'Novixa Aqar',
    description:
      'نظام عقاري متكامل يُشكَّل على مقاس شركتك — بوابة عامة و8 لوحات تشغيل متعددة الأدوار.',
    start_url: '/ar',
    display: 'standalone',
    background_color: '#020617',
    theme_color: '#2563EB',
    icons: [
      {
        src: '/icons/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icons/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/icons/icon-512-maskable.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  };
}
