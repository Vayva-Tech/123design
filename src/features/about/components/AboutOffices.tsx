import { Container } from '@/components/layout';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';
import type { OfficeModel } from '@/types/domain';
import { OFFICES_EYEBROW, OFFICES_HEADING } from '../content';

interface AboutOfficesProps {
  offices: OfficeModel[];
  hasOffices: boolean;
}

export function AboutOffices({ offices, hasOffices }: AboutOfficesProps) {
  if (!hasOffices) return null;

  return (
    <section className="about-offices" aria-label="Office locations">
      <Container variant="content">
        <div className="about-offices__header">
          <Eyebrow marker>{OFFICES_EYEBROW}</Eyebrow>
          <Heading as="h2" variant="h2">
            {OFFICES_HEADING}
          </Heading>
        </div>
        <div className="about-offices__grid">
          {offices.map((office) => (
            <div key={office.name} className="about-offices__location">
              <Heading as="h3" variant="h4">
                {office.name}
              </Heading>
              <Text variant="body">
                {office.city}, {office.country}
              </Text>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
