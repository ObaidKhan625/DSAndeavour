import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import TopicsListPage from './pages/TopicsListPage';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<TopicsListPage />} />
        
      </Routes>
    </Router>
    </>
  );
}

export default App;