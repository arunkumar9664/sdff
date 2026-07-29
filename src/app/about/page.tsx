import { PageHero } from "@/components/ui/PageHero";
import { Button } from "@/components/ui/Button";
import { Container, Section, SectionHeader, Card } from "@/components/ui/Container";
import { CTASection } from "@/components/shared/CTASection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { CustomerJourney } from "@/components/home/CustomerJourney";
import {
  company,
  companyIntro,
  mission,
  vision,
  coreValues,
} from "@/data/company";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "About Us",
  description:
    "Learn about Shree Deve Finance Frontiers—financial inclusion for rural and semi-urban India through responsible microfinance.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        title={`About ${company.name}`}
        description="Empowering rural Indian livelihoods through accessible, transparent and responsible finance."
        breadcrumb={[{ label: "About" }]}
      />

      <Section className="bg-white">
        <Container className="max-w-3xl">
          <SectionHeader
            eyebrow="Our Story"
            title="Building Financial Possibilities"
            description={companyIntro}
          />
          <p className="text-[var(--color-body)] leading-relaxed">
            We approach every customer relationship with clarity and care—from
            group orientation and KYC to repayment support. Our emphasis is on
            understanding the customer, acting on that understanding, and
            enabling progress with dignity.
          </p>
        </Container>
      </Section>

      <Section id="vision-mission">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <h2 className="text-2xl font-bold text-[var(--color-heading)]">
                Vision
              </h2>
              <p className="mt-3 leading-relaxed text-[var(--color-body)]">
                {vision}
              </p>
            </Card>
            <Card>
              <h2 className="text-2xl font-bold text-[var(--color-heading)]">
                Mission
              </h2>
              <p className="mt-3 leading-relaxed text-[var(--color-body)]">
                {mission}
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container>
          <SectionHeader
            title="Our Core Values"
            description="Principles that guide how we serve customers, colleagues and communities."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {coreValues.map((value) => (
              <Card key={value.title}>
                <h3 className="text-lg font-bold text-[var(--color-heading)]">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-body)]">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button href="/leadership">Our Leadership</Button>
            <Button href="/presence" variant="outline">
              Our Presence
            </Button>
          </div>
        </Container>
      </Section>

      <WhyChooseUs />
      <CustomerJourney />

      <CTASection
        title="Want to know more?"
        description="Explore our products or speak with our team."
        secondaryHref="/products"
        secondaryLabel="View Products"
      />
    </>
  );
}
