import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import TopicsListPage from './pages/TopicsListPage';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<TopicsListPage />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;