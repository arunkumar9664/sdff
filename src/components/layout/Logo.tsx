import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  markClassName?: string;
  showWordmark?: boolean;
  wordmarkClassName?: string;
  variant?: "light" | "dark";
};

/** Shree Deve Finance Frontiers logo — trust shield + growth curve */
export function Logo({
  className,
  markClassName,
  showWordmark = true,
  wordmarkClassName,
  variant = "dark",
}: LogoProps) {
  const isLight = variant === "light";

  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span
        className={cn(
          "relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl",
          markClassName,
        )}
        aria-hidden
      >
        <svg
          viewBox="0 0 40 40"
          className="h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="sdff-g" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="50%" stopColor="#0284c7" />
              <stop offset="100%" stopColor="#061018" />
            </linearGradient>
          </defs>
          <rect width="40" height="40" rx="11" fill="url(#sdff-g)" />
          <path
            d="M20 9c2.8 1.4 5.8 2 8.5 2v7.2c0 4.9-3.4 8.5-8.5 10.8-5.1-2.3-8.5-5.9-8.5-10.8V11c2.7 0 5.7-.6 8.5-2Z"
            fill="rgba(255,255,255,0.12)"
            stroke="#ffffff"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M14.5 24c2-1.1 3.8-3.3 4.7-5.7.7 1.8 2.2 3.4 4.5 4.5"
            fill="none"
            stroke="#7dd3fc"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="23.8" cy="16.2" r="1.8" fill="#ffffff" />
        </svg>
      </span>

      {showWordmark ? (
        <span
          className={cn(
            "hidden min-[380px]:flex flex-col leading-tight",
            wordmarkClassName,
          )}
        >
          <span
            className={cn(
              "text-[13px] sm:text-sm font-bold tracking-tight",
              isLight ? "text-white" : "text-[#020617]",
            )}
          >
            Shree Deve Finance
          </span>
          <span
            className={cn(
              "text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.14em]",
              isLight ? "text-[#7dd3fc]" : "text-[#0369a1]",
            )}
          >
            Frontiers
          </span>
        </span>
      ) : null}
      <span className="sr-only">Shree Deve Finance Frontiers</span>
    </span>
  );
}
