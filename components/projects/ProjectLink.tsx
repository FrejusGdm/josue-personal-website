import Link from "next/link";
import { forwardRef, type ComponentProps } from "react";

interface ProjectLinkProps extends Omit<ComponentProps<"a">, "href"> {
  href: string;
  external?: boolean;
}

export const ProjectLink = forwardRef<HTMLAnchorElement, ProjectLinkProps>(
  function ProjectLink({ href, external, className, children, ...props }, ref) {
    const isExternal = external ?? href.startsWith("http");

    if (isExternal) {
      return (
        <a
          ref={ref}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
          {...props}
        >
          {children}
        </a>
      );
    }

    return (
      <Link ref={ref} href={href} className={className} {...props}>
        {children}
      </Link>
    );
  }
);
