import type { Metadata } from "next";
import { getAllEssays } from "@/lib/essays";
import { WritingModeSwitcher } from "@/components/mode/WritingModeSwitcher";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata("/writing");

export default async function WritingPage() {
  const essays = await getAllEssays();
  return <WritingModeSwitcher essays={essays} />;
}
