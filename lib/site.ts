/**
 * Global site configuration — single source of truth for metadata,
 * navigation and contact details.
 */

export const site = {
  name: "LogicLoom Web",
  title: "LogicLoom Web — Web Design & Development Studio",
  description:
    "We weave logic and craft into websites that work — strategy, design and build for teams who want to launch fast and scale clean.",
  url: "https://logicloomweb.com",
  locale: "en_GB",
  email: "logicloomweb@gmail.com",
  city: "London",
  timeZone: "Europe/London",
} as const;

export const navLinks = [
  { label: "Works", href: "/works" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
] as const;

export const footerNav = {
  navigation: [
    { label: "About", href: "/about" },
    { label: "Works", href: "/works" },
    { label: "Services", href: "/services" },
    { label: "Blog", href: "/blog" },
  ],
  social: [
    { label: "Twitter(X)", href: "https://x.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "Dribble", href: "https://dribbble.com" },
  ],
  legals: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Term of Service", href: "/terms-and-condition" },
  ],
} as const;
