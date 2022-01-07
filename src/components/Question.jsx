import Answer from "./Answer";

const Question = ({ question }) => {
  return (
    <div className="text-center shadow-md select-none">
      <h2 className="bg-green-400 text-slate-200 text-4xl font-bold p-4">
        {question}
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
