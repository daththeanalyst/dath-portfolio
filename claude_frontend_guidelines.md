# Geospatial Portfolio: Frontend Design & Architectural Guidelines

This document outlines the core frontend principles, aesthetic choices, and architectural patterns required to build a premium, highly interactive personal portfolio centered around showcasing large geospatial data visualizations (GIFs, SVGs, and Videos).

When generating code or designing components for this project, strictly adhere to these guidelines.

## 1. Core Philosophy & Goals
- **Media First:** The primary goal of the portfolio is to display high-resolution, complex geospatial media. The UI should frame and elevate the media, not distract from it.
- **Dynamic & Alive:** The application should feel like a high-end command center or a futuristic analytics dashboard.
- **Performance:** Geospatial videos and GIFs are heavy. Lazy loading, component suspense, and optimized media handling are non-negotiable.

## 2. Tech Stack & Dependencies
- **Framework:** Next.js (App Router) + React
- **Styling:** Tailwind CSS (utility-first, highly customized)
- **Animations:** Framer Motion (for complex layout animations and scroll tracking)
- **UI Architecture:** Custom implementations inspired by Aceternity UI, Magic UI, and Shadcn UI.
- **Icons:** Lucide React

## 3. Design System & Aesthetics
- **Theme:** Strict Dark Mode. Use deep, rich dark backgrounds (`#0a0a0a`, `#121212`, obsidian charcoal) to allow the bright colors of maps and data visualizations to pop.
- **Typography:** Sleek, modern sans-serif fonts. Prefer `Inter`, `Space Grotesk`, or `Outfit`. Use mono-spaced fonts (`Fira Code` or `JetBrains Mono`) for technical data points or tags.
- **Textures & Effects:** 
  - Subtle Glassmorphism (blur backdrops, thin translucent borders).
  - Glowing effects around borders on hover (neon accents: Cyan, Electric Blue, or Neon Purple).
  - Background textures: Subtle moving retro grids, dot patterns, or particle effects.

## 4. Core Component Patterns

### The Hero Section
- Must be full-screen (`100vh`).
- Should feature a sophisticated animated background (e.g., slow-moving grid or particles).
- Typography must be bold, introducing the developer as a Geospatial Specialist.
- Include a high-contrast, glowing Call-to-Action (CTA) button that smooth-scrolls to the project gallery.

### Project Showcase (Bento Grid / Gallery)
- Use a **Bento Grid** layout or large asymmetrical parallax cards.
- **Media Backgrounds:** The background of the cards *must* be the project video or GIF itself.
- **Interaction:** On hover:
  - The video/GIF slightly scales up (zoom effect).
  - A dark gradient overlay strengthens.
  - Project title, tech stack tags, and a short description slide into view from the bottom.

### Dedicated Project Detail Pages
- **Hero Video Header:** A massive hero section taking up `70vh` featuring the project's main video/GIF, utilizing parallax so the content scrolls over it.
- **Split-Screen Storytelling:** For explaining the "Challenge & Solution," rely on split-screen layouts where text is sticky on one side while media scrolls on the other side.
- **Tech Stack Cards:** Use glowing, glassmorphic cards to list tools used (e.g., QGIS, PostGIS, Mapbox, Python).

## 5. Animation & Interaction Rules (Framer Motion)
- **Entering the Viewport:** Elements should never just appear. They should fade in and slide up (`y: 20`, `opacity: 0` to `y: 0`, `opacity: 1`) as they scroll into view.
- **Hover States:** Interactive elements (cards, buttons) should have satisfying micro-interactions (slight scale changes, border color shifts).
- **Page Transitions:** Implement smooth, cross-fade routing transitions using Framer Motion's `AnimatePresence`.

## 6. Coding Standards
- **Component Modularity:** Break down UI into highly reusable, small components. (e.g., `<ProjectCard />`, `<TechBadge />`, `<GlowingButton />`).
- **Responsive Design:** Mobile experience should stack gracefully, but the desktop experience is the primary focus for massive media showcases.
- **Clean Tailwind:** Avoid massive classes in the JSX. Extract repeated, complex Tailwind classes into reusable semantic classes or component variants using `cva` (class-variance-authority).
