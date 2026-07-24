import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="grid min-h-[70vh] place-items-center px-6 pt-16 pb-20">
      <div className="text-center">
        <p className="display text-accent text-[96px] leading-none md:text-[160px]">
          404
        </p>
        <h1 className="display mt-4 text-[36px] leading-tight md:text-[52px]">
          This page moved on
        </h1>
        <p className="mx-auto mt-5 max-w-[42ch] text-[15px] leading-relaxed text-ink-soft">
          The link is broken or the page has been retired. Head back to the
          homepage or take a look at recent work.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <ButtonLink href="/">Back home</ButtonLink>
          <ButtonLink href="/works" variant="outline">
            View works
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
