import Image from "next/image";
import type { Testimonial } from "@/types";
import { Badge } from "@/components/ui/Container";

export function TestimonialCard({ story }: { story: Testimonial }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-border)] bg-white shadow-[var(--shadow-sm)]">
      <div className="relative aspect-[16/10] bg-[var(--color-muted)]">
        <Image
          src={story.image}
          alt={`Demo customer story visual for ${story.business}`}
          fill
          className="object-cover"
          sizes="(max-width:768px) 100vw, 33vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        {story.isDemoContent ? (
          <Badge className="mb-2 w-fit">Demo content</Badge>
        ) : null}
        <h3 className="text-lg font-bold text-[var(--color-heading)]">
          {story.heading}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--color-body)]">
          {story.story}
        </p>
        <div className="mt-4 border-t border-[var(--color-border)] pt-4">
          <p className="font-semibold text-[var(--color-heading)]">{story.name}</p>
          <p className="text-sm text-[var(--color-body)]">
            {story.location} · {story.business}
          </p>
        </div>
      </div>
    </article>
  );
}
