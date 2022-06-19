import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Test from './pages/Test';
import TopicsListPage from './pages/TopicsListPage';
import TopicsQuestionsPage from './pages/TopicsQuestionsPage';
import HomePage from './components/HomePage';
import LoginPage from './pages/LoginPage';
import PrivateRoutes from './utils/PrivateRoutes';
import { AuthProvider } from "./context/AuthContext";
import { gapi } from "gapi-script";
import Aboutus from "./components/footer/Aboutus";
import Feedback from "./pages/Feedback";

window.gapi.load('client:auth2', () => {
  window.gapi.client.init({
      clientId: '673674178296-m63l2q6n5jdqevqfoucccsgr70see998.apps.googleusercontent.com',
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
            <Route path = "/aboutus" element = {<Aboutus />} exact/>
          </Route>
          <Route path = "/login" element = {<LoginPage />} exact/>
        </Routes>
      </AuthProvider>
      <Routes>
        <Route path = "/test" element = {<Test />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;