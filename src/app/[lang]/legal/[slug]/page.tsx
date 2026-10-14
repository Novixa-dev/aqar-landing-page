import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { ArrowLeft, ArrowRight, FileText } from 'lucide-react';
import { LEGAL_PAGES } from '@/content/legal';
import { constructMetadata, generateBreadcrumbJsonLd } from '@/lib/metadata';
import { Language } from '@/types';

export function generateStaticParams() {
  return [
    { lang: 'ar', slug: 'privacy' },
    { lang: 'ar', slug: 'terms' },
    { lang: 'en', slug: 'privacy' },
    { lang: 'en', slug: 'terms' },
  ];
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang: rawLang, slug } = await params;
  const lang: Language = rawLang === 'en' ? 'en' : 'ar';
  const legal = slug === 'privacy' || slug === 'terms' ? LEGAL_PAGES[slug] : null;

  if (!legal) {
    return constructMetadata({
      lang,
      title: lang === 'ar' ? 'الصفحة غير موجودة' : 'Page Not Found',
      description: '',
      noIndex: true,
    });
  }

  return constructMetadata({
    lang,
    title: lang === 'ar' ? legal.title.ar : legal.title.en,
    description: lang === 'ar' ? legal.subtitle.ar : legal.subtitle.en,
    path: `/legal/${legal.slug}`,
  });
}

export default async function LegalPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang: rawLang, slug } = await params;
  if (slug !== 'privacy' && slug !== 'terms') {
    notFound();
  }

  const lang: Language = rawLang === 'en' ? 'en' : 'ar';
  const isAr = lang === 'ar';
  const legal = LEGAL_PAGES[slug];
  const BackIcon = isAr ? ArrowRight : ArrowLeft;

  const breadcrumbJsonLd = generateBreadcrumbJsonLd([
    {
      name: isAr ? 'نوفكسا عقار' : 'Novixa Aqar',
      url: `/${lang}`,
    },
    {
      name: isAr ? legal.title.ar : legal.title.en,
      url: `/${lang}/legal/${legal.slug}`,
    },
  ]);

  return (
    <section className="py-14 sm:py-20 bg-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Link
          href={`/${lang}`}
          className="inline-flex min-h-10 items-center gap-2 rounded-xl border border-white/10 bg-slate-900 px-3.5 py-2 text-xs sm:text-sm font-semibold text-sky-300 hover:border-sky-400/40 hover:text-white transition-colors mb-8"
        >
          <BackIcon className="h-4 w-4" aria-hidden="true" />
          <span>{isAr ? 'العودة إلى صفحة نوفكسا عقار' : 'Back to Novixa Aqar'}</span>
        </Link>

        <div className="glass-card rounded-2xl p-6 sm:p-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 border border-sky-400/30 px-3 py-1 text-xs font-semibold text-sky-300 mb-4">
            <FileText className="h-3.5 w-3.5" aria-hidden="true" />
            <span>
              {isAr ? 'تحديث: ' : 'Last Updated: '}
              <span className="font-latin">{legal.lastUpdated}</span>
            </span>
          </div>

          <h1 className="font-display text-2xl sm:text-4xl font-bold text-white leading-snug">
            {isAr ? legal.title.ar : legal.title.en}
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            {isAr ? legal.subtitle.ar : legal.subtitle.en}
          </p>

          <div className="mt-8 space-y-8 border-t border-white/10 pt-8">
            {legal.sections.map((section, idx) => {
              const paragraphs = isAr ? section.paragraphs.ar : section.paragraphs.en;
              return (
                <div key={idx} className="space-y-3">
                  <h2 className="font-display text-lg sm:text-xl font-bold text-white leading-snug">
                    {isAr ? section.heading.ar : section.heading.en}
                  </h2>
                  {paragraphs.map((p, pIdx) => (
                    <p
                      key={pIdx}
                      className="text-sm sm:text-base text-slate-200 leading-relaxed"
                    >
                      {p}
                    </p>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
