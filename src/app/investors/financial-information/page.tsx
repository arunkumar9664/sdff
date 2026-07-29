import { PageHero } from "@/components/ui/PageHero";
import { Container, Section, SectionHeader } from "@/components/ui/Container";
import { DocumentList } from "@/components/shared/DocumentCard";
import { getDocumentsByCategory } from "@/data/reports";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Financial Information",
  path: "/investors/financial-information",
});

export default function FinancialInformationPage() {
  return (
    <>
      <PageHero
        title="Financial Information"
        breadcrumb={[
          { label: "Investor Relations", href: "/investors" },
          { label: "Financial Information" },
        ]}
      />
      <Section className="bg-white">
        <Container>
          <SectionHeader title="Financial Documents" />
          <DocumentList documents={getDocumentsByCategory("financial")} />
        </Container>
      </Section>
    </>
  );
}
