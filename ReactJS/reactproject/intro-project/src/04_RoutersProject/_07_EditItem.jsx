import { useLocation, useParams } from "react-router-dom";
import ItemHeader from "./_04_ItemHeader";

function EditItem({ currentProduct, products, handleEdit, handleEditInputChange }) {

    console.log("props.currentProduct :- ", currentProduct);

    let { itemid } = useParams();
    let location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const curItem = JSON.parse(decodeURIComponent(queryParams.get('data')));

    console.log("curItem :- ", curItem);
    console.log("products :- ", products);
    if (curItem) {
        currentProduct = { ...curItem };
    }

    console.log("currentProduct :- ", currentProduct);

    const headerText = `Edit ${itemid}`;
    return (
        <>
            <ItemHeader text={headerText} subText="Fill all the product details..." contextColor="warning" textColor="text-dark" />
            <form onSubmit={handleEdit}>
                <div className="form-group">
                    <label htmlFor="name">Name of the Product?</label>
                    <input type="text" name="name" className="form-control" placeholder="Product Name" value={currentProduct.name = curItem.name && currentProduct.name} onChange={handleEditInputChange}></input>
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="price">How much would you sell it for?</label>
                    <input type="number" name="price" className="form-control" placeholder="Product Price" value={currentProduct.price = curItem.price && currentProduct.price} onChange={handleEditInputChange}></input>
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="category">Which category it falls into?</label>
                    <input type="text" name="category" className="form-control" placeholder="Product Category" value={currentProduct.category = curItem.category && currentProduct.category} onChange={handleEditInputChange}></input>
                </div>
                <div className="form group mt-3">
                    <button className="btn btn-primary m-2">Add New Product!</button>
                    <button className="btn btn-secondary m-2">Clear Fields</button>
                </div>
            </form>
        </>
    );

}

export default EditItem;