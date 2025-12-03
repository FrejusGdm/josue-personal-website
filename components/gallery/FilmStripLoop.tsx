"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import { GALLERY_ITEMS, GalleryItem } from "@/app/gallery/data";
import { X } from "lucide-react";

export default function FilmStripLoop() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="w-full h-[80vh] py-20 bg-neutral-950 overflow-hidden flex flex-col gap-8 relative rounded-xl">
      {/* Background Overlay when image is selected - scoped to this container */}
      <AnimatePresence>
        {selectedId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/90 z-40 backdrop-blur-sm"
            onClick={() => setSelectedId(null)}
          />
        )}
      </AnimatePresence>

      <LoopRow 
        items={GALLERY_ITEMS} 
        direction="left" 
        speed={40} 
        selectedId={selectedId} 
        onSelect={setSelectedId} 
        rowId="row1"
      />
      <LoopRow 
        items={[...GALLERY_ITEMS].reverse()} 
        direction="right" 
        speed={70} 
        selectedId={selectedId} 
        onSelect={setSelectedId} 
        rowId="row2"
      />
      <LoopRow 
        items={GALLERY_ITEMS} 
        direction="left" 
        speed={50} 
        selectedId={selectedId} 
        onSelect={setSelectedId} 
        rowId="row3"
      />
    </div>
  );
}

function LoopRow({
  items,
  direction,
  speed,
  selectedId,
  onSelect,
  rowId
}: {
  items: GalleryItem[];
  direction: "left" | "right";
  speed: number;
  selectedId: string | null;
  onSelect: (id: string | null) => void;
  rowId: string;
}) {
  const [isHovered, setIsHovered] = useState(false);
  
  const repeatedItems = [...items, ...items, ...items, ...items];
  const isPaused = selectedId !== null || isHovered;

  return (
    <div 
      className="flex overflow-hidden select-none relative z-10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="flex gap-4 flex-nowrap"
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          duration: speed * 2,
          ease: "linear",
          repeat: Infinity,
        }}
        style={{
           animationPlayState: isPaused ? 'paused' : 'running' 
        }}
      >
        {repeatedItems.map((item, idx) => {
          const uniqueId = `${rowId}-${item.id}-${idx}`;
          return (
            <FilmItem 
              key={uniqueId} 
              item={item} 
              uniqueId={uniqueId} 
              isSelected={selectedId === uniqueId}
              onSelect={onSelect}
            />
          );
        })}
      </motion.div>
    </div>
  );
}

function FilmItem({ 
  item, 
  uniqueId, 
  isSelected, 
  onSelect 
}: { 
  item: GalleryItem; 
  uniqueId: string;
  isSelected: boolean;
  onSelect: (id: string | null) => void;
}) {
  return (
    <>
      <motion.div
        layoutId={`image-${uniqueId}`}
        onClick={() => onSelect(uniqueId)}
        className={`relative aspect-[3/2] flex-shrink-0 cursor-pointer overflow-hidden group transition-all duration-500 ${
            isSelected ? "opacity-0" : "w-72" 
        }`}
        whileHover={{ scale: 0.98, filter: "brightness(1.1)" }}
      >
        <img
          src={item.src}
          alt={item.caption}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
        />
      </motion.div>

      <AnimatePresence>
        {isSelected && (
          <motion.div
            layoutId={`image-${uniqueId}`}
            className="absolute inset-0 z-50 flex items-center justify-center cursor-zoom-out"
            onClick={(e) => {
              e.stopPropagation(); // Prevent triggering parent click
              onSelect(null);
            }}
            initial={{ borderRadius: 12 }}
            animate={{ borderRadius: 0 }}
            exit={{ borderRadius: 12 }}
          >
            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={(e) => {
                e.stopPropagation();
                onSelect(null);
              }}
              className="absolute top-6 right-6 z-[60] p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors backdrop-blur-md"
            >
              <X className="w-6 h-6" />
            </motion.button>

            <motion.div className="relative w-full h-full p-8 md:p-12 flex items-center justify-center">
              <motion.img
                src={item.src}
                alt={item.caption}
                className="w-full h-full object-contain shadow-2xl"
              />
            </motion.div>
            
            {/* Overlay Text */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.2 }}
              className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 via-black/50 to-transparent text-white pointer-events-none"
            >
              <div className="max-w-4xl mx-auto">
                <p className="font-mono text-xs text-white/70 mb-2 uppercase tracking-widest">{item.date}</p>
                <h2 className="font-display text-3xl md:text-5xl mb-3 drop-shadow-lg">{item.location}</h2>
                <p className="font-sans text-base md:text-lg opacity-90 max-w-2xl drop-shadow-md">{item.caption}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
