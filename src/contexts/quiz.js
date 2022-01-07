import { createContext, useReducer, useEffect } from "react";
import { getQuizData } from "../data/quiz";
import { shuffle } from "../utils/helpers";

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
    case "SHUFFLE_ANSWERS":
      const quiz = state.quizData[state.currentIndex];
      const shuffledAnswers = shuffle([...quiz.answers, quiz.correctAnswer]);
      console.log(shuffledAnswers);

      return { ...state, shuffledAnswers };
    default:
      return state;
  }
};

const QuizProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "SHUFFLE_ANSWERS" });
  }, [state.currentIndex]);

  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
};

export default QuizProvider;
