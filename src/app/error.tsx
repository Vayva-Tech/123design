'use client';

import * as Sentry from '@sentry/nextjs';
import Link from 'next/link';
import { useEffect } from 'react';
import { Container } from '@/components/layout/Container';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <main id="main-content" tabIndex={-1}>
      <section className="error-page">
        <Container variant="reading">
          <div className="error-page__inner">
            <Text variant="micro" as="p">Something went wrong</Text>
            <Heading variant="displayL">Unexpected Error</Heading>
            <Text variant="lead">
              We encountered an error loading this page. Please try again or return to the homepage.
            </Text>
            <div className="error-page__actions">
              <button type="button" className="btn" data-variant="primary" data-size="large" onClick={reset}>
                Try Again
              </button>
              <Link href="/" className="btn" data-variant="secondary" data-size="large">
                Back to Home
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
