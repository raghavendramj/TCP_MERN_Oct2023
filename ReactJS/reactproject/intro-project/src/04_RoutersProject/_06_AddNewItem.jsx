import ItemHeader from "./_04_ItemHeader";

function AddNewItem() {
    return (
        <>
            <ItemHeader text="Add New Item!" contextColor="warning" textColor="text-dark" />

            <form>
                <div className="form-group">
                    <label htmlFor="name">Enter Name</label>
                    <input type="text" name="name" className="form-control" placeholder="Enter Name"></input>
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="name">Enter Phone Number</label>
                    <input type="number" name="phone" className="form-control" placeholder="Enter Phone Number" ></input>
                </div>
                <div className="form group mt-3">
                    <button className="btn btn-primary m-2">Add Contact</button>
                    <button className="btn btn-secondary m-2">Clear Fields</button>
                </div>
            </form>
        </>


    );
}

export default AddNewItem;