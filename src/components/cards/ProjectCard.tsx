"use client";

import { motion } from "framer-motion";
import { useTilt } from "@/hooks/useTilt";
import { NeonBorder } from "@/components/ui/NeonBorder";
import { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const { ref, rotateX, rotateY, glareX, glareY, onMouseMove, onMouseLeave } =
    useTilt(8);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      style={{ perspective: 800 }}
    >
      <motion.div
        ref={ref as React.RefObject<HTMLDivElement>}
        style={{ rotateX, rotateY }}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className="relative h-full"
        onClick={() => {
          const url = project.githubUrl ?? project.liveUrl;
          if (url) window.open(url, "_blank", "noopener,noreferrer");
        }}
        data-interactive
      >
        <NeonBorder
          color={project.accentColor ?? "cyan"}
          className="relative h-full overflow-hidden p-6"
        >
          {/* Glare overlay */}
          <div
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100"
            style={{
              background: `radial-gradient(circle at ${glareX}% ${glareY}%, ${
                project.accentColor === "magenta"
                  ? "rgba(255,0,110,0.12)"
                  : "rgba(0,245,255,0.12)"
              }, transparent 60%)`,
            }}
          />

          {/* Year + category badge */}
          <div className="mb-4 flex items-center justify-between">
            <span className="font-mono text-xs text-white/30">{project.year}</span>
            <span
              className={cn(
                "rounded-full px-2 py-0.5 font-mono text-xs",
                project.category === "ml"
                  ? "bg-magenta/10 text-magenta"
                  : "bg-cyan/10 text-cyan"
              )}
            >
              {project.category}
            </span>
          </div>

          {/* Title */}
          <h3
            className={cn(
              "mb-3 text-lg font-semibold",
              project.accentColor === "magenta" ? "text-magenta" : "text-cyan"
            )}
          >
            {project.title}
          </h3>

          {/* Description */}
          <p className="mb-5 text-sm leading-relaxed text-white/60">
            {project.description}
          </p>

          {/* Tech stack */}
          <div className="mb-5 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-xs text-white/50"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-4">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-white/40 transition-colors hover:text-white"
                data-interactive
              >
                GitHub ↗
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "font-mono text-xs transition-colors",
                  project.accentColor === "magenta"
                    ? "text-magenta/60 hover:text-magenta"
                    : "text-cyan/60 hover:text-cyan"
                )}
                data-interactive
              >
                Live ↗
              </a>
            )}
          </div>
        </NeonBorder>
      </motion.div>
    </motion.div>
  );
}
