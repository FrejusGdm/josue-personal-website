import type { Metadata } from "next";
import { ProjectsModeSwitcher } from "@/components/mode/ProjectsModeSwitcher";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata("/projects");

export default function ProjectsPage() {
  return (
    <div className="pb-32">
      <ProjectsModeSwitcher />
    </div>
  );
}
