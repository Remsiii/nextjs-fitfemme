import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function LandingPage() {
  const [selectedOption, setSelectedOption] = useState('')

  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex justify-between items-center p-4 bg-white">
        <div className="text-2xl font-bold">MG FITNESS</div>
        <nav>
          <Link href="#" className="text-blue-500 hover:underline mr-4">Home</Link>
          <Link href="#" className="text-blue-500 hover:underline mr-4">Client login</Link>
          <Link href="#" className="text-blue-500 hover:underline">DA</Link>
        </nav>
      </header>

      <main className="flex-grow flex flex-col md:flex-row">
        <div className="md:w-1/2 bg-blue-300 p-8 flex flex-col justify-center items-center text-center">
          <h1 className="text-5xl font-bold text-white mb-4">MG Fitness</h1>
          <p className="text-xl text-white mb-8">Online coaching</p>
          <div className="w-32 h-1 bg-white mb-8"></div>
          <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-md">
            <h2 className="text-2xl font-semibold mb-4">How can I help you?</h2>
            <div className="space-y-4">
              <Button 
                variant={selectedOption === 'weightloss' ? 'primary' : 'secondary'}
                className="w-full"
                onClick={() => setSelectedOption('weightloss')}
              >
                Weightloss
              </Button>
              <Button 
                variant={selectedOption === 'buildabooty' ? 'primary' : 'secondary'}
                className="w-full bg-blue-300"
                onClick={() => setSelectedOption('buildabooty')}
              >
                Build a Booty
              </Button>
              <Button 
                variant={selectedOption === 'toneyourbody' ? 'primary' : 'secondary'}
                className="w-full"
                onClick={() => setSelectedOption('toneyourbody')}
              >
                Tone your body
              </Button>
            </div>
            <Button className="w-full mt-4">Next →</Button>
          </div>
          <p className="text-white mt-4 text-sm">
            Note: If you are from abroad you will be contacted on WhatsApp, if from Denmark on SMS.
          </p>
        </div>
        <div className="md:w-1/2 bg-blue-300">
          <Image
            src="/https://agrukf.webwave.dev/lib/agrukf/IMG_7533-lty93uvk.PNG"
            alt="Fitness model"
            width={600}
            height={800}
            className="object-cover w-full h-full"
          />
        </div>
      </main>
    </div>
  )
}