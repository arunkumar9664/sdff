import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { Container, Section, SectionHeader } from "@/components/ui/Container";
import { ImpactCard } from "@/components/shared/ImpactCard";
import { CTASection } from "@/components/shared/CTASection";
import { impactAreas } from "@/data/faqs";
import { images } from "@/data/images";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Our Impact",
  description:
    "Creating impact beyond finance through literacy, women entrepreneurship, education and community development.",
  path: "/impact",
});

export default function ImpactPage() {
  return (
    <>
      <PageHero
        title="Creating Impact Beyond Finance"
        description="Finance with purpose—supporting livelihoods, learning and community progress across India."
        breadcrumb={[{ label: "Impact" }]}
      />
      <Section className="bg-white">
        <Container className="grid items-center gap-10 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-card)]">
            <Image
              src={images.impactHero}
              alt="Community members in India engaging in purposeful development activities"
              fill
              className="object-cover"
              sizes="(max-width:1024px) 100vw, 50vw"
            />
          </div>
          <SectionHeader
            eyebrow="Finance With Purpose"
            title="Progress that reaches people"
            description="Our impact approach focuses on practical empowerment—helping customers understand finance, grow enterprises and strengthen community wellbeing, including themes such as financial literacy, women entrepreneurship and local development."
            className="mb-0"
          />
        </Container>
      </Section>
      <Section>
        <Container>
          <SectionHeader title="Focus Areas" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {impactAreas.map((area) => (
              <ImpactCard key={area.id} area={area} />
            ))}
          </div>
        </Container>
      </Section>
      <CTASection title="Partner with us for purposeful growth" />
    </>
  );
}
