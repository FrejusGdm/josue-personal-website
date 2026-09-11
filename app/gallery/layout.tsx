import type { Metadata } from "next";
import { pageMetadata } from "@/lib/site";

// The gallery page is a client component, and client components cannot
// export metadata in Next.js — so its head lives in this layout instead.
export const metadata: Metadata = pageMetadata("/gallery");

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
