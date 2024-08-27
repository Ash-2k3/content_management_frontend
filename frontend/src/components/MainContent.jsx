import React from 'react';
import './MainContent.css'; 
import { MdOutlineCampaign } from "react-icons/md";
import { PiLinkedinLogoBold } from "react-icons/pi";
import { MdOutlineEmail } from "react-icons/md";
import { GrArticle } from "react-icons/gr";
import { BsFilePost } from "react-icons/bs";
import { RiLightbulbFlashLine } from "react-icons/ri";


const MainContent = () => {
  return (
    <div className="main-content">
      <p>Hello User,</p>
      <p>What do you plan to Write Today?</p>
      <div className="button-container" >
        <div className="test"><MdOutlineCampaign className='iconClass'/>
        <span>Campaign</span></div>
        <div className="test"><PiLinkedinLogoBold className='iconClass'/>
        <span>LinkedIn Post</span></div>
        <div className="test"><MdOutlineEmail className='iconClass' />
        <span>Email</span></div>
        <div className="test"><GrArticle className='iconClass'/>
        <span>Email</span></div>
        <div className="test"><BsFilePost className='iconClass'/>
        <span>Blog Post</span></div>
        <div className="test"><RiLightbulbFlashLine className='iconClass'/>
        <span>Idea Generation</span></div>
      </div>
       <div className="inputBox">
    

<input type="text" placeholder="Type here if you have other things on your Mind" />

        </div>
      
    </div>
  );
};

export default MainContent;
