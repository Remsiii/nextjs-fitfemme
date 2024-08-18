import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DumbbellIcon } from 'lucide-react';

interface Question {
  title: string;
  description: string;
}

type Answer = 'yes' | 'no';

interface QuestionCardProps {
  question: Question;
  onAnswer: (answer: Answer) => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question, onAnswer }) => {
  return (
    <Card className="w-full max-w-md p-4">
      <CardHeader className="relative">
        <DumbbellIcon className="absolute top-0 left-0 w-8 h-8 text-primary" />
        <div className="ml-12">
          <CardTitle>{question.title}</CardTitle>
          <CardDescription>{question.description}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between gap-4">
          <Button variant="secondary" onClick={() => onAnswer("yes")}>Yes</Button>
          <Button variant="secondary" onClick={() => onAnswer("no")}>No</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default QuestionCard;
