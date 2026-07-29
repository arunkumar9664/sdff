import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Container, Section, Card } from "@/components/ui/Container";
import { ContactForm } from "@/components/forms/Forms";
import { company } from "@/data/company";
import { displayOrPlaceholder } from "@/lib/utils";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Contact Us",
  description:
    "Contact Shree Deve Finance Frontiers for product enquiries, support and partnerships.",
  path: "/contact",
});

export default function ContactPage() {
  const details = [
    {
      icon: MapPin,
      label: "Registered Office",
      value: displayOrPlaceholder(
        company.registeredOffice,
        "Address to be updated",
      ),
    },
    {
      icon: Phone,
      label: "Phone",
      value: displayOrPlaceholder(company.phone, "Phone to be updated"),
    },
    {
      icon: Mail,
      label: "Email",
      value: displayOrPlaceholder(company.email, "Email to be updated"),
    },
    {
      icon: Clock,
      label: "Business Hours",
      value: displayOrPlaceholder(
        company.businessHours,
        "Hours to be updated",
      ),
    },
  ];

  return (
    <>
      <PageHero
        title="Contact Us"
        description="We'd love to hear from you. Reach out for product guidance, support or partnership conversations."
        breadcrumb={[{ label: "Contact" }]}
      />
      <Section className="bg-white">
        <Container className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-[var(--color-heading)]">
              Get in touch
            </h2>
            <div className="mt-6 space-y-4">
              {details.map(({ icon: Icon, label, value }) => (
                <Card key={label} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--color-muted)] text-[var(--color-primary-blue)]">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[var(--color-heading)]">
                      {label}
                    </p>
                    <p className="mt-1 text-sm text-[var(--color-body)]">{value}</p>
                  </div>
                </Card>
              ))}
            </div>
            <div className="mt-6 flex h-48 items-center justify-center rounded-[var(--radius-card)] border border-dashed border-[var(--color-border)] bg-[var(--color-muted)] text-sm text-[var(--color-body)]">
              Map placeholder — add location once address is configured
            </div>
          </div>
          <Card>
            <h2 className="mb-6 text-xl font-bold text-[var(--color-heading)]">
              Send a message
            </h2>
            <ContactForm />
          </Card>
        </Container>
      </Section>
    </>
  );
}
