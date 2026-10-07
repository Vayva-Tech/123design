'use client';

import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { readConsent, writeConsent, type ConsentChoice } from './consent-storage';

interface ConsentContextValue {
  consent: ConsentChoice | null;
  hasResponded: boolean;
  grantConsent: () => void;
  denyConsent: () => void;
}

const ConsentContext = createContext<ConsentContextValue | null>(null);

export function ConsentProvider({ children }: { children: React.ReactNode }) {
  const [consent, setConsent] = useState<ConsentChoice | null>(null);
  const [hasResponded, setHasResponded] = useState(false);

  useEffect(() => {
    const stored = readConsent();
    if (stored !== null) {
      setConsent(stored);
      setHasResponded(true);
    }
  }, []);

  const grantConsent = useCallback(() => {
    writeConsent('granted');
    setConsent('granted');
    setHasResponded(true);
  }, []);

  const denyConsent = useCallback(() => {
    writeConsent('denied');
    setConsent('denied');
    setHasResponded(true);
  }, []);

  return (
    <ConsentContext value={{ consent, hasResponded, grantConsent, denyConsent }}>
      {children}
    </ConsentContext>
  );
}

export function useConsent(): ConsentContextValue {
  const context = useContext(ConsentContext);
  if (!context) {
    throw new Error('useConsent must be used within a ConsentProvider');
  }
  return context;
}
