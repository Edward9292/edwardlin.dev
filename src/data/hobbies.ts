export interface Hobby {
  title: string;
  description: string;
  details?: { label: string; value: string }[];
  image?: string;
  accent: "cyan" | "magenta";
}

export const hobbies: Hobby[] = [
  {
    title: "FPV Drone",
    description: "I enjoy building drones. My flying skills are a work in progress.",
    image: "/hobbies/drone.jpg",
    accent: "cyan",
  },
  {
    title: "Amateur Radio",
    description: "Licensed amateur radio operator. Built a QMX HF transceiver from a kit.",
    details: [
      { label: "Call Sign", value: "VA3EWD" },
    ],
    image: "/hobbies/radio.jpg",
    accent: "magenta",
  },
  {
    title: "Coffee",
    description: "Powered by code and Colombian medium roast. I like my coffee like my work: strong, precise, and balanced with just a little milk.",
    image: "/hobbies/coffee.jpg",
    accent: "cyan",
  },
];
