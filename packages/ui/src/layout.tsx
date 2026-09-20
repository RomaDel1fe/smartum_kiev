import type { ComponentProps } from "react";
import { cn } from "./utils";

type DivProps = ComponentProps<"div">;

export function Container({ className, ...props }: DivProps) {
  return (
    <div
      className={cn("mx-auto w-full max-w-[1180px] px-5 sm:px-7", className)}
      {...props}
    />
  );
}

const gaps = {
  xs: "gap-2",
  sm: "gap-3",
  md: "gap-5",
  lg: "gap-8",
  xl: "gap-12",
} as const;

export interface StackProps extends DivProps {
  gap?: keyof typeof gaps;
}

export function Stack({ className, gap = "md", ...props }: StackProps) {
  return <div className={cn("flex flex-col", gaps[gap], className)} {...props} />;
}

export interface ClusterProps extends DivProps {
  align?: "start" | "center" | "end";
  gap?: keyof typeof gaps;
  justify?: "start" | "center" | "between" | "end";
}

const alignments = { start: "items-start", center: "items-center", end: "items-end" } as const;
const justifications = {
  start: "justify-start",
  center: "justify-center",
  between: "justify-between",
  end: "justify-end",
} as const;

export function Cluster({
  align = "center",
  className,
  gap = "md",
  justify = "start",
  ...props
}: ClusterProps) {
  return (
    <div
      className={cn("flex flex-wrap", alignments[align], gaps[gap], justifications[justify], className)}
      {...props}
    />
  );
}

export interface SectionProps extends ComponentProps<"section"> {
  tone?: "default" | "subtle" | "brand";
}

const sectionTones = {
  default: "bg-background text-foreground",
  subtle: "bg-surface-subtle text-foreground",
  brand: "bg-primary text-primary-foreground",
} as const;

export function Section({ className, tone = "default", ...props }: SectionProps) {
  return <section className={cn("py-16 sm:py-20 lg:py-24", sectionTones[tone], className)} {...props} />;
}
