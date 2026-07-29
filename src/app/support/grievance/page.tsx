import { PageHero } from "@/components/ui/PageHero";
import { Container, Section, SectionHeader, Card } from "@/components/ui/Container";
import { GrievanceForm } from "@/components/forms/Forms";
import { company } from "@/data/company";
import { displayOrPlaceholder } from "@/lib/utils";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Grievance Redressal",
  path: "/support/grievance",
});

export default function GrievancePage() {
  return (
    <>
      <PageHero
        title="Grievance Redressal"
        description="We take customer concerns seriously and aim to respond through a clear escalation path."
        breadcrumb={[
          { label: "Customer Support", href: "/support" },
          { label: "Grievance" },
        ]}
      />
      <Section className="bg-white">
        <Container>
          <SectionHeader title="Escalation Channels" />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Customer Support",
                detail: displayOrPlaceholder(company.phone, "Phone to be updated"),
                extra: displayOrPlaceholder(company.email, "Email to be updated"),
              },
              {
                title: "Grievance Officer",
                detail: "Name to be updated",
                extra: displayOrPlaceholder(
                  company.grievanceEmail,
                  "Email to be updated",
                ),
              },
              {
                title: "Escalation Officer",
                detail: "Name to be updated",
                extra: "Contact to be updated",
              },
              {
                title: "Regulatory Escalation",
                detail: "Details to be updated",
                extra: "Official channels will be listed once configured",
              },
            ].map((item) => (
              <Card key={item.title}>
                <h3 className="font-bold text-[var(--color-heading)]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--color-body)]">{item.detail}</p>
                <p className="mt-1 text-sm text-[var(--color-body)]">{item.extra}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
      <Section>
        <Container className="max-w-2xl">
          <SectionHeader
            title="Submit a Grievance"
            description="This form uses a demo handler. Connect a secure backend before production use."
          />
          <Card>
            <GrievanceForm />
          </Card>
        </Container>
      </Section>
    </>
  );
}
