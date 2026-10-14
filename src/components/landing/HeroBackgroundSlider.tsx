'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Language } from '@/types';

export interface HeroBackgroundSlide {
  id: string;
  name: { ar: string; en: string };
  location: { ar: string; en: string };
  badge: { ar: string; en: string };
  scopeTag: { ar: string; en: string };
  imageUrl: string;
}

interface HeroBackgroundSliderProps {
  slides: HeroBackgroundSlide[];
  lang?: Language;
}

export function HeroBackgroundSlider({ slides, lang = 'ar' }: HeroBackgroundSliderProps) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % slides.length);
    }, 6500);
    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

  const handleNextSlide = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % slides.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlideIndex((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  return (
    <div
      className="absolute inset-0 z-0 overflow-hidden bg-slate-950 pointer-events-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {slides.map((slide, idx) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentSlideIndex
              ? 'opacity-100 scale-100'
              : 'opacity-0 scale-105 pointer-events-none'
          } transition-transform duration-[7000ms]`}
        >
          <Image
            src={slide.imageUrl}
            alt={lang === 'ar' ? slide.name.ar : slide.name.en}
            fill
            priority={idx === 0}
            quality={90}
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
      ))}

      {/* Elegant Architectural Tint for perfect white text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/60 to-slate-950/90" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,0.5)_100%)]" />

      {/* Background Slideshow Navigation Arrows */}
      <button
        type="button"
        onClick={handlePrevSlide}
        aria-label={lang === 'ar' ? 'المشروع السابق في الخلفية' : 'Previous background project'}
        className="hidden md:flex absolute top-1/2 start-4 -translate-y-1/2 z-20 h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md border border-white/20 hover:bg-[#00b399] transition-all shadow-lg"
      >
        <ChevronRight className="h-5 w-5 rtl:rotate-0 ltr:rotate-180" />
      </button>
      <button
        type="button"
        onClick={handleNextSlide}
        aria-label={lang === 'ar' ? 'المشروع التالي في الخلفية' : 'Next background project'}
        className="hidden md:flex absolute top-1/2 end-4 -translate-y-1/2 z-20 h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-md border border-white/20 hover:bg-[#00b399] transition-all shadow-lg"
      >
        <ChevronLeft className="h-5 w-5 rtl:rotate-0 ltr:rotate-180" />
      </button>
    </div>
  );
}
