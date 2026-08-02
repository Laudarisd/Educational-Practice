import React, { useState }from 'react';
import { useNavigate } from 'react-router-dom';

import '../css/Forgotpw.css';


function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        //Implement the logic to handle forgot password
        setMessage(`If an account exists for ${email}, an email has been sent with further instructions.`);
    };
    const handleBack = (e) => {
        e.preventDefault();
        navigate("/login");
    }



    return (
        <>
        <div className="fp-container">
            <h2>Forgot Password</h2>
            <p>Enter your email address and we'll send you a link to reset your password.</p>
            
            <form onSubmit={handleSubmit}>
                <input 
                    className="fp-input"
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder="Enter your email" 
                    required 
                />
                <button className="fp-button" type="submit">Send Reset Link</button>
            </form>

            {message && <p className="fp-message">{message}</p>}
        </div>
        <div className="fp-back-btn">
            <button onClick={handleBack}>Back</button>
        </div>
    </>
    );
}


export default ForgotPassword;