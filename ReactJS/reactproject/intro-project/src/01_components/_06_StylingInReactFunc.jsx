function _06_StylingInReactJavaScript() {
    const myStyle = {
        color: 'red',
        fontSize: '30px',
        fontWeight: 'bold',
        backgroundColor: 'yellow',
        padding: '20px'
    }
    return (
        <div className="container mt-3">
            <h1>Styling in React</h1>
            <p style={{ color: 'red', fontSize: '20px', backgroundColor: 'yellow', padding: '10px' }}>This is Inline Styling</p>
            <p style={myStyle}>Javascript Object Styling</p>
        </div>
    );
}

export default _06_StylingInReactJavaScript;