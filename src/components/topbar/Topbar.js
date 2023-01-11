import React from "react";
import "./topbar.css"
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import { useNavigate } from "react-router-dom";
 export default function Topbar(){
   
        let navigate = useNavigate(); 
       function onclick(){
          let path = `/form`; 
          navigate(path);
        }
    
    return (
       <div className="container">
        <div className="left-side">
        <div className="left-side-name">
        <a href="https://github.com/karshdev" className="name-of-app">KarshDev</a>
        </div>
        <div className="left-side-search">
            <SearchIcon className="search-icon"/>
                    <input type="text" className="input-for-search" placeholder="Search for friends ,post and videos" />
                    </div>
                    </div>

<div className="home-timeline">
    <a href="#">HomePage</a>
    <a href="#">Timeline</a>
</div>
<div className="icons">
    <PersonIcon />
    <label className="person">
    1
</label>

<MessageIcon />
<label className="person2">
    1
</label>
<CircleNotificationsIcon />
<label className="person3">
    1
</label>
</div>
<div className="profile">

    <img src="/assets/person/1.jpeg" className="profile-image" onClick={onclick} />
</div>
        </div>
    )
 }