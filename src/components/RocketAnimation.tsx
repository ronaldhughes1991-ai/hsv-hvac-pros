"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { gsap } from "gsap";

type TrailMode = "cooling" | "heating" | "neutral";

const TRAIL_COLORS: Record<TrailMode, { primary: string; glow: string }> = {
  cooling: { primary: "#3b82f6", glow: "#60a5fa" },
  heating: { primary: "#ef4444", glow: "#f87171" },
  neutral: { primary: "#8b5cf6", glow: "#a78bfa" },
};

export default function RocketAnimation() {
  const rocketRef = useRef<HTMLDivElement>(null);
  const exhaustRef = useRef<SVGSVGElement>(null);
  const engineGlowRef = useRef<SVGEllipseElement>(null);
  const engineGlowInnerRef = useRef<SVGEllipseElement>(null);
  const gradEndRef = useRef<SVGStopElement>(null);
  const gradMidRef = useRef<SVGStopElement>(null);
  const glowEndRef = useRef<SVGStopElement>(null);
  const glowMidRef = useRef<SVGStopElement>(null);
  const [trailMode, setTrailMode] = useState<TrailMode>("neutral");
  const currentModeRef = useRef<TrailMode>("neutral");
  const isThrustingRef = useRef(false);
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const observerCallback = useCallback((entries: IntersectionObserverEntry[]) => {
    let best: IntersectionObserverEntry | null = null;
    for (const entry of entries) {
      if (entry.isIntersecting) {
        if (!best || entry.intersectionRatio > best.intersectionRatio) best = entry;
      }
    }
    if (best) {
      const theme = (best.target as HTMLElement).dataset.theme as TrailMode | undefined;
      const newMode = theme || "neutral";
      if (newMode !== currentModeRef.current) {
        currentModeRef.current = newMode;
        setTrailMode(newMode);
      }
    }
  }, []);

  // Color transitions when trail mode changes
  useEffect(() => {
    const colors = TRAIL_COLORS[trailMode];
    if (gradEndRef.current && gradMidRef.current) {
      gsap.to(gradEndRef.current, { attr: { "stop-color": colors.primary }, duration: 0.8, ease: "power2.inOut" });
      gsap.to(gradMidRef.current, { attr: { "stop-color": colors.primary }, duration: 0.8, ease: "power2.inOut" });
    }
    if (glowEndRef.current && glowMidRef.current) {
      gsap.to(glowEndRef.current, { attr: { "stop-color": colors.glow }, duration: 0.8, ease: "power2.inOut" });
      gsap.to(glowMidRef.current, { attr: { "stop-color": colors.glow }, duration: 0.8, ease: "power2.inOut" });
    }
  }, [trailMode]);

  // Thrust-on-scroll + IntersectionObserver
  useEffect(() => {
    const exhaust = exhaustRef.current;
    const engineGlow = engineGlowRef.current;
    const engineGlowInner = engineGlowInnerRef.current;
    if (!exhaust || !engineGlow || !engineGlowInner) return;

    // Start in idle state
    gsap.set(exhaust, { opacity: 0 });
    gsap.set(engineGlow, { opacity: 0.15 });
    gsap.set(engineGlowInner, { opacity: 0.08 });

    const fireThrust = () => {
      if (!isThrustingRef.current) {
        isThrustingRef.current = true;
        gsap.to(exhaust, { opacity: 1, duration: 0.3, ease: "power2.out" });
        gsap.to(engineGlow, { opacity: 0.55, duration: 0.3, ease: "power2.out" });
        gsap.to(engineGlowInner, { opacity: 0.3, duration: 0.3, ease: "power2.out" });
      }
    };

    const killThrust = () => {
      isThrustingRef.current = false;
      gsap.to(exhaust, { opacity: 0, duration: 0.8, ease: "power2.inOut" });
      gsap.to(engineGlow, { opacity: 0.15, duration: 0.8, ease: "power2.inOut" });
      gsap.to(engineGlowInner, { opacity: 0.08, duration: 0.8, ease: "power2.inOut" });
    };

    const handleScroll = () => {
      fireThrust();
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = setTimeout(killThrust, 800);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // IntersectionObserver for section theme detection
    const sections = document.querySelectorAll("section[data-theme]");
    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: "-40% 0px -40% 0px",
      threshold: [0, 0.25, 0.5, 0.75, 1],
    });
    sections.forEach((s) => observer.observe(s));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      observer.disconnect();
    };
  }, [observerCallback]);

  return (
    <div
      ref={rocketRef}
      className="rocket-container pointer-events-none fixed z-40"
      style={{ bottom: "24px", right: "28px" }}
      aria-hidden="true"
    >
      {/* Exhaust trail — positioned below engine nozzles */}
      <svg
        ref={exhaustRef}
        width="100"
        height="400"
        viewBox="0 0 50 200"
        style={{
          position: "absolute",
          top: "308px",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: 0,
        }}
      >
        <defs>
          <linearGradient id="trailGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="white" stopOpacity="0.95" />
            <stop ref={gradMidRef} offset="35%" stopColor="#8b5cf6" stopOpacity="0.7" />
            <stop ref={gradEndRef} offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="trailGlow" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="white" stopOpacity="0.6" />
            <stop ref={glowMidRef} offset="40%" stopColor="#a78bfa" stopOpacity="0.4" />
            <stop ref={glowEndRef} offset="100%" stopColor="#a78bfa" stopOpacity="0" />
          </linearGradient>
          <filter id="trailBlur"><feGaussianBlur stdDeviation="4" /></filter>
          <filter id="trailBlurWide"><feGaussianBlur stdDeviation="9" /></filter>
        </defs>

        {/* Wide outer glow */}
        <ellipse cx="25" cy="90" rx="22" ry="90" fill="url(#trailGlow)" filter="url(#trailBlurWide)" opacity="0.5" />

        {/* Core plume */}
        <path
          d="M25 0 Q22 40 19 100 Q16 160 25 200 Q34 160 31 100 Q28 40 25 0Z"
          fill="url(#trailGrad)"
          filter="url(#trailBlur)"
        />

        {/* Bright center line */}
        <line x1="25" y1="0" x2="25" y2="130" stroke="white" strokeWidth="2.5" strokeLinecap="round" opacity="0.65" filter="url(#trailBlur)" />

        {/* Animated exhaust particles */}
        <circle cx="22" cy="60" r="1.8" fill="white" opacity="0.8">
          <animate attributeName="cy" values="10;190;10" dur="1.8s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.8;0;0.8" dur="1.8s" repeatCount="indefinite" />
        </circle>
        <circle cx="28" cy="90" r="1.3" fill="white" opacity="0.6">
          <animate attributeName="cy" values="30;200;30" dur="2.3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.6;0;0.6" dur="2.3s" repeatCount="indefinite" />
        </circle>
        <circle cx="25" cy="40" r="1.5" fill="white" opacity="0.7">
          <animate attributeName="cy" values="5;160;5" dur="2.0s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.7;0;0.7" dur="2.0s" repeatCount="indefinite" />
        </circle>
      </svg>

      {/* Saturn V Rocket — 120×320 (2x) */}
      <svg
        width="120"
        height="320"
        viewBox="0 0 60 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* ── Launch Escape System (LES) tower ── */}
        <line x1="30" y1="0" x2="30" y2="12" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" />
        {/* LES crossbar */}
        <line x1="27" y1="4" x2="33" y2="4" stroke="#94a3b8" strokeWidth="1.2" />
        <circle cx="30" cy="0" r="1.5" fill="#94a3b8" />

        {/* ── Command Module (nose cone) ── */}
        <path d="M30 10 L24 24 L36 24 Z" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="0.5" />
        {/* Center seam */}
        <line x1="30" y1="10" x2="30" y2="24" stroke="#cbd5e1" strokeWidth="0.5" opacity="0.6" />

        {/* ── Service Module ── */}
        <rect x="24" y="24" width="12" height="14" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="0.4" />
        <rect x="24" y="30" width="12" height="1.5" fill="#94a3b8" opacity="0.3" />

        {/* ── Spacecraft Adapter (tapers out) ── */}
        <path d="M24 38 L21 44 L39 44 L36 38 Z" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="0.4" />

        {/* ── S-IVB — Third Stage ── */}
        <rect x="21" y="44" width="18" height="24" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="0.4" />
        {/* Stage stripe details */}
        <rect x="21" y="47" width="18" height="1.5" fill="#94a3b8" opacity="0.35" />
        <rect x="21" y="59" width="18" height="1.5" fill="#94a3b8" opacity="0.35" />

        {/* ── S-IVB / S-II Interstage ── */}
        <path d="M21 68 L19 73 L41 73 L39 68 Z" fill="#1e293b" />

        {/* ── S-II — Second Stage ── */}
        <rect x="19" y="73" width="22" height="30" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="0.4" />
        {/* USA flag stripe */}
        <rect x="22" y="79" width="16" height="5" rx="0.5" fill="#1e40af" opacity="0.12" />
        <text x="30" y="83.5" textAnchor="middle" fontSize="5.5" fontWeight="bold" fill="#1e40af" fontFamily="Arial, sans-serif">USA</text>
        {/* Stage bands */}
        <rect x="19" y="90" width="22" height="1.5" fill="#94a3b8" opacity="0.25" />
        <rect x="19" y="98" width="22" height="1.5" fill="#94a3b8" opacity="0.25" />

        {/* ── S-II / S-IC Interstage ── */}
        <path d="M19 103 L17 108 L43 108 L41 103 Z" fill="#0f172a" />

        {/* ── S-IC — First Stage (widest) ── */}
        <rect x="17" y="108" width="26" height="36" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="0.4" />
        {/* Black roll-pattern bands */}
        <rect x="17" y="112" width="26" height="2.5" fill="#0f172a" opacity="0.15" />
        <rect x="17" y="124" width="26" height="2.5" fill="#0f172a" opacity="0.15" />
        <rect x="17" y="136" width="26" height="2.5" fill="#0f172a" opacity="0.15" />

        {/* ── Four swept fins ── */}
        <path d="M17 132 L9 145 L17 142 Z" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="0.5" />
        <path d="M43 132 L51 145 L43 142 Z" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="0.5" />
        <path d="M20 134 L12 145 L20 141 Z" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="0.3" opacity="0.8" />
        <path d="M40 134 L48 145 L40 141 Z" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="0.3" opacity="0.8" />

        {/* ── Engine cluster fairing ── */}
        <rect x="17" y="144" width="26" height="4" rx="1" fill="#334155" />

        {/* ── Five F-1 engine nozzles ── */}
        <ellipse cx="21"  cy="150" rx="3"   ry="2.5" fill="#1e293b" />
        <ellipse cx="25.5" cy="151" rx="2.5" ry="2.2" fill="#1e293b" />
        <ellipse cx="30"  cy="152" rx="3"   ry="2.8" fill="#0f172a" />
        <ellipse cx="34.5" cy="151" rx="2.5" ry="2.2" fill="#1e293b" />
        <ellipse cx="39"  cy="150" rx="3"   ry="2.5" fill="#1e293b" />

        {/* ── Engine glow (animated by scroll state) ── */}
        <ellipse ref={engineGlowRef} cx="30" cy="154" rx="12" ry="4" fill="white" opacity="0.15" className="engine-idle-pulse" />
        <ellipse ref={engineGlowInnerRef} cx="30" cy="155" rx="7" ry="2.5" fill="#fbbf24" opacity="0.08" />
      </svg>
    </div>
  );
}
