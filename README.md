# LogicLoom Web — Web Design & Development Studio

A production-ready Next.js studio site for **LogicLoom Web**, built to the
brand guidelines: the LogicLoom palette, Poppins/Inter type pairing, and the
interlaced-band logo mark, across works, case studies, services, pricing,
awards, blog and contact.

> **Brand source of truth.** Colours, typography and logo rules come from
> _LogicLoom Web — Brand Guidelines_. The palette lives in `app/globals.css`
> under `@theme`; the mark is `components/ui/LogoMark.tsx`.

---

## Stack

| Concern     | Choice                                            |
| ----------- | ------------------------------------------------- |
| Framework   | Next.js 16 (App Router, RSC, Turbopack)           |
| Language    | TypeScript, `strict`                              |
| Styling     | Tailwind CSS v4 (CSS-first `@theme` tokens)       |
| Motion      | Motion (`motion/react`)                           |
| Type        | Poppins (headings) + Inter (body) via `next/font`  |
| Deployment  | Static — every route prerenders                   |

---

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm start       # serve the build
npm run lint    # eslint (flat config)
```

---

## Project structure

```
app/
  layout.tsx              root shell: fonts, metadata, JSON-LD, nav + footer
  page.tsx                home — composes every section
  works/                  index + [slug] case studies (SSG)
  services/ about/ blog/ contact/
  privacy-policy/ terms-and-condition/
  sitemap.ts robots.ts not-found.tsx
  globals.css             design tokens, base layer, component utilities

components/
  layout/     Navbar, Footer, BackToTop
  sections/   one file per page section (Hero, Works, Pricing, Faq, …)
  ui/         reusable primitives (Button, Reveal, Marquee, Accordion, …)

lib/
  site.ts     site metadata + navigation
  data.ts     all content (projects, services, plans, FAQs, posts…)
  motion.ts   shared easing curves
```

**Content lives in `lib/data.ts`.** Every page reads from it, so swapping in a
CMS later is a matter of replacing one module — no component changes.

---

## Design system

Tokens are declared once in `app/globals.css` under Tailwind v4's `@theme`, so
they are available as both CSS variables and utility classes.

The five brand colours map onto the semantic tokens like this:

| Token             | Value     | Brand name      | Use                        |
| ----------------- | --------- | --------------- | -------------------------- |
| `--color-canvas`  | `#ffffff` | White           | primary background         |
| `--color-surface` | `#f1f1f5` | Cloud Gray      | cards, secondary bg        |
| `--color-brand`   | `#2d2b6b` | Deep Indigo     | logo, headings, dominant   |
| `--color-accent`  | `#7c3aed` | Vibrant Violet  | links, buttons, highlights |
| `--color-ink`     | `#1a1a2e` | Charcoal        | body text                  |
| `--color-night`   | `#1a1a2e` | Charcoal        | dark sections              |
| `--color-night-soft`| `#2d2b6b`| Deep Indigo    | raised dark surfaces       |

`--color-ink-soft`, `--color-ink-faint` and `--color-line` are neutral steps
interpolated from Charcoal and Cloud Gray — the five brand colours alone leave
no mid-tones for text hierarchy and hairlines.

Breakpoints: **810px** (`md`) and **1440px** (`xl`), with `sm` at 480px and
`lg` at 1200px.

Reusable class utilities: `.container-x` / `.container-wide` (gutters +
max-width), `.display` (Poppins SemiBold headline, Deep Indigo by default),
`.display-outline` (the ghost outlined headline treatment), `.eyebrow`,
`.grain`, `.edge-fade`.

### Logo

`components/ui/LogoMark.tsx` draws the icon — four straight bands interlacing
over and under each other into a simplified "L", with a node at every crossing
and the indigo→violet gradient. `components/ui/Logo.tsx` is the horizontal
lockup (icon left, wordmark right) used in the navbar and footer; `tone="light"`
gives the reversed white treatment for dark grounds.

