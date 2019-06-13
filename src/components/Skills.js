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
                    <li>Database ORMs and ODMs (Sequelize and Mongoose)</li>
                </ul>
            </div>
            <div className="skill-column"></div>
        </div>
    );
}

export default Skills