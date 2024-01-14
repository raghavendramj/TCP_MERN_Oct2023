import { useEffect, useState } from "react";
import ComponentHeader from "./_00_ComponentHeader";

function CustomHook() {

    const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");
    return (
        <div className="container">
            <ComponentHeader headerText="Custom Hook Example" headerBgColor="info" subHeaderText="useFetch where its trying to fetch the data from backend" />

            <table className="table">
                <thead>
                    <tr>
                        <th>User Id</th>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Completed</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(todo => {
                        console.log("Each Todo :- ", todo);
                        return <tr>
                            <td>{todo.userId}</td>
                            <td>{todo.id}</td>
                            <td>{todo.title}</td>
                            <td>
                                <input type="checkbox" className="form-check-input h2" checked={todo.completed} />
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default CustomHook;


const useFetch = (url) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        console.log("UseEffect invoked!");
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setData(data)
            });
    }, [url]);
    return [data];
}