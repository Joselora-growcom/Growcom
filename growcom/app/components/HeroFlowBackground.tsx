"use client";

type HeroFlowBackgroundProps = {
  className?: string;
};

/** SVG ligero en portada (sin vídeo) para carga instantánea. */
export default function HeroFlowBackground({ className = "" }: HeroFlowBackgroundProps) {
  return (
    <div className={`hero-flow-bg ${className}`.trim()} aria-hidden>
      <div className="hero-flow-stage absolute inset-0 opacity-100">
        <div className="hero-flow-ambient absolute inset-0 overflow-hidden">
          <span className="hero-flow-orb hero-flow-orb-a" />
          <span className="hero-flow-orb hero-flow-orb-b" />
          <span className="hero-flow-orb hero-flow-orb-c" />
        </div>
        <HeroFlowSvg />
      </div>
    </div>
  );
}

function HeroFlowSvg() {
  return (
    <svg
      className="hero-flow-svg absolute inset-0 h-full w-full"
      viewBox="0 0 1400 800"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="hf-line-cyan" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(34,211,238,0)" />
          <stop offset="40%" stopColor="rgba(34,211,238,0.95)" />
          <stop offset="100%" stopColor="rgba(56,189,248,0.25)" />
        </linearGradient>
        <linearGradient id="hf-line-violet" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(167,139,250,0)" />
          <stop offset="50%" stopColor="rgba(139,92,246,0.9)" />
          <stop offset="100%" stopColor="rgba(59,130,246,0.2)" />
        </linearGradient>
        <linearGradient id="hf-line-mint" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(52,211,153,0)" />
          <stop offset="45%" stopColor="rgba(52,211,153,0.85)" />
          <stop offset="100%" stopColor="rgba(34,211,238,0.2)" />
        </linearGradient>
        <radialGradient id="hf-node-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(34,211,238,0.35)" />
          <stop offset="100%" stopColor="rgba(34,211,238,0)" />
        </radialGradient>
        <filter id="hf-glow" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="4" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g className="hero-flow-stars" opacity="0.55">
        {[
          [120, 140],
          [280, 90],
          [450, 160],
          [620, 70],
          [890, 120],
          [1100, 80],
          [1280, 200],
          [200, 620],
          [380, 700],
          [950, 680],
          [1180, 620],
          [700, 720],
          [540, 120],
          [1050, 540],
        ].map(([cx, cy], i) => (
          <circle key={`star-${cx}-${cy}`} cx={cx} cy={cy} r={i % 3 === 0 ? 1.8 : 1.2} className="hero-flow-star fill-cyan-200/40" />
        ))}
      </g>

      <g className="hero-flow-ghost" opacity="0.2" transform="translate(30 25) scale(0.94)">
        <path
          d="M 160 420 C 260 420 300 340 400 320 C 500 300 560 380 640 400"
          stroke="url(#hf-line-cyan)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M 640 400 C 720 400 760 280 880 260 C 1000 240 1080 360 1200 400"
          stroke="url(#hf-line-violet)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </g>

      <g className="hero-flow-paths" filter="url(#hf-glow)">
        <path
          className="hero-flow-edge hero-flow-edge-1"
          d="M 160 420 C 240 420 280 350 360 330 C 440 310 480 370 560 400"
          stroke="url(#hf-line-cyan)"
          strokeWidth="2.25"
          strokeLinecap="round"
          pathLength="1"
        />
        <path
          className="hero-flow-edge hero-flow-edge-2"
          d="M 360 330 C 420 310 460 360 520 390"
          stroke="url(#hf-line-cyan)"
          strokeWidth="2"
          strokeLinecap="round"
          pathLength="1"
        />
        <path
          className="hero-flow-edge hero-flow-edge-3"
          d="M 560 400 C 620 400 660 320 740 280 C 820 240 860 260 920 300"
          stroke="url(#hf-line-violet)"
          strokeWidth="2.25"
          strokeLinecap="round"
          pathLength="1"
        />
        <path
          className="hero-flow-edge hero-flow-edge-4"
          d="M 560 400 C 620 420 660 500 740 540 C 820 580 860 560 920 520"
          stroke="url(#hf-line-mint)"
          strokeWidth="2.25"
          strokeLinecap="round"
          pathLength="1"
        />
        <path
          className="hero-flow-edge hero-flow-edge-5"
          d="M 920 300 C 980 320 1020 340 1080 360"
          stroke="url(#hf-line-violet)"
          strokeWidth="2"
          strokeLinecap="round"
          pathLength="1"
        />
        <path
          className="hero-flow-edge hero-flow-edge-6"
          d="M 920 520 C 980 500 1020 460 1080 440"
          stroke="url(#hf-line-mint)"
          strokeWidth="2"
          strokeLinecap="round"
          pathLength="1"
        />
        <path
          className="hero-flow-edge hero-flow-edge-7"
          d="M 1080 360 C 1140 370 1180 390 1240 400"
          stroke="url(#hf-line-cyan)"
          strokeWidth="2.25"
          strokeLinecap="round"
          pathLength="1"
        />
        <path
          className="hero-flow-edge hero-flow-edge-8"
          d="M 1080 440 C 1140 430 1180 410 1240 400"
          stroke="url(#hf-line-cyan)"
          strokeWidth="2"
          strokeLinecap="round"
          pathLength="1"
        />
      </g>

      <g className="hero-flow-hub" transform="translate(560 400)">
        <circle r="72" fill="url(#hf-node-glow)" className="hero-flow-hub-glow" />
        <circle r="58" className="hero-flow-hub-ring fill-none stroke-cyan-400/25" strokeWidth="1" strokeDasharray="6 10" />
        <circle r="44" className="fill-[#030712]/90 stroke-cyan-300/60" strokeWidth="2" />
        <path d="M -18 -8 h36 M -18 4 h24 M -18 16 h30" className="stroke-cyan-200/55" strokeWidth="2" strokeLinecap="round" />
        <circle r="6" className="fill-cyan-300/90 hero-flow-hub-core" />
      </g>

      <FlowCard className="hero-flow-node hero-flow-node-1" x={160} y={420} w={72} h={48} accent="cyan" icon="trigger" />
      <FlowCard className="hero-flow-node hero-flow-node-2" x={360} y={330} w={80} h={52} accent="sky" icon="filter" />
      <FlowCard className="hero-flow-node hero-flow-node-3" x={740} y={280} w={88} h={56} accent="violet" icon="ai" />
      <FlowCard className="hero-flow-node hero-flow-node-4" x={740} y={540} w={88} h={56} accent="mint" icon="api" />
      <FlowCard className="hero-flow-node hero-flow-node-5" x={1080} y={360} w={76} h={50} accent="cyan" icon="merge" />
      <FlowCard className="hero-flow-node hero-flow-node-6" x={1080} y={440} w={76} h={50} accent="sky" icon="notify" />
      <FlowNodeEnd className="hero-flow-node hero-flow-node-7" x={1240} y={400} />
    </svg>
  );
}

