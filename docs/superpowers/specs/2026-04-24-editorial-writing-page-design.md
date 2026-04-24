# Editorial `/writing` page + Substack new-tab links

**Date:** 2026-04-24
**Scope:** Make the `/writing` index mode-aware (Editorial vs Current) and open Substack-sourced essays in a new tab from every essay link site.

## Problem

Today `app/writing/page.tsx` renders one layout regardless of mode. In Editorial mode, the rest of the site uses serif typography, ink-on-cream tones, and a magazine register, but `/writing` reverses that — it's the same page the Current mode shows, breaking the editorial spell.

Separately, most essays today are Substack posts that redirect off-site from `/writing/[slug]`. Clicking one navigates the user away from the index they were browsing, requiring a back-button to resume reading-the-list. Opening Substack essays in a new tab keeps the index in place.

## Goals

- A dedicated editorial layout for `/writing` that visually matches `EditorialHome` (palette, typography, rhythm).
- Substack-sourced essays open in a new tab from every essay link site, in **both** Editorial and Current modes.
- Local MDX essays continue to open in the same tab.
- No regression to the Current `/writing` page or the existing editorial home.

## Non-goals

- Redesigning individual essay pages (`/writing/[slug]`).
- Changing how essays are fetched or sourced.
- Search, tagging, or filtering on the writing index.
- A featured/cover essay treatment (deferred until there are enough local essays to justify it).

## Architecture

### Mode-aware `/writing` page

Mirror the existing `HomeModeSwitcher` pattern:

- `app/writing/page.tsx` stays a **server component**. It still exports `metadata`, calls `getAllEssays()`, and passes the result into a new client switcher.
- `components/mode/WritingModeSwitcher.tsx` (client) reads `useMode()`:
  - `mode === "editorial"` → renders `EditorialWritingPage`
  - otherwise → renders `CurrentWriting`
- `components/sections/CurrentWriting.tsx` (new, client) holds today's exact `/writing` markup, extracted unchanged.
- `components/sections/editorial/EditorialWritingPage.tsx` (new, client) holds the new editorial layout.

Following `HomeModeSwitcher`, the editorial component is dynamically imported with `ssr: false` so the editorial bundle stays out of the Current-mode initial paint:

```ts
const EditorialWritingPage = dynamic(
  () => import("@/components/sections/editorial/EditorialWritingPage"),
  { ssr: false, loading: () => <ModePlaceholder /> }
);
```

### Substack new-tab behavior

A small helper — `essayHref(essay)` returning `{ href, external }` — lives in `lib/essays.ts`:

- Substack: `{ href: essay.substackUrl, external: true }`
- Local: `{ href: \`/writing/${essay.slug}\`, external: false }`

At each essay link site, branch on `external`:

- External → plain `<a href={href} target="_blank" rel="noopener noreferrer">`
- Internal → `<Link href={href}>`

Link sites to update:

1. `app/writing/page.tsx` (after extraction, lives in `components/sections/CurrentWriting.tsx`)
2. `components/sections/editorial/EditorialWriting.tsx` (homepage list)
3. `components/sections/editorial/EditorialWritingPage.tsx` (new — built with the helper from the start)
4. `components/mode/HomeModeSwitcher.tsx` — `SelectedWritingClientList`

## Editorial `/writing` visual design

### Layout shell

Same shell as `EditorialHero` / `EditorialBio`:

- White background, ink `#1a1612`
- Single column, `max-w-[680px] mx-auto`, `px-6 md:px-12`, `py-24 md:py-32`
- Reuse the same italic footer block (`Built with love by Josué.`) that `EditorialHome` uses, so the page bookends consistently.

### Masthead (header)

- **Dateline** — small Inter, uppercase, `tracking-[0.2em]`, color `#5a3a1a`:
  `WRITING — VOL. I`
- **Title** — Instrument Serif italic, `text-6xl md:text-8xl`, leading `0.95`, tracking tight:
  `Essays.`
