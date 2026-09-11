import { directDownload, downloadTargets, webAccess, type DownloadTarget } from "../lib/config";
import StoreIcon from "./StoreIcon";
import "./DownloadButtons.css";

function TargetButton({
  id,
  label,
  detail,
  href,
}: {
  id?: DownloadTarget["id"];
  label: string;
  detail: string;
  href: string | null;
}) {
  const content = (
    <>
      {id && (
        <span className="dl-btn__icon">
          <StoreIcon id={id} />
        </span>
      )}
      <span className="dl-btn__text">
        <span className="dl-btn__label">{label}</span>
        <span className="dl-btn__detail">{href ? detail : "In review \u2014 not yet live"}</span>
      </span>
    </>
  );

  if (href) {
    return (
      <a className="dl-btn" href={href} target="_blank" rel="noreferrer">
        {content}
      </a>
    );
  }
  return (
    <button type="button" className="dl-btn dl-btn--pending" disabled>
      {content}
    </button>
  );
}

/** Vineward's own icon with small iOS/Android badges tucked at the corner —
 * used for the "traditional" direct-download route, since it isn't tied
 * to either OS the way a store badge is. */
function TraditionalDownloadIcon() {
  return (
    <span className="dl-icon-stack" aria-hidden="true">
      <img src="/assets/vineward-icon.png" alt="" className="dl-icon-stack__mark" />
      <span className="dl-icon-stack__badge dl-icon-stack__badge--android">
        <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" stroke="none">
          <path d="M6.5 8.2v6.4a1 1 0 0 0 1 1h.7v3a1.3 1.3 0 0 0 2.6 0v-3h2.4v3a1.3 1.3 0 0 0 2.6 0v-3h.7a1 1 0 0 0 1-1V8.2zM8.8 5.9l-1-1.6M15.2 5.9l1-1.6M7.5 3.8a7 7 0 0 1 9 0" />
        </svg>
      </span>
      <span className="dl-icon-stack__badge dl-icon-stack__badge--ios">
        <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" stroke="none">
          <path d="M15.3 4.2c.07 1-.32 1.9-.98 2.6-.68.72-1.68 1.24-2.6 1.17-.1-.96.35-1.94 1-2.6.68-.7 1.75-1.2 2.58-1.17zM17.6 17.9c-.5 1.1-.74 1.6-1.38 2.57-.9 1.34-2.16 3-3.72 3.02-1.4.02-1.76-.9-3.66-.9-1.9 0-2.3.88-3.7.92-1.5.05-2.65-1.45-3.55-2.78-1.93-2.8-2.4-6.5-.94-9.35.8-1.55 2.24-2.53 3.8-2.55 1.44-.02 2.8.97 3.66.97.86 0 2.5-1.2 4.22-1.02.72.03 2.72.3 4 2.2-.1.06-2.4 1.4-2.37 4.16.03 3.3 2.9 4.4 2.94 4.42z" />
        </svg>
      </span>
    </span>
  );
}

function DirectDownloadButton() {
  const content = (
    <>
      <TraditionalDownloadIcon />
      <span className="dl-btn__text">
        <span className="dl-btn__label">{directDownload.label}</span>
        <span className="dl-btn__detail">
          {directDownload.href ? directDownload.detail : "In review \u2014 not yet live"}
        </span>
      </span>
    </>
  );

  if (directDownload.href) {
    return (
      <a className="dl-btn dl-btn--wide" href={directDownload.href} download={directDownload.fileName}>
        {content}
      </a>
    );
  }
  return (
    <button type="button" className="dl-btn dl-btn--wide dl-btn--pending" disabled>
      {content}
    </button>
  );
}

export default function DownloadButtons() {
  return (
    <div className="dl-group">
      <div className="dl-grid">
        {downloadTargets.map((t) => (
          <TargetButton key={t.id} id={t.id} label={t.label} detail={t.detail} href={t.href} />
        ))}
      </div>

      <div className="dl-alt">
        <DirectDownloadButton />
        <TargetButton label={webAccess.label} detail={webAccess.detail} href={webAccess.href} />
      </div>
    </div>
  );
}
