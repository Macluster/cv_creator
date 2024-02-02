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


function App() {


  return (
    <div className="App">
      <RecoilRoot>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/CreatorPage" element={<CreatorPage />} />

        </Routes>
      </Router>
      </RecoilRoot>



    </div>
  );
}

export default App;
