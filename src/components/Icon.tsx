type IconName = "pulse" | "tree" | "task" | "offline" | "globe" | "shield" | "layers" | "compass";

const paths: Record<IconName, JSX.Element> = {
  pulse: (
    <path d="M3 12h4l2.5-7 4 14L16 12h5" />
  ),
  tree: (
    <>
      <path d="M12 3v18" />
      <path d="M12 8c-3 0-5-2-5-2M12 8c3 0 5-2 5-2" />
      <path d="M12 13c-4 0-6.5-2.5-6.5-2.5M12 13c4 0 6.5-2.5 6.5-2.5" />
    </>
  ),
  task: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M8 12l2.5 2.5L16 9" />
    </>
  ),
  offline: (
    <>
      <path d="M3 9a15 15 0 0 1 18 0" opacity="0.4" />
      <path d="M6.5 12.5a9.5 9.5 0 0 1 11 0" opacity="0.7" />
      <path d="M10 16a4.5 4.5 0 0 1 4 0" />
      <circle cx="12" cy="19.5" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17" />
      <path d="M12 3.5c2.7 2.4 4.2 5.4 4.2 8.5s-1.5 6.1-4.2 8.5c-2.7-2.4-4.2-5.4-4.2-8.5S9.3 5.9 12 3.5z" />
    </>
  ),
  shield: (
    <path d="M12 3.5l7 2.7v5.3c0 4.6-3 7.9-7 9-4-1.1-7-4.4-7-9V6.2z" />
  ),
  layers: (
    <>
      <path d="M12 3.5l8 4.3-8 4.3-8-4.3z" />
      <path d="M4 12.2l8 4.3 8-4.3" />
      <path d="M4 16.5l8 4.3 8-4.3" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M14.6 9.4l-2 5.2-5.2 2 2-5.2z" />
    </>
  ),
};

export default function Icon({ name, size = 22 }: { name: IconName; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
