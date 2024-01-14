import { useCallback, useState } from "react";
import Todos from "./_13_Todos";
import jsonData from './_05_Data.json';
import ComponentHeader from "./_00_ComponentHeader";

function UsecallbackExample() {

    const [todos, setTodos] = useState(jsonData.todos.map(todo => todo.task));
    const [newTodo, setNewTodo] = useState("");

    const [count, setCount] = useState(0);

    const addTodo = useCallback(() => {
        console.log("newTodo -> ", newTodo);
        setTodos([...todos, newTodo]);
        setNewTodo("");
    }, [todos]);

    const handleInputChange = (e) => {
        console.log("e.target.name -> ", e.target.name);
        console.log("e.target.value -> ", e.target.value);
        setNewTodo(e.target.value);
    }

    const increment = () => {
        setCount(count => count + 1);
    }

    return (
        <div className="container">
            <ComponentHeader headerText="Use CallbackExample Example" headerBgColor="info" />
            <Todos
                todos={todos}
                addTodo={addTodo}
                handleInputChange={handleInputChange}
                newTodo={newTodo}
            />
            <hr />
            <div>
                <h2>Count :- {count}</h2>
                <button
                    className='btn btn-warning mt-3 btn-lg'
                    onClick={increment}>
                    <p className='h1'>+</p>
                </button>
            </div>
        </div>
    );
}

export default UsecallbackExample;