import { pageMarkdown } from "@/lib/agent";

export const revalidate = 3600;

// Serves every markdown twin (for example /research.md for /research).
// next.config.ts rewrites *.md URLs here with ?path=. Anything without a
// twin answers 404 — including the noindex demo routes.
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const pagePath = searchParams.get("path") ?? "/";
  const body = await pageMarkdown(pagePath);
  if (body === null) {
    return new Response("Not found", {
      status: 404,
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  }
  return new Response(body, {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
}
