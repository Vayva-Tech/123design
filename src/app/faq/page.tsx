import type { Metadata } from 'next';
import { getFaqPageData } from '@/features/faq/data';
import { FaqHero, FaqList, FaqEmpty, FaqCta } from '@/features/faq/components';
import { StructuredData } from '@/components/seo/StructuredData';
import { getFaqSchema, getBreadcrumbSchema } from '@/components/seo/schemas';
import { Breadcrumbs } from '@/components/navigation/Breadcrumbs';

export const metadata: Metadata = {
  title: 'FAQ',
  description:
    'Frequently asked questions about working with 123.design. Our process, engagement models, and common project questions.',
  alternates: { canonical: '/faq' },
  openGraph: {
    title: 'FAQ — Common Questions About Working with 123.design',
    description:
      'Process timelines, deliverables, engagement models, manufacturing, costs. Everything you need to know before starting a project.',
  },
};

export default async function FaqPage() {
  const data = await getFaqPageData();

  return (
    <main id="main-content" tabIndex={-1}>
      <StructuredData data={getFaqSchema(data.items)} />
      <StructuredData
        data={getBreadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'FAQ', url: '/faq' },
        ])}
      />

      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'FAQ', href: '/faq' },
        ]}
      />

      <FaqHero />
      {data.hasItems ? <FaqList items={data.items} /> : <FaqEmpty />}
      <FaqCta />
    </main>
  );
}
