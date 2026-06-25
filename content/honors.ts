export interface HonorItem {
  title: string;
  organization: string;
  logo: string;
  date: string;
  description: string;
  link?: string;
  previewText?: string;
  featured?: boolean;
}

export interface InvolvementBadge {
  name: string;
  logo: string;
}

export interface InvolvementItem {
  role: string;
  organization: string;
  logo: string;
  date: string;
  description: string;
  badges?: InvolvementBadge[];
  featured?: boolean;
}

export const honors: HonorItem[] = [
  {
    title: "Stamps Scholarship",
    organization: "Stamps Foundation",
    logo: "stamps.png",
    date: "June 2024 – Present",
    link: "https://www.stampsscholars.org/",
    previewText:
      "Merit-based award supporting exceptional students' leadership and research projects.",
    description:
      "Selected as 1 of 7 recipients from my class, out of 400,000+ national applicants. Supports my leadership and research projects, funding my work on the Adja-language corpus and AI-enabled instruction.",
    featured: true,
  },
  {
    title: "King Scholarship",
    organization: "King Philanthropies & Dartmouth",
    logo: "king.png",
    date: "Sept 2022 – Present",
    link: "https://students.dartmouth.edu/fgo/programs/king-scholars",
    previewText:
      "Prestigious full-ride scholarship with leadership development for students committed to alleviating poverty.",
    description:
      "Selected as 1 of 7 recipients from a class of 1,200+ students. Full-ride scholarship with leadership development for students committed to alleviating poverty.",
    featured: true,
  },
  {
    title: "Davis Peace Project",
    organization: "Project for Peace & Dickey Center",
    logo: "davis.png",
    date: "Jun 2024 – Aug 2024",
    link: "https://www.davisprojectsforpeace.org/",
    previewText: "$10,000 competitive grant awarded to students for community impact projects.",
    description:
      "Won a competitive $10,000 grant awarded to only 2 Dartmouth students. Organized language documentation workshops in Benin, creating the first-ever translation dataset for the Adja language.",
    featured: true,
  },
  {
    title: "Bosworth Award",
    organization: "Dickey Center",
    logo: "dickey.png",
    date: "Sept 2025 – Present",
    link: "https://dickey.dartmouth.edu/",
    previewText: "Awarded to 4 students for excellence in international affairs and leadership.",
    description:
      "One of 4 students recognized for excellence in international affairs and leadership. Awarded for building cross-regional collaboration to expand educational access and language preservation in Africa.",
    featured: true,
  },
  {
    title: "Baccalauréat Top Scorer",
    organization: "Ministry of Education, Benin",
    logo: "benin.png",
    date: "June 2021",
    link: "https://en.wikipedia.org/wiki/Benin",
    previewText: "National examination in the Republic of Benin.",
    description:
      "Ranked #1 among 80,000+ national candidates. Achieved the 2nd highest average score in the history of the Republic of Benin.",
    featured: true,
  },
];

export const involvement: InvolvementItem[] = [
  {
    role: "Co-President",
    organization: "NSBE Dartmouth Chapter",
    logo: "nsbe-2.png",
    date: "Sept 2024 – Present",
    description:
      "Leading chapter strategy and programming for 50+ engineering students. Previously Academic Excellence Chair.",
    featured: true,
  },
  {
    role: "Co-President",
    organization: "CoderDojo Dartmouth",
    logo: "coderdojo-2.png",
    date: "Feb 2024 – Present",
    description:
      "Teaching computer science to ~20 students from underserved high schools in the Upper Valley.",
    featured: true,
  },
  {
    role: "Executive Board",
    organization: "Dartmouth African Student Association",
    logo: "dartmouth.png",
    date: "Sept 2023 – Present",
    description:
      "Coordinating cultural programming, professional development events, and academic transition support.",
    featured: true,
  },
  {
    role: "Fellow / Member",
    organization: "ColorStack · CodePath · AI4ALL · NVIDIA Bridge",
    logo: "colorstack.png",
    date: "Ongoing",
    description: "Color Stack Member, CodePath Graduate, AI4ALL Student Fellow, Nvidia Bridge 2023.",
    badges: [
      { name: "ColorStack", logo: "colorstack.png" },
      { name: "CodePath", logo: "codepath.png" },
      { name: "AI4ALL", logo: "ai4all.png" },
      { name: "NVIDIA", logo: "nvidia.png" },
    ],
    featured: true,
  },
];

export function featuredHonors(): HonorItem[] {
  return honors.filter((h) => h.featured !== false);
}

export function featuredInvolvement(): InvolvementItem[] {
  return involvement.filter((i) => i.featured !== false);
}
