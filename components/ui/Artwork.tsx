/**
 * Generated artwork.
 *
 * The reference site fills its cards with stock photography and licensed
 * mockups. Rather than reuse those files, this module renders original
 * vector compositions in the brand's visual language — deep indigo grounds,
 * violet light, hard geometry and fine grain — so layout, aspect
 * ratios and contrast behave identically. Every piece is pure SVG/CSS:
 * no network requests, infinitely scalable, and themable from tokens.
 */

type ArtProps = { className?: string };

/* ------------------------------------------------------------------ */
/*  Shared building blocks                                             */
/* ------------------------------------------------------------------ */

function Grain({ opacity = 0.22 }: { opacity?: number }) {
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 mix-blend-overlay"
      style={{
        opacity,
        backgroundImage: "url(/textures/grain.svg)",
        backgroundSize: "160px 160px",
      }}
    />
  );
}

function Frame({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative size-full overflow-hidden bg-night ${className}`}
      aria-hidden="true"
    >
      {children}
      <Grain />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Project artwork                                                    */
/* ------------------------------------------------------------------ */

/** Archin — architectural grid, violet light spill through a facade. */
function ArchinArt() {
  return (
    <Frame>
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 78% 18%, #7C3AED 0%, #3D2A7A 32%, #17162B 68%, #1A1A2E 100%)",
        }}
      />
      <svg
        viewBox="0 0 800 500"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 size-full"
      >
        <defs>
          <linearGradient id="ar-glass" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#A78BFA" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.05" />
          </linearGradient>
        </defs>
        {/* Facade slabs */}
        {Array.from({ length: 9 }).map((_, i) => (
          <rect
            key={`slab-${i}`}
            x={90 + i * 72}
            y={60 + (i % 3) * 26}
            width="46"
            height={380 - (i % 3) * 40}
            fill="#1A1A2E"
            opacity={0.62}
          />
        ))}
        {/* Glazing bands */}
        {Array.from({ length: 6 }).map((_, i) => (
          <rect
            key={`band-${i}`}
            x="70"
            y={110 + i * 58}
            width="680"
            height="8"
            fill="url(#ar-glass)"
          />
        ))}
        <rect
          x="70"
          y="60"
          width="680"
          height="384"
          fill="none"
          stroke="rgba(255,255,255,0.14)"
        />
      </svg>
    </Frame>
  );
}

/** VNTNR — an editorial wine label: deep vertical panel over violet ground. */
function VntnrArt() {
  return (
    <Frame>
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(115deg, #E4E1F5 0%, #7A52D8 38%, #4A1D96 62%, #1F1B4D 100%)",
        }}
      />
      <svg
        viewBox="0 0 800 500"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 size-full"
      >
        <defs>
          <linearGradient id="vn-panel" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2D2B6B" stopOpacity="0.94" />
            <stop offset="55%" stopColor="#35236A" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#1F1B4D" stopOpacity="0.96" />
          </linearGradient>
        </defs>
        {/* Soft produce forms echoing the original photography */}
        <circle cx="112" cy="126" r="98" fill="#6D3BD1" opacity="0.85" />
        <circle cx="150" cy="392" r="118" fill="#5B21B6" opacity="0.9" />
        <circle cx="690" cy="150" r="132" fill="#5B21B6" opacity="0.86" />
        <circle cx="726" cy="424" r="96" fill="#6D3BD1" opacity="0.8" />
        {/* Label panel */}
        <rect x="272" y="0" width="256" height="500" fill="url(#vn-panel)" />
        <line
          x1="300"
          y1="52"
          x2="500"
          y2="52"
          stroke="rgba(255,255,255,0.75)"
          strokeWidth="1.5"
        />
        {Array.from({ length: 4 }).map((_, i) => (
          <rect
            key={`nav-${i}`}
            x="300"
            y={196 + i * 26}
            width={[74, 66, 100, 128][i]}
            height="10"
            rx="1"
            fill="rgba(255,255,255,0.82)"
          />
        ))}
        <text
          x="400"
          y="450"
          textAnchor="middle"
          fill="#ffffff"
          fontFamily="Inter, sans-serif"
          fontSize="72"
          fontWeight="700"
          letterSpacing="2"
        >
          VNTNR
        </text>
      </svg>
    </Frame>
  );
}

/** Aeorim — a portrait poster on a concrete wall, sunset gradient. */
function AeorimArt() {
  return (
    <Frame>
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(160deg, #26243F 0%, #1A1A2E 55%, #100F1F 100%)",
        }}
      />
      <svg
        viewBox="0 0 800 500"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 size-full"
      >
        <defs>
          <linearGradient id="ae-poster" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#DDD3FB" />
            <stop offset="45%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#1F1B4D" />
          </linearGradient>
        </defs>
        {/* Wall panel joints */}
        {Array.from({ length: 4 }).map((_, i) => (
          <line
            key={`v-${i}`}
            x1={160 + i * 160}
            y1="0"
            x2={160 + i * 160}
            y2="500"
            stroke="rgba(255,255,255,0.07)"
            strokeWidth="2"
          />
        ))}
        <line
          x1="0"
          y1="180"
          x2="800"
          y2="180"
          stroke="rgba(255,255,255,0.07)"
          strokeWidth="2"
        />
        {/* Poster */}
        <rect x="332" y="96" width="136" height="300" fill="url(#ae-poster)" />
        <path
          d="M400 208c22 0 36 16 36 40v148h-72V248c0-24 14-40 36-40Z"
          fill="rgba(26,26,46,0.62)"
        />
        <circle cx="400" cy="186" r="26" fill="rgba(26,26,46,0.62)" />
        {/* Floor reflection */}
        <rect
          x="332"
          y="396"
          width="136"
          height="86"
          fill="url(#ae-poster)"
          opacity="0.16"
          transform="scale(1,-1) translate(0,-878)"
        />
      </svg>
    </Frame>
  );
}

const projectArt = {
  archin: ArchinArt,
  vntnr: VntnrArt,
  aeorim: AeorimArt,
} as const;

export function ProjectArt({
  variant,
  className = "",
}: {
  variant: keyof typeof projectArt;
  className?: string;
}) {
  const Art = projectArt[variant];
  return (
    <div className={className}>
      <Art />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Service artwork                                                    */
/* ------------------------------------------------------------------ */

/** Abstract browser/canvas mock used on the services cards. */
export function ServiceArt({
  variant,
  className = "",
}: {
  variant: "web" | "brand" | "logo";
  className?: string;
}) {
  return (
    <div className={className}>
      <Frame>
        <div
          className="absolute inset-0"
          style={{
            background:
              variant === "web"
                ? "radial-gradient(90% 120% at 20% 0%, #2D2B6B 0%, #1A1A2E 60%, #12111F 100%)"
                : variant === "brand"
                  ? "radial-gradient(100% 120% at 80% 10%, #7C3AED 0%, #3A2470 40%, #141328 100%)"
                  : "radial-gradient(90% 120% at 50% 100%, #3A3878 0%, #1A1A2E 55%, #12111F 100%)",
          }}
        />
        <svg
          viewBox="0 0 600 420"
          preserveAspectRatio="xMidYMid slice"
          className="absolute inset-0 size-full"
        >
          {variant === "web" ? (
            <>
              <rect
                x="60"
                y="56"
                width="480"
                height="308"
                rx="12"
                fill="rgba(255,255,255,0.05)"
                stroke="rgba(255,255,255,0.14)"
              />
              <rect
                x="60"
                y="56"
                width="480"
                height="34"
                rx="12"
                fill="rgba(255,255,255,0.07)"
              />
              {[0, 1, 2].map((i) => (
                <circle
                  key={i}
                  cx={84 + i * 18}
                  cy="73"
                  r="5"
                  fill={i === 0 ? "#7C3AED" : "rgba(255,255,255,0.28)"}
                />
              ))}
              <rect x="88" y="122" width="196" height="14" rx="3" fill="#7C3AED" />
              <rect
                x="88"
                y="150"
                width="270"
                height="10"
                rx="3"
                fill="rgba(255,255,255,0.34)"
              />
              <rect
                x="88"
                y="170"
                width="220"
                height="10"
                rx="3"
                fill="rgba(255,255,255,0.2)"
              />
              {[0, 1, 2].map((i) => (
                <rect
                  key={`card-${i}`}
                  x={88 + i * 145}
                  y="220"
                  width="126"
                  height="104"
                  rx="10"
                  fill="rgba(255,255,255,0.08)"
                  stroke="rgba(255,255,255,0.12)"
                />
              ))}
            </>
          ) : null}

          {variant === "brand" ? (
            <>
              <rect
                x="72"
                y="88"
                width="196"
                height="244"
                rx="10"
                fill="rgba(26,26,46,0.72)"
              />
              <rect
                x="300"
                y="88"
                width="228"
                height="116"
                rx="10"
                fill="rgba(255,255,255,0.88)"
              />
              <rect
                x="300"
                y="216"
                width="228"
                height="116"
                rx="10"
                fill="rgba(26,26,46,0.72)"
              />
              <circle cx="170" cy="176" r="44" fill="#7C3AED" />
              <rect x="126" y="248" width="88" height="12" rx="3" fill="#ffffff" />
              <rect
                x="126"
                y="270"
                width="60"
                height="8"
                rx="3"
                fill="rgba(255,255,255,0.45)"
              />
              <rect x="330" y="126" width="120" height="14" rx="3" fill="#1A1A2E" />
              <rect
                x="330"
                y="152"
                width="88"
                height="10"
                rx="3"
                fill="rgba(26,26,46,0.4)"
              />
            </>
          ) : null}

          {variant === "logo" ? (
            <>
              <circle
                cx="300"
                cy="210"
                r="118"
                fill="none"
                stroke="rgba(255,255,255,0.14)"
                strokeWidth="2"
              />
              <circle
                cx="300"
                cy="210"
                r="78"
                fill="none"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="2"
              />
              <path d="M300 122 366 288H234Z" fill="#7C3AED" />
              <rect
                x="286"
                y="196"
                width="28"
                height="28"
                fill="#1A1A2E"
                transform="rotate(45 300 210)"
              />
              <line
                x1="300"
                y1="52"
                x2="300"
                y2="368"
                stroke="rgba(255,255,255,0.08)"
              />
              <line
                x1="142"
                y1="210"
                x2="458"
                y2="210"
                stroke="rgba(255,255,255,0.08)"
              />
            </>
          ) : null}
        </svg>
      </Frame>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Editorial / blog artwork                                           */
/* ------------------------------------------------------------------ */

const editorialGradients = [
  "linear-gradient(140deg,#8B5CF6 0%,#4A1D96 48%,#15142A 100%)",
  "linear-gradient(140deg,#333157 0%,#1A1A2E 52%,#111020 100%)",
  "linear-gradient(140deg,#A78BFA 0%,#7C3AED 40%,#2D2B6B 100%)",
  "linear-gradient(140deg,#232145 0%,#3A3878 46%,#1A1A2E 100%)",
  "linear-gradient(140deg,#A78BFA 0%,#3A2470 55%,#131226 100%)",
  "linear-gradient(140deg,#3A3878 0%,#201E38 50%,#121121 100%)",
];

/** Deterministic abstract cover for a blog card. */
export function EditorialArt({
  seed,
  className = "",
}: {
  seed: number;
  className?: string;
}) {
  const gradient = editorialGradients[seed % editorialGradients.length];
  const rotation = (seed * 37) % 90;

  return (
    <div className={className}>
      <Frame>
        <div className="absolute inset-0" style={{ background: gradient }} />
        <svg
          viewBox="0 0 400 300"
          preserveAspectRatio="xMidYMid slice"
          className="absolute inset-0 size-full"
        >
          <g transform={`rotate(${rotation} 200 150)`} opacity="0.5">
            <rect
              x="96"
              y="46"
              width="208"
              height="208"
              fill="none"
              stroke="rgba(255,255,255,0.35)"
              strokeWidth="1.5"
            />
            <circle
              cx="200"
              cy="150"
              r="86"
              fill="none"
              stroke="rgba(255,255,255,0.28)"
              strokeWidth="1.5"
            />
            <path
              d="M114 150h172M200 64v172"
              stroke="rgba(255,255,255,0.22)"
              strokeWidth="1.5"
            />
          </g>
          <circle cx="200" cy="150" r="34" fill="rgba(255,255,255,0.1)" />
        </svg>
      </Frame>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Portrait (founder)                                                 */
/* ------------------------------------------------------------------ */

export function PortraitArt({ className = "" }: ArtProps) {
  return (
    <div className={className}>
      <Frame>
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(85% 70% at 50% 20%, #A78BFA 0%, #5B21B6 30%, #1F1B4D 66%, #1A1A2E 100%)",
          }}
        />
        <svg
          viewBox="0 0 400 520"
          preserveAspectRatio="xMidYMid slice"
          className="absolute inset-0 size-full"
        >
          <ellipse cx="200" cy="196" rx="86" ry="102" fill="rgba(18,17,31,0.72)" />
          <path
            d="M42 520c0-96 70-158 158-158s158 62 158 158Z"
            fill="rgba(18,17,31,0.78)"
          />
          <path
            d="M114 176c0-56 38-92 86-92s86 36 86 92c0 8-4 12-10 12-14-34-42-52-76-52s-62 18-76 52c-6 0-10-4-10-12Z"
            fill="rgba(0,0,0,0.5)"
          />
        </svg>
      </Frame>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Hero inline media (the pills embedded in the headline)             */
/* ------------------------------------------------------------------ */

const heroPills = [
  "linear-gradient(135deg,#7C3AED,#2D2B6B)",
  "linear-gradient(135deg,#3A3878,#1A1A2E)",
  "linear-gradient(135deg,#A78BFA,#5B21B6)",
];

export function HeroPill({
  seed,
  className = "",
}: {
  seed: number;
  className?: string;
}) {
  return (
    <span
      aria-hidden="true"
      className={`relative inline-block overflow-hidden rounded-[999px] align-middle shadow-[0_8px_24px_rgba(0,0,0,0.18)] ${className}`}
      style={{ background: heroPills[seed % heroPills.length] }}
    >
      <span
        className="absolute inset-0"
        style={{
          backgroundImage: "url(/textures/grain.svg)",
          backgroundSize: "120px 120px",
          opacity: 0.3,
          mixBlendMode: "overlay",
        }}
      />
      <svg viewBox="0 0 120 80" className="size-full">
        <circle cx="42" cy="34" r="22" fill="rgba(0,0,0,0.3)" />
        <path d="M6 80c0-22 16-34 36-34s36 12 36 34Z" fill="rgba(0,0,0,0.3)" />
        <rect
          x="82"
          y="18"
          width="30"
          height="46"
          rx="6"
          fill="rgba(255,255,255,0.22)"
        />
      </svg>
    </span>
  );
}
