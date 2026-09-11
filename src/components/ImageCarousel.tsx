import { useEffect, useRef, useState } from "react";
import type { Screenshot } from "../lib/config";
import "./ImageCarousel.css";

function Tile({
  shot,
  onOpen,
}: {
  shot: Screenshot;
  onOpen: () => void;
}) {
  return (
    <button type="button" className="carousel-tile" onClick={onOpen} aria-label={`View ${shot.caption}`}>
      {shot.src ? (
        <img src={shot.src} alt={shot.caption} loading="lazy" />
      ) : (
        <div className="carousel-tile__placeholder">
          <span className="carousel-tile__mark" />
          <span className="carousel-tile__text">{shot.caption}</span>
        </div>
      )}
      <span className="carousel-tile__caption">{shot.caption}</span>
    </button>
  );
}

function Lightbox({
  slides,
  index,
  onClose,
  onStep,
}: {
  slides: Screenshot[];
  index: number;
  onClose: () => void;
  onStep: (delta: number) => void;
}) {
  const closeRef = useRef<HTMLButtonElement | null>(null);
  const shot = slides[index];

  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onStep(1);
      if (e.key === "ArrowLeft") onStep(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onStep]);

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={shot.caption} onClick={onClose}>
      <div className="lightbox__frame" onClick={(e) => e.stopPropagation()}>
        {shot.src ? (
          <img src={shot.src} alt={shot.caption} />
        ) : (
          <div className="lightbox__placeholder">
            <span className="carousel-tile__mark" />
            <span className="carousel-tile__text">{shot.caption}</span>
            <span className="lightbox__note">Screenshot coming soon</span>
          </div>
        )}

        <button ref={closeRef} type="button" className="lightbox__close" onClick={onClose} aria-label="Close">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M5 5l14 14M19 5L5 19" strokeLinecap="round" />
          </svg>
        </button>

        <button type="button" className="lightbox__nav lightbox__nav--prev" onClick={() => onStep(-1)} aria-label="Previous">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M15 5l-7 7 7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button type="button" className="lightbox__nav lightbox__nav--next" onClick={() => onStep(1)} aria-label="Next">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
      <p className="lightbox__caption">{shot.caption}</p>
    </div>
  );
}

const VISIBLE = 4;

export default function ImageCarousel({ slides }: { slides: Screenshot[] }) {
  const [start, setStart] = useState(0);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    if (slides.length <= VISIBLE) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;
    const id = window.setInterval(() => {
      setStart((s) => (s + 1) % slides.length);
    }, 3800);
    return () => window.clearInterval(id);
  }, [slides.length]);

  const visible = Array.from({ length: Math.min(VISIBLE, slides.length) }, (_, i) => {
    const idx = (start + i) % slides.length;
    return { shot: slides[idx], idx };
  });

  const step = (delta: number) => {
    setOpenIndex((i) => {
      if (i === null) return i;
      return (i + delta + slides.length) % slides.length;
    });
  };

  return (
    <div className="carousel">
      <div className="carousel__row">
        {visible.map(({ shot, idx }) => (
          <Tile key={shot.caption} shot={shot} onOpen={() => setOpenIndex(idx)} />
        ))}
      </div>

      {slides.length > VISIBLE && (
        <div className="carousel__dots">
          {slides.map((s, i) => (
            <span key={s.caption} className={`carousel__dot ${i === start ? "carousel__dot--active" : ""}`} aria-hidden="true" />
          ))}
        </div>
      )}

      {openIndex !== null && (
        <Lightbox slides={slides} index={openIndex} onClose={() => setOpenIndex(null)} onStep={step} />
      )}
    </div>
  );
}
