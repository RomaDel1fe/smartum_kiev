import type { ComponentProps } from "react";
import { cn } from "./utils";

const headingSizes = {
  sm: "text-xl sm:text-2xl",
  md: "text-2xl sm:text-3xl",
  lg: "text-3xl sm:text-4xl lg:text-5xl",
  xl: "text-4xl leading-tight sm:text-5xl lg:text-6xl",
} as const;

export interface HeadingProps extends ComponentProps<"h2"> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: keyof typeof headingSizes;
}

export function Heading({ as: Tag = "h2", className, size = "lg", ...props }: HeadingProps) {
  return (
    <Tag
      className={cn("font-display font-extrabold tracking-[-0.035em] text-balance", headingSizes[size], className)}
      {...props}
    />
  );
}

const textSizes = { sm: "text-sm", md: "text-base", lg: "text-lg" } as const;
const textTones = {
  default: "text-foreground",
  muted: "text-muted-foreground",
  inherit: "text-inherit",
} as const;

export interface TextProps extends ComponentProps<"p"> {
  as?: "p" | "span" | "div";
  size?: keyof typeof textSizes;
  tone?: keyof typeof textTones;
}

export function Text({ as: Tag = "p", className, size = "md", tone = "default", ...props }: TextProps) {
  return <Tag className={cn("leading-relaxed", textSizes[size], textTones[tone], className)} {...props} />;
}
