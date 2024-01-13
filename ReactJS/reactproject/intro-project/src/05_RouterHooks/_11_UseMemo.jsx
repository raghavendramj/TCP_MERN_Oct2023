import { useState } from 'react';
import jsonData from './_05_Data.json';
import ComponentHeader from './_00_ComponentHeader';

function UseMemoExample() {

    const [todos, setTodos] = useState(jsonData.todos.map(todo => todo.task));
    const [newTodo, setNewTodo] = useState("");

    const [count, setCount] = useState(0);

    const addTodo = () => {
        console.log("newTodo -> ", newTodo);
        setTodos([...todos, newTodo]);
        setNewTodo("");
    }

    const handleInputChange = (e) => {
        console.log("e.target.name -> ", e.target.name);
        console.log("e.target.value -> ", e.target.value);
        setNewTodo(e.target.value);
    }

    const increment = () => {
        setCount(count => count + 1);
    } 

    const expensiveCalculation = (num) => {
        console.log("Calculating...");
        for (let i = 0; i < 1000000000; i++) {
            num += 1;
        }
        return num;
    }
    const calculation = expensiveCalculation(count);

    return (
        <div className="container">
            <ComponentHeader headerText="UseMemo Example" headerBgColor="info" />
            {todos.map((todo, index) => {
                return <li key={index} className='h3'>
                    {todo}
                </li>
            })}

            <div className="form-group" >
                <input className="form-control"
                    type="text"
                    name="newTodoBox"
                    value={newTodo}
                    onChange={handleInputChange} />
                <label className="form-check-label">
                    <button
                        className='btn btn-primary mt-3'
                        onClick={addTodo}
                        disabled={!newTodo}>
                        Add New Todo
                    </button>
                </label>
            </div>

            <hr />
            <div>
                <h2>Count :- {count}</h2>
                <button
                    className='btn btn-warning mt-3 btn-lg'
                    onClick={increment}>
                    <p className='h1'>+</p>
                </button>
                <h2>Expensive Calculation</h2>
                {calculation}
            </div>
        </div>

    );


}

export default UseMemoExample;