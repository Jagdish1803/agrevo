import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { tools } from "@/lib/data";

/**
 * "Daily stack" — the tools the studio works in, shown as three cards with
 * a mark, a role line and a short description.
 */
export function Tools() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-wide">
        <SectionHeading
          label="Daily Stack"
          title="The Tools That Power Us"
          description="Speed, scale and style — powered by the tools we know and love."
        />

        <div className="mt-12 grid gap-5 md:mt-16 md:grid-cols-3">
          {tools.map((tool, index) => (
            <Reveal key={tool.name} direction="up" delay={index * 0.08}>
              <article className="group flex h-full flex-col gap-6 rounded-[24px] bg-surface p-7 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 md:p-8">
                <div className="flex items-start justify-between">
                  <ToolMark index={index} />
                  {"badge" in tool && tool.badge ? (
                    <span className="rounded-full bg-accent px-2.5 py-1 text-[11px] font-medium tracking-wide text-white">
                      {tool.badge}
                    </span>
                  ) : null}
                </div>

                <div>
                  <h3 className="display text-[26px] leading-none">
                    {tool.name}
                    <span className="ml-2 align-middle text-[15px] font-normal text-ink-faint">
                      {tool.role}
                    </span>
                  </h3>
                  <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
                    {tool.copy}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Simple geometric mark standing in for each tool's logotype. */
function ToolMark({ index }: { index: number }) {
  return (
    <span
      aria-hidden="true"
      className="grid size-12 place-items-center rounded-2xl bg-night text-white transition-colors duration-400 group-hover:bg-accent"
    >
      <svg viewBox="0 0 24 24" className="size-5" fill="currentColor">
        {index === 0 ? (
          <path d="M4 3h16v5h-8v5h8v8h-5v-5H4z" />
        ) : index === 1 ? (
          <path d="M4 3h4l8 11V3h4v18h-4L8 10v11H4z" />
        ) : (
          <path d="M2 5h5l2.5 8L12 5h3l2.5 8L20 5h2l-3.5 14h-3L13 11l-2.5 8h-3z" />
        )}
      </svg>
    </span>
  );
}
