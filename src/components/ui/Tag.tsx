import { cn } from "@/lib/utils";

interface TagProps {
  children: React.ReactNode;
  className?: string;
}

export function Tag({ children, className }: TagProps) {
  return (
    <span
      className={cn(
        "inline-block border border-black px-3 py-1 text-xs font-bold uppercase tracking-wide",
        className,
      )}
    >
      {children}
    </span>
  );
}
