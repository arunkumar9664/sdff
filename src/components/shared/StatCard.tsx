"use client";

import { useEffect, useRef, useState } from "react";
import type { Statistic } from "@/types";
import { Card } from "@/components/ui/Container";

function AnimatedValue({
  numericValue,
  prefix = "",
  suffix = "",
  fallback,
}: {
  numericValue?: number;
  prefix?: string;
  suffix?: string;
  fallback: string;
}) {
  const [display, setDisplay] = useState(fallback);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    if (numericValue === undefined || Number.isNaN(numericValue)) {
      setDisplay(fallback);
      return;
    }

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      setDisplay(`${prefix}${numericValue.toLocaleString("en-IN")}${suffix}`);
      return;
    }

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;
        const duration = 1200;
        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = Math.round(numericValue * eased);
          setDisplay(`${prefix}${current.toLocaleString("en-IN")}${suffix}`);
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [numericValue, prefix, suffix, fallback]);

  return <span ref={ref}>{display}</span>;
}

export function StatCard({ stat }: { stat: Statistic }) {
  return (
    <Card className="relative overflow-hidden text-center">
      <span
        className="absolute inset-x-0 top-0 h-1 bg-[var(--color-sky)]"
        aria-hidden
      />
      <p className="pt-2 text-3xl md:text-4xl font-bold text-[var(--color-primary-navy)]">
        <AnimatedValue
          numericValue={stat.numericValue}
          prefix={stat.prefix}
          suffix={stat.suffix}
          fallback={stat.value}
        />
      </p>
      <p className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-body)]">
        {stat.label}
      </p>
    </Card>
  );
}
