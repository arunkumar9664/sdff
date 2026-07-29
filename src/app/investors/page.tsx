import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Container, Section, SectionHeader, Card } from "@/components/ui/Container";
import { investorCategories } from "@/data/reports";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Investor Relations",
  description:
    "Transparency builds trust. Access corporate information from Shree Deve Finance Frontiers as documents are published.",
  path: "/investors",
});

export default function InvestorsPage() {
  return (
    <>
      <PageHero
        title="Transparency Builds Trust"
        description="We are committed to sharing clear corporate information with stakeholders as documents become available."
        breadcrumb={[{ label: "Investor Relations" }]}
      />
      <Section className="bg-white">
        <Container>
          <SectionHeader title="Investor Resources" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {investorCategories.map((item) => (
              <Card key={item.title} className="flex flex-col">
                <h3 className="text-xl font-bold text-[var(--color-heading)]">
                  {item.title}
                </h3>
                <p className="mt-2 flex-1 text-sm text-[var(--color-body)]">
                  {item.description}
                </p>
                <Link
                  href={item.href}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary-blue)]"
                >
                  View section
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
