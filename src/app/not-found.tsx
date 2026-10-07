import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';

export const metadata: Metadata = {
  title: 'Page Not Found',
  description: 'The page you are looking for does not exist.',
};

export default function NotFound() {
  return (
    <main id="main-content" tabIndex={-1}>
      <section className="error-page">
        <Container variant="reading">
          <div className="error-page__inner">
            <Text variant="micro" as="p">404</Text>
            <Heading variant="displayL">Page Not Found</Heading>
            <Text variant="lead">
              The page you&apos;re looking for doesn&apos;t exist or has been moved.
            </Text>
            <div className="error-page__actions">
              <Link href="/" className="btn" data-variant="primary" data-size="large">
                Back to Home
              </Link>
              <Link href="/work" className="btn" data-variant="secondary" data-size="large">
                View Our Work
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
