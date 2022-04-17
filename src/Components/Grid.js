import React from 'react';
import useFirestore from '../Hooks/useFirestore';

import "./Grid.css";

function Grid(props) {

    const { docs } = useFirestore('images');

    return (
        <div>
            <h1>My Moments</h1>
            <div className = "image-grid">
                {docs && docs.map(doc => {return (
                    <div className = "card">
                        <img src={doc.url} alt = {doc.title} />
                        <p>{doc.title}</p>
                        <p>{doc.desc}</p>
                        <p>{doc.location}</p>
                    </div>
                )})
                }
            </div>
        </div>
    );
}

export default Grid;