import "./TrustedByPlaceholder.css";

export default function TrustedByPlaceholder() {
  return (
    <div className="trusted">
      <p className="trusted__note">
        Used and trusted by — reserved for the churches and networks that adopt Vineward.
      </p>
      <div className="trusted__row">
        {Array.from({ length: 5 }).map((_, i) => (
          <span className="trusted__slot" key={i} />
        ))}
      </div>
    </div>
  );
}
