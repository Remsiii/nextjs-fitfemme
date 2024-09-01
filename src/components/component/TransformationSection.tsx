import { useState, useEffect } from "react";
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

  const totalSlides = Math.ceil(images.length / 3); // Anzahl der Slides, wobei jedes 3 Bilder enthält

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000); // Alle 2 Sekunden zum nächsten Slide

    return () => clearInterval(interval);
  }, [currentIndex]);

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
    };
  };

  return (
    <section className="container mx-auto px-4 py-16 max-w-4xl">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-sky-300 mb-8">
        Much more than just physical improvement
      </h2>
      <div className="space-y-6 text-center mb-8">
        <p>
          My MG Girls are not only experiencing a beautiful physical
          transformation. The real transformation can't be shown – it's
          happening in the head. A big part of my coaching is changing the
          mental state state. You will feel better about yourself, and you will
          believe that you can do it! If you do not feel that way, I will help
          you get the confidence.
        </p>
        <p>
          With the correct balance between diet, training, motivation and expert
          guidance you will be able to reach your goals and stay at your goal
          without the worry of falling back into your old habits. We are working
          on changing your old habits into new healthy habits.
        </p>
      </div>
      <div className="flex justify-center mb-12">
        <Button className="bg-sky-300 hover:bg-sky-400 text-white">
          Join Fit Femme
        </Button>
      </div>
      <div className="relative overflow-hidden">
        <div className="flex" style={getSlideStyle()}>
          {images.map((src, index) => (
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
