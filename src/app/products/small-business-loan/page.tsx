import { ProductDetailPage } from "@/components/products/ProductDetailPage";
import { getProductBySlug } from "@/data/products";
import { createMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";

const slug = "small-business-loan";

export const metadata = createMetadata({
  title: "Small Business Loan",
  description:
    "Capital support for entrepreneurs growing kirana stores, workshops, trading and local enterprises.",
  path: `/products/${slug}`,
});

export default function SmallBusinessLoanPage() {
  const product = getProductBySlug(slug);
  if (!product) notFound();
  return <ProductDetailPage product={product} />;
}
