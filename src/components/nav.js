import React from 'react';
import {Link} from "react-router-dom";
import {getUser} from "../utils/auth";
import "./nav.css"

const Navbar = () => {
    let user = getUser()
    return (
        <div>
            <nav className="navBar" role="navigation" aria-label="main navigation">
                
                            {user ?
                                <div className="navbar-end">
                                    <div className="navbar-item">
                                        <p>Welcome {user.username}</p>
                                    </div>
                                    <Link className="navbar-item" to="/">
                                        Logout
                                    </Link>
                                    <Link className="navbar-item" to="/profile">
                                        Profile
                                    </Link>
                                </div>
                                :
                                <div className="navbar-end">
                                    <Link className="navbar-item" to="/signup">
                                        Signup
                                    </Link>
                                    <Link className="navbar-item" to="/login">
                                        Login
                                    </Link>
                                    <Link to="/" className="navbar-item">
                                        HOME
                                    </Link>
                                </div>
                            }
              
            </nav>
        </div>
    );
}

export default Navbar;