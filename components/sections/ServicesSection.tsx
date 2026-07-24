"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceArt } from "@/components/ui/Artwork";
import { Reveal } from "@/components/ui/Reveal";
import { services } from "@/lib/data";
import { EASE_OUT_EXPO } from "@/lib/motion";

/**
 * "What we do" — a tabbed service explorer on desktop and a stacked list on
 * mobile. Tabs are wired with the roving `role="tab"` pattern so keyboard
 * users get arrow-key navigation for free via native button focus order.
 */
export function ServicesSection({
  showPricing = false,
}: {
  /** Services page variant adds the price / timeline strip. */
  showPricing?: boolean;
}) {
  const [active, setActive] = useState(0);
  const service = services[active];

  return (
    <section id="services" className="py-20 md:py-28">
      <div className="container-wide">
        <SectionHeading label="Services" title="What we do" />

        {/* ---------------- Desktop: tabs ---------------- */}
        <div className="mt-12 hidden md:block">
          <div role="tablist" aria-label="Services" className="flex gap-2">
            {services.map((item, index) => (
              <button
                key={item.title}
                role="tab"
                type="button"
                id={`service-tab-${index}`}
                aria-selected={active === index}
                aria-controls={`service-panel-${index}`}
                onClick={() => setActive(index)}
                className={`relative cursor-pointer rounded-full px-6 py-3 text-[15px] transition-colors duration-300 ${
                  active === index ? "text-white" : "text-ink hover:text-accent"
                }`}
              >
                {active === index ? (
                  <motion.span
                    layoutId="service-tab-pill"
                    className="absolute inset-0 rounded-full bg-night"
                    transition={{ duration: 0.45, ease: EASE_OUT_EXPO }}
                  />
                ) : null}
                <span className="relative z-10">{item.title}</span>
              </button>
            ))}
          </div>

          <motion.div
            key={service.title}
            id={`service-panel-${active}`}
            role="tabpanel"
            aria-labelledby={`service-tab-${active}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: EASE_OUT_EXPO }}
            className="mt-8 grid overflow-hidden rounded-[32px] bg-surface lg:grid-cols-[1.1fr_1fr]"
          >
            <ServiceArt variant={service.art} className="min-h-[380px]" />

            <div className="flex flex-col justify-between gap-10 p-10">
              <div>
                <h3 className="display text-[40px] leading-none lg:text-[52px]">
                  {service.title}
                </h3>
                <p className="mt-5 max-w-[42ch] text-[15px] leading-relaxed text-ink-soft">
                  {service.copy}
                </p>

                <ul className="mt-8 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-line px-4 py-2 text-[13px] text-ink-soft"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>

              {showPricing ? <PriceStrip service={service} /> : null}
            </div>
          </motion.div>
        </div>

        {/* ---------------- Mobile: stacked cards ---------------- */}
        <div className="mt-10 space-y-5 md:hidden">
          {services.map((item, index) => (
            <Reveal key={item.title} direction="up" delay={index * 0.06}>
              <article className="overflow-hidden rounded-[24px] bg-surface">
                <ServiceArt variant={item.art} className="aspect-[4/3]" />
                <div className="p-6">
                  <h3 className="display text-[32px] leading-none">{item.title}</h3>
                  <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
                    {item.copy}
                  </p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-line px-3.5 py-1.5 text-[12px] text-ink-soft"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                  {showPricing ? (
                    <div className="mt-6">
                      <PriceStrip service={item} />
                    </div>
                  ) : null}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function PriceStrip({ service }: { service: (typeof services)[number] }) {
  return (
    <dl className="flex flex-wrap gap-x-12 gap-y-4 border-t border-line pt-6">
      <div>
        <dt className="text-[13px] text-ink-faint">Starts at</dt>
        <dd className="display mt-1 text-[28px] leading-none">{service.price}</dd>
      </div>
      <div>
        <dt className="text-[13px] text-ink-faint">Timeline</dt>
        <dd className="display mt-1 text-[28px] leading-none">
          {service.timeline}
        </dd>
      </div>
    </dl>
  );
}
