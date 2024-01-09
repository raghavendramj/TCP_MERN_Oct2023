import { useEffect, useState } from "react";
import ItemHeader from "./_04_ItemHeader";
import { useParams, useNavigate } from 'react-router-dom';

function Editproduct({ products, setProducts }) {

    const { itemid: productId } = useParams();
    const navigate = useNavigate();

    const [editedProduct, setEditedProduct] = useState({});

    const isSaveDisabled = !editedProduct.name || !editedProduct.price || !editedProduct.category;

    useEffect(() => {
        const productToEdit = products.find((product) => String(product.id) === productId);
        setEditedProduct(productToEdit || {});
        console.log("useEffect is invoked :- productToEdit ", productToEdit);
    }, [productId, products]);


    const handleEditInputChange = (e) => {
        // Update the editedProduct state as the user types the content!
        const { name, value } = e.target;
        setEditedProduct((prevProduct) => ({
            ...prevProduct,
            [name]: value,
        }));
    };

    const handleUpdateProduct = (e) => {
        e.preventDefault();
        let prevProducts = [...products];
        const changedProducts = prevProducts.map((product) =>
            String(product.id) === productId ? editedProduct : product
        )

        // Update the products array with the edited product
        setProducts(changedProducts);

        // Redirect to the product list or any other desired page
        navigate('/items');
    };


    const headerText = `Edit ${productId}`;
    return (
        <>
            <ItemHeader text={headerText} subText="Fill all the product details..." contextColor="warning" textColor="text-dark" />
            <form onSubmit={handleUpdateProduct}>
                <div className="form-group">
                    <label htmlFor="name">Name of the Product?</label>
                    <input type="text" name="name" className="form-control" placeholder="Product Name" value={editedProduct.name} onChange={handleEditInputChange}></input>
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="price">How much would you sell it for?</label>
                    <input type="number" name="price" className="form-control" placeholder="Product Price" value={editedProduct.price} onChange={handleEditInputChange}></input>
                </div>
                <div className="form-group mt-3">
                    <label htmlFor="category">Which category it falls into?</label>
                    <input type="text" name="category" className="form-control" placeholder="Product Category" value={editedProduct.category} onChange={handleEditInputChange}></input>
                </div>
                <div className="form group mt-3">
                    <button className="btn btn-primary m-2" disabled={isSaveDisabled}>Save Changes</button>
                    <button className="btn btn-secondary m-2">Clear Fields</button>
                </div>
            </form>
        </>
    );

}

export default Editproduct;