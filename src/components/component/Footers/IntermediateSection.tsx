'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Image from 'next/image' // Import the Image component from 'next/image'

export function IntermediateSection() {
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          setIsVisible(entry.isIntersecting);
        },
        { threshold: 0.1 } // Sobald 10% der Section sichtbar sind
      );
  
      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }
  
      return () => {
        if (sectionRef.current) {
          observer.unobserve(sectionRef.current);
        }
      };
    }, []);

  return (
    <section
    ref={sectionRef}
    className={`w-full py-12 md:py-24 lg:py-20 bg-muted px-24 ${isVisible ? 'animate-slide-up' : 'opacity-0'
      }`}
  >
    <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
      <div className="space-y-3">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Live fit. Eat healthy. Be happy.
        </h2>
      </div>
    </div>
  </section>
  )
}
