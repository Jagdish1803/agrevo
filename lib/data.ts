/**
 * Content model for the whole site.
 *
 * Every page reads from here so copy, ordering and metadata can be swapped
 * for a CMS later without touching a single component.
 */

/* -------------------------------------------------------------------- */
/*  Projects                                                             */
/* -------------------------------------------------------------------- */

export type Screenshot = { src: string; alt: string };

type ProjectBase = {
  slug: string;
  name: string;
  tagline: string;
  intro: string;
  year: string;
  role: string;
  services: string[];
  scope: string;
  date: string;
  chapters: { title: string; body: string[] }[];
  review?: { quote: string; author: string; role: string };
};

/**
 * A project is illustrated either by generated vector artwork or by real
 * screenshots of the build (files in `public/works/<slug>/`).
 */
export type Project = ProjectBase &
  (
    | {
        /** Vector artwork key rendered by <ProjectArt />. */
        art: "archin" | "vntnr" | "aeorim";
        shots?: never;
      }
    | {
        art?: never;
        /** Desktop shots are 1440×900; the mobile shot is 390×844 @2x. */
        shots: {
          cover: Screenshot;
          gallery: Screenshot[];
          mobile: Screenshot;
        };
      }
  );

export const projects: Project[] = [
  {
    slug: "raya-resorts",
    name: "Raya Resorts",
    tagline: "Raya Resorts, North Goa",
    intro:
      "A boutique pool resort in Assagao, rebuilt as a fast, cinematic website that sells the stay before guests ever arrive.",
    year: "2026",
    role: "Design & Development",
    services: ["Website Design", "Web Development", "Booking Flow", "SEO"],
    shots: {
      cover: {
        src: "/works/raya-resorts/cover.webp",
        alt: "Raya Resorts home page: “Goa, unhurried.” over the resort pool at dusk",
      },
      gallery: [
        {
          src: "/works/raya-resorts/showcase.webp",
          alt: "“Four ways to fall for Raya” — expanding panels for rooms, dining, spa and weddings",
        },
        {
          src: "/works/raya-resorts/pool.webp",
          alt: "Full-screen pool section: “One of the largest pools in North Goa.”",
        },
        {
          src: "/works/raya-resorts/amenities.webp",
          alt: "“Everything, right here.” — photo tiles for the pool and pool bar above amenity cards",
        },
      ],
      mobile: {
        src: "/works/raya-resorts/mobile.webp",
        alt: "Raya Resorts home page on a phone",
      },
    },
    scope: "Website Redesign, Development",
    date: "October 2026",
    chapters: [
      {
        title: "Discovery & Strategy",
        body: [
          "Raya has sixty-four rooms, private plunge pools and one of the largest swimming pools in North Goa — a lot to say, so we started from the guest's questions: which room, what it costs, what a day there feels like, and how to book.",
          "That gave us the structure. Rooms are presented like products, each with highlights, a slideshow and spec-style details, and a compare tool to weigh them side by side. Dining, the spa, weddings and experiences each got a page of their own.",
        ],
      },
      {
        title: "Design & Build",
        body: [
          "The look comes straight from the Raya logo: burgundy, champagne gold and a Cormorant Garamond display serif. We traced the emblem into vector paths so it stays sharp at any size, and the home hero draws it line by line.",
          "Built in Next.js with scroll-driven motion — a shrinking full-bleed hero, a pool that zooms to fill the screen, a pinned “day at Raya” story — all of it switched off for visitors who prefer reduced motion.",
          "Booking works like an online store: pick a room, dates, guests and extras, with a live summary that follows you down the page. Every page ships with SEO metadata, structured data, a sitemap and Open Graph images.",
        ],
      },
    ],
  },
  {
    slug: "smita-dental",
    name: "Smita Dental",
    tagline: "Smita Dental Care Centre",
    intro:
      "A trusted Vashi dental clinic since 1999, given a calm, animated website that explains every treatment and makes booking a visit effortless.",
    year: "2026",
    role: "Design & Development",
    services: ["Website Design", "Web Development", "Content", "SEO"],
    shots: {
      cover: {
        src: "/works/smita-dental/cover.webp",
        alt: "Smita Dental home page: “Dentistry, done beautifully.” over the clinic video",
      },
      gallery: [
        {
          src: "/works/smita-dental/clinic.webp",
          alt: "Clinic stats above the “Step inside” gallery of treatment rooms and reception",
        },
        {
          src: "/works/smita-dental/treatments.webp",
          alt: "“Everything your smile needs. Under one roof.” — the treatments section",
        },
        {
          src: "/works/smita-dental/dentists.webp",
          alt: "“Specialist expertise. Personal care.” — profiles of the clinic's dentists",
        },
      ],
      mobile: {
        src: "/works/smita-dental/mobile.webp",
        alt: "Smita Dental home page on a phone, with call, WhatsApp and booking buttons",
      },
    },
    scope: "Website Redesign, Development",
    date: "October 2026",
    chapters: [
      {
        title: "Discovery & Strategy",
        body: [
          "Smita Dental Care Centre has treated over 18,500 patients across twenty-five years, led by a prosthodontist who teaches the next generation of dentists. Patients come anxious; the site needed to feel as calm and careful as the clinic itself.",
          "We rewrote the structure around what patients look for: eighteen treatment pages that explain each procedure plainly, eight after-care guides for the days after a visit, the doctors behind the work, and an appointment form never more than a tap away.",
        ],
      },
      {
        title: "Design & Build",
        body: [
          "The home page opens on a full-bleed loop of the clinic itself, with the full tour a click away. Headlines rise word by word with a serif italic accent, stats count up, and a quiet ticker runs through every treatment.",
          "On phones, call, WhatsApp and booking sit in a bar at the bottom of every screen, and the menu shows clinic hours and contact details up front.",
          "The site exports as plain static files with one small PHP form handler, so it runs on the clinic's existing hosting. Every old page URL redirects to its new home, so no search ranking is lost.",
        ],
      },
    ],
  },
  {
    slug: "archin",
    name: "Archin",
    tagline: "Archin Design Studio",
    intro:
      "We partner with businesses across industries to help them reach their goals. Here is a closer look at some of our selected work.",
    year: "2025",
    role: "Lead Designer",
    services: ["Website Design", "Product Design", "Branding", "Development"],
    art: "archin",
    scope: "Website Design, Branding",
    date: "30th May 2025",
    chapters: [
      {
        title: "Discovery & Strategy",
        body: [
          "We opened with a deep discovery sprint: a brand audit, a competitive sweep of the studio's field, and a pair of working sessions with the founders. What surfaced was a wish for something calm and structured — an identity that reads the way their buildings do.",
          "From there we set the tone: quiet, precise, unmistakably architectural. We mapped three creative directions rooted in drafting geometry, timeless type and a grounded earth palette, then chose the one that gave the brand the most room to grow.",
        ],
      },
      {
        title: "Creation & Deliverables",
        body: [
          "Branding stayed deliberately restrained. A minimal logomark borrows from drafting notation, the custom logotype signals precision, and the wider system leans on generous white space, a strict grid and neutral tones.",
          "We shipped a full kit at handover: logo suite, guidelines, stationery and editable source files for social and pitch decks. The website came with documentation and a training session so the team could keep building on their own.",
        ],
      },
    ],
    review: {
      quote:
        "LogicLoom took a loose set of ideas and returned a brand that finally looks like the studio we actually are.",
      author: "John Watson",
      role: "Founder, Archin Design Studio",
    },
  },
  {
    slug: "vntnr",
    name: "VNTNR",
    tagline: "VNTNR Wine Merchant",
    intro:
      "We have partnered with businesses across various industries to help them achieve their goals.",
    year: "2018",
    role: "Logo Designer",
    services: ["Designing", "Branding", "Redesigning", "Development"],
    art: "vntnr",
    scope: "Logo Design, Branding",
    date: "12th November 2018",
    chapters: [
      {
        title: "Discovery & Strategy",
        body: [
          "VNTNR arrived with a strong catalogue and a shop front that undersold it. Our first job was to work out what the merchant stood for beyond the bottles: provenance, patience and a refusal to talk down to the customer.",
          "We built the strategy around a single idea — the label should feel like the cellar. Warm, dim, tactile. That informed the type, the crop of every photograph and the pacing of the storefront.",
        ],
      },
      {
        title: "Creation & Deliverables",
        body: [
          "The wordmark is set in an extended grotesque with a registered mark tucked at the shoulder, so it holds up printed small on a neck label and blown up across a landing page.",
          "Deliverables covered the mark, label system, packaging templates and a commerce front-end with a subscription flow, all handed over with a living style guide.",
        ],
      },
    ],
    review: {
      quote:
        "The mark works everywhere — on a bottle, on a tote, on a billboard. That consistency changed how people read us.",
      author: "Marta Iversen",
      role: "Founder, VNTNR",
    },
  },
  {
    slug: "aeorim",
    name: "Aeorim",
    tagline: "Aeorim Studio",
    intro:
      "We have collaborated with companies from diverse sectors to turn their visions into reality. Here is a look at some of our featured work.",
    year: "2023",
    role: "Website Designer",
    services: ["Branding", "Revamp", "Development", "Designing"],
    art: "aeorim",
    scope: "Website Revamp, Branding",
    date: "8th August 2023",
    chapters: [
      {
        title: "Discovery & Strategy",
        body: [
          "Aeorim had outgrown a site built for a much smaller company. We audited every template, cut the page count by half and rebuilt the information architecture around the two journeys that actually converted.",
          "A short research phase with their sales team told us what buyers really asked for. Those questions became the spine of the new narrative.",
        ],
      },
      {
        title: "Creation & Deliverables",
        body: [
          "The revamp introduced a modular section library, so marketing can assemble a new page in an afternoon without a designer in the loop.",
          "We handed over the component set, a motion specification and a performance budget, alongside a rebuilt brand palette tuned for contrast on dark surfaces.",
        ],
      },
    ],
    review: {
      quote:
        "Half the pages, twice the pipeline. The new system pays for itself every time we launch something.",
      author: "Priya Raman",
      role: "Head of Growth, Aeorim",
    },
  },
];

