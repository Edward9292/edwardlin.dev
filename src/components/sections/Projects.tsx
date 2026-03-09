"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

type Filter = "all" | "web" | "ml" | "systems" | "other";

const filters: { label: string; value: Filter }[] = [
  { label: "All", value: "all" },
  { label: "Web", value: "web" },
  { label: "ML / AI", value: "ml" },
  { label: "Systems", value: "systems" },
];

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<Filter>("all");

  const filtered = projects.filter(
    (p) => activeFilter === "all" || p.category === activeFilter
  );

  return (
    <section id="projects" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionReveal>
          <span className="font-mono text-sm tracking-[0.3em] text-cyan/70">
            03. PROJECTS
          </span>
          <h2 className="mt-3 text-4xl font-bold text-white md:text-5xl">
            Things I&apos;ve{" "}
            <span className="text-magenta glow-magenta">Built</span>
          </h2>
        </SectionReveal>

        {/* Filter tabs */}
        <SectionReveal delay={0.1}>
          <div className="mt-10 flex flex-wrap gap-3">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setActiveFilter(f.value)}
                className={cn(
                  "rounded-lg border px-4 py-2 font-mono text-sm transition-all",
                  activeFilter === f.value
                    ? "border-cyan/60 bg-cyan/10 text-cyan shadow-neon-cyan"
                    : "border-white/10 bg-white/5 text-white/40 hover:border-white/30 hover:text-white/70"
                )}
                data-interactive
              >
                {f.label}
              </button>
            ))}
          </div>
        </SectionReveal>

        {/* Grid */}
        <motion.div
          layout
          className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard project={project} index={i} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
