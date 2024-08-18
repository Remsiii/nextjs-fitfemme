/**
 * v0 by Vercel.
 * @see https://v0.dev/t/gvXXN66WEle
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import './globals.css' 
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/component/Header"

export default function Component() {
  return (
    <div className="flex flex-col min-h-dvh">
      <Header />
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-[#f8f9fa] to-[#e9ecef]">
        <div className="container px-4 md:px-6 flex flex-col items-center text-center gap-6">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Reach Your Fitness Goals</h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Work with a certified personal trainer to create a custom fitness plan and achieve the results you
              deserve.
            </p>
          </div>
          <Link
            href="#"
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">About Your Trainer</h2>
              <p className="text-muted-foreground md:text-xl">Meet Sarah, your certified personal fitness trainer.</p>
            </div>
            <div className="space-y-4">
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">Qualifications</h3>
                <p className="text-muted-foreground">
                  - Certified Personal Trainer (NASM)
                  <br />- Bachelor's Degree in Exercise Science
                  <br />- 10+ years of experience
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">Areas of Expertise</h3>
                <p className="text-muted-foreground">
                  - Strength Training
                  <br />- Weight Loss
                  <br />- Nutrition Coaching
                  <br />- Sports Performance
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">Approach</h3>
                <p className="text-muted-foreground">
                  I believe in a holistic approach to fitness, focusing on sustainable lifestyle changes and helping my
                  clients build healthy habits. My goal is to empower you to reach your fitness goals and feel your
                  best.
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              src="/placeholder.svg"
              width="500"
              height="500"
              alt="Trainer"
              className="rounded-xl object-cover"
              style={{ aspectRatio: "500/500", objectFit: "cover" }}
            />
          </div>
        </div>
      </section>
      <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-[#f8f9fa] to-[#e9ecef]">
        <div className="container px-4 md:px-6 flex flex-col items-center gap-6">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Get in Touch</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Fill out the form below to schedule a free consultation with Sarah, your personal fitness trainer.
            </p>
          </div>
          <form className="w-full max-w-xl space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" placeholder="Enter your phone number" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="Enter your message" />
            </div>
            <Button type="submit" className="w-full">
              Schedule Consultation
            </Button>
          </form>
        </div>
      </section>
    </div>
  )
}