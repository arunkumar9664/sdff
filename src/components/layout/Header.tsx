"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { company } from "@/data/company";
import { mainNavigation } from "@/data/navigation";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const overlay = isHome && !scrolled && !mobileOpen;
  const linkClass = cn(
    "rounded-lg px-3 py-2 text-sm font-medium transition",
    overlay
      ? "text-white/90 hover:bg-white/10 hover:text-white"
      : "text-[var(--color-heading)] hover:bg-[var(--color-muted)] hover:text-[var(--color-primary-navy)]",
  );

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        overlay
          ? "bg-transparent"
          : "border-b border-[var(--color-border)] bg-white/95 shadow-[var(--shadow-xs)] backdrop-blur",
      )}
    >
      <Container className="flex h-[var(--header-height)] items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <span
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold",
              overlay
                ? "bg-[var(--color-sky)] text-[var(--color-primary-navy)]"
                : "bg-[var(--color-primary-navy)] text-white",
            )}
          >
            {company.shortName.slice(0, 2)}
          </span>
          <span
            className={cn(
              "hidden sm:block max-w-[200px] text-sm font-bold leading-tight lg:max-w-none",
              overlay ? "text-white" : "text-[var(--color-heading)]",
            )}
          >
            {company.name}
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
          {mainNavigation.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.children && setOpenMenu(item.label)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              {item.children ? (
                <>
                  <button
                    type="button"
                    className={cn(linkClass, "inline-flex items-center gap-1")}
                    aria-expanded={openMenu === item.label}
                    aria-haspopup="true"
                    onClick={() =>
                      setOpenMenu(openMenu === item.label ? null : item.label)
                    }
                  >
                    {item.label}
                    <ChevronDown className="h-4 w-4 opacity-70" aria-hidden />
                  </button>
                  {openMenu === item.label ? (
                    <div className="absolute left-0 top-full pt-2">
                      <div className="min-w-[260px] rounded-2xl border border-[var(--color-border)] bg-white p-2 shadow-[var(--shadow-md)]">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block rounded-xl px-3 py-2.5 hover:bg-[var(--color-muted)]"
                            onClick={() => setOpenMenu(null)}
                          >
                            <span className="block text-sm font-semibold text-[var(--color-heading)]">
                              {child.label}
                            </span>
                            {child.description ? (
                              <span className="mt-0.5 block text-xs text-[var(--color-body)]">
                                {child.description}
                              </span>
                            ) : null}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </>
              ) : (
                <Link href={item.href} className={linkClass}>
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            href="/contact"
            size="sm"
            variant="sky"
            className="hidden sm:inline-flex"
          >
            Get Detail
          </Button>
          <button
            type="button"
            className={cn(
              "inline-flex h-10 w-10 items-center justify-center rounded-full border lg:hidden",
              overlay
                ? "border-white/40 text-white"
                : "border-[var(--color-border)] text-[var(--color-heading)] bg-white",
            )}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      {mobileOpen ? (
        <div className="fixed inset-x-0 top-[var(--header-height)] bottom-0 z-40 overflow-y-auto bg-white lg:hidden">
          <nav className="space-y-1 px-4 py-4" aria-label="Mobile">
            {mainNavigation.map((item) => (
              <div
                key={item.label}
                className="border-b border-[var(--color-border)] py-2"
              >
                <Link
                  href={item.href}
                  className="block py-2 text-base font-semibold text-[var(--color-heading)]"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children ? (
                  <div className="mb-2 ml-3 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block py-1.5 text-sm text-[var(--color-body)]"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
            <div className="pt-4" onClick={() => setMobileOpen(false)}>
              <Button href="/contact" className="w-full">
                Get Detail
              </Button>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
