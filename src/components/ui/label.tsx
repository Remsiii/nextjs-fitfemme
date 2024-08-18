import * as React from "react";
import { cn } from "@/lib/utils";

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  size?: "sm" | "md" | "lg";
}

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, size = "md", ...props }, ref) => {
    const baseStyles = "block font-medium";

    const sizeStyles = {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
    };

    const classes = cn(baseStyles, sizeStyles[size], className);

    return (
      <label ref={ref} className={classes} {...props} />
    );
  }
);
Label.displayName = "Label";

export { Label };
