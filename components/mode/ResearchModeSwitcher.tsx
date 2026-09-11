"use client";

import dynamic from "next/dynamic";
import CurrentResearch from "@/components/sections/CurrentResearch";
import { useMode } from "./useMode";
import { EditorialLoader } from "./EditorialLoader";

const EditorialResearch = dynamic(
  () => import("@/components/sections/editorial/EditorialResearch"),
  {
    ssr: false,
    loading: () => <EditorialLoader />,
  }
);

export function ResearchModeSwitcher() {
  const { mode } = useMode();
  if (mode === "editorial") return <EditorialResearch />;
  return <CurrentResearch />;
}
