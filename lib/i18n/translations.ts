export type Lang = "en" | "fr" | "zh";

// A string in all three site languages. Content modules use this so every
// language version lives next to the English source it translates.
export type Localized = { en: string; fr: string; zh: string };

// One rich-text segment: either plain text or a link. Components render
// these in order, which lets each language use its own sentence structure.
export interface RichLink {
  link: string;
  href: string;
  external?: boolean;
  previewText?: string;
  logo?: string;
}

export type RichSegment = string | RichLink;

export function isRichLink(segment: RichSegment): segment is RichLink {
  return typeof segment !== "string";
}

export const translations = {
  en: {
    nav: { research: "Research", projects: "Projects", writing: "Writing", gallery: "Gallery", cv: "CV", getInTouch: "Get in Touch", copied: "Copied!", emailCopied: "Email copied to clipboard" },
    hero: {
      name: "Josué Godeme",
      dateline: "Hanover, NH · Spring 2026",
      tagline: "A student at Dartmouth who loves to solve hard problems, explore the world, and capture moments through a lens.",
      roles: ["Builder", "Researcher", "Dartmouth '28", "Hanover, NH"],
      intro: "I'm interested in AI safety, voice AI, and edge AI for education, and in entrepreneurship—building startups and projects that solve real problems. This is a record of what I've been making, reading, and thinking about.",
    },
    bio: {
      origin: [
        "I grew up in ",
        {
          link: "Benin",
          href: "https://en.wikipedia.org/wiki/Benin",
          external: true,
          previewText: "A nation in West Africa, known as the birthplace of the Vodun religion and home to the Dahomey Amazons.",
          logo: "benin.png",
        },
        ", a country in West Africa. I ranked first in my national high school diploma (baccalauréat) with the 2nd highest score in the history of the exam in my country. This allowed me to attend ",
        {
          link: "Dartmouth College",
          href: "https://dartmouth.edu",
          external: true,
          previewText: "An Ivy League research university in Hanover, New Hampshire.",
          logo: "dartmouth.png",
        },
        ", where I now study computer science and minor in Mandarin Chinese. I speak four languages—English, French, Chinese, and Adja. At Dartmouth, I am a ",
        {
          link: "King Scholar",
          href: "https://students.dartmouth.edu/fgo/programs/king-scholars",
          external: true,
          previewText: "Prestigious full-ride scholarship with leadership development for students committed to alleviating poverty.",
          logo: "king.png",
        },
        " and a ",
        {
          link: "Stamps Scholar",
          href: "https://www.stampsscholars.org/",
          external: true,
          previewText: "Merit scholarship program supporting leadership, scholarship, and service.",
          logo: "stamps.png",
        },
        ".",
      ] as RichSegment[],
      work: "I believe that technology, when used well and adapted to local contexts, can be powerful in solving problems and improving lives. That's what I want to do—build products that help people solve problems and improve their lives.",
      nowLead: "I built",
      nowOrphi: "Orphi",
      nowOrphiPreview: "My speech-first language learning app — Orphi, live on the App Store.",
      nowRest: ", a speech-focused language learning app where you get an AI tutor to help you practice the language through voice. I've built a bunch of other projects during my time at Dartmouth. Currently, I'm interested in AI safety, voice AI, and edge AI for education — same kind of thing as Orphi, using technology to actually help people. I want to make AI understand the languages of the rest of the world—languages that my parents and millions of others across Asia and Africa speak. But I'm also deeply interested in running AI models on the edge (devices like the Raspberry Pi) and mobile (like the iPhone).",
      closing: "Why? Because it's amazing that you can package such a vast amount of knowledge in those small LLMs, and I think this is crucial for education, especially in under-resourced areas.",
      signature: "Josué.",
    },
    interests: { heading: "Interested in", items: ["AI safety", "edge AI", "voice AI"] },
    common: {
      backToHome: "Back to Home",
      backToProjects: "Projects",
      backToEssays: "Back to all essays",
      allEssays: "→ all essays",
      findMeOn: "Find me on",
      readOn: "↓ read on",
      builtWithLove: "Built with love by Josué.",
      viewAll: "View all",
      writtenInEnglish: "Essays are written in English.",
    },
    sections: {
      onJosue: "On Josué",
      selectedWork: "Selected Work",
      recentWriting: "Recent Writing",
    },
    researchUi: {
      volume: "Research — Vol. I",
      areasTitle: "Current Research Areas",
      pubsTitle: "Publications",
      wipTitle: "Works in Progress",
      wipEmpty: "To be added.",
      programsTitle: "Programs",
      talksTitle: "Talks & Presentations",
    },
    honorsUi: {
      honorsTitle: "Honors & Awards",
      involvementTitle: "Leadership & Involvement",
      pageTitle: "Honors & Involvement",
    },
    writingUi: {
      volume: "Writing — Vol. I",
      title: "Essays.",
      subtitle: "A running record of what I've been reading, making, and thinking about.",
      pageTitle: "Writing",
      pageSubtitle:
        "Thoughts on building technology for the next billion users, preserving culture, and the future of education.",
      empty: "Coming soon.",
    },
    projectsUi: {
      back: "← back",
      title: "Projects",
      subtitle: "A catalogue of things I've built, researched, and shipped — in reverse chronological order.",
      end: "End of Projects",
    },
    galleryUi: {
      title: "Gallery",
      subtitle: "A cinematic stream of moments. Click on any photo to view details.",
      placeholderNote: "Note: These are placeholder images. Personal photos coming soon!",
    },
    footer: {
      builtWith: "Built with Next.js & Framer Motion",
      copyEmail: "Copy Email",
    },
    notfound: {
      title: "This page does not exist.",
      body: "The address may be misspelled, or the page may have moved. The rest of the site is one click away.",
      home: "Home",
      projects: "Projects",
      writing: "Writing",
    },
  },
  fr: {
    nav: { research: "Recherche", projects: "Projets", writing: "Écrits", gallery: "Galerie", cv: "CV", getInTouch: "Contact", copied: "Copié !", emailCopied: "Email copié" },
    hero: {
      name: "Josué Godeme",
      dateline: "Hanover, NH · Printemps 2026",
      tagline: "Étudiant à Dartmouth passionné par les problèmes difficiles, l'exploration du monde et la photographie.",
      roles: ["Bâtisseur", "Chercheur", "Dartmouth '28", "Hanover, NH"],
      intro: "Je m'intéresse à la sûreté de l'IA, à la voix et à l'IA embarquée pour l'éducation, ainsi qu'à l'entrepreneuriat — créer des startups et des projets qui résolvent de vrais problèmes. Voici ce que je construis, lis et explore.",
    },
    bio: {
      origin: [
        "J'ai grandi au ",
        {
          link: "Bénin",
          href: "https://en.wikipedia.org/wiki/Benin",
          external: true,
          previewText: "Une nation d'Afrique de l'Ouest, berceau de la religion vodun et des Amazones du Dahomey.",
          logo: "benin.png",
        },
        ", un pays d'Afrique de l'Ouest. J'ai été premier au baccalauréat national avec la 2e meilleure moyenne de l'histoire de l'examen dans mon pays. Cela m'a permis d'intégrer ",
        {
          link: "Dartmouth College",
          href: "https://dartmouth.edu",
          external: true,
          previewText: "Une université de recherche de l'Ivy League à Hanover, New Hampshire.",
          logo: "dartmouth.png",
        },
        ", où j'étudie l'informatique avec une mineure en chinois mandarin. Je parle quatre langues — l'anglais, le français, le chinois et l'adja. À Dartmouth, je suis ",
        {
          link: "King Scholar",
          href: "https://students.dartmouth.edu/fgo/programs/king-scholars",
          external: true,
          previewText: "Bourse complète prestigieuse avec un programme de leadership pour les étudiants engagés contre la pauvreté.",
          logo: "king.png",
        },
        " et ",
        {
          link: "Stamps Scholar",
          href: "https://www.stampsscholars.org/",
          external: true,
          previewText: "Programme de bourses au mérite qui soutient le leadership, la recherche et le service.",
          logo: "stamps.png",
        },
        ".",
      ] as RichSegment[],
      work: "Je crois que la technologie, bien utilisée et adaptée aux contextes locaux, peut résoudre des problèmes et améliorer des vies. C'est ce que je veux faire — construire des produits qui aident les gens.",
      nowLead: "J'ai créé",
      nowOrphi: "Orphi",
      nowOrphiPreview: "Mon application d'apprentissage des langues centrée sur la voix — Orphi, sur l'App Store.",
      nowRest: ", une application d'apprentissage des langues centrée sur la voix où un tuteur IA vous aide à pratiquer à l'oral. J'ai construit de nombreux autres projets à Dartmouth. Aujourd'hui, je m'intéresse à la sûreté de l'IA, à la voix et à l'IA embarquée pour l'éducation — dans la même veine qu'Orphi, utiliser la technologie pour aider concrètement les gens. Je veux que l'IA comprenne les langues du reste du monde — celles que parlent mes parents et des millions de personnes en Asie et en Afrique. Je m'intéresse aussi à faire tourner des modèles sur des appareils embarqués (comme le Raspberry Pi) et mobiles (comme l'iPhone).",
      closing: "Pourquoi ? Parce qu'il est fascinant de pouvoir embarquer autant de connaissances dans ces petits LLM, et c'est crucial pour l'éducation, surtout dans les zones sous-équipées.",
      signature: "Josué.",
    },
    interests: { heading: "Intéressé par", items: ["sûreté de l'IA", "IA embarquée", "IA vocale"] },
    common: {
      backToHome: "Retour à l'accueil",
      backToProjects: "Projets",
      backToEssays: "Retour aux essais",
      allEssays: "→ tous les essais",
      findMeOn: "Retrouvez-moi sur",
      readOn: "↓ lire la suite",
      builtWithLove: "Fait avec amour par Josué.",
      viewAll: "Tout voir",
      writtenInEnglish: "Les essais sont rédigés en anglais.",
    },
    sections: {
      onJosue: "Sur Josué",
      selectedWork: "Travaux sélectionnés",
      recentWriting: "Écrits récents",
    },
    researchUi: {
      volume: "Recherche — Vol. I",
      areasTitle: "Domaines de recherche actuels",
      pubsTitle: "Publications",
      wipTitle: "Travaux en cours",
      wipEmpty: "À venir.",
      programsTitle: "Programmes",
      talksTitle: "Conférences et présentations",
    },
    honorsUi: {
      honorsTitle: "Distinctions",
      involvementTitle: "Leadership et engagement",
      pageTitle: "Distinctions et engagement",
    },
    writingUi: {
      volume: "Écrits — Vol. I",
      title: "Essais.",
      subtitle: "Un carnet de ce que je lis, construis et explore.",
      pageTitle: "Écrits",
      pageSubtitle:
        "Réflexions sur la technologie pour le prochain milliard d'utilisateurs, la préservation des cultures et l'avenir de l'éducation.",
      empty: "Bientôt.",
    },
    projectsUi: {
      back: "← retour",
      title: "Projets",
      subtitle: "Un catalogue de ce que j'ai construit, exploré et mis sur le marché — par ordre antéchronologique.",
      end: "Fin des projets",
    },
    galleryUi: {
      title: "Galerie",
      subtitle: "Un flux cinématographique de moments. Cliquez sur une photo pour voir les détails.",
      placeholderNote: "Note : images temporaires. Mes photos personnelles arrivent bientôt !",
    },
    footer: {
      builtWith: "Conçu avec Next.js et Framer Motion",
      copyEmail: "Copier l'email",
    },
    notfound: {
      title: "Cette page n'existe pas.",
      body: "L'adresse est peut-être mal orthographiée, ou la page a été déplacée. Le reste du site est à un clic.",
      home: "Accueil",
      projects: "Projets",
      writing: "Écrits",
    },
  },
  zh: {
    nav: { research: "研究", projects: "项目", writing: "写作", gallery: "画廊", cv: "简历", getInTouch: "联系我", copied: "已复制！", emailCopied: "邮箱已复制" },
    hero: {
      name: "Josué Godeme",
      dateline: "新罕布什尔州 汉诺威 · 2026年春",
      tagline: "达特茅斯的学生，热爱解决难题、探索世界，并用镜头记录瞬间。",
      roles: ["创造者", "研究者", "达特茅斯 '28", "汉诺威，新罕布什尔"],
      intro: "我关注 AI 安全、语音 AI 和面向教育的端侧 AI，也热衷于创业——打造解决真实问题的初创与项目。这里记录我在做、在读、在思考的内容。",
    },
    bio: {
      origin: [
        "我在",
        {
          link: "贝宁",
          href: "https://en.wikipedia.org/wiki/Benin",
          external: true,
          previewText: "西非国家，以伏都教发源地和达荷美女战士闻名。",
          logo: "benin.png",
        },
        "，一个西非国家长大。我在全国高中毕业会考（baccalauréat）中位列第一，成绩为我国历史第二高分。这让我得以进入",
        {
          link: "达特茅斯学院",
          href: "https://dartmouth.edu",
          external: true,
          previewText: "位于新罕布什尔州汉诺威的常春藤研究型大学。",
          logo: "dartmouth.png",
        },
        "，主修计算机科学，辅修中文。我会说四种语言——英语、法语、中文和阿贾语。在达特茅斯，我是",
        {
          link: "King Scholar",
          href: "https://students.dartmouth.edu/fgo/programs/king-scholars",
          external: true,
          previewText: "享有盛誉的全额奖学金，培养致力于消除贫困的学生的领导力。",
          logo: "king.png",
        },
        "和",
        {
          link: "Stamps Scholar",
          href: "https://www.stampsscholars.org/",
          external: true,
          previewText: "支持领导力、学术与服务的优秀奖学金项目。",
          logo: "stamps.png",
        },
        "。",
      ] as RichSegment[],
      work: "我相信技术在被恰当使用并与本地情境结合时，能够有力地解决问题并改善生活。这正是我想做的——打造帮助人们解决问题的产品。",
      nowLead: "我打造了",
      nowOrphi: "Orphi",
      nowOrphiPreview: "我的语音优先语言学习应用——Orphi，已上架 App Store。",
      nowRest: "，一款以语音为核心的语言学习应用，你可以通过语音与 AI 导师练习对话。我在达特茅斯还做了许多其他项目。目前，我关注 AI 安全、语音 AI 和面向教育的端侧 AI——与 Orphi 一脉相承，用技术真正帮助人。我希望 AI 能理解世界上其他地方的语言——我父母以及亚非数百万人所说的语言。同时，我也非常关注在端侧设备（如树莓派）和手机（如 iPhone）上运行 AI 模型。",
      closing: "为什么？因为能把如此浩瀚的知识装进这些小小的 LLM 中令人惊叹，而这对教育至关重要，尤其是在资源匮乏的地区。",
      signature: "Josué。",
    },
    interests: { heading: "关注方向", items: ["AI 安全", "端侧 AI", "语音 AI"] },
    common: {
      backToHome: "返回首页",
      backToProjects: "项目",
      backToEssays: "返回全部文章",
      allEssays: "→ 全部文章",
      findMeOn: "在这些平台找到我",
      readOn: "↓ 继续阅读",
      builtWithLove: "由 Josué 用心打造。",
      viewAll: "查看全部",
      writtenInEnglish: "文章以英文写就。",
    },
    sections: {
      onJosue: "关于 Josué",
      selectedWork: "精选作品",
      recentWriting: "近期写作",
    },
    researchUi: {
      volume: "研究 · 第一卷",
      areasTitle: "当前研究方向",
      pubsTitle: "发表",
      wipTitle: "进行中的工作",
      wipEmpty: "即将补充。",
      programsTitle: "项目",
      talksTitle: "演讲与分享",
    },
    honorsUi: {
      honorsTitle: "荣誉与奖项",
      involvementTitle: "领导力与参与",
      pageTitle: "荣誉与参与",
    },
    writingUi: {
      volume: "写作 · 第一卷",
      title: "文章。",
      subtitle: "记录我在读、在做、在思考的内容。",
      pageTitle: "写作",
      pageSubtitle: "关于为下一个十亿用户打造技术、保护文化与教育未来的思考。",
      empty: "即将上线。",
    },
    projectsUi: {
      back: "← 返回",
      title: "项目",
      subtitle: "我打造、研究与交付作品的目录——按时间倒序。",
      end: "项目到底啦",
    },
    galleryUi: {
      title: "画廊",
      subtitle: "如电影般流淌的瞬间。点击任意照片查看详情。",
      placeholderNote: "注：此处为占位图片，个人照片即将上线！",
    },
    footer: {
      builtWith: "基于 Next.js 与 Framer Motion 构建",
      copyEmail: "复制邮箱",
    },
    notfound: {
      title: "此页面不存在。",
      body: "地址可能拼写有误，或页面已经移动。网站的其他内容近在咫尺。",
      home: "首页",
      projects: "项目",
      writing: "写作",
    },
  },
} as const;
