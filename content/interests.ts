export interface Interest {
  label: string;
  href: string;
  external?: boolean;
}

export const interests = {
  heading: "Interested in",
  items: [
    { label: "AI safety", href: "/research", external: false },
    { label: "edge AI", href: "/research", external: false },
    { label: "voice AI", href: "/projects/orphi", external: false },
  ],
} as const satisfies { heading: string; items: readonly Interest[] };
