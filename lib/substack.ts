import Parser from 'rss-parser';
import { unstable_cache } from 'next/cache';
import type { EssayMeta } from './mdx';

const SUBSTACK_RSS_URL = 'https://josuegdm.substack.com/feed';
const CACHE_TTL = 3600; // 1 hour in seconds

// In-memory cache as fallback
let cachedFeed: { data: EssayMeta[]; timestamp: number } | null = null;

type SubstackRSSItem = {
  title?: string;
  link?: string;
  pubDate?: string;
  content?: string;
  contentSnippet?: string;
  isoDate?: string;
  guid?: string;
};

/**
 * Extract slug from Substack URL
 * Example: https://josuegdm.substack.com/p/my-post-title -> my-post-title
 */
export function extractSlugFromSubstackUrl(url: string): string {
  const match = url.match(/\/p\/([^/?#]+)/);
  return match ? match[1] : url.split('/').pop() || '';
}

/**
 * Estimate read time from HTML content
 * Assumes average reading speed of 225 WPM
 */
export function estimateReadTime(htmlContent: string): string {
  // Strip HTML tags
  const text = htmlContent.replace(/<[^>]*>/g, '');

  // Count words
  const words = text.trim().split(/\s+/).length;

  // Calculate minutes (minimum 1 minute)
  const minutes = Math.max(1, Math.ceil(words / 225));

  return `${minutes} min read`;
}

/**
 * Truncate description to a maximum length
 */
function truncateDescription(text: string, maxLength = 200): string {
  if (!text || text.length <= maxLength) return text || '';
  return text.slice(0, maxLength).trim() + '...';
}

/**
 * Validate that RSS item has required fields
 */
function isValidSubstackItem(item: SubstackRSSItem): boolean {
  return !!(item.title && item.link && (item.pubDate || item.isoDate));
}

/**
 * Convert Substack RSS item to EssayMeta format
 */
function substackItemToEssayMeta(item: SubstackRSSItem): EssayMeta {
  const url = item.link || '';
  const slug = extractSlugFromSubstackUrl(url);
  const description = truncateDescription(item.contentSnippet || '');
  const content = item.content || '';
  const readTime = estimateReadTime(content);

  // Use isoDate if available, otherwise parse pubDate
  let date: string;
  try {
    date = item.isoDate || new Date(item.pubDate || '').toISOString();
  } catch {
    date = new Date().toISOString();
  }

  return {
    slug,
    title: item.title || 'Untitled',
    description,
    date,
    readTime,
    frontmatter: {
      title: item.title,
      description,
      date,
      readTime,
      guid: item.guid,
    },
    source: 'substack' as const,
    substackUrl: url,
  };
}

/**
 * Fetch and parse Substack RSS feed
 */
async function fetchSubstackFeed(): Promise<EssayMeta[]> {
  try {
    const parser = new Parser();
    const feed = await parser.parseURL(SUBSTACK_RSS_URL);

    if (!feed.items || feed.items.length === 0) {
      console.warn('Substack feed is empty');
      return [];
    }

    // Filter valid items and convert to EssayMeta format
    const validItems = feed.items.filter(isValidSubstackItem);
    const essays = validItems.map(substackItemToEssayMeta);

    // Update in-memory cache
    cachedFeed = {
      data: essays,
      timestamp: Date.now(),
    };

    return essays;
  } catch (error) {
    console.error('Failed to fetch Substack feed:', error);

    // Return stale cache if available
    if (cachedFeed) {
      console.warn('Serving stale Substack cache');
      return cachedFeed.data;
    }

    // Return empty array as last resort
    return [];
  }
}

/**
 * Get Substack essays with Next.js caching
 * Cache revalidates every hour
 */
export const getCachedSubstackEssays = unstable_cache(
  async () => {
    return fetchSubstackFeed();
  },
  ['substack-essays'],
  {
    revalidate: CACHE_TTL,
    tags: ['substack'],
  }
);

/**
 * Get Substack essays (alias for consistency)
 */
export async function getSubstackEssays(): Promise<EssayMeta[]> {
  return getCachedSubstackEssays();
}
