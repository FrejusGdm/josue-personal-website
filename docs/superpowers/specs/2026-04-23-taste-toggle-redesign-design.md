# Taste Toggle Redesign — Design Spec

**Date:** 2026-04-23
**Author:** Josué (w/ Claude)
**Status:** Approved, pending implementation plan

## Summary

Add a floating 3-state toggle to the personal website that lets visitors switch the Homepage and `/projects` index between three visual treatments of the same content:

1. **Current** — the existing design (unchanged).
2. **Editorial** — serif-forward, minimalist, literary. Writer-who-codes.
3. **Agency** — dark, confident, asymmetric, product-minded. Builder-with-taste.

The toggle persists across reloads via `localStorage`. All three modes render identical copy/links/media — only presentation differs. The goal: let the site owner (and visitors) compare taste directions side-by-side in the real product, not in mockups.

## Scope

**In scope:**
- Homepage (`app/page.tsx`) variants for Editorial + Agency
- `/projects` index (`app/projects/page.tsx`) variants for Editorial + Agency
- Floating `<ModeToggle>` pill with segmented 3-way switch
- Keyboard shortcuts (`1 / 2 / 3`)
- Persistence via `localStorage`
- One-line tooltip explaining the three modes

**Out of scope (for this spec):**
- Individual project detail pages (`/projects/echo`, etc.)
- Research, Writing, Gallery pages
- Any mobile-specific redesign beyond responsive behavior

If a mode wins, the rollout to the rest of the site is a follow-up project.

## Architecture

### Mode state

A React context provided at the root layout (`app/layout.tsx`), wrapping the entire app. Persisted to `localStorage` under key `josue-site-mode`.

```tsx
// components/mode/ModeProvider.tsx
type Mode = 'current' | 'editorial' | 'agency';

interface ModeContextValue {
  mode: Mode;
  setMode: (mode: Mode) => void;
}
```

- On mount: read `localStorage`, fall back to `'current'`.
- On change: write through to `localStorage`.
- SSR-safe: default to `'current'` on server render; hydration updates client-side without a flash (render all three trees? No — render `current` server-side, then swap on mount. Brief flash is acceptable for this use case since `current` is the "real" design.)

### Component layout

```
components/
  mode/
    ModeProvider.tsx          ← context + localStorage
    ModeToggle.tsx            ← floating pill (bottom-right)
    useMode.ts                ← hook
  heroes/
    ModernHero.tsx            ← existing (Current)
    EditorialHero.tsx         ← NEW
    AgencyHero.tsx            ← NEW
  sections/
    DeepBio.tsx               ← existing
    FeaturedWork.tsx          ← existing
    HonorsAndInvolvement.tsx  ← existing
    SelectedWriting.tsx       ← existing
    editorial/
      EditorialBio.tsx
      EditorialWork.tsx
      EditorialHonors.tsx
      EditorialWriting.tsx
    agency/
      AgencyBio.tsx
      AgencyWork.tsx
      AgencyHonors.tsx
      AgencyWriting.tsx
  projects/
    ProjectsCurrent.tsx       ← extracted from current app/projects/page.tsx
    ProjectsEditorial.tsx     ← NEW
    ProjectsAgency.tsx        ← NEW
content/
  home.ts                     ← shared copy (bio paragraphs, hero tagline, honors list)
  projects.ts                 ← shared project metadata (if not already present in app/projects/data.ts)
```

`app/page.tsx` becomes:

```tsx
'use client';
const { mode } = useMode();
if (mode === 'editorial') return <EditorialHome />;
if (mode === 'agency')    return <AgencyHome />;
return <CurrentHome />;
```

where `CurrentHome` wraps the existing `<ModernHero /> <DeepBio /> ...` composition.

Same pattern for `app/projects/page.tsx`.

### Content source of truth

All three modes pull from shared content files. If `app/projects/data.ts` already exists and is usable, reuse it. For homepage copy (hero tagline, bio paragraphs, honors), extract to `content/home.ts` so all three variants stay in sync.

### Why this shape

- Existing components are never modified → zero risk to Current mode.
- Each redesign is self-contained → any mode can be deleted cleanly later.
- Shared content → adding a new project or updating bio propagates to all three modes.

## Mode Treatments

### Editorial Minimalist

**Vibe:** a writer who codes. Robin Sloan, The Browser, a small literary quarterly. Restrained, confident, serif-forward.

**Typography**
- Display: `"Instrument Serif"` (Google Fonts) — italic variants used generously.
- Body: `"Source Serif 4"` at 17–18px, 1.65 line-height, 65ch max-width.
- Meta/caption: default sans (system or existing) at small size, small caps, letterspaced.

**Palette**
- Background: `#faf7f2` (warm off-cream)
- Text: `#1a1612` (warm near-black)
- Accent: `#5a3a1a` or a faded red, used sparingly for links and underlines.

**Layout & motion**
- Single column, left-aligned, max-width ~680px.
- No gradient orbs, no rounded-2xl, no framer-motion page entrances.
- Motion limited to: text fade-up on scroll, slow hover underline on links.
- Hairline rules (`1px solid rgba(0,0,0,0.15)`) between sections.

**Sections**
- **Hero:** Name in large italic serif, a dateline ("Hanover, NH · Spring 2026"), and a 3-sentence lede that opens the whole page. No buttons, no badge. Scroll indicator is a hairline `↓`.
- **DeepBio:** Portrait shrinks to 200px square, floats right into the prose. Drop-cap on first paragraph. SmartLinks get serif-appropriate underlines.
- **Honors:** Unordered list in two columns, dates in small caps on the left.
- **FeaturedWork:** Reverse-chronological index. One row per project: `2025 — Echo — A speech-first language learning app →`. No hero images. Hover reveals a tiny thumbnail in the margin.
- **SelectedWriting:** Same index format, italicized.
- **Footer:** Em-dash signature, tiny colophon ("Set in Source Serif. Built with Next.js."), last-updated date.

