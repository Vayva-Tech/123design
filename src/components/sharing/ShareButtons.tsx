'use client';

import { useShare } from './use-share';
import { trackEvent } from '@/lib/analytics';

interface ShareButtonsProps {
  title: string;
  text?: string;
  url: string;
  pageType: string;
  slug: string;
}

export function ShareButtons({ title, text, url, pageType, slug }: ShareButtonsProps) {
  const { share, canShare, buildUrl } = useShare({ title, text, url });

  const handleNativeShare = async () => {
    const platform = await share();
    if (platform) {
      trackEvent('share_click', { platform: 'native', page_type: pageType, slug });
    }
  };

  const handleLinkShare = (platform: string) => {
    trackEvent('share_click', { platform, page_type: pageType, slug });
  };

  return (
    <div className="share-buttons" role="group" aria-label="Share this page">
      <span className="share-buttons__label">Share</span>
      {canShare ? (
        <button
          type="button"
          className="share-buttons__btn"
          onClick={handleNativeShare}
          aria-label="Share via device"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="18" cy="5" r="3" />
            <circle cx="6" cy="12" r="3" />
            <circle cx="18" cy="19" r="3" />
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
          </svg>
        </button>
      ) : (
        <>
          <a
            href={buildUrl('twitter')}
            target="_blank"
            rel="noopener noreferrer"
            className="share-buttons__btn"
            aria-label="Share on X (Twitter)"
            onClick={() => handleLinkShare('twitter')}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a
            href={buildUrl('linkedin')}
            target="_blank"
            rel="noopener noreferrer"
            className="share-buttons__btn"
            aria-label="Share on LinkedIn"
            onClick={() => handleLinkShare('linkedin')}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a
            href={buildUrl('email')}
            className="share-buttons__btn"
            aria-label="Share via email"
            onClick={() => handleLinkShare('email')}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </a>
        </>
      )}
    </div>
  );
}
