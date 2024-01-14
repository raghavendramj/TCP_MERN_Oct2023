import { useCallback, useState } from "react";
import Todos from "./_13_Todos";
import jsonData from './_05_Data.json';
import ComponentHeader from "./_00_ComponentHeader";

function UsecallbackExample() {

    const [todos, setTodos] = useState(jsonData.todos.map(todo => todo.task));
    const [count, setCount] = useState(0);

    const addTodo = useCallback((newTodo) => {
        console.log("newTodo -> ", newTodo);
        setTodos([...todos, newTodo]);
    }, [todos]);

    const increment = () => {
        setCount(count => count + 1);
    }

    return (
        <div className="container">
            <ComponentHeader headerText="Use CallbackExample Example" headerBgColor="info" />
            <Todos
                todos={todos}
                addTodo={addTodo} 
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