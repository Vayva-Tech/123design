import type { Metadata } from 'next';
import { Suspense } from 'react';
import { getWorkIndexData } from '@/features/work/data';
import { WorkIndexView } from '@/features/work/components/WorkIndexView';
import { Breadcrumbs } from '@/components/navigation/Breadcrumbs';
import { StructuredData } from '@/components/seo/StructuredData';
import { getBreadcrumbSchema } from '@/components/seo/schemas';

export const metadata: Metadata = {
  title: 'Work — Product Development Portfolio',
  description:
    'Browse 200+ products developed by 123.design across consumer, medical, industrial, defense and electronics sectors. From concept to mass production.',
  keywords: [
    'product portfolio',
    'case studies',
    'consumer products',
    'medical devices',
    'defense products',
    'electronics',
    'industrial products',
    'product development examples',
  ],
  alternates: { canonical: '/work' },
  openGraph: {
    title: 'Work — 200+ Products Shipped',
    description:
      'Consumer products, medical devices, defense equipment, electronics. Browse our portfolio of products developed from concept to mass production.',
  },
};

interface WorkPageProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export default async function WorkPage({ searchParams }: WorkPageProps) {
  const resolved = await searchParams;
  const data = await getWorkIndexData(resolved);

  return (
    <main id="main-content" tabIndex={-1}>
      <StructuredData
        data={getBreadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Work', url: '/work' },
        ])}
      />

      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Work', href: '/work' },
        ]}
      />
      <Suspense>
        <WorkIndexView data={data} />
      </Suspense>
    </main>
  );
}
