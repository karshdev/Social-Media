import React from "react"
import './rightbar.css'
import {Users} from '../../dummyData'
import Online from '../online/Online'
export default function Sidebar(){
    return (
        <div className="rightbar">
            <div className="rightbarwrapper">
                <div className="birthdaycontainer">
                    <img src="/assets/gift.png" className="birthdayimg"/>
                    <span className="birthdaytext"><b>Pola Foster</b> and <b>3 other friends</b> have birthday today</span>
                </div>
                <img src="/assets/ad.png" className="rightbarad" />
                <h4 className="rightbartitle">Online friends</h4>
                <ul className="rightbarfriendlist">
                   {Users.map((u)=> (
                    <Online key={u.id} user={u} />
                   ))}
                    </ul>
            </div>
        </div>
    )
}