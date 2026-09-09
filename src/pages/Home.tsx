import { Link } from "react-router-dom";
import TreeMotif from "../components/TreeMotif";
import ModelFlow from "../components/ModelFlow";
import LadderDiagram from "../components/LadderDiagram";
import MultiplyDiagram from "../components/MultiplyDiagram";
import DownloadButtons from "../components/DownloadButtons";
import TestimonialPlaceholder from "../components/TestimonialPlaceholder";
import TrustedByPlaceholder from "../components/TrustedByPlaceholder";
import Icon from "../components/Icon";
import "./Home.css";

const features: { icon: Parameters<typeof Icon>[0]["name"]; title: string; body: string }[] = [
  {
    icon: "pulse",
    title: "The Action Center",
    body: "Home doesn't dump every feature on you. It surfaces who's overdue, who needs attention, and what's due today — pulled from real activity, not a separate list you have to maintain.",
  },
  {
    icon: "task",
    title: "Tasks that move people forward",
    body: "Complete a follow-up task and the person's stage updates with it. Tracking and tasks share one source of truth, so nothing gets marked done in one place and forgotten in another.",
  },
  {
    icon: "tree",
    title: "A leadership tree with no ceiling",
    body: "See your 12, and how their 12 are doing, as far down the line as your network reaches. Leadership visibility doesn't stop at your own list.",
  },
  {
    icon: "offline",
    title: "Works without signal",
    body: "Log a visit in a basement fellowship hall or a rural outreach with no bars. Everything you enter is saved locally first and syncs the moment a connection returns.",
  },
  {
    icon: "globe",
    title: "Built for more than one language",
    body: "English, Filipino, Russian, Polish, Japanese, Hindi, and German are supported from day one, so a network isn't limited to leaders who read English.",
  },
  {
    icon: "shield",
    title: "Private by design",
    body: "A leader sees their own disciples and their team. A pastor sees their organization. Nobody sees more than their role allows — enforced at the data level, not just hidden in the interface.",
  },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero__grid">
          <div className="hero__copy">
            <p className="section-kicker">A discipleship operating system</p>
            <h1>
              Grow people.
              <br />
              Form leaders.
              <br />
              Multiply generations.
            </h1>
            <p className="hero__lede">
              Vineward gives ministry leaders one place to see who needs attention, what to do about
              it, and where every person actually stands — from a first connection to being sent to lead.
            </p>
            <div className="hero__actions">
              <Link to="/download" className="btn btn--primary">
                Get Vineward
              </Link>
              <Link to="/how-it-works" className="btn btn--ghost">
                See how it works
              </Link>
            </div>
          </div>

          <div className="hero__visual" aria-hidden="true">
            <TreeMotif className="hero__tree" />
          </div>
        </div>
      </section>

      <section className="section section--tight trusted-section">
        <div className="container">
          <TrustedByPlaceholder />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="section-kicker">The operating model</p>
            <h2>Five moves, repeated with every person</h2>
            <p>
              Every screen in Vineward exists to support this loop — noticing what needs to happen,
              acting on it, recording the truth of what was done, moving people through formation,
              and growing the leaders who can carry it themselves.
            </p>
          </div>
          <ModelFlow />
        </div>
      </section>

      <section className="section ladder-section">
        <div className="container ladder-section__grid">
          <div className="section-head">
            <p className="section-kicker">The ladder</p>
            <h2>
              Every person is somewhere on <span className="serif-italic">the ladder</span>
            </h2>
            <p>
              Win, Consolidate, Disciple, Send — this is the backbone Vineward is built around. A
              leader can look at any name and know exactly what stage they're in and what's next,
              instead of relying on memory or a spreadsheet nobody updates.
            </p>
          </div>
          <LadderDiagram />
        </div>
      </section>

      <section className="section features-section">
        <div className="container">
          <div className="section-head">
            <p className="section-kicker">What it does</p>
            <h2>Built around tracking, not features for their own sake</h2>
          </div>
          <div className="features-grid">
            {features.map((f) => (
              <div className="feature-row" key={f.title}>
                <div className="feature-row__icon">
                  <Icon name={f.icon} />
                </div>
                <div>
                  <h3>{f.title}</h3>
                  <p>{f.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section multiply-section">
        <div className="container multiply-section__grid">
          <div className="section-head">
            <p className="section-kicker">Leadership &amp; multiplication</p>
            <h2>Watch a network grow, not just a list of names</h2>
            <p>
              Vineward's My 12 view shows your direct circle and how they're leading their own.
              There's no fixed depth — the tree keeps going as far as your network actually does,
              so multiplication is something you can see, not just talk about.
            </p>
            <Link to="/how-it-works" className="btn btn--ghost">
              Explore leadership tools
            </Link>
          </div>
          <MultiplyDiagram />
        </div>
      </section>

      <section className="section testimonial-section">
        <div className="container">
          <div className="section-head">
            <p className="section-kicker">From ministry leaders</p>
            <h2>Stories from the field</h2>
          </div>
          <TestimonialPlaceholder />
        </div>
      </section>

      <section className="section cta-section">
        <div className="container cta-section__inner">
          <div>
            <h2>Ready to see it on your own team?</h2>
            <p>Get Vineward on your device, or reach the church directly if you'd rather talk first.</p>
          </div>
          <DownloadButtons />
        </div>
      </section>
    </>
  );
}
