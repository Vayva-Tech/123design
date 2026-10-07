'use client';

import { useConsent } from '@/components/consent';

export function useChatConsent() {
  const { consent } = useConsent();
  return consent === 'granted';
}
