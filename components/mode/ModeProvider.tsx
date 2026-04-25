"use client";

import { createContext, useState, useEffect, ReactNode } from "react";

export type Mode = "current" | "editorial";

interface ModeContextValue {
  mode: Mode;
  setMode: (mode: Mode) => void;
}

export const ModeContext = createContext<ModeContextValue>({
  mode: "current",
  setMode: () => {},
});

const STORAGE_KEY = "josue-site-mode";
const VALID_MODES: Mode[] = ["current", "editorial"];

export function ModeProvider({ children }: { children: ReactNode }) {
  const [mode, setModeState] = useState<Mode>("editorial");
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored && VALID_MODES.includes(stored as Mode)) {
        setModeState(stored as Mode);
      }
    } catch {
      // localStorage unavailable
    }
    setHydrated(true);
  }, []);

  const setMode = (next: Mode) => {
    setModeState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // ignore
    }
  };

  return (
    <ModeContext.Provider value={{ mode: hydrated ? mode : "editorial", setMode }}>
      {children}
    </ModeContext.Provider>
  );
}
