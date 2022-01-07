const Button = ({ type, isDisabled }) => {
  const btnClass = isDisabled
    ? "bg-purple-400"
    : "bg-purple-700 hover:opacity-90 transition-opacity duration-150 ease-out";

  return (
    <button
      className={`text-slate-200 cursor-pointer px-4 py-3 rounded-lg text-xl ${btnClass}`}
      type={type}
      disabled={isDisabled}
    >
      Next Question
    </button>
  );
};

Button.defaultProps = {
  type: "submit",
  isDisabled: true
};

export default Button;
