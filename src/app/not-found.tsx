import Link from 'next/link';
import { Building2 } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-950 px-4 py-16 text-center text-white">
      <div className="glass-card max-w-lg rounded-2xl p-8 sm:p-10">
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600/20 border border-sky-400/35 text-sky-300">
          <Building2 className="h-7 w-7" aria-hidden="true" />
        </div>
        <p className="font-latin text-sm font-bold uppercase tracking-widest text-sky-400">
          404 — Page Not Found
        </p>
        <h1 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-white leading-snug">
          الصفحة غير موجودة | Page Not Found
        </h1>
        <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
          الرابط الذي تبحث عنه غير متوفر. يمكنك العودة إلى الصفحة الرئيسية لنظام نوفكسا عقار.
        </p>
        <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/ar"
            className="inline-flex min-h-11 w-full sm:w-auto items-center justify-center rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-bold text-white hover:bg-blue-500"
          >
            النسخة العربية (/ar)
          </Link>
          <Link
            href="/en"
            className="inline-flex min-h-11 w-full sm:w-auto items-center justify-center rounded-xl border border-white/15 bg-slate-900 px-5 py-2.5 text-sm font-semibold text-slate-200 hover:text-white"
          >
            English Version (/en)
          </Link>
        </div>
      </div>
    </main>
  );
}
