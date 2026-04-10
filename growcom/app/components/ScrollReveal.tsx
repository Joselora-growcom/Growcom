"use client";

type Variant = "fade" | "up" | "left" | "right" | "zoom" | "flip" | "blur";

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
  void variant;
  void rootMargin;
  void once;
  void delayMs;

  return <div className={className}>{children}</div>;
}
