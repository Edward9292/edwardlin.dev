"use client";

import { useEffect, useRef } from "react";
import { ParticleSystem } from "@/lib/particleSystem";
import { useMousePositionRef } from "@/hooks/useMousePosition";

export function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const systemRef = useRef(new ParticleSystem());
  const mouseRef = useMousePositionRef();
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const particleCount = prefersReducedMotion ? 30 : 120;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      systemRef.current.resize(canvas.width, canvas.height, particleCount);
    };

    resize();

    const animate = () => {
      systemRef.current.update(mouseRef.current);
      systemRef.current.draw(ctx, canvas.width, canvas.height);
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [mouseRef]);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden="true"
    />
  );
}
