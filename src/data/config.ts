// ─── Personal Info ────────────────────────────────────────────────────────────
export const NAME = "Edward Lin";
export const NAME_DISPLAY = "EDWARD LIN"; // uppercase for hero glitch effect
export const INITIALS = "EL";
export const SCHOOL = "University of Toronto";
export const EMAIL = "edwardlin.dev@outlook.com";
export const RESUME_URL = "/resume.pdf";

// ─── Social Links ─────────────────────────────────────────────────────────────
export const SOCIALS = [
  { label: "GitHub",     href: "https://github.com/Edward9292",                   icon: "⌥" },
  { label: "LinkedIn",   href: "https://www.linkedin.com/in/edwardlin9292/",      icon: "◈" },
  { label: "Email",      href: `mailto:${EMAIL}`,                                 icon: "✉" },
];

// ─── Hero Section ─────────────────────────────────────────────────────────────
export const HERO_LABEL = "HELLO, WORLD — I'M";
export const HERO_DESCRIPTION =
  "I build GPU rendering engine, AI models, and full-stack products. CS graduate from the University of Toronto, currently shipping at DAS Inc.";
export const HERO_TYPING_STRINGS = [
  "Software Engineer",
  "Graphics Programmer",
  "AI & ML Engineer",
  "Systems Builder",
  "Full-Stack Developer",
];

// ─── About Section ────────────────────────────────────────────────────────────
export const ABOUT_BIO = [
  `I’m currently building a <cyan>GPU rendering engine</cyan> from scratch for stock trading software at <magenta>DAS Inc.</magenta> I enjoy tackling challenging problems and turning ideas into systems that actually work.`,
  `I have a BSc in Computer Science from the <cyan>University of Toronto</cyan>, where I explored AI and web technologies, and I also spent a year as an intern at <magenta>Oracle</magenta>, gaining hands-on experience building real systems.`,
  `I love technology and building things — whether it’s experimenting with new ideas, creating systems from scratch, or finding creative ways to make things work better.`
];

export const ABOUT_TERMINAL_TEXT =
  "Edward Lin — software engineer, systems builder, lifelong learner. Always shipping, always learning.";

export const ABOUT_HIGHLIGHTS = [
  { label: "2+ Yrs Experience",    icon: "◆", accent: "cyan" },
  { label: "AWS Certified",         icon: "☁", accent: "cyan" },
  { label: "University of Toronto", icon: "◇", accent: "magenta" },
  { label: "Open to Relocate",      icon: "◈", accent: "magenta" },
] as const;

// ─── Feature Flags ────────────────────────────────────────────────────────────
export const SHOW_HOBBIES = true;

// ─── SEO / Metadata ───────────────────────────────────────────────────────────
export const SEO = {
  title: `${NAME} — Software Engineer`,
  description: `Portfolio of ${NAME}, a software engineer specializing in GPU rendering, AI/ML, and full-stack development. CS graduate from ${SCHOOL}, currently building high-performance trading systems at DAS Inc.`,
  keywords: [NAME, "Software Engineer", "Graphics Programmer", "GPU Rendering", "OpenGL", "AI Engineer", SCHOOL, "Portfolio", "DAS Trader", "C++"],
  ogDescription: `${NAME} — GPU rendering engineer & full-stack developer. CS graduate from ${SCHOOL}.`,
};
