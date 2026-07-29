import type { MetadataRoute } from "next";
import { company } from "@/data/company";

const baseUrl =
  company.website && company.website.trim() !== ""
    ? company.website
    : "https://www.example.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
