import React, {useState, useRef} from 'react';

import { useNavigate } from 'react-router-dom';

import { useAuth } from '../Context/AuthContext';
import { Link } from 'react-router-dom';

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

        if (newPasswordRef.current.value) {
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

    return (
        <>
            {currentUser ?
                <div className = "login-container">
                    <h1>Update settings</h1>
                        <div className = 'login-card'>
                            <p>I wish to update settings for: {currentUser.email}</p>
                            <div className = "error-box">
                                {error && <p>Error: {error}</p>}
                            </div>
                            <form onSubmit={handleSubmit}>
                                <p>New Password</p>
                                <input type = "text" ref={newPasswordRef} />
                                <p>Confirm New Password</p>
                                <input type = "text" ref={newPasswordConfirmRef} />
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