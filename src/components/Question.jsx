import Answer from "./Answer";
import { shuffle } from "../utils/helpers";

const Question = ({ question, answers, correctAnswer, dispatch }) => {
  answers = [...answers, correctAnswer];
  answers = shuffle(answers);

  return (
    <div className="text-center">
      <h2 className="bg-green-400 text-slate-200 text-4xl font-bold p-4">
        {question}
      </h2>
      <div className="flex flex-wrap justify-center select-none my-10">
        {answers.map((answer, index) => (
          <Answer
            key={index}
            index={index}
            answer={answer}
            onSelectAnswer={answer =>
              dispatch({ type: "SELECT_ANSWER", payload: answer })
            }
          />
        ))}
      </div>
    </div>
  );
};

export default Question;
