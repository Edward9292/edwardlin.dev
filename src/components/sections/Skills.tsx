"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { skillGroups } from "@/data/skills";
import { cn } from "@/lib/utils";

interface SkillBarProps {
  name: string;
  level: number;
  color: "cyan" | "magenta";
  delay: number;
}

function SkillBar({ name, level, color, delay }: SkillBarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex justify-between">
        <span className="font-mono text-sm text-white/70">{name}</span>
        <span className={cn("font-mono text-xs", color === "cyan" ? "text-cyan/60" : "text-magenta/60")}>
          {level}%
        </span>
      </div>
      <div className="h-1 rounded-full bg-white/5 overflow-hidden">
        <motion.div
          className={cn("h-full rounded-full", color === "cyan" ? "bg-cyan" : "bg-magenta")}
          initial={{ width: 0 }}
          animate={{ width: inView ? `${level}%` : 0 }}
          transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
          style={{
            boxShadow: color === "cyan"
              ? "0 0 8px #00f5ff88"
              : "0 0 8px #ff006e88",
          }}
        />
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionReveal>
          <span className="font-mono text-sm tracking-[0.3em] text-cyan/70">
            04. SKILLS
          </span>
          <h2 className="mt-3 text-4xl font-bold text-white md:text-5xl">
            My{" "}
            <span className="text-cyan glow-cyan">Toolkit</span>
          </h2>
        </SectionReveal>

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, gi) => (
            <SectionReveal key={group.category} delay={gi * 0.06}>
              <div className="rounded-lg border border-white/5 bg-surface p-6 space-y-4">
                {/* Category header */}
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={cn(
                      "h-2 w-2 rounded-full",
                      group.accentColor === "cyan" ? "bg-cyan shadow-[0_0_8px_#00f5ff]" : "bg-magenta shadow-[0_0_8px_#ff006e]"
                    )}
                  />
                  <h3 className={cn("font-mono text-sm font-semibold uppercase tracking-widest",
                    group.accentColor === "cyan" ? "text-cyan" : "text-magenta"
                  )}>
                    {group.category}
                  </h3>
                </div>

                {/* Skill bars */}
                <div className="space-y-4">
                  {group.skills.map((skill, si) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      color={group.accentColor}
                      delay={gi * 0.06 + si * 0.05}
                    />
                  ))}
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
