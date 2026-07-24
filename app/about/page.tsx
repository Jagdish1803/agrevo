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
    "Shaping next-generation experiences through design, technology and purpose — meet the studio behind Agero.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Meet Agero"
        title="Bold Ideas, Real Impact"
        description="Shaping next-gen experiences through design, tech and purpose. At Agero, innovation is not a buzzword — it is the foundation."
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
