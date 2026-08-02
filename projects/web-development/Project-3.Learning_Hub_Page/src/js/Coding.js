import React from 'react';
import '../css/Coding.css';

import { useNavigate } from 'react-router-dom'; 

import pythonImage from '../img/python.jpeg';
import cplusImage from '../img/c++.png';
import rImage from '../img/r.jpeg'
import sqlImage from '../img/sql.png'
import nosqlImage from '../img/nosql.webp'
import tableauImage from '../img/tableau.png'




function Home() {
    const navigate = useNavigate();

    const goToPython = () => {
        navigate('/python');
    }

    const goToDsPage = () => {
        navigate('/Ds');
    }
    const goToRlPage = () => {
        navigate('/Rl');
    }

    return (
        <div className="code-home-container">
        <div className="code-introduction">
            <h1>Welcome to learning HUB</h1>
            <p>Your journey into the world of Artificial Intelligence, Machine Learning, Data Science and many more starts here.</p>
        </div>
        <div className="code-sections-container">
            <div className="code-section">
                <img src={pythonImage} alt="Artificial Intelligence" />
                <h2>Python</h2>
                <p>Artificial Intelligence (AI) and Machine Learning (ML) represent the cutting-edge of technology, focusing on creating systems that can learn, adapt, and make decisions. AI is the broader concept of machines being able to carry out tasks in a way that we would consider "smart". Machine Learning is a current application of AI based around the idea that we should be able to give machines access to data and let them learn for themselves. Together, they are transforming industries, enhancing capabilities, and improving efficiencies across various sectors.</p>
                <p>Click the button below to start the course and explore the world of AI and ML.</p>
                <button onClick={goToPython}>Learn Python</button>
            </div>

            <div className="code-section">
                <img src={cplusImage} alt="Machine Learning" />
                <h2>C++</h2>
                <p>Data Science is an interdisciplinary field that uses scientific methods, processes, algorithms, and systems to extract knowledge and insights from structured and unstructured data. It blends various techniques from statistics, data analysis, machine learning, and related methods to understand and analyze actual phenomena with data. The domain is highly impactful in decision-making based on data-driven evidence, influencing areas ranging from business strategy to scientific research.</p>
                <p>Click the button below to delve into the world of Data Science.</p>
                <button onClick={goToDsPage}>Learn Data Science</button>
            </div>

            <div className="code-section">
                <img src={rImage} alt="Data Science" />
                <h2>R</h2>
                <p>Reinforcement Learning (RL) is a type of Machine Learning where an agent learns to make decisions by performing actions in an environment to achieve some notion of cumulative reward. It is at the heart of various AI challenges, including robotics, game playing, and autonomous systems. RL is unique in its ability to learn optimal actions through trial and error, continuously improving its performance and adapting to new, unseen environments. This field combines the thrill of decision making, learning from interaction, and the quest to design smarter algorithms.</p>
                <p>Ready to dive into the dynamic world of RL? Click the button below to start the course.</p>
                <button onClick={goToRlPage}>Learn Reinforcement Learning</button>
            </div>
        </div>

        <div className="code-sections-container">
            <div className="code-section">
                <img src={sqlImage} alt="Artificial Intelligence" />
                <h2>SQL</h2>
                <p> Coming soon</p>
                <button onClick={goToPython}>Learn AI</button>
            </div>

            <div className="code-section">
                <img src={nosqlImage} alt="Machine Learning" />
                <h2>NoSQL</h2>
                <p> Coming soon</p>
                <button onClick={goToDsPage}>Learn Data Science</button>
            </div>

            <div className="code-section">
                <img src={tableauImage} alt="Data Science" />
                <h2>tableau</h2>
                <p> Coming soon</p>
                <button onClick={goToRlPage}>Learn Reinforcement Learning</button>
            </div>
        </div>
    </div>

    );
}

export default Home;
