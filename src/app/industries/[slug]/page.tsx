import type { Metadata } from 'next';
import { getIndustryPageData } from '@/features/industries/data';
import { getCanonicalSlugsForStaticParams } from '@/features/industries/registry';
import { IndustryHero } from '@/features/industries/components/IndustryHero';
import { IndustryBody } from '@/features/industries/components/IndustryBody';
import { IndustryChallenges } from '@/features/industries/components/IndustryChallenges';
import { IndustryConsiderations } from '@/features/industries/components/IndustryConsiderations';
import { IndustryRelatedCapabilities } from '@/features/industries/components/IndustryRelatedCapabilities';
import { IndustryRelatedProjects } from '@/features/industries/components/IndustryRelatedProjects';
import { IndustryCta } from '@/features/industries/components/IndustryCta';
import { PreviewIndicator } from '@/features/project/components/PreviewIndicator';
import { StructuredData } from '@/components/seo/StructuredData';
import { getBreadcrumbSchema } from '@/components/seo/schemas';
import { Breadcrumbs } from '@/components/navigation/Breadcrumbs';

export function generateStaticParams() {
  return getCanonicalSlugsForStaticParams();
}

interface IndustryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: IndustryPageProps): Promise<Metadata> {
  const { slug } = await params;

  try {
    const data = await getIndustryPageData(slug);

    if (data.isPreview) {
      return {
        title: `Preview: ${data.title}`,
        robots: {
          index: false,
          follow: false,
          googleBot: {
            index: false,
            follow: false,
          },
        },
        other: {
          robots: 'noarchive',
        },
      };
    }

    return {
      title: data.title,
      description: data.shortDescription,
      alternates: { canonical: `/industries/${slug}` },
    };
  } catch {
    return {
      title: 'Industry Not Found',
    };
  }
}

export default async function IndustryPage({ params }: IndustryPageProps) {
  const { slug } = await params;
  const data = await getIndustryPageData(slug);

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Industries', url: '/industries' },
    { name: data.title, url: `/industries/${slug}` },
  ]);

  return (
    <main id="main-content" tabIndex={-1}>
      <StructuredData data={breadcrumbSchema} />
      {data.isPreview && <PreviewIndicator />}

      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Industries', href: '/industries' },
          { label: data.title, href: `/industries/${slug}` },
        ]}
      />

      <IndustryHero data={data} priority />

      <IndustryBody intro={data.intro} />

      <IndustryChallenges challenges={data.typicalChallenges} />

      <IndustryConsiderations considerations={data.developmentConsiderations} />

      <IndustryRelatedCapabilities capabilities={data.relatedCapabilities} />

      <IndustryRelatedProjects projects={data.relatedProjects} />

      <IndustryCta />
    </main>
  );
}
