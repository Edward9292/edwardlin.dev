import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0a0a0f",
        cyan: "#00f5ff",
        magenta: "#ff006e",
        surface: "#0f0f1a",
        border: "#1a1a2e",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      boxShadow: {
        "neon-cyan": "0 0 20px #00f5ff55, 0 0 60px #00f5ff22",
        "neon-magenta": "0 0 20px #ff006e55, 0 0 60px #ff006e22",
        "neon-cyan-strong": "0 0 30px #00f5ffaa, 0 0 80px #00f5ff44",
        "neon-magenta-strong": "0 0 30px #ff006eaa, 0 0 80px #ff006e44",
      },
      animation: {
        "glitch-1": "glitch-1 4s infinite",
        "glitch-2": "glitch-2 4s infinite",
        flicker: "flicker 3s infinite",
        scanline: "scanline 8s linear infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        "glitch-1": {
          "0%, 85%, 100%": { clipPath: "none", transform: "translate(0)" },
          "86%": { clipPath: "inset(20% 0 60% 0)", transform: "translate(-3px, 2px)", color: "#00f5ff" },
          "88%": { clipPath: "inset(60% 0 10% 0)", transform: "translate(3px, -2px)", color: "#00f5ff" },
          "90%": { clipPath: "none", transform: "translate(0)" },
          "92%": { clipPath: "inset(40% 0 40% 0)", transform: "translate(2px, 1px)", color: "#00f5ff" },
          "94%": { clipPath: "none", transform: "translate(0)" },
        },
        "glitch-2": {
          "0%, 85%, 100%": { clipPath: "none", transform: "translate(0)" },
          "87%": { clipPath: "inset(50% 0 30% 0)", transform: "translate(3px, -1px)", color: "#ff006e" },
          "89%": { clipPath: "inset(10% 0 70% 0)", transform: "translate(-3px, 2px)", color: "#ff006e" },
          "91%": { clipPath: "none", transform: "translate(0)" },
          "93%": { clipPath: "inset(70% 0 5% 0)", transform: "translate(-2px, -1px)", color: "#ff006e" },
          "95%": { clipPath: "none", transform: "translate(0)" },
        },
        flicker: {
          "0%, 100%": { opacity: "1" },
          "92%": { opacity: "1" },
          "93%": { opacity: "0.8" },
          "94%": { opacity: "1" },
          "96%": { opacity: "0.9" },
          "97%": { opacity: "1" },
        },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
