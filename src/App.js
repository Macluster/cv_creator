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


function App() {


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage/>} />
          <Route path="/Login" element={<LoginPage/>} />
          <Route path="/CreatorPage" element={<CreatorPage/>} />
         
        </Routes>
      </Router>




    </div>
  );
}

export default App;
