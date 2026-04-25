"use client";

import { ReactNode } from "react";
import { useMode } from "@/components/mode/useMode";

interface Props {
  children: ReactNode;
  className?: string;
}

export default function ProjectEditorialFrame({ children, className = "" }: Props) {
  const { mode } = useMode();
  const editorialClass = mode === "editorial" ? "editorial-project-page" : "";
  const combined = [className, editorialClass].filter(Boolean).join(" ");
  return <div className={combined}>{children}</div>;
}
