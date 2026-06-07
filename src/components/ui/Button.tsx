import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const brutalBase =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap border-[3px] border-black font-bold transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0";

const brutalPress =
  "shadow-[6px_6px_0_0_#000] hover:translate-x-[6px] hover:translate-y-[6px] hover:shadow-none active:translate-x-[6px] active:translate-y-[6px] active:shadow-none";

const brutalPressOrange =
  "shadow-[6px_6px_0_0_#F58A42] hover:translate-x-[6px] hover:translate-y-[6px] hover:shadow-none active:translate-x-[6px] active:translate-y-[6px] active:shadow-none";

const buttonVariants = cva(brutalBase, {
  variants: {
    variant: {
      orange: cn("bg-[#F58A42] text-black", brutalPress),
      blue: cn("bg-blue text-white", brutalPress),
      contact: cn("border-2 bg-black font-black text-white", brutalPressOrange),
      "outline-blue":
        "border-[3px] border-blue bg-transparent text-blue shadow-[6px_6px_0_0_#2E5BFF] hover:translate-x-[6px] hover:translate-y-[6px] hover:shadow-none",
      "outline-white":
        "border-[3px] border-white bg-transparent text-white shadow-[6px_6px_0_0_#fff] hover:translate-x-[6px] hover:translate-y-[6px] hover:shadow-none",
    },
    size: {
      default: "px-6 py-2.5 text-sm",
      sm: "px-4 py-2 text-xs",
      lg: "px-8 py-3 text-base",
      contact: "mb-1.5 w-full px-6 py-4 text-sm sm:py-[1.125rem] sm:text-[15px]",
    },
    radius: {
      none: "rounded-none",
      md: "rounded-[10px]",
      lg: "rounded-2xl",
      full: "rounded-full",
    },
  },
  defaultVariants: {
    variant: "orange",
    size: "default",
    radius: "none",
  },
});

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    href?: string;
  };

function Button({
  className,
  variant,
  size,
  radius,
  asChild = false,
  href,
  ...props
}: ButtonProps) {
  const classes = cn(buttonVariants({ variant, size, radius, className }));

  if (href) {
    return (
      <a href={href} className={classes}>
        {props.children}
      </a>
    );
  }

  const Comp = asChild ? Slot : "button";

  return <Comp data-slot="button" className={classes} {...props} />;
}

export { Button, buttonVariants };
