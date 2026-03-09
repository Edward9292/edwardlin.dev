"use client";

import { motion } from "framer-motion";
import { TimelineEntry } from "@/data/experience";
import { cn } from "@/lib/utils";

interface TimelineItemProps {
  entry: TimelineEntry;
  index: number;
  side: "left" | "right";
}

export function TimelineItem({ entry, index, side }: TimelineItemProps) {
  const isLeft = side === "left";

  return (
    <div
      className={cn(
        "relative flex w-full items-start gap-8 md:w-1/2",
        isLeft ? "md:flex-row-reverse md:pr-12" : "md:pl-12"
      )}
    >
      {/* Connector dot */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ type: "spring", stiffness: 400, damping: 25, delay: index * 0.1 }}
        className={cn(
          "absolute top-6 hidden h-4 w-4 rounded-full border-2 bg-bg md:block",
          isLeft ? "-right-2 md:-right-2" : "-left-2 md:-left-2",
          entry.accentColor === "cyan"
            ? "border-cyan shadow-[0_0_12px_#00f5ff]"
            : "border-magenta shadow-[0_0_12px_#ff006e]"
        )}
      />

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? 60 : -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 }}
        className={cn(
          "flex-1 rounded-lg border bg-surface p-5",
          entry.accentColor === "cyan"
            ? "border-cyan/20 hover:border-cyan/40"
            : "border-magenta/20 hover:border-magenta/40",
          "transition-colors"
        )}
      >
        {/* Type badge */}
        <div className={cn("mb-3 inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 font-mono text-xs",
          entry.accentColor === "cyan" ? "bg-cyan/10 text-cyan" : "bg-magenta/10 text-magenta"
        )}>
          {entry.type === "work" ? "◆ Work" : "◇ Education"}
        </div>

        <h3 className="font-semibold text-white">{entry.title}</h3>
        <p className={cn("mt-0.5 font-mono text-sm",
          entry.accentColor === "cyan" ? "text-cyan/70" : "text-magenta/70"
        )}>
          {entry.organization}
          {entry.location && (
            <span className="text-white/30"> · {entry.location}</span>
          )}
        </p>
        <p className="mt-1 font-mono text-xs text-white/30">
          {entry.startDate} — {entry.endDate}
        </p>

        <ul className="mt-3 space-y-1.5">
          {entry.description.map((desc, i) => (
            <li key={i} className="text-sm leading-relaxed text-white/60">
              <span className={cn("mr-2", entry.accentColor === "cyan" ? "text-cyan/50" : "text-magenta/50")}>
                ›
              </span>
              {desc}
            </li>
          ))}
        </ul>

        {entry.techStack && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {entry.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-xs text-white/40"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
}
