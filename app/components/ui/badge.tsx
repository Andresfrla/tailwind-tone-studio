import * as React from "react";
import { cn } from "../../lib/utils";

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "secondary";
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "default", ...props }, ref) => {
    const styles =
      variant === "secondary"
        ? "bg-slate-100 text-slate-700 ring-1 ring-slate-200"
        : "bg-slate-900 text-white";
    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium shadow-sm",
          styles,
          className,
        )}
        {...props}
      />
    );
  },
);
Badge.displayName = "Badge";
