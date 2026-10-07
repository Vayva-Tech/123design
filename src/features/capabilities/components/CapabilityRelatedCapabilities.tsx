import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';
import type { CapabilityIndexEntry } from '../types';

interface CapabilityRelatedProps {
  capabilities: CapabilityIndexEntry[];
}

export function CapabilityRelatedCapabilities({ capabilities }: CapabilityRelatedProps) {
  if (capabilities.length === 0) return null;

  return (
    <section className="capability-related" aria-label="Related capabilities">
      <Container variant="reading">
        <Eyebrow>Related Capabilities</Eyebrow>
        <Heading variant="h3" className="capability-related__heading">
          Works alongside
        </Heading>
        <ul className="capability-related__list">
          {capabilities.map((cap) => (
            <li key={cap.slug} className="capability-related__item">
              <Link href={`/capabilities/${cap.slug}`} className="capability-related__link">
                <Text variant="bodyLarge" as="span" className="capability-related__title">
                  {cap.title}
                </Text>
                <Text variant="small" as="span" className="capability-related__group">
                  {cap.group}
                </Text>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
