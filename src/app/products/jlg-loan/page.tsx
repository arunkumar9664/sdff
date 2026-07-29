import { ProductDetailPage } from "@/components/products/ProductDetailPage";
import { getProductBySlug } from "@/data/products";
import { createMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";

const slug = "jlg-loan";

export const metadata = createMetadata({
  title: "Joint Liability Group Loan",
  description:
    "Group-based microfinance for women and community members with mutual support and shared responsibility.",
  path: `/products/${slug}`,
});

export default function JlgLoanPage() {
  const product = getProductBySlug(slug);
  if (!product) notFound();
  return <ProductDetailPage product={product} />;
}
