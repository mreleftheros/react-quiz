import Answer from "./Answer";

const Question = () => {
  return (
    <div className="text-center shadow-md">
      <h2 className="bg-green-400 text-slate-200 text-4xl font-bold p-4">
        Question
      </h2>
      <div className="flex flex-wrap justify-center">
        <Answer />
        <Answer />
        <Answer />
        <Answer />
      </div>
    </div>
  );
};

export default Question;
