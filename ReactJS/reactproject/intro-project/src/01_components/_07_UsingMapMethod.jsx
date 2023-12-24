function _07_UsingMapMethod() {
    const people = [
        {
            "name": "John Doe",
            "phone": "+1234567890",
            "id": 1,
            "email": "john.doe@example.com"
        },
        {
            "name": "Jane Smith",
            "phone": "+9876543210",
            "id": 2,
            "email": "jane.smith@example.com"
        },
        {
            "name": "Bob Johnson",
            "phone": "+1122334455",
            "id": 3,
            "email": "bob.johnson@example.com"
        },
        {
            "name": "Alice Brown",
            "phone": "+5544332211",
            "id": 4,
            "email": "alice.brown@example.com"
        },
        {
            "name": "Charlie Wilson",
            "phone": "+6677889900",
            "id": 5,
            "email": "charlie.wilson@example.com"
        }
    ];
    return (

        <div className="container m-3">
            <div className="container-fluid m-2 p-3 text-white bg-primary text-center">
                <h1>Map Method Demo!</h1>
            </div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {people.map((eachPerson) => {
                        return <tr>
                            <td>{eachPerson.id}</td>
                            <td>{eachPerson.name}</td>
                            <td>{eachPerson.phone}</td>
                            <td>{eachPerson.email}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default _07_UsingMapMethod;