export const getProject = (slug: string) =>
  projects.find((project) => project.slug === slug);

export const getNextProject = (slug: string) => {
  const index = projects.findIndex((project) => project.slug === slug);
  return projects[(index + 1) % projects.length];
};

/* -------------------------------------------------------------------- */
/*  Services                                                             */
/* -------------------------------------------------------------------- */

export type Service = {
  title: string;
  tags: string[];
  copy: string;
  price: string;
  timeline: string;
  art: "web" | "brand" | "logo";
};

export const services: Service[] = [
  {
    title: "Web Design",
    tags: ["UX/UI Design", "Responsive Layouts", "Web Development"],
    copy: "We design visually compelling, user-centric websites that blend creativity with function — built from scratch around your brand.",
    price: "$250",
    timeline: "1 – 2 Months",
    art: "web",
  },
  {
    title: "Brand Design",
    tags: ["Visual Identity", "Style Guides", "Brand Strategy"],
    copy: "From logo to language, we shape strategic brand systems that tell your story and stand strong wherever they show up.",
    price: "$130",
    timeline: "1 Month",
    art: "brand",
  },
  {
    title: "Logo Design",
    tags: ["Logo Marks", "Wordmarks", "Icon Design"],
    copy: "Every brand deserves a signature mark. We craft logos that are bold and clear — so your brand speaks without saying a word.",
    price: "$100",
    timeline: "15 Days",
    art: "logo",
  },
];

