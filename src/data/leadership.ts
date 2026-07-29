import type { LeadershipMember } from "@/types";
import { images } from "@/data/images";

/**
 * DEMO / PLACEHOLDER leadership profiles for Shree Deve Finance Frontiers.
 * Roles mirror a typical Indian NBFC-MFI board/management structure for layout only.
 *
 * TODO: Replace names, bios and photos with verified SDFF leadership only.
 * Never copy leadership profiles from Digamber Finance or any other organisation.
 */
export const leadership: LeadershipMember[] = [
  {
    id: "1",
    name: "Leadership Name (Placeholder)",
    designation: "Chairman / Managing Director",
    image: images.leadership1,
    bio: "Placeholder profile for the promoter / managing leadership role. Update with verified experience in finance, strategy and organisational stewardship for Shree Deve Finance Frontiers.",
    isPlaceholder: true,
  },
  {
    id: "2",
    name: "Leadership Name (Placeholder)",
    designation: "Whole-time Director",
    image: images.leadership2,
    bio: "Placeholder profile for whole-time directorship covering operations, stakeholder relationships and growth. Replace with verified SDFF details.",
    isPlaceholder: true,
  },
  {
    id: "3",
    name: "Leadership Name (Placeholder)",
    designation: "Independent Director",
    image: images.leadership3,
    bio: "Placeholder independent director profile. Update with verified governance and domain expertise.",
    isPlaceholder: true,
  },
  {
    id: "4",
    name: "Leadership Name (Placeholder)",
    designation: "Chief Operating / Business Head",
    image: images.leadership4,
    bio: "Placeholder senior management profile for field operations and portfolio quality. Replace before production.",
    isPlaceholder: true,
  },
];

export const homepageLeadership = leadership.slice(0, 3);
