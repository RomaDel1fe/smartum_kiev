import type { ComponentProps } from "react";
import { cn } from "./utils";

const variants = {
  neutral: "bg-surface-muted text-foreground",
  primary: "bg-primary/10 text-primary",
  accent: "bg-accent text-accent-foreground",
  success: "bg-success/10 text-success",
  warning: "bg-warning/10 text-warning",
  danger: "bg-danger/10 text-danger",
} as const;

export interface BadgeProps extends ComponentProps<"span"> {
  variant?: keyof typeof variants;
}

export function Badge({ className, variant = "neutral", ...props }: BadgeProps) {
  return (
    <span
      className={cn("inline-flex min-h-6 items-center rounded-full px-2.5 py-0.5 text-xs font-bold", variants[variant], className)}
      {...props}
    />
  );
}
