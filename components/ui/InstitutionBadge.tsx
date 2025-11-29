"use client";

import Image from "next/image";
import Link from "next/link";

interface InstitutionBadgeProps {
  name: string;
  logo: string; // path relative to /public/logos/ e.g., "dartmouth.png"
  href?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  showName?: boolean;
}

const sizeMap = {
  sm: { width: 12, height: 12 },
  md: { width: 14, height: 14 },
  lg: { width: 18, height: 18 },
};

export default function InstitutionBadge({
  name,
  logo,
  href,
  className = "",
  size = "md",
  showName = true,
}: InstitutionBadgeProps) {
  const dimensions = sizeMap[size];

  const content = (
    <span className={`inline-flex items-center gap-1 ${className}`}>
      <Image
        src={`/logos/${logo}`}
        alt={`${name} logo`}
        width={dimensions.width}
        height={dimensions.height}
        className="object-contain"
      />
      {showName && <span>{name}</span>}
    </span>
  );

  if (href) {
    const isExternal = href.startsWith("http");

    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 transition-opacity"
        >
          {content}
        </a>
      );
    }

    return (
      <Link href={href} className="hover:opacity-80 transition-opacity">
        {content}
      </Link>
    );
  }

  return content;
}
