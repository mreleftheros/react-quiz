const Results = ({ correctAnswers, total }) => {

  return (
    <div className="w-3/4 mx-auto min-h-screen shadow-xl flex justify-center">
      <div>
        <h2 className="my-8 text-4xl font-bold">Congratulations!</h2>
        <div>
          You answered {correctAnswers}/{total}
        </div>
        <div>Total score: 100%</div>
      </div>
    </div>
  );
};

export default Results;
