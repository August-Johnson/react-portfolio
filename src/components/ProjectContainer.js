import React from 'react';

function ProjectContainer(props) {
    return (
        <div className="projects-container">
            {props.children}
        </div>
    );
}

export default ProjectContainer;