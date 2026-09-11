"use client";

import dynamic from "next/dynamic";
import CurrentWriting from "@/components/sections/CurrentWriting";
import { useMode } from "./useMode";
import { EditorialLoader, useMinDisplayTime } from "./EditorialLoader";
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
  const ready = useMinDisplayTime(mode === "editorial");
  if (mode === "editorial") return ready ? <EditorialWritingPage essays={essays} /> : <EditorialLoader />;
  return <CurrentWriting essays={essays} />;
}
