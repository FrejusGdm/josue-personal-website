"use client";

import { useEffect, useState } from "react";

const NAME = "Josué";
const TYPE_INTERVAL_MS = 90;

interface EditorialLoaderProps {
  fullScreen?: boolean;
}

export function EditorialLoader({ fullScreen = true }: EditorialLoaderProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setCount(NAME.length);
      return;
    }
    if (count >= NAME.length) return;
    const t = setTimeout(() => setCount((c) => c + 1), TYPE_INTERVAL_MS);
    return () => clearTimeout(t);
  }, [count]);

  return (
    <div
      className={`flex items-center justify-center ${
        fullScreen ? "min-h-[90vh]" : "min-h-[50vh]"
      }`}
    >
      <p
        role="status"
        aria-label="Loading"
        style={{ fontFamily: "var(--font-instrument-serif), Georgia, serif" }}
        className="text-4xl md:text-5xl"
      >
        <span>{NAME.slice(0, count)}</span>
        <span
          aria-hidden="true"
          className="ml-0.5 inline-block h-[1em] w-[2px] translate-y-[0.12em] animate-pulse bg-current"
        />
      </p>
    </div>
  );
}

export default EditorialLoader;
