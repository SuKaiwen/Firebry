import React, {useState} from 'react';

import './Global.css';

import Nav from './Components/Nav';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import Signup from './Pages/Signup';
import Search from './Pages/Search';
import Login from './Pages/Login';

import { Routes ,Route, BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './Context/AuthContext';

function App() {

  // Test if user is logged in
  const [loggedIn, setLoggedIn] = useState(false);
  const [currUser, setCurrUser] = useState("");

  return (
    <AuthProvider>
      <Router>
        <Nav 
            currUser = {currUser}
        />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/search' element={<Search/>} />
          <Route path='/profile/' element={
          <Profile 
            loggedIn = {loggedIn} 
            setLoggedIn = {setLoggedIn}
            currUser = {currUser}
            setCurrUser = {setCurrUser}
          />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