/* -------------------------------------------------------------------- */
/*  Testimonials                                                         */
/* -------------------------------------------------------------------- */

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  initials: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "LogicLoom turned our ideas into a sharp, clean brand. Fast, easy, and right on point.",
    author: "Ethan Moore",
    role: "Co-founder, NovaTech",
    initials: "EM",
  },
  {
    quote:
      "Clear, thoughtful, and fast — LogicLoom made the whole process effortless.",
    author: "Olivia Tran",
    role: "Creative Director, Bloom Agency",
    initials: "OT",
  },
  {
    quote: "Smart design, smooth delivery. LogicLoom is great to work with.",
    author: "Lucas Bennett",
    role: "Product Manager, Hexa Studio",
    initials: "LB",
  },
];

export const stats = [
  { value: 120, suffix: "+", label: "Finalized Projects" },
  { value: 98, suffix: "%", label: "Client satisfaction rate" },
  { value: 1, suffix: "M", label: "Gross Revenue", prefix: "$" },
] as const;

/* -------------------------------------------------------------------- */
/*  Founder timeline                                                     */
/* -------------------------------------------------------------------- */

export const timeline = [
  { role: "Full-service web & brand studio", period: "2024-Now" },
  { role: "Design systems practice added", period: "2023-2024" },
  { role: "Ecommerce and product builds", period: "2018-2023" },
  { role: "LogicLoom Web founded", period: "2015-2018" },
] as const;

/* -------------------------------------------------------------------- */
/*  Awards                                                               */
/* -------------------------------------------------------------------- */

export const awards = [
  { org: "Awwwards", title: "SOTY 2023 — 1st Winner", project: "Archin" },
  {
    org: "CSS Awards",
    title: "Top 5 Best of eCommerce Websites 2023",
    project: "VNTNR",
  },
  {
    org: "CSS Awards",
    title: "Winner — US Behance Portfolio Review 2024",
    project: "Aeorim",
  },
  {
    org: "Dribble",
    title: "Top 10 Best of Mobile App Design 2024",
    project: "Swat Co.",
  },
  {
    org: "FWA Awards",
    title: "Winner — Best of Architecture Website 2025",
    project: "Unerio",
  },
] as const;

