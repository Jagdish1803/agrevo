"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { useEffect, useState } from "react";
import { Logo } from "@/components/ui/Logo";
import { ButtonLink } from "@/components/ui/Button";
import { Close, Menu } from "@/components/ui/icons";
import { navLinks } from "@/lib/site";
import { EASE_OUT_EXPO } from "@/lib/motion";

/** Scroll offset at which the bar tightens its border and shadow. */
const LIFT_AT = 24;

/**
 * Floating navigation island.
 *
 * A single rounded bar, pinned to the top and horizontally centred: wordmark
 * on the left, links dead-centre, Contact on the right. One row, one surface —
 * no stacked rows and no detached badges floating over the page.
 *
 * The bar's geometry is fixed at every scroll position. Scrolling only
 * cross-fades its border and shadow (opacity/colour), so nothing can shift
 * under the cursor.
 */
export function Navbar() {
  const pathname = usePathname();
  const [lifted, setLifted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setLifted(latest > LIFT_AT);
  });

  // Lock body scroll while the menu overlay is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-night focus:px-5 focus:py-3 focus:text-sm focus:text-white"
      >
        Skip to content
      </a>

      <header className="fixed inset-x-0 top-0 z-50 pt-4 md:pt-5">
        <div className="container-wide">
          <div
            className={`relative flex h-[56px] items-center justify-between rounded-full border bg-surface/75 pr-2 pl-5 backdrop-blur-xl transition-[border-color,box-shadow] duration-300 md:h-[64px] md:pl-7 ${
              lifted
                ? "border-line shadow-[0_10px_30px_-12px_rgba(0,0,0,0.18)]"
                : "border-transparent shadow-none"
            }`}
          >
            <Logo />

            {/* Absolute centring keeps the links dead-centre no matter how
                wide the wordmark or the actions become. */}
            <nav
              aria-label="Primary"
              className="absolute left-1/2 hidden -translate-x-1/2 md:block"
            >
              <ul className="flex items-center gap-8 text-[15px]">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      aria-current={isActive(link.href) ? "page" : undefined}
                      className={`relative py-1 transition-colors duration-300 hover:text-accent ${
                        isActive(link.href) ? "text-accent" : "text-ink"
                      }`}
                    >
                      {link.label}
                      <span
                        aria-hidden="true"
                        className={`absolute -bottom-0.5 left-0 h-px w-full origin-left bg-accent transition-transform duration-300 ${
                          isActive(link.href) ? "scale-x-100" : "scale-x-0"
                        }`}
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex items-center gap-2">
              {/* Visibility lives on the wrapper: the button's own base class
                  sets `inline-flex`, which would otherwise beat `hidden`. */}
              <span className="hidden md:block">
                <ButtonLink
                  href="/contact"
                  variant="dark"
                  arrow={false}
                  className="px-6 py-3 text-sm"
                >
                  Contact
                </ButtonLink>
              </span>

              <button
                type="button"
                onClick={() => setMenuOpen((open) => !open)}
                aria-expanded={menuOpen}
                aria-controls="site-menu"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                className="grid size-10 cursor-pointer place-items-center rounded-full bg-night text-white md:hidden"
              >
                {menuOpen ? <Close /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ---------------- Mobile menu overlay ---------------- */}
      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            id="site-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-night md:hidden"
          >
            <motion.nav
              aria-label="Mobile"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
              }}
              className="container-wide flex h-full flex-col justify-center gap-1"
            >
              {[...navLinks, { label: "Contact", href: "/contact" }].map((link) => (
                <motion.div
                  key={link.href}
                  variants={{
                    hidden: { opacity: 0, y: 24 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5, ease: EASE_OUT_EXPO },
                    },
                  }}
                >
                  <Link
                    href={link.href}
                    // Dismiss on tap — covers same-route taps too, which a
                    // pathname-watching effect would miss.
                    onClick={() => setMenuOpen(false)}
                    className={`display block py-2 text-[44px] leading-tight transition-colors duration-300 hover:text-accent ${
                      isActive(link.href) ? "text-accent" : "text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </motion.nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
