import React, { Component } from 'react'
import { Link } from "react-router-dom";
import DefaultLayout from "../layout/Default";
import { getUser, logout } from "../utils/auth";
import './profile.css'
import { METHODS } from 'http';
import Axios from 'axios';
import qs from "qs";

class profile extends Component {
    constructor(props) {
        super(props)

        this.state = {
<<<<<<< HEAD
            wod: [],
            addWod:{
                name: "",
                wod: "",
                description: "",
                tag: "",
=======
            name: "",
            wod: "",
            description: "",
            tag: ""
>>>>>>> 09fb402ef4acd44474c6bf243efd9336d9e9dad4
        }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event){
        event.preventDefault()
        Axios({
        method: "POST",
        url: process.env.REACT_APP_API_BASE,
        data: qs.stringify(this.state),
        headers: {"content-type": "application/x-www-form-urlencoded"}
    })
    .then((response)=>{
        this.props.history.push(`${process.env.REACT_APP_API_BASE}/profile`)

    })
    .catch((error)=>{
        console.log("error cannot create a new wod like that!", error)
    })
    }



    componentDidMount() {
        // use axios again to pull in the user data
        Axios({
                method: "GET",
                url: `${process.env.REACT_APP_API_BASE}/wods`,
                withCredentials: true
            })
            .then((response) => {
<<<<<<< HEAD
                this.setState({wod: response.data})
=======
                // copy the wods from state
                // add the wods f
                this.setState({
                    wods: response.data
                })
>>>>>>> 09fb402ef4acd44474c6bf243efd9336d9e9dad4
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
            <h1> Welcome to your workout library!</h1> 
        <div className = "profileContainer" >
            <div className = "addWorkoutContainer" >
                <form className = "addWorkoutForm" onSubmit = { this.handleSubmit } >
                    <input type = "text" placeholder = "Name" value = { this.state.name } onChange = { this.handleChange } name = "name"/>
                    <input type = "text" placeholder = "Workout" value = { this.state.wod } onChange = { this.handleChange } name = "workout"/>
                    <input type = "text" placeholder = "Description" value = { this.state.description } onChange = { this.handleChange } name = "description"/>
                    <input type = "text" placeholder = "Tagline" value = { this.state.tagline } onChange = { this.handleChange } name = "Tag"/>
                    <button type = "submit" > Add Workout! </button> 
                </form> 
                    <br/>
                    <input type = "search"name = "search" placeholder = "Search by Tag.." id = "searchTag" />
            </div> 
            <div className = "wodsContainer" > 
                {this.state.wod ? this.state.wod.map((workout, index) =>{ 
                    return(
                <div className = "wodsCard" >
                    <div className="individualWod">
                        <h1> { workout.name } </h1>
                        <h3> { workout.wod } </h3> 
                        <p> { workout.description } </p> 
                        <p> { workout.tag } </p> 
                    </div>
                    </div> 
                    )
                }): <p>Search in progress</p>}  
            </div> 
        </div> 
            <button onClick = { this.logmeOut } > log me out </button> 
    </div> 
            </DefaultLayout>
        )
    }

}

export default profile