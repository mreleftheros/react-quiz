import { useContext } from "react";
import { QuizContext } from "../contexts/quiz";
import Button from "./Button";
import Question from "./Question";

const Quiz = () => {
  const { quizData, currentIndex } = useContext(QuizContext);
  console.log("Quiz", quizData, currentIndex);

  return (
    <div className="w-3/4 min-h-screen shadow-xl mx-auto p-2 flex flex-col">
      <div className="text-center mb-4 p-2 text-slate-800">
        <h2 className="font-bold text-2xl mb-2">Take the Quiz!</h2>
        <div className="text-md">Current Question 1/5</div>
      </div>
      <div className="flex flex-col justify-around items-center flex-auto">
        <Question />
        <Button />
      </div>
    </div>
  );
};

export default Quiz;
