import React, { useState } from 'react';
import Link from 'next/link';
import QuestionCard from './QuestionCard';

type Answer = 'yes' | 'no';

interface Question {
  title: string;
  description: string;
}

const BookSession: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const questions: Question[] = [
    {
      title: "Are you on a fitness journey?",
      description: "Let us know if you're currently working on improving your health and wellness."
    },
    {
      title: "Do you have a workout plan?",
      description: "Are you following a specific workout routine or plan?"
    },
    {
      title: "Are you able to go to the gym?",
      description: "Are you able to go frequently at the gym?"
    },
  ];

  const hideElement = () => {
    setCurrentQuestionIndex(0);
  };

  const handleAnswer = (answer: Answer) => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      hideElement();
    }
  };

  return (
    <div>
        <div className="my-6 p-4 border border-gray-300 rounded-lg shadow-lg bg-white">
          <QuestionCard question={questions[currentQuestionIndex]} onAnswer={handleAnswer} />
        </div>
    </div>
  );
};

export default BookSession;
