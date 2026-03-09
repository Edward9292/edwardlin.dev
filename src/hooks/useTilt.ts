"use client";

import { useRef, useState } from "react";
import { useSpring, MotionValue } from "framer-motion";

interface TiltReturn {
  ref: React.RefObject<HTMLElement | null>;
  rotateX: MotionValue<number>;
  rotateY: MotionValue<number>;
  glareX: number;
  glareY: number;
  onMouseMove: (e: React.MouseEvent) => void;
  onMouseLeave: () => void;
}

export function useTilt(maxTilt: number = 12): TiltReturn {
  const ref = useRef<HTMLElement>(null);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });

  const rotateX = useSpring(0, { stiffness: 300, damping: 30 });
  const rotateY = useSpring(0, { stiffness: 300, damping: 30 });

  const onMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const normX = (e.clientX - centerX) / (rect.width / 2);
    const normY = (e.clientY - centerY) / (rect.height / 2);

    rotateY.set(normX * maxTilt);
    rotateX.set(-normY * maxTilt);

    const glareX = ((e.clientX - rect.left) / rect.width) * 100;
    const glareY = ((e.clientY - rect.top) / rect.height) * 100;
    setGlarePos({ x: glareX, y: glareY });
  };

  const onMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    setGlarePos({ x: 50, y: 50 });
  };

  return {
    ref,
    rotateX,
    rotateY,
    glareX: glarePos.x,
    glareY: glarePos.y,
    onMouseMove,
    onMouseLeave,
  };
}
