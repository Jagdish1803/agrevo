import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ContactSection } from "@/components/sections/ContactSection";
import { Faq } from "@/components/sections/Faq";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Have a project, idea or challenge? Let's collaborate and bring something meaningful to life.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Let's Build Something Together"
        title="Contact"
        description="Have a project, idea or challenge? We would love to hear it. Let's collaborate and bring something meaningful to life."
      />
      <ContactSection
        label="Contact"
        title="Get In Touch"
        description="Tell us what you are building and we will come back within one working day."
        withServiceField
      />
      <Faq />
    </>
  );
}
