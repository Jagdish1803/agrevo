import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectArt } from "@/components/ui/Artwork";
import { Reveal } from "@/components/ui/Reveal";
import { SplitText } from "@/components/ui/SplitText";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowUpRight } from "@/components/ui/icons";
import { ContactSection } from "@/components/sections/ContactSection";
import { getNextProject, getProject, projects } from "@/lib/data";

type Params = { params: Promise<{ slug: string }> };

/** Pre-render every case study at build time. */
export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) return { title: "Project not found" };

  return {
    title: project.tagline,
    description: project.intro,
    alternates: { canonical: `/works/${project.slug}` },
    openGraph: { title: project.tagline, description: project.intro },
  };
}

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  const next = getNextProject(slug);

  return (
    <>
      {/* ---------------- Hero ---------------- */}
      <section className="pt-12 pb-12 md:pt-20 md:pb-16">
        <div className="container-wide">
          <h1 className="display text-[44px] leading-[0.94] sm:text-[64px] md:text-[96px]">
            <SplitText text={project.tagline} immediate />
          </h1>

          <Reveal direction="up" delay={0.2}>
            <p className="mt-7 max-w-[58ch] text-[15px] leading-relaxed text-ink-soft md:text-[17px]">
              {project.intro}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------------- Cover ---------------- */}
      <Reveal direction="up" amount={0.05}>
        <div className="container-wide">
          <ProjectArt
            variant={project.art}
            className="aspect-[16/10] overflow-hidden rounded-[24px] md:aspect-[16/8] md:rounded-[32px]"
          />
        </div>
      </Reveal>

      {/* ---------------- Meta strip ---------------- */}
      <section className="py-14 md:py-20">
        <div className="container-wide">
          <dl className="grid gap-8 border-y border-line py-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <dt className="text-[13px] text-ink-faint">Year</dt>
              <dd className="mt-2 text-[16px]">{project.year}</dd>
            </div>
            <div>
              <dt className="text-[13px] text-ink-faint">Role</dt>
              <dd className="mt-2 text-[16px]">{project.role}</dd>
            </div>
            <div>
              <dt className="text-[13px] text-ink-faint">Scope</dt>
              <dd className="mt-2 text-[16px]">{project.scope}</dd>
            </div>
            <div>
              <dt className="text-[13px] text-ink-faint">Delivered</dt>
              <dd className="mt-2 text-[16px]">{project.date}</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* ---------------- Chapters ---------------- */}
      {project.chapters.map((chapter, index) => (
        <section key={chapter.title} className="pb-16 md:pb-24">
          <div className="container-wide grid gap-8 md:grid-cols-[0.85fr_1.15fr] md:gap-14">
            <Reveal direction="right">
              <h2 className="display text-[34px] leading-[0.98] md:sticky md:top-28 md:text-[52px]">
                {chapter.title}
              </h2>
            </Reveal>

            <div className="space-y-6">
              {chapter.body.map((paragraph, paragraphIndex) => (
                <Reveal
                  key={paragraphIndex}
                  direction="up"
                  delay={paragraphIndex * 0.08}
                >
                  <p className="text-[15px] leading-relaxed text-ink-soft md:text-[17px]">
                    {paragraph}
                  </p>
                </Reveal>
              ))}

              {index === 0 ? (
                <Reveal direction="up" delay={0.1}>
                  <ProjectArt
                    variant={project.art}
                    className="mt-4 aspect-[16/10] overflow-hidden rounded-[20px] md:rounded-[24px]"
                  />
                </Reveal>
              ) : null}
            </div>
          </div>
        </section>
      ))}

      {/* ---------------- Client review ---------------- */}
      <section className="pb-16 md:pb-24">
        <div className="container-x">
          <Reveal direction="up">
            <figure className="rounded-[24px] bg-surface p-8 md:rounded-[32px] md:p-14">
              <p className="eyebrow">(Client Review)</p>
              <blockquote className="display mt-6 text-[28px] leading-[1.15] md:text-[40px]">
                “{project.review.quote}”
              </blockquote>
              <figcaption className="mt-8 border-t border-line pt-6 text-[15px]">
                <span className="block font-medium">{project.review.author}</span>
                <span className="block text-ink-soft">{project.review.role}</span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ---------------- Next project ---------------- */}
      <section className="pb-20 md:pb-28">
        <div className="container-wide">
          <SectionHeading label="Project" title="Next Project" />

          <Reveal direction="up" className="mt-10">
            <Link
              href={`/works/${next.slug}`}
              className="group block overflow-hidden rounded-[24px] bg-surface md:rounded-[32px]"
            >
              <div className="grid md:grid-cols-[1.15fr_1fr]">
                <ProjectArt
                  variant={next.art}
                  className="aspect-[16/11] size-full overflow-hidden transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04] md:aspect-auto md:min-h-[360px]"
                />
                <div className="flex flex-col justify-between gap-8 p-6 md:p-10">
                  <p className="max-w-[38ch] text-[15px] leading-relaxed text-ink-soft">
                    {next.intro}
                  </p>
                  <h3 className="display flex items-start gap-3 text-[44px] leading-none md:text-[64px]">
                    {next.name}
                    <ArrowUpRight className="mt-2 size-6 shrink-0 text-ink-soft transition-all duration-400 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent md:size-8" />
                  </h3>
                </div>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
