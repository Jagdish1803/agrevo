import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { Pricing } from "@/components/sections/Pricing";
import { Faq } from "@/components/sections/Faq";
import { ContactSection } from "@/components/sections/ContactSection";
import { ButtonLink } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web design, brand design and logo design — scoped, priced and delivered without the drama.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Creative Services"
        title="Excellence Delivered"
        description="Ideas, stories and strategies from the creative edge — covering design, development, and the tools that bring bold digital work to life."
        action={<ButtonLink href="/#pricing">View Plans</ButtonLink>}
      />
      <ServicesSection showPricing />
      <Pricing />
      <Faq />
      <ContactSection />
    </>
  );
}
