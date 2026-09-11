import { fullMarkdown } from "@/lib/agent";

export const revalidate = 3600;

// The whole site in one fetch, for agents.
export async function GET() {
  const body = await fullMarkdown();
  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
