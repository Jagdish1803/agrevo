import type { Metadata } from "next";
import { LegalPage, type LegalBlock } from "@/components/sections/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.name} collects, uses and protects your information.`,
  alternates: { canonical: "/privacy-policy" },
  robots: { index: true, follow: true },
};

const blocks: LegalBlock[] = [
  {
    heading: "Overview",
    body: [
      `This policy explains what information ${site.name} collects when you visit this site or start a project with us, why we collect it, and the choices you have.`,
      "We keep data collection to the minimum needed to reply to enquiries and run the studio. We do not sell personal information.",
    ],
  },
  {
    heading: "Information we collect",
    body: [
      "When you submit the contact form we receive the name, email address and project details you choose to share. That is the only personal data the site asks for directly.",
      "We also collect aggregate, non-identifying analytics such as page views and referrers to understand which work resonates.",
    ],
  },
  {
    heading: "How we use it",
    body: [
      "Enquiry details are used to scope, quote and deliver work, and to keep in touch about a project already in progress.",
      "We do not add enquirers to a marketing list without an explicit opt-in.",
    ],
  },
  {
    heading: "Cookies",
    body: [
      "The site uses only functional storage required to render the page. Any analytics we run is configured to avoid cross-site tracking identifiers.",
      "You can block cookies in your browser without losing access to any part of the site.",
    ],
  },
  {
    heading: "Data sharing and retention",
    body: [
      "We share data with processors only where necessary to operate — for example our email provider — and under contract terms that restrict onward use.",
      "Enquiry records are kept for 24 months, after which they are deleted unless the project is still active.",
    ],
  },
  {
    heading: "Your rights",
    body: [
      "You can request a copy of the data we hold about you, ask us to correct it, or ask us to delete it entirely.",
      `To make a request, email ${site.email}. We respond within 30 days.`,
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      updated="1 January 2026"
      blocks={blocks}
    />
  );
}
