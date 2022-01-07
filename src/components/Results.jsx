import { renderCongrats } from "../utils/helpers";
import Button from "./Button";

const Results = ({ correctAnswersCount, total, dispatch }) => {
  return (
    <div className="w-3/4 mx-auto min-h-screen flex items-center justify-center text-slate-900 bg-white">
      <div className="w-3/4 text-center shadow-xl h-96 rounded-lg flex flex-col justify-between overflow-hidden">
        <h2 className="bg-purple-700 text-4xl font-bold p-4 text-slate-100">
          {renderCongrats(correctAnswersCount, total)}
        </h2>
        <p className="text-2xl my-4">
          You answered {correctAnswersCount}/{total}
        </p>
        <div className="my-8 text-2xl">
          Total score:{" "}
          <span className="text-purple-700 font-bold">
            {((correctAnswersCount / total) * 100).toFixed(0)}%
          </span>
        </div>
        <div className="mb-4">
          <Button type="restart" isDisabled={false} dispatch={dispatch}>
            Restart Quiz
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Results;
