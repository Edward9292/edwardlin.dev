// ─── Personal Info ────────────────────────────────────────────────────────────
export const NAME = "Edward Lin";
export const NAME_DISPLAY = "EDWARD LIN"; // uppercase for hero glitch effect
export const INITIALS = "EL";
export const SCHOOL = "UC Berkeley";
export const EMAIL = "edward@edwardlin.dev";
export const RESUME_URL = "/resume.pdf";

// ─── Social Links ─────────────────────────────────────────────────────────────
export const SOCIALS = [
  { label: "GitHub",     href: "https://github.com/edwardlin",          icon: "⌥" },
  { label: "LinkedIn",   href: "https://linkedin.com/in/edwardlin",     icon: "◈" },
  { label: "Twitter / X", href: "https://twitter.com/edwardlin",        icon: "◇" },
  { label: "Email",      href: `mailto:${EMAIL}`,                       icon: "✉" },
];

// ─── Hero Section ─────────────────────────────────────────────────────────────
export const HERO_LABEL = "HELLO, WORLD — I'M";
export const HERO_DESCRIPTION =
  "I build performant systems, beautiful interfaces, and intelligent applications. Currently studying CS at UC Berkeley.";
export const HERO_TYPING_STRINGS = [
  "Software Engineer",
  "Systems Builder",
  "ML Enthusiast",
  "Open Source Contributor",
  "Full-Stack Developer",
];

// ─── About Section ────────────────────────────────────────────────────────────
export const ABOUT_BIO = [
  `I'm a software engineer and CS student at UC Berkeley, passionate about building systems that scale and interfaces that delight. I thrive at the intersection of <cyan>performance</cyan> and <magenta>creativity</magenta>.`,
  `My interests span distributed systems, machine learning infrastructure, and frontend engineering. I'm drawn to hard problems — whether that's consensus algorithms, real-time collaboration, or pixel-perfect animations.`,
  `When I'm not at a keyboard, you'll find me rock climbing, reading sci-fi, or obsessing over mechanical keyboards.`,
];

export const ABOUT_TERMINAL_TEXT =
  "Edward Lin — software engineer, systems thinker, lifelong learner. Always shipping, always learning.";

export const ABOUT_STATS = [
  { label: "Projects Built",  value: 30,   suffix: "+" },
  { label: "Lines of Code",   value: 500,  suffix: "K+" },
  { label: "Cups of Coffee",  value: 1200, suffix: "+" },
  { label: "Open Source PRs", value: 47,   suffix: "" },
];

// ─── SEO / Metadata ───────────────────────────────────────────────────────────
export const SEO = {
  title: `${NAME} — Software Engineer`,
  description: `Portfolio of ${NAME}, a software engineer and CS student at ${SCHOOL}. Building performant systems, beautiful interfaces, and intelligent applications.`,
  keywords: [NAME, "Software Engineer", SCHOOL, "Portfolio", "Next.js", "TypeScript"],
  ogDescription: `Portfolio of ${NAME}, software engineer & CS student`,
};
