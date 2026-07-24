import type { ReactNode } from "react";
import { SplitText } from "@/components/ui/SplitText";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Shared hero for every inner page: a small ghost/outline eyebrow line
 * followed by the solid page title, matching the reference's stacked
 * two-tone treatment.
 */
export function PageHero({
  eyebrow,
  title,
  description,
  action,
}: {
  /** Outlined "ghost" line rendered above the title. */
  eyebrow: string;
  title: string;
  description?: string;
  action?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pt-12 pb-14 md:pt-20 md:pb-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[60vh]"
        style={{
          background:
            "radial-gradient(55% 50% at 50% 0%, rgba(255,255,255,0.95) 0%, rgba(240,240,240,0) 100%)",
        }}
      />

      <div className="container-wide relative">
        <h1 className="display text-[44px] leading-[0.94] sm:text-[64px] md:text-[88px] lg:text-[104px]">
          <span className="sr-only">{`${eyebrow} — ${title}`}</span>
          <span aria-hidden="true" className="block">
            <span className="display-outline block">{eyebrow}</span>
            <SplitText text={title} immediate className="block" />
          </span>
        </h1>

        {description ? (
          <Reveal direction="up" delay={0.25}>
            <p className="mt-7 max-w-[58ch] text-[15px] leading-relaxed text-ink-soft md:text-[17px]">
              {description}
            </p>
          </Reveal>
        ) : null}

        {action ? (
          <Reveal direction="up" delay={0.35}>
            <div className="mt-9">{action}</div>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
