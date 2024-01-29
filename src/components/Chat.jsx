import React from 'react';
import cam from '../assets/cam.png'
import add from '../assets/add.png'
import more from '../assets/more.png'
import Messages from '../components/Messages';
import Input from '../components/Input'

const Chat = () => {
    return (
        <div className='chat'>
            <div className="chatInfo">
                <span>Rudro</span>
                <div className="chatIcon">
                    <img src={cam} alt="" />
                    <img src={add} alt="" />
                    <img src={more} alt="" />
                </div>
            </div>
            <Messages/>
            <Input/>
        </div>
    );
};

export default Chat;