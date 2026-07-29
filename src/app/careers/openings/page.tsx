import { PageHero } from "@/components/ui/PageHero";
import { Container, Section, SectionHeader } from "@/components/ui/Container";
import { JobCard, JobEmptyState } from "@/components/shared/JobCard";
import { jobs } from "@/data/careers";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Current Openings",
  path: "/careers/openings",
});

export default function OpeningsPage() {
  return (
    <>
      <PageHero
        title="Current Openings"
        description="Explore placeholder and future roles at Shree Deve Finance Frontiers."
        breadcrumb={[
          { label: "Careers", href: "/careers" },
          { label: "Openings" },
        ]}
      />
      <Section className="bg-white">
        <Container>
          <SectionHeader title="Open Roles" />
          {jobs.length === 0 ? (
            <JobEmptyState />
          ) : (
            <div className="grid gap-5">
              {jobs.map((job) => (
                <div key={job.id} id={job.id}>
                  <JobCard job={job} />
                </div>
              ))}
            </div>
          )}
        </Container>
      </Section>
    </>
  );
}
