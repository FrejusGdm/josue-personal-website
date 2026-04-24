"use client";

import { useContext } from "react";
import { ModeContext } from "./ModeProvider";

export function useMode() {
  return useContext(ModeContext);
}
