"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const greetings = [
  { text: "Hello", lang: "English" },
  { text: "你好", lang: "中文" },
  { text: "Bonjour", lang: "Français" },
  { text: "Agbegbe", lang: "Adja" },
];

export default function LanguageSwitcherHero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % greetings.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-white">
      {/* Animated background blobs - subtle grayscale */}
      <motion.div
        className="absolute top-20 right-20 w-96 h-96 rounded-full bg-black opacity-[0.02] blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-gray-900 opacity-[0.03] blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -40, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 md:px-8">
        {/* Rotating Greeting */}
        <div className="mb-8 h-32 flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-center"
            >
              <h2 className="text-7xl md:text-9xl font-light text-black tracking-tight">
                {greetings[currentIndex].text}
              </h2>
              <p className="text-sm md:text-base font-sans text-gray-500 mt-2 tracking-wider">
                {greetings[currentIndex].lang}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-6xl md:text-8xl lg:text-9xl font-display text-black mb-6 text-center tracking-tight"
        >
          Josué Godeme
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-lg md:text-2xl lg:text-3xl font-sans text-gray-700 max-w-4xl text-center leading-relaxed px-4"
        >
          Bridging languages, cultures, and technology to create a more
          connected world
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-12"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-6 h-10 border-2 border-gray-300 rounded-full flex items-start justify-center p-2"
          >
            <motion.div className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
