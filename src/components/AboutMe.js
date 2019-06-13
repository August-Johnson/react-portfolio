import React from 'react';

function AboutMe(props) {
    return (
        <div className="about-container">
            <h3 className="about-header">About Me</h3>
            <p>
                My name is August but I usually just go by Gus. When I graduated high school in 2016, I didn't know where to go next.
                 I didn't really have a set career path that interested me so while I was figuring out what I wanted to do in life, I decided to work at Lunds & Byerlys in the meantime.
                 Once I discovered programming I knew that it was something I wanted to pursue more of. It's fun to be constantly learning new things and problem solving. 
                 I attended the University of Minnesota's Full-stack Coding Boot Camp and graduated as part of the 10th Cohort in May 2019 with a passion and determination to further my skillset.
            </p>
            {props.children}
        </div>
    );
}

export default AboutMe;