"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

interface SmartLinkProps {
  children: React.ReactNode;
  href: string;
  previewText?: string;
  previewImage?: string; // URL to image
  external?: boolean;
  logo?: string; // path to logo in /public/logos/
}

export default function SmartLink({ children, href, previewText, previewImage, external = false, logo }: SmartLinkProps) {
  const [isHovered, setIsHovered] = useState(false);

  const LinkComponent = external ? "a" : Link;
  const linkProps = external ? { href, target: "_blank", rel: "noopener noreferrer" } : { href };

  return (
    <span className="relative inline-block">
      <LinkComponent
        {...linkProps}
        className="font-medium text-foreground border-b border-neutral-300 hover:border-foreground transition-colors cursor-pointer inline-flex items-center gap-1"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {logo && (
          <Image
            src={`/logos/${logo}`}
            alt=""
            width={14}
            height={14}
            className="object-contain"
          />
        )}
        {children}
      </LinkComponent>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 10, x: "-50%" }}
            transition={{ duration: 0.2 }}
            className="absolute left-1/2 bottom-full mb-2 z-50 w-64 bg-neutral-900 text-white rounded-xl shadow-xl p-4 pointer-events-none"
          >
            {previewImage && (
              <div className="w-full h-32 bg-neutral-800 rounded-lg mb-3 overflow-hidden relative">
                <Image src={previewImage} alt="" fill className="object-cover" />
              </div>
            )}
            {previewText && (
              <div className="text-xs leading-relaxed text-neutral-300">
                {previewText}
              </div>
            )}
             {external && (
                <div className="mt-2 flex items-center gap-1 text-[10px] text-neutral-500 uppercase tracking-wider">
                    <ExternalLink className="w-3 h-3" />
                    External Link
                </div>
             )}
             <div className="absolute left-1/2 -bottom-2 -translate-x-1/2 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-neutral-900" />
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  );
}
