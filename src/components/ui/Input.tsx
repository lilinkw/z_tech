"use client";

import { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Icons } from "./Icons";

const inputVariants = cva(
  "flex h-10 w-full rounded-xs border-input bg-background px-3 py-4 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
  {
    variants: {
      color: {
        filled: "bg-white text-[#545454]",
      },
      variant: {
        default: "border-input",
        outline: "border-input",
        ghost: "bg-transparent border border-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

type TInputVariants = VariantProps<typeof inputVariants>;

export interface IInputProps
  extends Omit<React.ComponentProps<"input">, "color">,
    TInputVariants {}

const checkIfArrowIconShouldBeDark = (
  variant: TInputVariants["variant"],
  color: TInputVariants["color"]
) => {
  return (
    (variant && !["ghost"].includes(variant)) ||
    (color && ["filled"].includes(color))
  );
};

const Input = forwardRef<HTMLInputElement, IInputProps>(
  ({ className, color, variant, type, ...props }, ref) => {
    const isIconDark = checkIfArrowIconShouldBeDark(variant, color);
    return (
      <div className="relative w-full">
        <input
          type={type}
          className={cn(inputVariants({ color, variant }), className)}
          ref={ref}
          {...props}
        />
        <Icons.ArrowRight
          className={cn(
            "absolute right-3 top-1/2 -translate-y-1/2 ",
            isIconDark ? "text-black" : "text-white"
          )}
        />
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
