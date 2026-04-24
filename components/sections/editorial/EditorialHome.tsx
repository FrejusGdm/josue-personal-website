"use client";

import type { EssayMeta } from "@/lib/mdx";

interface Props { essays: EssayMeta[]; }

export default function EditorialHome(_props: Props) {
  return (
    <div className="min-h-[90vh] flex items-center justify-center bg-[#faf7f2]">
      <p className="text-neutral-500 font-serif italic text-lg">Editorial mode — coming in Task 6–10.</p>
    </div>
  );
}
