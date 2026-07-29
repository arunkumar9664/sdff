import { ProductDetailPage } from "@/components/products/ProductDetailPage";
import { getProductBySlug } from "@/data/products";
import { createMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";

const slug = "individual-micro-loan";

export const metadata = createMetadata({
  title: "Individual Micro Loan",
  description:
    "Purpose-based micro loans for individuals starting or expanding a small business or livelihood activity.",
  path: `/products/${slug}`,
});

export default function IndividualMicroLoanPage() {
  const product = getProductBySlug(slug);
  if (!product) notFound();
  return <ProductDetailPage product={product} />;
}
