import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Rl.css'; // Import your CSS file here


function Rl() {


    const navigate = useNavigate();
    const [showBackButton, setShowBackButton] = useState(false);
    let lastScrollY = window.scrollY;

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY < lastScrollY) {
                setShowBackButton(true); // Show button when scrolling up
            } else {
                setShowBackButton(false); // Hide button when scrolling down
            }
            lastScrollY = window.scrollY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleBack = () => {
        navigate(-1); // Go back to the previous page
    };


    return (
        <div className="rl-page">
            <button className="back-button" onClick={handleBack}>Back</button>

            <section className="rl-intro">
                <h1>Reinforcement Learning Tutorial</h1>
                <p>Welcome to the Reinforcement Learning tutorial. Learn the basics of Reinforcement Learning and how it can improve your coding workflow.</p>
            </section>

            <section className="rl-basics">
                <h2>Reinforcement Learning Basics</h2>
                <p>Understand the fundamentals of Reinforcement Learning, including what it is and why it's used by developers worldwide.</p>
                {/* Include more detailed content or sub-sections here */}
            </section>

            <section className="rl-commands">
                <h2>Common Reinforcement Learning Commands</h2>
                <p>Learn about common Reinforcement Learning commands like rl commit, rl push, rl pull, and how to use them.</p>
                {/* Include more detailed content or sub-sections here */}
            </section>

            <section className="rl-branching">
                <h2>Branching and Merging</h2>
                <p>Explore advanced topics such as branching and merging, and how they facilitate collaborative development.</p>
                {/* Include more detailed content or sub-sections here */}
            </section>

            {/* Add more sections as needed */}
        </div>
    );
}

export default Rl;
