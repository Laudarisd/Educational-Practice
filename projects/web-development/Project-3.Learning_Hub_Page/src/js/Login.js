import React, { useState, useEffect } from "react";
import image1 from '../img/1.jpeg';
import image2 from '../img/2.jpeg';
import image3 from '../img/3.jpeg';

import { Link } from 'react-router-dom'; 


function Login({ onLogin }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [currentImage, setCurrentImage] = useState(0);
    const images = [image1, image2, image3];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((currentImage) => (currentImage + 1) % images.length);
        }, 3000); // Change image every 3 seconds
    
        return () => clearInterval(interval);
    }, [images.length]);

    const handleSubmit = (event) => {
        event.preventDefault();
        onLogin(email, password);
    };


    return (
        <div className="login-container">
            <h2 className="login-title">Welcome to LearningHUB</h2>
            <p className="login-subtitle">Log in to see courses</p>

            <div className="login-slideshow-container">
                {images.map((img, index) => (
                    <img 
                        key={index} 
                        src={img} 
                        alt={`Slide ${index}`}
                        className={index === currentImage ? 'active' : ''}
                    />
                ))}
            </div>
            <div className="login-form-container">
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="email">Email:</label>
                        <input
                        type="email"
                        name="email"  
                        id="email"   
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">Password:</label>
                        <input
                        type="password"
                        name="password"  
                        id="password"    
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button type="submit">Login</button>
                </form>

                <Link to="/forgotpw">Forgot Password?</Link>
                <Link to="/signup">Sign Up</Link>
            </div>
        </div>

    );
}

export default Login;

