import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { ArrowUpRight } from "@/components/ui/icons";
import { awards } from "@/lib/data";

/**
 * Awards ledger — a three-column table (organisation, citation, project)
 * where each row lifts and tints on hover.
 */
export function Awards() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-wide">
        <SectionHeading label="Awards" title="Awards & Wins" />

        <RevealGroup className="mt-12 border-t border-line md:mt-16">
          {awards.map((award) => (
            <RevealItem key={`${award.org}-${award.title}`}>
              <div className="group grid grid-cols-1 items-center gap-2 border-b border-line py-6 transition-colors duration-400 hover:bg-surface md:grid-cols-[220px_1fr_auto] md:gap-8 md:px-4">
                <p className="display text-[24px] leading-none transition-colors duration-300 group-hover:text-accent md:text-[28px]">
                  {award.org}
                </p>
                <p className="text-[15px] text-ink-soft">{award.title}</p>
                <p className="flex items-center gap-1.5 text-[15px] text-ink-faint">
                  {award.project}
                  <ArrowUpRight className="size-3.5 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100" />
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
