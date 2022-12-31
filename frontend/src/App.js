import { React } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import TopicsList from "./pages/TopicsList/TopicsList";
import TopicsQuestions from "./pages/TopicsQuestions/TopicsQuestions";
import AboutUs from "./pages/AboutUs/AboutUs";
import Login from "./pages/Login/Login";
import NoMatchingPage from "./pages/NoMatchingPage";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <div style={{ background: 'linear-gradient(to right, #ffc3a0, #ffafbd)' }}>
      <Router>
        <AuthProvider>
          <Routes>
            <Route exact path="/" element={<TopicsList />} />
            <Route exact path="/topics/:topicName"element={<TopicsQuestions />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/about" element={<AboutUs />} />
            <Route exact path="*" element={<NoMatchingPage />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;