- **Intro** — Source Serif, `text-lg md:text-xl`, `leading-[1.65]`, `text-[#1a1612]/85`:
  `A running record of what I've been reading, making, and thinking about.`
- Vertical rhythm matches `EditorialHero`: dateline → mb-8 → title → mb-12 → intro.
- Single fade-up motion on the whole masthead (consistent with `EditorialBio`).

### Archive (year-grouped)

- Below the masthead, separated by `mt-16` and a `border-t border-[#1a1612]/15` with `pt-12`.
- Group essays by `new Date(essay.date).getFullYear()`, descending (newest year first).
- For each year:
  - **Year label** — small Inter, uppercase, `tracking-[0.15em]`, color `#5a3a1a`, `mb-4`:
    `2026`
  - **List** — `<ul className="divide-y divide-[#1a1612]/10">` of essay rows.
- Row layout — two-column grid `grid-cols-[1fr_auto] gap-6 items-baseline`, py-5:
  - Left: italic Source Serif title, `text-lg`, hover underline `decoration-[#5a3a1a]/60 underline-offset-4`
  - Right: small Inter read time, `text-xs`, color `#1a1612/50`
- No per-row stagger animation — the masthead fade is the only motion.

### Empty state

If `essays.length === 0`, render the masthead followed by a single italic Source Serif line: `Coming soon.` (No archive, no rule.)

### Mobile

- Same single 680px column collapses naturally to full width with `px-6`.
- Title scales down via `text-6xl md:text-8xl`.
- Two-column row grid (`title | read time`) holds at all sizes — title wraps if needed.

## Data flow

```
app/writing/page.tsx (server)
  → getAllEssays() — sorted newest-first, mixed local + Substack
  → <WritingModeSwitcher essays={essays} />
       → useMode()
         ├── editorial → <EditorialWritingPage essays={essays} />
         │                  ├── masthead
         │                  └── group by year → list rows
         │                       └── essayHref(essay) → <a target=_blank> for Substack, <Link> for local
         └── current   → <CurrentWriting essays={essays} />
                            └── essayHref(essay) → same branching
```

## Edge cases

- **Mode hydration flash.** `ModeProvider` returns `current` until hydrated, so the first paint of `/writing` is the Current layout even when localStorage says `editorial`. Acceptable — same behavior as the home page today.
- **Missing `substackUrl`.** A Substack essay without `substackUrl` would be malformed. Defensive: if `essay.source === "substack"` but `substackUrl` is falsy, fall back to the local-style `<Link>` to `/writing/${slug}` (which will hit the `redirect()` in `[slug]/page.tsx` or 404 cleanly). Don't crash.
- **Same year, multiple essays.** Sorted within the year by the global newest-first order from `getAllEssays`.
- **Single essay.** Renders one year group with one row. No special case.
- **Substack link prefetch.** External `<a>` skips Next's prefetch — desired (no point pre-fetching an off-site URL).

## Files

**New**
- `components/mode/WritingModeSwitcher.tsx`
- `components/sections/CurrentWriting.tsx`
- `components/sections/editorial/EditorialWritingPage.tsx`

**Modified**
- `app/writing/page.tsx` — slim down to fetch + delegate to switcher; keep `metadata`.
- `lib/essays.ts` — add `essayHref(essay)` helper.
- `components/sections/editorial/EditorialWriting.tsx` — branch on `essayHref` for new-tab behavior.
- `components/mode/HomeModeSwitcher.tsx` — branch on `essayHref` in `SelectedWritingClientList`.

## Testing / verification

- Run `pnpm dev` (or whichever script is used) and walk through:
  - `/writing` in Current mode looks identical to today.
  - `/writing` in Editorial mode renders the new masthead + year-grouped archive.
  - Toggling mode flips the layout without page reload.
  - Clicking a Substack essay (from editorial home, editorial `/writing`, or current `/writing`) opens a new tab.
  - Clicking a local essay (when one exists) opens same-tab.
- `pnpm lint` clean.
- `pnpm tsc --noEmit` clean.
