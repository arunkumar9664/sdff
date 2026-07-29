import Link from "next/link";
import { Share2 } from "lucide-react";
import { company, companyDescription } from "@/data/company";
import { footerColumns, legalLinks } from "@/data/navigation";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/layout/Logo";
import { isConfigured } from "@/lib/utils";

export function Footer() {
  const year = new Date().getFullYear();
  const socials = [
    { href: company.social.linkedin, label: "LinkedIn" },
    { href: company.social.facebook, label: "Facebook" },
    { href: company.social.instagram, label: "Instagram" },
    { href: company.social.youtube, label: "YouTube" },
  ].filter((s) => isConfigured(s.href));

  return (
    <footer className="on-dark bg-[var(--color-primary-navy)]">
      <Container className="py-12 md:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-6">
          <div className="sm:col-span-2 lg:col-span-2">
            <Link href="/" aria-label="Shree Deve Finance Frontiers home">
              <Logo variant="light" />
            </Link>
            <p
              className="mt-4 max-w-sm text-sm leading-relaxed"
              style={{ color: "#e2e8f0" }}
            >
              {companyDescription}
            </p>
            {socials.length > 0 ? (
              <div className="mt-5 flex gap-3">
                {socials.map(({ href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 hover:bg-white/20"
                  >
                    <Share2 className="h-4 w-4" style={{ color: "#ffffff" }} />
                  </a>
                ))}
              </div>
            ) : (
              <p className="mt-5 text-xs" style={{ color: "#94a3b8" }}>
                Social links will appear when configured.
              </p>
            )}
          </div>

          {footerColumns.map((col) => (
            <div key={col.title}>
              <h3
                className="text-xs font-semibold uppercase tracking-[0.16em]"
                style={{ color: "#7dd3fc" }}
              >
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm hover:underline"
                      style={{ color: "#f1f5f9" }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>

      <div className="border-t border-white/10 bg-black/20">
        <Container className="flex flex-col gap-3 py-5 md:flex-row md:items-center md:justify-between">
          <p className="text-xs" style={{ color: "#cbd5e1" }}>
            © {year} {company.name}. All Rights Reserved.
          </p>
          <div className="flex flex-wrap gap-4">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs hover:underline"
                style={{ color: "#cbd5e1" }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </Container>
      </div>
    </footer>
  );
}
