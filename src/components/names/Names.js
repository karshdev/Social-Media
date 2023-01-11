
import React from "react";
import './names.css'
export default function Names({name}){
    return(
        <li className="sidebarfriend">
        <img className="sidebarfriendimage" src={name.profilePicture} />
        <span className="sidebarfriendname">{name.username}</span>
    </li>
    )
}