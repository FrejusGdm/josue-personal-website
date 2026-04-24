"use client";

import type { EssayMeta } from "@/lib/mdx";

interface Props { essays: EssayMeta[]; }

export default function AgencyHome(_props: Props) {
  return (
    <div className="min-h-[90vh] flex items-center justify-center bg-[#0a0a0a]">
      <p className="text-neutral-400 font-mono text-sm tracking-widest">AGENCY MODE — COMING IN TASK 11–15.</p>
    </div>
  );
}
