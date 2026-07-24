"use client";

import type { ReactNode } from "react";

type MarqueeProps = {
  children: ReactNode;
  /** Seconds for one full loop. Lower is faster. */
  speed?: number;
  reverse?: boolean;
  className?: string;
  /** Pause the loop while hovered. */
  pauseOnHover?: boolean;
  /** Soft-fade the left and right edges. */
  fade?: boolean;
};

/**
 * Infinite horizontal ticker.
 *
 * The track is duplicated once and translated by -50%, so the loop is
 * seamless regardless of content width. `aria-hidden` on the clone keeps
 * screen readers from reading the content twice.
 */
export function Marquee({
  children,
  speed = 30,
  reverse = false,
  className = "",
  pauseOnHover = false,
  fade = false,
}: MarqueeProps) {
  return (
    <div
      className={`group relative flex w-full overflow-hidden ${
        fade ? "edge-fade" : ""
      } ${className}`}
    >
      <div
        className={`flex w-max shrink-0 animate-[marquee-x_var(--speed)_linear_infinite] items-center ${
          pauseOnHover ? "group-hover:[animation-play-state:paused]" : ""
        }`}
        style={
          {
            "--speed": `${speed}s`,
            animationDirection: reverse ? "reverse" : "normal",
          } as React.CSSProperties
        }
      >
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
