import type { Metadata } from 'next';
import { Container } from '@/components/layout/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';
import { getCapabilitiesIndexData } from '@/features/capabilities/data';
import { StructuredData } from '@/components/seo/StructuredData';
import { getBreadcrumbSchema } from '@/components/seo/schemas';
import { Breadcrumbs } from '@/components/navigation/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Capabilities — Design, Engineering & Manufacturing',
  description:
    'Product development, industrial design, mechanical engineering, electrical engineering, prototyping, tooling and manufacturing services. Integrated teams from concept to production.',
  keywords: [
    'product development services',
    'industrial design services',
    'mechanical engineering services',
    'electrical engineering services',
    'prototyping services',
    'manufacturing services',
    'tooling',
    'program management',
  ],
  alternates: { canonical: '/capabilities' },
  openGraph: {
    title: 'Capabilities — Integrated Product Development',
    description:
      'Industrial design, mechanical engineering, electrical engineering, prototyping, tooling and manufacturing. One team from concept to production.',
  },
};
import { CapabilityGroupSection } from '@/features/capabilities/components/CapabilityGroupSection';
import { CapabilityCta } from '@/features/capabilities/components/CapabilityCta';
import { INDEX_EYEBROW, INDEX_HEADING, INDEX_SUPPORTING } from '@/features/capabilities/content';

export default async function CapabilitiesPage() {
  const data = await getCapabilitiesIndexData();

  return (
    <main id="main-content" tabIndex={-1}>
      <StructuredData
        data={getBreadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Capabilities', url: '/capabilities' },
        ])}
      />

      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Capabilities', href: '/capabilities' },
        ]}
      />

      <section className="capabilities-hero" aria-label="Capabilities overview">
        <Container variant="content" className="capabilities-hero__content">
          <Eyebrow marker>{INDEX_EYEBROW}</Eyebrow>
          <Heading variant="displayXL" className="capabilities-hero__heading">
            {INDEX_HEADING}
          </Heading>
          <Text variant="lead" className="capabilities-hero__supporting">
            {INDEX_SUPPORTING}
          </Text>
        </Container>
      </section>

      <Container variant="content">
        {data.groups.map((group) => (
          <CapabilityGroupSection key={group.group} group={group} />
        ))}
      </Container>

      <CapabilityCta />
    </main>
  );
}
