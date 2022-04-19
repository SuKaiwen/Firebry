import React from 'react';

import "./Home.css";

import Upload from '../Components/Upload';

function Home(props) {
    return (
        <div className = 'page-container'>
            <div className = "login-container">
                <i class="fa-solid fa-user-group"></i>
                <h1>Looks empty here!</h1> 
                <p>Start following people to view their content!</p>
            </div>
        </div>
    );
}

export default Home;