import type { Localized } from "@/lib/i18n/translations";

export interface HonorItem {
  title: string;
  organization: string;
  logo: string;
  date: Localized;
  description: Localized;
  link?: string;
  previewText?: Localized;
  featured?: boolean;
}

export interface InvolvementBadge {
  name: string;
  logo: string;
}

export interface InvolvementItem {
  role: Localized;
  organization: string;
  logo: string;
  date: Localized;
  description: Localized;
  badges?: InvolvementBadge[];
  featured?: boolean;
}

export const honors: HonorItem[] = [
  {
    title: "Stamps Scholarship",
    organization: "Stamps Foundation",
    logo: "stamps.png",
    date: {
      en: "June 2024 – Present",
      fr: "Juin 2024 – Présent",
      zh: "2024年6月 – 至今",
    },
    link: "https://www.stampsscholars.org/",
    previewText: {
      en: "Merit-based award supporting exceptional students' leadership and research projects.",
      fr: "Bourse au mérite soutenant le leadership et les projets de recherche d'étudiants exceptionnels.",
      zh: "择优奖学金，支持杰出学生的领导力与研究项目。",
    },
    description: {
      en: "Selected as 1 of 7 recipients from my class, out of 400,000+ national applicants. Supports my leadership and research projects, funding my work on the Adja-language corpus and AI-enabled instruction.",
      fr: "Sélectionné parmi 7 lauréats de ma promotion, sur plus de 400 000 candidats nationaux. Soutient mes projets de leadership et de recherche, finançant mon travail sur le corpus adja et l'enseignement assisté par l'IA.",
      zh: "从 400,000 多名全国申请者中脱颖而出，成为所在年级 7 位获奖者之一。支持我的领导力与研究项目，资助我在阿贾语语料与 AI 辅助教学上的工作。",
    },
    featured: true,
  },
  {
    title: "King Scholarship",
    organization: "King Philanthropies & Dartmouth",
    logo: "king.png",
    date: {
      en: "Sept 2022 – Present",
      fr: "Sept. 2022 – Présent",
      zh: "2022年9月 – 至今",
    },
    link: "https://students.dartmouth.edu/fgo/programs/king-scholars",
    previewText: {
      en: "Prestigious full-ride scholarship with leadership development for students committed to alleviating poverty.",
      fr: "Prestigieuse bourse complète avec développement du leadership pour les étudiants engagés contre la pauvreté.",
      zh: "享有盛誉的全额奖学金，培养致力于消除贫困的学生的领导力。",
    },
    description: {
      en: "Selected as 1 of 7 recipients from a class of 1,200+ students. Full-ride scholarship with leadership development for students committed to alleviating poverty.",
      fr: "Sélectionné parmi 7 lauréats d'une promotion de plus de 1 200 étudiants. Bourse complète avec un programme de leadership pour les étudiants engagés à réduire la pauvreté.",
      zh: "从 1,200 多名同级学生中选出的 7 位获奖者之一。全额奖学金，附带领导力培养，面向致力于消除贫困的学生。",
    },
    featured: true,
  },
  {
    title: "Davis Peace Project",
    organization: "Project for Peace & Dickey Center",
    logo: "davis.png",
    date: {
      en: "Jun 2024 – Aug 2024",
      fr: "Juin 2024 – Août 2024",
      zh: "2024年6月 – 2024年8月",
    },
    link: "https://www.davisprojectsforpeace.org/",
    previewText: {
      en: "$10,000 competitive grant awarded to students for community impact projects.",
      fr: "Bourse compétitive de 10 000 $ pour des projets étudiants à impact communautaire.",
      zh: "10,000 美元竞争性资助，支持学生的社区影响力项目。",
    },
    description: {
      en: "Won a competitive $10,000 grant awarded to only 2 Dartmouth students. Organized language documentation workshops in Benin, creating the first-ever translation dataset for the Adja language.",
      fr: "Une bourse compétitive de 10 000 $ attribuée à seulement 2 étudiants de Dartmouth. J'ai organisé des ateliers de documentation linguistique au Bénin, créant le premier jeu de données de traduction pour la langue adja.",
      zh: "竞争激烈的 10,000 美元资助，全校仅 2 名达特茅斯学生获得。我在贝宁组织语言记录工作坊，创建了阿贾语第一个翻译数据集。",
    },
    featured: true,
  },
  {
    title: "Bosworth Award",
    organization: "Dickey Center",
    logo: "dickey.png",
    date: {
      en: "Sept 2025 – Present",
      fr: "Sept. 2025 – Présent",
      zh: "2025年9月 – 至今",
    },
    link: "https://dickey.dartmouth.edu/",
    previewText: {
      en: "Awarded to 4 students for excellence in international affairs and leadership.",
      fr: "Décerné à 4 étudiants pour l'excellence en affaires internationales et en leadership.",
      zh: "授予 4 名在国际事务与领导力方面表现卓越的学生。",
    },
    description: {
      en: "One of 4 students recognized for excellence in international affairs and leadership. Awarded for building cross-regional collaboration to expand educational access and language preservation in Africa.",
      fr: "L'un des 4 étudiants distingués pour l'excellence en affaires internationales et en leadership. Récompensé pour avoir bâti des collaborations interrégionales afin d'élargir l'accès à l'éducation et la préservation des langues en Afrique.",
      zh: "4 位因国际事务与领导力卓越而获奖的学生之一。因搭建跨区域合作、扩大非洲教育可及性与语言保护而获奖。",
    },
    featured: true,
  },
  {
    title: "Baccalauréat Top Scorer",
    organization: "Ministry of Education, Benin",
    logo: "benin.png",
    date: { en: "June 2021", fr: "Juin 2021", zh: "2021年6月" },
    link: "https://en.wikipedia.org/wiki/Benin",
    previewText: {
      en: "National examination in the Republic of Benin.",
      fr: "Examen national en République du Bénin.",
      zh: "贝宁共和国全国考试。",
    },
    description: {
      en: "Ranked #1 among 80,000+ national candidates. Achieved the 2nd highest average score in the history of the Republic of Benin.",
      fr: "Classé n°1 parmi plus de 80 000 candidats nationaux. 2e meilleure moyenne de l'histoire de la République du Bénin.",
      zh: "在 80,000 多名全国考生中位列第一。贝宁共和国历史第二高分。",
    },
    featured: true,
  },
];

