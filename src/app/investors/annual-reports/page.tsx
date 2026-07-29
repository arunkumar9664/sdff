import { PageHero } from "@/components/ui/PageHero";
import { Container, Section, SectionHeader } from "@/components/ui/Container";
import { DocumentList } from "@/components/shared/DocumentCard";
import { getDocumentsByCategory } from "@/data/reports";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Annual Reports",
  path: "/investors/annual-reports",
});

export default function AnnualReportsPage() {
  return (
    <>
      <PageHero
        title="Annual Reports"
        description="Yearly institutional reports will be published here when available."
        breadcrumb={[
          { label: "Investor Relations", href: "/investors" },
          { label: "Annual Reports" },
        ]}
      />
      <Section className="bg-white">
        <Container>
          <SectionHeader title="Available Reports" />
          <DocumentList documents={getDocumentsByCategory("annual-reports")} />
        </Container>
      </Section>
    </>
  );
}
