"use client";

import dynamic from "next/dynamic";
import CurrentWriting from "@/components/sections/CurrentWriting";
import { useMode } from "./useMode";
import type { EssayMeta } from "@/lib/mdx";

const EditorialWritingPage = dynamic(
  () => import("@/components/sections/editorial/EditorialWritingPage"),
  {
    ssr: false,
    loading: () => (
      <div className="min-h-[90vh] flex items-center justify-center">
        <p className="text-neutral-400 text-sm">Loading Editorial…</p>
      </div>
    ),
  }
);

interface Props {
  essays: EssayMeta[];
}

export function WritingModeSwitcher({ essays }: Props) {
  const { mode } = useMode();
  if (mode === "editorial") return <EditorialWritingPage essays={essays} />;
  return <CurrentWriting essays={essays} />;
}
