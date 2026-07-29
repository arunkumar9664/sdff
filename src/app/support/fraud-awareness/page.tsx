import { AlertTriangle } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Container, Section, SectionHeader, Card } from "@/components/ui/Container";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Fraud Awareness",
  path: "/support/fraud-awareness",
});

const practices = [
  "Never share OTPs with anyone.",
  "Verify official communication channels before responding.",
  "Do not pay unauthorized agents.",
  "Do not share banking credentials or passwords.",
  "Report suspicious communication immediately through official support contacts.",
];

export default function FraudAwarenessPage() {
  return (
    <>
      <PageHero
        title="Stay Alert. Stay Protected."
        description="General fraud-prevention practices to help protect your personal and financial information."
        breadcrumb={[
          { label: "Customer Support", href: "/support" },
          { label: "Fraud Awareness" },
        ]}
      />
      <Section className="bg-white">
        <Container>
          <div className="mb-10 space-y-4">
            <div className="rounded-[var(--radius-card)] border border-amber-200 bg-amber-50 p-6 md:p-8">
              <div className="flex gap-4">
                <AlertTriangle className="h-8 w-8 shrink-0 text-amber-600" aria-hidden />
                <div>
                  <h2 className="text-xl font-bold text-[var(--color-heading)]">
                    Important public notice
                  </h2>
                  <p className="mt-2 text-[var(--color-body)]">
                    Shree Deve Finance Frontiers does not offer loans through
                    unauthorised third-party mobile apps. Never share OTPs,
                    net-banking passwords or card CVVs over phone, SMS or social
                    media. Verify official communication channels before any
                    payment or document sharing.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-[var(--radius-card)] border border-amber-200 bg-amber-50 p-6 md:p-8">
              <h2 className="text-lg font-bold text-[var(--color-heading)]">
                ⚠️ सावधानी: धोखाधड़ी से बचें
              </h2>
              <p className="mt-2 text-[var(--color-body)]">
                किसी भी अनधिकृत व्यक्ति या ऐप के माध्यम से लोन या शुल्क का भुगतान
                न करें। संदेह होने पर आधिकारिक संपर्क माध्यमों से पुष्टि करें।
              </p>
            </div>
          </div>

          <SectionHeader title="Protect yourself" />
          <div className="grid gap-4 md:grid-cols-2">
            {practices.map((item) => (
              <Card key={item}>
                <p className="font-medium text-[var(--color-heading)]">{item}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
