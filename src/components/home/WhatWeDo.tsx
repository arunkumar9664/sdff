import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container, Section } from "@/components/ui/Container";
import { products, productImages } from "@/data/products";
import { images } from "@/data/images";

export function WhatWeDo() {
  const featured = products.slice(0, 3);

  return (
    <Section className="bg-[var(--color-surface-alt)]">
      <Container>
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="dot-label justify-center">What We Do</p>
          <h2 className="mt-3 text-3xl font-bold text-[var(--color-heading)] md:text-4xl">
            Expert Financial{" "}
            <span className="text-[var(--color-sky-hover)]">Consulting</span> Services.
          </h2>
          <p className="mt-4 text-[var(--color-body)] leading-relaxed">
            Accessible loan solutions designed for rural and semi-urban
            customers—with clear guidance at every step of the journey.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {featured.map((product, index) => {
            const isCenter = index === 1;
            return (
              <Link
                key={product.id}
                href={`/products/${product.slug}`}
                className="group"
              >
                <article
                  className={`overflow-hidden rounded-[22px] bg-white shadow-[var(--shadow-xs)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-sm)] ${
                    isCenter ? "md:pt-0" : ""
                  }`}
                >
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={productImages[product.slug] ?? images.productDefault}
                      alt={product.name}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                      sizes="(max-width:768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[var(--color-heading)]">
                      {product.shortName}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--color-body)]">
                      {product.shortDescription}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-primary-navy)]">
                      Learn more
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </span>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--color-primary-navy)] px-7 py-3 text-sm font-semibold text-white hover:bg-[#152238]"
          >
            View All Products
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </Section>
  );
}
