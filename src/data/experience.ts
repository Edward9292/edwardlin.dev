export interface TimelineEntry {
  id: string;
  type: "work" | "education";
  title: string;
  organization: string;
  location?: string;
  startDate: string;
  endDate: string | "Present";
  description: string[];
  techStack?: string[];
  accentColor: "cyan" | "magenta";
}

export const timelineEntries: TimelineEntry[] = [
  {
    id: "das-swe",
    type: "work",
    title: "Software Engineer",
    organization: "DAS Inc — Developer of DAS Trader",
    location: "Markham, Ontario, Canada",
    startDate: "Nov 2023",
    endDate: "Present",
    description: [
      "Built a GPU-accelerated rendering engine from scratch (C++, OpenGL, GLSL), replacing a 20-year-old CPU system — 15× faster, 42% less CPU usage.",
      "Added multi-GPU + multi-threaded rendering for real-time visualization of multiple HFT charts simultaneously.",
      "Optimized stock data pipeline to 130K+ updates/sec with 26% lower latency.",
    ],
    techStack: ["C++", "OpenGL", "GLSL", "RenderDoc", "OpenMP"],
    accentColor: "cyan",
  },
  {
    id: "oracle-intern",
    type: "work",
    title: "Software Engineer Intern",
    organization: "Oracle Corporation",
    location: "Toronto, Ontario, Canada",
    startDate: "May 2021",
    endDate: "Apr 2022",
    description: [
      "Fixed 12+ high-priority bugs and increased unit test coverage by 15% with JUnit.",
      "Optimized filtering algorithm and data handling for a 23% speed increase on large datasets.",
    ],
    techStack: ["Java", "Spring Framework", "JUnit", "SQL"],
    accentColor: "cyan",
  },
  {
    id: "uoft-bsc",
    type: "education",
    title: "Honours Bachelor of Science — Computer Science",
    organization: "University of Toronto",
    location: "Toronto, Ontario, Canada",
    startDate: "Sept 2018",
    endDate: "Nov 2023",
    description: [
      "Majored in CS with a Statistics minor.",
      "Focus in Artificial Intelligence.",
      "Focus in Web and Internet Technologies.",
    ],
    accentColor: "magenta",
  },
];
