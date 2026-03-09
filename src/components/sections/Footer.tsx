"use client";

import { motion } from "framer-motion";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { SectionReveal } from "@/components/ui/SectionReveal";

const socials = [
  { label: "GitHub", href: "https://github.com/edwardlin", icon: "⌥" },
  { label: "LinkedIn", href: "https://linkedin.com/in/edwardlin", icon: "◈" },
  { label: "Twitter / X", href: "https://twitter.com/edwardlin", icon: "◇" },
  { label: "Email", href: "mailto:edward@edwardlin.dev", icon: "✉" },
];

export function Footer() {
  return (
    <footer id="contact" className="relative px-6 py-24 md:py-32">
      {/* Ambient gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-magenta/5 to-transparent" />

      <div className="relative mx-auto max-w-4xl text-center">
        <SectionReveal>
          <span className="font-mono text-sm tracking-[0.3em] text-cyan/70">
            05. CONTACT
          </span>
          <h2 className="mt-4 text-5xl font-bold text-white md:text-6xl">
            Let&apos;s{" "}
            <span className="text-cyan glow-cyan">Connect</span>
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-white/50">
            I&apos;m currently open to new opportunities and collaborations. Whether
            you have a project idea, a question, or just want to say hi — my
            inbox is always open.
          </p>
        </SectionReveal>

        <SectionReveal delay={0.15}>
          <MagneticButton className="mx-auto mt-10 inline-block">
            <a
              href="mailto:edward@edwardlin.dev"
              className="group inline-flex items-center gap-3 rounded-xl border border-cyan/40 bg-cyan/10 px-8 py-4 font-mono text-base text-cyan transition-all hover:border-cyan hover:bg-cyan/20 hover:shadow-neon-cyan-strong"
              data-interactive
            >
              Say Hello
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                →
              </motion.span>
            </a>
          </MagneticButton>
        </SectionReveal>

        {/* Social links */}
        <SectionReveal delay={0.2}>
          <div className="mt-16 flex flex-wrap items-center justify-center gap-6">
            {socials.map((s) => (
              <MagneticButton key={s.label}>
                <a
                  href={s.href}
                  target={s.label !== "Email" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-mono text-sm text-white/40 transition-all hover:text-cyan"
                  data-interactive
                >
                  <span className="text-base">{s.icon}</span>
                  {s.label}
                </a>
              </MagneticButton>
            ))}
          </div>
        </SectionReveal>

        {/* Bottom */}
        <SectionReveal delay={0.25}>
          <div className="mt-16 border-t border-white/5 pt-8">
            <p className="font-mono text-xs text-white/20">
              Designed & built by{" "}
              <span className="text-cyan/50">Edward Lin</span> · {new Date().getFullYear()}
            </p>
            <p className="mt-1 font-mono text-xs text-white/10">
              Next.js · Framer Motion · Tailwind CSS · Lenis
            </p>
          </div>
        </SectionReveal>
      </div>
    </footer>
  );
}
