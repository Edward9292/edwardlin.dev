"use client";

import { cn } from "@/lib/utils";

interface GlitchTextProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "span" | "p";
}

export function GlitchText({ text, className, as: Tag = "h1" }: GlitchTextProps) {
  return (
    <Tag
      className={cn("relative inline-block", className)}
      aria-label={text}
    >
      {/* Base layer */}
      <span className="relative">{text}</span>

      {/* Glitch clone 1 - cyan */}
      <span
        className="pointer-events-none absolute inset-0 animate-[glitch-1_4s_infinite] text-cyan opacity-80"
        aria-hidden="true"
      >
        {text}
      </span>

      {/* Glitch clone 2 - magenta */}
      <span
        className="pointer-events-none absolute inset-0 animate-[glitch-2_4s_infinite] text-magenta opacity-80"
        aria-hidden="true"
      >
        {text}
      </span>
    </Tag>
  );
}
