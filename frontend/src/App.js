import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Test from './pages/Test';
import TopicsListPage from './pages/TopicsListPage';
import TopicsQuestionsPage from './pages/TopicsQuestionsPage';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path = '/' element = {<TopicsListPage />} />
        <Route path = "trees/" element = {<TopicsQuestionsPage />}/>
        <Route path = "test/" element = {<Test />}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;