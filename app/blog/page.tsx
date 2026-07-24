import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EditorialArt } from "@/components/ui/Artwork";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { ArrowUpRight } from "@/components/ui/icons";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { posts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Ideas, stories and strategies from the creative edge — design, development and the tools behind bold digital work.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Blog"
        title="Insights Behind the Build"
        description="Ideas, stories and strategies from the creative edge — covering design, development, and the tools that bring bold digital work to life."
        action={
          <ButtonLink href="/contact" variant="outline">
            Contact to get featured
          </ButtonLink>
        }
      />

      <section className="pb-20 md:pb-28">
        <div className="container-wide">
          <SectionHeading label="Intro" title="Blog Insights" />

          <ul className="mt-12 grid gap-5 sm:grid-cols-2 md:mt-16 lg:grid-cols-3">
            {posts.map((post, index) => (
              <Reveal as="li" key={post.title} direction="up" delay={(index % 3) * 0.08}>
                <article className="group h-full overflow-hidden rounded-[24px] bg-surface transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <EditorialArt
                      seed={post.art}
                      className="size-full transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                    />
                    <span className="absolute top-4 left-4 rounded-full bg-black/40 px-3 py-1.5 text-[12px] text-white backdrop-blur-md">
                      {post.readTime}
                    </span>
                  </div>

                  <div className="p-6">
                    <h2 className="display flex items-start gap-2 text-[26px] leading-tight">
                      {post.title}
                      <ArrowUpRight className="mt-1.5 size-4 shrink-0 text-ink-faint transition-all duration-400 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                    </h2>
                    <p className="mt-3 text-[15px] text-ink-soft">{post.excerpt}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CtaBanner
        label="Want to contribute?"
        title="Pitch a story"
        description="We publish practical write-ups from designers and engineers shipping real work. Send us an outline."
        cta="Get in touch"
      />
    </>
  );
}
