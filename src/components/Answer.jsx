const Answer = ({ index, answer }) => {
  const letters = "ABCD";
  const letter = letters.split("")[index];

  return (
    <div className="basis-1/3 m-4 shadow text-slate-800 flex rounded cursor-pointer transition-transform delay-75 ease-out hover:scale-95">
      <div className="bg-purple-700 text-slate-200 p-4 text-4xl">{letter}</div>
      <h2 className="flex-auto p-4 text-3xl flex justify-center items-center">
        {answer}
      </h2>
    </div>
  );
};

export default Answer;
