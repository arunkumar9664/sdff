import type { JobOpening } from "@/types";

/**
 * DEMO job listings — roles common to Indian NBFC-MFI field operations.
 * TODO: Replace with live openings from Shree Deve Finance Frontiers HR.
 */
export const jobs: JobOpening[] = [
  {
    id: "1",
    title: "Field Officer (Placeholder)",
    department: "Operations / JLG",
    location: "Rajasthan (location TBD)",
    experience: "0–2 years (freshers eligible)",
    employmentType: "Full-time",
    description:
      "Support Joint Liability Group lending: area survey, customer counselling, KYC/house verification, centre meetings and collections. Placeholder listing—confirm with HR before publishing.",
    isPlaceholder: true,
  },
  {
    id: "2",
    title: "Regional Manager (Placeholder)",
    department: "Branch Operations",
    location: "Location TBD",
    experience: "5–10 years in NBFC / MFI / BFSI",
    employmentType: "Full-time",
    description:
      "Drive regional growth, portfolio quality, audit closure and team development across branches. Placeholder listing—update with verified JD.",
    isPlaceholder: true,
  },
  {
    id: "3",
    title: "Credit Analyst (Placeholder)",
    department: "Credit",
    location: "Location TBD",
    experience: "2–5 years",
    employmentType: "Full-time",
    description:
      "Underwriting, risk assessment and policy support for microfinance products. Placeholder listing.",
    isPlaceholder: true,
  },
];

export function getJobById(id: string): JobOpening | undefined {
  return jobs.find((j) => j.id === id);
}
