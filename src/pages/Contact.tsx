import { contacts } from "../lib/config";
import "./Contact.css";

const rows = [contacts.church, contacts.pastor, contacts.pastorNetwork, contacts.developer];

export default function Contact() {
  return (
    <>
      <section className="section contact-hero">
        <div className="container">
          <p className="section-kicker">Contact</p>
          <h1>Reach the right person directly</h1>
          <p className="contact-hero__lede">
            No ticketing system, no forms into the void — just the people behind Vineward and the
            church it grew out of.
          </p>
        </div>
      </section>

      <section className="section contact-list-section">
        <div className="container">
          <ul className="contact-list">
            {rows.map((c) => (
              <li key={c.email} className="contact-row">
                <div>
                  <span className="contact-row__role">{c.role}</span>
                  <h3>{c.label}</h3>
                </div>
                <a href={`mailto:${c.email}`} className="btn btn--ghost btn--sm">
                  {c.email}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
