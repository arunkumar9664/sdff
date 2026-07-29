import { PageHero } from "@/components/ui/PageHero";
import { Container, Section, SectionHeader } from "@/components/ui/Container";
import { DocumentList } from "@/components/shared/DocumentCard";
import { getDocumentsByCategory } from "@/data/reports";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Regulatory Disclosures",
  path: "/investors/disclosures",
});

export default function DisclosuresPage() {
  return (
    <>
      <PageHero
        title="Regulatory Disclosures"
        description="Regulatory filings, credit ratings and public disclosures will appear here when published."
        breadcrumb={[
          { label: "Investor Relations", href: "/investors" },
          { label: "Disclosures" },
        ]}
      />
      <Section className="bg-white">
        <Container>
          <SectionHeader title="Disclosures & Ratings" />
          <DocumentList
            documents={[
              ...getDocumentsByCategory("disclosures"),
              ...getDocumentsByCategory("ratings"),
            ]}
          />
        </Container>
      </Section>
    </>
  );
}
