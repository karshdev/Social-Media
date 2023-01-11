import React, { useState } from "react";
import './post.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {Posts, Users} from "../../dummyData"
import { Link } from "react-router-dom";
export default function Post({post}){
    const[like,setlike]=useState(post.like)
const[isliked,setisliked]=useState(false)
const LikeHandler=()=>{
    setlike(isliked?like-1:like+1)
    setisliked(!isliked)
}
    return (
        <div className="post">
            <div className="postwrapper">
                <div className="posttop">
                    <img src={`${post.user.profilePicture}`} className="profileimg" />
                    <Link className="profilename" to={`/profile/${post.user.id}`} >{post.user.username}</Link>
                    <span className="time">{post.date}</span>
                    <MoreVertIcon className="dots"/>
                </div>
               
                <div className="postmid">
                    <p>Every Moment is a fresh Beginning</p>
                    <img src= {post.photo} className="postimg" />
                </div>
                <div className="postbottom">
                    <img src="/assets/like.png" className="like" onClick={LikeHandler} />
                    <img src="/assets/heart.png" className="like" onClick={LikeHandler} />
                    <span className="counter">{like} people like it</span>
                    <span className="comments" >{post.comment} Comments</span>
                </div>
                
            </div>
          
        </div>
    )
}