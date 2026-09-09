import { directDownload, downloadTargets, webAccess } from "../lib/config";
import "./DownloadButtons.css";

function TargetButton({
  label,
  detail,
  href,
}: {
  label: string;
  detail: string;
  href: string | null;
}) {
  if (href) {
    return (
      <a className="dl-btn" href={href} target="_blank" rel="noreferrer">
        <span className="dl-btn__label">{label}</span>
        <span className="dl-btn__detail">{detail}</span>
      </a>
    );
  }
  return (
    <button type="button" className="dl-btn dl-btn--pending" disabled>
      <span className="dl-btn__label">{label}</span>
      <span className="dl-btn__detail">In review &mdash; not yet live</span>
    </button>
  );
}

export default function DownloadButtons() {
  return (
    <div className="dl-group">
      <div className="dl-grid">
        {downloadTargets.map((t) => (
          <TargetButton key={t.id} label={t.label} detail={t.detail} href={t.href} />
        ))}
      </div>

      <div className="dl-alt">
        <TargetButton label={directDownload.label} detail={directDownload.detail} href={directDownload.href} />
        <TargetButton label={webAccess.label} detail={webAccess.detail} href={webAccess.href} />
      </div>
    </div>
  );
}
