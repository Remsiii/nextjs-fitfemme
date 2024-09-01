'use client'

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Heart } from "lucide-react"

export function FitnessJourney() {
  return (
    <div className="relative w-full h-screen">
      <img
        src="/placeholder.svg?height=1080&width=1920"
        alt="Fitness background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40" />
      <div className="relative z-10 flex items-center justify-end h-full pr-12">
        <Card className="w-1/2 bg-transparent text-white p-8">
          <h1 className="text-5xl font-bold mb-4">Begin your journey today</h1>
          <p className="text-lg mb-6">
            One day or day one? You decide. I have the tools to help you achieve your goals - both physically as well as mentally. Apply for a spot today, and I will contact you about the possibilities to become one of my MG girls.
          </p>
          <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black transition-colors">
            Apply now
          </Button>
        </Card>
      </div>
      <Button
        variant="ghost"
        size="icon"
        className="absolute bottom-4 left-4 text-white hover:bg-white hover:text-black transition-colors"
        aria-label="Like"
      >
        <Heart className="h-6 w-6" />
      </Button>
    </div>
  )
}