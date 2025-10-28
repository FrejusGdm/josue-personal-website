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
    <div className="relative min-h-screen w-full overflow-hidden bg-white flex items-center justify-center px-4 md:px-8">
      {/* Very subtle grid pattern in background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.015)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        {/* Main typing text - Enhanced typography */}
        <div className="mb-8">
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-display text-foreground tracking-[-0.02em] leading-[0.95]">
            {displayedText}
            {!mainComplete && (
              <motion.span
                animate={{ opacity: showCursor ? 1 : 0 }}
                className="inline-block w-[3px] h-[0.85em] bg-foreground ml-2 align-middle"
              />
            )}
          </h1>
        </div>

        {/* Name and tagline that appears after typing completes */}
        {mainComplete && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
            className="mt-20 pt-10 border-t border-neutral-200"
          >
            <p className="text-xl md:text-2xl font-display text-foreground tracking-tight">
              Josué Godeme
            </p>
            <p className="text-base md:text-lg font-sans text-neutral-500 mt-3 tracking-wide">
              Student · Builder ·  Researcher
            </p>
          </motion.div>
        )}
      </div>

      {/* Subtle corner decoration */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 right-10 text-xs text-neutral-300 font-sans tracking-[0.2em] uppercase"
      >
        Scroll
      </motion.div>
    </div>
  );
}
