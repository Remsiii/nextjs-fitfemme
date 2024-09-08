import { useEffect, useRef, useState } from "react";
import { Dumbbell, Users, Smartphone, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function PicComponent() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 } // 20% des Elements muss sichtbar sein, um die Animation auszulösen
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
    <section ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden">
      {/* Background image with parallax effect */}
      <div
        className="absolute inset-0 bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: "url('/oana_andree.JPEG')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div id="services" className="absolute inset-0 bg-black/60" />
      <div className="relative container mx-auto px-4">
        <h2 className={`text-4xl md:text-5xl font-bold text-white text-center mb-12 transition-all duration-1000 ${isVisible ? 'slide-up' : 'opacity-0'}`}>Online Coaching</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <FeatureBox
            icon={<Dumbbell className="h-10 w-10" />}
            title="Customized plans"
            description="Tailored workout and nutrition plans designed specifically for your goals and lifestyle."
            isVisible={isVisible}
          />
          <FeatureBox
            icon={<Users className="h-10 w-10" />}
            title="Your personal coach"
            description="Direct access to experienced fitness professionals for guidance and support."
            isVisible={isVisible}
          />
          <FeatureBox
            icon={<Smartphone className="h-10 w-10" />}
            title="Personal app"
            description="Track your progress, access workouts, and stay motivated with our dedicated mobile app."
            isVisible={isVisible}
          />
          <FeatureBox
            icon={<Sparkles className="h-10 w-10" />}
            title="Your new lifestyle"
            description="Transform your habits and embrace a healthier, more active way of living."
            isVisible={isVisible}
          />
        </div>
        <div className="text-center">
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 text-lg font-semibold mb-20">
            Start now
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Experience Our Platform</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          {/* iPhone Mockup */}
          <div className={`relative w-64 h-[500px] bg-black rounded-[3rem] shadow-xl overflow-hidden border-[14px] border-black transition-all duration-1000 ${isVisible ? 'slide-up' : 'opacity-0'}`}>
            <div className="absolute top-0 inset-x-0 h-[32px] bg-black rounded-b-3xl"></div>
            <Image
              src="/handy.png?height=1000&width=500"
              alt="iPhone App Screenshot"
              width={500}
              height={1000}
              className="rounded-[2rem] w-full h-full object-cover"
            />
          </div>

          {/* Desktop Mockup */}
          <div className={`relative w-full max-w-2xl aspect-[16/10] bg-gray-800 rounded-lg shadow-xl overflow-hidden transition-all duration-1000 ${isVisible ? 'slide-up' : 'opacity-0'}`}>
            <div className="absolute top-0 inset-x-0 h-6 bg-gray-700 flex items-center px-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
            </div>
            <Image
              src="/desktop.png?height=1080&width=1920"
              alt="Desktop App Screenshot"
              width={1920}
              height={1080}
              className="rounded-b-lg w-full h-full object-cover pt-6"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureBox({ icon, title, description, isVisible }: { icon: React.ReactNode, title: string, description: string, isVisible: boolean }) {
  return (
    <div className={`flex flex-col items-center text-center text-white transition-all duration-1000 ${isVisible ? 'slide-up' : 'opacity-0'}`}>
      <div className="mb-4 p-3 bg-primary rounded-full">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-300">{description}</p>
    </div>
  );
}
