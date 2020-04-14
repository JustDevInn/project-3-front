import React, { Component } from 'react'
import {Link} from "react-router-dom";
import DefaultLayout from "../layout/Default";
import {getUser, logout} from "../utils/auth";
import './profile.css'
import { METHODS } from 'http';
import Axios from 'axios';

class profile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user:{
                 name: "",
                 wod:"",
                 //description:"",
                 //tag:""
        }}
    }
    componentDidMount() {
       Axios({
           method: "GET",
           url: "process.env.DB/wods",
           withCredentials: true
       })
       .then((response)=>{
            this.setState({name:response.data.name, wod:response.data.wod })
       })
       .catch((error) => {
        console.log(error);
      });
    }
        
    logmeOut = () => {
        logout()
        this.props.history.push('/')
    
    }
        
    render(){
        return (
        <div>
        
            <h1>Welcome to your Profile page {this.state.user.name}</h1>
            {/* <div className="profileContainer">
            <div className="addWorkoutContainer">
                <form className="addWorkoutForm" onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Name" value={this.state.name} onChange={this.handleChange} name="name"/>
                    <input type="text" placeholder="WOD" value={this.state.wod} onChange={this.handleChange} name="wod"/>
                    <input type="text" placeholder="Description" value={this.state.description} onChange={this.handleChange} name="description"/>
                    <input type="text" placeholder="Tagline" value={this.state.tagline} onChange={this.handleChange} name="Tag"/>
                    <button type="submit">Add Workout!</button>
                </form>
                <br/>
                <input type="search" name="search" placeholder="search by Tag.." id="searchTag"/>
            </div>
            <div className="wodsContainer">
                <div className="wodsCard">
                    <h1>Wod Name</h1>
                    <h3>EMOM 10 <br/>
                    10 HSPU <br/>
                    10 Pull ups</h3>
                    <p>Alternate movements every minute</p>
                    <p>Tag: Pull, Push</p>
                </div>
                <div className="wodsCard"></div>
                <div className="wodsCard"></div>
                <div className="wodsCard"></div>
            </div>
            </div>
            
            <button onClick={this.logmeOut}>log me out</button> */}
        </div>
        )
    }
    
}


export default profile




// const Profile = (props) => {
//     let user = getUser();
    
//     return (
//         <DefaultLayout>
//             <h1>Welcome to your profile page {user.username}</h1>
//             <button onClick={this.logmeOut}>log me out</button>
//         </DefaultLayout>
//     );
// }

// export default Profile;