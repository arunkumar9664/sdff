import type { Testimonial } from "@/types";
import { images } from "@/data/images";

/**
 * DEMO CONTENT — fictional Indian customer stories for layout only.
 * TODO: Replace with consented, verified Shree Deve Finance Frontiers stories.
 * Do not use real customers or stories from other institutions.
 */
export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sunita Devi",
    location: "Sikar, Rajasthan",
    business: "Tailoring",
    heading: "Stitching a steadier livelihood",
    story:
      "Demo story: Group-supported finance helped expand a home tailoring unit, buy a second machine and serve more customers in the neighbourhood.",
    image: images.customerTailoring,
    isDemoContent: true,
  },
  {
    id: "2",
    name: "Ramesh Kumar",
    location: "Alwar, Rajasthan",
    business: "Kirana Store",
    heading: "Growing a village kirana",
    story:
      "Demo story: Working capital support enabled better inventory planning for a small kirana and more reliable day-to-day sales.",
    image: images.customerKirana,
    isDemoContent: true,
  },
  {
    id: "3",
    name: "Kamla Bai",
    location: "Bhilwara, Rajasthan",
    business: "Dairy",
    heading: "Strengthening a dairy livelihood",
    story:
      "Demo story: Timely guidance and finance helped improve dairy income and household stability through an agri-allied activity.",
    image: images.customerDairy,
    isDemoContent: true,
  },
  {
    id: "4",
    name: "Meena Sharma",
    location: "Jaipur Rural, Rajasthan",
    business: "Handicrafts",
    heading: "Crafting with confidence",
    story:
      "Demo story: Micro finance support helped invest in raw materials and reach local melas and neighbourhood markets.",
    image: images.customerCraft,
    isDemoContent: true,
  },
  {
    id: "5",
    name: "Prakash Singh",
    location: "Nagaur, Rajasthan",
    business: "Agriculture",
    heading: "Seasonal needs, clearer support",
    story:
      "Demo story: Purpose-aligned finance supported cultivation needs through a guided process suited to rural livelihoods.",
    image: images.customerFarm,
    isDemoContent: true,
  },
];
