import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import QuizPage from "./pages/QuizPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="quiz-page/:quizId" element={<QuizPage />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
