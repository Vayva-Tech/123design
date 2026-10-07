import type { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';
import { getIndustriesIndexData } from '@/features/industries/data';
import { StructuredData } from '@/components/seo/StructuredData';
import { getBreadcrumbSchema } from '@/components/seo/schemas';
import { Breadcrumbs } from '@/components/navigation/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Industries — Consumer, Medical, Defense & Electronics',
  description:
    'Product development across consumer products, medical devices, defense & security, electronics, industrial and emerging technology. 25+ industries served.',
  keywords: [
    'consumer product development',
    'medical device development',
    'defense product development',
    'electronics development',
    'industrial product development',
    'emerging technology',
    'FDA compliance',
    'MIL-SPEC',
  ],
  alternates: { canonical: '/industries' },
  openGraph: {
    title: 'Industries — 25+ Sectors Served',
    description:
      'Consumer products, medical devices, defense & security, electronics, industrial equipment. Product development tailored to your industry requirements.',
  },
};
import { IndustryCard } from '@/features/industries/components/IndustryCard';
import { IndustryCta } from '@/features/industries/components/IndustryCta';
import { INDEX_EYEBROW, INDEX_HEADING, INDEX_SUPPORTING } from '@/features/industries/content';

export default async function IndustriesPage() {
  const data = await getIndustriesIndexData();

  return (
    <main id="main-content" tabIndex={-1}>
      <StructuredData
        data={getBreadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Industries', url: '/industries' },
        ])}
      />

      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Industries', href: '/industries' },
        ]}
      />

      <section className="industries-hero" aria-label="Industries overview">
        <Container variant="content" className="industries-hero__content">
          <Eyebrow marker>{INDEX_EYEBROW}</Eyebrow>
          <Heading variant="displayXL" className="industries-hero__heading">
            {INDEX_HEADING}
          </Heading>
          <Text variant="lead" className="industries-hero__supporting">
            {INDEX_SUPPORTING}
          </Text>
        </Container>
      </section>

      <section className="industries-grid-section" aria-label="Industry directory">
        <Container variant="content">
          <div className="industries-grid">
            {data.industries.map((industry) => (
              <IndustryCard key={industry.slug} entry={industry} />
            ))}
          </div>
        </Container>
      </section>

      <IndustryCta />
    </main>
  );
}
