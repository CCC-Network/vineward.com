import "./LadderDiagram.css";

const stages = [
  {
    n: "1",
    name: "Win",
    detail: "A first connection is made and logged — who reached out, and who's responsible for what comes next.",
  },
  {
    n: "2",
    name: "Consolidate",
    detail: "The 48-hour follow-up, the visit, the call. Every new person is followed up with, not just remembered.",
  },
  {
    n: "3",
    name: "Disciple",
    detail: "Formation steps and mentoring sessions are tracked in order, so leaders know exactly where someone stands.",
  },
  {
    n: "4",
    name: "Send",
    detail: "Readiness is confirmed against real behavior and formation, not a guess — then a person is sent to lead.",
  },
];

export default function LadderDiagram() {
  return (
    <ol className="ladder">
      {stages.map((s, i) => (
        <li className="ladder__stage" key={s.name}>
          <div className="ladder__marker">
            <span className="ladder__num">{s.n}</span>
            {i < stages.length - 1 && <span className="ladder__connector" aria-hidden="true" />}
          </div>
          <div className="ladder__body">
            <h3>{s.name}</h3>
            <p>{s.detail}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
