import type { Product } from "@/types";
import { images } from "@/data/images";

const detailPlaceholder =
  "Contact our team for current eligibility, documentation, pricing and tenure. Terms vary by customer profile and applicable product policy.";

export const products: Product[] = [
  {
    id: "jlg",
    slug: "jlg-loan",
    name: "Joint Liability Group Loan",
    shortName: "JLG Loan",
    shortDescription:
      "Group-based microfinance for women and community members who borrow together with mutual support and shared responsibility.",
    description:
      "A Joint Liability Group (JLG) brings together people from the same village or locality—typically of similar socio-economic background—who mutually guarantee one another. Financing may be extended to the group or to individuals within the group; in both cases members share repayment responsibility. JLG credit is an important pathway for small and marginal farmers, tenant cultivators, landless households and micro-entrepreneurs to access farm, off-farm and non-farm livelihood finance without traditional collateral.",
    icon: "Users",
    benefits: [
      "Peer-supported group lending model",
      "Designed for rural & semi-urban livelihoods",
      "Guided orientation, verification and repayment support",
    ],
    whoIsItFor: [
      "Women and community members forming JLGs",
      "Small / marginal farmers and agri-allied households",
      "Micro-entrepreneurs seeking group-based credit access",
    ],
    useCases: [
      "Working capital for micro livelihoods",
      "Farm and off-farm income activities",
      "Strengthening household enterprises",
    ],
    eligibilityNote: detailPlaceholder,
    documentsNote: detailPlaceholder,
    journey: [
      "Area survey and need discussion",
      "Group formation & orientation (CGT-style counselling)",
      "KYC, documentation and house verification",
      "Credit assessment as per policy",
      "Disbursement through approved channels",
      "Centre meetings / ongoing repayment support",
    ],
    faqs: [
      {
        question: "What is a Joint Liability Group Loan?",
        answer:
          "It is a group-based credit product where members from the same locality support one another and share repayment responsibility. Exact group size and terms are confirmed during counselling.",
      },
      {
        question: "Is collateral required?",
        answer:
          "JLG lending is typically designed around mutual guarantee rather than traditional collateral. Final terms depend on product policy—please contact our team for current details.",
      },
    ],
  },
  {
    id: "iml",
    slug: "individual-micro-loan",
    name: "Individual Micro Loan",
    shortName: "IML",
    shortDescription:
      "Purpose-based micro loans for individuals starting or expanding a small business or livelihood activity.",
    description:
      "Individual Micro Loans help integrate underserved customers with formal credit. These purpose-based loans support people who want to start a new activity or expand an existing livelihood—so they can work toward financial independence with clear guidance and transparent processes.",
    icon: "User",
    benefits: [
      "Individual assessment and counselling",
      "Purpose-oriented livelihood support",
      "Transparent communication throughout the journey",
    ],
    whoIsItFor: [
      "Individual micro-entrepreneurs",
      "Self-employed customers in rural / semi-urban areas",
      "Customers seeking personal livelihood finance",
    ],
    useCases: [
      "Shop inventory, tools and working capital",
      "Service-based livelihood expansion",
      "Home-based enterprise support",
    ],
    eligibilityNote: detailPlaceholder,
    documentsNote: detailPlaceholder,
    journey: [
      "Need assessment discussion",
      "Application and KYC",
      "Document & house verification",
      "Financial assessment",
      "Processing and disbursement",
      "Ongoing customer support",
    ],
    faqs: [
      {
        question: "Who can apply for an Individual Micro Loan?",
        answer:
          "Suitability depends on customer profile, purpose of finance and product guidelines. Contact our team for current eligibility.",
      },
      {
        question: "Are rates listed online?",
        answer:
          "Commercial terms are shared transparently during the customer journey. Please contact us for current details.",
      },
    ],
  },
  {
    id: "sbl",
    slug: "small-business-loan",
    name: "Small Business Loan",
    shortName: "SBL",
    shortDescription:
      "Capital support for entrepreneurs growing kirana stores, workshops, trading and local enterprises.",
    description:
      "Small Business Loans are crafted for entrepreneurs who work relentlessly to grow their businesses. Beyond working capital, the product is designed as a partnership that fuels expansion, strengthens livelihoods and unlocks new possibilities for local enterprise—when businesses grow, communities prosper.",
    icon: "Briefcase",
    benefits: [
      "Aligned to small business growth needs",
      "Clear process and relationship-led support",
      "Focus on sustainable livelihood expansion",
    ],
    whoIsItFor: [
      "Small business owners and traders",
      "Growing local enterprises",
      "Entrepreneurs seeking business capital",
    ],
    useCases: [
      "Working capital and inventory",
      "Business expansion",
      "Equipment and operational needs",
    ],
    eligibilityNote: detailPlaceholder,
    documentsNote: detailPlaceholder,
    journey: [
      "Business need discussion",
      "Application and documentation",
      "Verification",
      "Assessment",
      "Processing and disbursement",
      "Relationship support",
    ],
    faqs: [
      {
        question: "What business purposes are supported?",
        answer:
          "Typical use cases include working capital, expansion and operational needs. Final suitability is confirmed during assessment.",
      },
    ],
  },
  {
    id: "agl",
    slug: "agriculture-loan",
    name: "Agriculture & Allied Loan",
    shortName: "Agriculture Loan",
    shortDescription:
      "Finance for cultivation, dairy and agri-allied livelihoods aligned to seasonal rural realities.",
    description:
      "Agriculture and allied loans support farmers and rural households engaged in cultivation, dairy and related livelihood activities. The product is designed with respect for seasonal cycles so customers can invest in farm productivity and agri-allied income with responsible guidance.",
    icon: "Sprout",
    benefits: [
      "Designed around agri and dairy livelihood needs",
      "Guidance through application and verification",
      "Focus on suitable, responsible lending",
    ],
    whoIsItFor: [
      "Farmers and cultivators",
      "Dairy and agri-allied households",
      "Customers engaged in rural agricultural activities",
    ],
    useCases: [
      "Crop and cultivation related needs",
      "Dairy farm and livestock support",
      "Agri-allied livelihood activities",
    ],
    eligibilityNote: detailPlaceholder,
    documentsNote: detailPlaceholder,
    journey: [
      "Understand seasonal / livelihood need",
      "Application guidance",
      "Verification",
      "Assessment",
      "Processing",
      "Ongoing support",
    ],
    faqs: [
      {
        question: "Does this cover dairy and agri-allied activities?",
        answer:
          "Coverage depends on applicable guidelines and customer purpose. Speak with our team for current product details.",
      },
    ],
  },
];

/** Product hero images (Indian context) */
export const productImages: Record<string, string> = {
  "jlg-loan": images.jlg,
  "individual-micro-loan": images.iml,
  "small-business-loan": images.sbl,
  "agriculture-loan": images.agri,
};

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
