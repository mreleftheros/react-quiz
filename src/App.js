import Quiz from "./components/Quiz";
import QuizProvider from "./contexts/quiz";

function App() {
  return (
    <div className="bg-slate-200">
      <QuizProvider>
        <Quiz />
      </QuizProvider>
    </div>
  );
}

export default App;
