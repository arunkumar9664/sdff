import type { NavItem } from "@/types";

export const mainNavigation: NavItem[] = [
  {
    label: "About",
    href: "/about",
    children: [
      {
        label: "Company Overview",
        href: "/about",
        description: "Our purpose, values and approach",
      },
      {
        label: "Leadership",
        href: "/leadership",
        description: "Meet the people guiding our journey",
      },
      {
        label: "Our Presence",
        href: "/presence",
        description: "Where we serve our customers",
      },
      {
        label: "Vision & Mission",
        href: "/about#vision-mission",
        description: "What drives us forward",
      },
    ],
  },
  {
    label: "Products",
    href: "/products",
    children: [
      {
        label: "All Products",
        href: "/products",
        description: "Explore our financial solutions",
      },
      {
        label: "JLG Loan",
        href: "/products/jlg-loan",
        description: "Joint Liability Group financing",
      },
      {
        label: "Individual Micro Loan",
        href: "/products/individual-micro-loan",
        description: "Support for individual entrepreneurs",
      },
      {
        label: "Small Business Loan",
        href: "/products/small-business-loan",
        description: "Capital for growing enterprises",
      },
      {
        label: "Agriculture & Allied",
        href: "/products/agriculture-loan",
        description: "Farm, dairy and agri-allied finance",
      },
    ],
  },
  {
    label: "Impact",
    href: "/impact",
  },
  {
    label: "Investor Relations",
    href: "/investors",
    children: [
      {
        label: "Overview",
        href: "/investors",
        description: "Transparency builds trust",
      },
      {
        label: "Annual Reports",
        href: "/investors/annual-reports",
      },
      {
        label: "Financial Information",
        href: "/investors/financial-information",
      },
      {
        label: "Corporate Governance",
        href: "/investors/corporate-governance",
      },
      {
        label: "Codes & Policies",
        href: "/investors/policies",
      },
      {
        label: "Regulatory Disclosures",
        href: "/investors/disclosures",
      },
    ],
  },
  {
    label: "Careers",
    href: "/careers",
    children: [
      { label: "Life at SDFF", href: "/careers" },
      { label: "Current Openings", href: "/careers/openings" },
    ],
  },
  {
    label: "Customer Support",
    href: "/support",
    children: [
      { label: "Support Home", href: "/support" },
      { label: "Grievance Redressal", href: "/support/grievance" },
      { label: "Customer Awareness", href: "/support/customer-awareness" },
      { label: "Fraud Awareness", href: "/support/fraud-awareness" },
      { label: "FAQs", href: "/support/faq" },
    ],
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export const footerColumns = [
  {
    title: "About",
    links: [
      { label: "Company Overview", href: "/about" },
      { label: "Leadership", href: "/leadership" },
      { label: "Vision & Mission", href: "/about#vision-mission" },
      { label: "Our Presence", href: "/presence" },
    ],
  },
  {
    title: "Products",
    links: [
      { label: "JLG Loan", href: "/products/jlg-loan" },
      { label: "Individual Micro Loan", href: "/products/individual-micro-loan" },
      { label: "Small Business Loan", href: "/products/small-business-loan" },
      { label: "Agriculture Loan", href: "/products/agriculture-loan" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Contact", href: "/contact" },
      { label: "Grievance", href: "/support/grievance" },
      { label: "Customer Awareness", href: "/support/customer-awareness" },
      { label: "Fraud Awareness", href: "/support/fraud-awareness" },
      { label: "FAQs", href: "/support/faq" },
    ],
  },
  {
    title: "Investor Relations",
    links: [
      { label: "Annual Reports", href: "/investors/annual-reports" },
      { label: "Governance", href: "/investors/corporate-governance" },
      { label: "Policies", href: "/investors/policies" },
      { label: "Disclosures", href: "/investors/disclosures" },
    ],
  },
];

export const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Disclaimer", href: "/disclaimer" },
];
