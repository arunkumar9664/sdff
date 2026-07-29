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
        "on-dark relative overflow-hidden bg-[var(--color-primary-navy)]",
        className,
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse at 15% 20%, rgba(56,189,248,0.28), transparent 48%), radial-gradient(ellipse at 85% 10%, rgba(14,165,233,0.18), transparent 40%)",
        }}
        aria-hidden
      />
      <Container className="relative py-14 md:py-20">
        {breadcrumb ? (
          <div className="mb-4 [&_a]:text-[#cbd5e1] [&_a:hover]:text-white [&_li]:text-[#94a3b8] [&_span]:text-white [&_svg]:text-[#94a3b8]">
            <Breadcrumb items={breadcrumb} />
          </div>
        ) : null}
        <h1
          className="max-w-3xl text-3xl md:text-4xl lg:text-5xl font-bold"
          style={{ color: "#ffffff" }}
        >
          {title}
        </h1>
        {description ? (
          <p
            className="mt-4 max-w-2xl text-base md:text-lg leading-relaxed"
            style={{ color: "#e2e8f0" }}
          >
            {description}
          </p>
        ) : null}
        {children ? <div className="mt-8">{children}</div> : null}
      </Container>
    </div>
  );
}
