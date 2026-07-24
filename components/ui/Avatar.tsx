/**
 * Deterministic generated avatars.
 *
 * The reference site uses stock founder photography; we render equivalent
 * abstract portraits as inline SVG so the component ships zero image
 * requests and stays crisp at any density.
 */

const palettes = [
  ["#ff4d00", "#7a1f00"],
  ["#2b2b2b", "#0c0c0c"],
  ["#ff7a3d", "#a33200"],
  ["#4a4a4a", "#1a1a1a"],
  ["#ff5c1a", "#331000"],
] as const;

export function Avatar({
  seed,
  initials,
  size = 32,
  className = "",
}: {
  seed: number;
  initials?: string;
  size?: number;
  className?: string;
}) {
  const [from, to] = palettes[seed % palettes.length];
  const gradientId = `av-${seed}`;

  return (
    <span
      className={`relative inline-block shrink-0 overflow-hidden rounded-full ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 64 64" className="size-full">
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={from} />
            <stop offset="100%" stopColor={to} />
          </linearGradient>
        </defs>
        <rect width="64" height="64" fill={`url(#${gradientId})`} />
        {/* Simplified silhouette: head + shoulders */}
        <circle cx="32" cy="25" r="11" fill="rgba(0,0,0,0.28)" />
        <path
          d="M8 64c0-13.3 10.7-22 24-22s24 8.7 24 22z"
          fill="rgba(0,0,0,0.28)"
        />
        {initials ? (
          <text
            x="32"
            y="38"
            textAnchor="middle"
            fontSize="20"
            fontWeight="600"
            fill="rgba(255,255,255,0.9)"
            fontFamily="Inter, sans-serif"
          >
            {initials}
          </text>
        ) : null}
      </svg>
    </span>
  );
}

/** Overlapping row of avatars used in the hero's social-proof cluster. */
export function AvatarStack({ count = 5 }: { count?: number }) {
  return (
    <div className="flex -space-x-2.5">
      {Array.from({ length: count }).map((_, index) => (
        <Avatar
          key={index}
          seed={index}
          size={32}
          className="ring-2 ring-canvas"
        />
      ))}
    </div>
  );
}
