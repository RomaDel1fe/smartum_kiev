"use client";

import { Button as BaseButton } from "@base-ui/react/button";
import type { ComponentProps } from "react";

const variants = {
  primary:
    "bg-primary text-primary-foreground shadow-button hover:bg-primary-hover active:bg-primary-active",
  secondary:
    "border border-border bg-surface text-foreground hover:bg-surface-subtle active:bg-surface-muted",
  ghost:
    "bg-transparent text-foreground hover:bg-surface-subtle active:bg-surface-muted",
  destructive:
    "bg-danger text-danger-foreground hover:bg-danger-hover active:bg-danger-active",
} as const;

const sizes = {
  sm: "min-h-10 px-4 text-sm rounded-lg",
  md: "min-h-12 px-5 text-sm rounded-xl",
  lg: "min-h-14 px-7 text-base rounded-2xl",
  icon: "size-11 rounded-xl",
} as const;

type BaseButtonProps = Omit<ComponentProps<typeof BaseButton>, "className">;

export interface ButtonProps extends BaseButtonProps {
  className?: string;
  size?: keyof typeof sizes;
  variant?: keyof typeof variants;
}

export function Button({
  className = "",
  size = "md",
  variant = "primary",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <BaseButton
      type={type}
      className={`inline-flex shrink-0 items-center justify-center gap-2 font-bold transition-colors outline-none focus-visible:ring-3 focus-visible:ring-focus/30 disabled:pointer-events-none disabled:opacity-50 ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    />
  );
}
