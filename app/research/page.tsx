import type { Metadata } from "next";
import { ResearchModeSwitcher } from "@/components/mode/ResearchModeSwitcher";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata("/research");

export default function ResearchPage() {
  return <ResearchModeSwitcher />;
}
