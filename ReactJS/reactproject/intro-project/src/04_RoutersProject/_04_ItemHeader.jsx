function ItemHeader(props) {
    const headerStyle = `container-fluid m-2 p-3 ${props.textColor} bg-${props.contextColor} text-center`;
    return (
        <div className={headerStyle}>
            <h1>{props.text}</h1>
            {props.subText ? <h4 className="text-success">{props.subText}</h4> : <></>}
        </div>
    );
}
export default ItemHeader;