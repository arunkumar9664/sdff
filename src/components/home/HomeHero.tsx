"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ConsultationForm } from "@/components/forms/ConsultationForm";
import { images } from "@/data/images";

export function HomeHero() {
  const reduce = useReducedMotion();

  return (
    <section className="on-dark relative -mt-[var(--header-height)] min-h-[720px] overflow-hidden">
      <Image
        src={images.heroAlt}
        alt="Indian financial advisory supporting local business owners"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(7,17,31,0.88) 0%, rgba(7,17,31,0.62) 48%, rgba(7,17,31,0.4) 100%)",
        }}
        aria-hidden
      />

      <Container className="relative grid items-center gap-10 pb-16 pt-[calc(var(--header-height)+3rem)] lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:pb-20 lg:pt-[calc(var(--header-height)+4.5rem)]">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="dot-label dot-label-light">
            Professional Financial Consulting
          </p>
          <h1
            className="mt-5 max-w-xl text-4xl font-bold leading-[1.12] md:text-5xl lg:text-[3.35rem]"
            style={{ color: "#ffffff" }}
          >
            Expert{" "}
            <span style={{ color: "#7dd3fc" }}>Financial</span> Consulting For
            Long-Term <span style={{ color: "#7dd3fc" }}>Stability</span>.
          </h1>
          <p
            className="mt-5 max-w-lg text-base leading-relaxed md:text-lg"
            style={{ color: "#e2e8f0" }}
          >
            Responsible microfinance for rural and semi-urban India—JLG,
            individual loans, small business and agriculture support with clear,
            transparent guidance.
          </p>

          <div className="mt-8 flex items-center gap-3">
            <div className="flex -space-x-3">
              {[images.leadership1, images.leadership2, images.leadership3].map(
                (src) => (
                  <span
                    key={src}
                    className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-white"
                  >
                    <Image
                      src={src}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="40px"
                    />
                  </span>
                ),
              )}
            </div>
            <p
              className="inline-flex items-center gap-1.5 text-sm font-semibold"
              style={{ color: "#ffffff" }}
            >
              <Star className="h-4 w-4 fill-[#7dd3fc] text-[#7dd3fc]" />
              Trusted by communities we serve
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="lg:justify-self-end w-full max-w-md lg:mt-6"
        >
          <ConsultationForm />
        </motion.div>
      </Container>
    </section>
  );
}
