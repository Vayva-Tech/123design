import { describe, it, expect, vi } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';
import React from 'react';
import { selectRelatedArticles } from '@/features/insights/presentation';
import { ArticleCard } from '@/features/insights/components/ArticleCard';
import { InsightsHero } from '@/features/insights/components/InsightsHero';
import { InsightsList } from '@/features/insights/components/InsightsList';
import { InsightsEmpty } from '@/features/insights/components/InsightsEmpty';
import { ArticleHero } from '@/features/insights/components/ArticleHero';
import { ArticleBody } from '@/features/insights/components/ArticleBody';
import { ArticleRelated } from '@/features/insights/components/ArticleRelated';
import {
  INSIGHTS_EYEBROW,
  INSIGHTS_HEADING,
  INSIGHTS_EMPTY_STATE,
  RELATED_INSIGHTS_EYEBROW,
  RELATED_INSIGHTS_HEADING,
} from '@/features/insights/content';
import type { ArticleCardModel, ArticlePageModel } from '@/types/domain';

vi.mock('next/link', () => {
  const Link = ({ children, ...rest }: Record<string, unknown>) => {
    const { href, className, ...other } = rest as Record<string, unknown>;
    return React.createElement('a', { href, className, ...other }, children as React.ReactNode);
  };
  return { default: Link };
});

vi.mock('@/components/content/RichText', () => ({
  RichText: ({ blocks }: { blocks: unknown[] }) => {
    return React.createElement('div', { className: 'rich-text' }, `${blocks.length} blocks`);
  },
}));

function makeArticle(overrides: Partial<ArticleCardModel> & { slug: string }): ArticleCardModel {
  return {
    title: `Article ${overrides.slug}`,
    excerpt: 'Excerpt text',
    publicationDate: '2026-01-15T00:00:00Z',
    ...overrides,
  };
}

describe('selectRelatedArticles', () => {
  const articles: ArticleCardModel[] = [
    makeArticle({ slug: 'a', category: 'Design' }),
    makeArticle({ slug: 'b', category: 'Design' }),
    makeArticle({ slug: 'c', category: 'Engineering' }),
    makeArticle({ slug: 'd', category: 'Product' }),
    makeArticle({ slug: 'e', category: 'Design' }),
  ];

  it('excludes the current article', () => {
    const result = selectRelatedArticles('a', 'Design', articles);
    expect(result.find((a) => a.slug === 'a')).toBeUndefined();
  });

  it('prioritizes same-category articles', () => {
    const result = selectRelatedArticles('a', 'Design', articles);
    expect(result[0]!.category).toBe('Design');
    expect(result[1]!.category).toBe('Design');
  });

  it('limits to 3 related articles', () => {
    const result = selectRelatedArticles('a', 'Design', articles);
    expect(result).toHaveLength(3);
  });

  it('fills remaining slots from other categories', () => {
    const result = selectRelatedArticles('a', 'Design', articles);
    const slugs = result.map((a) => a.slug);
    expect(slugs).toContain('b');
    expect(slugs).toContain('e');
    expect(slugs).toContain('c');
  });

  it('returns all others when no category', () => {
    const result = selectRelatedArticles('a', undefined, articles);
    expect(result).toHaveLength(3);
    expect(result[0]!.slug).toBe('b');
  });

  it('returns empty array when no other articles', () => {
    const result = selectRelatedArticles('a', 'Design', [makeArticle({ slug: 'a' })]);
    expect(result).toHaveLength(0);
  });

  it('returns empty array for empty input', () => {
    expect(selectRelatedArticles('a', 'Design', [])).toHaveLength(0);
  });

  it('preserves original order within each partition', () => {
    const result = selectRelatedArticles('a', 'Design', articles);
    const designSlugs = result.filter((a) => a.category === 'Design').map((a) => a.slug);
    expect(designSlugs).toEqual(['b', 'e']);
  });
});

describe('Content strings', () => {
  it('has expected insight constants', () => {
    expect(INSIGHTS_EYEBROW).toBe('Insights');
    expect(INSIGHTS_HEADING).toBeTruthy();
    expect(INSIGHTS_EMPTY_STATE).toBeTruthy();
    expect(RELATED_INSIGHTS_EYEBROW).toBe('Related');
    expect(RELATED_INSIGHTS_HEADING).toBeTruthy();
  });
});

