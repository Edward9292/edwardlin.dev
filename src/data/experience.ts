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
      "Independently designed and built a GPU-accelerated rendering engine from scratch using C++, OpenGL, and GLSL, replacing a 20-year-old CPU-based system — achieving a 15× increase in rendering speed and 42% reduction in CPU utilization.",
      "Developed multi-GPU support and multi-threaded parallel rendering, enabling simultaneous real-time visualization of multiple high-frequency trading charts.",
      "Optimized real-time stock data processing pipeline, achieving 130K+ updates per second and reducing end-to-end latency by 26%.",
      "Leveraged RenderDoc for frame capture, shader debugging, and GPU performance analysis to identify and eliminate rendering bottlenecks.",
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
      "Contributed to backend development of Oracle Responsys, a large-scale cross-channel marketing automation platform.",
      "Developed and optimized Java microservices using Spring Framework, collaborating on 6+ new features for filtering millions of emails and SMS messages.",
      "Improved data filtering algorithm and restructured data handling, achieving a 23% speed increase for large dataset operations.",
      "Increased unit test coverage by 15% using JUnit and resolved 12+ high-priority bugs affecting filtering performance.",
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
      "Statistical Minor. Associate Programs: Focus in Artificial Intelligence, Focus in Web and Internet Technologies.",
      "AWS Certified Cloud Practitioner (issued July 2023, valid through July 2026).",
    ],
    accentColor: "magenta",
  },
];
