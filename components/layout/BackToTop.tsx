"use client";

import { ArrowUp } from "@/components/ui/icons";
import { Magnetic } from "@/components/ui/Magnetic";

/**
 * Footer control that returns to the top of the document, honouring the
 * user's motion preference.
 */
export function BackToTop() {
  const handleClick = () => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    window.scrollTo({ top: 0, behavior: prefersReduced ? "auto" : "smooth" });
  };

  return (
    <Magnetic strength={0.25}>
      <button
        type="button"
        onClick={handleClick}
        className="group flex cursor-pointer items-center gap-2 rounded-full border border-white/16 px-4 py-2.5 text-[13px] text-white/72 transition-colors duration-300 hover:border-accent hover:text-white"
      >
        Back to top
        <ArrowUp className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
      </button>
    </Magnetic>
  );
}
