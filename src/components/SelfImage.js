import React from 'react';

function SelfImage(props) {
    return (
        <div className="image-container">
            <img src={props.imageSource} alt="August Johnson" className="self-image" />
        </div>
    );
}

export default SelfImage;