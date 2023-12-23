import { Component } from "react";

class MyTestComponent extends Component {
    constructor() {
        super();
        this.state = {
            phoneDirectory: [
                { id: 1, name: 'John Doe', phone: '123-456-7890' },
                { id: 2, name: 'Jane Smith', phone: '987-654-3210' }
            ]
        }
    }

    render() {
        return (
            <div>
                <table className="table table-striped table-bordered mt-4">
                    <thead className="bg-success text-white">
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Phone Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.phoneDirectory.map((entry) => {
                            return <tr key={entry.id}>
                                <td>{entry.id}</td>
                                <td>{entry.name}</td>
                                <td>{entry.phone}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default MyTestComponent;