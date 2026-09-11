# SEO and agent-discovery runbook

Canonical domain: `https://josuegodeme.com` (apex, no www). Hosted on Vercel.
Decided 2026-09-10.

## How it works

`lib/site.ts` is the route table: one row per page with title, description,
and indexing flags. It drives page head tags, `app/sitemap.ts`,
`app/robots.ts`, the `llms.txt` index, and the markdown-twin links. Adding a
page means adding one row there, plus a rewrite in `next.config.ts` if the
page needs a `.md` twin.

`lib/agent.ts` builds the agent-readable content from the same modules that
render the HTML, so the markdown copies can never drift out of date.

## Search Console (Google)

1. Add a URL-prefix property for `https://josuegodeme.com` — the bare
   domain, never a subpath, and never the sitemap URL.
2. Verify with the HTML file method: drop the file Google gives you into
   `public/`, deploy, and confirm it loads at the site root.
3. In the Sitemaps box, type `sitemap.xml` only — no leading slash, no
   trailing slash, no full URL.
4. Use URL Inspection on `/` and confirm the rendered HTML contains the hero
   text, not an empty page.

## Bing Webmaster Tools

1. Add the site as `https://josuegodeme.com`.
2. Verify with `BingSiteAuth.xml` in `public/`, deployed to the root.
3. Submit the same sitemap: `sitemap.xml`.

## Canonical host

Serve everything from the apex domain. In the Vercel dashboard, set
`josuegodeme.com` as the primary domain and redirect `www` to the apex and
`http` to `https` there. Never let the `*.vercel.app` address get indexed
alongside the real domain.

## Common mistakes (learned from the playbook)

- Do not submit `sitemap.xml/` with a trailing slash: it is a file, and the
  slashed version is a 404.
- Do not list `.md` or `.txt` URLs in the sitemap: it holds HTML pages only.
- A verification file added locally but never deployed fails verification on
  both Google and Bing.
- `NEXT_PUBLIC_SITE_URL` must be the production origin. The production build
  fails on purpose if it ever points at localhost.

## IndexNow (optional)

Generates faster indexing on Bing and ChatGPT search. Create a stable key,
serve it at `https://josuegodeme.com/{key}.txt`, and POST the URL list to
`https://api.indexnow.org/indexnow` on each deploy.

## Smoke tests

Replace nothing: these already use the real domain.

```bash
# AI crawlers see content, not an empty shell
curl -sA 'GPTBot' https://josuegodeme.com/ | grep -c 'Josué Godeme'

# Sitemap: 200 and application/xml (no trailing slash)
curl -sI https://josuegodeme.com/sitemap.xml | grep -i content-type
curl -s https://josuegodeme.com/sitemap.xml | head -5

# Robots names AI crawlers and points at the sitemap
curl -s https://josuegodeme.com/robots.txt

# Agent files
curl -s https://josuegodeme.com/llms.txt | head -10
curl -sI https://josuegodeme.com/research.md | grep -i content-type

# Real 404, not a soft-404 home page
curl -so /dev/null -w '%{http_code}\n' https://josuegodeme.com/this-does-not-exist
```

## Build checklist

- [ ] `next build` passes (fails on localhost site URL in production)
- [ ] `/robots.txt` names AI crawlers and the sitemap
- [ ] `/sitemap.xml` holds HTML URLs only, no `.md` or `.txt`
- [ ] `/llms.txt`, `/llms-full.txt`, and one `.md` twin per page resolve
- [ ] Share image renders at `/opengraph-image`
- [ ] Unknown URL returns the 404 page with a 404 status
