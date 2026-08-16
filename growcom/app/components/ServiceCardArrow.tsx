type ServiceCardArrowProps = {
  variant?: "accent" | "muted";
  className?: string;
  hint?: string;
  /** Segundos de retardo para escalonar el pulso entre tarjetas */
  pulseDelay?: number;
};

function joinClasses(...parts: (string | false | undefined)[]) {
  return parts.filter(Boolean).join(" ");
}

export function ServiceCardArrow({ variant = "muted", className, hint, pulseDelay = 0 }: ServiceCardArrowProps) {
  const delayStyle = { animationDelay: `${pulseDelay}s` } as const;

  return (
    <span
      className={joinClasses(
        "service-card-arrow pointer-events-none absolute right-5 top-6 z-10 flex items-center gap-3 sm:right-7 sm:top-8",
        className,
      )}
      aria-hidden
    >
      {hint ? (
        <span
          className="service-card-arrow-hint text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-200/95 sm:text-[11px]"
          style={delayStyle}
        >
          {hint}
        </span>
      ) : null}
      <span className="service-card-arrow-btn-wrap relative inline-flex" style={delayStyle}>
        <span
          className={joinClasses(
            "service-card-arrow-ring pointer-events-none absolute inset-0 rounded-full",
            variant === "accent" ? "service-card-arrow-ring--accent" : "",
          )}
          aria-hidden
        />
        <span
          className={joinClasses(
            "service-card-arrow-btn relative inline-flex h-11 w-11 items-center justify-center rounded-full border backdrop-blur-sm",
            variant === "accent"
              ? "border-cyan-400/35 bg-cyan-400/[0.1] text-cyan-200"
              : "border-white/12 bg-white/[0.04] text-white/45",
          )}
        >
          <ArrowIcon className="h-[18px] w-[18px]" />
        </span>
      </span>
    </span>
  );
}

export function ServiceCardInlineArrow({ className }: { className?: string }) {
  return (
    <span className={joinClasses("service-card-inline-arrow inline-flex", className)} aria-hidden>
      <ArrowIcon className="h-4 w-4" />
    </span>
  );
}

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M5 12h13" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      <path
        d="M13 7l5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
