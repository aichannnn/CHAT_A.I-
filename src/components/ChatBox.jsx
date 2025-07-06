import React, { useState } from 'react';
import '../style/ChatBox.css';
import { LuSend } from "react-icons/lu";

const ChatBox = () => {
  return (
    <div className="chatbox">
      <div className="brain-icon"></div>
      <input
        type="text"
        className="input-field"
        placeholder="What's in your mind?..."
      />
      <div className="send-button">
        <LuSend className='send-icon' />
      </div>
    </div>
  );
};

export default ChatBox;
