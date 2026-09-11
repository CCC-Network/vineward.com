import Reveal from "../components/Reveal";
import "./Docs.css";

const sections = [
  {
    title: "Getting started",
    items: [
      {
        q: "Setting up your profile",
        a: "The first time you open Vineward, you'll walk through seven short steps: photo, name, your leader, your role, your network, your church, and a status confirmation. You can stop at any step and pick up later.",
      },
      {
        q: "Signing in on a new device",
        a: "Sign in with the same account you registered with. Your role and network connections carry over automatically \u2014 nothing needs to be re-entered.",
      },
    ],
  },
  {
    title: "Roles & visibility",
    items: [
      {
        q: "What a leader can see",
        a: "A leader sees the people they're directly responsible for, plus their own team. Nothing outside that scope is visible \u2014 this is enforced at the data level, not just hidden in the interface.",
      },
      {
        q: "What a pastor can see",
        a: "A pastor sees their full organization: every leader, every network, and how each one is progressing.",
      },
    ],
  },
  {
    title: "Tracking & the ladder",
    items: [
      {
        q: "Moving someone through a stage",
        a: "Open a person's profile and mark the relevant step complete \u2014 a Kamusta connection, a consolidation follow-up, a formation session. Their stage on the ladder updates immediately.",
      },
      {
        q: "How tasks relate to tracking",
        a: "Completing a task tied to a person updates their tracking record automatically. You never have to update the same information in two places.",
      },
    ],
  },
  {
    title: "Working offline",
    items: [
      {
        q: "What happens without a connection",
        a: "Everything you enter \u2014 visits, tasks, notes \u2014 is saved to your device first. Once a connection returns, it syncs automatically in the background.",
      },
    ],
  },
];

export default function Docs() {
  return (
    <>
      <section className="section docs-hero">
        <div className="container">
          <Reveal>
            <p className="section-kicker">Docs</p>
            <h1>How to use Vineward</h1>
            <p className="docs-hero__lede">
              A short reference for common questions. This grows as the app does — reach out if
              something you need isn't covered yet.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section docs-section">
        <div className="container docs-grid">
          {sections.map((s, si) => (
            <Reveal as="div" key={s.title} className="docs-block" delay={si * 60}>
              <h2>{s.title}</h2>
              <dl>
                {s.items.map((item) => (
                  <div className="docs-item" key={item.q}>
                    <dt>{item.q}</dt>
                    <dd>{item.a}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
