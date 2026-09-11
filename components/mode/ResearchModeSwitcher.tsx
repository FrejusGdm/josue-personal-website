"use client";

import dynamic from "next/dynamic";
import CurrentResearch from "@/components/sections/CurrentResearch";
import { useMode } from "./useMode";
import { EditorialLoader, useMinDisplayTime } from "./EditorialLoader";

const EditorialResearch = dynamic(
  () => import("@/components/sections/editorial/EditorialResearch"),
  {
    ssr: false,
    loading: () => <EditorialLoader />,
  }
);

export function ResearchModeSwitcher() {
  const { mode } = useMode();
  const ready = useMinDisplayTime(mode === "editorial");
  if (mode === "editorial") return ready ? <EditorialResearch /> : <EditorialLoader />;
  return <CurrentResearch />;
}
