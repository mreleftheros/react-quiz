import Answer from "./Answer";

const Question = ({
  question,
  answers,
  correctAnswer,
  selectedAnswer,
  currentIndex,
  dispatch
}) => {
  return (
    <div>
      <h2 className="bg-green-500 text-slate-200 text-4xl font-bold p-4 pl-6 rounded">
        {`${currentIndex + 1}. `}
        {question}
      </h2>
      <div className="grid md:grid-cols-2 md:grid-rows-2 select-none">
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
