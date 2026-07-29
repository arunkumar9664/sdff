"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/Button";

const contactSchema = z.object({
  fullName: z.string().min(2, "Please enter your full name"),
  mobile: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile number"),
  email: z.string().email("Enter a valid email address"),
  subject: z.string().min(3, "Please enter a subject"),
  message: z
    .string()
    .min(10, "Message should be at least 10 characters")
    .max(2000, "Message is too long"),
});

type ContactValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (_data: ContactValues) => {
    setStatus("loading");
    try {
      // Placeholder mock handler — no production API
      await new Promise((r) => setTimeout(r, 800));
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      <Field label="Full Name" error={errors.fullName?.message}>
        <input
          {...register("fullName")}
          className={inputClass}
          autoComplete="name"
        />
      </Field>
      <Field label="Mobile Number" error={errors.mobile?.message}>
        <input
          {...register("mobile")}
          className={inputClass}
          inputMode="numeric"
          autoComplete="tel"
        />
      </Field>
      <Field label="Email" error={errors.email?.message}>
        <input
          {...register("email")}
          type="email"
          className={inputClass}
          autoComplete="email"
        />
      </Field>
      <Field label="Subject" error={errors.subject?.message}>
        <input {...register("subject")} className={inputClass} />
      </Field>
      <Field label="Message" error={errors.message?.message}>
        <textarea
          {...register("message")}
          rows={5}
          className={inputClass}
        />
      </Field>

      {status === "success" ? (
        <p className="rounded-lg bg-green-50 px-4 py-3 text-sm text-[var(--color-success)]" role="status">
          Thank you. Your message has been recorded locally as a demo submission.
        </p>
      ) : null}
      {status === "error" ? (
        <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
          Something went wrong. Please try again.
        </p>
      ) : null}

      <Button type="submit" disabled={status === "loading"} className="w-full sm:w-auto">
        {status === "loading" ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}

const grievanceSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  mobile: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile number"),
  email: z.string().email("Enter a valid email address"),
  customerId: z.string().optional(),
  category: z.string().min(1, "Select a category"),
  message: z
    .string()
    .min(10, "Message should be at least 10 characters")
    .max(2000, "Message is too long"),
  consent: z.boolean().refine((val) => val === true, {
    message: "Consent is required",
  }),
});

type GrievanceValues = z.infer<typeof grievanceSchema>;

export function GrievanceForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<GrievanceValues>({
    resolver: zodResolver(grievanceSchema),
  });

  const onSubmit = async (_data: GrievanceValues) => {
    setStatus("loading");
    try {
      await new Promise((r) => setTimeout(r, 800));
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      <Field label="Name" error={errors.name?.message}>
        <input {...register("name")} className={inputClass} autoComplete="name" />
      </Field>
      <Field label="Mobile" error={errors.mobile?.message}>
        <input {...register("mobile")} className={inputClass} inputMode="numeric" />
      </Field>
      <Field label="Email" error={errors.email?.message}>
        <input {...register("email")} type="email" className={inputClass} />
      </Field>
      <Field label="Customer ID (optional)" error={errors.customerId?.message}>
        <input {...register("customerId")} className={inputClass} />
      </Field>
      <Field label="Category" error={errors.category?.message}>
        <select {...register("category")} className={inputClass} defaultValue="">
          <option value="" disabled>
            Select category
          </option>
          <option value="service">Service related</option>
          <option value="product">Product related</option>
          <option value="staff">Staff related</option>
          <option value="other">Other</option>
        </select>
      </Field>
      <Field label="Message" error={errors.message?.message}>
        <textarea {...register("message")} rows={5} className={inputClass} />
      </Field>
      <div>
        <label className="flex items-start gap-3 text-sm text-[var(--color-body)]">
          <input
            type="checkbox"
            {...register("consent")}
            className="mt-1 h-4 w-4 rounded border-[var(--color-border)]"
          />
          <span>
            I consent to Shree Deve Finance Frontiers contacting me regarding this
            grievance using the details provided.
          </span>
        </label>
        {errors.consent ? (
          <p className="mt-1 text-sm text-red-600">{errors.consent.message}</p>
        ) : null}
      </div>

      {status === "success" ? (
        <p className="rounded-lg bg-green-50 px-4 py-3 text-sm text-[var(--color-success)]" role="status">
          Your grievance form demo submission was recorded. Connect a backend to process live requests.
        </p>
      ) : null}
      {status === "error" ? (
        <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
          Something went wrong. Please try again.
        </p>
      ) : null}

      <Button type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Submitting..." : "Submit Grievance"}
      </Button>
    </form>
  );
}

const inputClass =
  "w-full rounded-[var(--radius-btn)] border border-[var(--color-border)] bg-white px-4 py-2.5 text-[var(--color-heading)] outline-none transition focus:border-[var(--color-primary-blue)] focus:ring-2 focus:ring-[var(--color-primary-blue)]/20";

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-[var(--color-heading)]">
        {label}
      </label>
      {children}
      {error ? <p className="mt-1 text-sm text-red-600">{error}</p> : null}
    </div>
  );
}
