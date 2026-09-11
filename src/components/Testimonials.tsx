import { testimonials } from "../lib/config";
import "./Testimonials.css";

const MIN_SLOTS = 3;

export default function Testimonials() {
  const emptySlots = Math.max(0, MIN_SLOTS - testimonials.length);

  return (
    <div className="testimonials">
      {testimonials.map((t) => (
        <div className="testimonial-card" key={t.name}>
          <span className="testimonial-card__mark">&ldquo;</span>
          <p>{t.quote}</p>
          <div className="testimonial-card__who">
            {t.avatar ? (
              <img src={t.avatar} alt={t.name} className="testimonial-card__avatar" />
            ) : (
              <span className="testimonial-card__avatar testimonial-card__avatar--placeholder" aria-hidden="true" />
            )}
            <div>
              <span className="testimonial-card__name">{t.name}</span>
              <span className="testimonial-card__role">{t.role}</span>
            </div>
          </div>
        </div>
      ))}

      {Array.from({ length: emptySlots }).map((_, i) => (
        <div className="testimonial-card testimonial-card--empty" key={i}>
          <span className="testimonial-card__mark">&ldquo;</span>
          <p>A leader's story will appear here once Vineward is in active use.</p>
          <div className="testimonial-card__who">
            <span className="testimonial-card__avatar testimonial-card__avatar--placeholder" aria-hidden="true" />
            <div>
              <span className="testimonial-card__name">Reserved for a ministry leader</span>
              <span className="testimonial-card__role">Name &amp; church, once shared</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
