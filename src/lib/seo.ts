import type { Metadata } from "next";
import { company } from "@/data/company";

const siteUrl =
  company.website && company.website.trim() !== ""
    ? company.website
    : "https://www.example.com"; // TODO: Replace with production URL

export const defaultDescription =
  "Shree Deve Finance Frontiers provides responsible and accessible financial solutions designed to support individuals, entrepreneurs and communities.";

export function createMetadata({
  title,
  description = defaultDescription,
  path = "/",
  noIndex = false,
}: {
  title: string;
  description?: string;
  path?: string;
  noIndex?: boolean;
}): Metadata {
  const url = `${siteUrl}${path}`;
  const fullTitle = title.includes(company.name)
    ? title
    : `${title} | ${company.name}`;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(siteUrl),
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: company.name,
      type: "website",
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

export function organizationJsonLd() {
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.name,
    slogan: company.tagline,
  };

  if (company.website) data.url = company.website;
  if (company.email) data.email = company.email;
  if (company.phone) data.telephone = company.phone;
  if (company.registeredOffice) {
    data.address = {
      "@type": "PostalAddress",
      streetAddress: company.registeredOffice,
      addressCountry: "IN",
    };
  }

  return data;
}

export function faqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
