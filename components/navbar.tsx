"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

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
          ? "bg-white/80 backdrop-blur-xl border-b border-neutral-200"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Name */}
          <Link href="/" className="group">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="font-display text-xl tracking-tight"
            >
              Josue Godeme
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-sm font-sans text-neutral-700 hover:text-neutral-900 transition-colors rounded-lg hover:bg-neutral-100"
              >
                {link.name}
              </Link>
            ))}

            {/* CTA Button */}
            <Link
              href="mailto:your.email@example.com"
              className="ml-4 px-5 py-2 text-sm font-sans bg-primary text-primary-foreground rounded-lg hover:bg-neutral-800 transition-all duration-200 hover:scale-105"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-neutral-700 hover:text-neutral-900 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          height: isMobileMenuOpen ? "auto" : 0,
          opacity: isMobileMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="md:hidden overflow-hidden bg-white/95 backdrop-blur-xl border-b border-neutral-200"
      >
        <div className="px-6 py-4 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-3 text-base font-sans text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 rounded-lg transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="mailto:your.email@example.com"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block px-4 py-3 text-center text-base font-sans bg-primary text-primary-foreground rounded-lg hover:bg-neutral-800 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </motion.div>
    </motion.nav>
  );
}
