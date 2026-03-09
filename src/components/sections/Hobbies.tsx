"use client";

import Image from "next/image";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { NeonBorder } from "@/components/ui/NeonBorder";
import { hobbies } from "@/data/hobbies";

export function Hobbies() {
  return (
    <section id="hobbies" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionReveal>
          <span className="font-mono text-sm tracking-[0.3em] text-cyan/70">
            05. HOBBIES
          </span>
          <h2 className="mt-3 text-4xl font-bold text-white md:text-5xl">
            Beyond the{" "}
            <span className="text-magenta glow-magenta">Screen</span>
          </h2>
        </SectionReveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {hobbies.map((hobby, i) => (
            <SectionReveal key={hobby.title} delay={i * 0.08}>
              <NeonBorder color={hobby.accent} className="overflow-hidden">
                <div>
                  {hobby.image && (
                    <div className="relative h-48 w-full">
                      <Image
                        src={hobby.image}
                        alt={hobby.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-white">{hobby.title}</h3>
                    <p className="mt-2 text-sm text-white/60">{hobby.description}</p>
                    {hobby.details && hobby.details.length > 0 && (
                      <div className="mt-4 space-y-1">
                        {hobby.details.map((d) => (
                          <div key={d.label} className="flex gap-2 font-mono text-xs">
                            <span className="text-cyan/60">{d.label}:</span>
                            <span className="text-white/70">{d.value}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </NeonBorder>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
