import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';
import type { CapabilityCardModel } from '@/types/domain';
import { RELATED_CAPABILITIES_HEADING } from '../content';

interface IndustryRelatedCapabilitiesProps {
  capabilities: CapabilityCardModel[];
}

export function IndustryRelatedCapabilities({ capabilities }: IndustryRelatedCapabilitiesProps) {
  if (capabilities.length === 0) return null;

  return (
    <section className="industry-related-caps" aria-label="Related capabilities">
      <Container variant="reading">
        <Eyebrow>Capabilities</Eyebrow>
        <Heading variant="h3" className="industry-related-caps__heading">
          {RELATED_CAPABILITIES_HEADING}
        </Heading>
        <ul className="industry-related-caps__list">
          {capabilities.map((cap) => (
            <li key={cap.slug} className="industry-related-caps__item">
              <Link href={`/capabilities/${cap.slug}`} className="industry-related-caps__link">
                <Text variant="bodyLarge" as="span" className="industry-related-caps__title">
                  {cap.title}
                </Text>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
