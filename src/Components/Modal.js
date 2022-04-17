import React from 'react';

import "./Modal.css";

function Modal(props) {

    const closeModal = (e) => {
        if(e.target.classList.contains('modal-background')){
            props.setModalImage(null);
            props.setModalTitle(null);
        }
    }

    return (
        <div>
            <div onClick = {closeModal} className = 'modal-background'>
                <img className = "modal-image" src = {props.modalImage} alt = "modal-picture" />
                <h1>{props.modalTitle}</h1>
            </div>
        </div>
    );
}

export default Modal;