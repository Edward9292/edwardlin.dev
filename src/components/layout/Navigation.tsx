"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { cn } from "@/lib/utils";
import { INITIALS, RESUME_URL } from "@/data/config";

const navLinks = [
  { label: "About",      href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects",   href: "#projects" },
  { label: "Skills",     href: "#skills" },
  { label: "Hobbies",    href: "#hobbies" },
  { label: "Contact",    href: "#contact" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-300",
        scrolled
          ? "border-b border-white/5 bg-bg/80 backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <MagneticButton strength={0.3}>
          <a
            href="#"
            className="font-mono text-lg font-bold text-cyan transition-opacity hover:opacity-80"
            data-interactive
          >
            {INITIALS}<span className="text-magenta">.</span>
          </a>
        </MagneticButton>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link, i) => (
            <MagneticButton key={link.href} strength={0.25}>
              <a
                href={link.href}
                className="group relative font-mono text-sm text-white/50 transition-colors hover:text-white"
                data-interactive
              >
                <span className="mr-1 text-cyan/50">{String(i + 1).padStart(2, "0")}.</span>
                {link.label}
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-cyan transition-all group-hover:w-full" />
              </a>
            </MagneticButton>
          ))}
        </div>

        {/* Resume CTA */}
        <div className="hidden md:block">
          <MagneticButton strength={0.3}>
            <a
              href={RESUME_URL}
              className="rounded-lg border border-cyan/30 px-4 py-2 font-mono text-sm text-cyan transition-all hover:border-cyan/60 hover:shadow-neon-cyan"
              data-interactive
            >
              Resume
            </a>
          </MagneticButton>
        </div>

        {/* Mobile hamburger */}
        <button
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span className={cn("h-px w-6 bg-white/70 transition-all", mobileOpen && "translate-y-2 rotate-45")} />
          <span className={cn("h-px w-6 bg-white/70 transition-all", mobileOpen && "opacity-0")} />
          <span className={cn("h-px w-6 bg-white/70 transition-all", mobileOpen && "-translate-y-2 -rotate-45")} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="border-t border-white/5 bg-bg/95 backdrop-blur-xl md:hidden"
        >
          <div className="flex flex-col gap-4 px-6 py-6">
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                className="font-mono text-sm text-white/60 transition-colors hover:text-white"
                onClick={() => setMobileOpen(false)}
              >
                <span className="mr-2 text-cyan/50">{String(i + 1).padStart(2, "0")}.</span>
                {link.label}
              </a>
            ))}
            <a
              href={RESUME_URL}
              className="mt-2 inline-block w-fit rounded-lg border border-cyan/30 px-4 py-2 font-mono text-sm text-cyan"
            >
              Resume
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
