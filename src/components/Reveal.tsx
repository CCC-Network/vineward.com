import { useEffect, useRef, useState, type ReactNode } from "react";
import "./Reveal.css";

type Props = {
  children: ReactNode;
  className?: string;
  /** Visual style of the reveal transition. */
  variant?: "up" | "fade" | "left" | "right";
  /** Stagger delay in ms, for sequencing multiple Reveal siblings. */
  delay?: number;
  as?: "div" | "li";
};

/**
 * Fades/slides content in the first time it scrolls into view. Respects
 * prefers-reduced-motion (handled globally in global.css, which zeroes
 * out transition durations) and only fires once per element.
 */
export default function Reveal({ children, className = "", variant = "up", delay = 0, as = "div" }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const Tag = as;
  return (
    <Tag
      ref={ref as never}
      className={`reveal reveal--${variant} ${visible ? "reveal--visible" : ""} ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </Tag>
  );
}
