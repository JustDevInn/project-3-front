import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom"
import {getUser, logout} from "../utils/Auth";
import "./nav.css"
import 'react-bulma-components/dist/react-bulma-components.min.css';

class Navbar extends Component {
    constructor(){
        super()
        this.handleLogout = this.handleLogout.bind(this);
    }
    handleLogout(){
        logout()
        .then(()=> {
            this.props.history.push("/");
        })
        .catch((err)=> {
            
        })
    }
    render(){
      let user = getUser();
     return(
        <nav className="navbar is-white" role="navigation" aria-label="main navigation">
            {/* {user ? */}
                <div id="navbarBasicExample">
                      <div className="navbar-start">
                      <h1 className="navbar-item">
                          Sportify
                        </h1>
                        <a className="navbar-item" href="/">
                          Home
                        </a>

                        <a className="navbar-item" href="/#about">
                          About
                        </a>

                      <div className="navbar-end">
                        <div className="navbar-item">
                          <div className="buttons">
                            <a className="button is-primary" href="/Signup">
                              <strong>Sign up</strong>
                            </a>
                            <a className="button is-light" href="/Login">
                              Log in
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
                {/* : */}
                {/* <div id="navbarBasicExample">
                    <div className="navbar-start">
                    <h1 className="navbar-item">
                          Sportify
                        </h1>
                        <a className="navbar-item" href="/">
                          Home
                        </a>
                        <a className="navbar-item" href="/#about">
                          About
                        </a>
                    </div>
                    
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                            <a className="button is-white">
                            <strong>USERNAME</strong>
                            </a>
                            <a onClick = { this.logmeOut } className="button is-light" href="/">
                                Log out
                            </a>
                            </div>
                        </div>
                    </div> */}
                {/* </div>   
            } */}
        </nav>
     )
    }
}

export default withRouter(Navbar);