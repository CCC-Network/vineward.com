import { usedBy } from "../lib/config";
import "./UsedBy.css";

export default function UsedBy() {
  return (
    <div className="used-by">
      <p className="used-by__note">Used and trusted by</p>
      <div className="used-by__row">
        {usedBy.map((org) => (
          <a key={org.name} href={org.url} target="_blank" rel="noreferrer" className="used-by__org">
            <img src={org.logo} alt={org.name} />
          </a>
        ))}
        {/* Reserved slots for churches and networks that adopt Vineward next. */}
        {Array.from({ length: Math.max(0, 3 - usedBy.length) }).map((_, i) => (
          <span key={i} className="used-by__slot" aria-hidden="true" />
        ))}
      </div>
    </div>
  );
}
