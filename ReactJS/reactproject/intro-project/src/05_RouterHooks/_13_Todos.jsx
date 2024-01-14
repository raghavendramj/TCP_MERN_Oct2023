import { memo, useState } from "react";

const Todos = ({ todos, addTodo }) => {

    console.log("Todos component is rendered!");
    const [newTodo, setNewTodo] = useState("");
    const handleInputChange = (e) => {
        console.log("e.target.name -> ", e.target.name);
        console.log("e.target.value -> ", e.target.value);
        setNewTodo(e.target.value);
    }

    const handleNewTodo = () => {
        addTodo(newTodo);
        setNewTodo("");
    }

    return (
        <div className="container">
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
                        onClick={handleNewTodo}
                        disabled={!newTodo}>
                        Add New Todo
                    </button>
                </label>
            </div>

        </div>
    );
}

export default memo(Todos);
