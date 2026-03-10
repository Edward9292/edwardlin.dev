"use client";

import { MagneticButton } from "@/components/ui/MagneticButton";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { SOCIALS, NAME } from "@/data/config";

const SOCIAL_ICONS: Record<string, React.ReactNode> = {
  GitHub: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  ),
  LinkedIn: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
  Email: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  ),
};

export function Footer() {
  return (
    <footer id="contact" className="relative px-6 py-24 md:py-32">
      {/* Ambient gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-magenta/5 to-transparent" />

      <div className="relative mx-auto max-w-4xl text-center">
        <SectionReveal>
          <span className="font-mono text-sm tracking-[0.3em] text-cyan/70">
            06. CONTACT
          </span>
          <h2 className="mt-4 text-5xl font-bold text-white md:text-6xl">
            Let&apos;s{" "}
            <span className="text-cyan glow-cyan">Connect</span>
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-white/50">
            Got an idea, a challenge, or just want to geek out about tech? Let&apos;s
            build something amazing together — feel free to reach out anytime.
          </p>
        </SectionReveal>

        {/* Social links as primary CTAs */}
        <SectionReveal delay={0.15}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            {SOCIALS.map((s, i) => {
              const isCyan = i % 2 === 0;
              return (
                <MagneticButton key={s.label} className="inline-block">
                  <a
                    href={s.href}
                    target={s.label !== "Email" ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className={
                      isCyan
                        ? "group inline-flex items-center gap-3 rounded-xl border border-cyan/40 bg-cyan/10 px-8 py-4 font-mono text-base text-cyan transition-all hover:border-cyan hover:bg-cyan/20 hover:shadow-neon-cyan-strong"
                        : "group inline-flex items-center gap-3 rounded-xl border border-magenta/40 bg-magenta/10 px-8 py-4 font-mono text-base text-magenta transition-all hover:border-magenta hover:bg-magenta/20 hover:shadow-neon-magenta-strong"
                    }
                    data-interactive
                  >
                    {SOCIAL_ICONS[s.label]}
                    {s.label}
                  </a>
                </MagneticButton>
              );
            })}
          </div>
        </SectionReveal>

        {/* Bottom */}
        <SectionReveal delay={0.25}>
          <div className="mt-16 border-t border-white/5 pt-8">
            <p className="font-mono text-xs text-white/20">
              Designed & built by{" "}
              <span className="text-cyan/50">{NAME}</span> · {new Date().getFullYear()}
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
