"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { NeonBorder } from "@/components/ui/NeonBorder";
import { ABOUT_STATS, ABOUT_TERMINAL_TEXT, RESUME_URL, NAME } from "@/data/config";

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1500;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

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

          {/* Stats grid */}
          <SectionReveal delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              {ABOUT_STATS.map((stat) => (
                <NeonBorder key={stat.label} className="p-6">
                  <div className="text-3xl font-bold text-cyan glow-cyan">
                    <CountUp target={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="mt-1 font-mono text-xs text-white/40">
                    {stat.label}
                  </div>
                </NeonBorder>
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
