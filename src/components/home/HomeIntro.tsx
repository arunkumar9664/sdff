import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container, Section, SectionHeader } from "@/components/ui/Container";
import { companyIntro } from "@/data/company";
import { images } from "@/data/images";

const values = [
  "Customer Focused",
  "Transparent",
  "Accessible",
  "Responsible",
];

export function HomeIntro() {
  return (
    <Section className="bg-white">
      <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-card)]">
          <Image
            src={images.about}
            alt="Financial advisor supporting an Indian kirana shop owner with documents and banking tools"
            fill
            className="object-cover"
            sizes="(max-width:1024px) 100vw, 50vw"
          />
        </div>
        <div>
          <SectionHeader
            eyebrow="About Shree Deve Finance Frontiers"
            title="Building Financial Possibilities"
            description={companyIntro}
            className="mb-6"
          />
          <div className="grid grid-cols-2 gap-3">
            {values.map((value) => (
              <div
                key={value}
                className="rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 text-sm font-semibold text-[var(--color-heading)]"
              >
                {value}
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Button href="/about">Discover Our Story</Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
