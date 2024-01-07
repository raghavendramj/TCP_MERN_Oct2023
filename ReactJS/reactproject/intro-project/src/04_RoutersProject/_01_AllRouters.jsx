import { Route, Routes } from "react-router-dom";
import ShowItems from "./_02_ShowItems";
import AddNewItem from "./_06_AddNewItem";
import { useState } from "react";
import EditItem from "./_07_EditItem";
import PageNotFound from "./_08_PNF";

function ItemRouters() {

    const productsArr = [
        {
            "id": 3814,
            "name": "Phone",
            "price": 499.99,
            "category": "Electronics"
        },
        {
            "id": 6927,
            "name": "Shirt",
            "price": 19.99,
            "category": "Clothing"
        },
        {
            "id": 2056,
            "name": "Coffee Maker",
            "price": 79.99,
            "category": "Home and Garden"
        },
        {
            "id": 8492,
            "name": "Running Shoes",
            "price": 89.99,
            "category": "Sports and Outdoors"
        }
    ]

    const [products, setProducts] = useState(productsArr);
    const [newProduct, setNewProduct] = useState({ name: '', price: '', category: '' });
    const [currentProduct, setCurrentProduct] = useState({});

    const handleEntry = (e) => {
        e.preventDefault();
        const newId = products.length + 1;
        setProducts([...products, { id: newId, ...newProduct }]);

        //Clear Form Fields!
        setNewProduct({ name: '', price: '', category: '' });
    }

    //Event Handler!
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        console.log(" e.target :- ", e.target);
        console.log("inputField :- ", name);
        console.log("value :- ", value);
        setNewProduct((prevProduct) => ({ ...prevProduct, [name]: value }))
    }

    //Event Handler!
    const handleEditInputChange = (e) => {        const { name, value } = e.target;
        console.log("handleEditInputChange e.target :- ", e.target);
        console.log("handleEditInputChange inputField :- ", name);
        console.log("handleEditInputChange value :- ", value);
        setNewProduct((prevProduct) => ({ ...prevProduct, [name]: value }))
    }

    const deleteProduct = (product) => {
        console.log("deleteProduct -> ", product);
        let curProds = [...products]; //Take a copy!
        const filteredProds = curProds.filter(each => each.id != product.id);
        setProducts(filteredProds);
    }

    const handleEdit = (e) => {
        e.preventDefault();
        console.log("edited product -> ", e);

        //Clear Form Fields!
        setCurrentProduct({});
    }

    return (
        <Routes>
            <Route path="/items" element={<ShowItems products={products} deleteProduct={deleteProduct} />}></Route>
            <Route path="/add" element={<AddNewItem handleEntry={handleEntry} handleInputChange={handleInputChange} newProd={newProduct} />}></Route>
            <Route path="/item/:itemid" element={<EditItem products={products}
                handleEdit={handleEdit}
                currentProduct={currentProduct}
                setCurrentProduct={setCurrentProduct}
                handleEditInputChange={handleEditInputChange} 
                />}></Route>
            <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
    );
}

export default ItemRouters;