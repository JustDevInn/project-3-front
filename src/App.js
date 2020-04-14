import React, { Component } from 'react'
import {Route} from "react-router-dom";
import './App.css';
import Home from "./pages/Home"
import Signup from "./pages/signup";
import Login from "./pages/login";
import Nav from "./components/nav";
import Profile from "./pages/Profile";
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
         
    }
  }

  render() {
    return (
      <div>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route path="/profile" component={Profile} />
      </div>
    )
  }
}

export default App
