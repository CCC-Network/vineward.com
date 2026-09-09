import "./CascadeExample.css";

const steps = [
  { label: "Task", detail: "\u201cPIC follow-up \u2014 Mark\u201d is marked complete" },
  { label: "Tracking", detail: "Mark's Consolidate step is recorded as done" },
  { label: "Leadership", detail: "His leader's consolidation progress updates" },
  { label: "Dashboard", detail: "Team metrics reflect it immediately" },
  { label: "Notification", detail: "Mark is no longer shown as overdue" },
];

export default function CascadeExample() {
  return (
    <div className="cascade">
      {steps.map((s, i) => (
        <div className="cascade__row" key={s.label}>
          <div className="cascade__rail">
            <span className="cascade__dot" />
            {i < steps.length - 1 && <span className="cascade__line" />}
          </div>
          <div className="cascade__text">
            <span className="cascade__label">{s.label}</span>
            <span className="cascade__detail">{s.detail}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
