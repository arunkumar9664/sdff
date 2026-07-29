import { ProductDetailPage } from "@/components/products/ProductDetailPage";
import { getProductBySlug } from "@/data/products";
import { createMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";

const slug = "agriculture-loan";

export const metadata = createMetadata({
  title: "Agriculture & Allied Loan",
  description:
    "Finance for cultivation, dairy and agri-allied livelihoods aligned to seasonal rural realities.",
  path: `/products/${slug}`,
});

export default function AgricultureLoanPage() {
  const product = getProductBySlug(slug);
  if (!product) notFound();
  return <ProductDetailPage product={product} />;
}
