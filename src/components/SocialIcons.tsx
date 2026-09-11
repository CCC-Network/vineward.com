import { socials, type SocialPlatform } from "../lib/config";
import "./SocialIcons.css";

const icons: Record<SocialPlatform, JSX.Element> = {
  facebook: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M13.6 20.5v-6.3h2.1l.3-2.5h-2.4v-1.6c0-.72.2-1.22 1.24-1.22h1.33V6.66c-.23-.03-1.02-.1-1.94-.1-1.92 0-3.23 1.17-3.23 3.32v1.85H8.9v2.5h2.1v6.27" />
    </>
  ),
  tiktok: (
    <>
      <path d="M11 5v9.3a2.9 2.9 0 1 1-2.1-2.79" />
      <path d="M11 5c.35 2.55 1.9 4.05 4.1 4.25" />
    </>
  ),
  youtube: (
    <>
      <rect x="3.5" y="6.5" width="17" height="11" rx="3" />
      <path d="M10.6 9.9l4 2.1-4 2.1z" fill="currentColor" stroke="none" />
    </>
  ),
  instagram: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="4.5" />
      <circle cx="12" cy="12" r="3.4" />
      <circle cx="16.7" cy="7.3" r="0.9" fill="currentColor" stroke="none" />
    </>
  ),
};

export default function SocialIcons() {
  return (
    <ul className="social-icons">
      {socials.map((s) => (
        <li key={s.platform}>
          <a href={s.url} target="_blank" rel="noreferrer" aria-label={s.label} className="social-icons__link">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {icons[s.platform]}
            </svg>
          </a>
        </li>
      ))}
    </ul>
  );
}
