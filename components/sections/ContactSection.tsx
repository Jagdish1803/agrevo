import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/ui/ContactForm";
import { Marquee } from "@/components/ui/Marquee";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/site";

/**
 * Closing contact block: heading, form, and an email ticker beneath it.
 */
export function ContactSection({
  label = "Let's Connect",
  title = "Got a project in mind?",
  description = "Let's make something happen together.",
  withServiceField = false,
}: {
  label?: string;
  title?: string;
  description?: string;
  /** Contact page variant adds the "what do you need" select. */
  withServiceField?: boolean;
}) {
  return (
    <section id="contact" className="scroll-mt-28 pt-20 md:pt-28">
      <div className="container-x">
        <SectionHeading
          label={label}
          title={title}
          description={description}
          align="center"
        />

        <Reveal direction="up" delay={0.1} className="mx-auto mt-12 max-w-[680px]">
          <ContactForm withServiceField={withServiceField} />
        </Reveal>
      </div>

      <div className="mt-20 border-y border-line py-6 md:mt-28">
        <Marquee speed={30} fade>
          {Array.from({ length: 5 }).map((_, index) => (
            <a
              key={index}
              href={`mailto:${site.email}`}
              className="display flex items-center gap-8 pr-8 text-[36px] whitespace-nowrap transition-colors duration-300 hover:text-accent md:text-[52px]"
            >
              {site.email}
              <span aria-hidden="true" className="text-accent">
                ✳
              </span>
            </a>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
