import type { Metadata } from 'next';
import { getProjectPageData } from '@/features/project/data';
import { ProjectHero } from '@/features/project/components/ProjectHero';
import { ProjectMeta } from '@/features/project/components/ProjectMeta';
import { ProjectCaseStudyBody } from '@/features/project/components/ProjectCaseStudyBody';
import { RelatedWork } from '@/features/project/components/RelatedWork';
import { NextProject } from '@/features/project/components/NextProject';
import { ProjectFinalCta } from '@/features/project/components/ProjectFinalCta';
import { PreviewIndicator } from '@/features/project/components/PreviewIndicator';
import { StructuredData } from '@/components/seo/StructuredData';
import { getBreadcrumbSchema, getProductSchema } from '@/components/seo/schemas';
import { Breadcrumbs } from '@/components/navigation/Breadcrumbs';
import { ShareButtons } from '@/components/sharing/ShareButtons';

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;

  try {
    const data = await getProjectPageData(slug);
    const { project, isPreview } = data;

    if (isPreview) {
      return {
        title: `Preview: ${project.title}`,
        robots: {
          index: false,
          follow: false,
        },
      };
    }

    return {
      title: project.seo?.title ?? project.title,
      description: project.seo?.description ?? project.summary,
      alternates: { canonical: `/work/${slug}` },
      openGraph: {
        title: project.seo?.title ?? project.title,
        description: project.seo?.description ?? project.summary,
        images: project.heroMedia?.kind === 'IMAGE' ? [{ url: project.heroMedia.url }] : undefined,
      },
    };
  } catch {
    return {
      title: 'Project Not Found',
    };
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const data = await getProjectPageData(slug);
  const { project, presentationMode, isPreview, nextProject } = data;

  const relatedProjects = project.relatedProjects ?? [];

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Work', url: '/work' },
    { name: project.title, url: `/work/${slug}` },
  ]);

  const productSchema = getProductSchema({
    name: project.title,
    description: project.summary,
    url: `/work/${slug}`,
    image: project.heroMedia?.kind === 'IMAGE' ? project.heroMedia.url : undefined,
    category: project.industries[0],
  });

  return (
    <main id="main-content" tabIndex={-1}>
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={productSchema} />
      {isPreview && <PreviewIndicator />}

      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Work', href: '/work' },
          { label: project.title, href: `/work/${slug}` },
        ]}
      />

      <ProjectHero project={project} priority />

      <ProjectMeta project={project} />

      <div className="container">
        <ShareButtons
          title={project.seo?.title ?? project.title}
          text={project.seo?.description ?? project.summary}
          url={`${process.env.NEXT_PUBLIC_SITE_URL || 'https://123.design'}/work/${slug}`}
          pageType="project"
          slug={slug}
        />
      </div>

      {presentationMode === 'FULL' && <ProjectCaseStudyBody modules={project.modules} />}

      <RelatedWork projects={relatedProjects} />

      {nextProject && <NextProject project={nextProject} />}

      <ProjectFinalCta />
    </main>
  );
}
