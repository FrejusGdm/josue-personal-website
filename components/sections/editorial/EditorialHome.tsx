"use client";

import type { EssayMeta } from "@/lib/mdx";
import EditorialHero from "@/components/heroes/EditorialHero";
import EditorialBio from "./EditorialBio";
import EditorialWork from "./EditorialWork";
import EditorialHonors from "./EditorialHonors";
import EditorialWriting from "./EditorialWriting";

interface Props { essays: EssayMeta[]; }

export default function EditorialHome({ essays }: Props) {
  return (
    <div className="bg-white text-[#1a1612]">
      <EditorialHero />
      <EditorialBio />
      <EditorialWork />
      <EditorialHonors />
      <EditorialWriting essays={essays} />
      <footer
        className="border-t border-[#1a1612]/15 px-6 md:px-12 py-12 text-sm text-[#1a1612]/55 text-center italic"
        style={{ fontFamily: "var(--font-source-serif), Georgia, serif" }}
      >
        Built with love by Josué.
      </footer>
    </div>
  );
}
