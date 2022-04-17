import React from 'react';

import "./Home.css";

import Grid from '../Components/Grid';
import Upload from '../Components/Upload';

function Home(props) {
    return (
        <div className = 'page-container'>
            <div className = "center-text">
                <div className = "banner overlay">
                    <h1>Upload cool moments!</h1>
                    <Upload />
                </div>
                <Grid />
            </div>
        </div>
    );
}

export default Home;