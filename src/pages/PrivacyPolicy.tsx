import { church, contacts } from "../lib/config";
import Reveal from "../components/Reveal";
import "./PrivacyPolicy.css";

const sections = [
  {
    title: "What this covers",
    body: "This policy explains how Vineward, the discipleship tracking app built for Shelter of Praise Assembly of God, handles information. It covers the app itself \u2014 not the church's website, which may have its own policy.",
  },
  {
    title: "Information we collect",
    body: "When you create a Vineward account, we collect your name, a profile photo if you add one, your role, and your connection to a leader and network. As you use the app, leaders enter tracking information about the people they're discipling \u2014 stage on the ladder, follow-up notes, and task completion \u2014 tied to a name.",
  },
  {
    title: "How information is used",
    body: "Tracking information exists to help leaders follow up well and to give pastors an accurate view of their organization. It is not used for advertising, and it is not sold or shared with anyone outside your church's leadership structure.",
  },
  {
    title: "Who can see what",
    body: "Access is scoped to role. A leader sees the people directly under their care and their own team. A pastor sees their full organization. This is enforced by the app itself, not left to good intentions.",
  },
  {
    title: "Offline data & syncing",
    body: "Vineward saves what you enter on your device first, so it works without a signal. That data syncs to the church's records the next time your device reconnects.",
  },
  {
    title: "Data retention",
    body: "Records are kept for as long as your church continues to use Vineward for discipleship tracking. If you'd like a record corrected or removed, contact the church office and it will be handled directly.",
  },
  {
    title: "Contact",
    body: `Questions about this policy or a request about your data can go to ${church.email}, or to ${contacts.developer.email} for anything technical.`,
  },
];

export default function PrivacyPolicy() {
  return (
    <section className="section privacy-hero">
      <div className="container">
        <Reveal>
          <p className="section-kicker">Privacy policy</p>
          <h1>How Vineward handles your information</h1>
          <p className="privacy-hero__lede">
            Last reviewed alongside this site's build. If anything here is unclear, {" "}
            <a href={`mailto:${church.email}`}>reach the church directly</a> and it will be
            answered plainly.
          </p>
        </Reveal>

        <div className="privacy-list">
          {sections.map((s, i) => (
            <Reveal as="div" key={s.title} className="privacy-block" delay={i * 40}>
              <h2>{s.title}</h2>
              <p>{s.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
