import type { ComponentProps } from "react";
import { cn } from "./utils";

const variants = {
  outlined: "border border-border bg-surface",
  elevated: "border border-transparent bg-surface shadow-card",
  subtle: "border border-transparent bg-surface-subtle",
} as const;

const paddings = { none: "p-0", sm: "p-4", md: "p-6", lg: "p-8" } as const;

export interface CardProps extends ComponentProps<"div"> {
  padding?: keyof typeof paddings;
  variant?: keyof typeof variants;
}

export function Card({ className, padding = "md", variant = "outlined", ...props }: CardProps) {
  return <div className={cn("rounded-2xl", variants[variant], paddings[padding], className)} {...props} />;
}
