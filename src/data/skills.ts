export type SkillCategory =
  | "Languages"
  | "Frontend"
  | "Backend & Tools"
  | "ML / AI"
  | "Graphics & GPU"
  | "Infrastructure";

export interface SkillGroup {
  category: SkillCategory;
  accentColor: "cyan" | "magenta";
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    accentColor: "cyan",
    skills: ["C++", "Java", "Python", "JavaScript", "C", "R", "Shell Scripting"],
  },
  {
    category: "Graphics & GPU",
    accentColor: "cyan",
    skills: ["OpenGL", "GLSL", "RenderDoc", "OpenMP"],
  },
  {
    category: "Backend & Tools",
    accentColor: "magenta",
    skills: ["Spring Framework", "Node.js", "Django", "SQL", "Git", "JUnit"],
  },
  {
    category: "Frontend",
    accentColor: "cyan",
    skills: ["React.js", "React Native", "Next.js", "Tailwind CSS"],
  },
  {
    category: "ML / AI",
    accentColor: "magenta",
    skills: ["PyTorch", "TensorFlow", "OpenCV", "NumPy"],
  },
  {
    category: "Infrastructure",
    accentColor: "magenta",
    skills: ["AWS", "Docker", "Linux"],
  },
];
