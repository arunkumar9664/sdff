import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <div className="bg-white py-24">
      <Container className="text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-[var(--color-teal)]">
          404
        </p>
        <h1 className="mt-3 text-3xl md:text-4xl font-bold text-[var(--color-heading)]">
          Page not found
        </h1>
        <p className="mx-auto mt-4 max-w-md text-[var(--color-body)]">
          The page you are looking for may have moved or no longer exists.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/">Go to Homepage</Button>
          <Button href="/contact" variant="outline">
            Contact Us
          </Button>
        </div>
        <p className="mt-6 text-sm">
          <Link href="/support/faq" className="text-[var(--color-primary-blue)]">
            Browse FAQs
          </Link>
        </p>
      </Container>
    </div>
  );
}
