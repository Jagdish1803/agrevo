import { Marquee } from "@/components/ui/Marquee";
import { Sparkle } from "@/components/ui/icons";
import { trustMarquee } from "@/lib/data";

/**
 * Dual-row ticker directly beneath the hero: capabilities scroll one way,
 * credentials the other.
 */
export function TrustMarquee() {
  return (
    <section
      aria-label="Capabilities and credentials"
      className="border-y border-line bg-canvas py-6 md:py-8"
    >
      <Marquee speed={34} fade pauseOnHover>
        {trustMarquee.map((item) => (
          <span
            key={item}
            className="flex items-center gap-6 pr-6 text-[15px] whitespace-nowrap text-ink-soft md:gap-8 md:pr-8 md:text-base"
          >
            {item}
            <Sparkle className="size-3 text-accent" />
          </span>
        ))}
      </Marquee>
    </section>
  );
}
