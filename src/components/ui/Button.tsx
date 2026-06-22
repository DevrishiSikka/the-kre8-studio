import { Slot } from "@radix-ui/react-slot";
import { type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

import { buttonVariants } from "./button-variants";

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

export { Button };
