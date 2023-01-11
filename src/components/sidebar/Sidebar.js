import React from "react"
import './sidebar.css'
import {Users} from "../../dummyData"
import Names from '../names/Names'
import RssFeedIcon from '@mui/icons-material/RssFeed';
import TextsmsIcon from '@mui/icons-material/Textsms';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import GroupIcon from '@mui/icons-material/Group';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import EventIcon from '@mui/icons-material/Event';
export default function Sidebar(){
    return (
        <div className="sidebar">
            <div className="sidebarwrapper">
<ul className="sidebarlist">
    <li className="sideabrlistitem">
        <RssFeedIcon  className="sidebaricon"/>
    <span className="sidebarlistitemtext">Feed</span>
    </li>
    <li className="sideabrlistitem">
        <TextsmsIcon  className="sidebaricon"/>
    <span className="sidebarlistitemtext">Chats</span>
    </li>
    <li className="sideabrlistitem">
        <PlayCircleIcon  className="sidebaricon"/>
    <span className="sidebarlistitemtext">Videos</span>
    </li>
    <li className="sideabrlistitem">
        <GroupIcon  className="sidebaricon"/>
    <span className="sidebarlistitemtext">Groups</span>
    </li>
    <li className="sideabrlistitem">
        <BookmarksIcon  className="sidebaricon"/>
    <span className="sidebarlistitemtext">Bookmarks</span>
    </li>
    <li className="sideabrlistitem">
        <HelpOutlineIcon  className="sidebaricon"/>
    <span className="sidebarlistitemtext">Questions</span>
    </li>
    <li className="sideabrlistitem">
        <WorkOutlineIcon  className="sidebaricon"/>
    <span className="sidebarlistitemtext">Jobs</span>
    </li>
    <li className="sideabrlistitem">
        <EventIcon  className="sidebaricon"/>
    <span className="sidebarlistitemtext">Events</span>
    </li>
</ul>
<button className="btn">Show More</button>
<hr className="breakline"/>
<ul className="sidebarfriendlist">
   {Users.map((u)=>(
    <Names key={u.id} name={u} />
   ))}
</ul>
            </div>
      </div>
    )
}