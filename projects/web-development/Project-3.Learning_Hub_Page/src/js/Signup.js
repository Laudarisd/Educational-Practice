import React, { useState } from 'react';
import '../css/Signup.css';
import Footer from './Footer';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { useNavigate } from 'react-router-dom';

// import ReCAPTCHA from "react-google-recaptcha";


function Signup({ onSignup }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [agreement, setAgreement] = useState(false);
    //Add back button
    //const [back, setBack] = useState(false);
    //Use navigation
    const navigate = useNavigate();
    // const [captchaValue, setCaptchaValue] = useState(null);


    const handleSubmit = (e) => {
        console.timeLog("handleSubmit called")
        e.preventDefault();
        // if (!captchaValue) {
        //     alert('Please verify that you are not a robot.');
        //     return;
        // }
        //Validate agreement
        if (!agreement) {
            alert('Please agree to the terms and conditions.');
            return;
        }

        // onSignup(email, password);
        onSignup(email, password, firstName, lastName, phoneNumber);

    };

    //Define back button logic
    const handleBack = (e) => {
        e.preventDefault();
        navigate('/login');
    };

    return (
        <>
        <div className="signup-form">
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <input type="tel" placeholder="+61XXXXXXXXX" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                <div className="agreement-label">
                    <input type="checkbox" checked={agreement} onChange={(e) => setAgreement(e.target.checked)} />
                    I agree to the terms and conditions
                </div>
                {/* ReCAPTCHA component commented out for now */}
                {/* <ReCAPTCHA sitekey="YOUR_SITE_KEY" onChange={setCaptchaValue} /> */}
                <button type="submit">Sign Up</button>
            </form>
        </div>
        
        <div className="signup-back-btn">
            <button onClick={handleBack}>Back</button>
        </div>

        {/* Generate a line */}
        <hr />
        <hr />

        <div className="terms-conditions">
            <h2>Terms and Conditions</h2>
            <p>Welcome to [Your Platform's Name]! By signing up for our services, you agree to be bound by the following terms and conditions:</p>
            <h3>1. User Accounts</h3>
            <p>Users must provide accurate and complete information during the registration process. You are responsible for safeguarding your account credentials and should inform us immediately of any unauthorized use of your account.</p>
            <h3>2. Use of Our Services</h3>
            <p>Our services are intended for personal and non-commercial use. You agree not to misuse the services provided or to infringe on the rights of others using the platform.</p>
            <h3>3. Content and Copyright</h3>
            <p>All content provided on the platform, including text, graphics, and multimedia files, remains the property of [Your Platform's Name] or its content providers and is protected by copyright laws.</p>
            <h3>4. Privacy Policy</h3>
            <p>Your privacy is important to us. Our Privacy Policy, available at [link to privacy policy], explains how we collect, use, and protect your personal information.</p>
            <h3>5. Changes to Terms</h3>
            <p>We reserve the right to modify these terms at any time. Your continued use of the service constitutes your agreement to any revised terms.</p>
            <h3>6. Limitation of Liability</h3>
            <p>[Your Platform's Name] is not liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services.</p>
            <h3>7. Governing Law</h3>
            <p>These terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions.</p>
            <h3>Contact Us</h3>
            <p>If you have any questions about these terms, please contact us at [Your Contact Information].</p>
        </div>
        <Footer />


    </>
    );
}

export default Signup;
