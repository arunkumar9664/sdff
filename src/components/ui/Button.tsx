import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "outlineOnDark"
  | "ghost"
  | "sky"
  | "navy"
  | "gold";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  className?: string;
  children: React.ReactNode;
}

/** !important colors so labels stay readable on every surface */
const variants: Record<ButtonVariant, string> = {
  primary:
    "!bg-[#0ea5e9] !text-[#020617] hover:!bg-[#0284c7] hover:!text-white shadow-[var(--shadow-xs)]",
  sky: "!bg-[#0ea5e9] !text-[#020617] hover:!bg-[#0284c7] hover:!text-white shadow-[var(--shadow-xs)]",
  navy: "!bg-[#061018] !text-[#ffffff] hover:!bg-[#0f1c30] hover:!text-[#ffffff] shadow-[var(--shadow-xs)]",
  secondary:
    "!bg-[#061018] !text-[#ffffff] hover:!bg-[#0f1c30] hover:!text-[#ffffff] shadow-[var(--shadow-xs)]",
  outline:
    "!border-2 !border-[#061018] !text-[#061018] !bg-transparent hover:!bg-[#061018] hover:!text-[#ffffff]",
  outlineOnDark:
    "!border-2 !border-white !text-[#ffffff] !bg-transparent hover:!bg-white hover:!text-[#020617]",
  ghost:
    "!text-[#020617] hover:!bg-[#f1f5f9] hover:!text-[#0369a1]",
  gold: "!bg-[#0ea5e9] !text-[#020617] hover:!bg-[#0284c7] hover:!text-white",
};

const sizes: Record<ButtonSize, string> = {
  sm: "min-h-10 px-4 py-2 text-sm sm:px-5",
  md: "min-h-11 px-5 py-2.5 text-sm sm:px-6 md:text-base",
  lg: "min-h-12 px-6 py-3 text-sm sm:px-8 sm:text-base",
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
    "btn inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-[0.01em] whitespace-nowrap transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0ea5e9] disabled:opacity-60 disabled:pointer-events-none active:translate-y-px",
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
