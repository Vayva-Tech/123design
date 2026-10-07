import type { Metadata } from 'next';
import { getCapabilityPageData } from '@/features/capabilities/data';
import { getCanonicalSlugsForStaticParams } from '@/features/capabilities/registry';
import { CapabilityHero } from '@/features/capabilities/components/CapabilityHero';
import { CapabilityLifecycle } from '@/features/capabilities/components/CapabilityLifecycle';
import { CapabilityBody } from '@/features/capabilities/components/CapabilityBody';
import { CapabilityDeliverables } from '@/features/capabilities/components/CapabilityDeliverables';
import { CapabilityMethods } from '@/features/capabilities/components/CapabilityMethods';
import { CapabilitySupportMedia } from '@/features/capabilities/components/CapabilitySupportMedia';
import { CapabilityRelatedCapabilities } from '@/features/capabilities/components/CapabilityRelatedCapabilities';
import { CapabilityCta } from '@/features/capabilities/components/CapabilityCta';
import { PreviewIndicator } from '@/features/project/components/PreviewIndicator';
import { RelatedWork } from '@/features/project/components/RelatedWork';
import { StructuredData } from '@/components/seo/StructuredData';
import { getServiceSchema, getBreadcrumbSchema } from '@/components/seo/schemas';
import { Breadcrumbs } from '@/components/navigation/Breadcrumbs';

export function generateStaticParams() {
  return getCanonicalSlugsForStaticParams();
}

interface CapabilityPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: CapabilityPageProps): Promise<Metadata> {
  const { slug } = await params;

  try {
    const data = await getCapabilityPageData(slug);

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
      };
    }

    return {
      title: data.title,
      description: data.shortDescription,
      alternates: { canonical: `/capabilities/${slug}` },
    };
  } catch {
    return {
      title: 'Capability Not Found',
    };
  }
}

export default async function CapabilityPage({ params }: CapabilityPageProps) {
  const { slug } = await params;
  const data = await getCapabilityPageData(slug);

  const serviceSchema = getServiceSchema({
    name: data.title,
    description: data.shortDescription ?? data.title,
    url: `/capabilities/${slug}`,
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Capabilities', url: '/capabilities' },
    { name: data.title, url: `/capabilities/${slug}` },
  ]);

  return (
    <main id="main-content" tabIndex={-1}>
      <StructuredData data={serviceSchema} />
      <StructuredData data={breadcrumbSchema} />
      {data.isPreview && <PreviewIndicator />}

      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Capabilities', href: '/capabilities' },
          { label: data.title, href: `/capabilities/${slug}` },
        ]}
      />

      <CapabilityHero data={data} priority />

      <CapabilityLifecycle stages={data.lifecycleStages} />

      <CapabilityBody intro={data.intro} body={data.body} />

      <CapabilityDeliverables items={data.deliverables} />

      <CapabilityMethods items={data.methods} />

      <CapabilitySupportMedia media={data.supportMedia ?? []} />

      <CapabilityRelatedCapabilities capabilities={data.relatedCapabilities} />

      <RelatedWork projects={data.relatedProjects} />

      <CapabilityCta />
    </main>
  );
}
