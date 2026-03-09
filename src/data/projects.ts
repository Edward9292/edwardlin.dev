export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  category: "web" | "ml" | "systems" | "other";
  imageUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  year: number;
  accentColor?: "cyan" | "magenta";
}

export const projects: Project[] = [
  {
    id: "portfolio",
    title: "edwardlin.dev",
    description:
      "This portfolio — a dark, cyberpunk-aesthetic site built with Next.js 14, Framer Motion, and a custom canvas particle system with mouse-reactive animations.",
    techStack: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS", "Lenis"],
    category: "web",
    liveUrl: "https://edwardlin.dev",
    githubUrl: "https://github.com/Edward9292/edwardlin.dev",
    featured: true,
    year: 2025,
    accentColor: "cyan",
  },
  {
    id: "ontario-parks",
    title: "Ontario Parks Audio Tour",
    description:
      "Collaborated with Ontario Parks to design and develop a mobile audio-tour app. Implemented user authentication, cross-device data sync, and Google Maps API integration with real-time location tracking for context-aware audio content delivery.",
    techStack: ["React Native", "Node.js", "Google Maps API"],
    category: "web",
    githubUrl: "https://github.com/Edward9292/ontario-parks-app",
    featured: true,
    year: 2023,
    accentColor: "cyan",
  },
  {
    id: "cartoongan",
    title: "CartoonGAN",
    description:
      "Developed a Generative Adversarial Network to transform real images into cartoon-style visuals. Fine-tuned the GAN architecture and hyperparameters, reducing training time by 18% while maintaining high visual quality.",
    techStack: ["Python", "PyTorch", "OpenCV", "NumPy"],
    category: "ml",
    githubUrl: "https://github.com/Edward9292/CartoonGAN",
    featured: true,
    year: 2023,
    accentColor: "magenta",
  },
];
