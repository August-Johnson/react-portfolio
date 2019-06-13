import React, { Component } from "react";

class Home extends Component {
    render() {
        return (
            <div className="home-container">
                {this.props.children}
            </div>
        );
    }

}

export default Home;