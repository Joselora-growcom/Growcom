"use client";

type AboutTechBackgroundProps = {
  className?: string;
};

const CIRCUIT_PATHS = [
  "M -40 220 H 260 L 320 160 H 620 L 690 230 H 1020 L 1080 170 H 1480",
  "M -40 420 H 180 L 250 350 H 520 L 600 430 H 900 L 980 360 H 1480",
  "M -40 620 H 340 L 410 690 H 760 L 840 610 H 1140 L 1210 680 H 1480",
  "M 120 -40 V 180 L 200 260 V 520 L 130 600 V 940",
  "M 760 -40 V 120 L 840 200 V 430 L 780 500 V 940",
  "M 1240 -40 V 260 L 1160 340 V 560 L 1250 650 V 940",
];

const CIRCUIT_NODES = [
  [320, 160],
  [690, 230],
  [1080, 170],
  [250, 350],
  [600, 430],
  [980, 360],
  [410, 690],
  [840, 610],
  [1210, 680],
  [200, 260],
  [840, 200],
  [1160, 340],
];

const SPARKS = [
  [6, 24],
  [14, 68],
  [22, 41],
  [31, 82],
  [38, 17],
  [46, 57],
  [53, 33],
  [61, 74],
  [68, 22],
  [74, 49],
  [82, 66],
  [88, 31],
  [93, 78],
  [97, 44],
];

/** Fondo animado (CSS/SVG, sin vídeo) para la cabecera de Sobre nosotros. */
export default function AboutTechBackground({ className = "" }: AboutTechBackgroundProps) {
  return (
    <div className={`about-tech-bg ${className}`.trim()} aria-hidden>
      <div className="about-tech-bg-base" />
      <div className="about-tech-bg-grid" />
      <div className="about-tech-bg-floor" />

      <span className="about-tech-bg-orb about-tech-bg-orb-a" />
      <span className="about-tech-bg-orb about-tech-bg-orb-b" />
      <span className="about-tech-bg-orb about-tech-bg-orb-c" />

      <svg
        className="about-tech-bg-circuit"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="about-tech-pulse-cyan" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(34,211,238,0)" />
            <stop offset="50%" stopColor="rgba(103,232,249,1)" />
            <stop offset="100%" stopColor="rgba(34,211,238,0)" />
          </linearGradient>
          <linearGradient id="about-tech-pulse-violet" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(167,139,250,0)" />
            <stop offset="50%" stopColor="rgba(196,181,253,1)" />
            <stop offset="100%" stopColor="rgba(167,139,250,0)" />
          </linearGradient>
          <filter id="about-tech-glow" x="-120%" y="-120%" width="340%" height="340%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g className="about-tech-bg-traces">
          {CIRCUIT_PATHS.map((d) => (
            <path key={`trace-${d}`} d={d} stroke="rgba(125,211,252,0.14)" strokeWidth="1.25" strokeLinecap="round" />
          ))}
        </g>

        <g filter="url(#about-tech-glow)">
          {CIRCUIT_PATHS.map((d, i) => (
            <path
              key={`pulse-${d}`}
              className={`about-tech-bg-pulse about-tech-bg-pulse-${i + 1}`}
              d={d}
              pathLength={100}
              stroke={i % 3 === 2 ? "url(#about-tech-pulse-violet)" : "url(#about-tech-pulse-cyan)"}
              strokeWidth="2.25"
              strokeLinecap="round"
            />
          ))}
        </g>

        <g filter="url(#about-tech-glow)">
          {CIRCUIT_NODES.map(([cx, cy], i) => (
            <circle
              key={`node-${cx}-${cy}`}
              className="about-tech-bg-node"
              cx={cx}
              cy={cy}
              r={i % 4 === 0 ? 4 : 2.75}
              style={{ animationDelay: `${(i % 6) * 0.6}s` }}
            />
          ))}
        </g>
      </svg>

      <div className="about-tech-bg-beams">
        <span className="about-tech-bg-beam about-tech-bg-beam-1" />
        <span className="about-tech-bg-beam about-tech-bg-beam-2" />
        <span className="about-tech-bg-beam about-tech-bg-beam-3" />
      </div>

      <div className="about-tech-bg-sparks">
        {SPARKS.map(([left, top], i) => (
          <span
            key={`spark-${left}-${top}`}
            className="about-tech-bg-spark"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              animationDelay: `${(i % 7) * 0.9}s`,
              animationDuration: `${6 + (i % 5)}s`,
            }}
          />
        ))}
      </div>

      <div className="about-tech-bg-scan" />
      <div className="about-tech-bg-vignette" />
    </div>
  );
}
