import React from 'react';
import useFirestore from '../Hooks/useFirestore';

import "./Grid.css";

function Grid(props) {

    const { docs } = useFirestore('images');

    const filteredDocs = docs;

    return (
        <div className = "main-grid">
            <h1>My Moments</h1>
            <div className = "image-grid">
                {filteredDocs && filteredDocs.map(doc => {return (
                    <div className = "card">
                        <img src={doc.url} alt = {doc.title} />
                        <h1>{doc.title}</h1>
                        <p>{doc.desc}</p>
                        <p><i class="fa-solid fa-location-dot"></i> {doc.location}</p>
                    </div>
                )})
                }
            </div>
        </div>
    );
}

export default Grid;