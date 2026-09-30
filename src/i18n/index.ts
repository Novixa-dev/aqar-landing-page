import { ar } from './ar';
import { en } from './en';

export type { Dict } from './ar';
export type Locale = 'ar' | 'en';

export const dictionaries = { ar, en } as const;

export const t = (locale: Locale) => dictionaries[locale];

/** Prefixes a root-relative path with the locale segment. `/` for Arabic. */
export const localePath = (locale: Locale, path = '/') =>
  locale === 'ar' ? path : `/en${path === '/' ? '' : path}`;
