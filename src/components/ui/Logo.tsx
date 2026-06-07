import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizeStyles = {
  sm: "text-xl",
  md: "text-3xl",
  lg: "text-6xl",
};

export function Logo({ className, size = "md" }: LogoProps) {
  return (
    <a href="/" className={cn("inline-flex items-center font-black tracking-tight", sizeStyles[size], className)}>
      <span className="text-black">KRE</span>
      <span className="relative inline-flex items-center">
        <span className="text-orange">8</span>
      </span>
    </a>
  );
}
