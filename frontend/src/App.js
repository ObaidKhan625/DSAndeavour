import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import TopicsListPage from './pages/TopicsListPage';
import TopicsQuestionsPage from './pages/TopicsQuestionsPage';
import AboutUsPage from './pages/AboutUsPage';
import LoginPage from './pages/LoginPage';
import PrivateRoutes from './utils/PrivateRoutes';
import Feedback from './pages/Feedback';
import { AuthProvider } from "./context/AuthContext";
import { gapi } from "gapi-script";

window.gapi.load('client:auth2', () => {
  window.gapi.client.init({
      clientId: 'abc',
      plugin_name: "chat"
  })
})


function App() {
  return (
    <>
    <Router>
      <AuthProvider>
        <Routes>
          <Route element = {<PrivateRoutes />} >
            <Route path = "/" element = {<TopicsListPage />} exact/>
            <Route path = "/topics/:topicName" element = {<TopicsQuestionsPage />} />
            <Route path = "/feedback" element = {<Feedback />} exact/>
          </Route>
          <Route path = "/login" element = {<LoginPage />} exact/>
        </Routes>
      </AuthProvider>
      <Routes>
        <Route path = "/about" element = {<AboutUsPage />} exact/>
      </Routes>
    </Router>
    </>
  );
}

export default App;