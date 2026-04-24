"use client";

import { ReactNode } from "react";
import { useMode } from "./useMode";

/**
 * Renders children only when in Current mode.
 * Used for the legacy Navbar/Footer that only fits the Current design.
 */
export function ChromeVisibility({ children }: { children: ReactNode }) {
  const { mode } = useMode();
  if (mode === "current") return <>{children}</>;
  return null;
}

/**
 * Renders children only when in Editorial mode.
 */
export function EditorialOnly({ children }: { children: ReactNode }) {
  const { mode } = useMode();
  if (mode === "editorial") return <>{children}</>;
  return null;
}
