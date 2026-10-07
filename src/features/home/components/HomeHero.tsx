import { Container } from '@/components/layout';
import { Heading, Text, Eyebrow, Button } from '@/components/ui';
import {
  HERO_EYEBROW,
  HERO_HEADING_LINES,
  HERO_SUBTITLE,
  HERO_PRIMARY_CTA,
  HERO_SECONDARY_CTA,
  HERO_STATS,
  CLIENT_LOGOS,
} from '../content';
import { HomeHeroVisual } from './HomeHeroVisual';

export function HomeHero() {
  return (
    <section className="home-hero" data-page-overlay="dark" aria-label="Hero">
      <Container variant="content">
        <div className="home-hero__split">
          <div className="home-hero__copy">
            <div className="home-hero__eyebrow">
              <Eyebrow>{HERO_EYEBROW}</Eyebrow>
            </div>
            <div className="home-hero__heading">
              <Heading variant="displayXL" className="heading-lines">
                {HERO_HEADING_LINES.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </Heading>
            </div>
            <div className="home-hero__supporting">
              <Text variant="lead">{HERO_SUBTITLE}</Text>
            </div>
            <div className="home-hero__ctas">
              <Button variant="primary" size="large" href={HERO_PRIMARY_CTA.href}>
                {HERO_PRIMARY_CTA.label}
              </Button>
              <Button variant="secondary" size="large" href={HERO_SECONDARY_CTA.href}>
                {HERO_SECONDARY_CTA.label}
              </Button>
            </div>
          </div>
          <HomeHeroVisual />
        </div>
        <div className="home-hero__stats" aria-label="Key metrics">
          {HERO_STATS.map((stat) => (
            <div key={stat.label} className="home-hero__stat">
              <span className="home-hero__stat-value">{stat.value}</span>
              <span className="home-hero__stat-label type-small">{stat.label}</span>
            </div>
          ))}
        </div>
        <div className="home-hero__clients" aria-label="Trusted by">
          {CLIENT_LOGOS.map((name) => (
            <span key={name} className="home-hero__client type-small">
              {name}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
