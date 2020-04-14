import React, { Component } from 'react';
import Axios from 'axios';
import { getUser } from "../utils/Auth";
import DefaultLayout from "../layout/Default";
// import css


class Home extends Component {
    constructor() {
        super();
        this.state = {
            user: {
                name: "",
                description: ""
            },
            error: null
        }
    }


    componentDidMount() {
        Axios.get("http://localhost:3000/users/wods")
            .then(res => {
                this.setState({ name: res.name })
            })
            .catch((err) => {
                console.log(err);
            })
    }

    render() {
        let user = getUser()
        return ( <
            div >
            <
            DefaultLayout >
            <
            a id = "signIn"
            class = "btn btn-outline-danger btn-lg"
            href = "/signup"
            role = "button" > Sign up now! < /a>

            <
            h1 > { this.state.user.name } < /h1> <
            p > { this.state.user.description } < /p> <
            /DefaultLayout>

            <
            /div>
        )
    }
}


export default Home