import Item from "./_03_Item";
import ItemHeader from "./_04_ItemHeader";

function ShowItems() {
    const products = [
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
    return (
        <>   <ItemHeader text="List of Items!" contextColor="primary" textColor="text-white" />
            <div className="container m-3">

                <table className="table table-striped table-bordered">
                    <thead className="table-danger">
                        <tr className="h5 text-center">
                            <th>Sl.No</th>
                            <th>Name</th>
                            <th>ProductId</th>
                            <th>Price</th>
                            <th>Category</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((eachItem, index) => {
                                return <Item key={eachItem.id} slNo={index + 1} item={eachItem} />
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default ShowItems;