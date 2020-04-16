import React, { Component } from 'react'
import {Route} from "react-router-dom";
import './App.css';
import Home from "./pages/Home"
import Signup from "./pages/signup";
import Login from "./pages/login";
// import Logout from "./pages/logout";
import Nav from "./components/nav";
import Profile from "./pages/profile";
import Axios from 'axios';

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
      <Route path="/Login" component={Login} />
      {/* <Route path="/logout" component={Logout} /> */}
      <Route exact path="/Signup" component={Signup} />
      <Route path="/profile" component={Profile} />
      </div>
    )
  }
}

export default App
