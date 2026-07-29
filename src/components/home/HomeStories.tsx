"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { TestimonialCard } from "@/components/shared/TestimonialCard";
import { Button } from "@/components/ui/Button";
import { Container, Section, SectionHeader } from "@/components/ui/Container";

export function HomeStories() {
  const [index, setIndex] = useState(0);
  const visible = 3;
  const max = Math.max(0, testimonials.length - visible);

  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(max, i + 1));

  return (
    <Section>
      <Container>
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <SectionHeader
            title="Real People. Real Progress."
            className="mb-0"
          />
          <div className="flex gap-2">
            <button
              type="button"
              onClick={prev}
              disabled={index === 0}
              aria-label="Previous stories"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] bg-white disabled:opacity-40"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={next}
              disabled={index >= max}
              aria-label="Next stories"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] bg-white disabled:opacity-40"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="overflow-hidden">
          <div
            className="flex gap-5 transition-transform duration-500"
            style={{ transform: `translateX(-${index * (100 / visible + 2)}%)` }}
          >
            {testimonials.map((story) => (
              <div
                key={story.id}
                className="w-full shrink-0 sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)]"
              >
                <TestimonialCard story={story} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <Button href="/customer-stories" variant="outline">
            View Customer Stories
          </Button>
        </div>
      </Container>
    </Section>
  );
}
