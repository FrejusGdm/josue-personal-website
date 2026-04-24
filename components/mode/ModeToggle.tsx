"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { useMode } from "./useMode";
import type { Mode } from "./ModeProvider";

const OPTIONS: { key: Mode; label: string; shortcut: string }[] = [
  { key: "current", label: "Current", shortcut: "1" },
  { key: "editorial", label: "Editorial", shortcut: "2" },
];

export function ModeToggle() {
  const { mode, setMode } = useMode();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      const tag = target?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || target?.isContentEditable) return;
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const match = OPTIONS.find((o) => o.shortcut === e.key);
      if (match) setMode(match.key);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [setMode]);

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      <div
        role="tablist"
        aria-label="Site design mode"
        className="flex items-center gap-1 p-1 rounded-full border border-neutral-200/70 bg-white/80 backdrop-blur-xl shadow-lg"
      >
        {OPTIONS.map((opt) => {
          const active = mode === opt.key;
          return (
            <button
              key={opt.key}
              role="tab"
              aria-selected={active}
              onClick={() => setMode(opt.key)}
              title={`Switch to ${opt.label} (press ${opt.shortcut})`}
              className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900 focus-visible:ring-offset-1 ${
                active ? "text-white" : "text-neutral-700 hover:text-neutral-900"
              }`}
            >
              {active && (
                <motion.span
                  layoutId="mode-toggle-pill"
                  className="absolute inset-0 bg-neutral-900 rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                />
              )}
              <span className="relative z-10">{opt.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
