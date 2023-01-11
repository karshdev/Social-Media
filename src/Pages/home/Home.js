import React from "react";
import './Home.css'
import Topbar from "../../components/topbar/Topbar";
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import Login from '../../components/login/Login'
export default function Home(){
    return (
        <>
   <Topbar />
   <div className="homecontainer">
<Sidebar />
<Feed />
<Rightbar />
</div>

        </>
    )
}