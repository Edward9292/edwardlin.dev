# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at localhost:3000
npm run build    # Production build (runs ESLint + type check)
npm run lint     # ESLint only
npx tsc --noEmit # Type check only
```

## Architecture

**Framework**: Next.js 14 App Router with TypeScript. All pages are in `src/app/`, all components in `src/components/`.

**Key wiring in `layout.tsx`**:
- `LenisProvider` — a client-only wrapper component that calls `useLenis()` to initialize smooth scroll. Lenis cannot be initialized in the layout directly because layout is a Server Component.
- `CustomCursor`, `NoiseOverlay` — fixed overlays rendered in the layout so they persist across navigation.

**Animation layers in `page.tsx`**:
- `ParticleCanvas` — a `<canvas>` fixed behind everything (`z-0`), driven by a RAF loop. Uses `useMousePositionRef()` (a ref, not state) to avoid re-renders on every mousemove.
- All page content sits in a `z-10` relative div on top of the canvas.

**Cursor interaction**: Interactive elements use `data-interactive` attribute. `CustomCursor` listens for `mouseover` and checks `target.closest("[data-interactive]")` to switch the ring to magenta + scale 2×.

**Mouse hooks**:
- `useMousePosition` — returns `{x, y, normalizedX, normalizedY}` via state (for components that need reactive re-renders)
- `useMousePositionRef` — returns a ref (for RAF loops and springs that don't need re-renders)
- `useParallax(strength)` — wraps `useMousePosition` + `useSpring` to return smoothed `{x, y}` motion values
- `useMagneticEffect(strength)` — returns spring x/y + event handlers for magnetic pull
- `useTilt(maxTilt)` — returns spring rotateX/rotateY + glare position for 3D card effect

**Design tokens** (defined in both `globals.css` as CSS vars and `tailwind.config.ts` as theme extensions):
- Colors: `bg=#0a0a0f`, `cyan=#00f5ff`, `magenta=#ff006e`, `surface=#0f0f1a`, `border=#1a1a2e`
- Fonts: `--font-inter` (body), `--font-jetbrains` (mono/code), loaded via `src/app/fonts.ts`
- Neon shadows: `shadow-neon-cyan`, `shadow-neon-magenta` (and `-strong` variants)
- Glitch keyframes: `glitch-1` (cyan channel), `glitch-2` (magenta channel) — used in `GlitchText`

**Data files** (`src/data/`): Static TypeScript arrays — `projects.ts`, `skills.ts`, `experience.ts`. Edit these to update portfolio content.

## Config notes

- `next.config` must be `.mjs` — Next.js 14.2 does not support `next.config.ts`
- `prefers-reduced-motion`: particle count drops from 120 → 30 in `ParticleCanvas`; CSS animations are disabled globally via `globals.css`
- Custom cursor is hidden on mobile (`hidden md:block` in `CustomCursor`, `cursor: none` only applies on desktop via media query)
