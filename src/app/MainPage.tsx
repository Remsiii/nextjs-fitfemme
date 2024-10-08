/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/DgIH9C3bVCn
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/
"use client"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Carousel } from "@/components/ui/carousel"
import '../components/component/styles.css';
import { JSX, SVGProps, useEffect, useRef, useState } from "react"
import { ProgramBenefits } from "../components/component/ProgramBenefits"
import { Plan } from "../components/component/Plan"
import { Expertise } from "../components/component/Expertise";
import BookSessionN from "../components/component/BookSessionN";
import { QuestionCards } from "../components/component/question-cards";
import { Header } from "../components/component/Footers/Header";
import Bottom from "../components/component/Footers/Bottom";
import LandingPage from "../components/component/LandingPage";
import TransformationSection from "../components/component/TransformationSection";
import OnlineCoaching from "@/components/component/OnlineCoaching";
import { IntermediateSection } from "@/components/component/Footers/IntermediateSection";

export function Component() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <>
      <LandingPage />
    <IntermediateSection />

      <div className="flex flex-col min-h-[100dvh]">
        <main className="flex-1">
          {/*  <section className="w-full pt-12 md:pt-24 lg:pt-32">
          <div className="container grid gap-6 px-4 md:px-6 lg:gap-12 w-full">
            <div className="video-container">
            <video
              autoPlay
              loop
              muted
              className="video mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
            >
              <source src="https://agrukf.webwave.dev/lib/agrukf/copy_DB8D6D2A-2D29-4680-B255-684DEC9C9BCB-1-lubaabhb.mp4" type="video/mp4" />
            </video>
          </div> */}
          {/* <div className="flex flex-col space-y-4">
              <div className="">
                <h1 className="text-3xl font-bold tracking-tighter text-center sm:text-5xl xl:text-6xl">
                  Unleash Your Fitness Potential with FitFemme
                </h1>
              </div>
              <div className="w-full">
                <p className="max-w-[600px] mx-auto text-muted-foreground text-center md:text-xl">
                  Discover personalized training and nutrition plans ta ilored to help you achieve your fitness goals.
                </p>
              </div> 
               
            </div>
          </div> 
        </section>*/}



          {/* <ProgramBenefits /> */}
          <OnlineCoaching />
          {/* <Plan /> */}
          <IntermediateSection />
          <TransformationSection />


          <Bottom />
        </main>
      </div>
    </>
  )
}

function CheckIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}


function DumbbellIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.4 14.4 9.6 9.6" />
      <path d="M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z" />
      <path d="m21.5 21.5-1.4-1.4" />
      <path d="M3.9 3.9 2.5 2.5" />
      <path d="M6.404 12.768a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 1 1-2.828-2.829l2.828-2.828a2 2 0 1 1 2.829 2.828l1.767-1.768a2 2 0 1 1 2.829 2.829z" />
    </svg>
  )
}


function NutIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 4V2" />
      <path d="M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592A7.003 7.003 0 0 0 19 14v-4" />
      <path d="M12 4C8 4 4.5 6 4 8c-.243.97-.919 1.952-2 3 1.31-.082 1.972-.29 3-1 .54.92.982 1.356 2 2 1.452-.647 1.954-1.098 2.5-2 .595.995 1.151 1.427 2.5 2 1.31-.621 1.862-1.058 2.5-2 .629.977 1.162 1.423 2.5 2 1.209-.548 1.68-.967 2-2 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4Z" />
    </svg>
  )
}
