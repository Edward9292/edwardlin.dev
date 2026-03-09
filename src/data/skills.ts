export type SkillCategory =
  | "Languages"
  | "Frontend"
  | "Backend & Tools"
  | "ML / AI"
  | "Graphics & GPU"
  | "Infrastructure";

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
      { name: "C++",        level: 95, category: "Languages" },
      { name: "Java",       level: 88, category: "Languages" },
      { name: "Python",     level: 85, category: "Languages" },
      { name: "JavaScript", level: 78, category: "Languages" },
      { name: "C",          level: 80, category: "Languages" },
      { name: "R",          level: 60, category: "Languages" },
    ],
  },
  {
    category: "Graphics & GPU",
    accentColor: "cyan",
    skills: [
      { name: "OpenGL",  level: 93, category: "Graphics & GPU" },
      { name: "GLSL",    level: 90, category: "Graphics & GPU" },
      { name: "RenderDoc", level: 85, category: "Graphics & GPU" },
      { name: "OpenMP",  level: 75, category: "Graphics & GPU" },
    ],
  },
  {
    category: "Backend & Tools",
    accentColor: "magenta",
    skills: [
      { name: "Spring Framework", level: 82, category: "Backend & Tools" },
      { name: "Node.js",          level: 75, category: "Backend & Tools" },
      { name: "Django",           level: 65, category: "Backend & Tools" },
      { name: "SQL",              level: 78, category: "Backend & Tools" },
      { name: "Git",              level: 90, category: "Backend & Tools" },
      { name: "JUnit",            level: 78, category: "Backend & Tools" },
    ],
  },
  {
    category: "Frontend",
    accentColor: "cyan",
    skills: [
      { name: "React.js",     level: 78, category: "Frontend" },
      { name: "React Native", level: 75, category: "Frontend" },
      { name: "Next.js",      level: 65, category: "Frontend" },
    ],
  },
  {
    category: "ML / AI",
    accentColor: "magenta",
    skills: [
      { name: "PyTorch",     level: 85, category: "ML / AI" },
      { name: "OpenCV",      level: 82, category: "ML / AI" },
      { name: "TensorFlow",  level: 72, category: "ML / AI" },
      { name: "NumPy",       level: 80, category: "ML / AI" },
    ],
  },
  {
    category: "Infrastructure",
    accentColor: "magenta",
    skills: [
      { name: "AWS",    level: 70, category: "Infrastructure" },
      { name: "Docker", level: 68, category: "Infrastructure" },
      { name: "Linux",  level: 80, category: "Infrastructure" },
    ],
  },
];
