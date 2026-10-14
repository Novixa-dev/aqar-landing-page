'use client';

import React, { useState } from 'react';

interface StatsWhyUsTabsProps {
  whyLabel: string;
  aboutLabel: string;
  whyContent: React.ReactNode;
  aboutContent: React.ReactNode;
}

export function StatsWhyUsTabs({
  whyLabel,
  aboutLabel,
  whyContent,
  aboutContent,
}: StatsWhyUsTabsProps) {
  const [activeTab, setActiveTab] = useState<'why' | 'about'>('why');

  return (
    <div>
      {/* Tab Selector Buttons */}
      <div className="flex border-b border-slate-200 mb-8" role="tablist">
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === 'why'}
          aria-controls="why-tab-panel"
          onClick={() => setActiveTab('why')}
          className={`pb-4 px-6 text-base sm:text-lg font-bold border-b-2 transition-all ${
            activeTab === 'why'
              ? 'border-[#00b399] text-[#008f7a]'
              : 'border-transparent text-slate-500 hover:text-slate-900'
          }`}
        >
          {whyLabel}
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={activeTab === 'about'}
          aria-controls="about-tab-panel"
          onClick={() => setActiveTab('about')}
          className={`pb-4 px-6 text-base sm:text-lg font-bold border-b-2 transition-all ${
            activeTab === 'about'
              ? 'border-[#00b399] text-[#008f7a]'
              : 'border-transparent text-slate-500 hover:text-slate-900'
          }`}
        >
          {aboutLabel}
        </button>
      </div>

      {/* Panels: Both are pre-rendered in HTML for SEO indexation */}
      <div
        id="why-tab-panel"
        role="tabpanel"
        className={activeTab === 'why' ? 'block' : 'hidden'}
      >
        {whyContent}
      </div>

      <div
        id="about-tab-panel"
        role="tabpanel"
        className={activeTab === 'about' ? 'block' : 'hidden'}
      >
        {aboutContent}
      </div>
    </div>
  );
}
