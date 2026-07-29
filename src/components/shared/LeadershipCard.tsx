"use client";

import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";
import type { LeadershipMember } from "@/types";
import { Badge } from "@/components/ui/Container";

export function LeadershipCard({ member }: { member: LeadershipMember }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <article className="group overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-border)] bg-white shadow-[var(--shadow-sm)]">
        <div className="relative aspect-[4/5] overflow-hidden bg-[var(--color-muted)]">
          <Image
            src={member.image}
            alt={`Portrait placeholder for ${member.designation}`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width:768px) 100vw, 25vw"
          />
        </div>
        <div className="p-5">
          {member.isPlaceholder ? (
            <Badge className="mb-2">Placeholder</Badge>
          ) : null}
          <h3 className="text-lg font-bold text-[var(--color-heading)]">
            {member.name}
          </h3>
          <p className="mt-1 text-sm text-[var(--color-primary-blue)]">
            {member.designation}
          </p>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="mt-4 text-sm font-semibold text-[var(--color-primary-navy)] hover:text-[var(--color-primary-blue)]"
          >
            View Profile
          </button>
        </div>
      </article>

      {open ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby={`leader-${member.id}`}
          onClick={() => setOpen(false)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-[var(--radius-card)] bg-white p-6 shadow-[var(--shadow-lg)]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close profile"
              className="absolute right-4 top-4 rounded-full p-1 hover:bg-[var(--color-muted)]"
              onClick={() => setOpen(false)}
            >
              <X className="h-5 w-5" />
            </button>
            <h3
              id={`leader-${member.id}`}
              className="pr-8 text-xl font-bold text-[var(--color-heading)]"
            >
              {member.name}
            </h3>
            <p className="mt-1 text-sm text-[var(--color-primary-blue)]">
              {member.designation}
            </p>
            <p className="mt-4 leading-relaxed text-[var(--color-body)]">
              {member.bio}
            </p>
          </div>
        </div>
      ) : null}
    </>
  );
}
