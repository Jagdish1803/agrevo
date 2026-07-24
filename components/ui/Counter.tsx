"use client";

import {
  animate,
  useInView,
  useIsomorphicLayoutEffect,
  useReducedMotion,
} from "motion/react";
import { useRef, useState } from "react";
import { EASE_OUT_EXPO } from "@/lib/motion";

type CounterProps = {
  to: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
};

/**
 * Number that counts up once it scrolls into view.
 * Renders the final value immediately when reduced motion is requested.
 */
export function Counter({
  to,
  prefix = "",
  suffix = "",
  duration = 1.6,
  className,
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduceMotion = useReducedMotion();
  const [value, setValue] = useState(0);

  useIsomorphicLayoutEffect(() => {
    if (!inView) return;

    if (reduceMotion) {
      setValue(to);
      return;
    }

    const controls = animate(0, to, {
      duration,
      ease: EASE_OUT_EXPO,
      onUpdate: (latest) => setValue(Math.round(latest)),
    });

    return () => controls.stop();
  }, [inView, to, duration, reduceMotion]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value}
      {suffix}
    </span>
  );
}
