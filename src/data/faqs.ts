import type { FAQItem, ImpactArea, PresenceLocation } from "@/types";
import { images } from "@/data/images";

export const faqs: FAQItem[] = [
  {
    id: "1",
    category: "general",
    question: "What does Shree Deve Finance Frontiers do?",
    answer:
      "We focus on responsible microfinance and livelihood finance for rural and semi-urban customers—including JLG, individual micro loans, small business and agriculture-allied solutions. Product availability is confirmed during counselling.",
  },
  {
    id: "2",
    category: "products",
    question: "What is the difference between JLG and IML?",
    answer:
      "JLG is group-based lending with mutual support among members. IML is an individual, purpose-based micro loan. Our team helps you choose based on need and suitability.",
  },
  {
    id: "3",
    category: "process",
    question: "What documents will I need?",
    answer:
      "KYC and purpose-related documents vary by product. Field teams guide customers through verification, including house visits where required.",
  },
  {
    id: "4",
    category: "support",
    question: "How can I raise a grievance?",
    answer:
      "Use the Grievance Redressal page for the escalation path. Official officer names and contacts appear once configured in company settings.",
  },
  {
    id: "5",
    category: "safety",
    question: "Do you disburse loans through random mobile apps?",
    answer:
      "Do not share OTPs or pay unauthorised agents. Verify official channels before any payment or app download. See our Fraud Awareness page for guidance.",
  },
  {
    id: "6",
    category: "general",
    question: "Where can I find interest rates and fees?",
    answer:
      "Commercial terms are shared transparently during the customer journey. Contact our team for current details.",
  },
];

export const impactAreas: ImpactArea[] = [
  {
    id: "literacy",
    title: "Financial Literacy",
    description:
      "Helping customers understand products, repayments and responsible borrowing through clear field counselling.",
    image: images.literacy,
  },
  {
    id: "women",
    title: "Women Entrepreneurship",
    description:
      "Supporting women-led livelihoods and JLG participation with respectful, accessible finance.",
    image: images.women,
  },
  {
    id: "education",
    title: "Education & Awareness",
    description:
      "Encouraging learning, capability building and social awareness in the communities we serve.",
    image: images.shgMeeting,
  },
  {
    id: "community",
    title: "Community Development",
    description:
      "Partnering for healthier livelihoods—aligned with themes such as health, sanitation and local enterprise progress.",
    image: images.community,
  },
];

/**
 * Presence model ready for an India map / state listing.
 * TODO: Mark states active only with verified SDFF operational geography.
 * Do not copy another NBFC's branch footprint.
 */
export const presence: PresenceLocation[] = [
  {
    state: "Rajasthan",
    districts: [],
    branches: 0,
    isActive: false,
  },
  {
    state: "Madhya Pradesh",
    districts: [],
    branches: 0,
    isActive: false,
  },
  {
    state: "Uttar Pradesh",
    districts: [],
    branches: 0,
    isActive: false,
  },
  {
    state: "Haryana",
    districts: [],
    branches: 0,
    isActive: false,
  },
  {
    state: "Punjab",
    districts: [],
    branches: 0,
    isActive: false,
  },
  {
    state: "Gujarat",
    districts: [],
    branches: 0,
    isActive: false,
  },
  {
    state: "Maharashtra",
    districts: [],
    branches: 0,
    isActive: false,
  },
  {
    state: "Bihar",
    districts: [],
    branches: 0,
    isActive: false,
  },
];