**/projects index (Editorial):** Reverse-chronological catalogue grouped by year. Filter chips are italic serif links (*all · ai · research · product · tooling*).

### High-End Agency

**Vibe:** a builder with product taste. Rauno, Linear, Vercel team pages. Confident, dense with craft details, dark-leaning.

**Typography**
- Display: `"Geist Sans"` at `font-weight: 500`, `letter-spacing: -0.04em`, sizes up to `clamp(4rem, 12vw, 10rem)`.
- Body: `"Geist Sans"` at 15px, 1.5 line-height.
- Mono: `"Geist Mono"` for metadata, timestamps, version cues.

**Palette**
- Background: `#0a0a0a` (near-black)
- Surface: `#141414` (elevated blocks)
- Text: `#e8e8e8` primary, `#888` secondary
- Accent: `#d4ff00` (lime) — used for hover states and one CTA.

**Layout & motion**
- Asymmetric 12-col grid. Content deliberately off-center.
- Custom cursor: small dot, scales up on interactive elements.
- Magnetic buttons (cursor-attract on hover).
- Image hover: scale 1.02 with soft filter shift.
- Sticky section numbers in the margin.
- Subtle noise/grain texture on the background.

**Sections**
- **Hero:** Massive name ("JOSUÉ GODEME") at `clamp(4rem, 12vw, 10rem)`, tight tracking, split across two lines. Small mono block to the right: `BUILDER · RESEARCHER · DARTMOUTH '28 · HANOVER, NH`. Tagline left-aligned, offset into the grid. One CTA ("Selected Work ↓") with magnetic hover.
- **DeepBio:** Two-column. Left: portrait full-bleed to section edge, desaturated, grain overlay. Right: bio in shorter paragraphs, each prefixed with mono labels (`01 — ORIGIN`, `02 — WORK`, `03 — NOW`). Lime underline reveal on link hover.
- **Honors:** Bento-grid. King Scholar and Stamps get large tiles; smaller involvements fill gaps. Each tile: institution logo, role, dates in mono, one-line description.
- **FeaturedWork:** Full-width rows. Project number in mono on left (`→ 01`), title at display size, image/video at 60% of row. Hover scrubs or plays a subtle loop. Thin mono ticker between projects: `NEXT ↓`.
- **SelectedWriting:** Horizontal scroll strip of essay cards. Trackpad-horizontal or mouse-drag.
- **Footer:** Huge "GET IN TOUCH" at display scale. Email, "CV↗" link, monogram.

**/projects index (Agency):** Dense bento grid. Featured projects (Echo, CalendAI, Adja) get 2-col/full-width tiles with video/image loops. Secondary projects are 1-col tiles with still images and mono metadata. Filter chips are pills, active state in lime. Each tile has a mono counter (`→ 01 / 12`).

## ModeToggle UI

**Position:** fixed bottom-right, `bottom: 24px; right: 24px`, `z-50`.

**Structure:** ~320px × 48px pill. Backdrop-blur + subtle border so it reads on both light and dark backgrounds. Three segments: `Current · Editorial · Agency`. Active segment has a sliding pill background (framer-motion `layoutId`).

**Label/affordance:** A tiny `?` icon on the right reveals a one-line tooltip on hover: *"Three taste experiments — same content, different design."*

**Keyboard:** `1 / 2 / 3` switch modes globally (ignored if focus is in an input/textarea).

**Mobile:** stays bottom-right, shrinks to fit. Consider hiding the `?` icon on narrow screens.

## Error Handling & Edge Cases

- **No `localStorage`:** fall back to in-memory state. Don't crash.
- **Invalid stored value:** if `localStorage` returns something other than `'current' | 'editorial' | 'agency'`, reset to `'current'`.
- **SSR hydration:** server renders `'current'`; client checks `localStorage` on mount and re-renders if different. Brief flash is acceptable.
- **Mode-specific assets fail to load (fonts):** fall back to system serif / system sans — do not block render.
- **Toggle overlaps content:** Home and `/projects` should reserve ~80px bottom padding in all three modes so the pill never covers the last CTA/row.

## Testing

- **Manual visual regression:** screenshots of all three modes on homepage and `/projects`, desktop + mobile. Captured before merge.
- **Persistence:** switch modes, reload → mode persists. Switch modes, open a new tab → mode persists.
- **Keyboard:** `1 / 2 / 3` work globally. Don't fire when typing in an input.
- **Accessibility:** toggle is keyboard-focusable, has `role="tablist"` with `role="tab"` segments, active state announced to screen readers.
- **Content parity:** every honor, project, and bio paragraph appears in all three modes. Automated check would be nice but manual is fine for v1.

## Performance

- The toggle itself is trivial. The risk is **3x the components** shipped to the browser. Mitigations:
  - Use Next.js dynamic imports for the two new mode trees: `dynamic(() => import('./EditorialHome'))` so they only load when selected.
  - The server-rendered initial page stays at Current weight.
  - Switching modes triggers a client-side re-render + dynamic chunk load. Acceptable latency: <200ms.

## Rollout

1. Land shared infrastructure (ModeProvider, ModeToggle, content extraction).
2. Land Editorial mode (home + projects index).
3. Land Agency mode (home + projects index).
4. Site owner lives with it for a week. Picks a direction.
5. Follow-up project: extend winning mode to remaining pages. Remove losing mode + toggle.

## Open Questions

None. Ready for implementation plan.
