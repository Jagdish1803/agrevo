"use client";

import { motion, useReducedMotion } from "motion/react";
import { Fragment } from "react";
import { EASE_OUT_EXPO } from "@/lib/motion";

type SplitTextProps = {
  text: string;
  className?: string;
  /** Per-character stagger, in seconds. */
  stagger?: number;
  delay?: number;
  /** Animate immediately instead of waiting for the viewport. */
  immediate?: boolean;
};

/**
 * Character-by-character headline reveal — the signature entrance on the
 * reference site's hero and section titles.
 *
 * The full string stays available to assistive tech via a visually hidden
 * copy; the animated glyphs are hidden from the accessibility tree.
 */
export function SplitText({
  text,
  className,
  stagger = 0.018,
  delay = 0,
  immediate = false,
}: SplitTextProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <span className={className}>{text}</span>;
  }

  const words = text.split(" ");
  let charIndex = 0;

  const animationProps = immediate
    ? { animate: "visible" as const }
    : { whileInView: "visible" as const, viewport: { once: true, amount: 0.4 } };

  return (
    <span className={className}>
      <span className="sr-only">{text}</span>
      <motion.span
        aria-hidden="true"
        initial="hidden"
        {...animationProps}
        variants={{ hidden: {}, visible: {} }}
        style={{ display: "inline" }}
      >
        {words.map((word, wordIdx) => (
          <Fragment key={`${word}-${wordIdx}`}>
            <span style={{ display: "inline-block", whiteSpace: "nowrap" }}>
              {Array.from(word).map((char) => {
                const index = charIndex++;
                return (
                  <motion.span
                    key={index}
                    style={{ display: "inline-block", willChange: "transform" }}
                    variants={{
                      hidden: { opacity: 0, y: "0.45em", rotate: 3 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        rotate: 0,
                        transition: {
                          duration: 0.55,
                          delay: delay + index * stagger,
                          ease: EASE_OUT_EXPO,
                        },
                      },
                    }}
                  >
                    {char}
                  </motion.span>
                );
              })}
            </span>
            {wordIdx < words.length - 1 ? " " : null}
          </Fragment>
        ))}
      </motion.span>
    </span>
  );
}
