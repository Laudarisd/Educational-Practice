import React from 'react';
//import { useState }from "react";
import { Link } from 'react-router-dom';
import '../css/Navbar.css';
import logoImage from '../img/logo.png'; // Make sure the path is correct



// function Navbar({ isLoggedIn, onLogout }) {
    // const [showAiDropdown, setShowAiDropdown] = useState(false);
    // const [showCodingDropdown, setShowCodingDropdown] = useState(false);
    function Navbar() {
    
    return (
        <nav className="navbar">
            {/* <div className="logo">MyAppLogo</div> */}
            <div className="logo">
                <img src={logoImage} alt="LearningHUB Logo" style={{ height: '70px' }} />
            </div>
            <div className="nav-links">
                <div className="nav-item">
                    <Link to="/">HOME</Link>
                </div>
                {/* <div className="nav-item"
                     onMouseEnter={() => setShowAiDropdown(true)} 
                     onMouseLeave={() => setShowAiDropdown(false)}>
                    COURSES
                    {showAiDropdown && (
                        <div className="dropdown-content">
                            {/* Dropdown links 
                            <Link to="aiml"> AI & ML </Link>
                            <Link to="Ds"> DS </Link>
                        </div> 
                    )}
                    </div>*/}
                {/* <div className="nav-item"
                     onMouseEnter={() => setShowCodingDropdown(true)} 
                     onMouseLeave={() => setShowCodingDropdown(false)}>
                    CODING
                    {showCodingDropdown && (
                        <div className="dropdown-content">
                            {/* Dropdown links
                            {/* <a href="#">Python</a>
                            <a href="#">C++</a>
                            <a href="#">js</a>
                            <a href='#'>R</a>
                        </div>
                    )}
                </div> */}
                <div className="nav-item">
                    <Link to="/Coding">CODING</Link>
                </div>
                <div className="nav-item">
                    <Link to="/Project">PROJECTS</Link>
                </div>
                <div className="nav-item">
                    <Link to="/about">ABOUT US</Link>
                </div>
                {/* {!isLoggedIn && 
                    <div className="nav-item">
                        <Link to="/signup">SIGN UP</Link>
                    </div>
                } */}
                {/* {isLoggedIn && 
                    <div className="nav-item" onClick={onLogout}>
                        LOGOUT
                    </div>
                } */}
            </div>
        </nav>
    );
}

export default Navbar;
