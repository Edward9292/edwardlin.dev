"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";
import { GlitchText } from "@/components/ui/GlitchText";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { useMousePosition } from "@/hooks/useMousePosition";
import { useParallax } from "@/hooks/useParallax";
import { staggerContainer, staggerItem } from "@/lib/motionVariants";
import { NAME_DISPLAY, HERO_LABEL, HERO_DESCRIPTION, HERO_TYPING_STRINGS } from "@/data/config";

function useTypingEffect(strings: string[], speed = 80, pause = 2000) {
  const [text, setText] = useState("");
  const [stringIndex, setStringIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = strings[stringIndex];
    if (!deleting && charIndex < current.length) {
      const t = setTimeout(() => setCharIndex((c) => c + 1), speed);
      return () => clearTimeout(t);
    } else if (!deleting && charIndex === current.length) {
      const t = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(t);
    } else if (deleting && charIndex > 0) {
      const t = setTimeout(() => setCharIndex((c) => c - 1), speed / 2);
      return () => clearTimeout(t);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setStringIndex((i) => (i + 1) % strings.length);
    }
  }, [charIndex, deleting, stringIndex, strings, speed, pause]);

  useEffect(() => {
    setText(strings[stringIndex].slice(0, charIndex));
  }, [charIndex, stringIndex, strings]);

  return text;
}

export function Hero() {
  const mouse = useMousePosition();
  const layer1 = useParallax(15);  // dot grid
  const layer3X = useSpring(0, { stiffness: 50, damping: 20 });
  const layer3Y = useSpring(0, { stiffness: 50, damping: 20 });

  const typedText = useTypingEffect(HERO_TYPING_STRINGS);

  useEffect(() => {
    layer3X.set(-mouse.normalizedX * 8);
    layer3Y.set(-mouse.normalizedY * 8);
  }, [mouse.normalizedX, mouse.normalizedY, layer3X, layer3Y]);

  const gradientX = 50 + mouse.normalizedX * 15;
  const gradientY = 50 + mouse.normalizedY * 15;

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      {/* Dynamic ambient gradient */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30 transition-all duration-300"
        style={{
          background: `radial-gradient(ellipse 60% 50% at ${gradientX}% ${gradientY}%, rgba(0,245,255,0.12) 0%, transparent 70%)`,
        }}
      />

      {/* Dot grid layer (parallax layer 1) */}
      <motion.div
        style={{ x: layer1.x, y: layer1.y }}
        className="pointer-events-none absolute inset-[-5%] dot-grid opacity-40"
      />

      {/* Text block (parallax layer 3 — counter-move) */}
      <motion.div
        style={{ x: layer3X, y: layer3Y }}
        className="relative z-10 max-w-4xl text-center"
      >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          {/* Label */}
          <motion.div variants={staggerItem}>
            <span className="font-mono text-sm tracking-[0.3em] text-cyan/70">
              {HERO_LABEL}
            </span>
          </motion.div>

          {/* Name with glitch */}
          <motion.div variants={staggerItem}>
            <GlitchText
              text={NAME_DISPLAY}
              className="text-6xl font-bold tracking-tight text-white sm:text-7xl md:text-8xl"
            />
          </motion.div>

          {/* Typing subtitle */}
          <motion.div variants={staggerItem} className="h-8">
            <span className="font-mono text-xl text-cyan sm:text-2xl">
              {typedText}
              <span className="animate-pulse text-magenta">|</span>
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={staggerItem}
            className="mx-auto max-w-xl text-lg leading-relaxed text-white/60"
          >
            {HERO_DESCRIPTION}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={staggerItem}
            className="flex flex-wrap items-center justify-center gap-4 pt-4"
          >
            <MagneticButton>
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg border border-cyan/40 bg-cyan/10 px-6 py-3 font-mono text-sm text-cyan transition-all hover:border-cyan/80 hover:bg-cyan/20 hover:shadow-neon-cyan"
                data-interactive
              >
                View Projects
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </MagneticButton>

            <MagneticButton>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-6 py-3 font-mono text-sm text-white/70 transition-all hover:border-white/30 hover:text-white"
                data-interactive
              >
                Get in Touch
              </a>
            </MagneticButton>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="font-mono text-xs tracking-widest text-white/30">SCROLL</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="h-8 w-px bg-gradient-to-b from-cyan/50 to-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
}
