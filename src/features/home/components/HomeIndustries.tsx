import Link from 'next/link';
import { Container } from '@/components/layout';
import { Heading, Text } from '@/components/ui';
import { INDUSTRIES_HEADING_LINES, CANONICAL_INDUSTRIES } from '../content';

export function HomeIndustries() {
  return (
    <section className="home-industries">
      <Container variant="content">
        <div className="home-industries__header">
          <Heading variant="h2" className="heading-lines">
            {INDUSTRIES_HEADING_LINES.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </Heading>
        </div>
        <div className="home-industries__grid">
          {CANONICAL_INDUSTRIES.map((industry) => (
            <Link key={industry.slug} href={industry.href} className="home-industries__card">
              <Heading variant="h4" as="h3">
                {industry.label}
              </Heading>
              <Text variant="body" className="home-industries__description">
                {industry.description}
              </Text>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
