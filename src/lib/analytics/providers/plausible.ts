import type { AnalyticsProvider } from '../provider';
import type { AnalyticsEventName } from '../types';

declare global {
  interface Window {
    plausible?: (
      event: string,
      options?: { props?: Record<string, unknown> },
    ) => void;
  }
}

export function createPlausibleProvider(domain: string): AnalyticsProvider {
  return {
    init() {
      if (typeof window === 'undefined') return;
      if (document.querySelector('script[data-plausible]')) return;

      const script = document.createElement('script');
      script.src = 'https://plausible.io/js/script.js';
      script.setAttribute('data-domain', domain);
      script.setAttribute('data-plausible', 'true');
      script.defer = true;
      document.head.appendChild(script);
    },

    trackEvent(name: AnalyticsEventName, params: Record<string, unknown>) {
      if (typeof window === 'undefined') return;
      window.plausible?.(name, { props: params });
    },

    trackPageview(url: string) {
      if (typeof window === 'undefined') return;
      window.plausible?.('pageview');
    },
  };
}
