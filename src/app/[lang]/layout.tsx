import React from 'react';
import { notFound } from 'next/navigation';
import { LanguageProvider } from '@/context/LanguageContext';
import { AqarLandingHeader } from '@/components/landing/AqarLandingHeader';
import { AqarLandingFooter } from '@/components/landing/AqarLandingFooter';
import { Language } from '@/types';

export function generateStaticParams() {
  return [{ lang: 'ar' }, { lang: 'en' }];
}

export const dynamicParams = false;

export default async function LocalizedLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang: paramLang } = await params;
  if (paramLang !== 'ar' && paramLang !== 'en') {
    notFound();
  }

  const lang: Language = paramLang;
  const dir = lang === 'ar' ? 'rtl' : 'ltr';

  return (
    <LanguageProvider initialLang={lang}>
      <div
        className={`min-h-screen flex flex-col font-arabic ${
          lang === 'en' ? 'font-latin' : ''
        }`}
        dir={dir}
      >
        <AqarLandingHeader lang={lang} />
        <main id="main-content" tabIndex={-1} className="flex-grow focus:outline-none">
          {children}
        </main>
        <AqarLandingFooter lang={lang} />
      </div>
    </LanguageProvider>
  );
}
