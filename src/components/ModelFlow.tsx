import "./ModelFlow.css";

const steps = [
  { name: "Observe", detail: "See who needs attention today" },
  { name: "Act", detail: "Assign the next step to the right leader" },
  { name: "Track", detail: "Record what actually happened" },
  { name: "Develop", detail: "Move people through formation" },
  { name: "Multiply", detail: "Grow the leaders who repeat it" },
];

export default function ModelFlow() {
  return (
    <div className="model-flow">
      {steps.map((s, i) => (
        <div className="model-flow__item" key={s.name}>
          <div className="model-flow__step">
            <span className="model-flow__name">{s.name}</span>
            <span className="model-flow__detail">{s.detail}</span>
          </div>
          {i < steps.length - 1 && <span className="model-flow__arrow" aria-hidden="true" />}
        </div>
      ))}
    </div>
  );
}
