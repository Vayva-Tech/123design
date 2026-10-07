'use client';

import { useCallback, useState } from 'react';

interface ShareData {
  title: string;
  text?: string;
  url: string;
}

type ShareStatus = 'idle' | 'shared' | 'error';

export function useShare(data: ShareData) {
  const [status, setStatus] = useState<ShareStatus>('idle');

  const canShare = typeof navigator !== 'undefined' && 'share' in navigator;

  const share = useCallback(async () => {
    if (canShare) {
      try {
        await navigator.share(data);
        setStatus('shared');
        return 'native';
      } catch (err) {
        if (err instanceof Error && err.name === 'AbortError') {
          return null;
        }
      }
    }
    return null;
  }, [canShare, data]);

  const buildUrl = useCallback(
    (platform: 'twitter' | 'linkedin' | 'email') => {
      const encodedUrl = encodeURIComponent(data.url);
      const encodedTitle = encodeURIComponent(data.title);
      const encodedText = data.text ? encodeURIComponent(data.text) : '';

      switch (platform) {
        case 'twitter':
          return `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`;
        case 'linkedin':
          return `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
        case 'email':
          return `mailto:?subject=${encodedTitle}&body=${encodedText}%0A%0A${encodedUrl}`;
      }
    },
    [data],
  );

  return { share, canShare, status, buildUrl };
}
