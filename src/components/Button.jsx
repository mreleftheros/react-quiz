const Button = ({ children, type, isDisabled, dispatch }) => {
  const btnClass = isDisabled
    ? "bg-purple-400"
    : "bg-purple-700 hover:opacity-90 transition-opacity duration-150 ease-out";

  return (
    <button
      className={`text-slate-100 cursor-pointer px-4 py-3 rounded-lg text-xl ${btnClass}`}
      type={type}
      disabled={isDisabled}
      onClick={() => {
        if (type === "next") {
          dispatch({ type: "NEXT_QUESTION" });
        } else if (type === "restart") {
          dispatch({ type: "RESTART" });
        }
      }}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: "next",
  isDisabled: true
};

export default Button;
