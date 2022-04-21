import React, {useState, useRef} from 'react';

import { useNavigate } from 'react-router-dom';

import { useAuth } from '../Context/AuthContext';
import { Link } from 'react-router-dom';

import './Signup.css';

function Setting(props) {

    const {currentUser} = useAuth();
    const navigate = useNavigate();

    const emailRef = useRef();
    const newPasswordRef = useRef();
    const newPasswordConfirmRef = useRef();

    const [error, setError] = useState("");

    const {updateEmail, updatePassword, logout} = useAuth();

    function handleSubmit(e) {
        e.preventDefault();
        if (newPasswordRef.current.value !== newPasswordConfirmRef.current.value) {
          return setError("Passwords do not match");
        }
    
        const promises = [];
        setError("");

        if (newPasswordRef.current.value.length < 6) {
            return setError("Passwords must be 6 characters or more");
        }else{
          promises.push(updatePassword(newPasswordRef.current.value));
        }
    
        Promise.all(promises)
          .then(() => {
            logout();
            navigate("/");
          })
          .catch(() => {
            setError("Failed to update account");
          });
    }

    function togglePassword() {
        var x = document.getElementById("passwordb");
        if (x.type === "password") {
          x.type = "text";
        } else {
          x.type = "password";
        }
      }

    return (
        <>
            {currentUser ?
                <div className = "login-container mountain">
                    <h1>Update settings</h1>
                        <div className = 'login-card'>
                            <p>I wish to update settings for: {currentUser.email}</p>
                            <div className = "error-box">
                                {error && <p>{error}</p>}
                            </div>
                            <form onSubmit={handleSubmit}>
                                <p>New Password</p>
                                <input id = "passwordb" type = "password" ref={newPasswordRef} />
                                <p>Confirm New Password</p>
                                <input type = "password" ref={newPasswordConfirmRef} />
                                <div className = 'password-row'>
                                    <p>Show Password</p>
                                    <input className = "check-box" type="checkbox" onClick={() => togglePassword()} />
                                </div>
                                <button className = "login-btn" onClick={handleSubmit}>Submit</button>
                            </form>
                        </div>
                </div>:
                <div className = "login-container">
                    <h1>Please login to continue...</h1>
                    <Link to="/">Login here</Link>
                </div>
            }
        </>
    );
}

export default Setting;