'use client';

import { useEffect } from 'react';
import { setAnalyticsProvider } from '@/lib/analytics';
import { createPlausibleProvider } from '@/lib/analytics/providers/plausible';
import { useConsent } from '@/components/consent/ConsentProvider';

export function AnalyticsScript() {
  const { consent } = useConsent();

  useEffect(() => {
    if (consent !== 'granted') return;

    const domain = process.env.NEXT_PUBLIC_ANALYTICS_DOMAIN;
    if (!domain) return;

    const provider = createPlausibleProvider(domain);
    provider.init();
    setAnalyticsProvider(provider);
  }, [consent]);

  return null;
}
