# edwardlin.dev

Personal portfolio website — a dark, cyberpunk-aesthetic site built with Next.js, Framer Motion, and a custom canvas particle system.

## Tech Stack

- **Framework**: Next.js 14 (App Router) + TypeScript
- **Styling**: Tailwind CSS with custom design tokens
- **Animation**: Framer Motion + custom spring hooks
- **Smooth Scroll**: Lenis
- **Canvas**: Custom particle system with mouse-reactive animations

## Features

- Interactive particle canvas background driven by a RAF loop
- Parallax mouse tracking across hero elements
- Glitch text effect with cyan/magenta channel splitting
- Magnetic buttons with spring-based pull
- 3D tilt + glare effect on project cards
- Custom cursor with interactive element detection via `[data-interactive]`
- Noise overlay texture for depth
- Section reveal animations on scroll
- Typing effect subtitle in the hero
- Filterable projects section by category
- Fully responsive; custom cursor hidden on mobile

## Project Structure

```
src/
├── app/              # Next.js App Router (layout, page, fonts)
├── components/
│   ├── canvas/       # ParticleCanvas
│   ├── cards/        # ProjectCard, TimelineItem
│   ├── layout/       # Navigation
│   ├── sections/     # Hero, About, Projects, Skills, Timeline, Footer
│   └── ui/           # CustomCursor, GlitchText, MagneticButton, NeonBorder, SectionReveal, NoiseOverlay
├── data/             # Static content — projects.ts, skills.ts, experience.ts, config.ts
├── hooks/            # useMousePosition, useParallax, useMagneticEffect, useTilt, useLenis
└── lib/              # utils, motionVariants, particleSystem
```

## Getting Started

```bash
npm install
npm run dev       # Dev server at localhost:3000
npm run build     # Production build (ESLint + type check)
npm run lint      # ESLint only
npx tsc --noEmit  # Type check only
```

## Customization

All portfolio content lives in `src/data/`:
- `config.ts` — name, hero label, description, typing strings
- `projects.ts` — project cards with tech stack, links, and category
- `experience.ts` — work history for the timeline
- `skills.ts` — skill categories and items

Design tokens (colors, fonts, shadows, keyframes) are defined in `globals.css` and `tailwind.config.ts`.
