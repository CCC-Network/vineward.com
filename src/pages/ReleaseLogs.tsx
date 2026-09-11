import Reveal from "../components/Reveal";
import "./ReleaseLogs.css";

const releases = [
  {
    version: "Pre-launch",
    date: "In progress",
    notes: [
      "Core tracking through the ladder: Win, Consolidate, Disciple, Send",
      "The Action Center, surfacing who needs attention today",
      "Tasks connected directly to a person's tracking record",
      "My 12 leadership view, with unlimited network depth",
      "Offline-first data entry with background sync",
      "Support for English, Filipino, Russian, Polish, Japanese, Hindi, and German",
    ],
  },
];

export default function ReleaseLogs() {
  return (
    <section className="section release-hero">
      <div className="container">
        <Reveal>
          <p className="section-kicker">Release logs</p>
          <h1>What's changed, and when</h1>
          <p className="release-hero__lede">
            Vineward is still ahead of its first public release. This page will fill in with dated
            entries as versions ship — for now, here's what's been built so far.
          </p>
        </Reveal>

        <div className="release-list">
          {releases.map((r) => (
            <Reveal as="div" key={r.version} className="release-entry">
              <div className="release-entry__meta">
                <h2>{r.version}</h2>
                <span>{r.date}</span>
              </div>
              <ul>
                {r.notes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            </Reveal>
          ))}

          <Reveal as="div" className="release-entry release-entry--future">
            <div className="release-entry__meta">
              <h2>What's next</h2>
              <span>Reserved</span>
            </div>
            <p>Future releases will be logged here as they ship.</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
