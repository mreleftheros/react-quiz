const Answer = ({
  index,
  answer,
  selectedAnswer,
  correctAnswer,
  onSelectAnswer
}) => {
  const letters = "ABCD";
  const letter = letters.split("")[index];

  const isActive = !selectedAnswer;
  const isCorrect = selectedAnswer && answer === correctAnswer;
  const isWrong = selectedAnswer === answer && correctAnswer !== selectedAnswer;

  return (
    <div
      className={`basis-1/3 m-4 shadow text-slate-800 flex rounded overflow-hidden ${
        isActive
          ? "cursor-pointer transition-transform delay-75 ease-out hover:scale-95"
          : ""
      }`}
      onClick={() => {
        if (selectedAnswer) return;
        onSelectAnswer(answer);
      }}
    >
      <div
        className={`text-slate-100 p-4 text-4xl ${
          isCorrect ? "bg-green-500" : isWrong ? "bg-red-500" : "bg-purple-700"
        }`}
      >
        {letter}
      </div>
      <h2 className="flex-auto p-4 text-3xl flex justify-center items-center">
        {answer}
      </h2>
    </div>
  );
};

export default Answer;
