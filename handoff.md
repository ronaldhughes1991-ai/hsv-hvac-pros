# HVAC Website — Handoff Document

## Project Overview
An HVAC business website for a company based in **Huntsville, Alabama** ("Rocket City USA").
Built with Next.js 16, React 19, TypeScript, Tailwind CSS v4, and GSAP 3.14.

**Working directory:** `c:\Users\ronal\HVAC website`
**Dev server:** `npm run dev` → `http://localhost:3000`

---

## Tech Stack
- **Next.js 16** (App Router) — note: breaking changes from older versions; check `node_modules/next/dist/docs/` before modifying routing or config
- **React 19**
- **TypeScript**
- **Tailwind CSS v4**
- **GSAP 3.14** with ScrollTrigger (used for scroll-based rocket animation)

---

## File Structure
```
src/
  app/
    page.tsx          — root page, assembles all components
    layout.tsx
    globals.css
    api/contact/route.ts
  components/
    Navbar.tsx
    Hero.tsx
    Services.tsx
    Emergency.tsx
    Reviews.tsx
    Contact.tsx
    ContactForm.tsx
    Footer.tsx
    HuntsvilleSkyline.tsx   — decorative SVG skyline at bottom of page
    RocketAnimation.tsx     — scroll-driven Saturn V rocket, fixed bottom-right
```

---

## Key Components

### `HuntsvilleSkyline.tsx`
- Decorative SVG banner (`viewBox="0 0 1440 200"`) placed between `<Footer>` and the page bottom
- Contains a **vertical Saturn V rocket silhouette** at `translate(370, 20)` — base is intentionally buried behind the city buildings layer so it appears grounded
- Also contains: U.S. Space & Rocket Center dome building, Space Shuttle assembly tower, downtown Huntsville buildings, tree silhouettes, stars
- Caption reads: "Huntsville, Alabama • Rocket City USA"

### `RocketAnimation.tsx`
- `"use client"` component — fixed-position Saturn V rocket in the **bottom-right corner**
- **Scroll animation:** GSAP ScrollTrigger moves the rocket upward (`y: -(window.innerHeight - 180)`) with `scrub: 0.6` as the user scrolls the full page
- **Trail color:** changes between blue (cooling sections), red (heating sections), and purple/neutral based on which `<section data-theme="...">` is in view — uses IntersectionObserver
- Saturn V SVG is 60×160px with: LES tower, command module nose, service module, spacecraft adapter, S-IVB (3rd stage), S-II (2nd stage) with "USA" text, S-IC (1st stage) with roll-pattern bands, four swept fins, five F-1 engine nozzles, engine glow

---

## Outstanding / Potential TODOs
- Verify the scroll rocket animation is visually smooth across browsers
- Confirm `section[data-theme]` attributes are present on the correct sections for trail color-switching to work
- The skyline SVG is static — no animation or responsiveness beyond `preserveAspectRatio`
- Contact form API route (`src/app/api/contact/route.ts`) — verify it is wired up and working
