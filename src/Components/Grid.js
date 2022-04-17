import React from 'react';
import useFirestore from '../Hooks/useFirestore';

import "./Grid.css";

function Grid(props) {

    const { docs } = useFirestore('images');

    const filteredDocs = docs;

    return (
        <div className = "main-grid center-text">
            <h1>My Moments</h1>
            <div className = "image-grid">
                {filteredDocs && filteredDocs.map(doc => {return (
                    <div className = "card">
                        <div onClick={() => 
                            {props.setModalImage(doc.url);
                            props.setModalTitle(doc.title);}
                        }>
                            <img src={doc.url} alt = {doc.title} />
                        </div>
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