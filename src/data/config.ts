// ─── Personal Info ────────────────────────────────────────────────────────────
export const NAME = "Edward Lin";
export const NAME_DISPLAY = "EDWARD LIN"; // uppercase for hero glitch effect
export const INITIALS = "EL";
export const SCHOOL = "University of Toronto";
export const EMAIL = "edwardlin9292@gmail.com";
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
  "I build GPU-accelerated systems, intelligent applications, and full-stack products. CS grad from the University of Toronto, currently shipping at DAS Inc.";
export const HERO_TYPING_STRINGS = [
  "Software Engineer",
  "Graphics Programmer",
  "ML Enthusiast",
  "Systems Builder",
  "Full-Stack Developer",
];

// ─── About Section ────────────────────────────────────────────────────────────
export const ABOUT_BIO = [
  `I'm a software engineer based in Toronto with a BSc in Computer Science from the <cyan>University of Toronto</cyan>. I specialize in <magenta>graphics programming</magenta> and high-performance systems — currently building a GPU-accelerated rendering engine at DAS Inc.`,
  `My experience spans low-level C++/OpenGL rendering, Java backend services at Oracle, and ML projects with PyTorch. I'm drawn to problems where raw performance matters — whether that's real-time HFT visualization, data pipeline throughput, or neural network training.`,
  `When I'm not at a keyboard, you'll find me flying FPV freestyle quads, tinkering with amateur radio, or obsessing over mechanical keyboards.`,
];

export const ABOUT_TERMINAL_TEXT =
  "Edward Lin — graphics engineer, systems builder, lifelong learner. Always shipping, always learning.";

export const ABOUT_STATS = [
  { label: "Projects Built",  value: 30,   suffix: "+" },
  { label: "Lines of Code",   value: 500,  suffix: "K+" },
  { label: "Cups of Coffee",  value: 1200, suffix: "+" },
  { label: "Open Source PRs", value: 47,   suffix: "" },
];

// ─── Feature Flags ────────────────────────────────────────────────────────────
export const SHOW_HOBBIES = true;

// ─── SEO / Metadata ───────────────────────────────────────────────────────────
export const SEO = {
  title: `${NAME} — Software Engineer`,
  description: `Portfolio of ${NAME}, a software engineer and CS student at ${SCHOOL}. Building performant systems, beautiful interfaces, and intelligent applications.`,
  keywords: [NAME, "Software Engineer", SCHOOL, "Portfolio", "Next.js", "TypeScript"],
  ogDescription: `Portfolio of ${NAME}, software engineer & CS student`,
};
