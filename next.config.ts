import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    // Markdown twins: /research.md serves the agent-readable copy of
    // /research through the md-twin route. Explicit entries (not a
    // catch-all) so public files like /resume/*.pdf are never affected.
    const twin = (md: string, pagePath: string) => ({
      source: md,
      destination: `/md-twin?path=${pagePath}`,
    });
    return [
      twin("/index.md", "/"),
      twin("/research.md", "/research"),
      twin("/projects.md", "/projects"),
      twin("/projects/orphi.md", "/projects/orphi"),
      twin("/projects/who-do-you-know.md", "/projects/who-do-you-know"),
      twin("/projects/echo.md", "/projects/echo"),
      twin("/projects/calendai.md", "/projects/calendai"),
      twin("/projects/nexus.md", "/projects/nexus"),
      twin("/projects/forge.md", "/projects/forge"),
      twin(
        "/projects/sovereign-signatures.md",
        "/projects/sovereign-signatures"
      ),
      twin("/projects/homy.md", "/projects/homy"),
      twin("/projects/parsimmon.md", "/projects/parsimmon"),
      twin(
        "/projects/davis-peace-project.md",
        "/projects/davis-peace-project"
      ),
      twin("/projects/stamps.md", "/projects/stamps"),
      twin("/writing.md", "/writing"),
      { source: "/writing/:slug.md", destination: "/md-twin?path=/writing/:slug" },
      twin("/gallery.md", "/gallery"),
      twin("/honors.md", "/honors"),
    ];
  },
};

export default nextConfig;
