'use client';

import React from 'react';
import { trackEvent, AqarAnalyticsEvent } from '@/lib/analytics';

interface TrackedLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  eventName?: AqarAnalyticsEvent;
  eventParams?: Record<string, any>;
  children: React.ReactNode;
}

export function TrackedLink({
  href,
  eventName,
  eventParams,
  children,
  onClick,
  ...rest
}: TrackedLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (eventName) {
      try {
        trackEvent(eventName, eventParams ?? {});
      } catch {
        // Analytics error should not break navigation
      }
    }
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <a href={href} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}
