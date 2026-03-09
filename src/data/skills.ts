export type SkillCategory =
  | "Languages"
  | "Frontend"
  | "Backend"
  | "ML / AI"
  | "Infrastructure"
  | "Tools";

export interface Skill {
  name: string;
  level: number; // 1-100
  category: SkillCategory;
}

export interface SkillGroup {
  category: SkillCategory;
  accentColor: "cyan" | "magenta";
  skills: Skill[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    accentColor: "cyan",
    skills: [
      { name: "TypeScript", level: 95, category: "Languages" },
      { name: "Python", level: 92, category: "Languages" },
      { name: "Go", level: 80, category: "Languages" },
      { name: "Rust", level: 70, category: "Languages" },
      { name: "Java", level: 75, category: "Languages" },
      { name: "C++", level: 72, category: "Languages" },
    ],
  },
  {
    category: "Frontend",
    accentColor: "cyan",
    skills: [
      { name: "React", level: 95, category: "Frontend" },
      { name: "Next.js", level: 92, category: "Frontend" },
      { name: "Framer Motion", level: 85, category: "Frontend" },
      { name: "Tailwind CSS", level: 90, category: "Frontend" },
      { name: "Three.js", level: 65, category: "Frontend" },
      { name: "WebGL", level: 55, category: "Frontend" },
    ],
  },
  {
    category: "Backend",
    accentColor: "magenta",
    skills: [
      { name: "Node.js", level: 90, category: "Backend" },
      { name: "FastAPI", level: 88, category: "Backend" },
      { name: "PostgreSQL", level: 85, category: "Backend" },
      { name: "Redis", level: 80, category: "Backend" },
      { name: "gRPC", level: 75, category: "Backend" },
      { name: "GraphQL", level: 78, category: "Backend" },
    ],
  },
  {
    category: "ML / AI",
    accentColor: "magenta",
    skills: [
      { name: "PyTorch", level: 88, category: "ML / AI" },
      { name: "TensorFlow", level: 80, category: "ML / AI" },
      { name: "scikit-learn", level: 85, category: "ML / AI" },
      { name: "Transformers", level: 78, category: "ML / AI" },
      { name: "CUDA", level: 60, category: "ML / AI" },
      { name: "MLflow", level: 70, category: "ML / AI" },
    ],
  },
  {
    category: "Infrastructure",
    accentColor: "cyan",
    skills: [
      { name: "Docker", level: 88, category: "Infrastructure" },
      { name: "Kubernetes", level: 75, category: "Infrastructure" },
      { name: "AWS", level: 82, category: "Infrastructure" },
      { name: "Terraform", level: 70, category: "Infrastructure" },
      { name: "GitHub Actions", level: 85, category: "Infrastructure" },
      { name: "Vercel", level: 90, category: "Infrastructure" },
    ],
  },
  {
    category: "Tools",
    accentColor: "magenta",
    skills: [
      { name: "Git", level: 95, category: "Tools" },
      { name: "Vim / Neovim", level: 80, category: "Tools" },
      { name: "Figma", level: 72, category: "Tools" },
      { name: "Linear", level: 85, category: "Tools" },
      { name: "Datadog", level: 75, category: "Tools" },
      { name: "Postman", level: 88, category: "Tools" },
    ],
  },
];
