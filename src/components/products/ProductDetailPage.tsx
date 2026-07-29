import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import type { Product } from "@/types";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Button } from "@/components/ui/Button";
import { Container, Section, SectionHeader, Card } from "@/components/ui/Container";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { CTASection } from "@/components/shared/CTASection";
import { productImages } from "@/data/products";
import { images } from "@/data/images";

export function ProductDetailPage({ product }: { product: Product }) {
  return (
    <>
      <div className="bg-[var(--color-primary-navy)] text-white">
        <Container className="py-14 md:py-20">
          <div className="[&_a]:text-white/80 [&_span]:text-white">
            <Breadcrumb
              items={[
                { label: "Products", href: "/products" },
                { label: product.shortName },
              ]}
            />
          </div>
          <h1 className="mt-2 max-w-3xl text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            {product.name}
          </h1>
          <p className="mt-4 max-w-2xl text-white/80">{product.shortDescription}</p>
          <div className="mt-8">
            <Button href="/contact" variant="gold">
              Enquire Now
            </Button>
          </div>
        </Container>
      </div>

      <Section className="bg-white">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeader title="Product introduction" className="mb-4" />
            <p className="leading-relaxed text-[var(--color-body)]">
              {product.description}
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-card)]">
            <Image
              src={productImages[product.slug] ?? images.productDefault}
              alt={`Indian livelihood context for ${product.name}`}
              fill
              className="object-cover"
              sizes="(max-width:1024px) 100vw, 50vw"
            />
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-8 lg:grid-cols-2">
          <Card>
            <h2 className="text-xl font-bold text-[var(--color-heading)]">
              Who is it for?
            </h2>
            <ul className="mt-4 space-y-3">
              {product.whoIsItFor.map((item) => (
                <li key={item} className="flex gap-2 text-[var(--color-body)]">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-teal)]" />
                  {item}
                </li>
              ))}
            </ul>
          </Card>
          <Card>
            <h2 className="text-xl font-bold text-[var(--color-heading)]">
              Key benefits
            </h2>
            <ul className="mt-4 space-y-3">
              {product.benefits.map((item) => (
                <li key={item} className="flex gap-2 text-[var(--color-body)]">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-teal)]" />
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <SectionHeader title="Possible use cases" />
          <div className="grid gap-4 sm:grid-cols-3">
            {product.useCases.map((useCase) => (
              <Card key={useCase}>
                <p className="font-medium text-[var(--color-heading)]">{useCase}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-6 md:grid-cols-2">
          <Card>
            <h2 className="text-xl font-bold">Eligibility</h2>
            <p className="mt-3 text-[var(--color-body)]">{product.eligibilityNote}</p>
          </Card>
          <Card>
            <h2 className="text-xl font-bold">Documents</h2>
            <p className="mt-3 text-[var(--color-body)]">{product.documentsNote}</p>
          </Card>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <SectionHeader title="Loan journey" />
          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {product.journey.map((step, i) => (
              <li
                key={step}
                className="rounded-[var(--radius-card)] border border-[var(--color-border)] p-5"
              >
                <span className="text-sm font-bold text-[var(--color-teal)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-2 font-semibold text-[var(--color-heading)]">
                  {step}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section>
        <Container className="max-w-3xl">
          <SectionHeader title="Frequently asked questions" />
          <FAQAccordion items={product.faqs} />
        </Container>
      </Section>

      <CTASection
        title={`Interested in ${product.shortName}?`}
        description="Contact our team for current eligibility, documentation and next steps."
      />
    </>
  );
}
