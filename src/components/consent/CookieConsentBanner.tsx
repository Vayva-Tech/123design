'use client';

import { useConsent } from './ConsentProvider';

export function CookieConsentBanner() {
  const { hasResponded, grantConsent, denyConsent } = useConsent();

  if (hasResponded) return null;

  return (
    <div className="cookie-banner" role="dialog" aria-label="Cookie consent">
      <div className="cookie-banner__inner">
        <p className="cookie-banner__text">
          We use privacy-friendly analytics to understand how visitors interact
          with our site. No personal data is collected.{' '}
          <a href="/privacy" className="cookie-banner__link">
            Privacy policy
          </a>
        </p>
        <div className="cookie-banner__actions">
          <button
            type="button"
            className="cookie-banner__btn cookie-banner__btn--accept"
            onClick={grantConsent}
          >
            Accept
          </button>
          <button
            type="button"
            className="cookie-banner__btn cookie-banner__btn--decline"
            onClick={denyConsent}
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
}
