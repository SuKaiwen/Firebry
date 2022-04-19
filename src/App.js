import React, {useState} from 'react';

import './Global.css';

import Nav from './Components/Nav';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import Signup from './Pages/Signup';

import { Routes ,Route, BrowserRouter as Router } from 'react-router-dom';

function App() {

  // Test if user is logged in
  const [loggedIn, setLoggedIn] = useState(false);
  const [currUser, setCurrUser] = useState("");

  return (
    <Router>
      <Nav 
          currUser = {currUser}
      />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/Profile/' element={
        <Profile 
          loggedIn = {loggedIn} 
          setLoggedIn = {setLoggedIn}
          currUser = {currUser}
          setCurrUser = {setCurrUser}
        />} />
      </Routes>
    </Router>
  );
}

export default App;
