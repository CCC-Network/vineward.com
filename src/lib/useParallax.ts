import { useEffect, useRef, useState } from "react";

/**
 * Returns a small vertical pixel offset that tracks scroll position while
 * the element is near the viewport, for a subtle parallax drift. Disabled
 * entirely under prefers-reduced-motion.
 */
export function useParallax(strength = 0.12) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const el = ref.current;
    if (!el) return;

    let raf = 0;

    const update = () => {
      const rect = el.getBoundingClientRect();
      const viewportH = window.innerHeight || 1;
      // Distance of the element's center from the viewport's center, as a
      // fraction, so the offset is ~0 when centered and grows toward the edges.
      const centerDelta = rect.top + rect.height / 2 - viewportH / 2;
      setOffset(centerDelta * strength * -1);
      raf = 0;
    };

    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [strength]);

  return { ref, offset };
}
