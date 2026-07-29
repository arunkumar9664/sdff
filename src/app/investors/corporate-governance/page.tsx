import { PageHero } from "@/components/ui/PageHero";
import { Container, Section, SectionHeader } from "@/components/ui/Container";
import { DocumentList } from "@/components/shared/DocumentCard";
import { getDocumentsByCategory } from "@/data/reports";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Corporate Governance",
  path: "/investors/corporate-governance",
});

export default function CorporateGovernancePage() {
  return (
    <>
      <PageHero
        title="Corporate Governance"
        breadcrumb={[
          { label: "Investor Relations", href: "/investors" },
          { label: "Corporate Governance" },
        ]}
      />
      <Section className="bg-white">
        <Container>
          <SectionHeader title="Governance Documents" />
          <DocumentList documents={getDocumentsByCategory("governance")} />
        </Container>
      </Section>
    </>
  );
}
