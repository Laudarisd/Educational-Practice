import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/AiMl.css'; // Import your CSS file here
import aiPdf from '../pdf/ai.pdf';

function AiMl() {
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
        <div className="ai-ml-page">
            <button className="back-button" onClick={handleBack}>Back</button>
            <section className="intro-section">
                <h1>Explore AI & ML</h1>
                <p>Welcome to the exciting world of Artificial Intelligence and Machine Learning. Dive deep into cutting-edge technologies and transform the future.</p>
            </section>

            {/*########################################################################### */}

            <section className="course-listing">
                <h2>Featured Courses</h2>
                {/* Example course cards, these could be dynamic based on a courses array */}
                <div className="course-card">
                    <h3>Contents for AI & ML</h3>
                    <ul>
                    <li>Introduction to AI, History, and State-of-the-Art</li>
                    <li>Intelligent Agents and Environments</li>
                    <li>Search Algorithms</li>
                    <li>Game Playing, Heuristic Search, Adversarial Environments</li>
                    <li>Introduction to Machine Learning, Overview of Various Learning Methods</li>
                    <li>Introduction to Statistical-Based Learnings</li>
                    <li>Decision Trees, Structure, Learning, and Application in AI</li>
                    <li>Introduction to Neural Networks</li>
                    <li>Multilayer Neural Networks, Deep Learning</li>
                    <li>Probabilistic Reasoning, Uncertainty and Probability Theory, Bayesian Networks</li>
                    <li>Decision Making, Reinforcement Learning, Strategies, Rationality, and Optimization Techniques</li>
                    <li>AI Ethics, Future Trends, and Course Review</li>

                    </ul>
                </div>

            </section>

            {/*########################################################################### */}

            <section className="Chapter-section">
                <h2> 1. Introduction to Artificial Intelligence</h2>
                <p>
                    Artificial Intelligence (AI) represents a frontier in computer science, focusing on creating systems capable of intelligent behavior. In this introductory chapter, we will explore the basics of AI, its history, and how it's transforming industries and everyday life.
                </p>
                <h3>Key Concepts</h3>
                <ul>
                    <li>Understanding AI and Machine Learning: An overview of AI fundamentals and how machine learning is a subset of AI.</li>
                    <li>Algorithms and Data Structures: The building blsocks of AI systems.</li>
                    <li>Neural Networks and Deep Learning: How computers can be trained to 'think' and 'learn'.</li>
                </ul>
                <h3>Mathematics and Architecture</h3>
                <p>
                    We delve into the mathematical theories such as linear algebra, probability, and statistics that form the backbone of AI. Additionally, we discuss the architecture of AI systems, including both hardware and software aspects.
                </p>
                <div className="ppt-link">
                <a href={aiPdf} target="_blank" rel="noopener noreferrer">Click here for the PowerPoint presentation</a>
                </div>
                <ul>
                    <li>State-of-the-art curriculum designed by industry experts.</li>
                    <li>Hands-on projects and real-world applications.</li>
                    <li>Flexible learning options to suit your schedule.</li>
                </ul>
                <h3>Recommended Books</h3>
                    <li>Russell, Stuart j., and Peter Norvig. Artificial Intelligence: A Modern Approach</li>
                    <li>"Artificial Intelligence: A Modern Approach" by Stuart Russell and Peter Norvig</li>
                    <li>Python Machine Learning" by Sebastian Raschka and Vahid Mirjalili</li>
                    <li>"Deep Learning" by Ian Goodfellow, Yoshua Bengio, and Aaron Courville</li>
                    <li>“Hands-On Machine Learning with Scikit-Learn and TensorFlow” by Aurelien Geron</li>
                <h3>Resources</h3>
                    <li><strong>Coursera :</strong> Online courses covering variety of AI, ML topics</li>
                    <li><strong>Edx :</strong> Educational courses from top universities on AI and machine learnin </li>
                    <li><strong>Kaggle :</strong> A platform for data science completions and datasets</li>
                    <li><strong>GitHub :</strong> A repository hosting service that provides a source for AI and machine learning projects and code</li>
            </section>

            {/*########################################################################### */}

            <section className="Chapter-section">
                <h3>2. Intelligent Agents and Environments</h3>
                <p>
                    In the realm of artificial intelligence, the concept of an 'Intelligent Agent' is pivotal. An intelligent agent is any entity that perceives its environment through sensors and acts upon that environment through effectors.
                </p>
                <p>
                    This section explores the different types of agents, the environments they interact with, and how these interactions are central to understanding AI.
                </p>
                <h4>What is an Intelligent Agent?</h4>
                <p>
                    An intelligent agent is a system that perceives its environment and takes actions to maximize its chances of achieving its goals. These agents can range from simple, rule-based systems to complex, learning, and adaptive systems.
                </p>
                <h4>Characteristics of Intelligent Agents</h4>
                <ul>
                        <li><strong>Autonomy:</strong> Agents operate without the intervention of humans or other agents.</li>
                        <li><strong>Reactivity:</strong> They perceive their environment and respond to changes that occur in it.</li>
                        <li><strong>Pro-activeness:</strong> Agents do not simply act in response to their environment; they are capable of taking initiative.</li>
                        <li><strong>Social ability:</strong> Agents interact with other agents (and possibly humans) to complete their tasks.</li>
                    </ul>

                    {/* Types of Environments */}
                    <h4>Types of Environments</h4>
                    <p>
                        The environment in which an agent operates can be as simple as a software application or as complex as the real world. Environments are typically described in terms of:
                    </p>
                    <ul>
                        <li><strong>Accessibility:</strong> Whether the agent can access the complete state of the environment.</li>
                        <li><strong>Determinism:</strong> If an action performed in the environment causes a predictable outcome.</li>
                        <li><strong>Episodic vs. Non-episodic:</strong> Whether the agent's experience is divided into atomic "episodes".</li>
                        <li><strong>Static vs. Dynamic:</strong> Does the environment change while the agent is deliberating?</li>
                        <li><strong>Discrete vs. Continuous:</strong> The state of the environment, time, and percepts and actions of the agent.</li>
                    </ul>
                <h4>Examples of Intelligent Agents</h4>
                <p>
                    Examples of intelligent agents include simple thermostat systems, chatbots, virtual personal assistants, and sophisticated autonomous robots.
                </p>
                <p>
                    Understanding intelligent agents and the environments they operate in is crucial for developing effective AI solutions. This knowledge forms the foundation for designing systems that can effectively perceive, learn, and interact with their surroundings.
                </p>
                <div className="ppt-link">
                <a href={aiPdf} target="_blank" rel="noopener noreferrer">Click here for the PowerPoint presentation</a>
                </div>
            </section>

            {/*########################################################################### */}

            <section className="Chapter-section">
                <h3>3. Search Algorithms</h3>
                <p>
                    Search algorithms are at the heart of many artificial intelligence systems. They are used to navigate through problem spaces and find solutions or optimal paths by exploring various possibilities.
                </p>
                <h4>What are Search Algorithms?</h4>
                <p>
                    In AI, search algorithms are procedures or formulas used to find paths from a start point to a goal or target state. They can be used in problem-solving, decision making, and machine learning tasks.
                </p>
                <h4>Types of Search Algorithms</h4>
                <ul>
                    <li><strong>Uninformed Search:</strong> Also known as blind search, this type of algorithm does not have additional information about states beyond that provided in the problem definition. Examples include Breadth-First Search and Depth-First Search.</li>
                    <li><strong>Informed Search:</strong> These algorithms use heuristics to make decisions with some information about the goal's location. Examples are A* Search and Greedy Best-First Search.</li>
                </ul>
                <h4>Significance in AI</h4>
                <p>
                    Search algorithms are fundamental for AI as they provide the mechanisms for automating decision-making processes and discovering solutions to complex problems.
                </p>
                <h4>Examples and Applications</h4>
                <p>
                    Common applications of search algorithms in AI include pathfinding in maps, puzzle solving, decision-making in games, and even in areas like network security and data mining.
                </p>

                <p>
                    Search algorithms are essential tools in AI, used for finding solutions or paths in various scenarios.
                </p>
                
                <h4>Example: Breadth-First Search (BFS)</h4>
                <p>
                    Breadth-First Search (BFS) is an algorithm used for traversing or searching tree or graph data structures. It starts at a chosen node (the 'root' in a tree, or any node in a graph) and explores the neighbor nodes first, before moving to the next level neighbors.
                </p>

                <h4><strong>Python Code Example:</strong></h4>
                <pre>
                    <code>
            {`def bfs(graph, start):
                visited, queue = set(), [start]
                while queue:
                    vertex = queue.pop(0)
                    if vertex not in visited:
                        visited.add(vertex)
                        queue.extend(set(graph[vertex]) - visited)
                return visited

            # Example usage
            graph = {'A': set(['B', 'C']),
                    'B': set(['A', 'D', 'E']),
                    'C': set(['A', 'F']),
                    'D': set(['B']),
                    'E': set(['B', 'F']),
                    'F': set(['C', 'E'])}
            print(bfs(graph, 'A'))  # Output: {'A', 'B', 'C', 'D', 'E', 'F'}`}
                    </code>
                </pre>

                <h4><strong>Output</strong></h4>
                <p>
                    {'{A, B, C, D, E, F}'}
                </p>

                <h4>Mathematical Logic Behind BFS</h4>
                <p>
                    BFS explores all nodes at the present depth prior to moving on to the nodes at the next depth level. 
                </p>
                <ul>
                    <li><strong>Queue Data Structure:</strong> BFS uses a queue to keep track of the next location to visit.</li>
                    <li><strong>Order of Visit:</strong> Nodes are visited in the order they are encountered.</li>
                </ul>

                <h4>Applications of BFS</h4>
                <p>
                    BFS is commonly used in tasks like shortest path finding in unweighted graphs, level order tree traversal, and in algorithms like Dijkstra's and Prim's.
                </p>
                <div className="ppt-link">
                <a href={aiPdf} target="_blank" rel="noopener noreferrer">Click here for the PowerPoint presentation</a>
                </div>
            </section>

            {/*########################################################################### */}
            
            <section className="Chapter-section">
                <h3> 4. Game Playing, Heuristic Search, Adversarial Environments </h3>

                <div className="ppt-link">
                <a href={aiPdf} target="_blank" rel="noopener noreferrer">Click here for the PowerPoint presentation</a>
                </div>
            </section>
            
            {/*########################################################################### */}

            <section className="Chapter-section">
                <h3> 5. Introduction to Machine Learning, Overview of Various Learning Methods</h3>

                <div className="ppt-link">
                <a href={aiPdf} target="_blank" rel="noopener noreferrer">Click here for the PowerPoint presentation</a>
                </div>
            </section>
            
            {/*########################################################################### */}


            <section className="Chapter-section">
                <h3> 6. Introduction to Statistical-Based Learnings</h3>

                <div className="ppt-link">
                <a href={aiPdf} target="_blank" rel="noopener noreferrer">Click here for the PowerPoint presentation</a>
                </div>
            </section>
            
            {/*########################################################################### */}

            <section className="Chapter-section">
                <h3> 7. Decision Trees, Structure, Learning, and Application in AI</h3>
            
                <div className="ppt-link">
                <a href={aiPdf} target="_blank" rel="noopener noreferrer">Click here for the PowerPoint presentation</a>
                </div>
            </section>
            
            {/*########################################################################### */}

            <section className="Chapter-section">
                <h3> 8. Introduction to Neural Networks</h3>

                <div className="ppt-link">
                <a href={aiPdf} target="_blank" rel="noopener noreferrer">Click here for the PowerPoint presentation</a>
                </div>
            </section>
            
            {/*########################################################################### */}

            <section className="Chapter-section">
                <h3> 9. Multilayer Neural Networks, Deep Learning</h3>

                <div className="ppt-link">
                <a href={aiPdf} target="_blank" rel="noopener noreferrer">Click here for the PowerPoint presentation</a>
                </div>
            </section>
            
            {/*########################################################################### */}

            <section className="Chapter-section">
                <h3> 10. Probabilistic Reasoning, Uncertainty and Probability Theory, Bayesian Networks</h3>

                <div className="ppt-link">
                <a href={aiPdf} target="_blank" rel="noopener noreferrer">Click here for the PowerPoint presentation</a>
                </div>
            </section>
            
            {/*########################################################################### */}

            <section className="Chapter-section">
                <h3> 11. Decision Making, Reinforcement Learning, Strategies, Rationality, and Optimization Techniques</h3>

                <div className="ppt-link">
                <a href={aiPdf} target="_blank" rel="noopener noreferrer">Click here for the PowerPoint presentation</a>
                </div>
            </section>
            
            {/*########################################################################### */}

            <section className="Chapter-section">
                <h3> 12. AI Ethics, Future Trends, and Course Review</h3>

                <div className="ppt-link">
                <a href={aiPdf} target="_blank" rel="noopener noreferrer">Click here for the PowerPoint presentation</a>
                </div>
            </section>
            
            {/*########################################################################### */}

            {/* <section className="features-section">
                <h2>Why Learn AI & ML with MyApp?</h2>
                <ul>
                    <li>State-of-the-art curriculum designed by industry experts.</li>
                    <li>Hands-on projects and real-world applications.</li>
                    <li>Flexible learning options to suit your schedule.</li>
                </ul>
            </section> */}
            
            {/*########################################################################### */}

            <section className="cta-section">
                <h2>Explore more!</h2>
                {/* <p>Join our community of learners and start your AI & ML journey today!</p>
                <button>Enroll Now</button> */}
            </section>
        </div>
    );
}

export default AiMl;
