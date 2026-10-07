import { Container } from '@/components/layout';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';

export interface ContentSection {
  heading?: string;
  paragraphs: string[];
}

interface ContentPageProps {
  eyebrow: string;
  heading: string;
  lastUpdated?: string;
  sections: ContentSection[];
}

export function ContentPage({ eyebrow, heading, lastUpdated, sections }: ContentPageProps) {
  return (
    <main id="main-content" tabIndex={-1}>
      <section className="content-page-hero" aria-label="Page header">
        <Container variant="shell">
          <div className="content-page-hero__content">
            <Eyebrow marker>{eyebrow}</Eyebrow>
            <Heading as="h1" variant="displayXL">
              {heading}
            </Heading>
            {lastUpdated && (
              <Text variant="micro" as="span" className="content-page-hero__date">
                Last updated: {lastUpdated}
              </Text>
            )}
          </div>
        </Container>
      </section>
      <section className="content-page-body" aria-label="Page content">
        <Container variant="reading">
          <div className="content-page-body__sections">
            {sections.map((section, index) => (
              <div key={index} className="content-page-section">
                {section.heading && (
                  <Heading as="h2" variant="h3">
                    {section.heading}
                  </Heading>
                )}
                {section.paragraphs.map((paragraph, pIndex) => (
                  <Text key={pIndex} variant="body">
                    {paragraph}
                  </Text>
                ))}
              </div>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
