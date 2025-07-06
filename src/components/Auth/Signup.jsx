import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiSmile, FiImage, FiEdit, FiThumbsUp, FiThumbsDown, FiCopy, FiMoreVertical, FiEye, FiEyeOff } from "react-icons/fi";
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';
import { LuExternalLink } from "react-icons/lu";
import { login } from '../../auth';
import '../../style/Auth.css';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    login();
    navigate('/dashboard');
  };

  return (
    <div className="auth-container">
      <div className="left-pane">
        <h1 className='logo'>CHAT A.I+</h1>
        <div className="left-content">
          <h1 className="main-heading">
            Learn, Discover &<br />
            <span className="heading-span">Automate in One Place.</span>
          </h1>

          <div className="chat-section">
            <p className="user-query">Create a chatbot gpt using python language what will be step for that</p>
            <button className="chat-badge">CHAT A.I + <LuExternalLink className='link' /></button>

            <div className="chat-box">
              <p>
                Sure, I can help you get started with creating a chatbot using GPT in Python.
                Here are the basic steps you'll need to follow:
              </p>

              <ol>
                <li>
                  Install the required libraries:
                  You'll need to install the transformers library from Hugging Face to use GPT. You can install it using pip.
                </li>
                <li>
                  Load the pre-trained model:
                  GPT comes in several sizes and versions, so you'll need to choose the one that fits your needs. You can load a pre-trained GPT model.
                </li>
              </ol>

              <p>
                These are just the basic steps to get started with a GPT chatbot in Python.
                Depending on your requirements, you may need to add more features or complexity to the chatbot. <br />Good luck!
              </p>
            </div>

            <div className="reply-bar">
              <FiSmile className="icon" />
              <input type="text" placeholder="Reply ..." />
              <FiImage className="icon" />
              <button className="send-btn"><span className='snd'>&gt;</span></button>
            </div>
          </div>
        </div>

        <div className="sidebar-wrapper">
          <div className="circle-btn">
            <FiEdit />
          </div>

          <div className="icon-stack">
            <FiThumbsUp />
            <div className="sidebar-divider"></div>
            <FiThumbsDown />
            <div className="sidebar-divider"></div>
            <FiCopy />
          </div>

          <div className="circle-btn">
            <FiMoreVertical />
          </div>
        </div>
      </div>

      <div className="right-pane">
        <form className="auth-form" onSubmit={handleSignup}>
          <h2>Sign up with free trial</h2>
          <p className='subheading'>Empower your experience, sign up for a free account today</p>

          <label htmlFor="email">Email Address*</label>
          <input
            id="email"
            type="email"
            placeholder="ex.email@domain.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password">Password*</label>
          <div className="password-wrapper">
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span className="password-toggle" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FiEye /> : <FiEyeOff />}
            </span>
          </div>

          <p className="terms">
            By registering for an account, you are consenting to our <a href="#" id='term'>Terms of Service</a> and confirming that you have reviewed and accepted the <a href="#">Global Privacy Statement</a>.
          </p>

          <button type="submit" className="signup-btn">Get started free</button>

          <p className="login-link">Already have an account? <a href="/login">Login</a></p>

          <div className="divider">Or better yet...</div>

          <div className="social-buttons">
            <button type="button" className="social-btn">
              <FcGoogle size={20} />
              Continue with Google
            </button>

            <button type="button" className="social-btn">
              <FaApple size={20} />
              Continue with Apple
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
