"use client";

import { useSpring } from "framer-motion";
import { useEffect } from "react";
import { useMousePosition } from "./useMousePosition";

export function useParallax(strength: number = 15) {
  const mouse = useMousePosition();

  const x = useSpring(0, { stiffness: 50, damping: 20 });
  const y = useSpring(0, { stiffness: 50, damping: 20 });

  useEffect(() => {
    x.set(mouse.normalizedX * strength);
    y.set(mouse.normalizedY * strength);
  }, [mouse.normalizedX, mouse.normalizedY, strength, x, y]);

  return { x, y };
}
