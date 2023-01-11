
import React from "react";
import './online.css'
export default function Online({user}){

    return (
        <div>
                <li className="rightbarfriend">
                        <div className="rightbarprofileimgcontainer">
                            <img src={user.profilePicture} className="rightbarprofileimg"  />
                            <span className="rightbaronline"></span>
                        </div>
                        <span className="rightbarusername" >{user.username}</span>
                    </li>
                    </div>
    )
}