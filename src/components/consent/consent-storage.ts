const CONSENT_KEY = 'analytics_consent';

export type ConsentChoice = 'granted' | 'denied';

export function readConsent(): ConsentChoice | null {
  if (typeof window === 'undefined') return null;

  try {
    const value = localStorage.getItem(CONSENT_KEY);
    if (value === 'granted' || value === 'denied') return value;
    return null;
  } catch {
    return null;
  }
}

export function writeConsent(choice: ConsentChoice): void {
  if (typeof window === 'undefined') return;

  try {
    localStorage.setItem(CONSENT_KEY, choice);
  } catch {
    // localStorage unavailable
  }
}
