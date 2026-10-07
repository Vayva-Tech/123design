import type { Metadata } from 'next';
import { getAboutPageData } from '@/features/about/data';
import {
  AboutHero,
  AboutPhilosophy,
  AboutDisciplines,
  AboutProcess,
  AboutTeam,
  AboutOffices,
  AboutCta,
} from '@/features/about/components';
import { StructuredData } from '@/components/seo/StructuredData';
import { getLocalBusinessSchema, getBreadcrumbSchema } from '@/components/seo/schemas';
import { Breadcrumbs } from '@/components/navigation/Breadcrumbs';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Why 123.design exists. Our product development philosophy, team, and approach to integrated digital product delivery.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About 123.design — Our Philosophy & Team',
    description:
      'Integrated product development across industrial design, engineering, and manufacturing. One team, one process, from concept to production.',
  },
};

export default async function AboutPage() {
  const data = await getAboutPageData();

  return (
    <main id="main-content" tabIndex={-1}>
      <StructuredData data={getLocalBusinessSchema()} />
      <StructuredData
        data={getBreadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'About', url: '/about' },
        ])}
      />

      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'About', href: '/about' },
        ]}
      />

      <AboutHero />
      <AboutPhilosophy />
      <AboutDisciplines />
      <AboutProcess />
      <AboutTeam people={data.people} hasPeople={data.hasPeople} />
      <AboutOffices offices={data.offices} hasOffices={data.hasOffices} />
      <AboutCta />
    </main>
  );
}
