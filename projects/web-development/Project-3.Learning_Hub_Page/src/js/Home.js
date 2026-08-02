import React from 'react';
import '../css/Home.css';

import { useNavigate } from 'react-router-dom'; 

import aiImage from '../img/aiml.jpeg';
import dsImage from '../img/ds.jpeg';
import rlImage from '../img/rl.jpeg';
import cyberImage from '../img/cyber.png';
import llmImage from '../img/llm.png';
import gitImage from '../img/git.png';




function Home() {
    const navigate = useNavigate();

    const goToAiMlPage = () => {
        navigate('/AiMl');
    }
    const goToDsPage = () => {
        navigate('/Ds');
    }
    const goToRlPage = () => {
        navigate('/Rl');
    }
    const goToCtbersecurity = () => {
        navigate('/Cs');
    }
    const goToNLP = () => {
        navigate('/Nlp');
    }
    const goToGitPage = () => {
        navigate('/Git'); // Update this to your Git page route
    };
    

    return (
        <>
        <div className="home-container">
        <div className="home-introduction">
            <h1>Welcome to learning HUB</h1>
            <p>Your journey into the world of Artificial Intelligence, Machine Learning, Data Science and many more starts here.</p>
        </div>
        <div className="home-sections-container">
            <div className="home-section">
                <img src={aiImage} alt="Artificial Intelligence" />
                <h2>AI & ML</h2>
                <p>Artificial Intelligence (AI) and Machine Learning (ML) represent the cutting-edge of technology, focusing on creating systems that can learn, adapt, and make decisions. AI is the broader concept of machines being able to carry out tasks in a way that we would consider "smart". Machine Learning is a current application of AI based around the idea that we should be able to give machines access to data and let them learn for themselves. Together, they are transforming industries, enhancing capabilities, and improving efficiencies across various sectors.</p>
                {/* <p>Click the button below to start the course and explore the world of AI and ML.</p> */}
                <button onClick={goToAiMlPage}>Learn AI</button>
            </div>

            <div className="home-section">
                <img src={dsImage} alt="Machine Learning" />
                <h2>Data Science</h2>
                <p>Data Science is an interdisciplinary field that uses scientific methods, processes, algorithms, and systems to extract knowledge and insights from structured and unstructured data. It blends various techniques from statistics, data analysis, machine learning, and related methods to understand and analyze actual phenomena with data. The domain is highly impactful in decision-making based on data-driven evidence, influencing areas ranging from business strategy to scientific research.</p>
                {/* <p>Click the button below to delve into the world of Data Science.</p> */}
                <button onClick={goToDsPage}>Learn Data Science</button>
            </div>

            <div className="home-section">
                <img src={rlImage} alt="Data Science" />
                <h2>Reinforcement Learning</h2>
                <p>Reinforcement Learning (RL) is a type of Machine Learning where an agent learns to make decisions by performing actions in an environment to achieve some notion of cumulative reward. It is at the heart of various AI challenges, including robotics, game playing, and autonomous systems. RL is unique in its ability to learn optimal actions through trial and error, continuously improving its performance and adapting to new, unseen environments. This field combines the thrill of decision making, learning from interaction, and the quest to design smarter algorithms.</p>
                {/* <p>Ready to dive into the dynamic world of RL? Click the button below to start the course.</p> */}
                <button onClick={goToRlPage}>Learn Reinforcement Learning</button>
            </div>
        </div>

        <div className="home-sections-container">
            <div className="home-section">
                <img src={cyberImage} alt="Artificial Intelligence" />
                <h2>Cyber Security</h2>
                <p> Coming soon</p>
                <button onClick={goToAiMlPage}>Learn cyber security</button>
            </div>

            <div className="home-section">
                <img src={llmImage} alt="Machine Learning" />
                <h2>NLP</h2>
                <p> Coming soon</p>
                <button onClick={goToDsPage}>Learn NLP</button>
            </div>

            <div className="home-section">
                <img src={gitImage} alt="Git" />
                <h2>Git</h2>
                <p>
                    Git is a powerful and widely used version control system that helps developers track changes in their code over time. It's an essential tool for collaborative development, allowing multiple developers to work on the same project simultaneously without overwriting each other's work. Git is known for its flexibility, efficiency, and robust branching and merging capabilities, making it the go-to choice for source code management in both open-source and commercial software projects.
                </p>
                <button onClick={goToGitPage}>Learn Git</button>
            </div>

        </div>
    </div>
    </>

    );
}

export default Home;
