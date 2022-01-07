import { createContext, useReducer, useEffect } from "react";
import { getQuizData } from "../data/quiz";
import { shuffleAnswers } from "../utils/helpers";

export const QuizContext = createContext();

const initialState = {
  questions: getQuizData(),
  answers: shuffleAnswers(getQuizData()[0]) || [],
  currentIndex: 0,
  selectedAnswer: "",
  showResults: false,
  correctAnswersCount: 0
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SELECT_ANSWER":
      return { ...state, selectedAnswer: action.payload };
    case "NEXT_QUESTION":
      const showResults = state.currentIndex === state.questions.length - 1;
      const currentIndex = showResults
        ? state.currentIndex
        : state.currentIndex + 1;
      const correctAnswersCount =
        state.selectedAnswer ===
        state.questions[state.currentIndex].correctAnswer
          ? state.correctAnswersCount + 1
          : state.correctAnswersCount;
      const selectedAnswer = "";
      const answers = showResults
        ? state.answers
        : shuffleAnswers(state.questions[currentIndex]);
      return {
        ...state,
        currentIndex,
        selectedAnswer,
        showResults,
        correctAnswersCount,
        answers
      };
    case "RESTART":
      return initialState;
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
