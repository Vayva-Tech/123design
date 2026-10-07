import Image from 'next/image';
import { Container } from '@/components/layout';
import { Heading, Text, Eyebrow } from '@/components/ui';
import {
  MANUFACTURING_EYEBROW,
  MANUFACTURING_HEADING_LINES,
  MANUFACTURING_BODY,
  MANUFACTURING_BULLETS,
} from '../content';
import { manufacturingPrimary } from '../launch-media';

export function HomeManufacturing() {
  return (
    <section className="home-manufacturing home-manufacturing--light" aria-label="Manufacturing capabilities">
      <Container variant="content">
        <div className="home-manufacturing__split">
          <div className="home-manufacturing__text">
            <Eyebrow marker>{MANUFACTURING_EYEBROW}</Eyebrow>
            <Heading variant="h2" className="heading-lines">
              {MANUFACTURING_HEADING_LINES.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </Heading>
            <Text variant="body" className="home-manufacturing__body">
              {MANUFACTURING_BODY}
            </Text>
            <ul className="home-manufacturing__bullets">
              {MANUFACTURING_BULLETS.map((bullet) => (
                <li key={bullet} className="home-manufacturing__bullet type-small">
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
          <div className="home-manufacturing__media">
            <Image
              src={manufacturingPrimary.publicUrl}
              alt={manufacturingPrimary.alt}
              width={manufacturingPrimary.width}
              height={manufacturingPrimary.height}
              loading="lazy"
              className="home-manufacturing__image"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
