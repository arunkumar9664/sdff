import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { cn } from "@/lib/utils";

export function PageHero({
  title,
  description,
  breadcrumb,
  children,
  className,
}: {
  title: string;
  description?: string;
  breadcrumb?: { label: string; href?: string }[];
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-[var(--color-primary-navy)] text-white",
        className,
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse at 15% 20%, rgba(91,197,242,0.35), transparent 48%), radial-gradient(ellipse at 85% 10%, rgba(91,197,242,0.15), transparent 40%)",
        }}
        aria-hidden
      />
      <Container className="relative py-14 md:py-20">
        {breadcrumb ? (
          <div className="[&_a]:text-white/75 [&_a:hover]:text-white [&_li]:text-white/75 [&_span]:text-white [&_svg]:text-white/60">
            <Breadcrumb items={breadcrumb} />
          </div>
        ) : null}
        <h1 className="max-w-3xl text-3xl md:text-4xl lg:text-5xl font-bold text-white">
          {title}
        </h1>
        {description ? (
          <p className="mt-4 max-w-2xl text-base md:text-lg text-white/80 leading-relaxed">
            {description}
          </p>
        ) : null}
        {children ? <div className="mt-8">{children}</div> : null}
      </Container>
    </div>
  );
}
