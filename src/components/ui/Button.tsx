import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "sky" | "navy" | "gold";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  className?: string;
  children: React.ReactNode;
}

const variants: Record<ButtonVariant, string> = {
  /* Sky CTA: dark text on bright sky for clear contrast */
  primary:
    "bg-[var(--color-sky)] text-[#07111f] hover:bg-[var(--color-sky-hover)] hover:text-white shadow-[var(--shadow-xs)]",
  sky: "bg-[var(--color-sky)] text-[#07111f] hover:bg-[var(--color-sky-hover)] hover:text-white shadow-[var(--shadow-xs)]",
  navy: "bg-[var(--color-primary-navy)] text-white hover:bg-[#0f1c30] shadow-[var(--shadow-xs)]",
  secondary:
    "bg-[var(--color-primary-navy)] text-white hover:bg-[#0f1c30] shadow-[var(--shadow-xs)]",
  outline:
    "border-2 border-white text-white bg-transparent hover:bg-white hover:text-[#07111f]",
  ghost:
    "text-[var(--color-heading)] hover:bg-[var(--color-muted)] hover:text-[var(--color-primary-navy)]",
  gold: "bg-[var(--color-sky)] text-[#07111f] hover:bg-[var(--color-sky-hover)] hover:text-white",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-5 py-2 text-sm",
  md: "px-6 py-2.5 text-sm md:text-base",
  lg: "px-8 py-3.5 text-base",
};

export function Button({
  variant = "sky",
  size = "md",
  href,
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-[0.01em] transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-sky)] disabled:opacity-60 disabled:pointer-events-none active:translate-y-px",
    variants[variant],
    sizes[size],
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
