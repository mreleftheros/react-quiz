import Button from "./Button";
import Question from "./Question";

const Quiz = () => {
  return (
    <div className="w-3/4 min-h-screen shadow-xl mx-auto p-2 flex flex-col">
      <h2 className="text-center mb-4 p-2 text-2xl font-bold text-slate-800">
        Take the Quiz!
      </h2>
      <div className="flex flex-col justify-around items-center flex-auto">
        <Question />
        <Button />
      </div>
    </div>
  );
};

export default Quiz;
