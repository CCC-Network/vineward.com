import { Link } from "react-router-dom";
import { materials, pastorMinistry } from "../lib/config";
import Reveal from "../components/Reveal";
import "./Materials.css";

export default function Materials() {
  return (
    <>
      <section className="section materials-hero">
        <div className="container">
          <Reveal>
            <p className="section-kicker">Materials</p>
            <h1>Resources for every stage of the ladder</h1>
            <p className="materials-hero__lede">
              Vineward pairs tracking with the material each stage actually calls for, so a leader
              never has to go looking for the right lesson in a separate folder or group chat.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section materials-list-section">
        <div className="container">
          <ul className="materials-list">
            {materials.map((m, i) => (
              <Reveal as="li" key={m.name} className="materials-list__row" delay={i * 60}>
                <h3>
                  {m.name}
                  {m.aka && <span className="materials-list__aka">{" \u2014 "}{m.aka}</span>}
                </h3>
                <p>{m.body}</p>
              </Reveal>
            ))}
          </ul>

          <Reveal className="materials-visit">
            <a href={pastorMinistry.url} target="_blank" rel="noreferrer" className="btn btn--ghost">
              {pastorMinistry.label}
            </a>
          </Reveal>
        </div>
      </section>

      <section className="section materials-access">
        <div className="container materials-access__inner">
          <Reveal variant="left">
            <h2>Access is verified inside the app</h2>
            <p>
              Materials unlock once a purchase is confirmed — no separate download links to hunt
              for, and nothing exposed before it's verified. Reach the church directly if you have
              questions about a specific material.
            </p>
          </Reveal>
          <Reveal variant="right" className="materials-access__actions">
            <Link to="/download" className="btn btn--primary">
              Get Vineward
            </Link>
            <Link to="/contact" className="btn btn--ghost">
              Ask a question
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
