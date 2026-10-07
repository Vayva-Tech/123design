import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getArticlePageData } from '@/features/insights/data';
import { ArticleHero, ArticleBody, ArticleRelated } from '@/features/insights/components';
import { PreviewIndicator } from '@/features/project/components/PreviewIndicator';
import { StructuredData } from '@/components/seo/StructuredData';
import { getArticleSchema, getBreadcrumbSchema } from '@/components/seo/schemas';
import { Breadcrumbs } from '@/components/navigation/Breadcrumbs';
import { ShareButtons } from '@/components/sharing/ShareButtons';

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = await getArticlePageData(slug);
  if (!data) {
    return {
      title: 'Article Not Found',
    };
  }

  if (data.isPreview) {
    return {
      title: `Preview: ${data.article.title}`,
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

  const base: Metadata = {
    title: data.article.title,
    description: data.article.excerpt,
    alternates: { canonical: `/insights/${slug}` },
    openGraph: {
      title: data.article.seo?.title ?? data.article.title,
      description: data.article.seo?.description ?? data.article.excerpt,
      images: data.article.heroMedia ? [{ url: data.article.heroMedia.url }] : undefined,
    },
  };

  if (data.article.seo?.title) {
    base.title = data.article.seo.title;
  }
  if (data.article.seo?.description) {
    base.description = data.article.seo.description;
  }
  if (data.article.seo?.noIndex) {
    base.robots = { index: false, follow: false };
  }

  return base;
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const data = await getArticlePageData(slug);

  if (!data) {
    notFound();
  }

  const articleSchema = getArticleSchema({
    title: data.article.title,
    description: data.article.excerpt,
    url: `/insights/${slug}`,
    datePublished: data.article.publicationDate,
    dateModified: data.article.updatedDate,
    image: data.article.heroMedia?.url,
  });

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Insights', url: '/insights' },
    { name: data.article.title, url: `/insights/${slug}` },
  ]);

  return (
    <main id="main-content" tabIndex={-1}>
      <StructuredData data={articleSchema} />
      <StructuredData data={breadcrumbSchema} />
      {data.isPreview && <PreviewIndicator />}

      <Breadcrumbs
        items={[
          { label: 'Home', href: '/' },
          { label: 'Insights', href: '/insights' },
          { label: data.article.title, href: `/insights/${slug}` },
        ]}
      />

      <ArticleHero article={data.article} />

      <div className="container">
        <ShareButtons
          title={data.article.seo?.title ?? data.article.title}
          text={data.article.seo?.description ?? data.article.excerpt}
          url={`${process.env.NEXT_PUBLIC_SITE_URL || 'https://123.design'}/insights/${slug}`}
          pageType="article"
          slug={slug}
        />
      </div>

      <ArticleBody body={data.article.body} />
      {data.hasRelated && <ArticleRelated articles={data.relatedArticles} />}
    </main>
  );
}
