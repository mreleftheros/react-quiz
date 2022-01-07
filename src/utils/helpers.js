export const shuffleAnswers = question => {
  const unShuffledAnswers = [...question.answers, question.correctAnswer];

  return unShuffledAnswers
    .map(item => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(i => i.item);
};

export const renderCongrats = (correct, total) => {
  const result = correct / total;

  return result === 1
    ? "Excellent!"
    : result >= 0.8
    ? "Very Good!"
    : result >= 0.6
    ? "Good!"
    : result >= 0.4
    ? "Quite Good!"
    : result >= 0.2
    ? "Not Good!"
    : "Bad!";
};
