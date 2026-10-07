import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/layout';
import { Heading, Text, Eyebrow } from '@/components/ui';
import {
  CAPABILITIES_EYEBROW,
  CAPABILITIES_HEADING_LINES,
  CAPABILITIES_DESCRIPTION,
  CAPABILITY_GROUPS,
} from '../content';
import { capabilityTiles } from '../launch-media';

export function HomeCapabilities() {
  return (
    <section className="home-capabilities" data-page-overlay="dark" aria-label="Our capabilities">
      <Container variant="content">
        <div className="home-capabilities__header">
          <div className="home-capabilities__header-text">
            <Eyebrow marker>{CAPABILITIES_EYEBROW}</Eyebrow>
            <Heading variant="h2" className="heading-lines">
              {CAPABILITIES_HEADING_LINES.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </Heading>
          </div>
          <Text variant="body" className="home-capabilities__header-desc">
            {CAPABILITIES_DESCRIPTION}
          </Text>
        </div>
        <div className="home-capabilities__grid">
          {CAPABILITY_GROUPS.map((group, index) => {
            const tile = capabilityTiles[index];
            return (
              <Link key={group.slug} href={`/capabilities/${group.slug}`} className="home-capabilities__tile">
                {tile && (
                  <div className="home-capabilities__media">
                    <Image
                      src={tile.publicUrl}
                      alt={tile.alt}
                      width={tile.width}
                      height={tile.height}
                      loading="lazy"
                      className="home-capabilities__image"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                )}
                <div className="home-capabilities__overlay">
                  <span className="home-capabilities__label type-small">{group.label}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
