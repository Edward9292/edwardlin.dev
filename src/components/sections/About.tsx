"use client";

import { SectionReveal } from "@/components/ui/SectionReveal";
import { NeonBorder } from "@/components/ui/NeonBorder";
import { ABOUT_HIGHLIGHTS, ABOUT_TERMINAL_TEXT, RESUME_URL, NAME } from "@/data/config";
import { cn } from "@/lib/utils";

export function About() {
  return (
    <section id="about" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionReveal>
          <span className="font-mono text-sm tracking-[0.3em] text-cyan/70">
            01. ABOUT ME
          </span>
          <h2 className="mt-3 text-4xl font-bold text-white md:text-5xl">
            Building the{" "}
            <span className="text-cyan glow-cyan">Future</span>
          </h2>
        </SectionReveal>

        <div className="mt-16 grid gap-12 md:grid-cols-2">
          {/* Bio */}
          <SectionReveal delay={0.1}>
            <div className="space-y-5 text-white/70 leading-relaxed">
              <p>
                I&apos;m a software engineer and CS student at UC Berkeley, passionate about
                building systems that scale and interfaces that delight. I thrive at the
                intersection of <span className="text-cyan">performance</span> and{" "}
                <span className="text-magenta">creativity</span>.
              </p>
              <p>
                My interests span distributed systems, machine learning infrastructure,
                and frontend engineering. I&apos;m drawn to hard problems — whether that&apos;s
                consensus algorithms, real-time collaboration, or pixel-perfect animations.
              </p>
              <p>
                When I&apos;m not at a keyboard, you&apos;ll find me rock climbing, reading sci-fi,
                or obsessing over mechanical keyboards.
              </p>
              <div className="pt-2">
                <a
                  href={RESUME_URL}
                  className="inline-flex items-center gap-2 font-mono text-sm text-cyan hover:text-cyan/80 transition-colors"
                  data-interactive
                >
                  Download Resume
                  <span className="text-xs">↓</span>
                </a>
              </div>
            </div>
          </SectionReveal>

          {/* Highlights */}
          <SectionReveal delay={0.2}>
            <div className="flex flex-wrap gap-3">
              {ABOUT_HIGHLIGHTS.map((h) => (
                <div
                  key={h.label}
                  className={cn(
                    "flex items-center gap-2 rounded-lg border px-4 py-3 font-mono text-sm",
                    h.accent === "cyan"
                      ? "border-cyan/25 bg-cyan/5 text-white/70"
                      : "border-magenta/25 bg-magenta/5 text-white/70"
                  )}
                >
                  <span className={h.accent === "cyan" ? "text-cyan" : "text-magenta"}>
                    {h.icon}
                  </span>
                  {h.label}
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>

        {/* Terminal-style fun fact */}
        <SectionReveal delay={0.3}>
          <NeonBorder className="mt-12 p-6 font-mono text-sm" color="magenta">
            <div className="flex items-center gap-2 mb-3">
              <div className="h-3 w-3 rounded-full bg-red-500/70" />
              <div className="h-3 w-3 rounded-full bg-yellow-500/70" />
              <div className="h-3 w-3 rounded-full bg-green-500/70" />
              <span className="ml-2 text-white/30 text-xs">{NAME.toLowerCase().split(" ")[0]}@portfolio ~ </span>
            </div>
            <p className="text-white/50">
              <span className="text-cyan">❯</span>{" "}
              <span className="text-magenta">whoami</span>
            </p>
            <p className="mt-1 text-white/70">{ABOUT_TERMINAL_TEXT}</p>
          </NeonBorder>
        </SectionReveal>
      </div>
    </section>
  );
}
