import type { AnalyticsEventName } from './types';

export interface AnalyticsProvider {
  init(): void;
  trackEvent(name: AnalyticsEventName, params: Record<string, unknown>): void;
  trackPageview(url: string): void;
}
