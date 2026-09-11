"use client";

import dynamic from "next/dynamic";
import CurrentWriting from "@/components/sections/CurrentWriting";
import { useMode } from "./useMode";
import { EditorialLoader } from "./EditorialLoader";
import type { EssayMeta } from "@/lib/mdx";

const EditorialWritingPage = dynamic(
  () => import("@/components/sections/editorial/EditorialWritingPage"),
  {
    ssr: false,
    loading: () => <EditorialLoader />,
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
