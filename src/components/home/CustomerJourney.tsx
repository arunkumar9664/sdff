import { Container, Section, SectionHeader } from "@/components/ui/Container";

const steps = [
  { step: "01", title: "Understand Your Need" },
  { step: "02", title: "Connect With Our Team" },
  { step: "03", title: "Application & Verification" },
  { step: "04", title: "Financial Assessment" },
  { step: "05", title: "Loan Processing" },
  { step: "06", title: "Ongoing Support" },
];

export function CustomerJourney() {
  return (
    <Section className="bg-white">
      <Container>
        <SectionHeader title="Your Journey With Us" align="center" />
        <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {steps.map((item, index) => (
            <li
              key={item.step}
              className="relative rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-bg)] p-5"
            >
              <span className="text-sm font-bold text-[var(--color-teal)]">
                {item.step}
              </span>
              <h3 className="mt-2 text-base font-semibold text-[var(--color-heading)]">
                {item.title}
              </h3>
              {index < steps.length - 1 ? (
                <span className="absolute -right-2 top-1/2 hidden h-0.5 w-4 bg-[var(--color-border)] xl:block" aria-hidden />
              ) : null}
            </li>
          ))}
        </ol>
        <p className="mt-8 text-center text-sm text-[var(--color-body)]">
          Actual process and requirements may vary by product and customer
          profile.
        </p>
      </Container>
    </Section>
  );
}
