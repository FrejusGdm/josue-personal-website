import { getAllEssays } from "@/lib/essays";
import type { EssayMeta } from "@/lib/mdx";
import { llmsIndex } from "@/lib/agent";

export const revalidate = 3600;

// Curated agent index. Built live from the route table and the essay feed
// so it can never drift out of date.
export async function GET() {
  let essays: EssayMeta[] = [];
  try {
    essays = await getAllEssays();
  } catch {
    essays = [];
  }
  return new Response(llmsIndex(essays), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
