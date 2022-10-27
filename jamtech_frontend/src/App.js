import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Login } from './Login';
import { SignUp } from './SignUp';
import { Home } from './Home';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/home/:user/:role" element={<Home/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
