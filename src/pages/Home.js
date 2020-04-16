import React, { Component } from 'react';
import Axios from 'axios';
import { getUser } from "../utils/Auth";
import DefaultLayout from "../layout/Default";
import "./home.css"
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Button } from 'react-bulma-components';


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
        Axios.get(`${process.env.REACT_APP_API}/wods`)
            .then(res => {
                this.setState({ name: res.name })
            })
            .catch((err) => {
                console.log(err);
            })
    }

    render() {
        let user = getUser()
        return ( <div>
            <DefaultLayout>
                <div className="section1">
                    <Button id = "signIn" href="/Signup" className="button is-primary">Sign up now!</Button>
                </div>

                <div className="section2" id="about">
                    <div className="section2Items">
                        <h3><b>Why Sportify ?</b></h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit aut quaerat provident blanditiis atque? Vel recusandae commodi quisquam, distinctio velit earum fuga libero reiciendis ab, itaque, voluptatem aliquid quod! Obcaecati?</p>
                    </div>
                </div>
            </DefaultLayout>

            </div>
        )
    }
}


export default Home