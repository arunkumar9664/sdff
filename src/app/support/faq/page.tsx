import { PageHero } from "@/components/ui/PageHero";
import { Container, Section, SectionHeader } from "@/components/ui/Container";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { faqs } from "@/data/faqs";
import { createMetadata, faqJsonLd } from "@/lib/seo";

export const metadata = createMetadata({
  title: "FAQs",
  description:
    "Frequently asked questions about Shree Deve Finance Frontiers products, processes and support.",
  path: "/support/faq",
});

export default function FAQPage() {
  const jsonLd = faqJsonLd(faqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHero
        title="Frequently Asked Questions"
        description="Clear answers to common questions. Contact us if you need personalised guidance."
        breadcrumb={[
          { label: "Customer Support", href: "/support" },
          { label: "FAQs" },
        ]}
      />
      <Section className="bg-white">
        <Container className="max-w-3xl">
          <SectionHeader title="Common questions" />
          <FAQAccordion items={faqs} />
        </Container>
      </Section>
    </>
  );
}
