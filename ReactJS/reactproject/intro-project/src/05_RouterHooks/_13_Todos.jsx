function Todos({ todos, addTodo, handleInputChange, newTodo }) {

    console.log("Todos component is rendered!");
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
                        onClick={addTodo}
                        disabled={!newTodo}>
                        Add New Todo
                    </button>
                </label>
            </div>

        </div>
    );
}

export default Todos;
