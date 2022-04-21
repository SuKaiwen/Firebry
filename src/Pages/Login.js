import React, {useState, useRef} from 'react';

import { Link } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom';

import "./Signup.css";

function Login(props) {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault()
    
        try {
          setError("");
          setLoading(true);
          await login(emailRef.current.value, passwordRef.current.value);
          navigate("/profile");
        } catch {
          setError("Incorrect login or password")
        }
    
        setLoading(false)
    }

    function togglePassword() {
        var x = document.getElementById("passworda");
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
    }

    return (
        <div className = "login-container mountain">
            <div className = "login-card">   
                <form onSubmit={handleSubmit}>
                    <h1>Login to continue</h1>
                    {error && 
                    <div className = "error-box">
                        {error && <p>Error: {error}</p>}
                    </div>}
                    <p>Email</p>
                    <input type = "text" ref={emailRef} />
                    <p>Password</p>
                    <input id = "passworda" type = "password" ref={passwordRef} />
                    <div className = 'password-row'>
                      <p>Show Password</p>
                      <input className = "check-box" type="checkbox" onClick={() => togglePassword()} />
                    </div>
                    <button className = "login-btn" onClick={handleSubmit}>Login</button>
                    <p>Don't have an account? <Link to="/signup">Make one for free!</Link></p>         
                </form>
            </div>
        </div>
    );
}

export default Login;