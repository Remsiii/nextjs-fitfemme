import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "9.99 RON",
    features: ["Access to gym equipment", "Locker room access", "1 group class per week"],
  },
  {
    name: "Standard",
    price: "19.99 RON",
    features: ["All Basic features", "Unlimited group classes", "Personalized workout plan"],
  },
  {
    name: "Individual",
    price: "",
    features: ["All Standard features", "1-on-1 personal training session", "Nutrition consultation"],
  },
];

export function Plan() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 } // Trigger when 20% of the section is visible
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
    <div
      id="pricing"
      ref={sectionRef}
      className={`container mx-auto py-10 transition-all duration-1000 ${
        isVisible ? "slide-up" : "opacity-0"
      }`}
    >
      <h1 className="text-3xl font-bold text-center mb-10">Choose Your Fitness Plan</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <CardTitle>{plan.name}</CardTitle>
              <CardDescription>
                <span className="text-3xl font-bold">
                  {plan.price ? plan.price : "per request"}
                </span>
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-2">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
