import React from 'react'
import "./userInfo.css";
import MORE from "../../../assets/more.png";
import VIDEO from "../../../assets/video.png";
import EDIT from "../../../assets/edit.png";
import AVATAR from "../../../assets/avatar.png"
import { useUserStore } from './../../../lib/userStore';

const UserInfo = () => {

  const { currentUser } = useUserStore();

  return (
    <div className='userInfo'>
        <div className="user">
            <img src={currentUser.avatar || AVATAR} alt="" />
            <h2>{currentUser.username}</h2>
        </div>
        <div className="icons">
            <img src={MORE} alt="" />
            <img src={VIDEO} alt="" />
            <img src={EDIT} alt="" />
        </div>
    </div>
  )
}

export default UserInfo