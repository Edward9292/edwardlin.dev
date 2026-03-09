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
    githubUrl: "https://github.com/edwardlin/edwardlin.dev",
    featured: true,
    year: 2025,
    accentColor: "cyan",
  },
  {
    id: "ml-classifier",
    title: "Neural Image Classifier",
    description:
      "A convolutional neural network trained on custom dataset achieving 94% accuracy. Deployed with a FastAPI backend and React frontend for real-time inference.",
    techStack: ["Python", "PyTorch", "FastAPI", "React", "Docker"],
    category: "ml",
    githubUrl: "https://github.com/edwardlin/neural-classifier",
    featured: true,
    year: 2024,
    accentColor: "magenta",
  },
  {
    id: "realtime-collab",
    title: "Realtime Collaboration Tool",
    description:
      "A Google Docs-inspired collaborative editor using CRDTs for conflict-free concurrent edits. Supports rich text, cursors, and 50+ simultaneous users.",
    techStack: ["TypeScript", "WebSockets", "CRDT", "Node.js", "PostgreSQL"],
    category: "web",
    githubUrl: "https://github.com/edwardlin/collab-editor",
    featured: true,
    year: 2024,
    accentColor: "cyan",
  },
  {
    id: "distributed-kv",
    title: "Distributed Key-Value Store",
    description:
      "A fault-tolerant distributed KV store implementing Raft consensus. Supports linearizable reads/writes with automatic leader election and log replication.",
    techStack: ["Go", "Raft", "gRPC", "Protocol Buffers"],
    category: "systems",
    githubUrl: "https://github.com/edwardlin/raft-kv",
    featured: true,
    year: 2023,
    accentColor: "magenta",
  },
  {
    id: "devflow",
    title: "DevFlow CLI",
    description:
      "A developer productivity CLI that automates Git workflows, PR creation, and code review assignments. Used daily by 200+ developers at a previous internship.",
    techStack: ["Rust", "GitHub API", "TOML", "CLI"],
    category: "systems",
    githubUrl: "https://github.com/edwardlin/devflow",
    featured: false,
    year: 2023,
    accentColor: "cyan",
  },
  {
    id: "price-predictor",
    title: "Stock Price Predictor",
    description:
      "LSTM-based time series model for stock price forecasting. Incorporates sentiment analysis from financial news and achieves competitive RMSE on test sets.",
    techStack: ["Python", "TensorFlow", "Pandas", "NLTK", "Plotly"],
    category: "ml",
    githubUrl: "https://github.com/edwardlin/stock-lstm",
    featured: false,
    year: 2022,
    accentColor: "magenta",
  },
];
