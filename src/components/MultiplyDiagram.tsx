import "./MultiplyDiagram.css";

const tiers = [
  { label: "You", count: "1" },
  { label: "Your circle", count: "12" },
  { label: "Their circles", count: "144" },
  { label: "And onward", count: "1,728" },
];

export default function MultiplyDiagram() {
  return (
    <div className="multiply">
      {tiers.map((t, i) => (
        <div className="multiply__tier" key={t.label} style={{ opacity: 1 - i * 0.14 }}>
          <div className="multiply__row">
            {Array.from({ length: Math.min(i + 1, 6) }).map((_, dotIndex) => (
              <span className="multiply__dot" key={dotIndex} />
            ))}
            {i === 3 && <span className="multiply__more">and on from there</span>}
          </div>
          <div className="multiply__label">
            <span className="multiply__count">{t.count}</span>
            <span>{t.label}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
