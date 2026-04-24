# Taste Toggle Redesign — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a floating 3-state toggle (Current / Editorial / Agency) to the Homepage and `/projects` index. Same content, three distinct visual treatments — persisted across reloads, compared in the real product.

**Architecture:** A `ModeProvider` React context holds the active mode, persisted to `localStorage`. A floating `<ModeToggle>` pill at bottom-right lets the visitor switch modes. Each page renders one of three trees; `current` reuses existing components untouched. New `editorial/*` and `agency/*` components live alongside the existing ones and are lazily loaded via dynamic imports.

**Tech Stack:** Next.js 16 (App Router), React 19, Tailwind 4, framer-motion, TypeScript, `next/font`. No test framework in the project — verification is build + dev server + manual browser check.

**Spec:** [docs/superpowers/specs/2026-04-23-taste-toggle-redesign-design.md](../specs/2026-04-23-taste-toggle-redesign-design.md)

---

## File Map

**Created:**
- `components/mode/ModeProvider.tsx` — context, state, localStorage
- `components/mode/useMode.ts` — hook
- `components/mode/ModeToggle.tsx` — floating pill + keyboard shortcuts
- `components/mode/HomeModeSwitcher.tsx` — client switcher for homepage (receives server-fetched essays as props)
- `components/mode/ProjectsModeSwitcher.tsx` — client switcher for projects index
- `components/heroes/EditorialHero.tsx`
- `components/heroes/AgencyHero.tsx`
- `components/sections/editorial/EditorialBio.tsx`
- `components/sections/editorial/EditorialHonors.tsx`
- `components/sections/editorial/EditorialWork.tsx`
- `components/sections/editorial/EditorialWriting.tsx`
- `components/sections/editorial/EditorialHome.tsx` — composition
- `components/sections/agency/AgencyBio.tsx`
- `components/sections/agency/AgencyHonors.tsx`
- `components/sections/agency/AgencyWork.tsx`
- `components/sections/agency/AgencyWriting.tsx`
- `components/sections/agency/AgencyHome.tsx` — composition
- `components/projects/ProjectsCurrent.tsx` — existing `/projects` body, extracted
- `components/projects/ProjectsEditorial.tsx`
- `components/projects/ProjectsAgency.tsx`
- `content/home.ts` — shared homepage copy (hero tagline, bio paragraphs, honors, involvement)

**Modified:**
- `app/layout.tsx` — wrap app in `<ModeProvider>`, add `<ModeToggle>`, register new fonts
- `app/page.tsx` — render `<HomeModeSwitcher essays={...} />` (passing server-fetched essays)
- `app/projects/page.tsx` — render `<ProjectsModeSwitcher />`
- `app/globals.css` — add font CSS variables for new fonts; add editorial + agency scoped utility classes

---

## Task 1: Mode provider, hook, and integration into layout

**Goal:** Shared state infrastructure available app-wide.

**Files:**
- Create: `components/mode/ModeProvider.tsx`
- Create: `components/mode/useMode.ts`
- Modify: `app/layout.tsx`

- [ ] **Step 1: Create the ModeProvider**

`components/mode/ModeProvider.tsx`:

```tsx
"use client";

import { createContext, useState, useEffect, ReactNode } from "react";

export type Mode = "current" | "editorial" | "agency";

interface ModeContextValue {
  mode: Mode;
  setMode: (mode: Mode) => void;
}

export const ModeContext = createContext<ModeContextValue>({
  mode: "current",
  setMode: () => {},
});

const STORAGE_KEY = "josue-site-mode";
const VALID_MODES: Mode[] = ["current", "editorial", "agency"];

export function ModeProvider({ children }: { children: ReactNode }) {
  const [mode, setModeState] = useState<Mode>("current");
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored && VALID_MODES.includes(stored as Mode)) {
        setModeState(stored as Mode);
      }
    } catch {
      // localStorage unavailable — fall back to in-memory default
    }
    setHydrated(true);
  }, []);

  const setMode = (next: Mode) => {
    setModeState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore
    }
  };

  return (
    <ModeContext.Provider value={{ mode: hydrated ? mode : "current", setMode }}>
      {children}
    </ModeContext.Provider>
  );
}
```

- [ ] **Step 2: Create the useMode hook**

`components/mode/useMode.ts`:

```tsx
"use client";

import { useContext } from "react";
import { ModeContext } from "./ModeProvider";

export function useMode() {
  return useContext(ModeContext);
}
```

- [ ] **Step 3: Wrap the app with ModeProvider**

In `app/layout.tsx`, import the provider and wrap the body contents:

```tsx
import { ModeProvider } from "@/components/mode/ModeProvider";
// ... existing imports

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${editorialUltralight.variable} ${editorialRegular.variable} ${editorialUltrabold.variable} antialiased`}>
        <ModeProvider>
          <Navbar />
          <main className="min-h-screen pt-16">{children}</main>
          <Footer />
        </ModeProvider>
      </body>
    </html>
  );
}
```

- [ ] **Step 4: Verify build passes**

Run: `npm run build`
Expected: build completes with no TypeScript errors. (Warnings OK.)

- [ ] **Step 5: Commit**

```bash
git add components/mode/ModeProvider.tsx components/mode/useMode.ts app/layout.tsx
git commit -m "feat(mode): add ModeProvider context and useMode hook"
```

---

## Task 2: ModeToggle floating pill with keyboard shortcuts

**Goal:** Visible 3-way segmented control that switches mode and persists.

**Files:**
- Create: `components/mode/ModeToggle.tsx`
- Modify: `app/layout.tsx`

- [ ] **Step 1: Create ModeToggle**

`components/mode/ModeToggle.tsx`:

```tsx
"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { useMode } from "./useMode";
import type { Mode } from "./ModeProvider";

const OPTIONS: { key: Mode; label: string; shortcut: string }[] = [
  { key: "current", label: "Current", shortcut: "1" },
  { key: "editorial", label: "Editorial", shortcut: "2" },
  { key: "agency", label: "Agency", shortcut: "3" },
];

