import type { Metadata } from "next";
import { LegalPage, type LegalBlock } from "@/components/sections/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `The terms that govern engagements with ${site.name}.`,
  alternates: { canonical: "/terms-and-condition" },
};

const blocks: LegalBlock[] = [
  {
    heading: "Agreement",
    body: [
      `These terms apply to design and development engagements with ${site.name} unless a signed statement of work says otherwise.`,
      "Starting a project — by written approval of a quote or by paying a deposit — indicates acceptance of these terms.",
    ],
  },
  {
    heading: "Scope and revisions",
    body: [
      "Every engagement begins with a written scope covering deliverables, timeline and the number of revision rounds included.",
      "Work outside that scope is quoted separately before it starts. We will never bill for unapproved additions.",
    ],
  },
  {
    heading: "Timelines",
    body: [
      "Timelines assume feedback within two working days at each review point. Longer gaps move the delivery date by the same amount.",
      "Delivery estimates published on the site are typical, not contractual, until confirmed in a scope document.",
    ],
  },
  {
    heading: "Fees and payment",
    body: [
      "Fixed-scope projects are invoiced 50% on kickoff and 50% on handover. Retainers are invoiced monthly in advance.",
      "Invoices are payable within 14 days. Work may pause on overdue accounts.",
    ],
  },
  {
    heading: "Ownership",
    body: [
      "On final payment, all rights in the approved deliverables transfer to you, including source files.",
      "We retain the right to display the work in our portfolio and case studies unless you ask us in writing not to.",
    ],
  },
  {
    heading: "Liability",
    body: [
      "Our aggregate liability for any engagement is limited to the fees paid for it. We are not liable for indirect or consequential loss.",
      "Nothing in these terms limits liability that cannot be limited under applicable law.",
    ],
  },
  {
    heading: "Termination",
    body: [
      "Either party may end an engagement with 14 days' written notice. You pay for work completed to that point and receive those deliverables.",
      `Questions about these terms can be sent to ${site.email}.`,
    ],
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of Service"
      updated="1 January 2026"
      blocks={blocks}
    />
  );
}
