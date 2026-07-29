import { PageHero } from "@/components/ui/PageHero";
import { Container, Section, SectionHeader } from "@/components/ui/Container";
import { DocumentList } from "@/components/shared/DocumentCard";
import { getDocumentsByCategory } from "@/data/reports";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Codes & Policies",
  path: "/investors/policies",
});

export default function PoliciesPage() {
  return (
    <>
      <PageHero
        title="Codes & Policies"
        breadcrumb={[
          { label: "Investor Relations", href: "/investors" },
          { label: "Policies" },
        ]}
      />
      <Section className="bg-white">
        <Container>
          <SectionHeader title="Policy Documents" />
          <DocumentList documents={getDocumentsByCategory("policies")} />
        </Container>
      </Section>
    </>
  );
}
