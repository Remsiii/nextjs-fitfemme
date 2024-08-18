"use client";
import * as React from "react";
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  interval?: number;
}

const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(
  ({ className, children, interval = 3000, ...props }, ref) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slides = React.Children.toArray(children);
    const timeoutRef = useRef<number | null>(null);

    const resetTimeout = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };

    useEffect(() => {
      resetTimeout();
      timeoutRef.current = window.setTimeout(
        () => setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1)),
        interval
      );

      return () => {
        resetTimeout();
      };
    }, [currentIndex, interval, slides.length]);

    return (
      <div
        ref={ref}
        className={cn("relative overflow-hidden", className)}
        {...props}
      >
        <div
          className="flex transition-transform ease-out duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-full flex-shrink-0">
              {slide}
            </div>
          ))}
        </div>
        <div className="absolute bottom-0 left-0 right-0 flex justify-center p-2 space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={cn(
                "w-3 h-3 rounded-full",
                currentIndex === index ? "bg-blue-500" : "bg-gray-300"
              )}
            />
          ))}
        </div>
      </div>
    );
  }
);
Carousel.displayName = "Carousel";

export { Carousel };

