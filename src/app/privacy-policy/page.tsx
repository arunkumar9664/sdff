import { PageHero } from "@/components/ui/PageHero";
import { Container, Section } from "@/components/ui/Container";
import { company } from "@/data/company";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Privacy Policy",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        description="How we approach personal information on this website."
        breadcrumb={[{ label: "Privacy Policy" }]}
      />
      <Section className="bg-white">
        <Container className="prose-custom max-w-3xl space-y-6 text-[var(--color-body)] leading-relaxed">
          <p>
            This Privacy Policy describes, at a high level, how {company.name}{" "}
            may collect and use information through this website. Final legal
            language should be reviewed and approved by the organisation before
            production launch.
          </p>
          <h2 className="text-xl font-bold text-[var(--color-heading)]">
            Information we may collect
          </h2>
          <p>
            Information you voluntarily submit through contact or grievance
            forms—such as name, mobile number, email and message content—may be
            collected to respond to your enquiry.
          </p>
          <h2 className="text-xl font-bold text-[var(--color-heading)]">
            How information is used
          </h2>
          <p>
            Submitted information is used to respond to enquiries, improve
            website experience and meet applicable compliance obligations.
          </p>
          <h2 className="text-xl font-bold text-[var(--color-heading)]">
            Contact
          </h2>
          <p>
            For privacy-related questions, contact us through the channels listed
            on the Contact page once official details are configured.
          </p>
        </Container>
      </Section>
    </>
  );
}
