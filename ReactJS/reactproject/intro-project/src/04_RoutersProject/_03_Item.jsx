function Item(props) {
    return (
        <tr className="text-center">
            <td>{props.slNo}</td>
            <td>{props.item.name}</td>
            <td>{props.item.id}</td>
            <td>{props.item.price}</td>
            <td>{props.item.category}</td>
            <td><button className="btn btn-danger" onClick={() => props.deleteProduct(props.item)}>Delete {props.item.name}</button></td>
        </tr>
    );
}

export default Item;