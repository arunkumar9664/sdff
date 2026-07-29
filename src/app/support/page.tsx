import Link from "next/link";
import {
  AlertTriangle,
  BookOpen,
  HelpCircle,
  MessageSquareWarning,
  Phone,
} from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { Container, Section, SectionHeader, Card } from "@/components/ui/Container";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Customer Support",
  description:
    "Get help with grievances, awareness resources, fraud protection tips and FAQs.",
  path: "/support",
});

const cards = [
  {
    title: "Customer Grievance",
    href: "/support/grievance",
    description: "Raise concerns through our grievance redressal process.",
    icon: MessageSquareWarning,
  },
  {
    title: "Customer Awareness",
    href: "/support/customer-awareness",
    description: "Learn how to engage safely and confidently with financial services.",
    icon: BookOpen,
  },
  {
    title: "Fraud Awareness",
    href: "/support/fraud-awareness",
    description: "Stay alert and protect yourself from fraudulent communications.",
    icon: AlertTriangle,
  },
  {
    title: "FAQs",
    href: "/support/faq",
    description: "Find answers to common questions about products and processes.",
    icon: HelpCircle,
  },
  {
    title: "Contact Support",
    href: "/contact",
    description: "Reach our team for guidance and general enquiries.",
    icon: Phone,
  },
];

export default function SupportPage() {
  return (
    <>
      <PageHero
        title="Customer Support"
        description="We're here to help with clear information, safe practices and responsive assistance."
        breadcrumb={[{ label: "Customer Support" }]}
      />
      <Section className="bg-white">
        <Container>
          <SectionHeader title="How can we help?" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map(({ title, href, description, icon: Icon }) => (
              <Link key={href} href={href}>
                <Card className="h-full">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-muted)] text-[var(--color-primary-blue)]">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <h3 className="text-lg font-bold text-[var(--color-heading)]">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--color-body)]">
                    {description}
                  </p>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
