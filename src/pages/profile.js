import React, { Component } from 'react'
import { Link } from "react-router-dom";
import DefaultLayout from "../layout/Default";
import { getUser, logout } from "../utils/auth";
import './profile.css'
import { METHODS } from 'http';
import Axios from 'axios';

class profile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            wod: "",
            description: "",
            tag: ""
        }
    }
    componentDidMount() {
        // use axios again to pull in the user data
        Axios({
                method: "GET",
                url: `${process.env.REACT_APP_API_BASE}/wods`,
                withCredentials: true
            })
            .then((response) => {
                // copy the wods from state
                // add the wods f
                this.setState({
                    wods: response.data
                })
            })
            .catch((error) => {
                console.log(error);
            });
    }

    logmeOut = () => {
        logout()
        this.props.history.push('/')

    }

    render() {
        return ( 
        <DefaultLayout>
    <div >
            <h1> Welcome to your Profile page </h1> 
        <div className = "profileContainer" >
            <div className = "addWorkoutContainer" >
                <form className = "addWorkoutForm" onSubmit = { this.handleSubmit } >
                    <input type = "text" placeholder = "Name" value = { this.state.name } onChange = { this.handleChange } name = "name"/>
                    <input type = "text" placeholder = "WOD" value = { this.state.wod } onChange = { this.handleChange } name = "wod"/>
                    <input type = "text" placeholder = "Description" value = { this.state.description } onChange = { this.handleChange } name = "description"/>
                    <input type = "text" placeholder = "Tagline" value = { this.state.tagline } onChange = { this.handleChange } name = "Tag"/>
                    <button type = "submit" > Add Workout! </button> 
                </form> 
                    <br/>
                    <input type = "search"name = "search" placeholder = "Search by Tag.." id = "searchTag" />
            </div> 
            <div className = "wodsContainer" > {
                /* eventually this code needs to add a file for each item inside the database, in express previous module I used
                            the for each method. */
            } 
                <div className = "wodsCard" >
                    <h1> { this.state.user.name } </h1> 
                    <h3> { this.state.user.wod } </h3> 
                    <p> { this.state.user.description } </p> 
                    <p> { this.state.user.tag } </p> 
                </div> 
            <div className = "wodsCard" > </div> 
            <div className = "wodsCard" > </div> <div className = "wodsCard" > 
            </div> 
            </div> 
            </div> 
            <button onClick = { this.logmeOut } > log me out </button> 
            </div> 
            </DefaultLayout>
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