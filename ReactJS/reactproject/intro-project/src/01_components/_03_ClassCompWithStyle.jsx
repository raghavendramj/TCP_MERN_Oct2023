import React, { Component } from "react";

class _03_ClassCompWithStyle extends Component {
    constructor() {
        super();
        this.state = {
            customStyle: {
                color: 'red',
                fontSize: '20px',
                padding: '10px',
                backgroundColor: 'yellow'
            }
        }
    }
    changeColor = () => {
        console.log("Invoked!");
        const newStyle = {
            color: 'green',
            padding: '10px',
            fontWeight: 'bold',
            fontSize: '30px',
            backgroundColor: 'orange'
        }
        this.setState({ customStyle: newStyle });
    }

    render() {
        return (
            <React.Fragment>
                <div className="container p-4 mt-3 text-center bg-primary text-white h1">
                    State Change Example
                </div>
                <div className="container">
                    <p style={this.state.customStyle}>This is how we change content</p>
                    <button className="btn btn-primary" onClick={this.changeColor}>Change Color</button>
                </div>
            </React.Fragment>
        );
    }
}

export default _03_ClassCompWithStyle;