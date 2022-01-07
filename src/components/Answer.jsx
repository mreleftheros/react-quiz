const Answer = ({
  index,
  answer,
  selectedAnswer,
  correctAnswer,
  onSelectAnswer
}) => {
  const letters = "ABCD";
  const letter = letters.split("")[index];

  const isActiveClass = !selectedAnswer
    ? "cursor-pointer transition-transform delay-75 ease-out hover:scale-95"
    : "";
  const isCorrectClass =
    selectedAnswer && answer === correctAnswer ? "bg-green-200" : "";
  const isWrongClass =
    selectedAnswer === answer && correctAnswer !== selectedAnswer
      ? "bg-red-200"
      : "";

  return (
    <div
      className={`basis-1/3 m-4 shadow text-slate-800 flex rounded overflow-hidden ${isActiveClass} ${isCorrectClass} ${isWrongClass}`}
      onClick={() => {
        if (selectedAnswer) return;
        onSelectAnswer(answer);
      }}
    >
      <div className="bg-purple-700 text-slate-200 p-4 text-4xl">{letter}</div>
      <h2 className="flex-auto p-4 text-3xl flex justify-center items-center">
        {answer}
      </h2>
    </div>
  );
};

export default Answer;
