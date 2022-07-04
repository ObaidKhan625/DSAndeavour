import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import TopicsListPage from './pages/TopicsListPage';
import TopicsQuestionsPage from './pages/TopicsQuestionsPage';
import AboutUsPage from './pages/AboutUsPage';
import LoginPage from './pages/LoginPage';
import NoMatchingPage from './pages/NoMatchingPage';
import PrivateRoutes from './utils/PrivateRoutes';
import Feedback from './pages/Feedback';
import { AuthProvider } from "./context/AuthContext";
import { gapi } from "gapi-script";  // eslint-disable-line no-unused-vars

// Will be deprecated
window.gapi.load('client:auth2', () => {
  window.gapi.client.init({
      clientId: '673674178296-u69af3bdvpoc06oqji8ht8niau7ooocv.apps.googleusercontent.com',
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
                <Route exact path = "/" element = {<TopicsListPage />}/>
                <Route exact path = "/topics/:topicName" element = {<TopicsQuestionsPage />} />
                <Route exact path = "/feedback" element = {<Feedback />}/>
              </Route>
              <Route exact path = "/login" element = {<LoginPage />}/>
              <Route exact path = "/about" element = {<AboutUsPage />}/>
              <Route exact path = "*" element = {<NoMatchingPage/>}/>
            </Routes>
          </AuthProvider>
      </Router>
    </>
  );
}

export default App;