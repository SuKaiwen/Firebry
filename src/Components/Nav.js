import React, {useState} from 'react';

import "./Nav.css";

function Nav(props) {

    const [show, setShow] = useState(false);

    let menu;

    if(show){
        menu = <div className = "menu">
            <p>Categories</p>
            <p>Settings</p>
            <p>Profile <i class="fas fa-circle-user"></i></p>
        </div>
    }

    return (
        <div className = "nav">
            <h1><i class="fa-solid fa-fire fire"></i> Firebry</h1>
            <div className = "nav-content">
                <p>Categories</p>
                <p>Settings</p>
                <p>Profile <i class="fas fa-circle-user"></i></p>
            </div>
            <button onClick = {() => setShow(!show)}><i class="fas fa-bars hamburger"></i></button>
            {menu}
        </div>
    );
}

export default Nav;