import React, {useRef, useState} from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

import SignupMessage from './SignupMessage';
import { useAuth } from '../Context/AuthContext';

import './Signup.css';

function Signup(props) {

    const [valid, setValid] = useState(false);

    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const fnameRef = useRef()
    const lnameRef = useRef()
    const usernameRef = useRef()

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const {signup} = useAuth();

    function validateEmail(email) 
    {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    async function handleSubmit(e) {
        e.preventDefault();
    
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
          return setError("Passwords do not match");
        }
    
        try {
          setError("");
          setLoading(true);

          if(!emailRef.current.value && !passwordRef.current.value){
            throw "Please enter a valid email and password"
          }
          
          if(!emailRef.current.value){
            throw "Please enter a valid email";
          }

          if(!passwordRef.current.value){
            throw "Please enter a valid password";
          }

          if(!validateEmail(emailRef.current.value)){
            throw "Please enter email with valid format";
          }

          if(passwordRef.current.value.length < 6){
            throw "Passwords must be at least 6 characters";
          }

          await signup(emailRef.current.value, passwordRef.current.value)
          setValid(true);
          navigate('/profile');
        } catch (err){
          setError(err);
        }
    
        setLoading(false);
    }

    function togglePassword() {
      var x = document.getElementById("passwordc");
      if (x.type === "password") {
        x.type = "text";
      } else {
        x.type = "password";
      }
    }

    return (
        <div className = "login-container mountain">
            <div className = "login-card">
                <h1>Sign up to Firebry</h1>
                
                <form onSubmit={handleSubmit}>
                    {error &&
                      <div className = 'error-box'>
                        <p>{error}</p>
                      </div>
                    }
                    <p>Email</p>
                    <input type = "text" ref={emailRef} />
                    <p>Username</p>
                    <input type = "text" ref={usernameRef} />
                    <p>Password</p>
                    <input id = "passwordc" type = "password" ref={passwordRef} />
                    <p>Confirm Password</p>
                    <input type = "password" ref={passwordConfirmRef} />
                    <div className = 'password-row'>
                      <p>Show Password</p>
                      <input className = "check-box" type="checkbox" onClick={() => togglePassword()} />
                    </div>
                    <p>First Name</p>
                    <input type = "text" ref={fnameRef} />
                    <p>Last Name</p>
                    <input type = "text" ref={lnameRef} />
                    
                    <button className = "login-btn" onClick = {handleSubmit}>Sign Up</button>
                    <p>Already have an account? <Link to = "/">Log in</Link></p>
                </form>
            </div>
        </div>
    );
}

export default Signup;