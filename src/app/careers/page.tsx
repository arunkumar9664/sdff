import { PageHero } from "@/components/ui/PageHero";
import { Container, Section, SectionHeader, Card } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { JobCard } from "@/components/shared/JobCard";
import { CTASection } from "@/components/shared/CTASection";
import { jobs } from "@/data/careers";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Careers",
  description:
    "Build your career and create meaningful impact with Shree Deve Finance Frontiers.",
  path: "/careers",
});

const culture = [
  {
    title: "Why Join Us",
    description:
      "Contribute to responsible finance that strengthens livelihoods and communities.",
  },
  {
    title: "Our Culture",
    description:
      "We value integrity, respect, collaboration and customer-centred thinking.",
  },
  {
    title: "Learning & Growth",
    description:
      "Grow your skills through meaningful work, mentoring and continuous learning.",
  },
  {
    title: "Life at Shree Deve",
    description:
      "A workplace focused on purpose, professionalism and shared progress.",
  },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        title="Build Your Career. Create Meaningful Impact."
        description="Join a team committed to accessible, transparent and responsible finance."
        breadcrumb={[{ label: "Careers" }]}
      >
        <Button href="/careers/openings" variant="gold">
          View Openings
        </Button>
      </PageHero>

      <Section className="bg-white">
        <Container>
          <SectionHeader title="Life at Shree Deve Finance Frontiers" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {culture.map((item) => (
              <Card key={item.title}>
                <h3 className="text-lg font-bold text-[var(--color-heading)]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--color-body)]">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <SectionHeader
              title="Current Opportunities"
              description="Listings marked as placeholders should be replaced with live HR openings."
              className="mb-0"
            />
            <Button href="/careers/openings" variant="outline">
              All Openings
            </Button>
          </div>
          <div className="grid gap-5 lg:grid-cols-2">
            {jobs.slice(0, 2).map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </Container>
      </Section>

      <CTASection
        title="Don't see the right role?"
        description="Share your profile with us and we'll keep you in mind for future opportunities."
        primaryLabel="Contact HR"
        primaryHref="/contact"
      />
    </>
  );
}
