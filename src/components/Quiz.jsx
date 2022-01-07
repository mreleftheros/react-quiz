import { useContext } from "react";
import { QuizContext } from "../contexts/quiz";
import Button from "./Button";
import Question from "./Question";

const Quiz = () => {
  const {
    state: { quizData, currentIndex, selectedAnswer, shuffledAnswers },
    dispatch
  } = useContext(QuizContext);

  const quiz = quizData[currentIndex];

  // console.log("Quiz", quizData, currentIndex, selectedAnswer);
  return (
    <div className="w-3/4 min-h-screen shadow-xl mx-auto p-2 flex flex-col">
      <div className="text-center mb-2 p-2 text-slate-800">
        <h2 className="font-bold text-2xl mb-2">Take the Quiz!</h2>
        <div className="text-md">
          Current Question {currentIndex + 1}/{quizData.length}
        </div>
      </div>
      <div className="flex flex-col justify-around items-center flex-auto">
        <Question
          question={quiz.question}
          answers={shuffledAnswers || []}
          correctAnswer={quiz.correctAnswer}
          selectedAnswer={selectedAnswer}
          dispatch={dispatch}
        />
        <Button />
      </div>
    </div>
  );
};

export default Quiz;
