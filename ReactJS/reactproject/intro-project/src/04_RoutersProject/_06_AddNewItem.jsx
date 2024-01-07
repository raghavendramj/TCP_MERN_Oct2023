import ItemHeader from "./_04_ItemHeader";

function AddNewItem(props) { 
    console.log("props.newProd :- ", props.newProd);
    return (
        <>
            <ItemHeader text="Add New Product!" subText="Fill all the product details..." contextColor="warning" textColor="text-dark" />
            <form onSubmit={props.handleEntry}>
                <div className="form-group">
                    <label htmlFor="name">Name of the Product?</label>
                    <input type="text" name="name" className="form-control" placeholder="Product Name" value={props.newProd.name} onChange={props.handleInputChange}></input>
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="price">How much would you sell it for?</label>
                    <input type="number" name="price" className="form-control" placeholder="Product Price" value={props.newProd.price} onChange={props.handleInputChange}></input>
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="category">Which category it falls into?</label>
                    <input type="text" name="category" className="form-control" placeholder="Product Category" value={props.newProd.category} onChange={props.handleInputChange}></input>
                </div>
                <div className="form group mt-3">
                    <button className="btn btn-primary m-2">Add New Product!</button>
                    <button className="btn btn-secondary m-2">Clear Fields</button>
                </div>
            </form>
        </>


    );
}

export default AddNewItem;