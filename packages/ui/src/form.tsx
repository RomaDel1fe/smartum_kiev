import type { ComponentProps, ReactNode } from "react";
import { cn } from "./utils";

const controlClassName =
  "w-full rounded-xl border border-border bg-surface px-4 text-foreground outline-none transition-[border-color,box-shadow] placeholder:text-muted-foreground/70 hover:border-muted-foreground/50 focus:border-primary focus:ring-3 focus:ring-focus/15 disabled:cursor-not-allowed disabled:bg-surface-muted disabled:opacity-70 aria-invalid:border-danger aria-invalid:ring-danger/15";

export type InputProps = ComponentProps<"input">;

export function Input({ className, type = "text", ...props }: InputProps) {
  return <input className={cn(controlClassName, "h-12", className)} type={type} {...props} />;
}

export type TextareaProps = ComponentProps<"textarea">;

export function Textarea({ className, rows = 4, ...props }: TextareaProps) {
  return <textarea className={cn(controlClassName, "min-h-28 resize-y py-3", className)} rows={rows} {...props} />;
}

export interface FormFieldProps extends ComponentProps<"div"> {
  controlId: string;
  error?: string;
  hint?: string;
  label: ReactNode;
  optional?: boolean;
}

export function FormField({
  children,
  className,
  controlId,
  error,
  hint,
  label,
  optional = false,
  ...props
}: FormFieldProps) {
  return (
    <div className={cn("grid gap-2", className)} {...props}>
      <label className="text-sm font-bold text-foreground" htmlFor={controlId}>
        {label}
        {optional && <span className="ml-1 font-normal text-muted-foreground">(необов’язково)</span>}
      </label>
      {children}
      {(error || hint) && (
        <p className={cn("m-0 text-xs", error ? "text-danger" : "text-muted-foreground")}>
          {error ?? hint}
        </p>
      )}
    </div>
  );
}
