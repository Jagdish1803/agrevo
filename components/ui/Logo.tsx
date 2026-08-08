import Link from "next/link";
import { LogoMark } from "@/components/ui/LogoMark";
import { site } from "@/lib/site";

/**
 * Horizontal lockup — icon left, wordmark right — for tight spaces like the
 * navbar and footer, per the brand guidelines' companion asset.
 *
 * "Web" keeps its lighter weight and smaller size, set flush under the right
 * edge of "LogicLoom" exactly as in the primary stacked mark. That weight
 * relationship is fixed and must not be adjusted.
 *
 * The icon is sized to the full height of the two-line wordmark block
 * (19+11+2px mobile, 21+12+2px desktop) so the two halves read as one object
 * rather than a small mark floating beside big type. The `gap` doubles as the
 * mandated clear space: 12px against a 36px mark clears one band width (6px).
 */
export function Logo({
  tone = "dark",
  className = "",
}: {
  /** `dark` = brand ink on light ground; `light` = reversed on dark ground. */
  tone?: "dark" | "light";
  className?: string;
}) {
  const light = tone === "light";

  return (
    <Link
      href="/"
      aria-label={`${site.name} — home`}
      className={`inline-flex items-center gap-2.5 transition-opacity duration-300 hover:opacity-70 md:gap-3 ${className}`}
    >
      <LogoMark
        tone={light ? "light" : "brand"}
        className="size-8 shrink-0 md:size-[35px]"
      />

      <span
        className={`flex flex-col items-end leading-none ${
          light ? "text-white" : "text-brand"
        }`}
      >
        <span className="font-display text-[19px] font-bold tracking-[-0.02em] md:text-[21px]">
          LogicLoom
        </span>
        <span className="font-display mt-0.5 text-[11px] font-medium tracking-[-0.01em] md:text-[12px]">
          Web
        </span>
      </span>
    </Link>
  );
}
