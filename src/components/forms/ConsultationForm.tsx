"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/Button";

const consultSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  telephone: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit mobile number"),
  serviceType: z.string().min(1, "Select a service"),
  preference: z.string().min(1, "Select a preference"),
});

type ConsultValues = z.infer<typeof consultSchema>;

export function ConsultationForm({ className = "" }: { className?: string }) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ConsultValues>({
    resolver: zodResolver(consultSchema),
  });

  const onSubmit = async (_data: ConsultValues) => {
    setStatus("loading");
    try {
      await new Promise((r) => setTimeout(r, 700));
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <div
      className={`rounded-[22px] bg-[var(--color-primary-navy)] p-6 md:p-7 text-white shadow-[var(--shadow-lg)] ${className}`}
    >
      <h2 className="text-xl md:text-2xl font-bold !text-white leading-snug">
        Get a Free Consultation Today
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-5 space-y-3"
        noValidate
      >
        <div>
          <input
            {...register("name")}
            placeholder="Your Name"
            className={fieldClass}
            autoComplete="name"
          />
          {errors.name ? (
            <p className="mt-1 text-xs text-red-300">{errors.name.message}</p>
          ) : null}
        </div>
        <div>
          <input
            {...register("telephone")}
            placeholder="Telephone"
            className={fieldClass}
            inputMode="numeric"
            autoComplete="tel"
          />
          {errors.telephone ? (
            <p className="mt-1 text-xs text-red-300">{errors.telephone.message}</p>
          ) : null}
        </div>
        <div>
          <select
            {...register("serviceType")}
            className={fieldClass}
            defaultValue=""
          >
            <option value="" disabled>
              Service Type
            </option>
            <option value="jlg">JLG Loan</option>
            <option value="iml">Individual Micro Loan</option>
            <option value="sbl">Small Business Loan</option>
            <option value="agri">Agriculture & Allied Loan</option>
            <option value="general">General Enquiry</option>
          </select>
          {errors.serviceType ? (
            <p className="mt-1 text-xs text-red-300">
              {errors.serviceType.message}
            </p>
          ) : null}
        </div>
        <div>
          <select
            {...register("preference")}
            className={fieldClass}
            defaultValue=""
          >
            <option value="" disabled>
              Consultation Preference
            </option>
            <option value="call">Phone Call</option>
            <option value="branch">Branch Visit</option>
            <option value="callback">Request Callback</option>
          </select>
          {errors.preference ? (
            <p className="mt-1 text-xs text-red-300">
              {errors.preference.message}
            </p>
          ) : null}
        </div>

        {status === "success" ? (
          <p className="rounded-xl bg-white/10 px-3 py-2 text-sm text-[var(--color-sky)]" role="status">
            Thank you. Your consultation request was recorded (demo).
          </p>
        ) : null}
        {status === "error" ? (
          <p className="rounded-xl bg-red-500/20 px-3 py-2 text-sm text-red-200" role="alert">
            Something went wrong. Please try again.
          </p>
        ) : null}

        <Button
          type="submit"
          variant="sky"
          className="mt-1 w-full"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Submitting..." : "Booking Confirmation"}
        </Button>
      </form>
    </div>
  );
}

const fieldClass =
  "w-full rounded-full border-0 bg-white px-4 py-3 text-sm text-[var(--color-heading)] outline-none placeholder:text-[var(--color-body)] focus:ring-2 focus:ring-[var(--color-sky)]";
