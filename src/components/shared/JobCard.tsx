import Link from "next/link";
import { MapPin, Briefcase, Clock } from "lucide-react";
import type { JobOpening } from "@/types";
import { Badge, Card } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function JobCard({ job }: { job: JobOpening }) {
  return (
    <Card>
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          {job.isPlaceholder ? <Badge className="mb-2">Placeholder</Badge> : null}
          <h3 className="text-xl font-bold text-[var(--color-heading)]">
            {job.title}
          </h3>
          <p className="mt-1 text-sm text-[var(--color-primary-blue)]">
            {job.department}
          </p>
        </div>
        <span className="rounded-full bg-[var(--color-muted)] px-3 py-1 text-xs font-semibold text-[var(--color-heading)]">
          {job.employmentType}
        </span>
      </div>
      <div className="mt-4 flex flex-wrap gap-4 text-sm text-[var(--color-body)]">
        <span className="inline-flex items-center gap-1.5">
          <MapPin className="h-4 w-4" aria-hidden />
          {job.location}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Briefcase className="h-4 w-4" aria-hidden />
          {job.experience}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Clock className="h-4 w-4" aria-hidden />
          {job.employmentType}
        </span>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-[var(--color-body)]">
        {job.description}
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Button href={`/careers/openings#${job.id}`} size="sm" variant="outline">
          View Details
        </Button>
        <Button href="/contact" size="sm">
          Apply
        </Button>
      </div>
    </Card>
  );
}

export function JobEmptyState() {
  return (
    <div className="rounded-[var(--radius-card)] border border-dashed border-[var(--color-border)] bg-white px-6 py-12 text-center">
      <p className="text-[var(--color-body)]">
        Current openings will be listed here when available.
      </p>
      <Link
        href="/contact"
        className="mt-4 inline-block text-sm font-semibold text-[var(--color-primary-blue)]"
      >
        Share your interest with us
      </Link>
    </div>
  );
}
