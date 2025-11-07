"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const mainText = "I like to solve hard problems";

export default function ProblemSolverHero() {
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [mainComplete, setMainComplete] = useState(false);

  useEffect(() => {
    let currentIndex = 0;

    // Type main text
    const mainInterval = setInterval(() => {
      if (currentIndex <= mainText.length) {
        setDisplayedText(mainText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(mainInterval);
        setMainComplete(true);
        // Hide cursor after typing completes
        setTimeout(() => {
          setShowCursor(false);
        }, 500);
      }
    }, 80);

    // Cursor blink
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    return () => {
      clearInterval(mainInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  return (
    <div className="relative h-[45vh] min-h-[400px] w-full overflow-hidden bg-white flex items-center justify-center px-4 md:px-8">
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Main typing text - More compact */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display text-foreground tracking-[-0.02em] leading-[0.95]">
          {displayedText}
          {!mainComplete && (
            <motion.span
              animate={{ opacity: showCursor ? 1 : 0 }}
              className="inline-block w-[3px] h-[0.85em] bg-foreground ml-2 align-middle"
            />
          )}
        </h1>
      </div>

      {/* Simplified scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 right-8 text-xs text-neutral-400 font-sans tracking-wider"
      >
        ↓
      </motion.div>
    </div>
  );
}
