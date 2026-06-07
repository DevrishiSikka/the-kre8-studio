import { cn } from "@/lib/utils";

type ButtonVariant = "primary-orange" | "outline-blue" | "primary-blue" | "outline-white";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  asChild?: boolean;
  href?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  "primary-orange": "bg-orange text-white border-2 border-black hover:bg-orange/90",
  "outline-blue": "bg-transparent text-blue border-2 border-blue hover:bg-blue hover:text-white",
  "primary-blue": "bg-blue text-white border-2 border-black hover:bg-blue/90",
  "outline-white": "bg-transparent text-white border-2 border-white hover:bg-white hover:text-black",
};

export function Button({
  variant = "primary-orange",
  className,
  children,
  href,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center px-6 py-3 text-sm font-bold uppercase tracking-wide transition-colors cursor-pointer",
    variantStyles[variant],
    className,
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
