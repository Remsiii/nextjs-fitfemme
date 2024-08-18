import * as React from "react";

import { cn } from "@/lib/utils";

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string;
  alt: string;
  fallback?: string;
}

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, src, alt, fallback, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("relative w-12 h-12 rounded-full overflow-hidden", className)}
        {...props}
      >
        <img src={src} alt={alt} className="w-full h-full object-cover" />
        {!src && fallback && (
          <div className="w-full h-full flex items-center justify-center bg-gray-300">
            {fallback}
          </div>
        )}
      </div>
    );
  }
);
Avatar.displayName = "Avatar";

const AvatarImage = ({ src, alt, className }: AvatarProps) => (
  <img src={src} alt={alt} className={cn("w-full h-full object-cover", className)} />
);
AvatarImage.displayName = "AvatarImage";

const AvatarFallback = ({ className, fallback }: AvatarProps) => (
  <div className={cn("w-full h-full flex items-center justify-center bg-gray-300", className)}>
    {fallback}
  </div>
);
AvatarFallback.displayName = "AvatarFallback";

export { Avatar, AvatarImage, AvatarFallback };
