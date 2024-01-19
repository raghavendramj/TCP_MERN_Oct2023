import { useRef, useState } from "react";
import ComponentHeader from '../07_Utils/_00_ComponentHeader';

import { useEffect } from "react";

function UseRefHookFormExample() {

    const [inpName, setInpName] = useState("");
    const prevValue = useRef("");

    useEffect(() => {
        prevValue.current = inpName;
    }, [inpName]);

    const handleInputChange = (e) => {
        const element = e.target;
        console.log("Element Value:- ", element.value);
        console.log("Element Name:- ", element.name);
        setInpName(element.value);
    }

    return (
        <div className="container">
            <ComponentHeader
                headerText="Simple UseRef Example"
                headerBgColor="info"
                subHeaderText="Demonstrating the useRef Example in detial"
            />
            <div className="form-group mt-4">
                <label htmlFor="name">Enter Name</label>
                <input
                    type="text"
                    name="name"
                    className="form-control mt-2"
                    placeholder="Enter Name"
                    value={inpName}
                    onChange={handleInputChange}></input>
            </div> 

            <h2>Current Value of input :- {inpName}</h2>
            <h2>Previous Value of input :- {prevValue.current}</h2>
        </div>
    );
}

export default UseRefHookFormExample;