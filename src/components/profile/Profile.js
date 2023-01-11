import React from 'react'
import './profile.css'
import Topbar from "../topbar/Topbar";
import Sidebar from '../sidebar/Sidebar'
import Feed from '../feed/Feed'
import Rightbar from '../rightbar/Rightbar'
import { ShapeLine } from '@mui/icons-material';
import { useParams } from 'react-router-dom';
import { Users } from '../../dummyData';
export default function Profile(){
    const params = useParams()
    console.log(params)
    const id =  params.id;
    console.log(id)
    const user =  Users.find(f => f.id == id)
   
    
    return (
        <>
        <Topbar />
        <div className="profile">
        <Sidebar />
        <div className='profileright'>
            <div className='profilerighttop'>
                <div className='profilecover'>
                <img src='/assets/post/3.jpeg' className='profilecoverimg' />
                <img src={`${user?.profilePicture}`} className='profilecuserimg' />
                </div>
                <div className='profileinfo'>
                <h4 className='profileinfoname'>{user?.username}</h4>
                <span className='profileinfodes'>Hello my name is aki</span>
                </div>
            </div>
            <div className='profilerightbottom'>
            <Feed />
        <Rightbar />
            </div>
       
        </div>

        </div>
        
        </>
    )
}