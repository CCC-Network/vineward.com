import type { CSSProperties } from "react";

type Props = {
  className?: string;
  ariaHidden?: boolean;
  style?: CSSProperties;
};

/**
 * A single-stroke line-art rendering of Vineward's branching growth form.
 * Deliberately drawn as engraving-style linework (not the filled gold
 * icon) so it reads as a recurring editorial motif rather than a repeated
 * logo stamp.
 */
export default function TreeMotif({ className, ariaHidden = true, style }: Props) {
  return (
    <svg
      className={className}
      viewBox="0 0 420 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden={ariaHidden}
      role={ariaHidden ? undefined : "img"}
      style={style}
    >
      <g stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
        {/* trunk / root line */}
        <path d="M210 560 L210 300" />
        <path d="M210 300 C170 260 150 230 150 190" />
        <path d="M210 300 C250 260 270 230 270 190" />

        {/* tier 1 */}
        <path d="M150 190 C120 165 95 150 60 145" />
        <path d="M150 190 C165 150 175 120 172 78" />
        <path d="M270 190 C300 165 325 150 360 145" />
        <path d="M270 190 C255 150 245 120 248 78" />

        {/* tier 2 */}
        <path d="M172 78 C170 45 190 20 210 4" />
        <path d="M248 78 C250 45 230 20 210 4" />

        {/* leaf accents — small secondary offshoots */}
        <path d="M60 145 C48 128 44 108 52 88" opacity="0.55" />
        <path d="M360 145 C372 128 376 108 368 88" opacity="0.55" />
        <path d="M150 190 C130 205 108 210 88 202" opacity="0.55" />
        <path d="M270 190 C290 205 312 210 332 202" opacity="0.55" />
      </g>
      <g fill="currentColor" opacity="0.9">
        <circle cx="210" cy="4" r="3.4" />
        <circle cx="172" cy="78" r="3" />
        <circle cx="248" cy="78" r="3" />
        <circle cx="60" cy="145" r="2.6" />
        <circle cx="360" cy="145" r="2.6" />
        <circle cx="88" cy="202" r="2.2" />
        <circle cx="332" cy="202" r="2.2" />
      </g>
    </svg>
  );
}
