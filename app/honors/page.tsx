import type { Metadata } from "next";
import HonorsPageContent from "@/components/sections/HonorsPageContent";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata("/honors");

export default function HonorsPage() {
  return <HonorsPageContent />;
}
