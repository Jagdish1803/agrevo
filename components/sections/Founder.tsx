import { SectionHeading } from "@/components/ui/SectionHeading";
import { PortraitArt } from "@/components/ui/Artwork";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { timeline } from "@/lib/data";
import { site } from "@/lib/site";

/**
 * Founder introduction: portrait on one side, bio and career timeline on
 * the other. The timeline rows underline on hover, matching the reference.
 */
export function Founder() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="container-wide">
        <SectionHeading label="Intro" title="Meet the Founder" />

        <div className="mt-12 grid gap-10 md:mt-16 md:grid-cols-[0.85fr_1.15fr] md:gap-14">
          <Reveal direction="right">
            <PortraitArt className="aspect-[4/5] overflow-hidden rounded-[24px] md:rounded-[32px]" />
          </Reveal>

          <div className="flex flex-col justify-between gap-10">
            <Reveal direction="up" delay={0.08}>
              <p className="max-w-[58ch] text-[16px] leading-relaxed text-ink-soft md:text-[18px]">
                {site.founder} is a visual designer focused on bold, functional
                design systems. He works with creative teams and startups to
                build standout brands and seamless digital experiences. Based in{" "}
                {site.city}, he balances clarity with character — and spends his
                spare hours on motion design and interactive visuals.
              </p>
            </Reveal>

            <RevealGroup className="border-t border-line">
              {timeline.map((entry) => (
                <RevealItem key={entry.role}>
                  <div className="group flex items-center justify-between gap-6 border-b border-line py-5 transition-colors duration-300 hover:text-accent">
                    <span className="text-[16px] md:text-[18px]">
                      {entry.role}
                    </span>
                    <span className="shrink-0 text-[14px] text-ink-faint tabular-nums transition-colors duration-300 group-hover:text-accent">
                      {entry.period}
                    </span>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </div>
      </div>
    </section>
  );
}
