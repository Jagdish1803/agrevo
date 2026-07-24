import { PageHero } from "@/components/sections/PageHero";
import { Reveal } from "@/components/ui/Reveal";

export type LegalBlock = { heading: string; body: string[] };

/**
 * Shared shell for the policy pages: page hero plus a narrow reading column
 * with a sticky table of contents on wide screens.
 */
export function LegalPage({
  eyebrow,
  title,
  updated,
  blocks,
}: {
  eyebrow: string;
  title: string;
  updated: string;
  blocks: LegalBlock[];
}) {
  return (
    <>
      <PageHero
        eyebrow={eyebrow}
        title={title}
        description={`Last updated ${updated}.`}
      />

      <section className="pb-20 md:pb-28">
        <div className="container-wide grid gap-10 md:grid-cols-[240px_1fr] md:gap-16">
          <nav aria-label="On this page" className="md:sticky md:top-28 md:self-start">
            <p className="text-[13px] tracking-wide text-ink-faint uppercase">
              Contents
            </p>
            <ol className="mt-4 space-y-2.5">
              {blocks.map((block, index) => (
                <li key={block.heading}>
                  <a
                    href={`#${slugify(block.heading)}`}
                    className="text-[14px] text-ink-soft transition-colors hover:text-accent"
                  >
                    <span className="tabular-nums">
                      {String(index + 1).padStart(2, "0")}.
                    </span>{" "}
                    {block.heading}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="max-w-[68ch] space-y-12">
            {blocks.map((block) => (
              <Reveal key={block.heading} direction="up" as="section">
                <div id={slugify(block.heading)} className="scroll-mt-28">
                  <h2 className="display text-[26px] leading-tight md:text-[32px]">
                    {block.heading}
                  </h2>
                  <div className="mt-4 space-y-4">
                    {block.body.map((paragraph, index) => (
                      <p
                        key={index}
                        className="text-[15px] leading-relaxed text-ink-soft md:text-base"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
