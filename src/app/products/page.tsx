import { PageHero } from "@/components/ui/PageHero";
import { Container, Section, SectionHeader } from "@/components/ui/Container";
import { ProductCard } from "@/components/products/ProductCard";
import { CTASection } from "@/components/shared/CTASection";
import { products } from "@/data/products";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Financial Products",
  description:
    "Explore responsible financial solutions from Shree Deve Finance Frontiers for individuals, entrepreneurs and communities.",
  path: "/products",
});

export default function ProductsPage() {
  return (
    <>
      <PageHero
        title="Financial Solutions for Every Ambition"
        description="Accessible products designed around real customer needs—with clear guidance at every step."
        breadcrumb={[{ label: "Products" }]}
      />
      <Section className="bg-white">
        <Container>
          <SectionHeader
            title="Our Products"
            description="Choose a solution to learn more. Commercial terms are shared transparently during counselling."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Container>
      </Section>
      <CTASection title="Need help choosing a product?" />
    </>
  );
}
