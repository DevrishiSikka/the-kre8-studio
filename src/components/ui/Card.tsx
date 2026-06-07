import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "border-2 border-black bg-cream/60 p-6 backdrop-blur-sm transition-colors hover:border-orange",
        className,
      )}
    >
      {children}
    </div>
  );
}
