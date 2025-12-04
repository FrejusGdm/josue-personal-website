"use client";

import { useState } from "react";
import Link from "next/link";
import { Github, Linkedin, Twitter, Mail, Check, Copy } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [copied, setCopied] = useState(false);
  const email = "josue@useecho.ai"; // Assuming this is the email, updated from placeholder

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email", err);
    }
  };

  const socialLinks = [
    { name: "GitHub", icon: Github, href: "https://github.com/FrejusGdm" },
    { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/josue-godeme-58abb2196/" },
    { name: "Twitter", icon: Twitter, href: "https://x.com/josue_gdm" },
    // Email handled separately
  ];

  return (
    <footer className="border-t border-neutral-200 bg-white relative">
      {/* Copied Notification Toast */}
      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 20, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 10, x: "-50%" }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-neutral-900 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg flex items-center gap-2 z-50 pointer-events-none"
          >
            <Check className="w-4 h-4 text-green-400" />
            Email copied to clipboard
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-6xl mx-auto px-6 md:px-12 py-16">
        {/* Social Links */}
        <div className="flex gap-4 mb-12">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <Link
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-foreground transition-colors duration-200"
                aria-label={social.name}
              >
                <Icon className="w-5 h-5" strokeWidth={1.5} />
              </Link>
            );
          })}
          
          {/* Custom Email Button */}
          <button
            onClick={handleCopyEmail}
            className="text-neutral-400 hover:text-foreground transition-colors duration-200 relative group"
            aria-label="Copy Email"
          >
            <div className="relative">
              <Mail className={`w-5 h-5 transition-all duration-200 ${copied ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`} strokeWidth={1.5} />
              <Check className={`w-5 h-5 absolute inset-0 transition-all duration-200 text-green-600 ${copied ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`} strokeWidth={1.5} />
            </div>
          </button>
        </div>

        {/* Copyright & Meta */}
        <div className="space-y-2 text-sm text-neutral-500">
          <p>© {currentYear} Josue Godeme</p>
          <p className="text-xs text-neutral-400">
            Built with Next.js & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
