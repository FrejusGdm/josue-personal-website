"use client";

import Link from "next/link";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "GitHub", icon: Github, href: "https://github.com/FrejusGdm" },
    { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/josue-godeme-58abb2196/" },
    { name: "Twitter", icon: Twitter, href: "https://x.com/josue_gdm" },
    { name: "Email", icon: Mail, href: "mailto:josue.godeme@example.com" },
  ];

  return (
    <footer className="border-t border-neutral-200 bg-white">
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
