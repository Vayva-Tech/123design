import type { ArticleCardRecord } from '@/lib/sanity/validation';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://123.design';
const FEED_TITLE = '123.design Insights';
const FEED_DESCRIPTION =
  'Engineering insights, product development stories, and technical deep-dives from the 123.design team.';

function escapeXml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function formatPubDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toUTCString();
}

export function generateRssFeed(articles: ArticleCardRecord[]): string {
  const items = articles
    .map((article) => {
      const link = `${SITE_URL}/insights/${article.slug}`;
      const pubDate = formatPubDate(article.publicationDate);
      const author = article.author?.name ?? '123.design Team';
      const image = article.heroMedia?.url
        ? `<enclosure url="${escapeXml(article.heroMedia.url)}" type="image/jpeg" />`
        : '';

      return `
    <item>
      <title>${escapeXml(article.title)}</title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <description>${escapeXml(article.excerpt)}</description>
      <pubDate>${pubDate}</pubDate>
      <author>${escapeXml(author)}</author>
      ${article.category ? `<category>${escapeXml(article.category)}</category>` : ''}
      ${image}
    </item>`;
    })
    .join('');

  const lastBuildDate = articles.length > 0
    ? formatPubDate(articles[0]!.updatedDate ?? articles[0]!.publicationDate)
    : formatPubDate(new Date().toISOString());

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${FEED_TITLE}</title>
    <link>${SITE_URL}/insights</link>
    <description>${FEED_DESCRIPTION}</description>
    <language>en-us</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml" />
    ${items}
  </channel>
</rss>`;
}
