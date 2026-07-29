import type { DocumentItem } from "@/types";

/**
 * Investor documents registry.
 * TODO: Add real documents when available. Do not fabricate reports or ratings.
 */
export const documents: DocumentItem[] = [];

export const investorCategories = [
  {
    title: "Annual Reports",
    href: "/investors/annual-reports",
    description: "Yearly performance and institutional overview documents.",
    category: "annual-reports",
  },
  {
    title: "Financial Information",
    href: "/investors/financial-information",
    description: "Financial statements and related disclosures when published.",
    category: "financial",
  },
  {
    title: "Corporate Governance",
    href: "/investors/corporate-governance",
    description: "Governance frameworks and board-related information.",
    category: "governance",
  },
  {
    title: "Codes & Policies",
    href: "/investors/policies",
    description: "Institutional codes and policy documents.",
    category: "policies",
  },
  {
    title: "Regulatory Disclosures",
    href: "/investors/disclosures",
    description: "Regulatory filings and public disclosures when available.",
    category: "disclosures",
  },
  {
    title: "Credit Ratings",
    href: "/investors/disclosures",
    description: "Credit rating information will appear here when published.",
    category: "ratings",
  },
];

export function getDocumentsByCategory(category: string): DocumentItem[] {
  return documents.filter((d) => d.category === category);
}
