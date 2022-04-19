import React, {useState} from 'react';

import Upload from '../Components/Upload';
import Grid from '../Components/Grid';
import Modal from '../Components/Modal';

import { Link } from 'react-router-dom';
import useFirestore from '../Hooks/useFirestore';

function Profile(props) {
    const [modalImage, setModalImage] = useState(null);
    const [modalTitle, setModalTitle] = useState(null);

    // DB of users
    const { docs } = useFirestore('users');

    // User details
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const checkCredentials = (username, password, targetName, targetPass) => {
        if(username == targetName && password == targetPass){
            return true;
        }
        return false;
    }

    const login = () => {
        const currentUser = docs.find(user => checkCredentials(username, password, user.username, user.password));
        if(currentUser){
            props.setLoggedIn(true);
            props.setCurrUser(currentUser);
        }
    }

    return (
        <div className = 'page-container'>
            {props.loggedIn ? 
            <div>
                <div className = "center-text">
                    <div className = "banner overlay">
                        <h1>Upload cool moments!</h1>
                        <Upload />
                    </div>
                </div>
                
                <Grid 
                    setModalImage = {setModalImage} 
                    setModalTitle = {setModalTitle}
                />
                {modalImage &&
                    <Modal 
                    modalImage = {modalImage} 
                    setModalImage = {setModalImage}
                    modalTitle = {modalTitle}
                    setModalTitle = {setModalTitle}
                    />
                }
            </div> : <div className = "login-container">
                <div className = "login-card">
                    <h1>Login to continue</h1>
                    <p>Username</p>
                    <input type = "text" onChange={(e) => setUsername(e.target.value)} />
                    <p>Password</p>
                    <input type = "text" onChange={(e) => setPassword(e.target.value)} />
                    <button className = "login-btn" onClick = {() => login()}>Login</button>
                    <p>Don't have an account? <Link to="/signup">Make one for free!</Link></p>
                </div>
            </div>
            
            }
            
        </div>
    );
}

export default Profile;