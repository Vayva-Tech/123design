import type { AnalyticsEventName } from './types';
import type { AnalyticsProvider } from './provider';
import { hasAnalyticsConsent } from './consent';
import { stripPiiFromParams } from './pii-filter';

let provider: AnalyticsProvider | null = null;

export function setAnalyticsProvider(p: AnalyticsProvider | null) {
  provider = p;
}

export function trackEvent(
  name: AnalyticsEventName,
  params: Record<string, unknown> = {},
) {
  if (!provider) return;
  if (!hasAnalyticsConsent()) return;

  const cleaned = stripPiiFromParams(params);
  provider.trackEvent(name, cleaned);
}

export function trackPageview(url: string) {
  if (!provider) return;
  if (!hasAnalyticsConsent()) return;

  provider.trackPageview(url);
}
