import { useEffect, useState } from "react";
import ComponentHeader from '../07_Utils/_00_ComponentHeader';


function CustomHook() {

    const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");
    let [todosData, setTodosData] = useState(data);
    useEffect(() => {
        setTodosData(data);
    }, [data]);

    const handleInputChange = (e) => {
        const changedData = e.target;
        console.log("Data name :- ", changedData.name);
        console.log("Data checked :- ", changedData.checked);
        console.log("Data value :- ", JSON.parse(changedData.value));
        const { id, userId } = JSON.parse(changedData.value);

        todosData = todosData.map(todo => { 
            return todo.id === id && todo.userId === userId ?
                { ...todo, completed: changedData.checked } : todo;
        });
        setTodosData(todosData);
    }

    return (
        <div className="container">
            <ComponentHeader headerText="Custom Hook Example" headerBgColor="info" subHeaderText="useFetch where its trying to fetch the data from backend" />

            <table className="table table-striped stable-bordered">
                <thead>
                    <tr className="table-warning h3 text-center">
                        <th>User Id</th>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Completed</th>
                    </tr>
                </thead>
                <tbody>
                    {todosData.map(todo => {
                        return <tr key={todo.id}>
                            <td>{todo.userId}</td>
                            <td>{todo.id}</td>
                            <td>{todo.title}</td>
                            <td>
                                <input type="checkbox" className="form-check-input h2" checked={todo.completed} value={JSON.stringify(todo)} onChange={handleInputChange} />
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
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setData(data)
            });
    }, [url]);
    return [data];
}