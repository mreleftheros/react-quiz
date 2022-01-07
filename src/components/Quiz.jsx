import { useContext } from "react";
import { QuizContext } from "../contexts/quiz";
import Button from "./Button";
import Question from "./Question";
import Results from "./Results";

const Quiz = () => {
  const {
    state: {
      quizData,
      currentIndex,
      selectedAnswer,
      shuffledAnswers,
      showResults,
      correctAnswersCount
    },
    dispatch
  } = useContext(QuizContext);

  const quiz = quizData[currentIndex];

  console.log(selectedAnswer);

  if (showResults)
    return (
      <Results
        correctAnswersCount={correctAnswersCount}
        total={quizData.length}
        dispatch={dispatch}
      />
    );

  return (
    <div className="w-3/4 min-h-screen mx-auto flex flex-col text-slate-900 bg-white">
      <div className="text-center mb-2 p-2">
        <h2 className="font-bold text-3xl mb-2">Take the Quiz!</h2>
        <div className="text-xl">
          Current Question {currentIndex + 1}/{quizData.length}
        </div>
      </div>
      <div className="flex flex-col justify-around flex-auto shadow-xl w-4/5 mx-auto">
        <Question
          question={quiz.question}
          answers={shuffledAnswers || []}
          currentIndex={currentIndex}
          correctAnswer={quiz.correctAnswer}
          selectedAnswer={selectedAnswer}
          dispatch={dispatch}
        />
        <div className="align-middle mx-auto">
          <Button isDisabled={!selectedAnswer} dispatch={dispatch}>
            {currentIndex === quizData.length - 1 ? "Submit" : "Next Question"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
