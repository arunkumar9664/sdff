import Link from "next/link";
import {
  Users,
  User,
  Briefcase,
  Sprout,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import type { Product } from "@/types";
import { Card } from "@/components/ui/Container";

const iconMap: Record<string, LucideIcon> = {
  Users,
  User,
  Briefcase,
  Sprout,
};

export function ProductCard({ product }: { product: Product }) {
  const Icon = iconMap[product.icon] ?? Briefcase;

  return (
    <Card className="group flex h-full flex-col">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-muted)] text-[var(--color-primary-blue)] transition-transform duration-300 group-hover:scale-110 group-hover:bg-[var(--color-primary-navy)] group-hover:text-white">
        <Icon className="h-6 w-6" aria-hidden />
      </div>
      <h3 className="text-xl font-bold text-[var(--color-heading)]">
        {product.name}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--color-body)]">
        {product.shortDescription}
      </p>
      <ul className="mt-4 space-y-2">
        {product.benefits.map((benefit) => (
          <li
            key={benefit}
            className="flex items-start gap-2 text-sm text-[var(--color-body)]"
          >
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-teal)]" />
            {benefit}
          </li>
        ))}
      </ul>
      <Link
        href={`/products/${product.slug}`}
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary-blue)] hover:text-[var(--color-primary-navy)]"
      >
        Learn More
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
      </Link>
    </Card>
  );
}
