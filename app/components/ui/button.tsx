import * as React from "react";
import { cn } from "../../lib/utils";

const base =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-2xl text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

const variants: Record<
  "default" | "outline" | "ghost",
  string
> = {
  default: "bg-slate-900 text-white shadow-sm shadow-slate-900/20 hover:-translate-y-0.5 hover:shadow-md px-4 py-3",
  outline:
    "border border-slate-200 bg-white text-slate-900 shadow-sm shadow-slate-200/50 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md px-4 py-3",
  ghost:
    "text-slate-900 hover:bg-slate-100 px-3 py-2",
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof variants;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", ...props }, ref) => (
    <button
      ref={ref}
      className={cn(base, variants[variant], className)}
      {...props}
    />
  ),
);
Button.displayName = "Button";
