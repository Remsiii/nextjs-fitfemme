import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "progress_pics/pic1.jpg?height=300&width=300",
  "progress_pics/pic2.jpg?height=300&width=300",
  "progress_pics/pic3.jpg?height=300&width=300",
  "progress_pics/pic4.jpg?height=300&width=300",
  "progress_pics/pic5.jpg?height=300&width=300",
  "progress_pics/pic6.jpg?height=300&width=300",
  "progress_pics/pic7.jpg?height=300&width=300",
  "progress_pics/pic8.jpg?height=300&width=300",
  "progress_pics/pic9.jpg?height=300&width=300",
];

export default function TransformationSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const totalSlides = Math.ceil(images.length / 3);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
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

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        handleNext();
      }, 3000); // Slide alle 4 Sekunden wechseln

      return () => clearInterval(interval);
    }
  }, [isVisible, currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
    );
  };

  const getSlideStyle = () => {
    return {
      transform: `translateX(-${currentIndex * 100}%)`,
      transition: "transform 0.5s ease-in-out",
      width: `${totalSlides * 100}%`,
    };
  };

  const getCurrentImages = () => {
    const startIndex = currentIndex * 3;
    return images.slice(startIndex, startIndex + 3);
  };

  return (
    <section ref={sectionRef} className="container mx-auto px-4 py-16 max-w-4xl">
      <h2 className={`text-4xl md:text-5xl font-bold text-center text-sky-300 mb-8 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
        Much more than just physical improvement
      </h2>
      <div className={`space-y-6 text-center mb-8 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
        <p>
          Fetele mele MG nu experimentează doar o frumoasă transformare fizică.
          Adevărata transformare nu poate fi arătată - ea se întâmplă în cap.
          O mare parte din coaching-ul meu este schimbarea stării mentale.
          Te vei simți mai bine în pielea ta și vei crede că o poți face!
          Dacă nu vă simțiți astfel, vă voi ajuta să ai încredere în tine.
        </p>
      </div>
      <div className={`flex justify-center mb-12 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
        <Button className="bg-sky-300 hover:bg-sky-400 text-white">
          Join Fit Femme
        </Button>
      </div>
      <div className={`relative overflow-hidden ${isVisible ? 'fade-in' : 'opacity-0'}`}>
        <div className="flex" style={getSlideStyle()}>
          {getCurrentImages().map((src, index) => (
            <TransformationImage
              key={index}
              src={src}
              alt={`Transformation ${index + 1}`}
            />
          ))}
        </div>
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
        >
          <ChevronLeft className="h-6 w-6 text-gray-600" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
        >
          <ChevronRight className="h-6 w-6 text-gray-600" />
        </button>
      </div>
    </section>
  );
}

function TransformationImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="flex-shrink-0 w-full sm:w-72 h-72 rounded-lg overflow-hidden">
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </div>
  );
}