export function ModeToggle() {
  const { mode, setMode } = useMode();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      const tag = target?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || target?.isContentEditable) return;
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const match = OPTIONS.find((o) => o.shortcut === e.key);
      if (match) setMode(match.key);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [setMode]);

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      <div
        role="tablist"
        aria-label="Site design mode"
        className="flex items-center gap-1 p-1 rounded-full border border-neutral-200/70 bg-white/80 backdrop-blur-xl shadow-lg dark:border-white/10 dark:bg-black/60"
      >
        {OPTIONS.map((opt) => {
          const active = mode === opt.key;
          return (
            <button
              key={opt.key}
              role="tab"
              aria-selected={active}
              onClick={() => setMode(opt.key)}
              title={`Switch to ${opt.label} (press ${opt.shortcut})`}
              className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                active ? "text-white" : "text-neutral-700 hover:text-neutral-900 dark:text-neutral-300"
              }`}
            >
              {active && (
                <motion.span
                  layoutId="mode-toggle-pill"
                  className="absolute inset-0 bg-neutral-900 rounded-full dark:bg-white/90"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                />
              )}
              <span className="relative z-10">{opt.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Mount ModeToggle in layout**

In `app/layout.tsx`, inside `<ModeProvider>`, add `<ModeToggle />`:

```tsx
import { ModeToggle } from "@/components/mode/ModeToggle";

// ... inside body:
<ModeProvider>
  <Navbar />
  <main className="min-h-screen pt-16">{children}</main>
  <Footer />
  <ModeToggle />
</ModeProvider>
```

- [ ] **Step 3: Verify in browser**

Run: `npm run dev`
Open: `http://localhost:3000`
Check:
- Pill visible bottom-right on every page.
- Clicking segments switches active segment (visual only — no downstream effect yet).
- Pressing `1 / 2 / 3` switches segments.
- Reload — active segment persists.
- Typing `1 / 2 / 3` in an input does NOT switch modes.

- [ ] **Step 4: Commit**

```bash
git add components/mode/ModeToggle.tsx app/layout.tsx
git commit -m "feat(mode): add floating ModeToggle pill with keyboard shortcuts"
```

---

## Task 3: Refactor homepage into mode-switching shell with Current path

**Goal:** `app/page.tsx` switches on mode; Current renders existing components untouched; Editorial/Agency render a placeholder "Coming soon" screen so we can smoke-test the switch before building them.

**Files:**
- Create: `components/mode/HomeModeSwitcher.tsx`
- Modify: `app/page.tsx`

- [ ] **Step 1: Create HomeModeSwitcher**

`components/mode/HomeModeSwitcher.tsx`:

```tsx
"use client";

import dynamic from "next/dynamic";
import ModernHero from "@/components/heroes/ModernHero";
import DeepBio from "@/components/sections/DeepBio";
import HonorsAndInvolvement from "@/components/sections/HonorsAndInvolvement";
import FeaturedWork from "@/components/sections/FeaturedWork";
import { useMode } from "./useMode";
import type { EssayMeta } from "@/lib/essays";
import SelectedWriting from "@/components/sections/SelectedWriting";

const EditorialHome = dynamic(
  () => import("@/components/sections/editorial/EditorialHome"),
  { ssr: false, loading: () => <ModePlaceholder label="Editorial" /> }
);
const AgencyHome = dynamic(
  () => import("@/components/sections/agency/AgencyHome"),
  { ssr: false, loading: () => <ModePlaceholder label="Agency" /> }
);

function ModePlaceholder({ label }: { label: string }) {
  return (
    <div className="min-h-[90vh] flex items-center justify-center">
      <p className="text-neutral-400 text-sm">Loading {label}…</p>
    </div>
  );
}

interface Props {
  essays: EssayMeta[];
}

export function HomeModeSwitcher({ essays }: Props) {
  const { mode } = useMode();
  if (mode === "editorial") return <EditorialHome essays={essays} />;
  if (mode === "agency") return <AgencyHome essays={essays} />;
  return (
    <>
      <ModernHero />
      <DeepBio />
      <HonorsAndInvolvement />
      <FeaturedWork />
      {/* SelectedWriting is a server component — in Current mode we render the existing one; it's been moved to app/page.tsx. Keep here for symmetry via a small client wrapper. */}
      <SelectedWritingClientList essays={essays} />
    </>
  );
}

function SelectedWritingClientList({ essays }: { essays: EssayMeta[] }) {
  // Inline mirror of the existing SelectedWriting markup so we can render from pre-fetched essays on the client.
  // See components/sections/SelectedWriting.tsx for reference.
  const recent = essays.slice(0, 2);
  return (
    <section className="w-full py-24 bg-neutral-50">
      <div className="max-w-3xl mx-auto px-6">
        <div className="flex items-end justify-between mb-12">
          <h2 className="font-display text-3xl md:text-4xl">Recent Writing</h2>
          <a href="/writing" className="text-sm font-sans text-neutral-500 hover:text-black transition-colors mb-1">
            View all essays
          </a>
        </div>
        <div className="space-y-2">
          {recent.map((post) => (
            <a
              key={post.slug}
              href={`/writing/${post.slug}`}
              className="group block p-6 -mx-6 rounded-2xl hover:bg-white hover:shadow-sm transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-4">
                <h3 className="font-display text-xl md:text-2xl group-hover:text-accent-cyan-dark transition-colors">
                  {post.title}
                </h3>
                <div className="flex items-center gap-4 text-sm font-sans text-neutral-400 flex-shrink-0">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "short" })}
                  </time>
                  <span className="w-1 h-1 bg-neutral-300 rounded-full"></span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
```

> **Note for the implementer:** the existing `components/sections/SelectedWriting.tsx` is a server component that fetches essays. Since `HomeModeSwitcher` is a client component, we read `essays` from props (fetched server-side in `app/page.tsx`) and render a mirror. **Do not remove** the original `SelectedWriting.tsx` — just don't reference it from the client switcher for Current. In Current mode, the inline client list above replaces it with equivalent markup.

- [ ] **Step 2: Check `lib/essays.ts` for the `EssayMeta` type**

Run: `grep -n "export" lib/essays.ts`
If there is no exported `EssayMeta` type, add one after reading the file. Expected shape (verify by reading the file):

```ts
export interface EssayMeta {
  slug: string;
  title: string;
  date: string;
  readTime: string;
}
```

If the actual shape differs, use the actual shape and update the `EssayMeta` import/usage throughout the plan accordingly.

- [ ] **Step 3: Create placeholder Editorial and Agency Home files**

`components/sections/editorial/EditorialHome.tsx`:

```tsx
"use client";

import type { EssayMeta } from "@/lib/essays";

interface Props { essays: EssayMeta[]; }

export default function EditorialHome(_props: Props) {
  return (
    <div className="min-h-[90vh] flex items-center justify-center bg-[#faf7f2]">
      <p className="text-neutral-500 font-serif italic text-lg">Editorial mode — coming in Task 6–10.</p>
    </div>
  );
}
```

`components/sections/agency/AgencyHome.tsx`:

```tsx
"use client";

import type { EssayMeta } from "@/lib/essays";

interface Props { essays: EssayMeta[]; }

export default function AgencyHome(_props: Props) {
  return (
    <div className="min-h-[90vh] flex items-center justify-center bg-[#0a0a0a]">
      <p className="text-neutral-400 font-mono text-sm tracking-widest">AGENCY MODE — COMING IN TASK 11–15.</p>
    </div>
  );
}
```

- [ ] **Step 4: Rewrite `app/page.tsx` as a server component that fetches essays and passes them down**

```tsx
import { getAllEssays } from "@/lib/essays";
import { HomeModeSwitcher } from "@/components/mode/HomeModeSwitcher";

export default async function Home() {
  const essays = await getAllEssays();
  return (
    <main className="w-full pb-32">
      <HomeModeSwitcher essays={essays} />
    </main>
  );
}
```

> Why `pb-32`: the toggle is fixed at bottom-right; this ensures the last content row is never occluded.

- [ ] **Step 5: Verify in browser**

Run: `npm run dev`
Open: `http://localhost:3000`
Check:
- Current mode → site looks identical to before.
- Switch to Editorial → shows the cream placeholder.
- Switch to Agency → shows the black placeholder.
- Reload → last-selected mode persists.

- [ ] **Step 6: Commit**

```bash
git add components/mode/HomeModeSwitcher.tsx components/sections/editorial/EditorialHome.tsx components/sections/agency/AgencyHome.tsx app/page.tsx
git commit -m "feat(home): switch homepage on mode; Current preserved, Editorial/Agency stubbed"
```

---

## Task 4: Refactor `/projects` page into mode-switching shell with Current path

**Goal:** `app/projects/page.tsx` switches on mode; Current is the existing behavior extracted; Editorial/Agency are stubs.

**Files:**
- Create: `components/projects/ProjectsCurrent.tsx`
- Create: `components/projects/ProjectsEditorial.tsx`
- Create: `components/projects/ProjectsAgency.tsx`
- Create: `components/mode/ProjectsModeSwitcher.tsx`
- Modify: `app/projects/page.tsx`

- [ ] **Step 1: Move existing projects page body into ProjectsCurrent**

Create `components/projects/ProjectsCurrent.tsx` by copying the entire current contents of `app/projects/page.tsx` (from the `"use client"` directive through the final export). Rename the default export to `ProjectsCurrent`. The import path for `./data` must change to `@/app/projects/data`.

```tsx
"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { projects } from "@/app/projects/data";

export default function ProjectsCurrent() {
  // ... unchanged body from the existing app/projects/page.tsx ...
}
```

Paste the full existing function body here (the implementer should copy verbatim from [app/projects/page.tsx](../../../app/projects/page.tsx)).

- [ ] **Step 2: Stub Editorial and Agency projects pages**

`components/projects/ProjectsEditorial.tsx`:

```tsx
"use client";

export default function ProjectsEditorial() {
  return (
    <div className="min-h-screen bg-[#faf7f2] flex items-center justify-center">
      <p className="text-neutral-500 font-serif italic text-lg">Editorial projects — coming in Task 10.</p>
    </div>
  );
}
```

`components/projects/ProjectsAgency.tsx`:

```tsx
"use client";

export default function ProjectsAgency() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
      <p className="text-neutral-400 font-mono text-sm tracking-widest">AGENCY PROJECTS — COMING IN TASK 16.</p>
    </div>
  );
}
```

- [ ] **Step 3: Create ProjectsModeSwitcher**

`components/mode/ProjectsModeSwitcher.tsx`:

```tsx
"use client";

import dynamic from "next/dynamic";
import ProjectsCurrent from "@/components/projects/ProjectsCurrent";
import { useMode } from "./useMode";

const ProjectsEditorial = dynamic(
  () => import("@/components/projects/ProjectsEditorial"),
  { ssr: false, loading: () => <Placeholder /> }
);
const ProjectsAgency = dynamic(
  () => import("@/components/projects/ProjectsAgency"),
  { ssr: false, loading: () => <Placeholder /> }
);

function Placeholder() {
  return <div className="min-h-screen flex items-center justify-center text-neutral-400 text-sm">Loading…</div>;
}

export function ProjectsModeSwitcher() {
  const { mode } = useMode();
  if (mode === "editorial") return <ProjectsEditorial />;
  if (mode === "agency") return <ProjectsAgency />;
  return <ProjectsCurrent />;
}
```

- [ ] **Step 4: Rewrite `app/projects/page.tsx`**

```tsx
import { ProjectsModeSwitcher } from "@/components/mode/ProjectsModeSwitcher";

export default function ProjectsPage() {
  return (
    <div className="pb-32">
      <ProjectsModeSwitcher />
    </div>
  );
}
```

- [ ] **Step 5: Verify in browser**

Open: `http://localhost:3000/projects`
Check: Current mode identical to before; Editorial/Agency show their stubs.

- [ ] **Step 6: Commit**

```bash
git add components/projects/ components/mode/ProjectsModeSwitcher.tsx app/projects/page.tsx
git commit -m "feat(projects): switch projects page on mode; Current extracted, variants stubbed"
```

---

## Task 5: Add Editorial fonts and shared home content

**Goal:** Load Instrument Serif (display) + Source Serif 4 (body) via `next/font`; extract shared homepage copy for reuse across modes.

**Files:**
- Modify: `app/layout.tsx`
- Modify: `app/globals.css`
- Create: `content/home.ts`

- [ ] **Step 1: Register fonts**

In `app/layout.tsx`, add imports:

```tsx
import { Instrument_Serif, Source_Serif_4 } from "next/font/google";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  weight: "400",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  display: "swap",
});
```

Add both variables to the `<body>` className list, alongside the existing ones:

```tsx
<body className={`${inter.variable} ${editorialUltralight.variable} ${editorialRegular.variable} ${editorialUltrabold.variable} ${instrumentSerif.variable} ${sourceSerif.variable} antialiased`}>
```

- [ ] **Step 2: Expose as Tailwind font tokens**

In `app/globals.css`, inside `@theme inline`, add:

```css
--font-instrument: var(--font-instrument-serif);
--font-source-serif: var(--font-source-serif);
```

- [ ] **Step 3: Extract shared homepage content**

Create `content/home.ts`:

```ts
export const hero = {
  name: "Josué Godeme",
  dateline: "Hanover, NH · Spring 2026",
  tagline:
    "A student at Dartmouth who loves to solve hard problems, explore the world, and capture moments through a lens.",
  roles: ["Builder", "Researcher", "Dartmouth '28", "Hanover, NH"],
};

export const bio = {
  paragraphs: [
    {
      label: "Origin",
      text: "I grew up in Benin, a country in West Africa. I ranked first in my national high school diploma (baccalauréat) with the 2nd highest score in the history of the exam in my country. This allowed me to attend Dartmouth College, where I now study computer science and minor in Mandarin Chinese. I speak four languages—English, French, Chinese, and Adja. At Dartmouth, I am a King Scholar and a Stamps Scholar.",
    },
    {
      label: "Work",
      text: "I believe that technology, when used well and adapted to local contexts, can be powerful in solving problems and improving lives. That's what I want to do—build products that help people solve problems and improve their lives.",
    },
    {
      label: "Now",
      text: "I built Echo, a speech-focused language learning app where you get an AI tutor to help you practice the language through voice. I've built a bunch of other projects during my time at Dartmouth. Currently, I'm obsessed with AI in education and languages. I want to make AI understand the languages of the rest of the world—languages that my parents and millions of others across Asia and Africa speak. But I'm also deeply interested in running AI models on the edge (devices like the Raspberry Pi) and mobile (like the iPhone).",
    },
  ],
  signature: "Josué.",
};

export interface HonorItem {
  title: string;
  organization: string;
  date: string;
  description: string;
  link?: string;
}

export const honors: HonorItem[] = [
  {
    title: "Stamps Scholarship",
    organization: "Stamps Foundation",
    date: "June 2024 – Present",
    link: "https://www.stampsscholars.org/",
    description: "Selected as 1 of 7 recipients from my class, out of 400,000+ national applicants. Supports my leadership and research projects, funding my work on the Adja-language corpus and AI-enabled instruction.",
  },
  {
    title: "King Scholarship",
    organization: "King Philanthropies & Dartmouth",
    date: "Sept 2022 – Present",
    link: "https://students.dartmouth.edu/fgo/programs/king-scholars",
    description: "Selected as 1 of 7 recipients from a class of 1,200+ students. Full-ride scholarship with leadership development for students committed to alleviating poverty.",
  },
  {
    title: "Davis Peace Project",
    organization: "Project for Peace & Dickey Center",
    date: "Jun 2024 – Aug 2024",
    link: "https://www.davisprojectsforpeace.org/",
    description: "Won a competitive $10,000 grant awarded to only 2 Dartmouth students. Organized language documentation workshops in Benin, creating the first-ever translation dataset for the Adja language.",
  },
  {
    title: "Bosworth Award",
    organization: "Dickey Center",
    date: "Sept 2025 – Present",
    description: "One of 4 students recognized for excellence in international affairs and leadership. Awarded for building cross-regional collaboration to expand educational access and language preservation in Africa.",
  },
  {
    title: "Baccalauréat Top Scorer",
    organization: "Ministry of Education, Benin",
    date: "June 2021",
    description: "Ranked #1 among 80,000+ national candidates. Achieved the 2nd highest average score in the history of the Republic of Benin.",
  },
];

export interface InvolvementItem {
  role: string;
  organization: string;
  date: string;
  description: string;
}

export const involvement: InvolvementItem[] = [
  {
    role: "Co-President",
    organization: "NSBE Dartmouth Chapter",
    date: "Sept 2024 – Present",
    description: "Leading chapter strategy and programming for 50+ engineering students. Previously Academic Excellence Chair.",
  },
  {
    role: "Co-President",
    organization: "CoderDojo Dartmouth",
    date: "Feb 2024 – Present",
    description: "Teaching computer science to ~20 students from underserved high schools in the Upper Valley.",
  },
  {
    role: "Executive Board",
    organization: "Dartmouth African Student Association",
    date: "Sept 2023 – Present",
    description: "Coordinating cultural programming, professional development events, and academic transition support.",
  },
  {
    role: "Fellow / Member",
    organization: "ColorStack · CodePath · AI4ALL · NVIDIA Bridge",
    date: "Ongoing",
    description: "Color Stack Member, CodePath Graduate, AI4ALL Student Fellow, Nvidia Bridge 2023.",
  },
];

export const featuredWork = [
  { year: "2026", title: "Echo / Orphi", category: "AI · Voice · EdTech", description: "A speech-first language learning app that helps you master pronunciation and fluency through immersive conversation with AI.", href: "/projects/echo" },
  { year: "2025", title: "CalendAI", category: "Productivity · Automation", description: "Automatic assignment scheduling for students. Upload your syllabus, connect Canvas, and let AI sync everything to your calendar.", href: "/projects/calendai" },
  { year: "2024", title: "Davis Peace Project", category: "Research · Social Impact", description: "Digitizing the Adja language in Benin. Created the first-ever large-scale digital resource for a language spoken by over a million people.", href: "/projects/davis-peace-project" },
];
```

- [ ] **Step 4: Verify build passes**

Run: `npm run build`
Expected: build succeeds.

- [ ] **Step 5: Commit**

```bash
git add app/layout.tsx app/globals.css content/home.ts
git commit -m "feat(editorial): register Instrument Serif + Source Serif; extract shared home content"
```

---

## Task 6: Editorial Hero

**Goal:** Render the editorial-mode hero — name in large italic serif, dateline, lede paragraph, hairline scroll indicator.

**Files:**
- Create: `components/heroes/EditorialHero.tsx`

- [ ] **Step 1: Create EditorialHero**

`components/heroes/EditorialHero.tsx`:

```tsx
"use client";

import { motion } from "framer-motion";
import { hero } from "@/content/home";

export default function EditorialHero() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center bg-[#faf7f2] text-[#1a1612] px-6 md:px-12">
      <div className="max-w-[680px] mx-auto w-full py-24 md:py-32">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-xs uppercase tracking-[0.2em] text-[#5a3a1a] mb-8 font-[var(--font-inter)]"
        >
          {hero.dateline}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="font-[var(--font-instrument-serif)] italic text-6xl md:text-8xl leading-[0.95] tracking-tight mb-12"
        >
          {hero.name}.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
          className="font-[var(--font-source-serif)] text-lg md:text-xl leading-[1.65] text-[#1a1612]/85"
        >
          {hero.tagline} I write about building with AI, preserving low-resource languages, and the long road between an idea and something real. This is a record of what I&apos;ve been making, reading, and thinking about.
        </motion.p>
        <div className="mt-16 text-[#1a1612]/40 text-sm font-[var(--font-source-serif)] italic">↓ read on</div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Wire into EditorialHome placeholder**

Replace `components/sections/editorial/EditorialHome.tsx` body with:

```tsx
"use client";

import type { EssayMeta } from "@/lib/essays";
import EditorialHero from "@/components/heroes/EditorialHero";

interface Props { essays: EssayMeta[]; }

export default function EditorialHome(_props: Props) {
  return (
    <div className="bg-[#faf7f2] text-[#1a1612]">
      <EditorialHero />
      <div className="min-h-[40vh] flex items-center justify-center">
        <p className="text-neutral-500 font-[var(--font-source-serif)] italic text-base">More editorial sections coming in Task 7–10.</p>
      </div>
    </div>
  );
}
```

- [ ] **Step 3: Verify in browser**

Switch to Editorial mode. Check: name in italic serif at large size, cream background, dateline in small caps above, lede paragraph in serif body.

- [ ] **Step 4: Commit**

```bash
git add components/heroes/EditorialHero.tsx components/sections/editorial/EditorialHome.tsx
git commit -m "feat(editorial): add editorial hero with Instrument Serif italic name"
```

---

## Task 7: Editorial Bio

**Goal:** Single-column flowing prose, drop-cap on first paragraph, portrait floats right as a 200px square inline image.

**Files:**
- Create: `components/sections/editorial/EditorialBio.tsx`
- Modify: `components/sections/editorial/EditorialHome.tsx`

- [ ] **Step 1: Create EditorialBio**

`components/sections/editorial/EditorialBio.tsx`:

```tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { bio } from "@/content/home";

export default function EditorialBio() {
  return (
    <section className="w-full bg-[#faf7f2] text-[#1a1612] px-6 md:px-12 py-24 md:py-32 border-t border-[#1a1612]/15">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-[680px] mx-auto"
      >
        <p className="text-xs uppercase tracking-[0.2em] text-[#5a3a1a] mb-8 font-[var(--font-inter)]">On Josué</p>
        <div className="font-[var(--font-source-serif)] text-lg leading-[1.7] space-y-6 text-[#1a1612]/90">
          <p className="editorial-dropcap">
            <Image
              src="/josue-headshot/VERT_IMG_5740.png"
              alt="Josué Godeme"
              width={200}
              height={260}
              className="float-right ml-6 mb-3 w-[140px] md:w-[200px] h-auto grayscale-[0.2]"
              priority
            />
            {bio.paragraphs[0].text}
          </p>
          {bio.paragraphs.slice(1).map((p) => (
            <p key={p.label}>{p.text}</p>
          ))}
        </div>
        <p className="mt-12 font-[var(--font-instrument-serif)] italic text-3xl">— {bio.signature}</p>
      </motion.div>
    </section>
  );
}
```

- [ ] **Step 2: Add drop-cap CSS**

In `app/globals.css`, append to `@layer utilities`:

```css
.editorial-dropcap::first-letter {
  font-family: var(--font-instrument-serif), Georgia, serif;
  font-style: italic;
  font-size: 4.5em;
  line-height: 0.9;
  float: left;
  padding: 0.1em 0.1em 0 0;
  color: #1a1612;
}
```

- [ ] **Step 3: Add to EditorialHome**

Update `components/sections/editorial/EditorialHome.tsx` to render `<EditorialBio />` after the hero.

```tsx
"use client";

import type { EssayMeta } from "@/lib/essays";
import EditorialHero from "@/components/heroes/EditorialHero";
import EditorialBio from "./EditorialBio";

interface Props { essays: EssayMeta[]; }

export default function EditorialHome(_props: Props) {
  return (
    <div className="bg-[#faf7f2] text-[#1a1612]">
      <EditorialHero />
      <EditorialBio />
    </div>
  );
}
```

- [ ] **Step 4: Verify in browser**

Switch to Editorial mode. Check: drop-cap on first paragraph, portrait floats right (on desktop; shrinks on mobile), serif signature below.

- [ ] **Step 5: Commit**

```bash
git add components/sections/editorial/EditorialBio.tsx components/sections/editorial/EditorialHome.tsx app/globals.css
git commit -m "feat(editorial): add flowing bio with drop-cap and floating portrait"
```

---

## Task 8: Editorial Honors + Writing

**Goal:** Honors as a two-column dated list; Writing as inline italicized index below.

**Files:**
- Create: `components/sections/editorial/EditorialHonors.tsx`
- Create: `components/sections/editorial/EditorialWriting.tsx`
- Modify: `components/sections/editorial/EditorialHome.tsx`

- [ ] **Step 1: Create EditorialHonors**

`components/sections/editorial/EditorialHonors.tsx`:

```tsx
"use client";

import { honors, involvement } from "@/content/home";

export default function EditorialHonors() {
  return (
    <section className="w-full bg-[#faf7f2] text-[#1a1612] px-6 md:px-12 py-24 md:py-32 border-t border-[#1a1612]/15">
      <div className="max-w-[680px] mx-auto">
        <p className="text-xs uppercase tracking-[0.2em] text-[#5a3a1a] mb-8 font-[var(--font-inter)]">Honors &amp; Awards</p>
        <ul className="font-[var(--font-source-serif)] divide-y divide-[#1a1612]/10">
          {honors.map((h) => (
            <li key={h.title} className="grid grid-cols-[1fr_auto] gap-6 py-5 items-baseline">
              <div>
                <div className="text-lg">
                  {h.link ? (
                    <a href={h.link} target="_blank" rel="noreferrer" className="underline decoration-[#5a3a1a]/40 decoration-1 underline-offset-4 hover:decoration-[#5a3a1a]">
                      {h.title}
                    </a>
                  ) : h.title}
                  <span className="text-[#1a1612]/55"> · {h.organization}</span>
                </div>
                <p className="text-sm text-[#1a1612]/70 leading-relaxed mt-1">{h.description}</p>
              </div>
              <span className="text-xs uppercase tracking-[0.15em] text-[#5a3a1a] font-[var(--font-inter)] whitespace-nowrap">{h.date}</span>
            </li>
          ))}
        </ul>

        <p className="text-xs uppercase tracking-[0.2em] text-[#5a3a1a] mt-20 mb-8 font-[var(--font-inter)]">Leadership &amp; Involvement</p>
        <ul className="font-[var(--font-source-serif)] divide-y divide-[#1a1612]/10">
          {involvement.map((i) => (
            <li key={i.role + i.organization} className="grid grid-cols-[1fr_auto] gap-6 py-5 items-baseline">
              <div>
                <div className="text-lg">{i.role}<span className="text-[#1a1612]/55"> · {i.organization}</span></div>
                <p className="text-sm text-[#1a1612]/70 leading-relaxed mt-1">{i.description}</p>
              </div>
              <span className="text-xs uppercase tracking-[0.15em] text-[#5a3a1a] font-[var(--font-inter)] whitespace-nowrap">{i.date}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Create EditorialWriting**

`components/sections/editorial/EditorialWriting.tsx`:

```tsx
"use client";

import type { EssayMeta } from "@/lib/essays";
import Link from "next/link";

interface Props { essays: EssayMeta[]; }

export default function EditorialWriting({ essays }: Props) {
  if (essays.length === 0) return null;
  return (
    <section className="w-full bg-[#faf7f2] text-[#1a1612] px-6 md:px-12 py-24 md:py-32 border-t border-[#1a1612]/15">
      <div className="max-w-[680px] mx-auto">
        <p className="text-xs uppercase tracking-[0.2em] text-[#5a3a1a] mb-8 font-[var(--font-inter)]">Recent Writing</p>
        <ul className="font-[var(--font-source-serif)] divide-y divide-[#1a1612]/10">
          {essays.slice(0, 5).map((e) => (
            <li key={e.slug} className="py-5">
              <Link href={`/writing/${e.slug}`} className="grid grid-cols-[auto_1fr_auto] gap-6 items-baseline group">
                <span className="text-xs uppercase tracking-[0.15em] text-[#5a3a1a] font-[var(--font-inter)]">
                  {new Date(e.date).getFullYear()}
                </span>
                <span className="italic text-lg group-hover:underline decoration-[#5a3a1a]/60 underline-offset-4">{e.title}</span>
                <span className="text-xs text-[#1a1612]/50 font-[var(--font-inter)]">{e.readTime}</span>
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/writing" className="inline-block mt-10 italic text-[#5a3a1a] underline underline-offset-4">
          → all essays
        </Link>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Add to EditorialHome**

```tsx
"use client";

import type { EssayMeta } from "@/lib/essays";
import EditorialHero from "@/components/heroes/EditorialHero";
import EditorialBio from "./EditorialBio";
import EditorialHonors from "./EditorialHonors";
import EditorialWriting from "./EditorialWriting";

interface Props { essays: EssayMeta[]; }

export default function EditorialHome({ essays }: Props) {
  return (
    <div className="bg-[#faf7f2] text-[#1a1612]">
      <EditorialHero />
      <EditorialBio />
      <EditorialHonors />
      <EditorialWriting essays={essays} />
    </div>
  );
}
```

- [ ] **Step 4: Verify in browser**

Switch to Editorial. Check: honors render as two-column dated list, dates in small caps on the right; writing index shows year · title · read time, italic titles with serif.

- [ ] **Step 5: Commit**

```bash
git add components/sections/editorial/EditorialHonors.tsx components/sections/editorial/EditorialWriting.tsx components/sections/editorial/EditorialHome.tsx
git commit -m "feat(editorial): add honors list and writing index"
```

---

## Task 9: Editorial Featured Work

**Goal:** Reverse-chronological project index — one row per project, hover reveals thumbnail.

**Files:**
- Create: `components/sections/editorial/EditorialWork.tsx`
- Modify: `components/sections/editorial/EditorialHome.tsx`

- [ ] **Step 1: Create EditorialWork**

`components/sections/editorial/EditorialWork.tsx`:

```tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/app/projects/data";

export default function EditorialWork() {
  const [hoverIdx, setHoverIdx] = useState<number | null>(null);
  const preview = hoverIdx !== null ? projects[hoverIdx] : null;

  return (
    <section id="work" className="w-full bg-[#faf7f2] text-[#1a1612] px-6 md:px-12 py-24 md:py-32 border-t border-[#1a1612]/15">
      <div className="max-w-[680px] mx-auto">
        <p className="text-xs uppercase tracking-[0.2em] text-[#5a3a1a] mb-8 font-[var(--font-inter)]">Selected Work</p>
        <ul className="font-[var(--font-source-serif)] divide-y divide-[#1a1612]/10 relative">
          {projects.map((p, i) => (
            <li
              key={p.title}
              className="py-5"
              onMouseEnter={() => setHoverIdx(i)}
              onMouseLeave={() => setHoverIdx(null)}
            >
              <Link href={p.href} className="grid grid-cols-[auto_1fr_auto] gap-6 items-baseline group">
                <span className="text-xs uppercase tracking-[0.15em] text-[#5a3a1a] font-[var(--font-inter)] whitespace-nowrap">
                  {p.year}
                </span>
                <span className="text-lg">
                  <span className="italic">{p.title}</span>
                  <span className="text-[#1a1612]/55"> — {p.tagline}</span>
                </span>
                <span className="text-[#5a3a1a] text-lg group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Hover preview — fixed in right margin on desktop */}
        {preview && preview.image && (
          <div className="hidden xl:block fixed right-12 top-1/3 w-56 aspect-[4/3] border border-[#1a1612]/20 bg-white pointer-events-none z-40 shadow-sm">
            <Image
              src={preview.image}
              alt={preview.title}
              fill
              className={preview.isLogo ? "object-contain p-4" : "object-cover"}
            />
          </div>
        )}
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Add to EditorialHome (between Bio and Honors)**

```tsx
"use client";

import type { EssayMeta } from "@/lib/essays";
import EditorialHero from "@/components/heroes/EditorialHero";
import EditorialBio from "./EditorialBio";
import EditorialWork from "./EditorialWork";
import EditorialHonors from "./EditorialHonors";
import EditorialWriting from "./EditorialWriting";

interface Props { essays: EssayMeta[]; }

export default function EditorialHome({ essays }: Props) {
  return (
    <div className="bg-[#faf7f2] text-[#1a1612]">
      <EditorialHero />
      <EditorialBio />
      <EditorialWork />
      <EditorialHonors />
      <EditorialWriting essays={essays} />
      <footer className="border-t border-[#1a1612]/15 px-6 md:px-12 py-12 font-[var(--font-source-serif)] text-sm text-[#1a1612]/55 text-center">
        Set in Instrument Serif &amp; Source Serif 4. Built with Next.js. — Josué.
      </footer>
    </div>
  );
}
```

- [ ] **Step 3: Verify in browser**

Switch to Editorial. Hover project rows — on desktop wide screens, a thumbnail appears fixed in the right margin. Click through should navigate to the project.

- [ ] **Step 4: Commit**

```bash
git add components/sections/editorial/EditorialWork.tsx components/sections/editorial/EditorialHome.tsx
git commit -m "feat(editorial): add work index with margin hover preview"
```

---

## Task 10: Editorial Projects Index page

**Goal:** `/projects` in Editorial mode renders a reverse-chronological catalogue grouped by year.

**Files:**
- Modify: `components/projects/ProjectsEditorial.tsx`

- [ ] **Step 1: Replace the stub**

```tsx
"use client";

import Link from "next/link";
import { projects } from "@/app/projects/data";

export default function ProjectsEditorial() {
  // Group by year (keep order as in data.ts — already reverse-chronological)
  const byYear = new Map<string, typeof projects>();
  for (const p of projects) {
    const existing = byYear.get(p.year) ?? [];
    existing.push(p);
    byYear.set(p.year, existing);
  }

  return (
    <div className="min-h-screen bg-[#faf7f2] text-[#1a1612] px-6 md:px-12 py-24 md:py-32">
      <div className="max-w-[680px] mx-auto">
        <Link href="/" className="text-xs uppercase tracking-[0.2em] text-[#5a3a1a] font-[var(--font-inter)]">← back</Link>

        <h1 className="font-[var(--font-instrument-serif)] italic text-6xl md:text-7xl leading-[0.95] mt-8 mb-6">Projects</h1>
        <p className="font-[var(--font-source-serif)] text-lg leading-[1.65] text-[#1a1612]/80 mb-16 max-w-[580px]">
          A catalogue of things I&apos;ve built, researched, and shipped — in reverse chronological order.
        </p>

        {Array.from(byYear.entries()).map(([year, group]) => (
          <section key={year} className="mb-12">
            <p className="text-xs uppercase tracking-[0.2em] text-[#5a3a1a] font-[var(--font-inter)] border-b border-[#1a1612]/15 pb-2 mb-4">
              {year}
            </p>
            <ul className="font-[var(--font-source-serif)] divide-y divide-[#1a1612]/10">
              {group.map((p) => (
                <li key={p.title} className="py-4">
                  <Link href={p.href} className="grid grid-cols-[1fr_auto] gap-6 items-baseline group">
                    <span className="text-lg">
                      <span className="italic">{p.title}</span>
                      <span className="text-[#1a1612]/55"> — {p.tagline}</span>
                    </span>
                    <span className="text-[#5a3a1a] group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                  <p className="text-sm text-[#1a1612]/70 leading-relaxed mt-2 max-w-[580px]">{p.description}</p>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Verify in browser**

Open `/projects` in Editorial mode. Check: year headers in small caps, italic titles, reverse-chrono order.

- [ ] **Step 3: Commit**

```bash
git add components/projects/ProjectsEditorial.tsx
git commit -m "feat(editorial): implement /projects catalogue grouped by year"
```

---

## Task 11: Add Agency fonts

**Goal:** Load Geist Sans + Geist Mono via `next/font`.

**Files:**
- Modify: `app/layout.tsx`
- Modify: `app/globals.css`

- [ ] **Step 1: Register fonts**

In `app/layout.tsx`:

```tsx
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});
```

Add `${geistSans.variable} ${geistMono.variable}` to the body className.

- [ ] **Step 2: Expose as Tailwind tokens**

In `app/globals.css`, inside `@theme inline`:

```css
--font-geist: var(--font-geist-sans);
--font-geist-mono: var(--font-geist-mono);
```

- [ ] **Step 3: Verify build**

Run: `npm run build`
Expected: succeeds.

- [ ] **Step 4: Commit**

```bash
git add app/layout.tsx app/globals.css
git commit -m "feat(agency): register Geist Sans and Geist Mono fonts"
```

---

## Task 12: Agency Hero

**Goal:** Massive tight-tracked name, mono role block, subtle grain, one magnetic CTA.

**Files:**
- Create: `components/heroes/AgencyHero.tsx`
- Modify: `app/globals.css` (add grain utility)

- [ ] **Step 1: Add grain utility**

In `app/globals.css`, append to `@layer utilities`:

```css
.agency-grain::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.35'/%3E%3C/svg%3E");
  opacity: 0.06;
  pointer-events: none;
  mix-blend-mode: overlay;
}
```

- [ ] **Step 2: Create AgencyHero**

`components/heroes/AgencyHero.tsx`:

```tsx
"use client";

import { motion } from "framer-motion";
import { hero } from "@/content/home";

export default function AgencyHero() {
  return (
    <section className="relative w-full min-h-[100vh] bg-[#0a0a0a] text-[#e8e8e8] px-6 md:px-12 flex flex-col justify-end agency-grain overflow-hidden">
      <div className="max-w-[1400px] mx-auto w-full pb-16 md:pb-24">
        <div className="grid grid-cols-12 gap-4 items-end">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
            className="col-span-12 md:col-span-9 font-[var(--font-geist-sans)] font-medium tracking-[-0.04em] leading-[0.9]"
            style={{ fontSize: "clamp(4rem, 12vw, 10rem)" }}
          >
            JOSUÉ<br />GODEME.
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="col-span-12 md:col-span-3 font-[var(--font-geist-mono)] text-xs uppercase text-[#888] space-y-1"
          >
            {hero.roles.map((r) => (
              <div key={r}>· {r}</div>
            ))}
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-[var(--font-geist-sans)] text-lg md:text-xl text-[#b8b8b8] leading-[1.45] max-w-2xl mt-12 md:mt-16"
        >
          {hero.tagline}
        </motion.p>

        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          href="#work"
          whileHover={{ scale: 1.02 }}
          className="mt-10 inline-flex items-center gap-3 font-[var(--font-geist-mono)] uppercase text-xs tracking-[0.15em] text-[#0a0a0a] bg-[#d4ff00] px-6 py-4 rounded-none hover:bg-white transition-colors"
        >
          Selected Work <span>↓</span>
        </motion.a>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Wire into AgencyHome**

Replace `components/sections/agency/AgencyHome.tsx`:

```tsx
"use client";

import type { EssayMeta } from "@/lib/essays";
import AgencyHero from "@/components/heroes/AgencyHero";

interface Props { essays: EssayMeta[]; }

export default function AgencyHome(_props: Props) {
  return (
    <div className="bg-[#0a0a0a] text-[#e8e8e8]">
      <AgencyHero />
      <div className="min-h-[40vh] flex items-center justify-center">
        <p className="text-neutral-400 font-[var(--font-geist-mono)] text-xs tracking-widest uppercase">More agency sections in Task 13–15.</p>
      </div>
    </div>
  );
}
```

- [ ] **Step 4: Verify in browser**

Switch to Agency. Check: massive name fills the viewport, tight letter-spacing, mono role list to the right, lime CTA, subtle grain on black.

- [ ] **Step 5: Commit**

```bash
git add components/heroes/AgencyHero.tsx components/sections/agency/AgencyHome.tsx app/globals.css
git commit -m "feat(agency): add agency hero with massive Geist name and lime CTA"
```

---

## Task 13: Agency Bio

**Goal:** Two-column layout — left portrait full-bleed + grain, right bio paragraphs with mono labels.

**Files:**
- Create: `components/sections/agency/AgencyBio.tsx`
- Modify: `components/sections/agency/AgencyHome.tsx`

- [ ] **Step 1: Create AgencyBio**

`components/sections/agency/AgencyBio.tsx`:

```tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { bio } from "@/content/home";

export default function AgencyBio() {
  return (
    <section className="w-full bg-[#0a0a0a] text-[#e8e8e8] border-t border-white/10">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative aspect-[3/4] md:aspect-auto md:min-h-[100vh] overflow-hidden agency-grain">
          <Image
            src="/josue-headshot/VERT_IMG_5740.png"
            alt="Josué Godeme"
            fill
            className="object-cover grayscale contrast-[1.05]"
          />
        </div>
        <div className="px-6 md:px-12 py-20 md:py-32 flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-lg space-y-10"
          >
            {bio.paragraphs.map((p, i) => (
              <div key={p.label}>
                <div className="font-[var(--font-geist-mono)] text-xs uppercase tracking-[0.15em] text-[#888] mb-3">
                  {String(i + 1).padStart(2, "0")} — {p.label}
                </div>
                <p className="font-[var(--font-geist-sans)] text-base md:text-lg leading-[1.55] text-[#e8e8e8]/90">{p.text}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Add to AgencyHome**

```tsx
"use client";

import type { EssayMeta } from "@/lib/essays";
import AgencyHero from "@/components/heroes/AgencyHero";
import AgencyBio from "./AgencyBio";

interface Props { essays: EssayMeta[]; }

export default function AgencyHome(_props: Props) {
  return (
    <div className="bg-[#0a0a0a] text-[#e8e8e8]">
      <AgencyHero />
      <AgencyBio />
    </div>
  );
}
```

- [ ] **Step 3: Verify in browser**

Switch to Agency. Check: portrait left full-height, desaturated; right side has three mono-labeled paragraphs.

- [ ] **Step 4: Commit**

```bash
git add components/sections/agency/AgencyBio.tsx components/sections/agency/AgencyHome.tsx
git commit -m "feat(agency): add two-column bio with mono labels"
```

---

## Task 14: Agency Honors (bento) and Writing (horizontal scroll)

**Goal:** Honors as an asymmetric bento grid; writing as a horizontal scroll of cards.

**Files:**
- Create: `components/sections/agency/AgencyHonors.tsx`
- Create: `components/sections/agency/AgencyWriting.tsx`
- Modify: `components/sections/agency/AgencyHome.tsx`

- [ ] **Step 1: Create AgencyHonors**

`components/sections/agency/AgencyHonors.tsx`:

```tsx
"use client";

import { honors, involvement } from "@/content/home";

export default function AgencyHonors() {
  // Size mapping: first two honors large, rest small.
  const tileSizes = ["md:col-span-6 md:row-span-2", "md:col-span-6 md:row-span-2", "md:col-span-4", "md:col-span-4", "md:col-span-4"];

  return (
    <section className="w-full bg-[#0a0a0a] text-[#e8e8e8] border-t border-white/10 px-6 md:px-12 py-20 md:py-28">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-baseline justify-between mb-12">
          <p className="font-[var(--font-geist-mono)] text-xs uppercase tracking-[0.15em] text-[#888]">Awards · Recognition</p>
          <p className="font-[var(--font-geist-mono)] text-xs text-[#888]">{honors.length.toString().padStart(2, "0")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-2 gap-3 auto-rows-min">
          {honors.map((h, i) => (
            <div
              key={h.title}
              className={`p-6 bg-[#141414] border border-white/5 hover:border-[#d4ff00]/40 transition-colors ${tileSizes[i] ?? "md:col-span-4"}`}
            >
              <div className="font-[var(--font-geist-mono)] text-[10px] uppercase tracking-[0.2em] text-[#d4ff00] mb-3">
                → {String(i + 1).padStart(2, "0")} / {honors.length.toString().padStart(2, "0")}
              </div>
              <div className="font-[var(--font-geist-sans)] text-xl md:text-2xl leading-tight mb-2">{h.title}</div>
              <div className="font-[var(--font-geist-mono)] text-xs uppercase text-[#888] mb-4 tracking-wider">
                {h.organization} · {h.date}
              </div>
              <p className="font-[var(--font-geist-sans)] text-sm text-[#b8b8b8] leading-[1.5]">{h.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 flex items-baseline justify-between mb-8">
          <p className="font-[var(--font-geist-mono)] text-xs uppercase tracking-[0.15em] text-[#888]">Leadership · Involvement</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {involvement.map((item) => (
            <div key={item.role + item.organization} className="p-6 bg-[#141414] border border-white/5">
              <div className="font-[var(--font-geist-sans)] text-lg mb-1">{item.role}</div>
              <div className="font-[var(--font-geist-mono)] text-xs uppercase text-[#d4ff00] tracking-wider mb-3">{item.organization} · {item.date}</div>
              <p className="font-[var(--font-geist-sans)] text-sm text-[#b8b8b8] leading-[1.5]">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Create AgencyWriting**

`components/sections/agency/AgencyWriting.tsx`:

```tsx
"use client";

import Link from "next/link";
import type { EssayMeta } from "@/lib/essays";

interface Props { essays: EssayMeta[]; }

export default function AgencyWriting({ essays }: Props) {
  if (essays.length === 0) return null;
  return (
    <section className="w-full bg-[#0a0a0a] text-[#e8e8e8] border-t border-white/10 py-20 md:py-28">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 mb-8 flex items-baseline justify-between">
        <p className="font-[var(--font-geist-mono)] text-xs uppercase tracking-[0.15em] text-[#888]">Writing · Drag to scroll</p>
        <Link href="/writing" className="font-[var(--font-geist-mono)] text-xs uppercase text-[#d4ff00] hover:text-white">All essays →</Link>
      </div>
      <div className="overflow-x-auto pl-6 md:pl-12 scrollbar-thin">
        <div className="flex gap-3 pr-12" style={{ width: "max-content" }}>
          {essays.slice(0, 8).map((e, i) => (
            <Link
              key={e.slug}
              href={`/writing/${e.slug}`}
              className="w-[320px] md:w-[380px] shrink-0 p-6 bg-[#141414] border border-white/5 hover:border-[#d4ff00]/40 transition-colors"
            >
              <div className="font-[var(--font-geist-mono)] text-[10px] uppercase tracking-[0.2em] text-[#d4ff00] mb-4">
                → {String(i + 1).padStart(2, "0")}
              </div>
              <div className="font-[var(--font-geist-sans)] text-xl leading-tight mb-4">{e.title}</div>
              <div className="font-[var(--font-geist-mono)] text-xs uppercase text-[#888] tracking-wider">
                {new Date(e.date).toLocaleDateString("en-US", { year: "numeric", month: "short" })} · {e.readTime}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Update AgencyHome**

```tsx
"use client";

import type { EssayMeta } from "@/lib/essays";
import AgencyHero from "@/components/heroes/AgencyHero";
import AgencyBio from "./AgencyBio";
import AgencyHonors from "./AgencyHonors";
import AgencyWriting from "./AgencyWriting";

interface Props { essays: EssayMeta[]; }

export default function AgencyHome({ essays }: Props) {
  return (
    <div className="bg-[#0a0a0a] text-[#e8e8e8]">
      <AgencyHero />
      <AgencyBio />
      <AgencyHonors />
      <AgencyWriting essays={essays} />
    </div>
  );
}
```

- [ ] **Step 4: Verify in browser**

Switch to Agency. Check: honors render as asymmetric bento (two large tiles first, then smaller), involvement as 2-col grid, writing scrolls horizontally.

- [ ] **Step 5: Commit**

```bash
git add components/sections/agency/AgencyHonors.tsx components/sections/agency/AgencyWriting.tsx components/sections/agency/AgencyHome.tsx
git commit -m "feat(agency): add bento honors and horizontal writing scroll"
```

---

## Task 15: Agency Featured Work

**Goal:** Full-width project rows with mono counter, massive title, image at 60% of the row.

**Files:**
- Create: `components/sections/agency/AgencyWork.tsx`
- Modify: `components/sections/agency/AgencyHome.tsx`

- [ ] **Step 1: Create AgencyWork**

`components/sections/agency/AgencyWork.tsx`:

```tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "@/app/projects/data";

export default function AgencyWork() {
  const featured = projects.slice(0, 5);
  return (
    <section id="work" className="w-full bg-[#0a0a0a] text-[#e8e8e8] border-t border-white/10 px-6 md:px-12 py-20 md:py-28">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-baseline justify-between mb-16">
          <p className="font-[var(--font-geist-mono)] text-xs uppercase tracking-[0.15em] text-[#888]">Selected Work</p>
          <Link href="/projects" className="font-[var(--font-geist-mono)] text-xs uppercase text-[#d4ff00] hover:text-white">All projects →</Link>
        </div>

        <div className="space-y-6">
          {featured.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
            >
              <Link
                href={p.href}
                className="grid grid-cols-12 gap-4 items-center py-6 border-t border-white/10 group"
              >
                <div className="col-span-12 md:col-span-1 font-[var(--font-geist-mono)] text-xs uppercase text-[#d4ff00]">
                  → {String(i + 1).padStart(2, "0")}
                </div>
                <div className="col-span-12 md:col-span-4 font-[var(--font-geist-sans)] font-medium tracking-[-0.03em] text-4xl md:text-5xl leading-[0.95] group-hover:text-[#d4ff00] transition-colors">
                  {p.title}
                </div>
                <div className="col-span-12 md:col-span-7 relative aspect-[16/9] overflow-hidden bg-[#141414]">
                  {p.image && (
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className={`${p.isLogo ? "object-contain p-12" : "object-cover"} group-hover:scale-[1.02] transition-transform duration-700`}
                    />
                  )}
                </div>
              </Link>
              <div className="font-[var(--font-geist-mono)] text-[10px] uppercase tracking-widest text-[#555] text-right mt-2">NEXT ↓</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Add to AgencyHome (after Bio, before Honors)**

```tsx
"use client";

import type { EssayMeta } from "@/lib/essays";
import AgencyHero from "@/components/heroes/AgencyHero";
import AgencyBio from "./AgencyBio";
import AgencyWork from "./AgencyWork";
import AgencyHonors from "./AgencyHonors";
import AgencyWriting from "./AgencyWriting";

interface Props { essays: EssayMeta[]; }

export default function AgencyHome({ essays }: Props) {
  return (
    <div className="bg-[#0a0a0a] text-[#e8e8e8]">
      <AgencyHero />
      <AgencyBio />
      <AgencyWork />
      <AgencyHonors />
      <AgencyWriting essays={essays} />
      <footer className="border-t border-white/10 px-6 md:px-12 py-24">
        <div className="max-w-[1400px] mx-auto">
          <a
            href="mailto:josue@useecho.ai"
            className="block font-[var(--font-geist-sans)] font-medium tracking-[-0.04em] hover:text-[#d4ff00] transition-colors"
            style={{ fontSize: "clamp(3rem, 10vw, 8rem)", lineHeight: 0.9 }}
          >
            GET IN TOUCH ↗
          </a>
          <div className="flex justify-between mt-12 font-[var(--font-geist-mono)] text-xs uppercase text-[#888]">
            <span>josue@useecho.ai</span>
            <span>© 2026 · JG</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
```

- [ ] **Step 3: Verify in browser**

Switch to Agency. Check: project rows show mono number, large title, 16:9 image at right, lime hover. Footer shows massive "GET IN TOUCH".

- [ ] **Step 4: Commit**

```bash
git add components/sections/agency/AgencyWork.tsx components/sections/agency/AgencyHome.tsx
git commit -m "feat(agency): add featured work rows and GET IN TOUCH footer"
```

---

## Task 16: Agency Projects Index page

**Goal:** Dense bento grid of projects, lime accent on hover, mono counters.

**Files:**
- Modify: `components/projects/ProjectsAgency.tsx`

- [ ] **Step 1: Replace the stub**

```tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { projects } from "@/app/projects/data";

export default function ProjectsAgency() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e8e8e8] px-6 md:px-12 py-16 md:py-20">
      <div className="max-w-[1400px] mx-auto">
        <Link href="/" className="font-[var(--font-geist-mono)] text-xs uppercase tracking-[0.15em] text-[#888] hover:text-[#d4ff00]">← back</Link>

        <div className="mt-10 grid grid-cols-12 gap-4 items-end mb-16">
          <h1
            className="col-span-12 md:col-span-9 font-[var(--font-geist-sans)] font-medium tracking-[-0.04em] leading-[0.9]"
            style={{ fontSize: "clamp(3.5rem, 10vw, 8rem)" }}
          >
            PROJECTS.
          </h1>
          <div className="col-span-12 md:col-span-3 font-[var(--font-geist-mono)] text-xs uppercase text-[#888]">
            · {projects.length.toString().padStart(2, "0")} TOTAL
            <br />· 2024 — 2026
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
          {projects.map((p, i) => {
            const span = i < 2 ? "md:col-span-6" : i < 4 ? "md:col-span-6" : "md:col-span-4";
            return (
              <Link
                key={p.title}
                href={p.href}
                className={`${span} group relative p-6 bg-[#141414] border border-white/5 hover:border-[#d4ff00]/40 transition-colors block`}
              >
                <div className="font-[var(--font-geist-mono)] text-[10px] uppercase tracking-[0.2em] text-[#d4ff00] mb-3">
                  → {String(i + 1).padStart(2, "0")} / {projects.length.toString().padStart(2, "0")}
                </div>
                {p.image && (
                  <div className="relative aspect-[16/9] overflow-hidden mb-4 bg-[#0a0a0a]">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className={`${p.isLogo ? "object-contain p-8" : "object-cover"} group-hover:scale-[1.02] transition-transform duration-700`}
                    />
                  </div>
                )}
                <div className="font-[var(--font-geist-sans)] text-2xl md:text-3xl font-medium tracking-[-0.02em] mb-2 group-hover:text-[#d4ff00] transition-colors">{p.title}</div>
                <div className="font-[var(--font-geist-mono)] text-xs uppercase text-[#888] tracking-wider mb-3">{p.year} · {p.tagline}</div>
                <p className="font-[var(--font-geist-sans)] text-sm text-[#b8b8b8] leading-[1.5]">{p.description}</p>
                <div className="flex flex-wrap gap-1 mt-4">
                  {p.tags.map((t) => (
                    <span key={t} className="font-[var(--font-geist-mono)] text-[10px] uppercase px-2 py-1 border border-white/10 text-[#888]">
                      {t}
                    </span>
                  ))}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Verify in browser**

Open `/projects` in Agency mode. Check: first two tiles wider, grid dense, lime accents on hover.

- [ ] **Step 3: Commit**

```bash
git add components/projects/ProjectsAgency.tsx
git commit -m "feat(agency): implement /projects bento grid with lime accents"
```

---

## Task 17: Hide Navbar/Footer on non-Current modes, final polish

**Goal:** The existing site Navbar and Footer are styled for Current mode and clash with Editorial/Agency. Hide them when mode ≠ current. Also address any leftover issues.

**Files:**
- Create: `components/mode/ChromeVisibility.tsx`
- Modify: `app/layout.tsx`

- [ ] **Step 1: Create ChromeVisibility wrapper**

`components/mode/ChromeVisibility.tsx`:

```tsx
"use client";

import { ReactNode } from "react";
import { useMode } from "./useMode";

export function ChromeVisibility({ children }: { children: ReactNode }) {
  const { mode } = useMode();
  if (mode === "current") return <>{children}</>;
  return null;
}
```

- [ ] **Step 2: Wrap Navbar and Footer in layout**

In `app/layout.tsx`:

```tsx
import { ChromeVisibility } from "@/components/mode/ChromeVisibility";

// ... inside body:
<ModeProvider>
  <ChromeVisibility>
    <Navbar />
  </ChromeVisibility>
  <main className="min-h-screen">{children}</main>
  <ChromeVisibility>
    <Footer />
  </ChromeVisibility>
  <ModeToggle />
</ModeProvider>
```

> Note: removed `pt-16` from `<main>` — only Current mode needs top padding for the navbar. Add `pt-16` inside `CurrentHome`'s wrapper instead, OR leave it on `<main>` and accept that Editorial/Agency content will have a small empty top gutter (acceptable).
>
> **Implementer choice:** keep `pt-16` on main for simplicity. Editorial/Agency heroes use `min-h-[90vh]` / `min-h-[100vh]` so the gutter is visually absorbed.

- [ ] **Step 3: Verify in browser**

- Current mode: navbar and footer visible, site looks unchanged.
- Editorial mode: no navbar, no footer. Floating toggle still visible.
- Agency mode: no navbar, no footer. Floating toggle still visible.

- [ ] **Step 4: Full regression check**

Open all three modes on both `/` and `/projects`:
- Does Current look pixel-identical to before this work started? (The reference is commit `93c445a`'s parent — checkout that commit in a separate worktree or just eyeball against memory.)
- Do Editorial and Agency render without console errors?
- Does the toggle persist across reloads on both pages?
- Do keyboard shortcuts `1 / 2 / 3` work?
- On mobile (Chrome DevTools responsive mode, 375px): does the toggle fit, is content readable, does nothing overflow horizontally?

Fix any issues found inline.

- [ ] **Step 5: Run build**

Run: `npm run build`
Expected: succeeds with no type errors.

- [ ] **Step 6: Commit**

```bash
git add components/mode/ChromeVisibility.tsx app/layout.tsx
git commit -m "feat(mode): hide navbar/footer in Editorial/Agency modes"
```

---

## Task 18: Accessibility + performance final pass

**Goal:** Ensure the toggle is keyboard-accessible and the dynamic imports actually kick in.

**Files:** Various (read-only except for small fixes)

- [ ] **Step 1: Keyboard and ARIA audit of ModeToggle**

Open in browser, focus the toggle with Tab. Verify:
- Focus ring is visible on each segment button.
- `Enter` / `Space` on a focused segment activates it.
- Screen reader (VoiceOver via `Cmd+F5` on macOS) announces `Site design mode` tab list and the active tab.

If focus rings are missing, add `focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#d4ff00]` (or similar) to the segment buttons.

- [ ] **Step 2: Bundle check**

Run: `npm run build`
Look at the build output. Confirm that separate chunks are emitted for `EditorialHome` and `AgencyHome` (they should appear as their own JS chunks, not inline in the page bundle). If they're not split, verify the `dynamic(() => import(...))` calls in `HomeModeSwitcher` and `ProjectsModeSwitcher`.

- [ ] **Step 3: Check for `prefers-reduced-motion`**

The existing `app/globals.css` already has a `@media (prefers-reduced-motion: reduce)` block. Verify that framer-motion animations in AgencyHero, AgencyWork, and EditorialBio respect it by testing with motion reduced (macOS System Settings → Accessibility → Display → Reduce motion).

- [ ] **Step 4: Visual regression snapshots (manual)**

Take screenshots of all 6 states (3 modes × 2 pages) at desktop (1440px) and mobile (375px). Save under `docs/superpowers/specs/screenshots/2026-04-23-taste-toggle/` for later comparison. Commit them.

```bash
mkdir -p docs/superpowers/specs/screenshots/2026-04-23-taste-toggle
# take screenshots manually, save into that folder
git add docs/superpowers/specs/screenshots/2026-04-23-taste-toggle
git commit -m "docs: add taste-toggle screenshots for all 6 states"
```

- [ ] **Step 5: Final commit**

No additional code changes expected at this point. If anything was fixed in the focus/a11y audit, commit it:

```bash
git add -u
git commit -m "fix(mode): a11y and focus polish on ModeToggle"
```

---

## Self-Review Notes

**Spec coverage checked:**
- ✅ ModeProvider with `localStorage` persistence (Task 1)
- ✅ Floating ModeToggle with keyboard shortcuts (Task 2)
- ✅ Homepage mode switching preserving Current (Task 3)
- ✅ Projects mode switching preserving Current (Task 4)
- ✅ Editorial treatment for all 5 homepage sections (Tasks 6–9)
- ✅ Agency treatment for all 5 homepage sections (Tasks 12–15)
- ✅ Editorial and Agency `/projects` index (Tasks 10, 16)
- ✅ Dynamic imports for mode-specific chunks (Task 3, 4 + audit in 18)
- ✅ `prefers-reduced-motion` respected (already in globals; verified in Task 18)
- ✅ Error handling: localStorage fallback (Task 1), invalid value reset (Task 1)
- ✅ Keyboard `1 / 2 / 3` ignored in inputs (Task 2)
- ✅ Navbar/Footer hidden in non-Current modes (Task 17)

**Known minor risk:**
- The existing `SelectedWriting.tsx` server component is duplicated (inline) in the client switcher for Current mode. If `getAllEssays()` changes shape, both places need updating. Acceptable for v1; a follow-up could refactor to a single client-friendly component.

**Not in scope (per spec):**
- Research, Writing, Gallery pages — still render with Navbar/Footer. They will look fine in Current mode; if the visitor switches to Editorial/Agency and navigates to one of these, they'll see the old style without chrome. This is an acceptable v1 rough edge; the toggle focuses on home + projects.
