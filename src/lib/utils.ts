import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function displayOrPlaceholder(
  value: string | undefined | null,
  placeholder = "To be updated",
): string {
  if (!value || value.trim() === "") return placeholder;
  return value;
}

export function isConfigured(value: string | undefined | null): boolean {
  return Boolean(value && value.trim() !== "");
}
