import { useEffect, useState } from "react";

function Timer() {


    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("useEffect Called!");
        setTimeout(() => {
            setCount((count) => count + 1);
        }, 1000);
    }, [count]);

    console.log("Timer Called!");

    return <h1>I've rendered {count} times!</h1>;
}

export default Timer;