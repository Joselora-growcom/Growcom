"use client";

import { useEffect, useId, useRef } from "react";

type Variant =
  | "fade"
  | "up"
  | "left"
  | "right"
  | "zoom"
  | "flip"
  | "blur";

export default function ScrollReveal({
  children,
  variant = "up",
  className = "",
  rootMargin = "0px 0px -12% 0px",
  once = true,
  delayMs = 0,
}: {
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  rootMargin?: string;
  once?: boolean;
  delayMs?: number;
}) {
  const id = useId();
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (prefersReduced) {
      el.setAttribute("data-reveal", "shown");
      return;
    }

    let timeout: number | undefined;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          if (delayMs > 0) {
            timeout = window.setTimeout(() => el.setAttribute("data-reveal", "shown"), delayMs);
          } else {
            el.setAttribute("data-reveal", "shown");
          }
          if (once) io.disconnect();
        }
      },
      { root: null, rootMargin, threshold: 0.12 }
    );

    io.observe(el);
    return () => {
      if (timeout) window.clearTimeout(timeout);
      io.disconnect();
    };
  }, [delayMs, once, rootMargin]);

  return (
    <div
      id={id}
      ref={ref}
      data-reveal="hidden"
      data-variant={variant}
      className={className}
    >
      {children}
    </div>
  );
}
