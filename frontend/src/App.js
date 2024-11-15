import logo from './logo.svg';
import './App.css';
import Navbar from './componets/Navbar';
import Home from './componets/Home';
import {BrowserRouter as Router , Routes ,Route } from "react-router-dom"
import CAr from './componets/CAr';
import Addcar from './componets/Addcar';
import Signup from './componets/Signup';
import Login from './componets/Login';

function App() {
  return (
    <Router>

     <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/login' element={<Login/>}/>

    <Route path='/car' element={<CAr/>}/>
    <Route path='/addcar' element={<Addcar/>}/>
   </Routes>
    </Router>
  );
}

export default App;