The mark's viewBox carries an 8-unit margin on a 64-unit grid, which *is* the
mandated clear space (one band width), so it can be placed flush. Icon-only
copies ship as `app/icon.svg` (favicon) and `public/logo-mark.svg`
(transparent ground). Per the guidelines, don't recolour outside the palette,
distort, rotate, add shadows, or change the weight relationship between
"LogicLoom" and "Web".

---

## Motion

Every interaction from the reference is reproduced:

- **Hero** — staggered per-line entrance with inline media pills.
- **`SplitText`** — per-character headline reveal on section titles.
- **`Reveal` / `RevealGroup`** — scroll-triggered fade + slide, fires once.
- **`Manifesto`** — scroll-linked word-by-word brightening (`useScroll`).
- **`Works`** — sticky cards that stack and scale down as you scroll past.
- **`Marquee`** — seamless infinite tickers (duplicated track, −50% translate).
- **`Counter`** — stats count up on entry.
- **`ServicesSection`** — shared-layout tab pill (`layoutId`).
- **`Testimonials`** — autoplaying quote carousel, pauses on hover/focus.
- **Buttons** — fill wipes upward on hover, arrow nudges right.
- **`Magnetic`** — cursor-following buttons (mouse pointers only).

All of it is centralised on the easing curves in `lib/motion.ts`.

---

## Accessibility

- `prefers-reduced-motion` is honoured twice over: globally in CSS, and in JS
  where components render their **final state immediately** rather than fading.
- Skip-to-content link; `<main id="main">` landmark.
- Accordion uses real buttons with `aria-expanded` / `aria-controls`.
- Tabs use `role="tablist"` / `tab` / `tabpanel`.
- Carousel exposes dot controls and announces changes via `aria-live`.
- Form has label association, `aria-invalid`, `aria-describedby` error text and
  inline validation; the success message is a `role="status"`.
- Decorative artwork is `aria-hidden`; animated split text keeps a
  screen-reader-only copy of the full string.
- Visible `:focus-visible` ring on every interactive element.

---

## SEO

- Per-route `metadata` with titles, descriptions and canonicals.
- Open Graph + Twitter card defaults from `lib/site.ts`.
- JSON-LD: `ProfessionalService` in the root layout, `FAQPage` on FAQ sections.
- Generated `sitemap.xml` (including all case studies) and `robots.txt`.
- Semantic headings, one `<h1>` per page.

---

## Performance

- Every route is **statically prerendered** (`○` / `●` in the build output).
- Server Components by default; `"use client"` only where interaction demands.
- Concept artwork is inline SVG/CSS (see below); the only raster images are
  case-study screenshots, served through `next/image` as AVIF/WebP with
  responsive `sizes`, lazy-loaded except the case-study cover.
- Fonts self-hosted and preloaded through `next/font/google`, `display: swap`.
- `optimizePackageImports` for `motion` keeps the client bundle lean.
- Marquees animate `transform` only, on the compositor.

---

## Artwork

The reference site fills its cards with licensed stock photography and product
mockups. Rather than redistribute those files, `components/ui/Artwork.tsx`
renders **original vector compositions** in the brand's visual language — deep
indigo grounds, violet light, hard geometry, fine grain — at matching aspect
ratios and contrast. Avatars and blog covers are likewise generated
deterministically from a seed.

### Case-study screenshots

Live builds are shown with real screenshots instead of artwork. A project in
`lib/data.ts` sets either `art` (a generated composition) or `shots`:

```ts
shots: {
  cover:   { src: "/works/<slug>/cover.webp", alt: "…" },   // 1440×900
  gallery: [{ src: "/works/<slug>/….webp", alt: "…" }, …],   // 1440×900
  mobile:  { src: "/works/<slug>/mobile.webp", alt: "…" },  // 390×844 @2x
},
```

Files live in `public/works/<slug>/`. `components/ui/ProjectCover.tsx` picks
the right visual for cards and case studies; the first gallery shot sits in
the first chapter, the rest plus the phone shot fill the "Inside the Build"
section. `review` is optional — the client quote block is skipped without it.

---

## Wiring up the contact form

`components/ui/ContactForm.tsx` validates client-side and then simulates a
send. To make it live, replace the body of `submit()` with a server action or
a POST to an API route — the validation, error and success states already work.
