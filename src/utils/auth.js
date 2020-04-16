import Axios from "axios";
import qs from "qs";
/* 
    qs this is a very small library that turns js objects into 
    the query string format, which is equal to the x-www-form-urlencoded
    format
*/

export const logout = () => {
    window.localStorage.removeItem('user');
}
const axios = Axios.create({
    baseURL: `${process.env.REACT_APP_API_BASE}/auth`,
    //withCredentials: true, // this prevents cors errors, they also could have called it 'withCors'
    //headers: { 'content-type': 'application/x-www-form-urlencoded' }
});

export const signup = (user) => {
    return axios({
            method: "POST",
            url: "signup",
            data: qs.stringify(user) // using qs to put the js object into the right format
        })
        .then((response) => {
            setUser(response.data);
        })
}

export const setUser = (user) => {
    /* 
        keeping the user in localStorage
        localStorage can only save strings
    */
    window.localStorage.setItem("user", JSON.stringify(user));
}

export const getUser = (user) => {
    /*
        a function that gets the user out of the localstorage and 
        turns it intor a js object again

        use this function to protect routes, your profile page navbar
        or anywhere else where you need userdata
    */
    return JSON.parse(window.localStorage.getItem("user"));
}