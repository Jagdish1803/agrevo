import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SplitText } from "@/components/ui/SplitText";

/**
 * Full-bleed dark call-to-action panel used to close the inner pages.
 */
export function CtaBanner({
  label = "Project In Mind?",
  title = "Get In Touch",
  description = "Tell us about your project — we will bring the tools, vision and energy to make it real.",
  href = "/contact",
  cta = "Get Started",
}: {
  label?: string;
  title?: string;
  description?: string;
  href?: string;
  cta?: string;
}) {
  return (
    <section className="py-10 md:py-16">
      <div className="container-wide">
        <div className="relative grain overflow-hidden rounded-[24px] bg-night px-7 py-16 text-center text-white md:rounded-[40px] md:px-16 md:py-24">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-1/2 left-1/2 size-[600px] -translate-x-1/2 opacity-55"
            style={{
              background:
                "radial-gradient(50% 50% at 50% 50%, rgba(255,77,0,0.65) 0%, rgba(255,77,0,0) 70%)",
            }}
          />

          <div className="relative">
            <Reveal direction="up">
              <p className="eyebrow text-white/56">({label})</p>
            </Reveal>

            <h2 className="display mt-4 text-[40px] leading-[0.95] sm:text-[56px] md:text-[80px]">
              <SplitText text={title} />
            </h2>

            <Reveal direction="up" delay={0.15}>
              <p className="mx-auto mt-6 max-w-[46ch] text-[15px] leading-relaxed text-white/64 md:text-base">
                {description}
              </p>
            </Reveal>

            <Reveal direction="up" delay={0.25}>
              <div className="mt-9 flex justify-center">
                <ButtonLink href={href} variant="accent">
                  {cta}
                </ButtonLink>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
