import { PageHero } from "@/components/ui/PageHero";
import { Container, Section } from "@/components/ui/Container";
import { company } from "@/data/company";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Disclaimer",
  path: "/disclaimer",
});

export default function DisclaimerPage() {
  return (
    <>
      <PageHero
        title="Disclaimer"
        breadcrumb={[{ label: "Disclaimer" }]}
      />
      <Section className="bg-white">
        <Container className="max-w-3xl space-y-6 text-[var(--color-body)] leading-relaxed">
          <p>
            Information on this website is for general awareness about{" "}
            {company.name}. It should not be treated as financial, legal or
            investment advice.
          </p>
          <p>
            Interest rates, fees, eligibility criteria, loan limits, tenures and
            regulatory claims are not invented on this site. Where such details
            are required, customers should contact the organisation for current
            and verified information.
          </p>
          <p>
            Placeholder content—including leadership profiles, statistics,
            customer stories and documents—must be replaced with verified
            information before production use.
          </p>
        </Container>
      </Section>
    </>
  );
}
