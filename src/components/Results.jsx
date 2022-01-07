import { renderCongrats } from "../utils/helpers";
import Button from "./Button";

const Results = ({ correctAnswers, total, dispatch }) => {
  return (
    <div className="w-3/4 mx-auto min-h-screen shadow-xl flex justify-center text-slate-900">
      <div className="w-1/2 text-center">
        <h2 className="bg-purple-700 my-8 text-4xl font-bold p-4 rounded-xl text-slate-200">
          {renderCongrats(correctAnswers, total)}
        </h2>
        <p className="text-lg my-4">
          You answered {correctAnswers}/{total}
        </p>
        <div className="my-8">
          Total score:{" "}
          <span className="text-purple-700 font-bold text-xl">
            {((correctAnswers / total) * 100).toFixed(0)}%
          </span>
        </div>
        <div>
          <Button type="restart" isDisabled={false} dispatch={dispatch}>
            Restart Quiz
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Results;
