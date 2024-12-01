import React, { useState } from 'react';
import '../styles/landingpage.css';

import Chitchatlogo from '../images/chitchatlogo.jpg';
import About1 from '../images/about-1.jpeg';
import About2 from '../images/about-2.jpeg';

import Login from '../components/Login';
import Register from '../components/Register';

const LandingPage = () => {
    const [isLoginBox, setIsLoginBox] = useState(true);

    return (
        <div className='landingPage'>
            {/* Header */}
            <div className="landing-header">
                <span className="landing-header-logo">
                    <img src={Chitchatlogo} alt="Chit-Chat Logo" />
                </span>
                <ul>
                    <li className='header-li'><a href="#home">Home</a></li>
                    <li className='header-li'><a href="#about">About</a></li>
                    <li className='header-li'><a href="#join">Join now</a></li>
                </ul>
            </div>

            {/* Chit-Chat Text Below Navbar */}
            <div className="chitchat-text">
                <h1>Chit-Chat</h1>
                <p className="sub-text">Where Conversations Begin</p>
            </div>

            {/* Landing Body */}
            <div className="landing-body">
                {/* Hero Section */}
                <div className="landing-hero" id='home'>
                    <div className="landing-hero-content">
                        <div className="auth-container">
                            <div className="auth-box">
                                {isLoginBox ? 
                                    <Login setIsLoginBox={setIsLoginBox} /> :
                                    <Register setIsLoginBox={setIsLoginBox} />
                                }
                            </div>
                            <div className="welcome-message">
                                <h1 className="welcome-text">Welcome to Chit-Chat!</h1>
                                <p className="welcome-subtext">Connect, share, and explore the power of conversation.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* About Section */}
                <div className="landing-about" id='about'>
                    <div className="about-1 reveal">
                        <img src={About1} className='about-1-img' alt="About Image 1" />
                        <div className="about-1-content">
                            <h3>Stay Connected</h3>
                            <p>Chit-chat makes it easy to stay in touch with friends, no matter where they are. Connect, engage, and keep up with updates!</p>
                            <a href='#join' className='join-now-button'>Join now!</a>
                        </div>
                    </div>
                    <div className="about-2 reveal">
                        <div className="about-2-content">
                            <h3>Amplify Your Voice</h3>
                            <p>Chit-chat allows you to amplify your voice and share your unique perspective with the world, no matter your field.</p>
                            <a href='#join' className='join-now-button'>Join now!</a>
                        </div>
                        <img src={About2} className='about-2-img' alt="About Image 2" />
                    </div>
                </div>

                {/* Footer */}
                <div className="footer">
                    <p>All rights reserved - &#169; ChitChat.com</p>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;