describe('InsightsHero', () => {
  it('renders with eyebrow and heading', () => {
    const html = renderToStaticMarkup(<InsightsHero />);
    expect(html).toContain('insights-hero');
    expect(html).toContain('Insights');
  });
});

describe('ArticleCard', () => {
  const article = makeArticle({
    slug: 'test-article',
    title: 'Test Article',
    excerpt: 'Test excerpt',
    publicationDate: '2026-03-15T00:00:00Z',
    category: 'Design',
  });

  it('renders article title and excerpt', () => {
    const html = renderToStaticMarkup(<ArticleCard article={article} />);
    expect(html).toContain('Test Article');
    expect(html).toContain('Test excerpt');
  });

  it('links to the article detail page', () => {
    const html = renderToStaticMarkup(<ArticleCard article={article} />);
    expect(html).toContain('href="/insights/test-article"');
  });

  it('shows category when present', () => {
    const html = renderToStaticMarkup(<ArticleCard article={article} />);
    expect(html).toContain('Design');
  });

  it('hides category when absent', () => {
    const noCategory = makeArticle({ slug: 'x', category: undefined });
    const html = renderToStaticMarkup(<ArticleCard article={noCategory} />);
    expect(html).not.toContain('article-card__category');
  });

  it('renders hero image when IMAGE kind', () => {
    const withImage = makeArticle({
      slug: 'img',
      heroMedia: {
        kind: 'IMAGE',
        url: 'https://cdn.sanity.io/test.png',
        alt: 'Hero',
        decorative: false,
      },
    });
    const html = renderToStaticMarkup(<ArticleCard article={withImage} />);
    expect(html).toContain('article-card__image');
    expect(html).toContain('cdn.sanity.io');
  });

  it('uses empty alt for decorative images', () => {
    const decorative = makeArticle({
      slug: 'dec',
      heroMedia: {
        kind: 'IMAGE',
        url: 'https://cdn.sanity.io/deco.png',
        alt: 'Should be ignored',
        decorative: true,
      },
    });
    const html = renderToStaticMarkup(<ArticleCard article={decorative} />);
    expect(html).toContain('alt=""');
  });

  it('formats the publication date', () => {
    const html = renderToStaticMarkup(<ArticleCard article={article} />);
    expect(html).toContain('March 15, 2026');
  });
});

describe('InsightsList', () => {
  it('renders article cards', () => {
    const articles = [
      makeArticle({ slug: 'one', title: 'One' }),
      makeArticle({ slug: 'two', title: 'Two' }),
    ];
    const html = renderToStaticMarkup(<InsightsList articles={articles} />);
    expect(html).toContain('insights-list');
    expect(html).toContain('One');
    expect(html).toContain('Two');
  });
});

describe('InsightsEmpty', () => {
  it('renders empty state message', () => {
    const html = renderToStaticMarkup(<InsightsEmpty />);
    expect(html).toContain('insights-empty');
    expect(html).toContain(INSIGHTS_EMPTY_STATE);
  });
});

describe('ArticleHero', () => {
  const article: ArticlePageModel = {
    slug: 'test-article',
    title: 'Test Article',
    excerpt: 'Test excerpt',
    publicationDate: '2026-03-15T00:00:00Z',
    author: { name: 'Jane Doe' },
    body: [],
    relatedCapabilities: [],
    relatedProjects: [],
    category: 'Design',
  };

  it('renders article title and author', () => {
    const html = renderToStaticMarkup(<ArticleHero article={article} />);
    expect(html).toContain('Test Article');
    expect(html).toContain('Jane Doe');
  });

  it('shows category as eyebrow', () => {
    const html = renderToStaticMarkup(<ArticleHero article={article} />);
    expect(html).toContain('Design');
  });
});

describe('ArticleBody', () => {
  it('renders body section', () => {
    const html = renderToStaticMarkup(
      <ArticleBody
        body={[{ _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Hello' }] }]}
      />,
    );
    expect(html).toContain('article-body');
  });
});

describe('ArticleRelated', () => {
  it('renders related articles heading', () => {
    const articles = [makeArticle({ slug: 'rel', title: 'Related One' })];
    const html = renderToStaticMarkup(<ArticleRelated articles={articles} />);
    expect(html).toContain('article-related');
    expect(html).toContain(RELATED_INSIGHTS_HEADING);
    expect(html).toContain('Related One');
  });
});
