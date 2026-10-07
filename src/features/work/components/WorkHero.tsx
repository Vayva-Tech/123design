import { Eyebrow, Heading, Text } from '@/components/ui';

export function WorkHero() {
  return (
    <section className="work-hero" aria-label="Portfolio">
      <div className="container" data-variant="shell">
        <div className="work-hero__content">
          <Eyebrow marker>Selected Work</Eyebrow>
          <Heading variant="displayL" className="work-hero__heading">
            Engineering physical products from concept to production.
          </Heading>
          <Text variant="lead" className="work-hero__supporting">
            A cross-section of programs spanning industrial design, mechanical and electrical
            engineering, prototyping, tooling, and manufacturing.
          </Text>
        </div>
      </div>
    </section>
  );
}
