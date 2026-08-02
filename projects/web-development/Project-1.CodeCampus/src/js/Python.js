import React from 'react';
import '../css/Python.css';

function Python() {
    return (
        <div className="python-container">
            <h2>Learn Python Here</h2>
            <div className="course-card">
                    <h3>Introduction to Artificial Intelligence</h3>
                    <p>Understand the basics of ML and how to implement them.</p>
            </div>
            <div className="code-example">
                <pre>
                    <code>
                        input: print("Hello World!")<br/>
                        output : Hello World!
                    </code>
                </pre>
            </div>
        </div>
    );
}

export default Python;
