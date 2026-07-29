import type { MetadataRoute } from "next";
import { products } from "@/data/products";
import { company } from "@/data/company";

const baseUrl =
  company.website && company.website.trim() !== ""
    ? company.website
    : "https://www.example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/leadership",
    "/presence",
    "/products",
    "/customer-stories",
    "/impact",
    "/investors",
    "/investors/annual-reports",
    "/investors/financial-information",
    "/investors/corporate-governance",
    "/investors/policies",
    "/investors/disclosures",
    "/careers",
    "/careers/openings",
    "/support",
    "/support/grievance",
    "/support/customer-awareness",
    "/support/fraud-awareness",
    "/support/faq",
    "/contact",
    "/privacy-policy",
    "/terms",
    "/disclaimer",
  ];

  const productRoutes = products.map((p) => `/products/${p.slug}`);

  return [...staticRoutes, ...productRoutes].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
