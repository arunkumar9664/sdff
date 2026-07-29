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
    <section className="on-dark relative -mt-[var(--header-height)] min-h-[auto] overflow-hidden md:min-h-[640px] lg:min-h-[720px]">
      <Image
        src={images.heroAlt}
        alt="Indian financial advisory supporting local business owners"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(6,16,24,0.92) 0%, rgba(6,16,24,0.78) 45%, rgba(6,16,24,0.88) 100%), linear-gradient(90deg, rgba(6,16,24,0.9) 0%, rgba(6,16,24,0.45) 100%)",
        }}
        aria-hidden
      />

      <Container className="relative grid items-center gap-8 pb-12 pt-[calc(var(--header-height)+2rem)] sm:gap-10 sm:pb-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:pb-20 lg:pt-[calc(var(--header-height)+4rem)]">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="min-w-0"
        >
          <p className="dot-label dot-label-light text-xs sm:text-sm">
            Professional Financial Consulting
          </p>
          <h1
            className="mt-4 max-w-xl text-[1.75rem] font-bold leading-[1.15] xs:text-3xl sm:mt-5 sm:text-4xl md:text-5xl lg:text-[3.1rem]"
            style={{ color: "#ffffff" }}
          >
            Expert{" "}
            <span style={{ color: "#7dd3fc" }}>Financial</span> Consulting For
            Long-Term <span style={{ color: "#7dd3fc" }}>Stability</span>.
          </h1>
          <p
            className="mt-4 max-w-lg text-sm leading-relaxed sm:mt-5 sm:text-base md:text-lg"
            style={{ color: "#e2e8f0" }}
          >
            Responsible microfinance for rural and semi-urban India—JLG,
            individual loans, small business and agriculture support with clear,
            transparent guidance.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3 sm:mt-8">
            <div className="flex -space-x-3">
              {[images.leadership1, images.leadership2, images.leadership3].map(
                (src) => (
                  <span
                    key={src}
                    className="relative h-9 w-9 overflow-hidden rounded-full border-2 border-white sm:h-10 sm:w-10"
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
              className="inline-flex items-center gap-1.5 text-xs font-semibold sm:text-sm"
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
          className="w-full min-w-0 max-w-md mx-auto lg:mx-0 lg:justify-self-end lg:mt-4"
        >
          <ConsultationForm />
        </motion.div>
      </Container>
    </section>
  );
}
