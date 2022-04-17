import React from 'react';

import "./Home.css";

import Upload from '../Components/Upload';

function Home(props) {
    return (
        <div className = 'page-container'>
            <div className = "center-text">
                <h1>What's on your mind?</h1>
                <button className = 'upload-btn'><i class="fa-solid fa-plus"></i></button>
                <p>Upload a story</p>
                <Upload />
            </div>
        </div>
    );
}

export default Home;