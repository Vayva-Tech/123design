import { fetchPublishedArticles } from '@/lib/sanity/fetch/data-access';
import { generateRssFeed } from '@/lib/rss/generate-feed';

export const dynamic = 'force-static';
export const revalidate = 3600;

export async function GET() {
  try {
    const articles = await fetchPublishedArticles();
    const feed = generateRssFeed(articles);

    return new Response(feed, {
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
        'Cache-Control': 'public, max-age=3600, s-maxage=3600',
      },
    });
  } catch {
    const fallbackFeed = generateRssFeed([]);
    return new Response(fallbackFeed, {
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
        'Cache-Control': 'public, max-age=3600, s-maxage=3600',
      },
    });
  }
}
