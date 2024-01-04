import { useState } from "react";
import Item from "./_03_Item";
import ItemHeader from "./_04_ItemHeader";

function ShowItems(props) {
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
                            <th>Operations</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.products.map((eachItem, index) => {
                                return <Item key={eachItem.id} slNo={index + 1} item={eachItem} deleteProduct={props.deleteProduct} />
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default ShowItems;