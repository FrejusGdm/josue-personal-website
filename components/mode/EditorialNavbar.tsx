"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import { Menu, X, Check } from "lucide-react";

const EMAIL = "josue@useecho.ai";

const DISPLAY_STYLE = { fontFamily: "var(--font-instrument-serif), Georgia, serif" };
const BODY_STYLE = { fontFamily: "var(--font-source-serif), Georgia, serif" };
const META_STYLE = { fontFamily: "var(--font-inter), sans-serif" };

export default function EditorialNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const { scrollY } = useScroll();

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email", err);
    }
  };

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  const navLinks = [
    { name: "Research", href: "/research" },
    { name: "Projects", href: "/projects" },
    { name: "Writing", href: "/writing" },
    { name: "Gallery", href: "/gallery" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/85 backdrop-blur-xl border-b border-[#1a1612]/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="group">
            <span
              className="italic text-xl tracking-tight text-[#1a1612]"
              style={DISPLAY_STYLE}
            >
              Josué Godeme
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-3 py-2 text-sm text-[#1a1612]/70 hover:text-[#5a3a1a] transition-colors"
                style={BODY_STYLE}
              >
                {link.name}
              </Link>
            ))}

            <button
              onClick={handleCopyEmail}
              className="ml-4 px-5 py-2 rounded-full text-xs uppercase tracking-[0.15em] border border-[#1a1612]/30 text-[#1a1612] hover:bg-[#1a1612] hover:text-white transition-colors min-w-[130px]"
              style={META_STYLE}
            >
              {copied ? (
                <span className="inline-flex items-center justify-center gap-1.5">
                  <Check className="w-3.5 h-3.5" />
                  Copied
                </span>
              ) : (
                "Get in Touch"
              )}
            </button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-[#1a1612] hover:text-[#5a3a1a] transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <motion.div
        initial={false}
        animate={{
          height: isMobileMenuOpen ? "auto" : 0,
          opacity: isMobileMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="md:hidden overflow-hidden bg-white/95 backdrop-blur-xl border-b border-[#1a1612]/10"
      >
        <div className="px-6 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-3 text-base text-[#1a1612]/80 hover:text-[#5a3a1a]"
              style={BODY_STYLE}
            >
              {link.name}
            </Link>
          ))}
          <button
            onClick={() => {
              handleCopyEmail();
              setIsMobileMenuOpen(false);
            }}
            className="w-full mt-2 px-4 py-3 rounded-full text-xs uppercase tracking-[0.15em] border border-[#1a1612]/30 text-[#1a1612]"
            style={META_STYLE}
          >
            {copied ? (
              <span className="inline-flex items-center justify-center gap-1.5">
                <Check className="w-4 h-4" />
                Copied
              </span>
            ) : (
              "Get in Touch"
            )}
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 bg-[#1a1612] text-white px-4 py-2 rounded-full text-sm shadow-lg flex items-center gap-2 z-50 pointer-events-none"
            style={META_STYLE}
          >
            <Check className="w-4 h-4 text-[#d4c296]" />
            Email copied
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
