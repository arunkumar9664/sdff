import { PageHero } from "@/components/ui/PageHero";
import { Container, Section, SectionHeader } from "@/components/ui/Container";
import { TestimonialCard } from "@/components/shared/TestimonialCard";
import { CTASection } from "@/components/shared/CTASection";
import { testimonials } from "@/data/testimonials";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Customer Stories",
  description:
    "Stories of progress from customers building stronger futures with responsible finance.",
  path: "/customer-stories",
});

export default function CustomerStoriesPage() {
  return (
    <>
      <PageHero
        title="Real People. Real Progress."
        description="Demo customer stories for layout purposes. Replace with consented, verified stories before production."
        breadcrumb={[{ label: "Customer Stories" }]}
      />
      <Section className="bg-white">
        <Container>
          <SectionHeader title="Customer Stories" />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((story) => (
              <TestimonialCard key={story.id} story={story} />
            ))}
          </div>
        </Container>
      </Section>
      <CTASection title="Start your own progress story" />
    </>
  );
}
