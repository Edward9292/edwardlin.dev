export type SkillCategory =
  | "Programming Languages"
  | "Full Stack Development"
  | "Tools & AI Agents"
  | "AI, ML & Data Science"
  | "Graphics Programming";
  // | "Infrastructure";

export interface SkillGroup {
  category: SkillCategory;
  accentColor: "cyan" | "magenta";
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Programming Languages",
    accentColor: "cyan",
    // Core syntax and logic foundations
    skills: ["C++", "C", "Java", "Python", "JavaScript", "SQL", "Shell Scripting"],
  },
  {
    category: "Full Stack Development",
    accentColor: "cyan",
    // Bridging frontend and backend capabilities
    skills: ["React.js", "React Native", "Node.js", "Spring Framework", "Django"],
  },
  {
    category: "Graphics Programming",
    accentColor: "magenta",
    // Specialized high-performance rendering
    skills: ["OpenGL", "GLSL", "RenderDoc"],
  },
  {
    category: "AI, ML & Data Science",
    accentColor: "magenta",
    // Machine learning frameworks and statistical computing
    skills: ["PyTorch", "TensorFlow", "OpenCV", "NumPy", "R"],
  },
  {
    category: "Tools & AI Agents",
    accentColor: "cyan",
    // Modern developer workflow and quality assurance
    skills: ["Git", "GitHub Copilot", "Claude Code", "JUnit"],
  },
]
