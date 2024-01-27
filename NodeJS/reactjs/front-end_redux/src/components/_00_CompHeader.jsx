function ComponentHeader({ headerBgColor, headerText, subHeaderText }) {
    const headerStyle = `container text-center bg-${headerBgColor} mb-2 p-2`;
    return (
        <div className={headerStyle}>
            <h1>{headerText}</h1>
            {subHeaderText && <h3 className="text-muted">{subHeaderText}</h3>}
        </div>
    );
}

export default ComponentHeader;