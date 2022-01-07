const quizData = [
  {
    id: 0,
    question: "What is the technology to build the website structure called?",
    answers: ["JavaScript", "CSS", "JSON"],
    correctAnswer: "HTML"
  },
  {
    id: 1,
    question: "What is the best frontend framewor/library?",
    answers: ["Vue", "Angular", "Ember"],
    correctAnswer: "React"
  },
  {
    id: 2,
    question: "What is the <p> tag stand for?",
    answers: ["container", "preformated text", "picture"],
    correctAnswer: "paragraph"
  },
  {
    id: 3,
    question: "What is the first index count in arrays?",
    answers: ["1", "-1", "10"],
    correctAnswer: "0"
  },
  {
    id: 4,
    question:
      "Which array method lets you change every array element into some other format?",
    answers: ["filter", "reduce", "find"],
    correctAnswer: "map"
  }
];

export const getQuizData = () => {
  return quizData;
};
