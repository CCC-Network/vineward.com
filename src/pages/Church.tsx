import { church, contacts } from "../lib/config";
import Reveal from "../components/Reveal";
import "./Church.css";

export default function Church() {
  return (
    <>
      <section className="section church-hero">
        <div className="container">
          <Reveal>
            <p className="section-kicker">The church behind Vineward</p>
            <h1>{church.name}</h1>
            <p className="church-hero__lede">
              Vineward was built inside a real church, for real follow-up — not designed in the
              abstract and handed to ministries afterward. It carries the same conviction Shelter of
              Praise leads with: every person is worth tracking, not just counting.
            </p>
            <div className="church-hero__actions">
              <a href={church.url} target="_blank" rel="noreferrer" className="btn btn--primary">
                Visit the church site
              </a>
              <a href={`mailto:${church.email}`} className="btn btn--ghost">
                Email the church
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <Reveal variant="fade" className="church-banner">
            <img src="/assets/shelter-of-praise-banner.png" alt={church.name} />
          </Reveal>
        </div>
      </section>

      <section className="section church-details">
        <div className="container church-details__grid">
          <Reveal delay={0}>
            <h3>Church office</h3>
            <p>{contacts.church.email}</p>
          </Reveal>
          <Reveal delay={80}>
            <h3>Senior Pastor</h3>
            <p>{contacts.pastor.label}</p>
            <p>{contacts.pastor.email}</p>
          </Reveal>
          <Reveal delay={160}>
            <h3>Pastor's network</h3>
            <p>{contacts.pastorNetwork.label}</p>
            <p>{contacts.pastorNetwork.email}</p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
