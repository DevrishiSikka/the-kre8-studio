import Link from "next/link";

import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "studio";
}

const sizeStyles = {
  sm: "text-sm",
  md: "text-3xl",
  lg: "text-6xl",
};

export function Logo({ className, size = "md", variant = "default" }: LogoProps) {
  if (variant === "studio") {
    return (
      <Link
        href="/"
        className={cn(
          "inline-flex items-center gap-2 font-black uppercase tracking-tight",
          sizeStyles[size],
          className,
        )}
      >
        <span className="relative inline-block -rotate-[4deg]">
          <span className="absolute inset-0 translate-x-[3px] translate-y-[3px] bg-orange" />
          <span className="relative block border-2 border-black bg-black px-1.5 py-0.5 text-[10px] font-bold leading-none text-white md:text-xs">
            THE
          </span>
        </span>
        <span className="text-black">KRE8 STUDIO</span>
      </Link>
    );
  }

  return (
    <Link
      href="/"
      className={cn(
        "inline-flex items-center font-black tracking-tight",
        sizeStyles[size],
        className,
      )}
    >
      <span className="text-black">KRE</span>
      <span className="text-orange">8</span>
    </Link>
  );
}
