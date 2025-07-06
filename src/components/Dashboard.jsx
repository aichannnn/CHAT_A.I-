import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoWarningOutline } from "react-icons/io5";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { BsGlobe2 } from "react-icons/bs";
import ChatBox from './ChatBox';
import Sidebar from './Sidebar';
import UpgradePro from './Upgrade';
import '../style/Dashboard.css';
import ChatComponent from './ChatComponent.jsx';

const Dashboard = () => {
  const navigate = useNavigate();
  const [selectedConversation, setSelectedConversation] = useState(null);

  const handleConversationClick = (conversation) => {
    setSelectedConversation(conversation);
  };

  const infoData = [
    { title: "Explore", description: "Learn how to use chat.ai platform for your needs", icon: <BsGlobe2 size={22} color="white" />, bgColor: "#000000" },
    { title: "Capabilities", description: "How much capable chat.ai to full-fill your needs", icon: <AiOutlineThunderbolt size={22} color="white" />, bgColor: "#000000" },
    { title: "Limitation", description: "How much capable chatai to full-fill your needs", icon: <IoWarningOutline size={22} color="white" />, bgColor: "#000000" }
  ];

  const tileData = [
    { title: "Explain", desc: "Quantum computing in simple terms", img: "https://t4.ftcdn.net/jpg/12/83/40/87/240_F_1283408760_ncPaW0nympXK7qE5BJKJTedCLDZbNEcB.jpg" },
    { title: "How to", desc: "Make a search engine platform like google", img: "https://img.freepik.com/free-vector/realistic-dynamic-fog-background_23-2149111507.jpg?w=360" },
    { title: "Remember", desc: "quantum computing in simple terms", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzpbUaMx52EAPeGvPNFPuLtCOfRtCv0H_P7g&s" },
    { title: "Allows", desc: "User to provide follow-up corrections", img: "https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://media.easy-peasy.ai/9a80df60-e275-469e-8d4b-94b3ff8e69dc/7f6f31a5-6701-4aa7-a4b2-0e0d17a7949a.png" },
    { title: "May", desc: "Occasionally generate incorrect information", img: "https://images.unsplash.com/photo-1636110291887-a1a76d79ccaa?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d3Jvbmd8ZW58MHx8MHx8fDA%3D" },
    { title: "Limited", desc: "Knowledge of world and events after 2021", img: "https://itchronicles.com/wp-content/uploads/2020/11/where-is-ai-used.jpg" },
  ];

  return (
    <div className={`dashboard-layout ${selectedConversation ? 'chat-active-bg' : 'default-bg'}`}>
      <UpgradePro />
      <div className='menu'>
        <Sidebar onConversationClick={handleConversationClick} />
      </div>


      {selectedConversation ? (
        <div className="chat-component-container">
          <div className="chat-messages-scrollable">
            <ChatComponent messages={selectedConversation.messages} />
          </div>
          <ChatBox className="chatbox" />
        </div>
      ) : (
        <main className="main-chat">
          <div className="main-content">
            <div className="chat-brand">CHAT A.I+</div>
            <h1>Good day! How may I assist you today?</h1>

            <div className="content-sections-container">
              <div className="info-section">
                {infoData.map((info, idx) => (
                  <div className="info-block" key={idx} style={{ backgroundColor: info.bgColor }}>
                    <div className="icon-wrapper">{info.icon}</div>
                    <div>
                      <strong>{info.title}</strong>
                      <p>{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="divider-bars">
                <span className="bar">|||</span>
                <span className="bar">|||</span>
                <span className="bar">|||</span>
              </div>

              <div className="tile-section">
                {tileData.map((item, idx) => (
                  <div className="tile-card" key={idx}>
                    <img src={item.img} alt={item.title} className="tile-img" />
                    <div>
                      <strong>"{item.title}"</strong>
                      <p>{item.desc}</p>
                    </div>
                    <span className="arrow">→</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <ChatBox />
        </main>
      )}
    </div>
  );
};

export default Dashboard;
