import { Link } from "react-router-dom";
import LadderDiagram from "../components/LadderDiagram";
import CascadeExample from "../components/CascadeExample";
import Reveal from "../components/Reveal";
import "./HowItWorks.css";

const questions = [
  "Who needs attention?",
  "What do I need to do today?",
  "Where is this person in the ladder?",
  "What has actually been completed?",
  "Who is progressing, and who is stuck?",
  "Who are my 12?",
  "How large is my network?",
  "Who is ready to be sent?",
];

const onboarding = [
  "Add a profile picture",
  "Enter your full name",
  "Connect to your leader",
  "Set your role",
  "Choose your network",
  "Choose your church or organization",
  "Confirm your status",
];

export default function HowItWorks() {
  return (
    <>
      <section className="section how-hero">
        <div className="container">
          <Reveal>
            <p className="section-kicker">How it works</p>
            <h1>A system built around one question at a time</h1>
            <p className="how-hero__lede">
              Vineward isn't a list of features bolted together. Every part of it exists to answer a
              small set of questions a ministry leader actually asks every week.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container questions-grid">
          <Reveal variant="left" className="section-head">
            <p className="section-kicker">The test</p>
            <h2>If it can't answer these, it isn't finished</h2>
            <p>
              This is the standard Vineward is held to. Open the app, and these questions should
              already be answered — not buried behind three menus.
            </p>
          </Reveal>
          <ul className="questions-list">
            {questions.map((q, i) => (
              <Reveal as="li" key={q} variant="right" delay={i * 50}>
                {q}
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="section how-ladder">
        <div className="container how-ladder__grid">
          <Reveal variant="left" className="section-head">
            <p className="section-kicker">Tracking</p>
            <h2>Win, Consolidate, Disciple, Send</h2>
            <p>
              Nothing about a person's progress lives in someone's memory. A Kamusta connection, a
              48-hour PIC follow-up, a Pre-Encounter session, a leader's confirmation before sending
              — each one is a real record tied to a real person.
            </p>
          </Reveal>
          <Reveal variant="right" delay={100}>
            <LadderDiagram />
          </Reveal>
        </div>
      </section>

      <section className="section cascade-section">
        <div className="container cascade-section__grid">
          <Reveal variant="left" className="section-head">
            <p className="section-kicker">Tasks, connected to tracking</p>
            <h2>One completed task, felt everywhere it matters</h2>
            <p>
              Tasks and tracking are never separate systems in Vineward. Completing a task updates a
              person's stage, their leader's view, the team dashboard, and their overdue status — in
              that order, automatically.
            </p>
          </Reveal>
          <Reveal variant="right" delay={100}>
            <CascadeExample />
          </Reveal>
        </div>
      </section>

      <section className="section onboarding-section">
        <div className="container onboarding-section__grid">
          <Reveal variant="left" className="section-head">
            <p className="section-kicker">Getting started</p>
            <h2>Seven short steps, and you can stop at any of them</h2>
            <p>
              Setting up a profile shouldn't feel like a form. Vineward asks for one thing at a
              time, lets you skip what isn't required yet, and picks up right where you left off.
            </p>
          </Reveal>
          <ol className="onboarding-list">
            {onboarding.map((step, i) => (
              <Reveal as="li" key={step} variant="right" delay={i * 50}>
                <span className="onboarding-list__num">{i + 1}</span>
                <span>{step}</span>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section how-cta">
        <div className="container how-cta__inner">
          <Reveal>
            <h2>See it running on your own team</h2>
          </Reveal>
          <Reveal variant="up" delay={80} className="how-cta__actions">
            <Link to="/download" className="btn btn--primary">
              Get Vineward
            </Link>
            <Link to="/materials" className="btn btn--ghost">
              Browse discipleship materials
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
