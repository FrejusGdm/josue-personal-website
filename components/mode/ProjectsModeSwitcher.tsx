"use client";

import dynamic from "next/dynamic";
import ProjectsCurrent from "@/components/projects/ProjectsCurrent";
import { useMode } from "./useMode";
import { EditorialLoader } from "./EditorialLoader";

const ProjectsEditorial = dynamic(
  () => import("@/components/projects/ProjectsEditorial"),
  { ssr: false, loading: () => <EditorialLoader /> }
);

export function ProjectsModeSwitcher() {
  const { mode } = useMode();
  if (mode === "editorial") return <ProjectsEditorial />;
  return <ProjectsCurrent />;
}
