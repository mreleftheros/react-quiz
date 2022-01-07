import { createContext, useReducer } from "react";
import { getQuizData } from "../data/quiz";

export const QuizContext = createContext();

const initialState = {
  quizData: getQuizData(),
  currentIndex: 0,
  selectedAnswer: ""
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SELECT_ANSWER":
      return { ...state, selectedAnswer: action.payload };
    default:
      return state;
  }
};

const QuizProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
};

export default QuizProvider;
