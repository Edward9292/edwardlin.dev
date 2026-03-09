export interface Hobby {
  title: string;
  description: string;
  details?: { label: string; value: string }[];
  image?: string;
  accent: "cyan" | "magenta";
}

export const hobbies: Hobby[] = [
  {
    title: "FPV Freestyle",
    description: "Built and tuned a 5\" freestyle quad from scratch — soldering, PID tuning, and flying.",
    image: "/hobbies/drone.jpg",
    accent: "cyan",
  },
  {
    title: "Amateur Radio",
    description: "Licensed amateur radio operator. Built a homebrew HF transceiver kit from scratch.",
    details: [
      { label: "Call Sign",     value: "YOUR_CALLSIGN" },
      { label: "License Class", value: "YOUR_CLASS" },
    ],
    image: "/hobbies/radio-station.jpg",
    accent: "magenta",
  },
  {
    title: "Mechanical Keyboards",
    description: "Obsessive about switches, layouts, and custom builds. Currently on a 65% with tactile switches.",
    accent: "cyan",
  },
];
