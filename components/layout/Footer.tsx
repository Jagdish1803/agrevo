import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { LocalTime } from "@/components/ui/LocalTime";
import { BackToTop } from "@/components/layout/BackToTop";
import { Marquee } from "@/components/ui/Marquee";
import { ArrowUpRight, Sparkle } from "@/components/ui/icons";
import { footerNav, site } from "@/lib/site";

function Column({
  title,
  links,
}: {
  title: string;
  links: readonly { label: string; href: string }[];
}) {
  const external = title === "Social";

  return (
    <nav aria-label={title}>
      <p className="text-[13px] tracking-[0.02em] text-white/40 uppercase">
        {title}
      </p>
      <ul className="mt-5 space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              {...(external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="group inline-flex items-center gap-1 text-[15px] text-white/72 transition-colors duration-300 hover:text-accent"
            >
              {link.label}
              {external ? (
                <ArrowUpRight className="size-3.5 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100" />
              ) : null}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-night text-white">
      {/* Ambient violet glow, picking up the accent from the brand palette */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-1/3 left-1/2 h-[70vh] w-[120vw] -translate-x-1/2 opacity-40"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(124,58,237,0.55) 0%, rgba(124,58,237,0) 70%)",
        }}
      />

      {/* Scrolling ticker */}
      <div className="relative border-b border-white/10 py-5">
        <Marquee speed={40} pauseOnHover>
          {Array.from({ length: 6 }).map((_, index) => (
            <span
              key={index}
              className="display flex items-center gap-8 pr-8 text-[28px] whitespace-nowrap text-white/90 md:text-[38px]"
            >
              New Templates
              <Sparkle className="size-4 text-accent" />
            </span>
          ))}
        </Marquee>
      </div>

      <div className="container-wide relative pt-16 pb-10 md:pt-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_repeat(3,1fr)] md:gap-8">
          <div className="max-w-[34ch]">
            <Logo tone="light" />
            <p className="mt-5 text-[15px] leading-relaxed text-white/56">
              {site.description}
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-6 inline-flex items-center gap-1.5 text-[15px] text-white transition-colors hover:text-accent"
            >
              {site.email}
              <ArrowUpRight className="size-4" />
            </a>
          </div>

          <Column title="Navigation" links={footerNav.navigation} />
          <Column title="Social" links={footerNav.social} />
          <Column title="Legals" links={footerNav.legals} />
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-white/10 pt-7 text-[13px] text-white/48 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>

          <p className="flex items-center gap-2">
            <span className="text-white/72">{site.city}</span>
            <span aria-hidden="true">→</span>
            <LocalTime className="tabular-nums text-white/72" />
          </p>

          <BackToTop />
        </div>
      </div>
    </footer>
  );
}
