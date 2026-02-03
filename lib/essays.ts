import { getAllEssays as getAllLocalEssays, getEssayBySlug as getLocalEssayBySlug, type Essay, type EssayMeta } from './mdx';
import { getCachedSubstackEssays } from './substack';

/**
 * Detect and resolve slug collisions between local MDX and Substack posts
 * Prefixes Substack slugs with 'substack-' if collision detected
 */
function resolveSlugCollisions(
  localEssays: EssayMeta[],
  substackEssays: EssayMeta[]
): EssayMeta[] {
  const localSlugs = new Set(localEssays.map(essay => essay.slug));

  return substackEssays.map(essay => {
    if (localSlugs.has(essay.slug)) {
      console.warn(`Slug collision detected: ${essay.slug} - prefixing Substack slug`);
      return {
        ...essay,
        slug: `substack-${essay.slug}`,
      };
    }
    return essay;
  });
}

/**
 * Get all essays from both local MDX and Substack sources
 * Combined and sorted by date descending (newest first)
 */
export async function getAllEssays(): Promise<EssayMeta[]> {
  try {
    // Fetch from both sources in parallel
    const [localEssays, substackEssays] = await Promise.all([
      getAllLocalEssays(),
      getCachedSubstackEssays(),
    ]);

    // Resolve any slug collisions
    const resolvedSubstackEssays = resolveSlugCollisions(localEssays, substackEssays);

    // Combine both sources
    const combinedEssays = [...localEssays, ...resolvedSubstackEssays];

    // Sort by date descending (newest first)
    return combinedEssays.sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return dateB - dateA;
    });
  } catch (error) {
    console.error('Error fetching essays:', error);

    // Fallback to local essays only if Substack fails
    try {
      return await getAllLocalEssays();
    } catch {
      return [];
    }
  }
}

/**
 * Get a single essay by slug
 * Checks local MDX first, then returns Substack metadata if found
 * Note: Substack essays should redirect to substackUrl, not render locally
 */
export async function getEssayBySlug(slug: string): Promise<Essay | undefined> {
  // Try local MDX first
  const localEssay = await getLocalEssayBySlug(slug);
  if (localEssay) {
    return localEssay;
  }

  // Check if it's a Substack post (metadata only, no content)
  const substackEssays = await getCachedSubstackEssays();
  const substackEssay = substackEssays.find(essay => essay.slug === slug);

  if (substackEssay) {
    // Return as Essay type with null content (will redirect anyway)
    return {
      ...substackEssay,
      content: null,
    } as Essay;
  }

  return undefined;
}

/**
 * Get essay metadata without fetching full content
 * Useful for listing pages
 */
export async function getEssayMetadata(slug: string): Promise<EssayMeta | undefined> {
  const allEssays = await getAllEssays();
  return allEssays.find(essay => essay.slug === slug);
}
