import { PageHero } from "@/components/ui/PageHero";
import { Container, Section, SectionHeader, Badge } from "@/components/ui/Container";
import { presence } from "@/data/faqs";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Our Presence",
  description:
    "Growing closer to customers across India. Operational states will be published once verified.",
  path: "/presence",
});

export default function PresencePage() {
  const active = presence.filter((p) => p.isActive);
  const planned = presence.filter((p) => !p.isActive);

  return (
    <>
      <PageHero
        title="Our Presence"
        description="Growing closer to the customers and communities we serve across India."
        breadcrumb={[
          { label: "About", href: "/about" },
          { label: "Presence" },
        ]}
      />
      <Section className="bg-white">
        <Container>
          <SectionHeader
            title="Growing Closer to Our Customers"
            description="State and branch data is configuration-driven. Active markets appear only when verified operational geography is provided for Shree Deve Finance Frontiers."
          />

          <div className="mb-8 flex h-48 items-center justify-center rounded-[var(--radius-card)] border border-dashed border-[var(--color-border)] bg-[var(--color-muted)] text-sm text-[var(--color-body)]">
            Interactive India map placeholder — ready for verified presence data
          </div>

          {active.length > 0 ? (
            <div className="mb-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {active.map((loc) => (
                <div
                  key={loc.state}
                  className="rounded-[var(--radius-card)] border border-[var(--color-border)] p-5"
                >
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-bold text-[var(--color-heading)]">
                      {loc.state}
                    </h3>
                    <Badge>Active</Badge>
                  </div>
                  <p className="mt-2 text-sm text-[var(--color-body)]">
                    Districts: {loc.districts.join(", ") || "—"}
                  </p>
                  <p className="mt-1 text-sm text-[var(--color-body)]">
                    Branches: {loc.branches}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="mb-8 text-center text-[var(--color-body)]">
              Our network information will be available here soon.
            </p>
          )}

          {planned.length > 0 ? (
            <>
              <h3 className="mb-4 text-lg font-bold text-[var(--color-heading)]">
                Markets (pending verification)
              </h3>
              <div className="flex flex-wrap gap-2">
                {planned.map((loc) => (
                  <span
                    key={loc.state}
                    className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-1.5 text-sm text-[var(--color-body)]"
                  >
                    {loc.state}
                  </span>
                ))}
              </div>
            </>
          ) : null}
        </Container>
      </Section>
    </>
  );
}
