"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectArt } from "@/components/ui/Artwork";
import { ArrowUpRight } from "@/components/ui/icons";
import { projects, type Project } from "@/lib/data";

/**
 * Project showcase.
 *
 * Cards stick to the viewport and stack on top of each other as you scroll,
 * with the outgoing card scaling down slightly — the reference site's
 * signature works interaction. On small screens the stack degrades to a
 * plain vertical list.
 */
export function Works({
  label = "Portfolio",
  title = "Recent Works",
  description = "We have helped businesses across industries achieve their goals. Here are some of our selected works.",
}: {
  label?: string;
  title?: string;
  description?: string;
}) {
  return (
    <section id="works" className="py-20 md:py-28">
      <div className="container-wide">
        <SectionHeading
          label={label}
          title={title}
          description={description}
          align="between"
        />
      </div>

      <div className="container-wide mt-14 md:mt-20">
        <ul className="md:relative">
          {projects.map((project, index) => (
            <WorkCard
              key={project.slug}
              project={project}
              index={index}
              total={projects.length}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}

function WorkCard({
  project,
  index,
  total,
}: {
  project: Project;
  index: number;
  total: number;
}) {
  const ref = useRef<HTMLLIElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Outgoing cards shrink a touch so the stack reads as depth, not overlap.
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.5]);

  return (
    <li
      ref={ref}
      className="mb-6 md:sticky md:mb-10"
      style={{ top: `calc(6.5rem + ${index * 1.25}rem)` }}
    >
      <motion.article
        style={{ scale, opacity }}
        className="origin-top overflow-hidden rounded-[24px] bg-surface shadow-[0_1px_2px_rgba(0,0,0,0.06),0_24px_60px_-30px_rgba(0,0,0,0.25)] md:rounded-[32px]"
      >
        <Link href={`/works/${project.slug}`} className="group block">
          <div className="grid gap-0 md:grid-cols-[1.15fr_1fr]">
            {/* ---- Artwork ---- */}
            <div className="relative aspect-[16/11] overflow-hidden md:aspect-auto md:min-h-[420px]">
              <ProjectArt
                variant={project.art}
                className="size-full transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
              />
              <span className="absolute top-5 left-5 rounded-full bg-black/40 px-3 py-1.5 text-[12px] text-white backdrop-blur-md">
                {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
              </span>
            </div>

            {/* ---- Meta ---- */}
            <div className="flex flex-col justify-between gap-8 p-6 md:p-10">
              <div>
                <p className="max-w-[38ch] text-[15px] leading-relaxed text-ink-soft">
                  {project.intro}
                </p>

                <h3 className="display mt-8 flex items-start gap-3 text-[44px] leading-none md:mt-10 md:text-[64px]">
                  {project.name}
                  <ArrowUpRight className="mt-2 size-6 shrink-0 text-ink-soft transition-all duration-400 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent md:size-8" />
                </h3>
              </div>

              <dl className="grid grid-cols-2 gap-x-6 gap-y-6 border-t border-line pt-6 sm:grid-cols-3">
                <div>
                  <dt className="text-[13px] text-ink-faint">Year</dt>
                  <dd className="mt-1.5 text-[15px]">{project.year}</dd>
                </div>
                <div>
                  <dt className="text-[13px] text-ink-faint">Role</dt>
                  <dd className="mt-1.5 text-[15px]">{project.role}</dd>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <dt className="text-[13px] text-ink-faint">Services</dt>
                  <dd className="mt-1.5 space-y-1 text-[15px]">
                    {project.services.map((service) => (
                      <span key={service} className="block">
                        {service}
                      </span>
                    ))}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </Link>
      </motion.article>
    </li>
  );
}
