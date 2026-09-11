"use client";

import dynamic from "next/dynamic";
import ProjectsCurrent from "@/components/projects/ProjectsCurrent";
import { useMode } from "./useMode";
import { EditorialLoader, useMinDisplayTime } from "./EditorialLoader";

const ProjectsEditorial = dynamic(
  () => import("@/components/projects/ProjectsEditorial"),
  { ssr: false, loading: () => <EditorialLoader /> }
);

export function ProjectsModeSwitcher() {
  const { mode } = useMode();
  const ready = useMinDisplayTime(mode === "editorial");
  if (mode === "editorial") return ready ? <ProjectsEditorial /> : <EditorialLoader />;
  return <ProjectsCurrent />;
}
