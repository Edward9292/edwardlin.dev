"use client";

import { motion } from "framer-motion";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { skillGroups } from "@/data/skills";
import { cn } from "@/lib/utils";

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

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, gi) => (
            <SectionReveal key={group.category} delay={gi * 0.06}>
              <div className="rounded-lg border border-white/5 bg-surface p-6">
                {/* Category header */}
                <div className="mb-5 flex items-center gap-3">
                  <div
                    className={cn(
                      "h-2 w-2 rounded-full",
                      group.accentColor === "cyan"
                        ? "bg-cyan shadow-[0_0_8px_#00f5ff]"
                        : "bg-magenta shadow-[0_0_8px_#ff006e]"
                    )}
                  />
                  <h3
                    className={cn(
                      "font-mono text-sm font-semibold uppercase tracking-widest",
                      group.accentColor === "cyan" ? "text-cyan" : "text-magenta"
                    )}
                  >
                    {group.category}
                  </h3>
                </div>

                {/* Skill tags */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, si) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.2, delay: gi * 0.06 + si * 0.04 }}
                      className={cn(
                        "rounded-md border px-3 py-1 font-mono text-xs transition-colors",
                        group.accentColor === "cyan"
                          ? "border-cyan/20 bg-cyan/5 text-white/70 hover:border-cyan/50 hover:text-cyan"
                          : "border-magenta/20 bg-magenta/5 text-white/70 hover:border-magenta/50 hover:text-magenta"
                      )}
                    >
                      {skill}
                    </motion.span>
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
