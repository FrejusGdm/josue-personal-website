"use client";

import dynamic from "next/dynamic";
import ProjectsCurrent from "@/components/projects/ProjectsCurrent";
import { useMode } from "./useMode";

const ProjectsEditorial = dynamic(
  () => import("@/components/projects/ProjectsEditorial"),
  { ssr: false, loading: () => <Placeholder /> }
);
const ProjectsAgency = dynamic(
  () => import("@/components/projects/ProjectsAgency"),
  { ssr: false, loading: () => <Placeholder /> }
);

function Placeholder() {
  return <div className="min-h-screen flex items-center justify-center text-neutral-400 text-sm">Loading…</div>;
}

export function ProjectsModeSwitcher() {
  const { mode } = useMode();
  if (mode === "editorial") return <ProjectsEditorial />;
  if (mode === "agency") return <ProjectsAgency />;
  return <ProjectsCurrent />;
}
