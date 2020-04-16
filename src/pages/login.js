import React, { Component } from 'react'
import DefaultLayout from "../layout/Default";
import Form from "../layout/Form";
import {signup} from "../utils/auth";
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Button } from 'react-bulma-components/dist';

class login extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                {/* <div className="field">
                    <p className="control has-icons-left has-icons-right">
                      <input className="input" type="text" placeholder="Username">
                      <span className="icon is-small is-left">
                        <i className="fas fa-envelope"></i>
                      </span>
                      <span className="icon is-small is-right">
                        <i className="fas fa-user"></i>
                      </span>
                    </p>
                </div>
                <div className="field">
                    <p className="control has-icons-left">
                      <input className="input" type="password" placeholder="Password">
                      <span className="icon is-small is-left">
                        <i className="fas fa-lock"></i>
                      </span>
                    </p>
                </div>
                <div className="field">
                    <p className="control">
                      <button className="button is-success">
                        Login
                      </button>
                    </p>
                </div> */}
            </div>
        )
    }
}

export default login

// const express = require("express");
// const app = express();
// const User = require("../../models/user");
// const bcrypt = require('bcrypt');


// app.get("/user/login", (req, res) => {
//     res.render("login");
// })

// app.post("/user/login", (req, res, next) => {
//     const { username, password, firstName, lastName, admin } = req.body;
//     User.findOne({
//             username
//         })
//         .then((user) => {
 
//             if (!user) res.send("No such user")
//             else {
//                 bcrypt.compare(password, user.password, function(err, correctPassword) {
//                     if (err) next("hash compare error");
//                     else if (!correctPassword) res.send("Wrong password");
//                     else {
//                         req.session.currentUser = user;
//                         res.redirect("/itemsadmin");

//                     }
//                 });
//             }
//         })
//         .catch((err) => {
//             res.send("Error, not logged in.")
//         })
// })



// module.exports = app;
