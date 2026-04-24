export const hero = {
  name: "Josué Godeme",
  dateline: "Hanover, NH · Spring 2026",
  tagline:
    "A student at Dartmouth who loves to solve hard problems, explore the world, and capture moments through a lens.",
  roles: ["Builder", "Researcher", "Dartmouth '28", "Hanover, NH"],
};

export const bio = {
  paragraphs: [
    {
      label: "Origin",
      text: "I grew up in Benin, a country in West Africa. I ranked first in my national high school diploma (baccalauréat) with the 2nd highest score in the history of the exam in my country. This allowed me to attend Dartmouth College, where I now study computer science and minor in Mandarin Chinese. I speak four languages—English, French, Chinese, and Adja. At Dartmouth, I am a King Scholar and a Stamps Scholar.",
    },
    {
      label: "Work",
      text: "I believe that technology, when used well and adapted to local contexts, can be powerful in solving problems and improving lives. That's what I want to do—build products that help people solve problems and improve their lives.",
    },
    {
      label: "Now",
      text: "I built Echo, a speech-focused language learning app where you get an AI tutor to help you practice the language through voice. I've built a bunch of other projects during my time at Dartmouth. Currently, I'm obsessed with AI in education and languages. I want to make AI understand the languages of the rest of the world—languages that my parents and millions of others across Asia and Africa speak. But I'm also deeply interested in running AI models on the edge (devices like the Raspberry Pi) and mobile (like the iPhone).",
    },
  ],
  signature: "Josué.",
};

export interface HonorItem {
  title: string;
  organization: string;
  logo: string; // filename under /public/logos/
  date: string;
  description: string;
  link?: string;
}

export const honors: HonorItem[] = [
  {
    title: "Stamps Scholarship",
    organization: "Stamps Foundation",
    logo: "stamps.png",
    date: "June 2024 – Present",
    link: "https://www.stampsscholars.org/",
    description: "Selected as 1 of 7 recipients from my class, out of 400,000+ national applicants. Supports my leadership and research projects, funding my work on the Adja-language corpus and AI-enabled instruction.",
  },
  {
    title: "King Scholarship",
    organization: "King Philanthropies & Dartmouth",
    logo: "king.png",
    date: "Sept 2022 – Present",
    link: "https://students.dartmouth.edu/fgo/programs/king-scholars",
    description: "Selected as 1 of 7 recipients from a class of 1,200+ students. Full-ride scholarship with leadership development for students committed to alleviating poverty.",
  },
  {
    title: "Davis Peace Project",
    organization: "Project for Peace & Dickey Center",
    logo: "davis.png",
    date: "Jun 2024 – Aug 2024",
    link: "https://www.davisprojectsforpeace.org/",
    description: "Won a competitive $10,000 grant awarded to only 2 Dartmouth students. Organized language documentation workshops in Benin, creating the first-ever translation dataset for the Adja language.",
  },
  {
    title: "Bosworth Award",
    organization: "Dickey Center",
    logo: "dickey.png",
    date: "Sept 2025 – Present",
    description: "One of 4 students recognized for excellence in international affairs and leadership. Awarded for building cross-regional collaboration to expand educational access and language preservation in Africa.",
  },
  {
    title: "Baccalauréat Top Scorer",
    organization: "Ministry of Education, Benin",
    logo: "benin.png",
    date: "June 2021",
    description: "Ranked #1 among 80,000+ national candidates. Achieved the 2nd highest average score in the history of the Republic of Benin.",
  },
];

export interface InvolvementItem {
  role: string;
  organization: string;
  logo: string;
  date: string;
  description: string;
}

export const involvement: InvolvementItem[] = [
  {
    role: "Co-President",
    organization: "NSBE Dartmouth Chapter",
    logo: "nsbe-2.png",
    date: "Sept 2024 – Present",
    description: "Leading chapter strategy and programming for 50+ engineering students. Previously Academic Excellence Chair.",
  },
  {
    role: "Co-President",
    organization: "CoderDojo Dartmouth",
    logo: "coderdojo-2.png",
    date: "Feb 2024 – Present",
    description: "Teaching computer science to ~20 students from underserved high schools in the Upper Valley.",
  },
  {
    role: "Executive Board",
    organization: "Dartmouth African Student Association",
    logo: "dartmouth.png",
    date: "Sept 2023 – Present",
    description: "Coordinating cultural programming, professional development events, and academic transition support.",
  },
  {
    role: "Fellow / Member",
    organization: "ColorStack · CodePath · AI4ALL · NVIDIA Bridge",
    logo: "colorstack.png",
    date: "Ongoing",
    description: "Color Stack Member, CodePath Graduate, AI4ALL Student Fellow, Nvidia Bridge 2023.",
  },
];
