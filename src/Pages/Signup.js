import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import useStorage from '../Hooks/useStorage';
import SignupMessage from './SignupMessage';

function Signup(props) {

    // User details
    const [email, setEmail] = useState(null);
    const [username ,setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [fname, setFname] = useState(null);
    const [lname, setLname] = useState(null);

    const [valid, setValid] = useState(false);

    // Submit
    const handleSubmit = () => {

        // Check invalid
        if(email === "" || username === "" || password === "" || fname === "" || lname === ""){
            return;
        }
        if(validateEmail(email)){
            setValid(true);
        }   
        return;
        
    }

    // Check valid email
    function validateEmail(mail) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)){
            return true;
        }
        return false;
    }

    return (
        <div className = "login-container">
            <div className = "login-card">
                <h1>Sign up to Firebry</h1>
                {!valid ? 
                <>
                    <p>Already have an account? <Link to = "/profie">Log in</Link></p>
                    <p>Email</p>
                    <input type = "text" onChange={(e) => setEmail(e.target.value)}/>
                    <p>Username</p>
                    <input type = "text" onChange={(e) => setUsername(e.target.value)}/>
                    <p>Password</p>
                    <input type = "text" onChange={(e) => setPassword(e.target.value)}/>
                    <p>First Name</p>
                    <input type = "text" onChange={(e) => setFname(e.target.value)}/>
                    <p>Last Name</p>
                    <input type = "text" onChange={(e) => setLname(e.target.value)}/>
                    <button className = "login-btn" onClick={() => handleSubmit()}>Sign Up</button>
                </>:
                <SignupMessage 
                    email = {email}
                    username = {username}
                    fname = {fname}
                    lname = {lname}
                    password = {password}
                    setEmail = {setEmail}
                    setUsername = {setUsername}
                    setFname = {setFname}
                    setLname = {setLname}
                    setPassword = {setPassword}
                />}
            </div>
        </div>
    );
}

export default Signup;