import { PageHero } from "@/components/ui/PageHero";
import { Container, Section, SectionHeader, Card } from "@/components/ui/Container";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Customer Awareness",
  path: "/support/customer-awareness",
});

const tips = [
  {
    title: "Understand your product",
    body: "Ask questions until repayment schedules, purpose and responsibilities are clear.",
  },
  {
    title: "Keep documents safe",
    body: "Store loan-related documents securely and share them only through official channels.",
  },
  {
    title: "Communicate early",
    body: "If you face repayment difficulty, contact support promptly for guidance.",
  },
  {
    title: "Verify before you act",
    body: "Confirm requests for payments or personal information through known official contacts.",
  },
];

export default function CustomerAwarenessPage() {
  return (
    <>
      <PageHero
        title="Customer Awareness"
        description="Practical guidance to help you engage confidently with financial services."
        breadcrumb={[
          { label: "Customer Support", href: "/support" },
          { label: "Customer Awareness" },
        ]}
      />
      <Section className="bg-white">
        <Container>
          <SectionHeader title="Be an informed customer" />
          <div className="grid gap-5 md:grid-cols-2">
            {tips.map((tip) => (
              <Card key={tip.title}>
                <h3 className="text-lg font-bold text-[var(--color-heading)]">
                  {tip.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-body)]">
                  {tip.body}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
