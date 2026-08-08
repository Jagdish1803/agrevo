import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { Manifesto } from "@/components/sections/Manifesto";
import { Founder } from "@/components/sections/Founder";
import { TrustMarquee } from "@/components/sections/TrustMarquee";
import { Tools } from "@/components/sections/Tools";
import { Awards } from "@/components/sections/Awards";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { ContactSection } from "@/components/sections/ContactSection";
import { ButtonLink } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About",
  description:
    "Logic first, then craft — meet the studio behind LogicLoom Web.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Meet LogicLoom Web"
        title="Logic First, Then Craft"
        description="Structure the problem, then weave the interface around it. At LogicLoom Web, every website starts as a system before it becomes a screen."
        action={<ButtonLink href="/works">View Projects</ButtonLink>}
      />
      <Manifesto text="We help fast-moving digital startups launch sharper brands and websites — with clarity, speed, and no drama. Think bold storytelling, pixel-perfect design and agile execution, all tailored to scale your next big move." />
      <Founder />
      <TrustMarquee />
      <Tools />
      <CtaBanner />
      <Awards />
      <ContactSection />
    </>
  );
}
