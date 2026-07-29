import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function CTASection({
  title,
  description,
  primaryHref = "/contact",
  primaryLabel = "Get Detail",
  secondaryHref,
  secondaryLabel,
  className,
}: {
  title: string;
  description?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  className?: string;
}) {
  return (
    <section className={cn("py-16 md:py-20", className)}>
      <Container>
        <div className="relative overflow-hidden rounded-[28px] bg-[var(--color-primary-navy)] px-6 py-12 md:px-12 md:py-16 text-center shadow-[var(--shadow-lg)]">
          <div
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              background:
                "radial-gradient(circle at 15% 20%, rgba(91,197,242,0.35), transparent 40%), radial-gradient(circle at 90% 80%, rgba(91,197,242,0.18), transparent 35%)",
            }}
            aria-hidden
          />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
              {title}
            </h2>
            {description ? (
              <p className="mt-4 text-white/75 leading-relaxed">{description}</p>
            ) : null}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button href={primaryHref} variant="sky" size="lg">
                {primaryLabel}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Button>
              {secondaryHref && secondaryLabel ? (
                <Link
                  href={secondaryHref}
                  className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-3.5 font-semibold text-white hover:bg-white/10 transition"
                >
                  {secondaryLabel}
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
