import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Test from "./pages/Test";
import TopicsListPage from "./pages/TopicsListPage";
import TopicsQuestionsPage from "./pages/TopicsQuestionsPage";
import HomePage from "./components/HomePage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/topics" element={<TopicsListPage />} />
          <Route path="/topics/:topicName" element={<TopicsQuestionsPage />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
