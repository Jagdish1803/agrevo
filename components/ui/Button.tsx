"use client";

import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { ArrowRight } from "@/components/ui/icons";

type Variant = "dark" | "light" | "accent" | "outline";

const base =
  "group/btn relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full " +
  "px-6 py-3.5 text-[15px] font-medium leading-none transition-colors duration-300 " +
  "md:px-7 md:py-4";

const variants: Record<Variant, string> = {
  dark: "bg-night text-white hover:text-white",
  light: "bg-white text-ink shadow-[0_1px_2px_rgba(0,0,0,0.08)]",
  accent: "bg-accent text-white",
  outline: "border border-line bg-transparent text-ink",
};

/** Fill that wipes upward on hover — the reference site's button micro-interaction. */
const hoverFill: Record<Variant, string> = {
  dark: "bg-accent",
  light: "bg-night",
  accent: "bg-night",
  outline: "bg-night",
};

const hoverText: Record<Variant, string> = {
  dark: "",
  light: "group-hover/btn:text-white",
  accent: "",
  outline: "group-hover/btn:text-white",
};

type ButtonProps = {
  children: ReactNode;
  variant?: Variant;
  /** Show the trailing arrow that nudges right on hover. */
  arrow?: boolean;
  className?: string;
};

function Inner({
  children,
  variant,
  arrow,
}: {
  children: ReactNode;
  variant: Variant;
  arrow: boolean;
}) {
  return (
    <>
      <span
        aria-hidden="true"
        className={`absolute inset-0 translate-y-full rounded-full transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/btn:translate-y-0 ${hoverFill[variant]}`}
      />
      <span
        className={`relative z-10 flex items-center gap-2 transition-colors duration-300 ${hoverText[variant]}`}
      >
        {children}
        {arrow ? (
          <ArrowRight className="size-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
        ) : null}
      </span>
    </>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "dark",
  arrow = true,
  className = "",
  ...rest
}: ButtonProps & { href: string } & Omit<
    ComponentProps<typeof Link>,
    "href" | "className" | "children"
  >) {
  return (
    <Link
      href={href}
      className={`${base} ${variants[variant]} ${className}`}
      {...rest}
    >
      <Inner variant={variant} arrow={arrow}>
        {children}
      </Inner>
    </Link>
  );
}

export function Button({
  children,
  variant = "dark",
  arrow = true,
  className = "",
  ...rest
}: ButtonProps & ComponentProps<"button">) {
  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      {...rest}
    >
      <Inner variant={variant} arrow={arrow}>
        {children}
      </Inner>
    </button>
  );
}
