import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "border-2 border-black bg-cream p-6 transition-colors hover:border-orange",
        className,
      )}
    >
      {children}
    </div>
  );
}
