import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Header } from './Footers/Header';

export default function LandingPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ [key: string]: string }>({
    name: '',
    email: '',
  });

  const questions = [
    {
      id: 'weightloss',
      text: 'Cu ce ai nevoie de ajutor?',
      options: ['Slabit ', 'Continuare '],
    },
    {
      id: 'experience',
      text: 'Unde vrei sa te antrenezi?',
      options: ['la sala', 'acasa'],
    },
    {
      id: 'goal',
      text: 'Care este obiectivul tau principal?',
      options: ['lipsa de timp', 'lipsa ', 'lipsa de motivatie'],
    },
    {
      id: 'program',
      text: 'Doresti arstare inlusa pe tot parcursul programului?',
      options: ['Da', 'Nu, ma descurc'],
    },
    {
      id: 'contact',
      text: 'Introdu numele si emailul tau',
      isForm: true, // Spezifiziere, dass dies ein Formular ist
    },
  ];

  const handleAnswer = (option: string) => {
    setAnswers((prev) => ({
      ...prev,
      [questions[currentQuestion].id]: option,
    }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAnswers((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      if (questions[currentQuestion].isForm) {
        if (!answers.name || !answers.email) {
          alert('Te rog sa introduci numele si emailul tau.');
          return;
        }
      }
      setCurrentQuestion((prev) => prev + 1);
    } else {
      console.log('Final answers:', answers);
      // Hier kannst du die gesammelten Daten an ein Backend senden oder anderweitig verarbeiten
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow flex flex-col md:flex-row">
        <div className="md:w-1/2 bg-blue-300 p-8 flex flex-col justify-center items-center text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Fit Femme</h1>
          <p className="text-xl text-white mb-8">Online coaching</p>
          <div className="w-32 h-1 bg-white mb-8"></div>
          <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-md">
            <h2 className="text-2xl font-semibold mb-4">{questions[currentQuestion].text}</h2>
            <div className="space-y-4">
              {questions[currentQuestion].isForm ? (
                <>
                  <Input
                    name="name"
                    value={answers.name}
                    onChange={handleInputChange}
                    placeholder="Numele tau"
                    className="w-full"
                  />
                  <Input
                    name="email"
                    value={answers.email}
                    onChange={handleInputChange}
                    placeholder="Emailul tau"
                    className="w-full"
                  />
                </>
              ) : (
                questions[currentQuestion].options?.map((option) => (
                  <Button
                    key={option}
                    variant={answers[questions[currentQuestion].id] === option ? 'default' : 'secondary'}
                    className="w-full"
                    onClick={() => handleAnswer(option)}
                  >
                    {option}
                  </Button>
                ))
              )}
            </div>
            <Button
              className="w-full mt-4 bg-[#1E90FF] text-white hover:bg-[#1C86EE] focus:ring-4 focus:ring-[#1C86EE]"
              onClick={handleNext}
            >
              {currentQuestion < questions.length - 1 ? 'Next →' : 'Submit'}
            </Button>

          </div>
          <p className="text-white mt-4 text-sm">
            Note: If you are from abroad you will be contacted on Email.
          </p>
        </div>
        <div className="md:w-1/2 bg-blue-300">
          <Image
            src="/Andree.png"
            alt="Fitness model"
            width={600}
            height={800}
            className="object-cover w-full h-full"
          />
        </div>
      </main>
    </div>
  );
}
