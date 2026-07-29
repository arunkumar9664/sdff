import { PageHero } from "@/components/ui/PageHero";
import { Container, Section, SectionHeader } from "@/components/ui/Container";
import { LeadershipCard } from "@/components/shared/LeadershipCard";
import { leadership } from "@/data/leadership";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Leadership",
  description:
    "Meet the leadership team guiding Shree Deve Finance Frontiers with accountability and purpose.",
  path: "/leadership",
});

export default function LeadershipPage() {
  return (
    <>
      <PageHero
        title="Leadership"
        description="Guided by experience, integrity and a commitment to responsible growth."
        breadcrumb={[
          { label: "About", href: "/about" },
          { label: "Leadership" },
        ]}
      />
      <Section className="bg-white">
        <Container>
          <SectionHeader
            title="Our Leadership Team"
            description="Profiles below are placeholders pending verified information from Shree Deve Finance Frontiers."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {leadership.map((member) => (
              <LeadershipCard key={member.id} member={member} />
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
