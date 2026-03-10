"use client";

import { motion, useSpring } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { ABOUT_BIO, ABOUT_TERMINAL_TEXT, RESUME_URL, NAME } from "@/data/config";

function PhotoCard() {
  const ref = useRef<HTMLDivElement>(null);
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

  const rotateX = useSpring(0, { stiffness: 260, damping: 28 });
  const rotateY = useSpring(0, { stiffness: 260, damping: 28 });
  const scale = useSpring(1, { stiffness: 260, damping: 28 });
  const shadowY = useSpring(8, { stiffness: 260, damping: 28 });

  const onMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width;   // 0–1
    const ny = (e.clientY - rect.top)  / rect.height;  // 0–1

    rotateY.set((nx - 0.5) * 24);
    rotateX.set((0.5 - ny) * 24);
    scale.set(1.03);
    shadowY.set(18);
    setGlare({ x: nx * 100, y: ny * 100, opacity: 0.18 });
  };

  const onMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    scale.set(1);
    shadowY.set(8);
    setGlare((g) => ({ ...g, opacity: 0 }));
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{
        rotateX,
        rotateY,
        scale,
        transformStyle: "preserve-3d",
        perspective: 800,
        filter: `drop-shadow(0 ${shadowY.get()}px 32px rgba(0,245,255,0.18))`,
      }}
      className="relative mx-auto w-64 md:w-72 select-none cursor-none"
    >
      {/* Animated ring */}
      <motion.div
        className="absolute inset-[-12px] rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        style={{
          background:
            "conic-gradient(from 0deg, transparent 60%, rgba(0,245,255,0.5) 75%, rgba(255,0,110,0.5) 85%, transparent 100%)",
          borderRadius: "50%",
          zIndex: 0,
        }}
      />

      {/* Glow ring */}
      <div
        className="absolute inset-[-4px] rounded-full"
        style={{
          background: "transparent",
          boxShadow:
            "0 0 0 1.5px rgba(0,245,255,0.25), 0 0 24px rgba(0,245,255,0.12)",
          borderRadius: "50%",
          zIndex: 1,
        }}
      />

      {/* Photo */}
      <div
        className="relative overflow-hidden rounded-full"
        style={{ zIndex: 2, aspectRatio: "1/1" }}
      >
        <Image
          src="/avatar.png"
          alt={NAME}
          fill
          className="object-cover object-top"
          priority
        />

        {/* Glare overlay */}
        <div
          className="pointer-events-none absolute inset-0 rounded-full transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,0.55) 0%, transparent 60%)`,
            opacity: glare.opacity,
          }}
        />
      </div>

      {/* Floating cyan dot accents */}
      {[
        { top: "-8%", left: "10%", size: 6, delay: 0 },
        { top: "80%", left: "-6%", size: 4, delay: 0.8 },
        { top: "15%", left: "88%", size: 5, delay: 1.4 },
        { top: "70%", left: "92%", size: 3, delay: 0.4 },
      ].map((dot, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-cyan"
          style={{ width: dot.size, height: dot.size, top: dot.top, left: dot.left }}
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: dot.delay, ease: "easeInOut" }}
        />
      ))}
    </motion.div>
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

        <div className="mt-16 grid gap-12 md:grid-cols-2 md:items-center">
          {/* Bio */}
          <SectionReveal delay={0.1}>
            <div className="space-y-5 text-white/70 leading-relaxed">
              {ABOUT_BIO.map((para, i) => (
                <p key={i} dangerouslySetInnerHTML={{
                  __html: para
                    .replace(/<cyan>(.*?)<\/cyan>/g, '<span class="text-cyan">$1</span>')
                    .replace(/<magenta>(.*?)<\/magenta>/g, '<span class="text-magenta">$1</span>')
                }} />
              ))}
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

          {/* Photo */}
          <SectionReveal delay={0.2}>
            <PhotoCard />
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
