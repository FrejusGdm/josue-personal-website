import { getAllEssays } from "@/lib/essays";
import { WritingModeSwitcher } from "@/components/mode/WritingModeSwitcher";

export const metadata = {
  title: "Writing - Josué Godeme",
  description: "Essays on Tech, language, and whatever else I feel like writing about.",
};

export default async function WritingPage() {
  const essays = await getAllEssays();
  return <WritingModeSwitcher essays={essays} />;
}
