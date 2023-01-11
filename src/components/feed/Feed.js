import React from "react"
import './feed.css'
import Share from '../share/Share'
import Post from '../posts/Post'
import {LocalPosts} from "../../dummyData"
export default function Sidebar(){
    return (
        <div className="feed">
            <div className="feedwrapper">
                
                <Share />
                {LocalPosts.map((p)=>(
                    <Post  key={p.id} post={p} user={p.user}/>
                ))}
            </div>
        </div>
    )
}