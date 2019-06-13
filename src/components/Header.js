import React from 'react';

function Header(props) {
    return (
        <header className="intro-header">
            <h1>JavaScript Developer with a passion for React</h1>
            <p>New to the programming scene but just as passionate as ever!</p>
            <br />
            {props.children}
        </header>
    );
}

export default Header;