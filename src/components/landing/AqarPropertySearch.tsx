'use client';

import React, { useState } from 'react';
import {
  ChevronDown,
  MapPin,
  Search,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { EXTERNAL_ROUTES } from '@/lib/site';
import { trackEvent } from '@/lib/analytics';

const PROPERTY_TYPES = [
  { id: 'all', ar: 'جميع الأنواع', en: 'All Types' },
  { id: 'apartment', ar: 'شقة سكنية', en: 'Apartment' },
  { id: 'villa', ar: 'فيلا فاخرة', en: 'Villa' },
  { id: 'mansion', ar: 'قصر سكني', en: 'Mansion' },
  { id: 'land', ar: 'أرض سكنية / تجارية', en: 'Land Plot' },
  { id: 'building', ar: 'عمارة استثمارية', en: 'Building' },
  { id: 'office', ar: 'مكتب تجاري', en: 'Commercial Office' },
  { id: 'compound', ar: 'مجمع سكني', en: 'Compound Unit' },
];

const REGIONS = [
  { id: 'all', ar: 'كافة المناطق', en: 'All Regions' },
  { id: 'riyadh', ar: 'منطقة الرياض', en: 'Riyadh Region' },
  { id: 'eastern', ar: 'المنطقة الشرقية', en: 'Eastern Province' },
  { id: 'makkah', ar: 'منطقة مكة المكرمة', en: 'Makkah Region' },
  { id: 'qassim', ar: 'منطقة القصيم', en: 'Qassim Region' },
  { id: 'madinah', ar: 'منطقة المدينة المنورة', en: 'Madinah Region' },
  { id: 'asir', ar: 'منطقة عسير', en: 'Asir Region' },
];

const CITIES: Record<string, Array<{ id: string; ar: string; en: string }>> = {
  all: [
    { id: 'all', ar: 'كافة المدن', en: 'All Cities' },
    { id: 'riyadh', ar: 'الرياض', en: 'Riyadh' },
    { id: 'khobar', ar: 'الخبر', en: 'Al Khobar' },
    { id: 'dammam', ar: 'الدمام', en: 'Dammam' },
    { id: 'jeddah', ar: 'جدة', en: 'Jeddah' },
    { id: 'buraidah', ar: 'بريدة', en: 'Buraidah' },
  ],
  riyadh: [
    { id: 'all', ar: 'كافة مدن الرياض', en: 'All Riyadh Cities' },
    { id: 'riyadh', ar: 'مدينة الرياض', en: 'Riyadh City' },
    { id: 'diriyah', ar: 'الدرعية', en: 'Diriyah' },
    { id: 'kharj', ar: 'الخرج', en: 'Al Kharj' },
    { id: 'dawadmi', ar: 'الدوادمي', en: 'Al Duwadimi' },
  ],
  eastern: [
    { id: 'all', ar: 'كافة مدن الشرقية', en: 'All Eastern Cities' },
    { id: 'khobar', ar: 'الخبر', en: 'Al Khobar' },
    { id: 'dammam', ar: 'الدمام', en: 'Dammam' },
    { id: 'jubail', ar: 'الجبيل', en: 'Jubail' },
    { id: 'ahsa', ar: 'الأحساء', en: 'Al Ahsa' },
  ],
  makkah: [
    { id: 'all', ar: 'كافة مدن مكة', en: 'All Makkah Cities' },
    { id: 'jeddah', ar: 'جدة', en: 'Jeddah' },
    { id: 'makkah', ar: 'مكة المكرمة', en: 'Makkah' },
    { id: 'taif', ar: 'الطائف', en: 'Taif' },
  ],
  qassim: [
    { id: 'all', ar: 'كافة مدن القصيم', en: 'All Qassim Cities' },
    { id: 'buraidah', ar: 'بريدة', en: 'Buraidah' },
    { id: 'unaizah', ar: 'عنيزة', en: 'Unaizah' },
    { id: 'rass', ar: 'الرس', en: 'Ar Rass' },
  ],
};

export function AqarPropertySearch() {
  const { lang, t } = useLanguage();
  const [purpose, setPurpose] = useState<'sale' | 'rent'>('sale');
  const [propertyType, setPropertyType] = useState('all');
  const [region, setRegion] = useState('all');
  const [city, setCity] = useState('all');
  const [maxPrice, setMaxPrice] = useState(2500000);
  const [maxArea, setMaxArea] = useState(1200);
  const [searchSuccess, setSearchSuccess] = useState(false);

  const cityOptions = CITIES[region] ?? CITIES.all;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchSuccess(true);
    trackEvent('aqar_demo_click', {
      purpose,
      propertyType,
      region,
      city,
      maxPrice,
      maxArea,
    });
    setTimeout(() => {
      window.open(EXTERNAL_ROUTES.primaryDemo, '_blank', 'noopener,noreferrer');
      setSearchSuccess(false);
    }, 600);
  };

  return (
    <div className="relative mx-auto -mt-6 sm:-mt-8 max-w-6xl px-4 sm:px-6 z-20">
      {/* Search Container Card */}
      <div className="rounded-3xl border border-slate-200/90 bg-white/95 backdrop-blur-xl shadow-2xl shadow-slate-300/40 overflow-hidden">
        {/* Top Tab Header */}
        <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50/90 px-6 py-3.5">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#00b399]/15 text-[#008f7a]">
              <Search className="h-4 w-4" aria-hidden="true" />
            </span>
            <span className="font-display text-sm sm:text-base font-extrabold text-slate-900">
              {t('البحث عن عقار ومحرك الفلترة', 'Property Search & Filter Engine')}
            </span>
          </div>

          {/* Purpose Toggle (Sale / Rent) */}
          <div className="inline-flex rounded-full bg-slate-200/80 p-1 border border-slate-300">
            <button
              type="button"
              onClick={() => setPurpose('sale')}
              className={`rounded-full px-4 py-1 text-xs font-bold transition-all ${
                purpose === 'sale'
                  ? 'bg-[#00b399] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {t('بيع', 'Buy / Sale')}
            </button>
            <button
              type="button"
              onClick={() => setPurpose('rent')}
              className={`rounded-full px-4 py-1 text-xs font-bold transition-all ${
                purpose === 'rent'
                  ? 'bg-[#00b399] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {t('تأجير', 'Rent / Lease')}
            </button>
          </div>
        </div>

        {/* Filter Form Body */}
        <form onSubmit={handleSearch} className="p-5 sm:p-7">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* 1. Property Type */}
            <div>
              <label
                htmlFor="search-property-type"
                className="mb-1.5 block text-xs font-bold text-slate-700"
              >
                {t('نوع العقار', 'Property Type')}
              </label>
              <div className="relative">
                <select
                  id="search-property-type"
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="w-full appearance-none rounded-xl border border-slate-300 bg-slate-50 px-3.5 py-2.5 text-xs sm:text-sm font-semibold text-slate-800 transition-colors focus:bg-white focus:border-[#00b399] focus:outline-none"
                >
                  {PROPERTY_TYPES.map((type) => (
                    <option key={type.id} value={type.id} className="bg-white text-slate-900">
                      {lang === 'ar' ? type.ar : type.en}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  className="pointer-events-none absolute end-3 top-3 h-4 w-4 text-slate-500"
                  aria-hidden="true"
                />
              </div>
            </div>

            {/* 2. Region */}
            <div>
              <label
                htmlFor="search-region"
                className="mb-1.5 block text-xs font-bold text-slate-700"
              >
                {t('المنطقة', 'Region / Province')}
              </label>
              <div className="relative">
                <select
                  id="search-region"
                  value={region}
                  onChange={(e) => {
                    setRegion(e.target.value);
                    setCity('all');
                  }}
                  className="w-full appearance-none rounded-xl border border-slate-300 bg-slate-50 px-3.5 py-2.5 text-xs sm:text-sm font-semibold text-slate-800 transition-colors focus:bg-white focus:border-[#00b399] focus:outline-none"
                >
                  {REGIONS.map((r) => (
                    <option key={r.id} value={r.id} className="bg-white text-slate-900">
                      {lang === 'ar' ? r.ar : r.en}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  className="pointer-events-none absolute end-3 top-3 h-4 w-4 text-slate-500"
                  aria-hidden="true"
                />
              </div>
            </div>

            {/* 3. City */}
            <div>
              <label
                htmlFor="search-city"
                className="mb-1.5 block text-xs font-bold text-slate-700"
              >
                {t('المدينة', 'City')}
              </label>
              <div className="relative">
                <select
                  id="search-city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full appearance-none rounded-xl border border-slate-300 bg-slate-50 px-3.5 py-2.5 text-xs sm:text-sm font-semibold text-slate-800 transition-colors focus:bg-white focus:border-[#00b399] focus:outline-none"
                >
                  {cityOptions.map((c) => (
                    <option key={c.id} value={c.id} className="bg-white text-slate-900">
                      {lang === 'ar' ? c.ar : c.en}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  className="pointer-events-none absolute end-3 top-3 h-4 w-4 text-slate-500"
                  aria-hidden="true"
                />
              </div>
            </div>

            {/* 4. Neighbourhood / Search Keyword */}
            <div>
              <label
                htmlFor="search-district"
                className="mb-1.5 block text-xs font-bold text-slate-700"
              >
                {t('الحي أو الكلمة المفتاحية', 'Neighbourhood / Keyword')}
              </label>
              <div className="relative">
                <input
                  id="search-district"
                  type="text"
                  placeholder={t('مثال: النرجس، الملقا، الصواري...', 'e.g. Al-Malqa, Al-Narjis...')}
                  className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#00b399] focus:outline-none"
                />
                <MapPin
                  className="pointer-events-none absolute end-3 top-3 h-4 w-4 text-slate-400"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>

          {/* Sliders Row & Submit */}
          <div className="mt-5 grid grid-cols-1 md:grid-cols-12 gap-5 items-end pt-4 border-t border-slate-200">
            {/* Price Slider */}
            <div className="md:col-span-4">
              <div className="flex items-center justify-between text-xs font-bold text-slate-700 mb-1.5">
                <span>{t('السعر حتى:', 'Price up to:')}</span>
                <span className="font-latin text-[#008f7a] font-extrabold" dir="ltr">
                  {maxPrice.toLocaleString()} {t('ر.س', 'SAR')}
                </span>
              </div>
              <input
                type="range"
                min="100000"
                max="10000000"
                step="50000"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-[#00b399] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-latin" dir="ltr">
                <span>100K SAR</span>
                <span>10M+ SAR</span>
              </div>
            </div>

            {/* Area Slider */}
            <div className="md:col-span-4">
              <div className="flex items-center justify-between text-xs font-bold text-slate-700 mb-1.5">
                <span>{t('المساحة حتى:', 'Area up to:')}</span>
                <span className="font-latin text-[#008f7a] font-extrabold" dir="ltr">
                  {maxArea.toLocaleString()} {t('م²', 'm²')}
                </span>
              </div>
              <input
                type="range"
                min="50"
                max="5000"
                step="50"
                value={maxArea}
                onChange={(e) => setMaxArea(Number(e.target.value))}
                className="w-full accent-[#00b399] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-latin" dir="ltr">
                <span>50 m²</span>
                <span>5,000+ m²</span>
              </div>
            </div>

            {/* Submit Button (3D Rounded) */}
            <div className="md:col-span-4">
              <button
                type="submit"
                className="w-full min-h-12 flex items-center justify-center gap-2 rounded-full btn-brand-teal text-sm sm:text-base font-bold text-white shadow-lg shadow-[#00b399]/30 hover:scale-[1.01] active:scale-[0.99] transition-all"
              >
                <Search className="h-4 w-4" aria-hidden="true" />
                <span>
                  {searchSuccess
                    ? t('جاري فتح نتائج البحث...', 'Opening Search Results...')
                    : t('بحث في العروض التجريبية', 'Search Demo Listings')}
                </span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
