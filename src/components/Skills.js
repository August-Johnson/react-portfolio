import React from 'react';

function Skills() {
    return(
        <div className="skills-container">
            <div className="skill-column">
                <h3>Front-end Developer</h3>
                <p>I value clean, organized code that provides the a clean user experience.</p>
                <br />
                <h4>Languages</h4>
                <ul>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>JavaScript (ES5 and ES6)</li>
                </ul>
                <br />
                <h4>Libraries and Frameworks</h4>
                <ul>
                    <li>ReactJS</li>
                    <li>JQuery</li>
                    <li>Sass</li>
                    <li>Bootstrap</li>
                </ul>
            </div>

            <div className="skill-column">
                <h3>Back-end Developer</h3>
                <p>Connecting the front-end to the back-end, database queries and API routing.</p>
                <br />
                <h4>Languages and Technologies</h4>
                <ul>
                    <li>Node.Js</li>
                    <li>Express.Js</li>
                    <li>MySQL</li>
                    <li>MongoDB</li>
                </ul>
                <br />
                <h4>Libraries and tools</h4>
                <ul>
                    <li>Sequelize (MySQL ORM)</li>
                    <li>Mongoose (MongoDB ODM)</li>
                </ul>
            </div>

            <div className="skill-column">
                <h3>Other Skills and More</h3>
                <p>Other technology and tools I know and use, along with what I'm currently trying to learn</p>
                <br />

                <h4>Developer Tools</h4>
                <ul>
                    <li>Git Bash</li>
                    <li>GitHub</li>
                    <li>Command Line</li>
                </ul>
                <br />
                <h4>Currently Learning</h4>
                <ul>
                    <li>Redux</li>
                    <li>Java</li>
                    <li>C#</li>
                </ul>
            </div>

        </div>
    );
}

export default Skills