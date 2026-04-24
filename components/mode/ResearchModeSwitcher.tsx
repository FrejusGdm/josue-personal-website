"use client";

import dynamic from "next/dynamic";
import CurrentResearch from "@/components/sections/CurrentResearch";
import { useMode } from "./useMode";

const EditorialResearch = dynamic(
  () => import("@/components/sections/editorial/EditorialResearch"),
  {
    ssr: false,
    loading: () => (
      <div className="min-h-[90vh] flex items-center justify-center">
        <p className="text-neutral-400 text-sm">Loading Editorial…</p>
      </div>
    ),
  }
);

export function ResearchModeSwitcher() {
  const { mode } = useMode();
  if (mode === "editorial") return <EditorialResearch />;
  return <CurrentResearch />;
}
