import { useEffect, useState } from "react";
import type { Variants } from "framer-motion";

// Central animation variants used across the site. Keep motion subtle and
// fast per docs/DESIGN_DIRECTION.md. All viewport-triggered animations
// should use `viewport={{ once: true, margin: "-80px" }}`.

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export const slideIn: Variants = {
  hidden: { opacity: 0, x: -32 },
  show: { opacity: 1, x: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

export const staggerChildren = (stagger = 0.08): Variants => ({
  hidden: {},
  show: {
    transition: { staggerChildren: stagger, delayChildren: 0.05 },
  },
});

export const cardHover = {
  rest: {
    y: 0,
    scale: 1,
    boxShadow: "0 1px 2px rgba(15,23,42,0.03), 0 4px 16px -8px rgba(15,23,42,0.08)",
  },
  hover: {
    y: -6,
    scale: 1.015,
    boxShadow: "0 24px 56px -20px rgba(11,61,145,0.28)",
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
  },
};

export const imageReveal: Variants = {
  hidden: { opacity: 0, scale: 1.05 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

// Respect prefers-reduced-motion: components should call this and, when
// true, skip motion props / render the static end-state instead.
export function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(query.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    query.addEventListener("change", handler);
    return () => query.removeEventListener("change", handler);
  }, []);

  return reduced;
}

export const viewportOnce = { once: true, margin: "-80px" } as const;
