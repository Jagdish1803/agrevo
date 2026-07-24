import Link from "next/link";
import { site } from "@/lib/site";

/**
 * Wordmark. Set in the display face with the signature accent full stop.
 */
export function Logo({
  tone = "dark",
  className = "",
}: {
  /** `dark` = dark ink on light ground; `light` = white on dark ground. */
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <Link
      href="/"
      aria-label={`${site.name} — home`}
      className={`display inline-flex items-baseline text-[26px] leading-none tracking-[-0.03em] transition-opacity hover:opacity-70 md:text-[28px] ${
        tone === "light" ? "text-white" : "text-accent"
      } ${className}`}
    >
      {site.name}
      <span className={tone === "light" ? "text-accent" : "text-accent"}>.</span>
    </Link>
  );
}
