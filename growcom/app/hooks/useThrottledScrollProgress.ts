"use client";

import { useEffect, useRef, useState } from "react";

function clamp(value: number, min = 0, max = 1) {
  return Math.min(max, Math.max(min, value));
}

/** Scroll 0–1 con actualización limitada (~30 fps) para no bloquear el hilo principal. */
export function useThrottledScrollProgress(navHeight: number, fadeDistanceFactor: number) {
  const [progress, setProgress] = useState(0);
  const latestRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const update = () => {
      rafRef.current = null;
      const maxScroll = Math.max((window.innerHeight - navHeight) * fadeDistanceFactor, 1);
      const current = clamp(window.scrollY / maxScroll);
      if (Math.abs(current - latestRef.current) < 0.008) return;
      latestRef.current = current;
      setProgress(current);
    };

    const onScroll = () => {
      if (rafRef.current !== null) return;
      rafRef.current = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [navHeight, fadeDistanceFactor]);

  return progress;
}
