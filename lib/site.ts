/**
 * Global site configuration — single source of truth for metadata,
 * navigation and contact details.
 */

export const site = {
  name: "Agero",
  title: "Agero — Modern Portfolio & Creative Agency",
  description:
    "We make it easy for startups to launch, grow, and scale with clean, conversion-focused designs — no delays, no drama.",
  url: "https://agero.example.com",
  locale: "en_GB",
  email: "jnaikar62@gmail.com",
  city: "London",
  timeZone: "Europe/London",
  founder: "Franklin Clinton",
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
