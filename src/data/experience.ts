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
    id: "swe-intern-2025",
    type: "work",
    title: "Software Engineer Intern",
    organization: "Acme Corp",
    location: "San Francisco, CA",
    startDate: "May 2025",
    endDate: "Aug 2025",
    description: [
      "Built a real-time data pipeline processing 50M+ events/day using Kafka and Go, reducing latency by 40%.",
      "Designed and shipped a developer-facing SDK with TypeScript that reduced integration time from days to hours.",
      "Collaborated with senior engineers to migrate legacy REST APIs to gRPC, improving throughput by 3×.",
    ],
    techStack: ["Go", "Kafka", "TypeScript", "gRPC", "PostgreSQL"],
    accentColor: "cyan",
  },
  {
    id: "swe-intern-2024",
    type: "work",
    title: "Software Engineer Intern",
    organization: "TechStartup Inc.",
    location: "New York, NY",
    startDate: "Jun 2024",
    endDate: "Aug 2024",
    description: [
      "Developed full-stack features for a B2B SaaS platform using Next.js and Node.js, serving 10K+ users.",
      "Implemented end-to-end ML pipeline for churn prediction with 87% precision, integrated into product dashboard.",
      "Led migration from class components to React hooks, reducing bundle size by 18%.",
    ],
    techStack: ["Next.js", "Node.js", "Python", "scikit-learn", "AWS"],
    accentColor: "cyan",
  },
  {
    id: "research-2023",
    type: "work",
    title: "Undergraduate Research Assistant",
    organization: "Systems Lab, University",
    location: "Remote",
    startDate: "Sep 2023",
    endDate: "May 2024",
    description: [
      "Researched distributed systems fault tolerance under Prof. Smith; implemented and benchmarked 3 consensus algorithms.",
      "Co-authored paper submitted to OSDI on efficient leader election in geo-distributed clusters.",
      "Built simulation framework in Rust for testing network partition scenarios.",
    ],
    techStack: ["Rust", "Go", "Python", "LaTeX"],
    accentColor: "cyan",
  },
  {
    id: "bs-cs",
    type: "education",
    title: "B.S. Computer Science",
    organization: "University of California",
    location: "Berkeley, CA",
    startDate: "Aug 2022",
    endDate: "May 2026",
    description: [
      "GPA: 3.9/4.0 — Dean's List every semester.",
      "Relevant coursework: Distributed Systems, Machine Learning, Computer Architecture, Compilers, Algorithms.",
      "TA for CS 61B (Data Structures) — held weekly office hours for 400+ students.",
    ],
    accentColor: "magenta",
  },
  {
    id: "hackathon",
    type: "work",
    title: "Hackathon Lead — TreeHacks",
    organization: "Stanford University",
    location: "Stanford, CA",
    startDate: "Feb 2024",
    endDate: "Feb 2024",
    description: [
      "Led a team of 4 to build an AI-powered accessibility tool; won Best Use of AI prize from 800+ participants.",
      "Built real-time sign language translation pipeline using MediaPipe and a custom LSTM model.",
    ],
    techStack: ["Python", "MediaPipe", "PyTorch", "React", "WebRTC"],
    accentColor: "cyan",
  },
];
