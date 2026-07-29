import { PageHero } from "@/components/ui/PageHero";
import { Container, Section } from "@/components/ui/Container";
import { company } from "@/data/company";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Terms & Conditions",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <PageHero
        title="Terms & Conditions"
        breadcrumb={[{ label: "Terms & Conditions" }]}
      />
      <Section className="bg-white">
        <Container className="max-w-3xl space-y-6 text-[var(--color-body)] leading-relaxed">
          <p>
            By using this website, you agree to these terms. Content is provided
            for general information about {company.name} and does not constitute
            an offer, advice or commitment unless expressly stated.
          </p>
          <h2 className="text-xl font-bold text-[var(--color-heading)]">
            Product information
          </h2>
          <p>
            Product descriptions are indicative. Eligibility, documentation,
            pricing and terms are confirmed during the official customer journey.
          </p>
          <h2 className="text-xl font-bold text-[var(--color-heading)]">
            Website use
          </h2>
          <p>
            You agree not to misuse the website, attempt unauthorized access or
            submit false information through forms.
          </p>
        </Container>
      </Section>
    </>
  );
}
