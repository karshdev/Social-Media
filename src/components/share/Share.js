import React from "react";
import './share.css'
import PermMediaIcon from '@mui/icons-material/PermMedia';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import LabelIcon from '@mui/icons-material/Label';
import LocationOnIcon from '@mui/icons-material/LocationOn';
export default function Share(){
    return (
        <div className="share">
            <div className="sharewrapper">
                <div className="sharetop">
                    <img src="/assets/person/1.jpeg" className="shareprofilepic" />
                    <input placeholder="What's in your mind Aakarsh" className="shareinput" />
                </div>
                <hr className="break" />
                <div className="sharebottom">
                    <div className="shareoptionscontainer">
                        <PermMediaIcon htmlColor="Blue"/>
                        <span className="sharetext">Media</span>
                    </div>
                    <div className="shareoptionscontainer">
                        <LabelIcon htmlColor="tomato" />
                        <span className="sharetext">Tag</span>
                    </div>
                    <div className="shareoptionscontainer">
                        <LocationOnIcon  htmlColor="Green"/>
                        <span className="sharetext">Location</span>
                    </div>
                    <div className="shareoptionscontainer">
                        <EmojiEmotionsIcon  htmlColor="yellow"/>
                        <span className="sharetext">Feelings</span>
                    </div>
                    <div className="shareoptionscontainer">
                    <button className="btn">Share</button>
                    </div>
                </div>
                
            </div>
          
        </div>
    )
}