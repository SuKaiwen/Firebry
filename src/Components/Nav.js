import React, {useState} from 'react';

import "./Nav.css";
import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';

function Nav(props) {

    const [show, setShow] = useState(false);

    let menu;
    const navigate = useNavigate();
    const { logout, currentUser } = useAuth();

    if(show){
        menu = <div className = "menu">
            <p>Settings</p>
            <Link to="/profile/"><p>Profile <i class="fas fa-circle-user"></i></p></Link>
            <button className="logout-btn" onClick={logout}><p>Logout</p></button>
        </div>
    }

    
    async function handleLogout() {
        try {
          await logout();
          navigate("/");
        } catch {
          console.log("Err");
        }
    }

    async function handleLogin() {
        navigate("/");
    }

    return (
        <div className = "nav">
            <div className = "row">
                {currentUser ?
                    <>
                        <Link to="/home"><h1><i class="fa-solid fa-fire fire"></i> Firebry</h1></Link>
                        <form method="get" action="/search">
                                <input type="text" placeholder="Search..." name="keyword" />
                        </form>
                    </>
                    :
                    <Link to="/"><h1><i class="fa-solid fa-fire fire"></i> Firebry</h1></Link>
                }
                
            </div>
            <div className = "nav-content">
                {currentUser ?
                    <>
                    <p>Settings</p>
                    <Link to="/profile/">
                        <p>My Profile <i class="fas fa-circle-user"></i></p>
                    </Link>
                    <button className="logout-btn" onClick={handleLogout}><p>Logout</p></button>
                    </>:<button className="logout-btn" onClick={handleLogin}><p>Login</p></button>
                }
                
            </div>
            <button onClick = {() => setShow(!show)}><i class="fas fa-bars hamburger"></i></button>
            {menu}
        </div>
    );
}

export default Nav;