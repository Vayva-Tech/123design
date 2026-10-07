const CONSENT_KEY = 'analytics_consent';

export type ConsentState = 'granted' | 'denied' | 'unknown';

export function getConsentState(): ConsentState {
  if (typeof window === 'undefined') return 'unknown';

  try {
    const value = localStorage.getItem(CONSENT_KEY);
    if (value === 'granted') return 'granted';
    if (value === 'denied') return 'denied';
    return 'unknown';
  } catch {
    return 'unknown';
  }
}

export function hasAnalyticsConsent(): boolean {
  return getConsentState() === 'granted';
}
