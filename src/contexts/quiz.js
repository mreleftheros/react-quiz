import { createContext, useReducer } from "react";
import { getQuizData } from "../data/quiz";

export const QuizContext = createContext();

const initialState = {
  quizData: getQuizData(),
  currentIndex: 0
};

const reducer = (state, action) => {
  return state;
};

const QuizProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <QuizContext.Provider value={state}>{children}</QuizContext.Provider>;
};

export default QuizProvider;
