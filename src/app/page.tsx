import { HomeHero } from "@/components/home/HomeHero";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { WhatWeDo } from "@/components/home/WhatWeDo";
import { StatCard } from "@/components/shared/StatCard";
import { CTASection } from "@/components/shared/CTASection";
import { Button } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Container";
import { statistics } from "@/data/statistics";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Shree Deve Finance Frontiers | Financial Solutions for Growing Ambitions",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <WhyChooseUs />
      <WhatWeDo />

      <Section className="bg-white">
        <Container>
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <p className="dot-label justify-center">Our Impact</p>
            <h2 className="mt-3 text-3xl font-bold text-[var(--color-heading)] md:text-4xl">
              Progress That{" "}
              <span className="text-[#0369a1]">Reaches</span> People.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {statistics.map((stat) => (
              <StatCard key={stat.id} stat={stat} />
            ))}
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Button href="/impact" variant="navy">
              Explore Impact
            </Button>
            <Button href="/customer-stories" variant="ghost">
              Customer Stories
            </Button>
          </div>
        </Container>
      </Section>

      <CTASection
        title="Ready for a free consultation?"
        description="Speak with our team about products, processes and how we can support your goals."
        primaryLabel="Get Detail"
        primaryHref="/contact"
        secondaryLabel="View Products"
        secondaryHref="/products"
      />
    </>
  );
}
