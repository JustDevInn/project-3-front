import React, { Component } from 'react'
import {login} from "../utils/Auth";
import DefaultLayout from "../layout/Default";
import axios from 'axios';
import qs from "qs";
import Form from "../layout/Form";

export default class Login extends Component {
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    state = {
        username: "",
        password: ""
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        login(this.state)
        .then((response)=> {
            this.props.history.push("/profile");
        })
    }
    render() {
        return (
          <DefaultLayout>
            <Form>
            <div onSubmit={this.handleSubmit}>
                <div className="field">
                    <p className="control has-icons-left has-icons-right">
                      <input onChange={this.handleChange} value={this.state.username} className="input" type="text" placeholder="Username"/>
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
                      <input onChange={this.handleChange} value={this.state.username} className="input" type="password" placeholder="Password"/>
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
                </div>
            </div>
            </Form>
        </DefaultLayout>
        )
    }
}