type FlowCardProps = {
  className?: string;
  x: number;
  y: number;
  w: number;
  h: number;
  accent: "cyan" | "sky" | "violet" | "mint";
  icon: "trigger" | "filter" | "ai" | "api" | "merge" | "notify";
};

const accentStroke: Record<FlowCardProps["accent"], string> = {
  cyan: "stroke-cyan-400/75",
  sky: "stroke-sky-400/70",
  violet: "stroke-violet-400/75",
  mint: "stroke-emerald-400/70",
};

function FlowCard({ className = "", x, y, w, h, accent, icon }: FlowCardProps) {
  const hw = w / 2;
  const hh = h / 2;
  return (
    <g className={className} transform={`translate(${x} ${y})`}>
      <circle r={hw + 14} className="hero-flow-card-ring fill-none stroke-cyan-300/20" strokeWidth="1" />
      <rect
        x={-hw}
        y={-hh}
        width={w}
        height={h}
        rx={12}
        className={`fill-[#030712]/85 ${accentStroke[accent]}`}
        strokeWidth="2"
      />
      <rect x={-hw + 8} y={-hh + 8} width={w - 16} height={h - 16} rx={8} className="fill-cyan-400/8 stroke-white/5" strokeWidth="1" />
      <FlowIcon type={icon} />
    </g>
  );
}

function FlowIcon({ type }: { type: FlowCardProps["icon"] }) {
  switch (type) {
    case "trigger":
      return (
        <path
          d="M -6 -10 L 2 0 L -6 10 L -2 0 Z M 4 -6 L 10 0 L 4 6"
          className="fill-amber-300/90 stroke-amber-200/50"
          strokeWidth="1"
          strokeLinejoin="round"
        />
      );
    case "filter":
      return (
        <>
          <path d="M -10 -4 L 10 -4 L 6 4 L -6 4 Z" className="fill-sky-300/40 stroke-sky-200/70" strokeWidth="1.5" />
          <circle cy="10" r="2.5" className="fill-sky-200/80" />
        </>
      );
    case "ai":
      return (
        <>
          <circle r="10" className="fill-violet-500/25 stroke-violet-300/70" strokeWidth="1.5" />
          <circle cx="-4" cy="-2" r="1.5" className="fill-violet-200" />
          <circle cx="4" cy="-2" r="1.5" className="fill-violet-200" />
          <circle cy="4" r="1.5" className="fill-violet-200" />
        </>
      );
    case "api":
      return (
        <>
          <path d="M -12 6 L -6 -6 L 0 0 L 6 -6 L 12 6" className="stroke-emerald-300/80" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M -8 10 h16" className="stroke-emerald-400/50" strokeWidth="1.5" strokeLinecap="round" />
        </>
      );
    case "merge":
      return <path d="M -10 0 h8 M 2 0 h8 M -2 -6 v12" className="stroke-cyan-200/80" strokeWidth="2" strokeLinecap="round" />;
    case "notify":
      return (
        <>
          <path d="M -8 -6 h16 v10 a4 4 0 0 1 -8 0 v-10" className="stroke-sky-200/75" strokeWidth="1.8" fill="sky-400/15" />
          <circle cx="6" cy="-8" r="3" className="fill-rose-400/90" />
        </>
      );
    default:
      return null;
  }
}

function FlowNodeEnd({ className = "", x, y }: { className?: string; x: number; y: number }) {
  return (
    <g className={className} transform={`translate(${x} ${y})`}>
      <circle r="38" className="hero-flow-card-ring fill-none stroke-emerald-400/30" strokeWidth="1.5" />
      <circle r="30" className="fill-[#030712]/90 stroke-emerald-400/80" strokeWidth="2" />
      <path d="M -12 0 l7 7 l18 -20" className="stroke-emerald-300" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  );
}
