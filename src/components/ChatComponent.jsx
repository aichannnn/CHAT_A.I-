import React, { useEffect, useRef, useState } from 'react';
import { FiThumbsUp, FiThumbsDown, FiMoreHorizontal, FiRepeat, FiEdit, FiCopy } from 'react-icons/fi';
import { LuExternalLink } from "react-icons/lu";
import '../style/ChatComponent.css';

const ChatComponent = () => {
  const containerRef = useRef(null);
  const [showFade, setShowFade] = useState(true);

  const handleScroll = () => {
    const el = containerRef.current;
    if (!el) return;

    const atBottom = el.scrollHeight - el.scrollTop === el.clientHeight;
    setShowFade(!atBottom);
  };

  const messages = [
    {
      userImage: 'https://randomuser.me/api/portraits/men/32.jpg',
      question: 'Create a chatbot gpt using python language what will be step for that',
      answer: (
        <>
          <div className="ai-brand-label">CHAT A.I + <span className="ai-badge"><LuExternalLink className='link' /></span></div>
          <p><strong>Sure, I can help you get started with creating a chatbot using GPT in Python. Here are the basic steps you'll need to follow:</strong></p>
          <ol>
            <li><strong>Install the required libraries:</strong> You'll need to install the transformers library from Hugging Face to use GPT. You can install it using pip.</li>
            <li><strong>Load the pre-trained model:</strong> GPT comes in several sizes and versions, so you'll need to choose the one that fits your needs. You can load a pre-trained GPT model. This loads the 1.3B parameter version of GPT-Neo, which is a powerful and relatively recent model.</li>
            <li><strong>Create a chatbot loop:</strong> You'll need to create a loop that takes user input, generates a response using the GPT model, and outputs it to the user. Here's an example loop that uses the input() function to get user input and the gpt() function to generate a response. This loop will keep running until the user exits the program or the loop is interrupted.</li>
            <li><strong>Add some personality to the chatbot:</strong> While GPT can generate text, it doesn't have any inherent personality or style. You can make your chatbot more interesting by adding custom prompts or responses that reflect your desired personality. You can then modify the chatbot loop to use these prompts and responses when appropriate. This will make the chatbot seem more human-like and engaging.</li>
          </ol>
          <p><strong>These are just the basic steps to get started with a GPT chatbot in Python. Depending on your requirements, you may need to add more features or complexity to the chatbot. Good luck!</strong></p>
        </>
      )
    },
    {
      userImage: 'https://randomuser.me/api/portraits/men/32.jpg',
      question: 'What is use of that chatbot ?',
      answer: (
        <>
          <div className="ai-brand-label">CHAT A.I + <span className="ai-badge"><LuExternalLink className='link' /></span></div>
          <p><strong>Chatbots can be used for a wide range of purposes, including:</strong></p>
          <p>Customer service chatbots can handle frequently asked questions, provide basic support, and help customers.</p>
        </>
      )
    }
  ];

  return (
    <div className="chat-container scroll-parent" ref={containerRef} onScroll={handleScroll}>
      {messages.map((msg, index) => (
        <div key={index} className="chat-block">
          <div className="chat-user">
            <img src={msg.userImage} alt="User" className="avatar" />
            <div className="chat-question-wrapper">
              <div className="chat-question">{msg.question}</div>
              <FiEdit className="edit-icon" />
            </div>

          </div>

          <div className="chat-ai">
            <div className="chat-answer">{msg.answer}</div>

            <div className="chat-footer">
              <div className="feedback-group">
                <button><FiThumbsUp /></button>
                <div className="divider-line" />
                <button><FiThumbsDown /></button>
                <div className="divider-line" />
                <button><FiCopy /></button>
              </div>
              <div className="menu-icon-box">
                <FiMoreHorizontal className="vertical-menu" />
              </div>
              <button className="regenerate"><FiRepeat /> Regenerate</button>
            </div>
          </div>

          {index !== messages.length - 1 && <div className="divide"></div>}
        </div>
      ))}

      {showFade && <div className="global-fade-bottom" />}
    </div>
  );
};

export default ChatComponent;
