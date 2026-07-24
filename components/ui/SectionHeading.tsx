import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { SplitText } from "@/components/ui/SplitText";

/**
 * The "(Label) / Big Title" pairing that opens nearly every section
 * on the reference site.
 */
export function SectionHeading({
  label,
  title,
  description,
  align = "left",
  tone = "light",
  action,
  className = "",
}: {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center" | "between";
  tone?: "light" | "dark";
  action?: ReactNode;
  className?: string;
}) {
  const isDark = tone === "dark";

  const heading = (
    <div className={align === "center" ? "text-center" : ""}>
      <Reveal direction="up">
        <p
          className={`eyebrow ${isDark ? "text-white/60" : "text-ink-soft"}`}
        >
          ({label})
        </p>
      </Reveal>
      <h2
        className={`display mt-3 text-[38px] leading-[0.95] sm:text-[52px] md:mt-4 md:text-[64px] lg:text-[72px] ${
          isDark ? "text-white" : "text-ink"
        }`}
      >
        <SplitText text={title} />
      </h2>
    </div>
  );

  if (align === "between") {
    return (
      <div
        className={`flex flex-col gap-6 md:flex-row md:items-end md:justify-between ${className}`}
      >
        {heading}
        {description ? (
          <Reveal direction="up" delay={0.1}>
            <p
              className={`max-w-[42ch] text-[15px] leading-relaxed md:text-base ${
                isDark ? "text-white/64" : "text-ink-soft"
              }`}
            >
              {description}
            </p>
          </Reveal>
        ) : null}
        {action}
      </div>
    );
  }

  return (
    <div className={`${align === "center" ? "flex flex-col items-center" : ""} ${className}`}>
      {heading}
      {description ? (
        <Reveal direction="up" delay={0.1}>
          <p
            className={`mt-5 max-w-[52ch] text-[15px] leading-relaxed md:text-base ${
              align === "center" ? "text-center" : ""
            } ${isDark ? "text-white/64" : "text-ink-soft"}`}
          >
            {description}
          </p>
        </Reveal>
      ) : null}
      {action ? <div className="mt-8">{action}</div> : null}
    </div>
  );
}
