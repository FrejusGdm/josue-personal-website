"use client";

import Link from "next/link";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: "Research", href: "/research" },
    { name: "Projects", href: "/projects" },
    { name: "Writing", href: "/writing" },
    { name: "Gallery", href: "/gallery" },
  ];

  const socialLinks = [
    { name: "GitHub", icon: Github, href: "https://github.com/yourusername" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/in/yourusername" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com/yourusername" },
    { name: "Email", icon: Mail, href: "mailto:your.email@example.com" },
  ];

  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About Column */}
          <div className="md:col-span-2">
            <h3 className="font-display text-lg mb-3">Josue Godeme</h3>
            <p className="font-sans text-sm text-neutral-600 leading-relaxed max-w-md">
              Researcher, builder, and designer exploring the intersection of
              artificial intelligence, human-computer interaction, and creative expression.
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="font-display text-sm mb-3">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="font-sans text-sm text-neutral-600 hover:text-neutral-900 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Column */}
          <div>
            <h4 className="font-display text-sm mb-3">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 rounded-lg transition-all duration-200"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-sans text-sm text-neutral-600">
              © {currentYear} Josue Godeme. All rights reserved.
            </p>
            <p className="font-sans text-xs text-neutral-500">
              Built with Next.js, Framer Motion, Editorial New
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
