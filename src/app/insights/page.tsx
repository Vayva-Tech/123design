import type { Metadata } from 'next';
import { getInsightsIndexData } from '@/features/insights/data';
import { InsightsHero, InsightsList, InsightsEmpty } from '@/features/insights/components';
import { StructuredData } from '@/components/seo/StructuredData';
import { getBreadcrumbSchema } from '@/components/seo/schemas';
import { Breadcrumbs } from '@/components/navigation/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Insights',
  description:
    'Thinking on product, design, and engineering. Notes from our work building physical products — decisions, patterns, and lessons learned.',
  alternates: { canonical: '/insights' },
  openGraph: {
    title: 'Insights — Product Development Thinking',
    description:
      'Engineering notes, design decisions, and process lessons from building 200+ physical products across 25+ industries.',
  },
};

export default async function InsightsPage() {
  const data = await getInsightsIndexData();

  return (
    <main id="main-content" tabIndex={-1}>
      <StructuredData
        data={getBreadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Insights', url: '/insights' },
        ])}
      />

      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Insights', href: '/insights' },
        ]}
      />

      <InsightsHero />
      {data.hasArticles ? <InsightsList articles={data.articles} /> : <InsightsEmpty />}
    </main>
  );
}
