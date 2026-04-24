"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { projects } from "@/app/projects/data";

export default function ProjectsCurrent() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [visibleIndex, setVisibleIndex] = useState(0);
  const cardRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let bestIndex = -1;
        let bestRatio = 0;
        for (const entry of entries) {
          if (entry.isIntersecting && entry.intersectionRatio > bestRatio) {
            const index = cardRefs.current.indexOf(entry.target as HTMLAnchorElement);
            if (index !== -1) {
              bestIndex = index;
              bestRatio = entry.intersectionRatio;
            }
          }
        }
        if (bestIndex !== -1) setVisibleIndex(bestIndex);
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    for (const ref of cardRefs.current) {
      if (ref) observer.observe(ref);
    }

    return () => observer.disconnect();
  }, []);

  const activeProject = hoveredIndex !== null ? projects[hoveredIndex] : projects[visibleIndex];

  return (
    <div className="min-h-screen bg-white selection:bg-neutral-100">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-between items-center mb-20">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-900 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>

          <header className="mb-16 md:mb-24 text-center md:text-left">
            <h1 className="font-display text-5xl md:text-7xl mb-6 tracking-tight">Projects</h1>
            <p className="font-sans text-xl text-neutral-500 max-w-2xl">
              A collection of products, experiments, and research exploring the intersection of AI and human experience.
            </p>
          </header>

          <div className="flex flex-col lg:flex-row gap-16 xl:gap-24 relative">
            <div className="w-full lg:w-1/2 flex flex-col border-t border-neutral-200">
              {projects.map((project, index) => (
                <Link
                  key={project.title}
                  href={project.href}
                  ref={(el) => { cardRefs.current[index] = el; }}
                  className="group block py-8 md:py-12 border-b border-neutral-200 hover:bg-neutral-50 transition-colors -mx-6 px-6 lg:mx-0 lg:px-4 rounded-xl"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-4">
                    <h2 className="font-display text-3xl md:text-4xl text-neutral-900 flex items-center gap-3">
                      {project.title}
                      <ArrowUpRight className="w-6 h-6 opacity-0 -translate-y-2 translate-x-2 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
                    </h2>
                    <span className="font-mono text-sm text-neutral-400 shrink-0">
                      {project.year}
                    </span>
                  </div>
                  <p className="font-sans text-sm font-medium text-neutral-500 mb-2 uppercase tracking-wider">
                    {project.tagline}
                  </p>
                  <p className="font-sans text-lg text-neutral-600 leading-relaxed mb-4 max-w-xl">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="text-xs font-mono px-3 py-1 bg-white border border-neutral-200 rounded-full text-neutral-500">
                        {tag}
                      </span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>

            <div className="hidden lg:block w-full lg:w-1/2 relative">
              <div className="sticky top-32 w-full aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-100 border border-neutral-200 shadow-xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeProject.title}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="absolute inset-0 w-full h-full flex items-center justify-center bg-neutral-50"
                  >
                    {"video" in activeProject && activeProject.video ? (
                      <video
                        src={activeProject.video as string}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                        poster={activeProject.image}
                      />
                    ) : activeProject.image && (
                      <Image
                        src={activeProject.image}
                        alt={activeProject.title}
                        fill
                        className={activeProject.isLogo ? 'object-contain p-16' : 'object-cover'}
                      />
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          <div className="mt-32 pt-12 border-t border-neutral-100 text-center text-neutral-400 text-sm font-mono">
              End of Projects
          </div>
        </motion.div>
      </div>
    </div>
  );
}
