import Image from "next/image";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container, Section } from "@/components/ui/Container";
import { images } from "@/data/images";

const points = [
  {
    title: "Accessible Finance",
    description:
      "Purpose-built products for individuals, women entrepreneurs and local enterprises.",
  },
  {
    title: "Transparent Process",
    description:
      "Clear counselling, documentation guidance and responsible lending practices.",
  },
];

export function WhyChooseUs() {
  return (
    <Section className="bg-white">
      <Container>
        <div className="mb-8 max-w-xl">
          <p className="dot-label">Why Choose Us</p>
          <h2 className="mt-3 text-3xl font-bold text-[var(--color-heading)] md:text-4xl lg:text-[2.6rem]">
            We <span className="text-[var(--color-sky)]">Unlock</span> Your
            Financial <span className="text-[var(--color-sky)]">Potential</span>.
          </h2>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[22px] shadow-[var(--shadow-md)]">
            <Image
              src={images.about}
              alt="Financial guidance for Indian small business owners"
              fill
              className="object-cover"
              sizes="(max-width:1024px) 100vw, 50vw"
            />
          </div>

          <div>
            <p className="leading-relaxed text-[var(--color-body)]">
              Shree Deve Finance Frontiers focuses on responsible microfinance
              that helps customers invest in livelihoods, strengthen enterprises
              and move forward with confidence.
            </p>

            <ul className="mt-8 space-y-5">
              {points.map((item) => (
                <li key={item.title} className="flex gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary-navy)] text-white">
                    <Check className="h-3.5 w-3.5" aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-bold text-[var(--color-heading)]">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-[var(--color-body)]">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Button href="/about" variant="navy" size="lg">
                Get Details
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
