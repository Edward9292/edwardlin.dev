export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  category: "web" | "mobile" | "ml" | "other";
  imageUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  year: number;
  accentColor?: "cyan" | "magenta";
}

export const projects: Project[] = [
  // {
  //   id: "portfolio",
  //   title: "edwardlin.dev",
  //   description:
  //     "This portfolio — a dark, cyberpunk-aesthetic site built with Next.js 14, Framer Motion, and a custom canvas particle system with mouse-reactive animations.",
  //   techStack: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS", "Lenis"],
  //   category: "web",
  //   liveUrl: "https://edwardlin.dev",
  //   githubUrl: "https://github.com/Edward9292/edwardlin.dev",
  //   featured: true,
  //   year: 2025,
  //   accentColor: "cyan",
  // },
  {
    id: "ontario-parks",
    title: "Ontario Parks Audio Tour",
    description:
      "Mobile audio-tour app for Ontario Parks with authentication, and Google Maps location-triggered audio.",
    techStack: ["JavaScript", "React Native", "Node.js", "Expo"],
    category: "mobile",
    githubUrl: "https://github.com/Edward9292/ontario-parks-app",
    featured: true,
    year: 2023,
    accentColor: "cyan",
  },
  {
    id: "cartoongan",
    title: "CartoonGAN",
    description:
      "Built a GAN-based machine learning model that turns real images into cartoon-style visuals.",
    techStack: ["Python", "PyTorch", "OpenCV", "NumPy"],
    category: "ml",
    githubUrl: "https://github.com/Edward9292/CartoonGAN",
    featured: true,
    year: 2023,
    accentColor: "magenta",
  },
];
