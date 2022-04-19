import React, {useState, useRef, useEffect} from 'react';

import Upload from '../Components/Upload';
import Grid from '../Components/Grid';
import Modal from '../Components/Modal';
import { Link } from 'react-router-dom';

import useFirestore from '../Hooks/useFirestore';

import { useAuth } from '../Context/AuthContext';

function Profile(props) {
    const [modalImage, setModalImage] = useState(null);
    const [modalTitle, setModalTitle] = useState(null);

    // Details
    const [fname, setFname] = useState();
    const [lname, setLname] = useState();
    const [username, setUsername] = useState();

    // DB of users
    const { docs } = useFirestore('users');

    const { currentUser} = useAuth();

    useEffect(() => {
        if(currentUser){
            // let myDetails = docs.find(user => matchUser(user));
            // setFname(myDetails.firstname);
            // setLname(myDetails.lastname);
            // setUsername(myDetails.username);
        }
    })

    const matchUser = (user) => {
        if(user.email === currentUser.email){
            return true;
        }
        return false;
    }

    return (
        <div className = 'page-container'>
            {currentUser ? 
            
            <div>
                <div className = "center-text">
                    <div className = "banner overlay">
                        <h1>Upload cool moments!</h1>
                        <Upload />
                    </div>
                </div>
                <div className = "center-text">
                    <h1>Welcome {currentUser.email}</h1>
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
            </div>:
            <div className = "login-container">
                <h1>Please login to continue...</h1>
                <Link to="/">Login here</Link>
            </div>
            } 
        </div>
    );
}

export default Profile;