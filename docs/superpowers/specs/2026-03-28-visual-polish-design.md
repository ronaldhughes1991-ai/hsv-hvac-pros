# Visual Polish — Rocket Animation & Skyline Overhaul

## Context

The HVAC website has a scroll-driven Saturn V rocket animation and a Huntsville skyline SVG. Both need visual improvements:
- The rocket is too small (60×160px) and hard to notice
- The scroll behavior (rocket travels upward) isn't the desired effect — user wants thrust-on-scroll instead
- The skyline's Saturn V is floating (not grounded), and the shuttle tower looks like an electric pole
- The skyline needs better composition and polish overall

## Changes

### 1. RocketAnimation.tsx — Rework

**Size:** Scale SVG from 60×160 to 120×320 (2x). Keep the same `viewBox="0 0 60 160"` and set `width="120" height="320"`.

**Exhaust trail SVG:** Scale proportionally — `width="100" height="400"` with adjusted `viewBox`.

**Position:** Fixed, bottom-right. Update `style={{ bottom: "24px", right: "28px" }}` to accommodate larger size.

**Remove:** GSAP ScrollTrigger `fromTo` animation that moves the rocket upward (`y: -(window.innerHeight - 180)`). The rocket stays in place.

**Add scroll-activated thrust:**
- Listen for `scroll` events on `window`
- On scroll: set `isThrusting = true`, show full exhaust plume, bright engine glow
- On scroll stop (debounce ~800ms): set `isThrusting = false`, fade out exhaust over ~0.8s
- Transition in: ~0.3s (engines fire up quickly)
- Transition out: ~0.8s (engines wind down gradually)

**Idle state (not scrolling):**
- Engine nozzles dark with minimal ambient glow
- No exhaust trail, or very faint wisps
- Optional: subtle glow pulse on engine ellipse (CSS animation)

**Thrust state (scrolling):**
- Engine nozzles glow bright (white/yellow center)
- Full exhaust plume with animated particles (existing particle animations)
- Exhaust trail visible at full opacity

**Keep:** IntersectionObserver for section `data-theme` detection. Trail colors remain:
- Cooling: `#3b82f6` / `#60a5fa`
- Heating: `#ef4444` / `#f87171`
- Neutral: `#8b5cf6` / `#a78bfa`

**Keep:** GSAP for smooth color transitions between trail modes (0.8s ease).

**Implementation approach:** Replace the GSAP ScrollTrigger with a scroll event listener + `setTimeout` debounce. Use GSAP to tween exhaust opacity and engine glow between idle/thrust states.

### 2. HuntsvilleSkyline.tsx — Visual Overhaul

**Remove entirely:**
- Shuttle tower structure at `translate(700, 80)` — the vertical rect + cross beams look like an electric pole

**Fix Saturn V grounding:**
- Move the Saturn V group so its engine nozzles (bottom) sit on the ground line at y=195
- Add a small launch pad base beneath it (horizontal rect)
- Adjust `translate()` so the rocket stands on solid ground, not floating in mid-air

**Keep & improve:**
- Space & Rocket Center dome at `translate(560, 100)` — refine the dome curve, add subtle window glow (warm yellow-orange rectangles with low opacity)
- Downtown building silhouettes — add more variety in heights, add warm window glow dots on select buildings
- Stars and twinkling animations — keep as-is
- Tree silhouettes — extend coverage so trees appear across more of the foreground, not just far left and far right
- Night sky gradient — keep as-is
- "Huntsville, Alabama • Rocket City USA" caption — keep as-is

**Add:**
- Better building spread across full 1440px width — currently buildings cluster at left (60–155px) and right (850–1280px) with a big gap in the middle
- Fill the middle area (after rocket center) with additional building silhouettes at varying heights
- Smoother distant hill/tree line — refine the `Q` curve control points for more natural undulation

### 3. globals.css — Responsive Rocket Scaling

Update the `.rocket-container` media queries for the new 2x base size:

```css
@media (max-width: 767px) {
  .rocket-container {
    right: 8px !important;
    bottom: 10px !important;
    transform: scale(0.5);
    transform-origin: bottom right;
    opacity: 0.45;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  .rocket-container {
    right: 16px !important;
    transform: scale(0.7);
    transform-origin: bottom right;
    opacity: 0.65;
  }
}

@media (min-width: 1024px) {
  .rocket-container {
    right: 32px !important;
    opacity: 0.9;
  }
}
```

## Files to Modify

1. `src/components/RocketAnimation.tsx` — size, remove scroll travel, add thrust-on-scroll
2. `src/components/HuntsvilleSkyline.tsx` — remove shuttle tower, ground the rocket, improve composition
3. `src/app/globals.css` — update responsive breakpoints for 2x rocket

## Verification

1. Run `npm run dev` and open `http://localhost:3000`
2. **Rocket size:** Confirm the rocket is visually ~2x larger on desktop
3. **Thrust on scroll:** Scroll the page — exhaust should fire up. Stop scrolling — exhaust should fade out after ~0.8s
4. **Trail color switching:** Scroll through sections and confirm blue (Hero, Services, Reviews), red (Emergency, Contact), purple (between sections)
5. **Skyline:** Confirm Saturn V stands on ground, shuttle tower is gone, buildings spread across full width, no floating elements
6. **Mobile:** Resize to <768px — rocket should scale down, skyline should remain proportional
7. **Build:** Run `npm run build` to confirm no TypeScript/compilation errors
