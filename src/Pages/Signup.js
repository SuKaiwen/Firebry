import React, {useRef, useState} from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

import SignupMessage from './SignupMessage';
import { useAuth } from '../Context/AuthContext';

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

    async function handleSubmit(e) {
        e.preventDefault();
    
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
          return setError("Passwords do not match")
        }
    
        try {
          setError("")
          setLoading(true)
          
          console.log(emailRef.current.value);
          console.log(passwordRef.current.value);
          await signup(emailRef.current.value, passwordRef.current.value)
          setValid(true);
          navigate('/profile');
        } catch {
          setError("Failed to create an account")
        }
    
        setLoading(false)
    }

    return (
        <div className = "login-container mountain">
            <div className = "login-card">
                <h1>Sign up to Firebry</h1>
                
                <form onSubmit={handleSubmit}>
                    <p>Already have an account? <Link to = "/">Log in</Link></p>
                    <p>{error}</p>
                    <p>Email</p>
                    <input type = "text" ref={emailRef} />
                    <p>Username</p>
                    <input type = "text" ref={usernameRef} />
                    <p>Password</p>
                    <input type = "text" ref={passwordRef} />
                    <p>Confirm Password</p>
                    <input type = "text" ref={passwordConfirmRef} />
                    <p>First Name</p>
                    <input type = "text" ref={fnameRef} />
                    <p>Last Name</p>
                    <input type = "text" ref={lnameRef} />
                    <button className = "login-btn" onClick = {handleSubmit}>Sign Up</button>
                </form>
            </div>
        </div>
    );
}

export default Signup;