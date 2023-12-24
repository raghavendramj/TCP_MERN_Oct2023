import React, { useState } from "react";

function _04_FuncCompoWithStyle() {

    const [myStyle, setMyStyle] = useState(
        {
            color: 'red',
            fontSize: '20px',
            padding: '10px',
            backgroundColor: 'yellow'
        }
    );

    const changeColor = () => {
        console.log("Invoked!");
        const newStyle = {
            color: 'green',
            padding: '10px',
            fontWeight: 'bold',
            fontSize: '30px',
            backgroundColor: 'lightblue'
        }
        setMyStyle(newStyle)
    }
    return (
        <React.Fragment>
            <div className="container p-4 mt-3 text-center bg-primary text-white h1">
                Functional Component - State Change Example
            </div>
            <div className="container">
                <p style={myStyle}>This is how we change content</p>
                <button className="btn btn-primary" onClick={changeColor}>Change Color</button>
            </div>
        </React.Fragment>);
}

export default _04_FuncCompoWithStyle;