"use client";

import { ReactNode } from "react";
import { useMode } from "./useMode";

export function ChromeVisibility({ children }: { children: ReactNode }) {
  const { mode } = useMode();
  if (mode === "current") return <>{children}</>;
  return null;
}
