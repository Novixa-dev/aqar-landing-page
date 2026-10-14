'use client';

import React, { useEffect, useState } from 'react';
import { Language } from '@/types';

interface AuctionCountdownTimerProps {
  initialSeconds?: number;
  offsetDays?: number;
  lang?: Language;
}

export function AuctionCountdownTimer({
  initialSeconds = 86400 * 4 + 3600 * 6 + 1200,
  offsetDays = 0,
  lang = 'ar',
}: AuctionCountdownTimerProps) {
  const [secondsLeft, setSecondsLeft] = useState(initialSeconds);

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 86400 * 5));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const sec = secondsLeft + offsetDays * 86400;
  const days = Math.floor(sec / 86400);
  const hours = Math.floor((sec % 86400) / 3600);
  const minutes = Math.floor((sec % 3600) / 60);
  const seconds = sec % 60;

  const labels = {
    days: lang === 'ar' ? 'يوم' : 'Days',
    hours: lang === 'ar' ? 'ساعة' : 'Hours',
    minutes: lang === 'ar' ? 'دقيقة' : 'Mins',
    seconds: lang === 'ar' ? 'ثانية' : 'Secs',
  };

  return (
    <div className="grid grid-cols-4 gap-2 text-center" dir="ltr">
      <div className="rounded-xl bg-white p-2 border border-slate-200 shadow-2xs">
        <span className="font-display text-lg font-black text-slate-900 font-latin">
          {days}
        </span>
        <span className="block text-[10px] text-slate-500 font-semibold">{labels.days}</span>
      </div>
      <div className="rounded-xl bg-white p-2 border border-slate-200 shadow-2xs">
        <span className="font-display text-lg font-black text-slate-900 font-latin">
          {hours}
        </span>
        <span className="block text-[10px] text-slate-500 font-semibold">{labels.hours}</span>
      </div>
      <div className="rounded-xl bg-white p-2 border border-slate-200 shadow-2xs">
        <span className="font-display text-lg font-black text-slate-900 font-latin">
          {minutes}
        </span>
        <span className="block text-[10px] text-slate-500 font-semibold">{labels.minutes}</span>
      </div>
      <div className="rounded-xl bg-white p-2 border border-slate-200 shadow-2xs">
        <span className="font-display text-lg font-black text-[#008f7a] font-latin">
          {seconds}
        </span>
        <span className="block text-[10px] text-[#008f7a] font-semibold">{labels.seconds}</span>
      </div>
    </div>
  );
}
