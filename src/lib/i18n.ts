import { Language, LocalizedText } from '@/types';

export interface Dictionary {
  lang: Language;
  isRtl: boolean;
  dir: 'rtl' | 'ltr';
  t: (ar: string, en: string) => string;
  pick: (item: LocalizedText) => string;
}

export function getDictionary(lang: Language = 'ar'): Dictionary {
  const isRtl = lang === 'ar';
  return {
    lang,
    isRtl,
    dir: isRtl ? 'rtl' : 'ltr',
    t: (ar: string, en: string) => (lang === 'ar' ? ar : en),
    pick: (item: LocalizedText) => (lang === 'ar' ? item.ar : item.en),
  };
}
