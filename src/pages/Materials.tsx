import { Link } from "react-router-dom";
import "./Materials.css";

const materials = [
  {
    name: "Fundamentals",
    body: "The foundational teaching every new believer starts with — the base for everything that follows.",
  },
  {
    name: "Pre-Encounter",
    body: "Preparation sessions ahead of an Encounter weekend, built to be walked through with a mentor.",
  },
  {
    name: "Encounter",
    body: "The core Encounter material, structured for facilitators and participants alike.",
  },
  {
    name: "Post-Encounter",
    body: "Follow-through content for the weeks right after an Encounter, while it's still fresh.",
  },
  {
    name: "Lifegroup Essentials",
    body: "What a Lifegroup leader needs to open, guide, and close a healthy small group session.",
  },
  {
    name: "SUNYL — 12 Lessons",
    body: "A twelve-lesson track for steady, sequential growth over a full season.",
  },
];

export default function Materials() {
  return (
    <>
      <section className="section materials-hero">
        <div className="container">
          <p className="section-kicker">Materials</p>
          <h1>Resources for every stage of the ladder</h1>
          <p className="materials-hero__lede">
            Vineward pairs tracking with the material each stage actually calls for, so a leader
            never has to go looking for the right lesson in a separate folder or group chat.
          </p>
        </div>
      </section>

      <section className="section materials-list-section">
        <div className="container">
          <ul className="materials-list">
            {materials.map((m) => (
              <li key={m.name} className="materials-list__row">
                <h3>{m.name}</h3>
                <p>{m.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section materials-access">
        <div className="container materials-access__inner">
          <div>
            <h2>Access is verified inside the app</h2>
            <p>
              Materials unlock once a purchase is confirmed — no separate download links to hunt
              for, and nothing exposed before it's verified. Reach the church directly if you have
              questions about a specific material.
            </p>
          </div>
          <div className="materials-access__actions">
            <Link to="/download" className="btn btn--primary">
              Get Vineward
            </Link>
            <Link to="/contact" className="btn btn--ghost">
              Ask a question
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
