import * as React from "react";
import { cn } from "@/lib/utils";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant?: "primary" | "secondary";
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, variant = "primary", ...props }, ref) => {
    const baseStyles =
      "block w-full px-3 py-2 rounded-md shadow-sm focus:outline-none";

    const variantStyles = {
      primary: "border-gray-300 focus:ring-primary focus:border-primary",
      secondary: "border-gray-400 focus:ring-secondary focus:border-secondary",
    };

    const classes = cn(baseStyles, variantStyles[variant], className);

    return (
      <textarea ref={ref} className={classes} {...props} />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
