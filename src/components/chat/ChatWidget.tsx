'use client';

import { useEffect } from 'react';
import { useChatConsent } from './use-chat-consent';

declare global {
  interface Window {
    $crisp?: Array<[string, ...unknown[]]>;
    CRISP_WEBSITE_ID?: string;
  }
}

interface ChatWidgetProps {
  websiteId: string;
}

export function ChatWidget({ websiteId }: ChatWidgetProps) {
  const hasConsent = useChatConsent();

  useEffect(() => {
    if (!hasConsent || !websiteId) return;

    window.CRISP_WEBSITE_ID = websiteId;
    window.$crisp = window.$crisp || [];

    const script = document.createElement('script');
    script.src = 'https://client.crisp.chat/l.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [hasConsent, websiteId]);

  return null;
}
