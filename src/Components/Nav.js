import React, {useState} from 'react';

import "./Nav.css";
import { Link } from 'react-router-dom';

function Nav(props) {

    const [show, setShow] = useState(false);

    let menu;

    if(show){
        menu = <div className = "menu">
            <p>Categories</p>
            <p>Settings</p>
            <Link to="/Profile/"><p>Profile <i class="fas fa-circle-user"></i></p></Link>
        </div>
    }

    return (
        <div className = "nav">
            <Link to="/"><h1><i class="fa-solid fa-fire fire"></i> Firebry</h1></Link>
            <div className = "nav-content">
                <p>Categories</p>
                <p>Settings</p>
                <Link to="/Profile/">{props.currUser ? 
                    <p>{props.currUser.username} <i class="fas fa-circle-user"></i></p>:
                    <p>Profile <i class="fas fa-circle-user"></i></p>
                }</Link>
            </div>
            <button onClick = {() => setShow(!show)}><i class="fas fa-bars hamburger"></i></button>
            {menu}
        </div>
    );
}

export default Nav;