import { useContext, useEffect } from "react";
import { QuizContext } from "../contexts/quiz";
import Button from "./Button";
import Question from "./Question";
import Results from "./Results";
import Spinner from "./shared/Spinner";

const triviaApi =
  "https://opentdb.com/api.php?amount=10&type=multiple&encode=url3986";

const Quiz = () => {
  const {
    state: {
      questions,
      answers,
      currentIndex,
      selectedAnswer,
      showResults,
      correctAnswersCount,
      isLoading
    },
    dispatch
  } = useContext(QuizContext);

  useEffect(() => {
    if (questions.length > 0) return;

    fetch(triviaApi)
      .then(res => res.json())
      .then(data => {
        dispatch({ type: "FETCH_QUESTIONS", payload: data.results });
      });
  }, [isLoading]);

  if (isLoading)
    return (
      <div className="w-3/4 min-h-screen mx-auto flex justify-center items-center text-slate-900 bg-white">
        <Spinner message={"Fetching Questions..."} />
      </div>
    );

  if (showResults)
    return (
      <Results
        correctAnswersCount={correctAnswersCount}
        total={questions.length}
        dispatch={dispatch}
      />
    );

  if (!showResults && questions.length > 0)
    return (
      <div className="w-3/4 min-h-screen mx-auto flex flex-col text-slate-900 bg-white">
        <div className="text-center mb-2 p-2">
          <h2 className="font-bold text-3xl mb-2">Take the Quiz!</h2>
          <div className="text-xl">
            Current Question {currentIndex + 1}/{questions.length}
          </div>
        </div>
        <div className="flex flex-col justify-around flex-auto shadow-xl w-4/5 mx-auto">
          <Question
            question={questions[currentIndex].question}
            answers={answers}
            currentIndex={currentIndex}
            correctAnswer={questions[currentIndex].correctAnswer}
            selectedAnswer={selectedAnswer}
            dispatch={dispatch}
          />
          <div className="align-middle mx-auto">
            <Button isDisabled={!selectedAnswer} dispatch={dispatch}>
              {currentIndex === questions.length - 1
                ? "Submit"
                : "Next Question"}
            </Button>
          </div>
        </div>
      </div>
    );
};

export default Quiz;
