"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { TimelineItem } from "@/components/cards/TimelineItem";
import { timelineEntries } from "@/data/experience";

export function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const lineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="experience" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionReveal>
          <span className="font-mono text-sm tracking-[0.3em] text-cyan/70">
            04. EXPERIENCE
          </span>
          <h2 className="mt-3 text-4xl font-bold text-white md:text-5xl">
            My{" "}
            <span className="text-magenta glow-magenta">Journey</span>
          </h2>
        </SectionReveal>

        <div ref={containerRef} className="relative mt-16">
          {/* Center line */}
          <div className="absolute left-0 top-0 hidden h-full w-px bg-white/5 md:left-1/2 md:block">
            <motion.div
              style={{ scaleY: lineScaleY, originY: 0 }}
              className="h-full w-full bg-gradient-to-b from-cyan/60 via-cyan/30 to-magenta/40"
            />
          </div>

          {/* Mobile line */}
          <div className="absolute left-0 top-0 h-full w-px bg-white/10 md:hidden" />

          {/* Timeline items */}
          <div className="space-y-12 md:space-y-0">
            {timelineEntries.map((entry, i) => (
              <div
                key={entry.id}
                className={`flex md:mb-12 ${
                  i % 2 === 0 ? "md:justify-start" : "md:justify-end"
                }`}
              >
                <TimelineItem
                  entry={entry}
                  index={i}
                  side={i % 2 === 0 ? "right" : "left"}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
