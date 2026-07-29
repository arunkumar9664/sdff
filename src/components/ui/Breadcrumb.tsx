import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function Breadcrumb({
  items,
}: {
  items: { label: string; href?: string }[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-1 text-sm text-[var(--color-body)]">
        <li>
          <Link href="/" className="hover:text-[var(--color-primary-blue)]">
            Home
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={`${item.label}-${index}`} className="flex items-center gap-1">
            <ChevronRight className="h-3.5 w-3.5 opacity-60" aria-hidden />
            {item.href ? (
              <Link
                href={item.href}
                className="hover:text-[var(--color-primary-blue)]"
              >
                {item.label}
              </Link>
            ) : (
              <span className="font-medium text-[var(--color-heading)]" aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
