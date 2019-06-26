import React from 'react';

function ProjectCard(props) {
    return (
        <div className="card-container">
            <img src={props.imageSrc} className="project-image" />
            
            <div className="overlay">
                <div className="project-info">
                    <h3>{props.projectTitle}</h3>
                    <p>{props.projectDescription}</p>

                    {props.projectLink ? <a href={props.projectLink} target="_blank">View Site</a> : false}
                    <br />
                    <a href={props.githubLink} target="_blank">View Code</a>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;