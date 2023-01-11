import React from "react";

import './login.css'
export default function Login(){
    return (
        <div className="logincontainer">
            <div className="text">
                <h2 className="name">KarshDev</h2>
                <p className="nameinfo">
                    Connect with your friends and the world around you on KarshDev
                </p>
            </div>
        
            <div className="form">
                <input className="mail" type="text" placeholder="Email" />
                <input className="password" type="text" placeholder="Password" />
                <button className="loginbutton">Log In</button>
                <a href="#" className="forgotpassword">Forgot Password</a>
                <button className="newaccountbutton">Create a New Account</button>
            </div>
        </div>
    )
}