/* -------------------------------------------------------------------- */
/*  Pricing                                                              */
/* -------------------------------------------------------------------- */

export type Plan = {
  name: string;
  copy: string;
  delivery: string;
  priceLabel?: string;
  price: string;
  cadence?: string;
  features: string[];
  featured?: boolean;
};

export const plans: Plan[] = [
  {
    name: "Standard Plan",
    copy: "Ideal for lean teams or startups needing clean, fast design delivery for websites or branding assets.",
    delivery: "4-6 weeks",
    price: "$500",
    cadence: "/month",
    features: [
      "You provide the wireframe",
      "Visual design using Figma & Framer",
      "Focused on website or branding only",
      "Weekday turnaround (Mon–Fri)",
    ],
  },
  {
    name: "Premium Plan",
    copy: "A complete design experience — tailored strategy, polished visuals, and flexible collaboration throughout the process.",
    delivery: "4-6 weeks",
    priceLabel: "Starting at",
    price: "$1000",
    features: [
      "Help shaping your wireframe or brief",
      "Custom design for website, brand, or logo",
      "High-fidelity mockups using Figma & Framer",
      "Dedicated weekday focus & deeper involvement",
    ],
    featured: true,
  },
];

/* -------------------------------------------------------------------- */
/*  FAQ                                                                  */
/* -------------------------------------------------------------------- */

export const faqs = [
  {
    q: "Why LogicLoom Web instead of a full-time designer?",
    a: "You get senior-level output without the overhead of a salary, benefits or a hiring cycle. Scale the work up when you are shipping and pause it when you are not.",
  },
  {
    q: "Speed of design delivery?",
    a: "Pretty quick! Most designs are delivered in 2–3 business days. We prioritize quality without slowing you down.",
  },
  {
    q: "What is the LogicLoom Web process like?",
    a: "A short kickoff to align on the brief, a first pass within days, then focused revision rounds. You always know what is in progress and what lands next.",
  },
  {
    q: "How to request a design?",
    a: "Send the brief through the contact form or your shared board. We confirm scope and timing the same working day and queue it immediately.",
  },
  {
    q: "What if I do not like the design?",
    a: "We keep iterating. Every engagement includes revision rounds, and we would rather rework a direction than hand over something you are lukewarm about.",
  },
  {
    q: "Are there any refunds?",
    a: "If we have not started production work, the engagement is refundable in full. Once design is underway we bill only for the work already delivered.",
  },
] as const;

/* -------------------------------------------------------------------- */
/*  Blog                                                                 */
/* -------------------------------------------------------------------- */

export const posts = [
  {
    title: "Bridging Design & Development",
    excerpt: "Clean UI into seamless code",
    readTime: "2 Min Read",
    art: 0,
  },
  {
    title: "High-Performance Website",
    excerpt: "Principles devs should build with",
    readTime: "3 Min Read",
    art: 1,
  },
  {
    title: "Design That Converts",
    excerpt: "Strategic visuals drive results",
    readTime: "2 Min Read",
    art: 2,
  },
  {
    title: "What Your Brand Needs",
    excerpt: "Consistency and sanity",
    readTime: "1 Min Read",
    art: 3,
  },
  {
    title: "Webflow vs. Code",
    excerpt: "Choosing the right approach",
    readTime: "3 Min Read",
    art: 4,
  },
  {
    title: "Macro Impact on Design",
    excerpt: "Designing details that elevate",
    readTime: "1 Min Read",
    art: 5,
  },
] as const;

/* -------------------------------------------------------------------- */
/*  Tools (About page)                                                   */
/* -------------------------------------------------------------------- */

export const tools = [
  {
    name: "Framer",
    role: "Development",
    badge: "PRO",
    copy: "By uniting design, prototyping and development, the platform lets us ship visually striking, high-performance sites in one seamless workflow.",
  },
  {
    name: "Notion",
    role: "Productivity",
    copy: "An all-in-one workspace combining notes, task management and collaboration behind a flexible, customizable interface.",
  },
  {
    name: "Webflow",
    role: "Design & CMS",
    copy: "Where design, CMS and development come together — ideal for building fast, visually rich websites without code.",
  },
] as const;

/* -------------------------------------------------------------------- */
/*  Marquee word lists                                                   */
/* -------------------------------------------------------------------- */

export const capabilityWords = [
  "Branding",
  "Logo",
  "Website",
  "Illustration",
  "Interface",
  "Strategy",
] as const;

export const trustMarquee = [
  "Website Design",
  "Brand Design",
  "Logo Design",
  "Senior Designer",
  "10 Years of Experience",
  "Over 100 Customers",
] as const;
