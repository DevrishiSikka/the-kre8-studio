import Image from "next/image";
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

const studioLogoHeights = {
  sm: 52,
  md: 56,
  lg: 72,
} as const;

const STUDIO_LOGO_ASPECT = 877 / 890;

export function Logo({ className, size = "md", variant = "default" }: LogoProps) {
  if (variant === "studio") {
    const height = studioLogoHeights[size];
    const width = Math.round(height * STUDIO_LOGO_ASPECT);

    return (
      <Link href="/" className={cn("inline-flex shrink-0 items-center", className)}>
        <Image
          src="/images/the-kre8-studio-logo.svg"
          alt="The Kre8 Studio"
          width={width}
          height={height}
          priority
        />
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
