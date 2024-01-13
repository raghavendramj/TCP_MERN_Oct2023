import { useReducer } from 'react';
import jsonData from './_05_Data.json';
import ComponentHeader from './_00_ComponentHeader';

function UseReducerExample() {

    const todosReducer = (state, action) => {
        console.log("state -> ", state);
        console.log("action -> ", action);
        switch (action.type) {
            case 'Complete':
                const modifiedStateTodos = state.map((todo) => {
                    if (todo.id == action.id) {
                        return { ...todo, complete: !todo.complete }
                    } else {
                        return todo;
                    }
                });
                console.log("modifiedStateTodos -> ", modifiedStateTodos);
                return modifiedStateTodos;
            default:
                return state;
        }
    }

    const handleOnChange = (todo) => {
        console.log("reached handleOnChange :- ", todo);
        dispatchTodo({ type: "Complete", id: todo.id })
    }

    const [todos, dispatchTodo] = useReducer(todosReducer, jsonData.todos);

    return (
        <div className="container">
            <ComponentHeader headerText="UseReducer Example" headerBgColor="info" />
            {todos.map((todo) => {
                return <div className="form-check" key={todo.id}>
                    <input className="form-check-input"
                        type="checkbox"
                        onChange={() => handleOnChange(todo)}
                        checked={todo.complete} />
                    <label className="form-check-label">
                        {todo.task}
                    </label>
                </div>
            })}
        </div>

    );
}

export default UseReducerExample;