export const involvement: InvolvementItem[] = [
  {
    role: { en: "Co-President", fr: "Co-président", zh: "联合主席" },
    organization: "NSBE Dartmouth Chapter",
    logo: "nsbe-2.png",
    date: {
      en: "Sept 2024 – Present",
      fr: "Sept. 2024 – Présent",
      zh: "2024年9月 – 至今",
    },
    description: {
      en: "Leading chapter strategy and programming for 50+ engineering students. Previously Academic Excellence Chair.",
      fr: "Direction de la stratégie et des programmes du chapitre pour 50+ étudiants ingénieurs. Précédemment responsable de l'excellence académique.",
      zh: "领导分会战略与项目，服务 50 多名工程学生。此前担任学术卓越负责人。",
    },
    featured: true,
  },
  {
    role: { en: "Co-President", fr: "Co-président", zh: "联合主席" },
    organization: "CoderDojo Dartmouth",
    logo: "coderdojo-2.png",
    date: {
      en: "Feb 2024 – Present",
      fr: "Févr. 2024 – Présent",
      zh: "2024年2月 – 至今",
    },
    description: {
      en: "Teaching computer science to ~20 students from underserved high schools in the Upper Valley.",
      fr: "J'enseigne l'informatique à une vingtaine d'élèves de lycées défavorisés de l'Upper Valley.",
      zh: "为上谷地区欠发达高中约 20 名学生教授计算机科学。",
    },
    featured: true,
  },
  {
    role: {
      en: "Executive Board",
      fr: "Bureau exécutif",
      zh: "执行委员会",
    },
    organization: "Dartmouth African Student Association",
    logo: "dartmouth.png",
    date: {
      en: "Sept 2023 – Present",
      fr: "Sept. 2023 – Présent",
      zh: "2023年9月 – 至今",
    },
    description: {
      en: "Coordinating cultural programming, professional development events, and academic transition support.",
      fr: "Coordination des programmes culturels, des événements de développement professionnel et du soutien à la transition académique.",
      zh: "协调文化项目、职业发展活动与学业过渡支持。",
    },
    featured: true,
  },
  {
    role: { en: "Fellow / Member", fr: "Fellow / Membre", zh: "会士 / 成员" },
    organization: "ColorStack · CodePath · AI4ALL · NVIDIA Bridge",
    logo: "colorstack.png",
    date: { en: "Ongoing", fr: "En cours", zh: "持续中" },
    description: {
      en: "Color Stack Member, CodePath Graduate, AI4ALL Student Fellow, Nvidia Bridge 2023.",
      fr: "Membre ColorStack, diplômé CodePath, AI4ALL Student Fellow, Nvidia Bridge 2023.",
      zh: "ColorStack 成员、CodePath 毕业生、AI4ALL 学生会士、Nvidia Bridge 2023。",
    },
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
