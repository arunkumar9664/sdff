import type { CompanyConfig } from "@/types";

/**
 * Central company configuration.
 * Structure aligned with typical Indian NBFC-MFI / microfinance corporate sites
 * (e.g. information architecture of digamberfinance.com).
 *
 * TODO: Replace empty / placeholder fields with verified Shree Deve Finance Frontiers details only.
 * Do not copy another company's registration numbers, addresses, awards or leadership claims.
 */
export const company: CompanyConfig = {
  name: "Shree Deve Finance Frontiers",
  shortName: "SDFF",
  tagline: "Finance That Moves Dreams Forward",
  legalName: "", // TODO: Provide registered legal name
  cin: "", // TODO: Provide CIN when available
  registeredOffice: "", // TODO: Provide registered office address (city / state)
  phone: "", // TODO: Provide official phone number
  email: "", // TODO: Provide official email
  grievanceEmail: "", // TODO: Provide grievance redressal email
  website: "", // TODO: Provide production website URL
  regulatoryStatus: "", // TODO: Provide verified regulatory status only when confirmed
  businessHours: "Monday – Saturday, 10:00 AM – 6:00 PM", // TODO: Confirm official hours
  social: {
    linkedin: "",
    facebook: "",
    instagram: "",
    youtube: "",
  },
};

/** Hindi-friendly supporting line (homepage eyebrow alternate) */
export const supportingTaglineHi = "छोटा ऋण, बड़े सपने — वित्तीय समावेश के साथ";

export const companyDescription =
  "Shree Deve Finance Frontiers works to expand financial inclusion for rural and semi-urban India—supporting individuals, women entrepreneurs and small enterprises with responsible, transparent microfinance solutions.";

export const companyIntro =
  "Inspired by the needs of underserved communities across India, Shree Deve Finance Frontiers focuses on accessible credit for people who are often outside formal banking. We support livelihood activities through group and individual microfinance approaches—helping customers invest in small businesses, agriculture, dairy and local enterprise. Our teams emphasise clear communication, suitability-led lending and lasting relationships so customers can move from aspiration to progress with dignity.";

export const mission =
  "Empower people with limited or no formal credit access through transparent, affordable and responsible financial support—while building sustainable, community-centred growth.";

export const vision =
  "A trusted financial partner for rural and semi-urban India, where financial freedom is within reach for every hardworking individual and entrepreneur.";

export const coreValues = [
  {
    title: "Customer Centricity",
    description:
      "We listen first—understanding real livelihood needs before recommending a financial solution.",
  },
  {
    title: "Transparency",
    description:
      "We share clear information with customers and stakeholders and protect confidentiality with care.",
  },
  {
    title: "Equality & Inclusion",
    description:
      "Every customer and colleague is treated with fairness, dignity and equal opportunity.",
  },
  {
    title: "Integrity",
    description:
      "We act with honesty in every interaction—with customers, employees, partners and ourselves.",
  },
  {
    title: "Responsible Compliance",
    description:
      "We conduct business with diligence and respect for applicable laws, regulations and codes of conduct.",
  },
  {
    title: "People Development",
    description:
      "Our employees connect institutions with communities; we invest in their learning and growth.",
  },
];
