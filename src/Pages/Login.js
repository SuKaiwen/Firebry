import React, {useState, useRef} from 'react';

import { Link } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom';

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
          setError("")
          setLoading(true)
          await login(emailRef.current.value, passwordRef.current.value)
          navigate("/profile")
        } catch {
          setError("Failed to log in")
        }
    
        setLoading(false)
    }

    return (
        <div className = "login-container mountain">
            <div className = "login-card">   
                <form onSubmit={handleSubmit}>
                    <h1>Login to continue</h1>
                    <p>Email</p>
                    <input type = "text" ref={emailRef} />
                    <p>Password</p>
                    <input type = "text" ref={passwordRef} />
                    <button className = "login-btn" onClick={handleSubmit}>Login</button>
                    <p>Don't have an account? <Link to="/signup">Make one for free!</Link></p>         
                </form>
            </div>
        </div>
    );
}

export default Login;