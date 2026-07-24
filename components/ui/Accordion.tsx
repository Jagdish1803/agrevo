"use client";

import { AnimatePresence, motion } from "motion/react";
import { useId, useState } from "react";
import { Plus } from "@/components/ui/icons";
import { EASE_OUT_EXPO } from "@/lib/motion";

type Item = { q: string; a: string };

/**
 * Single-open accordion used by the FAQ sections.
 *
 * Built on real buttons with `aria-expanded` / `aria-controls` so it is
 * keyboard-operable and announced correctly.
 */
export function Accordion({
  items,
  defaultOpen = 1,
}: {
  items: readonly Item[];
  defaultOpen?: number | null;
}) {
  const [open, setOpen] = useState<number | null>(defaultOpen);
  const baseId = useId();

  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item, index) => {
        const isOpen = open === index;
        const panelId = `${baseId}-panel-${index}`;
        const buttonId = `${baseId}-button-${index}`;

        return (
          <div key={item.q}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : index)}
                className="flex w-full cursor-pointer items-center justify-between gap-6 py-6 text-left transition-colors hover:text-accent md:py-7"
              >
                <span className="text-[17px] leading-snug font-medium tracking-[-0.01em] md:text-[20px]">
                  {item.q}
                </span>
                <span
                  className={`grid size-8 shrink-0 place-items-center rounded-full border border-line transition-all duration-400 ${
                    isOpen
                      ? "rotate-45 border-accent bg-accent text-white"
                      : "text-ink-soft"
                  }`}
                >
                  <Plus className="size-3.5" />
                </span>
              </button>
            </h3>

            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.38, ease: EASE_OUT_EXPO }}
                  className="overflow-hidden"
                >
                  <p className="max-w-[62ch] pr-10 pb-7 text-[15px] leading-relaxed text-ink-soft md:text-base">
                    {item.a}
                  </p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
