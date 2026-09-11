import type { DownloadTarget } from "../lib/config";

type StoreId = DownloadTarget["id"];

const icons: Record<StoreId, JSX.Element> = {
  play: (
    <path d="M6 3.5l11.5 8.5L6 20.5V3.5z" />
  ),
  ios: (
    <path d="M15.3 4.2c.07 1-.32 1.9-.98 2.6-.68.72-1.68 1.24-2.6 1.17-.1-.96.35-1.94 1-2.6.68-.7 1.75-1.2 2.58-1.17zM17.6 17.9c-.5 1.1-.74 1.6-1.38 2.57-.9 1.34-2.16 3-3.72 3.02-1.4.02-1.76-.9-3.66-.9-1.9 0-2.3.88-3.7.92-1.5.05-2.65-1.45-3.55-2.78-1.93-2.8-2.4-6.5-.94-9.35.8-1.55 2.24-2.53 3.8-2.55 1.44-.02 2.8.97 3.66.97.86 0 2.5-1.2 4.22-1.02.72.03 2.72.3 4 2.2-.1.06-2.4 1.4-2.37 4.16.03 3.3 2.9 4.4 2.94 4.42z" />
  ),
  amazon: (
    <>
      <path d="M4.5 16c3.2 2.4 10.8 3 15 .6" />
      <path d="M17.5 14.5c.9-.2 2 .1 2 .8s-.9 2.2-1.6 2.8" />
      <rect x="7" y="4" width="10" height="10" rx="1.5" />
    </>
  ),
  samsung: (
    <>
      <rect x="4" y="5.5" width="16" height="13" rx="2" />
      <circle cx="12" cy="12" r="2.6" />
    </>
  ),
  apkpure: (
    <>
      <path d="M12 3.5l7.5 4.3v8.4L12 20.5l-7.5-4.3V7.8z" />
      <path d="M9.6 10.2v5l3.9-2.5z" fill="currentColor" stroke="none" />
    </>
  ),
};

export default function StoreIcon({ id, size = 18 }: { id: StoreId; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {icons[id]}
    </svg>
  );
}
