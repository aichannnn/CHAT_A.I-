import React, { useState, useEffect } from 'react';
import { logout } from '../auth';
import { useNavigate } from 'react-router-dom';
import {
  FiSearch, FiSettings,
  FiPlus, FiEdit, FiTrash2
} from 'react-icons/fi';
import { BiMessageAltDots } from "react-icons/bi";
import '../style/Sidebar.css';

const ConversationItem = ({ text, dimmed = false, onClick }) => {
  return (
    <div className="conversation-wrapper" onClick={onClick}>
      <div className={`conversation-item ${dimmed ? 'dimmed' : ''}`}>
        <p><BiMessageAltDots className='msg'/> {text}</p>
        <div className="hover-actions">
          <FiTrash2 className="action-icon" />
          <FiEdit className="action-icon" />
        </div>

      </div>
      <div className="blue-dot"></div>
    </div>
  );
};

const ConversationSection = ({ title, items, showClearAll = false }) => {
  return (
    <>
      {title && (
        <div className="section-with-divider">
          <div className="section-header">
            <span>{title}</span>
            {showClearAll && <span className="clear-all">Clear All</span>}
          </div>
        </div>
      )}
      <div className="conversation-list">
        {items.map((item, index) => (
          <ConversationItem
            key={index}
            text={item.text}
            dimmed={item.dimmed}
            onClick={item.onClick}
          />
        ))}
      </div>
    </>
  );
};

const Sidebar = ({ onConversationClick }) => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') {
        setIsSearchExpanded(false);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  const dummyMessages = [
    {
      question: "What is this about?",
      answer: "This is a sample conversation loaded from sidebar click.",
      userImage: "https://randomuser.me/api/portraits/men/32.jpg"
    }
  ];

  const recentConversations = [
    { text: 'Create Html Game Environment...', messages: dummyMessages },
    { text: 'Apply To Leave For Emergency', messages: dummyMessages },
    { text: 'What Is UI UX Design?', messages: dummyMessages },
    { text: 'Create POS System', messages: dummyMessages },
    { text: 'What Is UX Audit?', messages: dummyMessages },
    { text: 'Create Chatbot GPT...', messages: dummyMessages },
    { text: 'How Chat GPT Work?', messages: dummyMessages }
  ];

  const lastWeekConversations = [
    { text: 'Crypto Lending App Name', messages: dummyMessages },
    { text: 'Operator Grammar Types', messages: dummyMessages },
    { text: 'Min States For Binary DFA', dimmed: true, messages: dummyMessages }
  ];

  const handleItemClick = (item) => {
    if (onConversationClick) {
      onConversationClick(item);
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <aside className="sidebar">
      <h2 className="brand-title">CHAT A.I+</h2>

      <div className="top-buttons">
        <button
          className={`new-chat-btn ${isSearchExpanded ? 'shrunken' : ''}`}
          onClick={() => {

            if (isSearchExpanded) {
              setIsSearchExpanded(false);
            } else {

              console.log("New chat clicked");
            }
          }}
        >
          <FiPlus id="plus" />
          {!isSearchExpanded && ' New chat'}
        </button>

        <div className={`search-container ${isSearchExpanded ? 'expanded' : ''}`}>
          <button
            className="search-icon-btn"
            onClick={() => setIsSearchExpanded(true)}
          >
            <FiSearch />
          </button>
          <input
            type="text"
            className="search-input"
            placeholder="Search Conversation..."
            onBlur={() => setIsSearchExpanded(false)}
          />
        </div>
      </div>


      <ConversationSection
        title="Your conversations"
        items={recentConversations.map(item => ({
          ...item,
          onClick: () => handleItemClick(item)
        }))}
        showClearAll
      />

      <ConversationSection
        title={<div className="last7">Last 7 Days</div>}
        items={lastWeekConversations.map(item => ({
          ...item,
          onClick: () => handleItemClick(item)
        }))}
      />

      <div className="bottom-section">
        <div className="settings-bar" onClick={() => setShowDropdown(!showDropdown)}>
          <FiSettings className="settings-icon" />
          <span>Settings</span>
        </div>

        {showDropdown && (
          <div className="dropdown-menu">
            <button onClick={handleLogout}>Logout</button>
          </div>
        )}

        <div className="profile">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="User"
            className="profile-pic"
          />
          <span>Andrew Neilson</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
