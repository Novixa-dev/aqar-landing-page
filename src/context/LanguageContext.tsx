'use client';

import React, { createContext, useContext, useEffect } from 'react';
import { Language, LocalizedText } from '@/types';

interface LanguageContextType {
  lang: Language;
  t: (ar: string, en: string) => string;
  pick: (item: LocalizedText) => string;
  isRtl: boolean;
  dir: 'rtl' | 'ltr';
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({
  children,
  initialLang = 'ar',
}: {
  children: React.ReactNode;
  initialLang: Language;
}) {
  const lang = initialLang;
  const isRtl = lang === 'ar';
  const dir = isRtl ? 'rtl' : 'ltr';

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
      document.documentElement.dir = dir;
    }
  }, [lang, dir]);

  const t = (ar: string, en: string) => (lang === 'ar' ? ar : en);
  const pick = (item: LocalizedText) => (lang === 'ar' ? item.ar : item.en);

  return (
    <LanguageContext.Provider value={{ lang, t, pick, isRtl, dir }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
