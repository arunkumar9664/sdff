import type { Statistic } from "@/types";

/**
 * Homepage impact metrics — labels aligned with typical Indian MFI corporate sites
 * (States, Branches, Customers, AUM).
 *
 * TODO: Replace "--" and numericValue with verified Shree Deve Finance Frontiers figures only.
 * Do not copy another institution's published branch / AUM / customer counts.
 */
export const statistics: Statistic[] = [
  {
    id: "states",
    label: "States & Union Territories",
    value: "--",
  },
  {
    id: "branches",
    label: "Branches",
    value: "--",
  },
  {
    id: "customers",
    label: "Customers Served",
    value: "--",
  },
  {
    id: "aum",
    label: "Gross AUM",
    value: "--",
  },
];
