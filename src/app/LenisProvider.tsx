"use client";

import { useEffect } from "react";
import { useLenis, getLenis } from "@/hooks/useLenis";

export default function LenisProvider() {
  useLenis();

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const anchor = (e.target as HTMLElement).closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href?.startsWith("#")) return;

      e.preventDefault();

      // "#" alone means scroll to top
      if (href === "#") {
        getLenis()?.scrollTo(0, { duration: 1.4, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
        return;
      }

      const target = document.querySelector(href);
      if (!target) return;

      getLenis()?.scrollTo(target as HTMLElement, { duration: 1.4, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
