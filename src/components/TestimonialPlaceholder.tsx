import "./TestimonialPlaceholder.css";

export default function TestimonialPlaceholder() {
  return (
    <div className="testimonial-empty">
      {[0, 1, 2].map((i) => (
        <div className="testimonial-empty__slot" key={i}>
          <span className="testimonial-empty__mark">&ldquo;</span>
          <p>A leader's story will appear here once Vineward is in active use.</p>
          <div className="testimonial-empty__who">
            <span className="testimonial-empty__avatar" />
            <div>
              <span className="testimonial-empty__name">Reserved for a ministry leader</span>
              <span className="testimonial-empty__role">Name &amp; church, once shared</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
