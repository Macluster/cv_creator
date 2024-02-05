import logo from './logo.svg';
import './App.css';

import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginForm';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import CreatorPage from './Pages/CreatorPage';
import { RecoilRoot } from 'recoil';
import SignUpPage from './Pages/SignUppage';


function App() {


  return (
    <div className="App">
      <RecoilRoot>
      <Router>
        <Routes>
          <Route exact path="/cv_creator" element={<HomePage />} />
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/CreatorPage" element={<CreatorPage />} />
          <Route path="/SignUp" element={<SignUpPage/>} />

        </Routes>
      </Router>
      </RecoilRoot>



    </div>
  );
}

export default App;
