import Answer from "./Answer";
import { shuffle } from "../utils/helpers";

const Question = ({ question, answers, correctAnswer }) => {
  answers = [...answers, correctAnswer];
  answers = shuffle(answers);

  return (
    <div className="text-center shadow-md select-none">
      <h2 className="bg-green-400 text-slate-200 text-4xl font-bold p-4">
        {question}
      </h2>
      <div className="flex flex-wrap justify-center">
        {answers.map((answer, index) => (
          <Answer key={index} index={index} answer={answer} />
        ))}
      </div>
    </div>
  );
};

export default Question;
