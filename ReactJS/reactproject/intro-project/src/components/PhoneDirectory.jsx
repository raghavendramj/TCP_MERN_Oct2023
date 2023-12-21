import { useState } from "react";

const PhoneDirectory = ({myName}) => {
    console.log("Name :-", myName);

    //State Variable
    const [phoneDirectory, setphoneDirectory] = useState([
        { id: 1, name: 'John Doe', phone: '123-456-7890' },
        { id: 2, name: 'Jane Smith', phone: '987-654-3210' }
    ]);

    //Event Handler!
    const handleEntry = (e) => {
        e.preventDefault();
        const newId = phoneDirectory.length + 1;
        setphoneDirectory([...phoneDirectory, { id: newId, ...newEntry }]);

        //Clear Form Fields!
        setNewEntry({ name: '', phone: '' });
    }

    //Event Handler!
    const handleDelete = () => {

    }


    //State Variable
    const [newEntry, setNewEntry] = useState({ name: '', phone: '' });

    //Event Handler!
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        console.log(" e.target :- ", e.target);
        console.log("inputField :- ", name);
        console.log("value :- ", value);
        setNewEntry((prevEntry) => ({ ...prevEntry, [name]: value }))
    }
    return (
        <div>
            <h1>Phone Directory</h1>

            <form onSubmit={handleEntry}>
                <div className="form-group">
                    <label htmlFor="name">Enter Name</label>
                    <input type="text" name="name" className="form-control" placeholder="Enter Name" value={newEntry.name} onChange={handleInputChange}></input>
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="name">Enter Phone Number</label>
                    <input type="number" name="phone" className="form-control" placeholder="Enter Phone Number" value={newEntry.phone} onChange={handleInputChange}></input>
                </div>
                <div className="form group mt-3">
                    <button className="btn btn-primary m-2">Add Contact</button>
                    <button className="btn btn-secondary m-2">Clear Fields</button>
                </div>
            </form>
            <div className="m-3">
                <p>Subscriber to be added :</p>
                <div>
                    <label htmlFor="name">Name :- </label>
                    <span>{newEntry.name}</span>
                </div>
                <div>
                    <label htmlFor="name">Phone :- </label>
                    <span>{newEntry.phone}</span>
                </div>

            </div>
            <table className="table table-striped table-bordered mt-4">
                <thead className="bg-success text-white">
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Phone Number</th>
                    </tr>
                </thead>
                <tbody>
                    {phoneDirectory.map((entry) => {
                        return <tr key={entry.id}>
                            <td>{entry.id}</td>
                            <td>{entry.name}</td>
                            <td>{entry.phone}</td>
                            <td><button className="btn btn-danger" onClick={() => handleDelete(entry.id)}>Delete</button></td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default PhoneDirectory;